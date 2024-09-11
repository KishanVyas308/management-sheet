import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../Globle";
import Loading from "../components/Loading";
import { useCookies } from "react-cookie";

const Part3 = () => {
  const [invsn, setInvsn] = useState("");
  const [itemsn, setItemsn] = useState("");
  const [hsCd, setHsCd] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [uqc, setUqc] = useState("");
  const [rate, setRate] = useState("");
  const [valueFc, setValueFc] = useState("");
  const [fobInr, setFobInr] = useState("");
  const [pmv, setPmv] = useState("");
  const [dutyAmt, setDutyAmt] = useState("");
  const [cessRt, setCessRt] = useState("");
  const [cesamt, setCesamt] = useState("");
  const [dbkclmd, setDbkclmd] = useState("");
  const [igststat, setIgststat] = useState("");
  const [igstValue, setIgstValue] = useState("");
  const [igstAmount, setIgstAmount] = useState("");
  const [schcod, setSchcod] = useState("");
  const [schemeDescription, setSchemeDescription] = useState("");
  const [sqcMsr, setSqcMsr] = useState("");
  const [sqcUqc, setSqcUqc] = useState("");
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [districtOfOrigin, setDistrictOfOrigin] = useState("");
  const [ptAbroad, setPtAbroad] = useState("");
  const [compCess, setCompCess] = useState("");
  const [endUse, setEndUse] = useState("");
  const [ftaBenefitAvailed, setFtaBenefitAvailed] = useState("");
  const [rewardBenefit, setRewardBenefit] = useState("");
  const [thirdPartyItem, setThirdPartyItem] = useState("");
  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies(["token"]);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const jsonData = {
      invsn: invsn,
      itemsn: itemsn,
      hsCd: hsCd,
      description: description,
      quantity: quantity,
      uqc: uqc,
      rate: rate,
      valueFc: valueFc,
      fobInr: fobInr,
      pmv: pmv,
      dutyAmt: dutyAmt,
      cessRt: cessRt,
      cesamt: cesamt,
      dbkclmd: dbkclmd,
      igststat: igststat,
      igstValue: igstValue,
      igstAmount: igstAmount,
      schcod: schcod,
      schemeDescription: schemeDescription,
      sqcMsr: sqcMsr,
      sqcUqc: sqcUqc,
      stateOfOrigin: stateOfOrigin,
      districtOfOrigin: districtOfOrigin,
      ptAbroad: ptAbroad,
      compCess: compCess,
      endUse: endUse,
      ftaBenefitAvailed: ftaBenefitAvailed,
      rewardBenefit: rewardBenefit,
      thirdPartyItem: thirdPartyItem,
    };
    const response = await axios.post(`${BACKEND_URL}/newdata/part3`, jsonData, {
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
      <h2 style={{ textAlign: "center" }}>Part 3 - ITEM DETAILS</h2>

      <h3>Invoice</h3>
      <div style={styles.formGroup}>
        <label htmlFor="invsn">INVSN</label>
        <input
          type="number"
          id="invsn"
          name="invsn"
          required
          style={styles.input}
          value={invsn}
          onChange={(e) => setInvsn(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="itemsn">ITEMSN</label>
        <input
          type="number"
          id="itemsn"
          name="itemsn"
          required
          style={styles.input}
          value={itemsn}
          onChange={(e) => setItemsn(e.target.value)}
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
          type="number"
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
      <div style={styles.formGroup}>
        <label htmlFor="fob-inr">FOB(INR)</label>
        <input
          type="number"
          id="fob-inr"
          name="fob-inr"
          required
          style={styles.input}
          value={fobInr}
          onChange={(e) => setFobInr(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="pmv">PMV</label>
        <input
          type="number"
          id="pmv"
          name="pmv"
          required
          style={styles.input}
          value={pmv}
          onChange={(e) => setPmv(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="duty-amt">DUTY AMT</label>
        <input
          type="number"
          id="duty-amt"
          name="duty-amt"
          required
          style={styles.input}
          value={dutyAmt}
          onChange={(e) => setDutyAmt(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="cess-rt">CESS RT</label>
        <input
          type="number"
          id="cess-rt"
          name="cess-rt"
          required
          style={styles.input}
          value={cessRt}
          onChange={(e) => setCessRt(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="cesamt">CESAMT</label>
        <input
          type="number"
          id="cesamt"
          name="cesamt"
          required
          style={styles.input}
          value={cesamt}
          onChange={(e) => setCesamt(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="dbkclmd">DBKCLMD</label>
        <input
          type="number"
          id="dbkclmd"
          name="dbkclmd"
          required
          style={styles.input}
          value={dbkclmd}
          onChange={(e) => setDbkclmd(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="igststat">IGSTSTAT</label>
        <input
          type="number"
          id="igststat"
          name="igststat"
          required
          style={styles.input}
          value={igststat}
          onChange={(e) => setIgststat(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="igst-value">IGST VALUE</label>
        <input
          type="number"
          step="0.01"
          id="igst-value"
          name="igst-value"
          required
          style={styles.input}
          value={igstValue}
          onChange={(e) => setIgstValue(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="igst-amount">IGST AMOUNT</label>
        <input
          type="number"
          id="igst-amount"
          name="igst-amount"
          required
          style={styles.input}
          value={igstAmount}
          onChange={(e) => setIgstAmount(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="schcod">SCHCOD</label>
        <input
          type="number"
          id="schcod"
          name="schcod"
          required
          style={styles.input}
          value={schcod}
          onChange={(e) => setSchcod(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="scheme-description">SCHEME DESCRIPTION</label>
        <input
          type="text"
          id="scheme-description"
          name="scheme-description"
          required
          style={styles.input}
          value={schemeDescription}
          onChange={(e) => setSchemeDescription(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="sqc-msr">SQC MSR</label>
        <input
          type="number"
          id="sqc-msr"
          name="sqc-msr"
          required
          style={styles.input}
          value={sqcMsr}
          onChange={(e) => setSqcMsr(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="sqc-uqc">SQC UQC</label>
        <input
          type="text"
          id="sqc-uqc"
          name="sqc-uqc"
          required
          style={styles.input}
          value={sqcUqc}
          onChange={(e) => setSqcUqc(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="state-of-origin">STATE OF ORIGIN</label>
        <input
          type="text"
          id="state-of-origin"
          name="state-of-origin"
          required
          style={styles.input}
          value={stateOfOrigin}
          onChange={(e) => setStateOfOrigin(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="district-of-origin">DISTRICT OF ORIGIN</label>
        <input
          type="text"
          id="district-of-origin"
          name="district-of-origin"
          required
          style={styles.input}
          value={districtOfOrigin}
          onChange={(e) => setDistrictOfOrigin(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="pt-abroad">PT Abroad</label>
        <input
          type="text"
          id="pt-abroad"
          name="pt-abroad"
          required
          style={styles.input}
          value={ptAbroad}
          onChange={(e) => setPtAbroad(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="comp-cess">COMP CESS</label>
        <input
          type="text"
          id="comp-cess"
          name="comp-cess"
          required
          style={styles.input}
          value={compCess}
          onChange={(e) => setCompCess(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="end-use">END USE</label>
        <input
          type="text"
          id="end-use"
          name="end-use"
          required
          style={styles.input}
          value={endUse}
          onChange={(e) => setEndUse(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="fta-benefit-availed">FTA BENEFIT AVAILED</label>
        <input
          type="text"
          id="fta-benefit-availed"
          name="fta-benefit-availed"
          required
          style={styles.input}
          value={ftaBenefitAvailed}
          onChange={(e) => setFtaBenefitAvailed(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="reward-benefit">REWARD BENEFIT</label>
        <input
          type="text"
          id="reward-benefit"
          name="reward-benefit"
          required
          style={styles.input}
          value={rewardBenefit}
          onChange={(e) => setRewardBenefit(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="third-party-item">THIRD PARTY ITEM</label>
        <input
          type="text"
          id="third-party-item"
          name="third-party-item"
          required
          style={styles.input}
          value={thirdPartyItem}
          onChange={(e) => setThirdPartyItem(e.target.value)}
        />
      </div>
      <button className="p-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 mx-1" onClick={handleSubmit}>
        submit
      </button>
      <button className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mx-1" onClick={() => navigate("/newdata/part2")}>
        Back
      </button>
      <button
        onClick={() => navigate("/newdata/part4")}
        className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mx-1"
      >
        Next
      </button>


      <button
        onClick={() => navigate("/")}
        className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mx-1"
      >
        {" "}
        Home
      </button>
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

export default Part3;
