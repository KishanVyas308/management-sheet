import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { BACKEND_URL } from '../../Globle';

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

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, [])



   async function handleSubmit(e) {
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
        }
        
        const response = await axios.post(`${BACKEND_URL}/newData/part1`, jsonData);
        setLoading(false);
        alert(response.data.message);
    
    }
  

    return (
        <div style={styles.container}>
            {loading && <Loading />}
            <h2 style={{ textAlign: 'center' }}>Part 1 - SHIPPING BILL DETAILS</h2>
         
                <h3>Section A - Declarant Details</h3>
                <div style={styles.formGroup}>
                    <label htmlFor="exporters-name">Exporter's Name</label>
                    <input type="text" id="exporters-name" name="exporters-name" required style={styles.input} value={exportersName} onChange={(e) => setExportersName(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="exporters-address">Exporter's Address</label>
                    <input type="text" id="exporters-address" name="exporters-address" required style={styles.input} value={exportersAddress} onChange={(e) => setExportersAddress(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="type">Type</label>
                    <input type="text" id="type" name="type" required style={styles.input} value={type} onChange={(e) => setType(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="ad-code">AD CODE</label>
                    <input type="number" id="ad-code" name="ad-code" required style={styles.input} value={adCode} onChange={(e) => setAdCode(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="rbi-waiver-no">RBI WAIVER NO.</label>
                    <input type="text" id="rbi-waiver-no" name="rbi-waiver-no" style={styles.input} value={rbiWaiverNo} onChange={(e) => setRbiWaiverNo(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="rbi-waiver-dt">RBI WAIVER DT</label>
                    <input type="text" id="rbi-waiver-dt" name="rbi-waiver-dt" style={styles.input} value={rbiWaiverDt} onChange={(e) => setRbiWaiverDt(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="cb-name">CB NAME</label>
                    <input type="text" id="cb-name" name="cb-name" style={styles.input} value={cbName} onChange={(e) => setCbName(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="aeo">AEO</label>
                    <input type="text" id="aeo" name="aeo" style={styles.input} value={aeo} onChange={(e) => setAeo(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="consignee-name">Consignee Name</label>
                    <input type="text" id="consignee-name" name="consignee-name" style={styles.input} value={consigneeName} onChange={(e) => setConsigneeName(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="consignee-address">Consignee Address</label>
                    <input type="text" id="consignee-address" name="consignee-address" style={styles.input} value={consigneeAddress} onChange={(e) => setConsigneeAddress(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="gstin-type">GSTIN/TYPE</label>
                    <input type="text" id="gstin-type" name="gstin-type" style={styles.input} value={gstinType} onChange={(e) => setGstinType(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="forex-bank-ac-no">FOREX BANK A/C NO.</label>
                    <input type="number" id="forex-bank-ac-no" name="forex-bank-ac-no" style={styles.input} value={forexBankAcNo} onChange={(e) => setForexBankAcNo(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="dbk-bank-ac-no">DBK BANK A/C NO.</label>
                    <input type="number" id="dbk-bank-ac-no" name="dbk-bank-ac-no" style={styles.input} value={dbkBankAcNo} onChange={(e) => setDbkBankAcNo(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="ifsc-no">IFSC NO.</label>
                    <input type="text" id="ifsc-no" name="ifsc-no" style={styles.input} value={ifscNo} onChange={(e) => setIfscNo(e.target.value)} />
                </div>

                <h3>Section B - Shipping Bill Summary</h3>
                <div style={styles.formGroup}>
                    <label htmlFor="mode">Mode</label>
                    <input type="text" id="mode" name="mode" style={styles.input} value={mode} onChange={(e) => setMode(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="assess">Assess</label>
                    <input type="text" id="assess" name="assess" style={styles.input} value={assess} onChange={(e) => setAssess(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="exmn">EXMN</label>
                    <input type="text" id="exmn" name="exmn" style={styles.input} value={exmn} onChange={(e) => setExmn(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="jobbing">Jobbing</label>
                    <input type="text" id="jobbing" name="jobbing" style={styles.input} value={jobbing} onChange={(e) => setJobbing(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="meis">MEIS</label>
                    <input type="text" id="meis" name="meis" style={styles.input} value={meis} onChange={(e) => setMeis(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="dbk">DBK</label>
                    <input type="text" id="dbk" name="dbk" style={styles.input} value={dbk} onChange={(e) => setDbk(e.target.value)} />
                </div>

                <h3>Section C - Valu Summary</h3>
                <div style={styles.formGroup}>
                    <label htmlFor="fob-value">FOB VALUE</label>
                    <input type="number" step="0.01" id="fob-value" name="fob-value" style={styles.input} value={fobValue} onChange={(e) => setFobValue(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="freight">FREIGHT</label>
                    <input type="number" id="freight" name="freight" style={styles.input} value={freight} onChange={(e) => setFreight(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="insurance">INSURANCE</label>
                    <input type="number" id="insurance" name="insurance" style={styles.input} value={insurance} onChange={(e) => setInsurance(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="discount">DISCOUNT</label>
                    <input type="number" id="discount" name="discount" style={styles.input} value={discount} onChange={(e) => setDiscount(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="commission">COMMISSION</label>
                    <input type="number" id="commission" name="commission" style={styles.input} value={commission} onChange={(e) => setCommission(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="deductions">DEDUCTIONS</label>
                    <input type="number" id="deductions" name="deductions" style={styles.input} value={deductions} onChange={(e) => setDeductions(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="pc">P/C</label>
                    <input type="number" id="pc" name="pc" style={styles.input} value={pc} onChange={(e) => setPc(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="duty">DUTY</label>
                    <input type="text" id="duty" name="duty" style={styles.input} value={duty} onChange={(e) => setDuty(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="cess">CESS</label>
                    <input type="text" id="cess" name="cess" style={styles.input} value={cess} onChange={(e) => setCess(e.target.value)} />
                </div>

                <h3>Section D - EX.PR.</h3>
                <div style={styles.formGroup}>
                    <label htmlFor="dbk-claim">DBK CLAIM</label>
                    <input type="number" id="dbk-claim" name="dbk-claim" style={styles.input} value={dbkClaim} onChange={(e) => setDbkClaim(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="igst-amt">IGST AMT</label>
                    <input type="text" id="igst-amt" name="igst-amt" style={styles.input} value={igstAmt} onChange={(e) => setIgstAmt(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="cess-amt">CESS AMT</label>
                    <input type="text" id="cess-amt" name="cess-amt" style={styles.input} value={cessAmt} onChange={(e) => setCessAmt(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="igst-value">IGST VALUE</label>
                    <input type="number" step="0.01" id="igst-value" name="igst-value" style={styles.input} value={igstValue} onChange={(e) => setIgstValue(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="rodtep-amt">RODTEP AMT</label>
                    <input type="number" id="rodtep-amt" name="rodtep-amt" style={styles.input} value={rodtepAmt} onChange={(e) => setRodtepAmt(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="rosctl-amt">ROSCTL AMT</label> 
                    <input type="number" id="rosctl-amt" name="rosctl-amt" style={styles.input} value={rosctlAmt} onChange={(e) => setRosctlAmt(e.target.value)} />
                </div>

                <h3>Section E - Manifest Details</h3>
                <div style={styles.formGroup}>
                    <label htmlFor="mawb-no">MAWB NO</label>
                    <input type="text" id="mawb-no" name="mawb-no" style={styles.input} value={mawbNo} onChange={(e) => setMawbNo(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="hawb-no">HAWB NO</label>
                    <input type="text" id="hawb-no" name="hawb-no" style={styles.input} value={hawbNo} onChange={(e) => setHawbNo(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="pkgs">PKGS</label>
                    <input type="number" id="pkgs" name="pkgs" style={styles.input} value={pkgs} onChange={(e) => setPkgs(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="gross-weight">GROSS WEIGHT</label>
                    <input type="number" step="0.01" id="gross-weight" name="gross-weight" style={styles.input} value={grossWeight} onChange={(e) => setGrossWeight(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="vol-weight">VOL WEIGHT</label>
                    <input type="number" step="0.01" id="vol-weight" name="vol-weight" style={styles.input} value={volWeight} onChange={(e) => setVolWeight(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="pack-type">PACK TYPE</label>
                    <input type="text" id="pack-type" name="pack-type" style={styles.input} value={packType} onChange={(e) => setPackType(e.target.value)} />
                </div>

                <h3>Section F - AIR & SEA</h3>
                <div style={styles.formGroup}>
                    <label htmlFor="ie-code">IE CODE</label>
                    <input type="text" id="ie-code" name="ie-code" style={styles.input} value={ieCode} onChange={(e) => setIeCode(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="pan">PAN</label>
                    <input type="text" id="pan" name="pan" style={styles.input} value={pan} onChange={(e) => setPan(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="vessel-name">Vessel Name</label>
                    <input type="text" id="vessel-name" name="vessel-name" style={styles.input} value={vesselName} onChange={(e) => setVesselName(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="port-discharge">Port of Discharge</label>
                    <input type="text" id="port-discharge" name="port-discharge" style={styles.input} value={portDischarge} onChange={(e) => setPortDischarge(e.target.value)} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="exch-rate">Exchange Rate</label>
                    <input type="text" id="exch-rate" name="exch-rate" style={styles.input} value={exchRate} onChange={(e) => setExchRate(e.target.value)} />
                </div>

                <button className='p-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 mx-1' onClick={handleSubmit} >
                    submit
                </button>

                <button onClick={() => navigate("/newdata/part2")} className='p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mx-1'> Next</button>

                <button onClick={() => navigate("/")} className='p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mx-1'> Home</button>
        </div>
    );
};

    const styles : any = {
        container: {
            backgroundColor: '#e0f7fa',
            padding: '20px',
            borderRadius: '0px',
            margin: '0',
            fontFamily: 'Arial, sans-serif',
        },
        formGroup: {
            marginBottom: '15px',
        },
        input: {
            width: '100%',
            padding: '10px',
            borderRadius: '16px',
            border: '1px solid #ccc',
        },
        submitButtonContainer: {
            textAlign: 'center',
            marginTop: '20px',
        },
        submitButton: {
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
    };

export default Part1;
