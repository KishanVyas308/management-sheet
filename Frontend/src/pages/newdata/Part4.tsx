import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../Globle";
import Loading from "../components/Loading";

const Part4 = () => {
  const [invSno, setInvSno] = useState("");
  const [itemsn, setItemsn] = useState("");
  const [dbkSno, setDbkSno] = useState("");
  const [qtyWt, setQtyWt] = useState("");
  const [value, setValue] = useState("");
  const [rate, setRate] = useState("");
  const [dbkAmt, setDbkAmt] = useState("");
  const [stalev, setStalev] = useState("");
  const [cenlev, setCenlev] = useState("");
  const [rosctlAmt, setRosctlAmt] = useState("");
  const [invSnoB, setInvSnoB] = useState("");
  const [itemSnoB, setItemSnoB] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [descnExportItem, setDescnExportItem] = useState("");
  const [expSno, setExpSno] = useState("");
  const [expqty, setExpqty] = useState("");
  const [uqc, setUqc] = useState("");
  const [fobValue, setFobValue] = useState("");
  const [sion, setSion] = useState("");
  const [descnImportItem, setDescnImportItem] = useState("");
  const [impSno, setImpSno] = useState("");
  const [impqt, setImpqt] = useState("");
  const [uqcB, setUqcB] = useState("");
  const [indigImp, setIndigImp] = useState("");
  const [beNo, setBeNo] = useState("");
  const [beDate, setBeDate] = useState("");
  const [portCode, setPortCode] = useState("");
  const [descnImportedGoods, setDescnImportedGoods] = useState("");
  const [qtyImp, setQtyImp] = useState("");
  const [qtyUsed, setQtyUsed] = useState("");
  const [invsn, setInvsn] = useState("");
  const [itmsn, setItmsn] = useState("");
  const [info, setInfo] = useState("");
  const [qualifier, setQualifier] = useState("");
  const [infoCd, setInfoCd] = useState("");
  const [infoText, setInfoText] = useState("");
  const [infoMsr, setInfoMsr] = useState("");

  const [itmsno, setItmsno] = useState("");
  const [cSno, setCSno] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [percentage, setPercentage] = useState("");
  const [yieldPct, setYieldPct] = useState("");
  const [ing, setIng] = useState("");
  const [controlType, setControlType] = useState("");
  const [location, setLocation] = useState("");
  const [stDt, setStDt] = useState("");
  const [endDt, setEndDt] = useState("");
  const [resCd, setResCd] = useState("");
  const [resText, setResText] = useState("");
  const [doctypcd, setDoctypcd] = useState("");
  const [icegateId, setIcegateId] = useState("");
  const [irn, setIrn] = useState("");
  const [partyCd, setPartyCd] = useState("");
  const [issuePla, setIssuePla] = useState("");
  const [issDt, setIssDt] = useState("");
  const [expDt, setExpDt] = useState("");
  const [sno, setSno] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceAmount, setInvoiceAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [container, setContainer] = useState("");
  const [seal, setSeal] = useState("");
  const [date, setDate] = useState("");

  const [ar4Number, setAr4Number] = useState("");
  const [ar4Date, setAr4Date] = useState("");
  const [commissionerate, setCommissionerate] = useState("");
  const [division, setDivision] = useState("");
  const [range, setRange] = useState("");

  const [iec, setIec] = useState("");
  const [exporterName, setExporterName] = useState("");
  const [address, setAddress] = useState("");
  const [gstnId, setGstnId] = useState("");
  const [gstnType, setGstnType] = useState("");

  const [type, setType] = useState("");
  const [manufactCd, setManufactCd] = useState("");
  const [sourceState, setSourceState] = useState("");
  const [transCy, setTransCy] = useState("");
  const [invs, setInvs] = useState("");

  const [quantity, setQuantity] = useState("");
  const [noOfUnits, setNoOfUnits] = useState("");

  const [beSiteId, setBeSiteId] = useState("");
  const [beNumber, setBeNumber] = useState("");

  const [beInvSno, setBeInvSno] = useState("");
  const [beItemS, setBeItemS] = useState("");
  const [beQty, setBeQty] = useState("");
  const [beUqc, setBeUqc] = useState("");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const jsonData = {
      invSno: invSno,
      itemsn: itemsn,
      dbkSno: dbkSno,
      qtyWt: qtyWt,
      value: value,
      rate: rate,
      dbkAmt: dbkAmt,
      stalev: stalev,
      cenlev: cenlev,
      rosctlAmt: rosctlAmt,
      invSnoB: invSnoB,
      itemSnoB: itemSnoB,
      licenseNo: licenseNo,
      descnExportItem: descnExportItem,
      expSno: expSno,
      expqty: expqty,
      uqc: uqc,
      fobValue: fobValue,
      sion: sion,
      descnImportItem: descnImportItem,
      impSno: impSno,
      impqt: impqt,
      uqcB: uqcB,
      indigImp: indigImp,
      beNo: beNo,
      beDate: beDate,
      portCode: portCode,
      descnImportedGoods: descnImportedGoods,
      qtyImp: qtyImp,
      qtyUsed: qtyUsed,
      invsn: invsn,
      itmsn: itmsn,
      info: info,
      qualifier: qualifier,
      infoCd: infoCd,
      infoText: infoText,
      infoMsr: infoMsr,
      itmsno: itmsno,
      cSno: cSno,
      name: name,
      code: code,
      percentage: percentage,
      yieldPct: yieldPct,
      ing: ing,
      controlType: controlType,
      location: location,
      stDt: stDt,
      endDt: endDt,
      resCd: resCd,
      resText: resText,
      docypcd: doctypcd,
      icegateId: icegateId,
      irn: irn,
      partyCd: partyCd,
      issuePla: issuePla,
      issDt: issDt,
      expDt: expDt,
      sno: sno,
      invoiceNo: invoiceNo,
      invoiceAmount: invoiceAmount,
      currency: currency,
      container: container,
      seal: seal,
      date: date,
      ar4Number: ar4Number,
      ar4Date: ar4Date,
      commissionerate: commissionerate,
      division: division,
      range: range,
      iec: iec,
      exporterName: exporterName,
      address: address,
      gstnId: gstnId,
      gstnType: gstnType,
      type: type,
      manufactCd: manufactCd,
      sourceState: sourceState,
      transCy: transCy,
      invs: invs,
      quantity: quantity,
      noOfUnits: noOfUnits,
      beSiteId: beSiteId,
      beNumber: beNumber,
      beInvSno: beInvSno,
      beItemS: beItemS,
      beQty: beQty,
    };
    const response = await axios.post(`${BACKEND_URL}/newdata/part4`, jsonData);
    setLoading(false);
    alert(response.data.message);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.container}>
      {loading && <Loading />}

      <h2 style={{ textAlign: "center" }}>Part 4 - EXPORT SCHEME DETAILS</h2>
      <h3>Section A - Drawback & Rosl Claim</h3>
      <div style={styles.formGroup}>
        <label htmlFor="inv-sno">INV SNO</label>
        <input
          type="number"
          id="inv-sno"
          name="inv-sno"
          required
          style={styles.input}
          value={invSno}
          onChange={(e) => setInvSno(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="item-sno">ITEM SNO</label>
        <input
          type="number"
          id="item-sno"
          name="item-sno"
          required
          style={styles.input}
          value={itemsn}
          onChange={(e) => setItemsn(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="dbk-sno">DBK SNO</label>
        <input
          type="text"
          id="dbk-sno"
          name="dbk-sno"
          required
          style={styles.input}
          value={dbkSno}
          onChange={(e) => setDbkSno(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="qty-wt">QTY/WT</label>
        <input
          type="number"
          id="qty-wt"
          name="qty-wt"
          required
          style={styles.input}
          value={qtyWt}
          onChange={(e) => setQtyWt(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="value">VALUE</label>
        <input
          type="number"
          id="value"
          name="value"
          required
          style={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
        <label htmlFor="dbk-amt">DBK AMT</label>
        <input
          type="number"
          id="dbk-amt"
          name="dbk-amt"
          required
          style={styles.input}
          value={dbkAmt}
          onChange={(e) => setDbkAmt(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="stalev">STALEV</label>
        <input
          type="number"
          id="stalev"
          name="stalev"
          required
          style={styles.input}
          value={stalev}
          onChange={(e) => setStalev(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="cenlev">CENLEV</label>
        <input
          type="number"
          id="cenlev"
          name="cenlev"
          required
          style={styles.input}
          value={cenlev}
          onChange={(e) => setCenlev(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="rosctl-amt">ROSCTL AMT</label>
        <input
          type="number"
          id="rosctl-amt"
          name="rosctl-amt"
          required
          style={styles.input}
          value={rosctlAmt}
          onChange={(e) => setRosctlAmt(e.target.value)}
        />
      </div>

      <h3>Section B - AA/DFIA License Details</h3>
      <div style={styles.formGroup}>
        <label htmlFor="inv-sno-b">INV SNO</label>
        <input
          type="number"
          id="inv-sno-b"
          name="inv-sno-b"
          required
          style={styles.input}
          value={invSnoB}
          onChange={(e) => setInvSnoB(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="item-sno-b">ITEM SNO</label>
        <input
          type="number"
          id="item-sno-b"
          name="item-sno-b"
          required
          style={styles.input}
          value={itemSnoB}
          onChange={(e) => setItemSnoB(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="license-no">LICENSE NO</label>
        <input
          type="number"
          id="license-no"
          name="license-no"
          required
          style={styles.input}
          value={licenseNo}
          onChange={(e) => setLicenseNo(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="descn-export-item">DESCN OF EXPORT ITEM</label>
        <input
          type="number"
          id="descn-export-item"
          name="descn-export-item"
          required
          style={styles.input}
          value={descnExportItem}
          onChange={(e) => setDescnExportItem(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="exp-sno">EXP SNO</label>
        <input
          type="number"
          id="exp-sno"
          name="exp-sno"
          required
          style={styles.input}
          value={expSno}
          onChange={(e) => setExpSno(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="expqty">EXPQTY</label>
        <input
          type="number"
          id="expqty"
          name="expqty"
          required
          style={styles.input}
          value={expqty}
          onChange={(e) => setExpqty(e.target.value)}
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
        <label htmlFor="fob-value">FOB VALUE</label>
        <input
          type="number"
          id="fob-value"
          name="fob-value"
          required
          style={styles.input}
          value={fobValue}
          onChange={(e) => setFobValue(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="sion">SION</label>
        <input
          type="number"
          id="sion"
          name="sion"
          required
          style={styles.input}
          value={sion}
          onChange={(e) => setSion(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="descn-import-item">DESCN OF IMPORT ITEM</label>
        <input
          type="number"
          id="descn-import-item"
          name="descn-import-item"
          required
          style={styles.input}
          value={descnImportItem}
          onChange={(e) => setDescnImportItem(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="imp-sno">IMP SNO</label>
        <input
          type="number"
          id="imp-sno"
          name="imp-sno"
          required
          style={styles.input}
          value={impSno}
          onChange={(e) => setImpSno(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="impqt">IMPQT</label>
        <input
          type="number"
          id="impqt"
          name="impqt"
          required
          style={styles.input}
          value={impqt}
          onChange={(e) => setImpqt(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="uqc-b">UQC</label>
        <input
          type="text"
          id="uqc-b"
          name="uqc-b"
          required
          style={styles.input}
          value={uqcB}
          onChange={(e) => setUqcB(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="indig-imp">INDIG/IMP</label>
        <input
          type="text"
          id="indig-imp"
          name="indig-imp"
          required
          style={styles.input}
          value={indigImp}
          onChange={(e) => setIndigImp(e.target.value)}
        />
      </div>

      <h3>Section C - Jobbing Details</h3>
      <div style={styles.formGroup}>
        <label htmlFor="be-no">BE NO</label>
        <input
          type="text"
          id="be-no"
          name="be-no"
          required
          style={styles.input}
          value={beNo}
          onChange={(e) => setBeNo(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="be-date">BE DATE</label>
        <input
          type="number"
          id="be-date"
          name="be-date"
          required
          style={styles.input}
          value={beDate}
          onChange={(e) => setBeDate(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="port-code">PORT CODE</label>
        <input
          type="text"
          id="port-code"
          name="port-code"
          required
          style={styles.input}
          value={portCode}
          onChange={(e) => setPortCode(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="descn-imported-goods">DESCN OF IMPORTED GOODS</label>
        <input
          type="text"
          id="descn-imported-goods"
          name="descn-imported-goods"
          required
          style={styles.input}
          value={descnImportedGoods}
          onChange={(e) => setDescnImportedGoods(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="qty-imp">QTY IMP</label>
        <input
          type="number"
          id="qty-imp"
          name="qty-imp"
          required
          style={styles.input}
          value={qtyImp}
          onChange={(e) => setQtyImp(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="qty-used">QTY USED</label>
        <input
          type="number"
          id="qty-used"
          name="qty-used"
          required
          style={styles.input}
          value={qtyUsed}
          onChange={(e) => setQtyUsed(e.target.value)}
        />
      </div>

      <h3>Section D - Single Window Declaration</h3>
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
        <label htmlFor="itmsn">ITMSN</label>
        <input
          type="number"
          id="itmsn"
          name="itmsn"
          required
          style={styles.input}
          value={itmsn}
          onChange={(e) => setItmsn(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="info">INFO</label>
        <input
          type="text"
          id="info"
          name="info"
          required
          style={styles.input}
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="qualifier">QUALIFIER</label>
        <input
          type="text"
          id="qualifier"
          name="qualifier"
          required
          style={styles.input}
          value={qualifier}
          onChange={(e) => setQualifier(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="info-cd">INFO CD</label>
        <input
          type="text"
          id="info-cd"
          name="info-cd"
          required
          style={styles.input}
          value={infoCd}
          onChange={(e) => setInfoCd(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="info-text">INFO TEXT</label>
        <input
          type="text"
          id="info-text"
          name="info-text"
          required
          style={styles.input}
          value={infoText}
          onChange={(e) => setInfoText(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="info-msr">INFO MSR</label>
        <input
          type="number"
          id="info-msr"
          name="info-msr"
          required
          style={styles.input}
          value={infoMsr}
          onChange={(e) => setInfoMsr(e.target.value)}
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

      <h3>Section E - Single Window Declaration - Constituents</h3>
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
        <label htmlFor="itmsno">ITMSNO</label>
        <input
          type="number"
          id="itmsno"
          name="itmsno"
          required
          style={styles.input}
          value={itmsno}
          onChange={(e) => setItmsno(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="c-sno">C SNO</label>
        <input
          type="text"
          id="c-sno"
          name="c-sno"
          required
          style={styles.input}
          value={cSno}
          onChange={(e) => setCSno(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="code">CODE</label>
        <input
          type="text"
          id="code"
          name="code"
          required
          style={styles.input}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="percentage">PERCENTAGE</label>
        <input
          type="number"
          id="percentage"
          name="percentage"
          required
          style={styles.input}
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="yield-pct">YIELD PCT</label>
        <input
          type="number"
          id="yield-pct"
          name="yield-pct"
          required
          style={styles.input}
          value={yieldPct}
          onChange={(e) => setYieldPct(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="ing">ING</label>
        <input
          type="text"
          id="ing"
          name="ing"
          required
          style={styles.input}
          value={ing}
          onChange={(e) => setIng(e.target.value)}
        />
      </div>

      <h3>Section F - Single Window Decclaration - Control</h3>
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
        <label htmlFor="itmsno">ITMSNO</label>
        <input
          type="number"
          id="itmsno"
          name="itmsno"
          required
          style={styles.input}
          value={itmsno}
          onChange={(e) => setItmsno(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="control-type">CONTROL TYPE</label>
        <input
          type="text"
          id="control-type"
          name="control-type"
          required
          style={styles.input}
          value={controlType}
          onChange={(e) => setControlType(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="location">LOCATION</label>
        <input
          type="text"
          id="location"
          name="location"
          required
          style={styles.input}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="st-dt">ST DT</label>
        <input
          type="date"
          id="st-dt"
          name="st-dt"
          required
          style={styles.input}
          value={stDt}
          onChange={(e) => setStDt(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="end-dt">END DT</label>
        <input
          type="date"
          id="end-dt"
          name="end-dt"
          required
          style={styles.input}
          value={endDt}
          onChange={(e) => setEndDt(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="res-cd">RES CD</label>
        <input
          type="text"
          id="res-cd"
          name="res-cd"
          required
          style={styles.input}
          value={resCd}
          onChange={(e) => setResCd(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="res-text">RES TEXT</label>
        <input
          type="text"
          id="res-text"
          name="res-text"
          required
          style={styles.input}
          value={resText}
          onChange={(e) => setResText(e.target.value)}
        />
      </div>

      <h3>Section G - Supporting Documents</h3>
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
        <label htmlFor="itmsno">ITMSNO</label>
        <input
          type="number"
          id="itmsno"
          name="itmsno"
          required
          style={styles.input}
          value={itmsno}
          onChange={(e) => setItmsno(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="doctypcd">DOCTYPCD</label>
        <input
          type="text"
          id="doctypcd"
          name="doctypcd"
          required
          style={styles.input}
          value={doctypcd}
          onChange={(e) => setDoctypcd(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="icegate-id">ICEGATE ID</label>
        <input
          type="text"
          id="icegate-id"
          name="icegate-id"
          required
          style={styles.input}
          value={icegateId}
          onChange={(e) => setIcegateId(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="irn">IRN</label>
        <input
          type="number"
          id="irn"
          name="irn"
          required
          style={styles.input}
          value={irn}
          onChange={(e) => setIrn(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="party-cd">PARTY CD</label>
        <input
          type="text"
          id="party-cd"
          name="party-cd"
          required
          style={styles.input}
          value={partyCd}
          onChange={(e) => setPartyCd(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="issue-pla">ISSUE PLA</label>
        <input
          type="text"
          id="issue-pla"
          name="issue-pla"
          required
          style={styles.input}
          value={issuePla}
          onChange={(e) => setIssuePla(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="iss-dt">ISS DT</label>
        <input
          type="date"
          id="iss-dt"
          name="iss-dt"
          required
          style={styles.input}
          value={issDt}
          onChange={(e) => setIssDt(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="exp-dt">EXP DT</label>
        <input
          type="date"
          id="exp-dt"
          name="exp-dt"
          required
          style={styles.input}
          value={expDt}
          onChange={(e) => setExpDt(e.target.value)}
        />
      </div>

      <h3>Section H - Invoice Details</h3>
      <div style={styles.formGroup}>
        <label htmlFor="sno">SNO</label>
        <input
          type="number"
          id="sno"
          name="sno"
          required
          style={styles.input}
          value={sno}
          onChange={(e) => setSno(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="invoice-no">INVOICE NO</label>
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
        <label htmlFor="invoice-amount">INVOICE AMOUNT</label>
        <input
          type="number"
          step="0.01"
          id="invoice-amount"
          name="invoice-amount"
          required
          style={styles.input}
          value={invoiceAmount}
          onChange={(e) => setInvoiceAmount(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="currency">CURRENCY</label>
        <input
          type="text"
          id="currency"
          name="currency"
          required
          style={styles.input}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
      </div>

      <h3>Section I - Container Details</h3>
      <div style={styles.formGroup}>
        <label htmlFor="sno">SNO</label>
        <input
          type="number"
          id="sno"
          name="sno"
          required
          style={styles.input}
          value={sno}
          onChange={(e) => setSno(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="container">CONTAINER</label>
        <input
          type="text"
          id="container"
          name="container"
          required
          style={styles.input}
          value={container}
          onChange={(e) => setContainer(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="seal">SEAL</label>
        <input
          type="text"
          id="seal"
          name="seal"
          required
          style={styles.input}
          value={seal}
          onChange={(e) => setSeal(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="date">DATE</label>
        <input
          type="date"
          id="date"
          name="date"
          required
          style={styles.input}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <h3>Section J - AR4 Details</h3>
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
        <label htmlFor="itmsn">ITMSN</label>
        <input
          type="number"
          id="itmsn"
          name="itmsn"
          required
          style={styles.input}
          value={itmsn}
          onChange={(e) => setItmsn(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="ar4-number">AR4 NUMBER</label>
        <input
          type="text"
          id="ar4-number"
          name="ar4-number"
          required
          style={styles.input}
          value={ar4Number}
          onChange={(e) => setAr4Number(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="ar4-date">AR4 DATE</label>
        <input
          type="date"
          id="ar4-date"
          name="ar4-date"
          required
          style={styles.input}
          value={ar4Date}
          onChange={(e) => setAr4Date(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="commissionerate">COMMISSIONERATE</label>
        <input
          type="text"
          id="commissionerate"
          name="commissionerate"
          required
          style={styles.input}
          value={commissionerate}
          onChange={(e) => setCommissionerate(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="division">DIVISION</label>
        <input
          type="text"
          id="division"
          name="division"
          required
          style={styles.input}
          value={division}
          onChange={(e) => setDivision(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="range">RANGE</label>
        <input
          type="text"
          id="range"
          name="range"
          required
          style={styles.input}
          value={range}
          onChange={(e) => setRange(e.target.value)}
        />
      </div>

      <h3>Section K - Third Party Details</h3>
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
        <label htmlFor="itmsn">ITMSN</label>
        <input
          type="number"
          id="itmsn"
          name="itmsn"
          required
          style={styles.input}
          value={itmsn}
          onChange={(e) => setItmsn(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="iec">IEC</label>
        <input
          type="text"
          id="iec"
          name="iec"
          required
          style={styles.input}
          value={iec}
          onChange={(e) => setIec(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="exporter-name">EXPORTER NAME</label>
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
        <label htmlFor="address">ADDRESS</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          style={styles.input}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="gstn-id">GSTN ID</label>
        <input
          type="text"
          id="gstn-id"
          name="gstn-id"
          required
          style={styles.input}
          value={gstnId}
          onChange={(e) => setGstnId(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="gstn-type">GSTN TYPE</label>
        <input
          type="text"
          id="gstn-type"
          name="gstn-type"
          required
          style={styles.input}
          value={gstnType}
          onChange={(e) => setGstnType(e.target.value)}
        />
      </div>

      <h3>Section L - Item Manufacturer/Producer/Grower Details</h3>
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
        <label htmlFor="itmsn">ITMSN</label>
        <input
          type="number"
          id="itmsn"
          name="itmsn"
          required
          style={styles.input}
          value={itmsn}
          onChange={(e) => setItmsn(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="type">TYPE</label>
        <input
          type="text"
          id="type"
          name="type"
          required
          style={styles.input}
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="manufact-cd">MANUFACT CD</label>
        <input
          type="text"
          id="manufact-cd"
          name="manufact-cd"
          required
          style={styles.input}
          value={manufactCd}
          onChange={(e) => setManufactCd(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="source-state">SOURCE STATE</label>
        <input
          type="text"
          id="source-state"
          name="source-state"
          required
          style={styles.input}
          value={sourceState}
          onChange={(e) => setSourceState(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="trans-cy">TRANS CY</label>
        <input
          type="text"
          id="trans-cy"
          name="trans-cy"
          required
          style={styles.input}
          value={transCy}
          onChange={(e) => setTransCy(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="address">ADDRESS</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          style={styles.input}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <h3>Section M - Rodtep Details</h3>
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
        <label htmlFor="itmsn">ITMSN</label>
        <input
          type="number"
          id="itmsn"
          name="itmsn"
          required
          style={styles.input}
          value={itmsn}
          onChange={(e) => setItmsn(e.target.value)}
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
        <label htmlFor="no-of-units">NO OF UNITS</label>
        <input
          type="number"
          id="no-of-units"
          name="no-of-units"
          required
          style={styles.input}
          value={noOfUnits}
          onChange={(e) => setNoOfUnits(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="value">VALUE</label>
        <input
          type="number"
          id="value"
          name="value"
          required
          style={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <h3>Section N - ReExport Details</h3>
      <div style={styles.formGroup}>
        <label htmlFor="invs">INVS</label>
        <input
          type="number"
          id="invs"
          name="invs"
          required
          style={styles.input}
          value={invs}
          onChange={(e) => setInvs(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="itmsn">ITMSN</label>
        <input
          type="number"
          id="itmsn"
          name="itmsn"
          required
          style={styles.input}
          value={itmsn}
          onChange={(e) => setItmsn(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="be-site-id">BE SITE ID</label>
        <input
          type="text"
          id="be-site-id"
          name="be-site-id"
          required
          style={styles.input}
          value={beSiteId}
          onChange={(e) => setBeSiteId(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="be-number">BE NUMBER</label>
        <input
          type="number"
          id="be-number"
          name="be-number"
          required
          style={styles.input}
          value={beNumber}
          onChange={(e) => setBeNumber(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="be-date">BE DATE</label>
        <input
          type="date"
          id="be-date"
          name="be-date"
          required
          style={styles.input}
          value={beDate}
          onChange={(e) => setBeDate(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="be-inv-sno">BE INV SNO</label>
        <input
          type="number"
          id="be-inv-sno"
          name="be-inv-sno"
          required
          style={styles.input}
          value={beInvSno}
          onChange={(e) => setBeInvSno(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="be-item-s">BE ITEM S</label>
        <input
          type="number"
          id="be-item-s"
          name="be-item-s"
          required
          style={styles.input}
          value={beItemS}
          onChange={(e) => setBeItemS(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="be-qty">BE QTY</label>
        <input
          type="number"
          id="be-qty"
          name="be-qty"
          required
          style={styles.input}
          value={beQty}
          onChange={(e) => setBeQty(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="be-uqc">BE UQC</label>
        <input
          type="text"
          id="be-uqc"
          name="be-uqc"
          required
          style={styles.input}
          value={beUqc}
          onChange={(e) => setBeUqc(e.target.value)}
        />
      </div>
      <button className="p-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 mx-1" onClick={handleSubmit}>
        submit
      </button>

        <button onClick={() => navigate("/newdata/part1")} className='p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mx-1'> Back</button>

      <button
        onClick={() => navigate("/newdata/part5")}
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

export default Part4;
