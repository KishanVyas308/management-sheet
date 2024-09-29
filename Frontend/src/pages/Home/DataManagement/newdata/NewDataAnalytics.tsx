import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../../../Globle';
import { useCookies } from 'react-cookie';

const NewDataAnalytics = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const [data, setData] = useState([]);

    const [cookies, setCookie] = useCookies(['token']);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${BACKEND_URL}/dataAnalytics/data`,  {
                params: {
                    startDate,
                    endDate,
                    name,
                    type,
                    minValue,
                    maxValue,
                },
                headers: {
                    Authorization: cookies.token,
                },
            });
            setData(res.data);
        } catch (err) {
            console.error('Error fetching data', err);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Filter Data</h1>
            <div className="grid grid-cols-2 gap-4">
                {/* <input
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
                /> */}
                <input
                    type="text"
                    className="border p-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Exporter Name"
                />
                <input
                    type="text"
                    className="border p-2"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="Type"
                />
                
            </div>
            <button
                onClick={fetchData}
                className="bg-green-500 text-white p-2 mt-4"
            >
                Fetch Data
            </button>

            <table className="table-auto mt-4 w-full">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Type</th>
                        <th className="border px-4 py-2">adCode</th>
                        <th className="border px-4 py-2">ifscNo</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item : any) => (
                        <tr key={item.id}>
                            <td className="border px-4 py-2">{item.id}</td>
                            <td className="border px-4 py-2">{item.exportersName}</td>
                            <td className="border px-4 py-2">{item.type}</td>
                            <td className="border px-4 py-2">{(item.adCode)}</td>
                            <td className="border px-4 py-2">{(item.ifscNo)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NewDataAnalytics;
