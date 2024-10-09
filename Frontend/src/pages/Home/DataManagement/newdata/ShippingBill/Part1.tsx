import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../../components/Loading";
import { BACKEND_URL } from "../../../../../Globle";
import { useCookies } from "react-cookie";
import InputField from "../../../../components/InputField";
import NewDataHeaderComponent from "../NewDataHeaderComponent";
import NewDataButtons from "../NewDataButtons";
import ShippingBillHeader from "./ShippingBillHeader";

const Part1 = () => {
  const [exportersName, setExportersName] = useState("");
  const [exportersAddress, setExportersAddress] = useState("");
  const [type, setType] = useState("");
  const [adCode, setAdCode] = useState("");
  const [rbiWaiverNo, setRbiWaiverNo] = useState("");
  const [rbiWaiverDt, setRbiWaiverDt] = useState("");
  const [cbName, setCbName] = useState("");
  const [aeo, setAeo] = useState("");
  const [consigneeName, setConsigneeName] = useState("");
  const [consigneeAddress, setConsigneeAddress] = useState("");
  const [gstinType, setGstinType] = useState("");
  const [forexBankAcNo, setForexBankAcNo] = useState("");
  const [dbkBankAcNo, setDbkBankAcNo] = useState("");
  const [ifscNo, setIfscNo] = useState("");
  const [mode, setMode] = useState("");
  const [assess, setAssess] = useState("");
  const [exmn, setExmn] = useState("");
  const [jobbing, setJobbing] = useState("");
  const [meis, setMeis] = useState("");
  const [dbk, setDbk] = useState("");
  const [pkgs, setPkgs] = useState("");
  const [grossWeight, setGrossWeight] = useState("");
  const [volWeight, setVolWeight] = useState("");
  const [packType, setPackType] = useState("");
  const [ieCode, setIeCode] = useState("");
  const [pan, setPan] = useState("");
  const [vesselName, setVesselName] = useState("");
  const [portDischarge, setPortDischarge] = useState("");
  const [exchRate, setExchRate] = useState("");
  const [fobValue, setFobValue] = useState("");
  const [freight, setFreight] = useState("");
  const [insurance, setInsurance] = useState("");
  const [discount, setDiscount] = useState("");
  const [commission, setCommission] = useState("");
  const [deductions, setDeductions] = useState("");
  const [pc, setPc] = useState("");
  const [duty, setDuty] = useState("");
  const [cess, setCess] = useState("");
  const [dbkClaim, setDbkClaim] = useState("");
  const [igstAmt, setIgstAmt] = useState("");
  const [cessAmt, setCessAmt] = useState("");
  const [igstValue, setIgstValue] = useState("");
  const [rodtepAmt, setRodtepAmt] = useState("");
  const [rosctlAmt, setRosctlAmt] = useState("");
  const [mawbNo, setMawbNo] = useState("");
  const [hawbNo, setHawbNo] = useState("");
  const [loading, setLoading] = useState(false);

  const [cookies, setCookie] = useCookies(["token"]);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  async function handleSubmitSection1(e) {
    e.preventDefault();
    setLoading(true);
    const jsonData = {
      exportersName: exportersName,
      exportersAddress: exportersAddress,
      type: type,
      adCode: adCode,
      rbiWaiverNo: rbiWaiverNo,
      rbiWaiverDt: rbiWaiverDt,
      cbName: cbName,
      aeo: aeo,
      consigneeName: consigneeName,
      consigneeAddress: consigneeAddress,
      gstinType: gstinType,
      forexBankAcNo: forexBankAcNo,
      dbkBankAcNo: dbkBankAcNo,
      ifscNo: ifscNo,
      mode: mode,
      assess: assess,
    };

    const response = await axios.post(
      `${BACKEND_URL}/newData/part1section1`,
      jsonData,
      {
        headers: {
          Authorization: cookies.token,
        },
      }
    );
    setLoading(false);
    alert(response.data.message);
  }

  async function handleSubmitSection2(e) {
    e.preventDefault();
    setLoading(true);
    const jsonData = {
      exmn: exmn,
      jobbing: jobbing,
      meis: meis,
      dbk: dbk,
      pkgs: pkgs,
      grossWeight: grossWeight,
      volWeight: volWeight,
      packType: packType,
      ieCode: ieCode,
      pan: pan,
      vesselName: vesselName,
      portDischarge: portDischarge,
      exchRate: exchRate,
      fobValue: fobValue,
      freight: freight,
      insurance: insurance,
    };

    const response = await axios.post(
      `${BACKEND_URL}/newData/part1section2`,
      jsonData,
      {
        headers: {
          Authorization: cookies.token,
        },
      }
    );
    setLoading(false);
    alert(response.data.message);
  }

  async function handleSubmitSection3(e) {
    e.preventDefault();
    setLoading(true);
    const jsonData = {
      discount: discount,
      commission: commission,
      deductions: deductions,
      pc: pc,
      duty: duty,
      cess: cess,
      dbkClaim: dbkClaim,
      igstAmt: igstAmt,
      cessAmt: cessAmt,
      igstValue: igstValue,
      rodtepAmt: rodtepAmt,
      rosctlAmt: rosctlAmt,
      mawbNo: mawbNo,
      hawbNo: hawbNo,
      
    };

    const response = await axios.post(
      `${BACKEND_URL}/newData/part1section3`,
      jsonData,
      {
        headers: {
          Authorization: cookies.token,
        },
      }
    );
    setLoading(false);
    alert(response.data.message);
  }

  return (
    <div className="bg-[#e6e7e9] w-full h-full min-h-screen">
      <div className="container mx-auto px-4 py-8 ">
        {loading && <Loading />}

        <NewDataHeaderComponent
          backLink={"/datamanagement"}
          nextLink={"/datamanagement/newdata/part2"}
        />

        <ShippingBillHeader />

        <div className="container text-center text-green-700 font-sans font-semibold text-[24px]">
        Shipping Bill - Part 1
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-4">
          <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Section 1
            </div>
            <InputField
              label="Exporters Name"
              value={exportersName}
              onChange={(e) => setExportersName(e.target.value)}
            />
            <InputField
              label="Exporters Address"
              value={exportersAddress}
              onChange={(e) => setExportersAddress(e.target.value)}
            />
            <InputField
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <InputField
              label="AD Code"
              value={adCode}
              onChange={(e) => setAdCode(e.target.value)}
            />
            <InputField
              label="RBI Waiver No"
              value={rbiWaiverNo}
              onChange={(e) => setRbiWaiverNo(e.target.value)}
            />
            <InputField
              label="RBI Waiver Date"
              value={rbiWaiverDt}
              onChange={(e) => setRbiWaiverDt(e.target.value)}
            />
            <InputField
              label="CB Name"
              value={cbName}
              onChange={(e) => setCbName(e.target.value)}
            />
            <InputField
              label="AEO"
              value={aeo}
              onChange={(e) => setAeo(e.target.value)}
            />
            <InputField
              label="Consignee Name"
              value={consigneeName}
              onChange={(e) => setConsigneeName(e.target.value)}
            />
            <InputField
              label="Consignee Address"
              value={consigneeAddress}
              onChange={(e) => setConsigneeAddress(e.target.value)}
            />
            <InputField
              label="GSTIN Type"
              value={gstinType}
              onChange={(e) => setGstinType(e.target.value)}
            />
            <InputField
              label="Forex Bank AC No"
              value={forexBankAcNo}
              onChange={(e) => setForexBankAcNo(e.target.value)}
            />
            <InputField
              label="DBK Bank AC No"
              value={dbkBankAcNo}
              onChange={(e) => setDbkBankAcNo(e.target.value)}
            />
            <InputField
              label="IFSC No"
              value={ifscNo}
              onChange={(e) => setIfscNo(e.target.value)}
            />
            <InputField
              label="Mode"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            />
            <InputField
              label="Assess"
              value={assess}
              onChange={(e) => setAssess(e.target.value)}
            />
            <NewDataButtons
              backLink={""}
              nextLink={""}
              handleSubmit={handleSubmitSection1}
            />
          </div>
          <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Section 2
            </div>
            <InputField
              label="Exmn"
              value={exmn}
              onChange={(e) => setExmn(e.target.value)}
            />
            <InputField
              label="Jobbing"
              value={jobbing}
              onChange={(e) => setJobbing(e.target.value)}
            />
            <InputField
              label="Meis"
              value={meis}
              onChange={(e) => setMeis(e.target.value)}
            />
            <InputField
              label="DBK"
              value={dbk}
              onChange={(e) => setDbk(e.target.value)}
            />
            <InputField
              label="Pkgs"
              value={pkgs}
              onChange={(e) => setPkgs(e.target.value)}
            />
            <InputField
              label="Gross Weight"
              value={grossWeight}
              onChange={(e) => setGrossWeight(e.target.value)}
            />
            <InputField
              label="Vol Weight"
              value={volWeight}
              onChange={(e) => setVolWeight(e.target.value)}
            />
            <InputField
              label="Pack Type"
              value={packType}
              onChange={(e) => setPackType(e.target.value)}
            />
            <InputField
              label="IE Code"
              value={ieCode}
              onChange={(e) => setIeCode(e.target.value)}
            />
            <InputField
              label="Pan"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
            />
            <InputField
              label="Vessel Name"
              value={vesselName}
              onChange={(e) => setVesselName(e.target.value)}
            />
            <InputField
              label="Port Discharge"
              value={portDischarge}
              onChange={(e) => setPortDischarge(e.target.value)}
            />
            <InputField
              label="Exch Rate"
              value={exchRate}
              onChange={(e) => setExchRate(e.target.value)}
            />
            <InputField
              label="Fob Value"
              value={fobValue}
              onChange={(e) => setFobValue(e.target.value)}
            />
            <InputField
              label="Freight"
              value={freight}
              onChange={(e) => setFreight(e.target.value)}
            />
            <InputField
              label="Insurance"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
            />
              <NewDataButtons
              backLink={""}
              nextLink={""}
              handleSubmit={handleSubmitSection2}
            />
          </div>
          <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Section 3
            </div>

            <InputField
              label="Discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
            <InputField
              label="Commission"
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
            />
            <InputField
              label="Deductions"
              value={deductions}
              onChange={(e) => setDeductions(e.target.value)}
            />
            <InputField
              label="PC"
              value={pc}
              onChange={(e) => setPc(e.target.value)}
            />
            <InputField
              label="Duty"
              value={duty}
              onChange={(e) => setDuty(e.target.value)}
            />
            <InputField
              label="Cess"
              value={cess}
              onChange={(e) => setCess(e.target.value)}
            />
            <InputField
              label="DBK Claim"
              value={dbkClaim}
              onChange={(e) => setDbkClaim(e.target.value)}
            />
            <InputField
              label="IGST Amt"
              value={igstAmt}
              onChange={(e) => setIgstAmt(e.target.value)}
            />
            <InputField
              label="Cess Amt"
              value={cessAmt}
              onChange={(e) => setCessAmt(e.target.value)}
            />
            <InputField
              label="IGST Value"
              value={igstValue}
              onChange={(e) => setIgstValue(e.target.value)}
            />
            <InputField
              label="Rodtep Amt"
              value={rodtepAmt}
              onChange={(e) => setRodtepAmt(e.target.value)}
            />
            <InputField
              label="Rosctl Amt"
              value={rosctlAmt}
              onChange={(e) => setRosctlAmt(e.target.value)}
            />
            <InputField
              label="Mawb No"
              value={mawbNo}
              onChange={(e) => setMawbNo(e.target.value)}
            />
            <InputField
              label="Hawb No"
              value={hawbNo}
              onChange={(e) => setHawbNo(e.target.value)}
            />

            <NewDataButtons
              backLink={"/datamanagement"}
              nextLink={"/datamanagement/newdata/part2"}
              handleSubmit={handleSubmitSection3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: any = {
  container: {
    backgroundColor: "#e0f7fa",
    padding: "0px",
    borderRadius: "0px",
    margin: "0",
    fontFamily: "Arial, sans-serif",
  },
  formGroup: {
    marginBottom: "5px",
  },

  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "12px",
    border: "1px solid #ccc",
  },
  submitButtonContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Part1;
