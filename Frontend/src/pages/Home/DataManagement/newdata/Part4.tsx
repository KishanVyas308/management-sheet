import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import { BACKEND_URL } from "../../../../Globle";
import { useCookies } from "react-cookie";
import NewDataHeaderComponent from "./NewDataHeaderComponent";
import NewDataButtons from "./NewDataButtons";
import InputField from "../../../components/InputField";

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

  const [cookies, setCookie] = useCookies(["token"]);

  const handleSubmitSection1 = async (e: any) => {
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
    };
    const response = await axios.post(
      `${BACKEND_URL}/newData/part4section1`,
      jsonData,
      {
        headers: {
          Authorization: cookies.token,
        },
      }
    );
    setLoading(false);
    alert(response.data.message);
  };

  const handleSubmitSection2 = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const jsonData = {
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
    };
    const response = await axios.post(
      `${BACKEND_URL}/newData/part4section2`,
      jsonData,
      {
        headers: {
          Authorization: cookies.token,
        },
      }
    );
    setLoading(false);
    alert(response.data.message);
  };

  const handleSubmitSection3 = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const jsonData = {
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
    };
    const response = await axios.post(
      `${BACKEND_URL}/newData/part4section3`,
      jsonData,
      {
        headers: {
          Authorization: cookies.token,
        },
      }
    );
    setLoading(false);
    alert(response.data.message);
  };

  const handleSubmitSection4 = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const jsonData = {
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
    };
    const response = await axios.post(
      `${BACKEND_URL}/newData/part4section4`,
      jsonData,
      {
        headers: {
          Authorization: cookies.token,
        },
      }
    );
    setLoading(false);
    alert(response.data.message);
  };

  const handleSubmitSection5 = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const jsonData = {
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
      
    };
    const response = await axios.post(
      `${BACKEND_URL}/newData/part4section5`,
      jsonData,
      {
        headers: {
          Authorization: cookies.token,
        },
      }
    );
    setLoading(false);
    alert(response.data.message);
  };

  const handleSubmitSection6 = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const jsonData = {
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
      beUqc: beUqc,
    };
    const response = await axios.post(
      `${BACKEND_URL}/newData/part4section6`,
      jsonData,
      {
        headers: {
          Authorization: cookies.token,
        },
      }
    );
    setLoading(false);
    alert(response.data.message);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#e6e7e9] w-full h-full min-h-screen">
      <div className="container mx-auto px-4 py-8 ">
        {loading && <Loading />}

        <NewDataHeaderComponent
          backLink={"/datamanagement/newdata/part3"}
          nextLink={"/datamanagement/newdata/part5"}
        />

        <div className="container text-center text-green-700 font-sans font-semibold text-[24px]">
          Part 4
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-4">
          <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Section 1
            </div>
            <InputField
              label="invSno"
              value={invSno}
              onChange={(e) => setInvSno(e.target.value)}
            />
            <InputField
              label="itemsn"
              value={itemsn}
              onChange={(e) => setItemsn(e.target.value)}
            />
            <InputField
              label="dbkSno"
              value={dbkSno}
              onChange={(e) => setDbkSno(e.target.value)}
            />
            <InputField
              label="qtyWt"
              value={qtyWt}
              onChange={(e) => setQtyWt(e.target.value)}
            />
            <InputField
              label="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <InputField
              label="rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <InputField
              label="dbkAmt"
              value={dbkAmt}
              onChange={(e) => setDbkAmt(e.target.value)}
            />
            <InputField
              label="stalev"
              value={stalev}
              onChange={(e) => setStalev(e.target.value)}
            />
            <InputField
              label="cenlev"
              value={cenlev}
              onChange={(e) => setCenlev(e.target.value)}
            />
            <InputField
              label="rosctlAmt"
              value={rosctlAmt}
              onChange={(e) => setRosctlAmt(e.target.value)}
            />
            <InputField
              label="invSnoB"
              value={invSnoB}
              onChange={(e) => setInvSnoB(e.target.value)}
            />
            <InputField
              label="itemSnoB"
              value={itemSnoB}
              onChange={(e) => setItemSnoB(e.target.value)}
            />
            <InputField
              label="licenseNo"
              value={licenseNo}
              onChange={(e) => setLicenseNo(e.target.value)}
            />
            <InputField
              label="descnExportItem"
              value={descnExportItem}
              onChange={(e) => setDescnExportItem(e.target.value)}
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
              label="expSno"
              value={expSno}
              onChange={(e) => setExpSno(e.target.value)}
            />
            <InputField
              label="expqty"
              value={expqty}
              onChange={(e) => setExpqty(e.target.value)}
            />
            <InputField
              label="uqc"
              value={uqc}
              onChange={(e) => setUqc(e.target.value)}
            />
            <InputField
              label="fobValue"
              value={fobValue}
              onChange={(e) => setFobValue(e.target.value)}
            />
            <InputField
              label="sion"
              value={sion}
              onChange={(e) => setSion(e.target.value)}
            />
            <InputField
              label="descnImportItem"
              value={descnImportItem}
              onChange={(e) => setDescnImportItem(e.target.value)}
            />
            <InputField
              label="impSno"
              value={impSno}
              onChange={(e) => setImpSno(e.target.value)}
            />
            <InputField
              label="impqt"
              value={impqt}
              onChange={(e) => setImpqt(e.target.value)}
            />
            <InputField
              label="uqcB"
              value={uqcB}
              onChange={(e) => setUqcB(e.target.value)}
            />
            <InputField
              label="indigImp"
              value={indigImp}
              onChange={(e) => setIndigImp(e.target.value)}
            />
            <InputField
              label="beNo"
              value={beNo}
              onChange={(e) => setBeNo(e.target.value)}
            />
            <InputField
              label="beDate"
              value={beDate}
              onChange={(e) => setBeDate(e.target.value)}
            />
            <InputField
              label="portCode"
              value={portCode}
              onChange={(e) => setPortCode(e.target.value)}
            />
            <InputField
              label="descnImportedGoods"
              value={descnImportedGoods}
              onChange={(e) => setDescnImportedGoods(e.target.value)}
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
              label="qtyImp"
              value={qtyImp}
              onChange={(e) => setQtyImp(e.target.value)}
            />
            <InputField
              label="qtyUsed"
              value={qtyUsed}
              onChange={(e) => setQtyUsed(e.target.value)}
            />
            <InputField
              label="invsn"
              value={invsn}
              onChange={(e) => setInvsn(e.target.value)}
            />
            <InputField
              label="itmsn"
              value={itmsn}
              onChange={(e) => setItmsn(e.target.value)}
            />
            <InputField
              label="info"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
            <InputField
              label="qualifier"
              value={qualifier}
              onChange={(e) => setQualifier(e.target.value)}
            />
            <InputField
              label="infoCd"
              value={infoCd}
              onChange={(e) => setInfoCd(e.target.value)}
            />
            <InputField
              label="infoText"
              value={infoText}
              onChange={(e) => setInfoText(e.target.value)}
            />
            <InputField
              label="infoMsr"
              value={infoMsr}
              onChange={(e) => setInfoMsr(e.target.value)}
            />
            <InputField
              label="itmsno"
              value={itmsno}
              onChange={(e) => setItmsno(e.target.value)}
            />
            <InputField
              label="cSno"
              value={cSno}
              onChange={(e) => setCSno(e.target.value)}
            />
            <InputField
              label="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              label="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <InputField
              label="percentage"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
            />
            <NewDataButtons
              backLink={""}
              nextLink={""}
              handleSubmit={handleSubmitSection3}
            />
          </div>
          <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Section 4
            </div>
            <InputField
              label="yieldPct"
              value={yieldPct}
              onChange={(e) => setYieldPct(e.target.value)}
            />
            <InputField
              label="ing"
              value={ing}
              onChange={(e) => setIng(e.target.value)}
            />
            <InputField
              label="controlType"
              value={controlType}
              onChange={(e) => setControlType(e.target.value)}
            />
            <InputField
              label="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <InputField
              label="stDt"
              value={stDt}
              onChange={(e) => setStDt(e.target.value)}
            />
            <InputField
              label="endDt"
              value={endDt}
              onChange={(e) => setEndDt(e.target.value)}
            />
            <InputField
              label="resCd"
              value={resCd}
              onChange={(e) => setResCd(e.target.value)}
            />
            <InputField
              label="resText"
              value={resText}
              onChange={(e) => setResText(e.target.value)}
            />
            <InputField
              label="doctypcd"
              value={doctypcd}
              onChange={(e) => setDoctypcd(e.target.value)}
            />
            <InputField
              label="icegateId"
              value={icegateId}
              onChange={(e) => setIcegateId(e.target.value)}
            />
            <InputField
              label="irn"
              value={irn}
              onChange={(e) => setIrn(e.target.value)}
            />
            <InputField
              label="partyCd"
              value={partyCd}
              onChange={(e) => setPartyCd(e.target.value)}
            />
            <InputField
              label="issuePla"
              value={issuePla}
              onChange={(e) => setIssuePla(e.target.value)}
            />
            <InputField
              label="issDt"
              value={issDt}
              onChange={(e) => setIssDt(e.target.value)}
            />
            <InputField
              label="expDt"
              value={expDt}
              onChange={(e) => setExpDt(e.target.value)}
            />
            <NewDataButtons
              backLink={""}
              nextLink={""}
              handleSubmit={handleSubmitSection4}
            />
            
          </div>
          <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Section 5
            </div>
            <InputField
              label="sno"
              value={sno}
              onChange={(e) => setSno(e.target.value)}
            />
            <InputField
              label="invoiceNo"
              value={invoiceNo}
              onChange={(e) => setInvoiceNo(e.target.value)}
            />
            <InputField
              label="invoiceAmount"
              value={invoiceAmount}
              onChange={(e) => setInvoiceAmount(e.target.value)}
            />
            <InputField
              label="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            />
            <InputField
              label="container"
              value={container}
              onChange={(e) => setContainer(e.target.value)}
            />
            <InputField
              label="seal"
              value={seal}
              onChange={(e) => setSeal(e.target.value)}
            />
            <InputField
              label="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <InputField
              label="ar4Number"
              value={ar4Number}
              onChange={(e) => setAr4Number(e.target.value)}
            />
            <InputField
              label="ar4Date"
              value={ar4Date}
              onChange={(e) => setAr4Date(e.target.value)}
            />
            <InputField
              label="commissionerate"
              value={commissionerate}
              onChange={(e) => setCommissionerate(e.target.value)}
            />
            <InputField
              label="division"
              value={division}
              onChange={(e) => setDivision(e.target.value)}
            />
            <InputField
              label="range"
              value={range}
              onChange={(e) => setRange(e.target.value)}
            />
            <InputField
              label="iec"
              value={iec}
              onChange={(e) => setIec(e.target.value)}
            />
            <InputField
              label="exporterName"
              value={exporterName}
              onChange={(e) => setExporterName(e.target.value)}
            />
            <InputField
              label="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
           <NewDataButtons
              backLink={""}
              nextLink={""}
              handleSubmit={handleSubmitSection5}
            />
          </div>
          <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Section 6
            </div>
            <InputField
              label="gstnId"
              value={gstnId}
              onChange={(e) => setGstnId(e.target.value)}
            />
            <InputField
              label="gstnType"
              value={gstnType}
              onChange={(e) => setGstnType(e.target.value)}
            />
            <InputField
              label="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <InputField
              label="manufactCd"
              value={manufactCd}
              onChange={(e) => setManufactCd(e.target.value)}
            />
            <InputField
              label="sourceState"
              value={sourceState}
              onChange={(e) => setSourceState(e.target.value)}
            />
            <InputField
              label="transCy"
              value={transCy}
              onChange={(e) => setTransCy(e.target.value)}
            />
            <InputField
              label="invs"
              value={invs}
              onChange={(e) => setInvs(e.target.value)}
            />
            <InputField
              label="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <InputField
              label="noOfUnits"
              value={noOfUnits}
              onChange={(e) => setNoOfUnits(e.target.value)}
            />
            <InputField
              label="beSiteId"
              value={beSiteId}
              onChange={(e) => setBeSiteId(e.target.value)}
            />
            <InputField
              label="beNumber"
              value={beNumber}
              onChange={(e) => setBeNumber(e.target.value)}
            />
            <InputField
              label="beInvSno"
              value={beInvSno}
              onChange={(e) => setBeInvSno(e.target.value)}
            />
            <InputField
              label="beItemS"
              value={beItemS}
              onChange={(e) => setBeItemS(e.target.value)}
            />
            <InputField
              label="beQty"
              value={beQty}
              onChange={(e) => setBeQty(e.target.value)}
            />
            <InputField
              label="beUqc"
              value={beUqc}
              onChange={(e) => setBeUqc(e.target.value)}
            />

            <NewDataButtons
              backLink={"/datamanagement/newdata/part3"}
              nextLink={"/datamanagement/newdata/part5"}
              handleSubmit={handleSubmitSection6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part4;
