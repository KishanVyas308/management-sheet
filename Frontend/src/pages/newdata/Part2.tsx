import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../Globle";
import Loading from "../components/Loading";
import { useCookies } from "react-cookie";

const Part2 = () => {
  const [sNo, setSNo] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDt, setInvoiceDt] = useState("");
  const [poNo, setPoNo] = useState("");
  const [poDt, setPoDt] = useState("");
  const [locNo, setLocNo] = useState("");
  const [locDt, setLocDt] = useState("");
  const [contractNo, setContractNo] = useState("");
  const [contractDt, setContractDt] = useState("");
  const [adCode, setAdCode] = useState("");
  const [invTerm, setInvTerm] = useState("");
  const [exporterName, setExporterName] = useState("");
  const [exporterAddress, setExporterAddress] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");
  const [thirdPartyName, setThirdPartyName] = useState("");
  const [thirdPartyAddress, setThirdPartyAddress] = useState("");
  const [buyerAeoStatus, setBuyerAeoStatus] = useState("");
  const [invoiceValue, setInvoiceValue] = useState("");
  const [fobValue, setFobValue] = useState("");
  const [freight, setFreight] = useState("");
  const [insurance, setInsurance] = useState("");
  const [discount, setDiscount] = useState("");
  const [commission, setCommission] = useState("");
  const [deduct, setDeduct] = useState("");
  const [pc, setPc] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [itemSno, setItemSno] = useState("");
  const [hsCd, setHsCd] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [uqc, setUqc] = useState("");
  const [rate, setRate] = useState("");
  const [valueFc, setValueFc] = useState("");
  const [loading, setLoading] = useState(false);

  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const jsonData = {
      sNo: sNo,
      invoiceNo: invoiceNo,
      invoiceDt: invoiceDt,
      poNo: poNo,
      poDt: poDt,
      locNo: locNo,
      locDt: locDt,
      contractNo: contractNo,
      contractDt: contractDt,
      adCode: adCode,
      invTerm: invTerm,
      exporterName: exporterName,
      exporterAddress: exporterAddress,
      buyerName: buyerName,
      buyerAddress: buyerAddress,
      thirdPartyName: thirdPartyName,
      thirdPartyAddress: thirdPartyAddress,
      buyerAeoStatus: buyerAeoStatus,
      invoiceValue: invoiceValue,
      fobValue: fobValue,
      freight: freight,
      insurance: insurance,
      discount: discount,
      commission: commission,
      deduct: deduct,
      pc: pc,
      exchangeRate: exchangeRate,
      itemSno: itemSno,
      hsCd: hsCd,
      description: description,
      quantity: quantity,
      uqc: uqc,
      rate: rate,
      valueFc: valueFc,
    };
    console.log(jsonData);
    const response = await axios.post(`${BACKEND_URL}/newData/part2`, jsonData, {
      headers: {
          "Authorization": cookies.token,
      }
  });
    setLoading(false);
    alert(response.data.message);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.container}>
      {loading && <Loading />}
      <h2 style={{ textAlign: "center" }}>Part 2 - INVOICE DETAILS</h2>

      <h3>Section A - Ref</h3>
      <div style={styles.formGroup}>
        <label htmlFor="s-no">S.No</label>
        <input
          type="number"
          id="s-no"
          name="s-no"
          required
          style={styles.input}
          value={sNo}
          onChange={(e) => setSNo(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="invoice-no">INVOICE No.</label>
        <input
          type="text"
          id="invoice-no"
          name="invoice-no"
          required
          style={styles.input}
          value={invoiceNo}
          onChange={(e) => setInvoiceNo(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="invoice-dt">INVOICE Dt.</label>
        <input
          type="date"
          id="invoice-dt"
          name="invoice-dt"
          required
          style={styles.input}
          value={invoiceDt}
          onChange={(e) => setInvoiceDt(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="po-no">P.O.No.</label>
        <input
          type="text"
          id="po-no"
          required
          style={styles.input}
          value={poNo}
          onChange={(e) => setPoNo(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="po-dt">P.O. Dt</label>
        <input
          type="text"
          id="po-dt"
          name="po-dt"
          required
          style={styles.input}
          value={poDt}
          onChange={(e) => setPoDt(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="loc-no">LoC No.</label>
        <input
          type="text"
          id="loc-no"
          name="loc-no"
          required
          style={styles.input}
          value={locNo}
          onChange={(e) => setLocNo(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="loc-dt">LoC Dt</label>
        <input
          type="text"
          id="loc-dt"
          name="loc-dt"
          required
          style={styles.input}
          value={locDt}
          onChange={(e) => setLocDt(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="contract-no">Contract No.</label>
        <input
          type="text"
          id="contract-no"
          name="contract-no"
          required
          style={styles.input}
          value={contractNo}
          onChange={(e) => setContractNo(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="contract-dt">Contract Dt</label>
        <input
          type="text"
          id="contract-dt"
          name="contract-dt"
          required
          style={styles.input}
          value={contractDt}
          onChange={(e) => setContractDt(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="ad-code">AD code</label>
        <input
          type="number"
          id="ad-code"
          name="ad-code"
          required
          style={styles.input}
          value={adCode}
          onChange={(e) => setAdCode(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="invterm">INVTERM</label>
        <input
          type="text"
          id="invterm"
          name="invterm"
          required
          style={styles.input}
          value={invTerm}
          onChange={(e) => setInvTerm(e.target.value)}
        />
      </div>

      <h3>Section B - Transaction Parties</h3>
      <div style={styles.formGroup}>
        <label htmlFor="exporter-name">EXPORTER'S NAME</label>
        <input
          type="text"
          id="exporter-name"
          name="exporter-name"
          required
          style={styles.input}
          value={exporterName}
          onChange={(e) => setExporterName(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="exporter-address">EXPORTER'S ADDRESS</label>
        <input
          type="text"
          id="exporter-address"
          name="exporter-address"
          required
          style={styles.input}
          value={exporterAddress}
          onChange={(e) => setExporterAddress(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="buyer-name">BUYER'S NAME</label>
        <input
          type="text"
          id="buyer-name"
          name="buyer-name"
          required
          style={styles.input}
          value={buyerName}
          onChange={(e) => setBuyerName(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="buyer-address">BUYER'S ADDRESS</label>
        <input
          type="text"
          id="buyer-address"
          name="buyer-address"
          required
          style={styles.input}
          value={buyerAddress}
          onChange={(e) => setBuyerAddress(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="third-party-name">THIRD PARTY NAME</label>
        <input
          type="text"
          id="third-party-name"
          name="third-party-name"
          required
          style={styles.input}
          value={thirdPartyName}
          onChange={(e) => setThirdPartyName(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="third-party-address">THIRD PARTY ADDRESS</label>
        <input
          type="text"
          id="third-party-address"
          name="third-party-address"
          required
          style={styles.input}
          value={thirdPartyAddress}
          onChange={(e) => setThirdPartyAddress(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="buyer-aeo-status">BUYER AEO STATUS</label>
        <input
          type="text"
          id="buyer-aeo-status"
          name="buyer-aeo-status"
          required
          style={styles.input}
          value={buyerAeoStatus}
          onChange={(e) => setBuyerAeoStatus(e.target.value)}
        />
      </div>

      <h3>Section C - Val Dtls</h3>
      <div style={styles.formGroup}>
        <label htmlFor="invoice-value">INVOICE VALUE</label>
        <input
          type="number"
          id="invoice-value"
          name="invoice-value"
          required
          style={styles.input}
          value={invoiceValue}
          onChange={(e) => setInvoiceValue(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="fob-value">FOB VALUE</label>
        <input
          type="number"
          step="0.01"
          id="fob-value"
          name="fob-value"
          required
          style={styles.input}
          value={fobValue}
          onChange={(e) => setFobValue(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="freight">FREIGHT</label>
        <input
          type="number"
          id="freight"
          name="freight"
          required
          style={styles.input}
          value={freight}
          onChange={(e) => setFreight(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="insurance">INSURANCE</label>
        <input
          type="number"
          id="insurance"
          name="insurance"
          required
          style={styles.input}
          value={insurance}
          onChange={(e) => setInsurance(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="discount">DISCOUNT</label>
        <input
          type="number"
          id="discount"
          name="discount"
          required
          style={styles.input}
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="commission">COMMISION</label>
        <input
          type="number"
          id="commission"
          name="commission"
          required
          style={styles.input}
          value={commission}
          onChange={(e) => setCommission(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="deduct">DEDUCT</label>
        <input
          type="number"
          id="deduct"
          name="deduct"
          required
          style={styles.input}
          value={deduct}
          onChange={(e) => setDeduct(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="pc">P/C</label>
        <input
          type="text"
          id="pc"
          name="pc"
          required
          style={styles.input}
          value={pc}
          onChange={(e) => setPc(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="exchange-rate">EXCHANGE RATE</label>
        <input
          type="text"
          id="exchange-rate"
          name="exchange-rate"
          required
          style={styles.input}
          value={exchangeRate}
          onChange={(e) => setExchangeRate(e.target.value)}
        />
      </div>

      <h3>Section D - Item Details</h3>
      <div style={styles.formGroup}>
        <label htmlFor="item-sno">Item S/No</label>
        <input
          type="number"
          id="item-sno"
          name="item-sno"
          required
          style={styles.input}
          value={itemSno}
          onChange={(e) => setItemSno(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="hs-cd">HS CD</label>
        <input
          type="number"
          id="hs-cd"
          name="hs-cd"
          required
          style={styles.input}
          value={hsCd}
          onChange={(e) => setHsCd(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="description">DESCRIPTION</label>
        <input
          type="text"
          id="description"
          name="description"
          required
          style={styles.input}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="quantity">QUANTITY</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          required
          style={styles.input}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="uqc">UQC</label>
        <input
          type="text"
          id="uqc"
          name="uqc"
          required
          style={styles.input}
          value={uqc}
          onChange={(e) => setUqc(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="rate">RATE</label>
        <input
          type="number"
          id="rate"
          name="rate"
          required
          style={styles.input}
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="value-fc">VALUE(F/C)</label>
        <input
          type="number"
          id="value-fc"
          name="value-fc"
          required
          style={styles.input}
          value={valueFc}
          onChange={(e) => setValueFc(e.target.value)}
        />
      </div>
      <button className="p-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 mx-1" onClick={handleSubmit}>
        submit
      </button>

      <button onClick={() => navigate("/newdata/part1")} className='p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mx-1'> Back</button>

      <button
        onClick={() => navigate("/newdata/part3")}
        className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mx-1"
      >
        Next
      </button>

      <button onClick={() => navigate("/")} className='p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mx-1'> Home</button>
    </div>
  );
};

const styles: any = {
  container: {
    backgroundColor: "#e0f7fa",
    padding: "20px",
    borderRadius: "8px",
    margin: "0",
    fontFamily: "Arial, sans-serif",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
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

export default Part2;
