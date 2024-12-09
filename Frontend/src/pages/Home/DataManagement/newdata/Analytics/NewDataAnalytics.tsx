import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../../../../Globle';
import { useCookies } from 'react-cookie';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import NewDataHeaderComponent from '../NewDataHeaderComponent';
import Loading from '../../../../components/Loading';

const NewDataAnalytics = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [data, setData] = useState<any>([]);
    const [exportType, setExportType] = useState('direct'); // 'direct' or 'indirect'
    const [loading, setLoading] = useState(false);

    const [cookies] = useCookies(['token']);

    const fetchData = async () => {
        try {
            setLoading(true);
            const endpoint = exportType === 'direct' ? 'directexport-data-on-date' : 'indirectexport-data-on-date';
            const res = await axios.get(`${BACKEND_URL}/dataAnalytics/${endpoint}`, {
                params: {
                    startDate,
                    endDate,
                },
                headers: {
                    Authorization: cookies.token,
                },
            });
            console.log(res.data);
            
            if (res.data.selectDateError) {
                alert(res.data.selectDateError);
            }
            else if (res.data.length === 0) {
                alert('No data found');
            }
            setLoading(false);
            setData(Array.isArray(res.data) ? res.data : []);
        } catch (err) {
            setLoading(false);
            console.error('Error fetching data', err);
        }
    };

    const generatePDF = () => {
        const doc: any = new jsPDF();
        doc.autoTable({
            head: [['ID', 'Sr No', 'Shipping Bill No', 'Shipping Bill Date', 'Uploaded Date']],
            body: data.map(item => [item.id, item.srNo, item.shippingBillNo, item.shippingBillDate, (item.uploadedDate).split('T')[0]]),
        });
        doc.save('Analytics.pdf');
    };

    const generateExcel = () => {
        // update date format spit at 'T' and take first part
        data.forEach(item => {
            item.uploadedDate = (item.uploadedDate).split('T')[0];
        }
        );
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
        XLSX.writeFile(workbook, 'Analytics.xlsx');
    };

    return (
        <div className="bg-[#e6e7e9] w-full h-full min-h-screen">
            <div className="container mx-auto px-4 py-8 ">
                {loading && <Loading />}
                <NewDataHeaderComponent
                    backLink={"/datamanagement"}
                    nextLink={"/datamanagement/newdata/part2"}
                />
                <div className="container text-center text-green-700 font-sans font-semibold text-[24px]">
                    Data Analytics
                </div>
                <h1 className="text-2xl mb-4">Filter Data</h1>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="date"
                        className="border p-2"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        placeholder="Start Date"
                    />
                    <input
                        type="date"
                        className="border p-2"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        placeholder="End Date"
                    />
                    <select
                        className="border p-2"
                        value={exportType}
                        onChange={(e) => setExportType(e.target.value)}
                    >
                        <option value="direct">Direct Export</option>
                        <option value="indirect">Indirect Export</option>
                    </select>
                </div>
                <button
                    onClick={fetchData}
                    className="bg-green-500 text-white p-2 mt-4"
                >
                    Fetch Data
                </button>
                <button
                    onClick={generatePDF}
                    className="bg-blue-500 text-white p-2 mt-4 ml-2"
                >
                    Generate PDF
                </button>
                <button
                    onClick={generateExcel}
                    className="bg-yellow-500 text-white p-2 mt-4 ml-2"
                >
                    Generate Excel
                </button>

                <table className="table-auto mt-4 w-full border-collapse border border-gray-400 bg-white">
                    <thead>
                        <tr className="bg-white">
                            <th className="border px-4 py-2 border-gray-400">ID</th>
                            <th className="border px-4 py-2 border-gray-400">Sr No</th>
                            <th className="border px-4 py-2 border-gray-400">Shipping Bill No</th>
                            <th className="border px-4 py-2 border-gray-400">Shipping Bill Date</th>
                            <th className="border px-4 py-2 border-gray-400">Uploaded Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: any) => (
                            <tr key={item.id} className="hover:bg-gray-100">
                                <td className="border px-4 py-2 border-gray-400">{item.id}</td>
                                <td className="border px-4 py-2 border-gray-400">{item.srNo}</td>
                                <td className="border px-4 py-2 border-gray-400">{item.shippingBillNo}</td>
                                <td className="border px-4 py-2 border-gray-400">{item.shippingBillDate}</td>
                                <td className="border px-4 py-2 border-gray-400">{(item.uploadedDate).split('T')[0]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewDataAnalytics;
