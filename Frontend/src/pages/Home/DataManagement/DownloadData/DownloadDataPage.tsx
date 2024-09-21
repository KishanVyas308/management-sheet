import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { BACKEND_URL } from '../../../../Globle';

// model ExcelDataFinal {
//     id                   Int     @id @default(autoincrement())
//     companyName          String
//     srNo                 String
//     shippingBillNo       String
//     shippingBillDate     String?
//     thirdPartyExporter   String?
//     hsCodeAndDescription String?
//     epcgLicNo            String?
//     cifValue             String  @default("0.00")
//     freight              String  @default("0.00")
//     insurance            String  @default("0.00")
//     brc                  String  @default("0.00")
//     exchangeRate         String  @default("0.0000")
//     cifValue2            String  @default("0.00")
//     freight2             String  @default("0.00")
//     insurance2           String  @default("0.00")
//     brc2                 String  @default("0.00")
//     exchangeRate2        String  @default("0.0000")
//     product              String?
//     remarks              String?
//   }

interface ExcelDataFinal {
 id : String;
 companyName : String;
 srNo : String;
 shippingBillNo : String;
 shippingBillDate : String;
 thirdPartyExporter : String;
 hsCodeAndDescription : String;
 epcgLicNo : String;
 cifValue : String;
 freight : String;
 insurance : String;
 brc : String;
 exchangeRate : String;
 cifValue2 : String;
 freight2 : String;
 insurance2 : String;
 brc2 : String;
 exchangeRate2 : String;
 product : String;  
 remarks : String;
}

const DownloadDataPage: React.FC = () => {
  const [data, setData] = useState<ExcelDataFinal[]>([]);

  useEffect(() => {
    // Fetch data from backend API
    axios.get(`${BACKEND_URL}/ex/getall`)
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const columns = React.useMemo(
    () => [
        {Header: 'id', accessor: 'id'},
        {Header: 'Company Name', accessor: 'companyName'},
        {Header: 'SR No', accessor: 'srNo'},
        {Header: 'Shipping Bill No', accessor: 'shippingBillNo'},
        {Header: 'Shipping Bill Date', accessor: 'shippingBillDate'},
        {Header: 'Third Party Exporter', accessor: 'thirdPartyExporter'},
        {Header: 'HS Code and Description', accessor: 'hsCodeAndDescription'},
        {Header: 'EPCG LIC No', accessor: 'epcgLicNo'},
        {Header: 'CIF Value', accessor: 'cifValue'},
        {Header: 'Freight', accessor: 'freight'},
        {Header: 'Insurance', accessor: 'insurance'},
        {Header: 'BRC', accessor: 'brc'},
        {Header: 'Exchange Rate', accessor: 'exchangeRate'},
        {Header: 'CIF Value2', accessor: 'cifValue2'},
        {Header: 'Freight2', accessor: 'freight2'},
        {Header: 'Insurance2', accessor: 'insurance2'},
        {Header: 'BRC2', accessor: 'brc2'},
        {Header: 'Exchange Rate2', accessor: 'exchangeRate2'},
        {Header: 'Product', accessor: 'product'},
        {Header: 'Remarks', accessor: 'remarks'},
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<any>({ columns, data });

  // Function to download the table as a PDF
  const downloadPDF = () => {
    const doc : any = new jsPDF();
    const tableData = data.map(item => [
      item.id, item.companyName, item.srNo, item.shippingBillNo, item.shippingBillDate, item.thirdPartyExporter, item.hsCodeAndDescription, item.epcgLicNo, item.cifValue, item.freight, item.insurance, item.brc, item.exchangeRate, item.cifValue2, item.freight2, item.insurance2, item.brc2, item.exchangeRate2, item.product, item.remarks
    ]);

    doc.autoTable({
      head: [['id', 'Company Name', 'SR No', 'Shipping Bill No', 'Shipping Bill Date', 'Third Party Exporter', 'HS Code and Description', 'EPCG LIC No', 'CIF Value', 'Freight', 'Insurance', 'BRC', 'Exchange Rate', 'CIF Value2', 'Freight2', 'Insurance2', 'BRC2', 'Exchange Rate2', 'Product', 'Remarks']],
      body: tableData,
    });

    doc.save('table-data.pdf');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Excel Data Table</h1>

      {/* Table UI */}
      <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="px-4 py-2 border border-gray-300 text-left">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="px-4 py-2 border border-gray-300">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Button to download PDF */}
      <button
        onClick={downloadPDF}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default DownloadDataPage;
