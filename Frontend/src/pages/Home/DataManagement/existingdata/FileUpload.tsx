import React, { useEffect, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import Loading from "../../../components/Loading";
import { BACKEND_URL } from "../../../../Globle";
import { Cookies, useCookies } from "react-cookie";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [startLine, setStartLine] = useState("");
  const [endLine, setEndLine] = useState("");
  const [uploadAll, setUploadAll] = useState(true);
  const [sheetNames, setSheetNames] = useState<any>([]);
  const [selectedSheetName, setSelectedSheetName] = useState("");
  const [sheetData, setSheetData] = useState<any>([]);

  const [cookies, setCookie] = useCookies(["token"]);

  const [loading, setLoading] = useState(false);

 const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event.target!.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });

        // Extract sheet names
        const sheets = workbook.SheetNames;
        setSheetNames(sheets);

        // Automatically select the first sheet and read its data
        if (sheets.length > 0) {
          const firstSheet = workbook.Sheets[sheets[0]];
          const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: "A" });
          setSheetData(jsonData);
          setSelectedSheetName(sheets[0]);
        }
      };
      reader.readAsArrayBuffer(selectedFile);
    }
  };


  const handleSheetSelection = (sheetName) => {
    setSelectedSheetName(sheetName);

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target!.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });

      // Get data for selected sheet
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: "A" });

      setSheetData(jsonData);
    };
    reader.readAsArrayBuffer(file!);
  };

  const handleToggleChange = () => {
    setUploadAll(!uploadAll);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || (!uploadAll && (!startLine || !endLine))) {
      alert("Please fill in all fields");
      return;
    }

    if (!uploadAll && Number(startLine) > Number(endLine)) {
      alert("Enter a valid starting and ending number");
      return;
    }

    if (!uploadAll && Number(startLine) <= 0) {
      alert("Invalid row number");
      return;
    }

    if (selectedSheetName === "") {
      alert("Select a sheet");
      return;
    }

    // Adjust startLine and endLine for 0-based index
    let start = uploadAll ? 7 : Number(startLine);
    let end = uploadAll ? sheetData.length : Number(endLine);

    if (start >= end || end > sheetData.length) {
      alert("Invalid range specified");
      return;
    }

    const range = getExcelCellRange(start, end);
    const reader = new FileReader();

    reader.onload = async (event) => {
      const data = new Uint8Array(event.target!.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[selectedSheetName];

      const sheetJsonData = XLSX.utils.sheet_to_json(worksheet, {
        range: range,
        skipHidden: false,
        header: "A",
      });

      if (sheetJsonData.length === 0) {
        alert("No data found in the specified range");
        return;
      }

      setLoading(true);
      const formData = new FormData();
      formData.append("sheetJsonData", JSON.stringify(sheetJsonData));
      formData.append("companyName", sheetData[0]["A"]); // Assuming company name is in the first cell

      try {
        const response = await axios.post(`${BACKEND_URL}/ex/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": cookies.token as string,
          },
        });
        setLoading(false);
        alert(response.data.message);
        
      } catch (error) {
        setLoading(false);
        alert("Failed to upload data");
      }
    };

    reader.readAsArrayBuffer(file);
  };


  const getExcelCellRange = (startRow, endRow) => {
    const startCell = `A${startRow}`;
    const endCell = `R${endRow}`; // Adjust 'R' based on your sheet's last column
    return `${startCell}:${endCell}`;
  };

  const handleStartLineChange = (e) => {
    setStartLine(e.target.value);
  };

  const handleEndLineChange = (e) => {
    setEndLine(e.target.value);
  };

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [])


    return (
      <div className="file-upload-container mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
        {loading && <Loading />}
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Upload Excel File
        </h1>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Excel File:
            </label>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100
                "
            />
          </div>

          {sheetNames.length > 0 && (
            <div>
              <h2 className="text-lg font-medium text-gray-700 mb-2">
                Select a Sheet
              </h2>
              <div className="flex flex-wrap gap-4">
                {sheetNames.map((sheetName) => (
                  <button
                    key={sheetName}
                    type="button"
                    onClick={() => handleSheetSelection(sheetName)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                  >
                    {sheetName}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center space-x-4">
            <label className="block text-gray-700 font-medium mb-2">
              Upload All Rows
            </label>
            <input
              type="checkbox"
              checked={uploadAll}
              onChange={handleToggleChange}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>

          {!uploadAll && (
            <>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Start Line:
                </label>
                <input
                  type="number"
                  value={startLine}
                  onChange={handleStartLineChange}
                  className="w-full border rounded-md px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter start line"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  End Line:
                </label>
                <input
                  type="number"
                  value={endLine}
                  onChange={handleEndLineChange}
                  className="w-full border rounded-md px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter end line"
                />
              </div>
            </>
          )}

          <button
            onClick={handleSubmit}
            className="w-[200px] bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          >
            Upload
          </button>

          {selectedSheetName && (
            <div className="mt-6 overflow-auto">
              <h2 className="text-lg font-medium text-gray-700 mb-2">
                Data from {selectedSheetName}
              </h2>
              <table className="min-w-full divide-y divide-gray-200 border">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      id
                    </th>
                    {Object.keys(sheetData[7] || {}).map((key) => (
                      <th
                        key={key}
                        className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                      >
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sheetData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-2 px-4 text-sm text-gray-900 border-b">
                        {index + 1}
                      </td>
                      {Object.values(row).map((value, i) : any => (
                        <td
                          key={i}
                          className="py-2 px-4 text-sm text-gray-900 border-b"
                        >
                          {
                            value ? value as string : "-"
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default FileUpload;