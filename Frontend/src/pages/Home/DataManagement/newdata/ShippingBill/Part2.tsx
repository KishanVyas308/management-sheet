import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../components/Loading";
import { BACKEND_URL } from "../../../../../Globle";
import { useCookies } from "react-cookie";
import NewDataHeaderComponent from "../NewDataHeaderComponent";
import InputField from "../../../../components/InputField";
import NewDataButtons from "../NewDataButtons";
import ShippingBillHeader from "./ShippingBillHeader";

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

  const handleSubmitSection1 = async (e: any) => {
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
    };
    const response = await axios.post(
      `${BACKEND_URL}/newData/part2section1`,
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
    };
    const response = await axios.post(
      `${BACKEND_URL}/newData/part2section2`,
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
      deduct: deduct,
      pc: pc,
      exchangeRate: exchangeRate,
      itemSno: itemSno,
      hsCd: hsCd,
      description: description,
      quantity: quantity,
      uqc: uqc,
      rate: rate,
      valueFc: valueFc
    };
    const response = await axios.post(
      `${BACKEND_URL}/newData/part2section3`,
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
          backLink={"/datamanagement/newdata/part1"}
          nextLink={"/datamanagement/newdata/part3"}
        />
        <ShippingBillHeader />

        <div className="container text-center text-green-700 font-sans font-semibold text-[24px]">
        Shipping Bill - Part 2
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-4">
          <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Section 1
            </div>
            <InputField
              label="S No"
              value={sNo}
              onChange={(e) => setSNo(e.target.value)}
            />
            <InputField
              label="Invoice No"
              value={invoiceNo}
              onChange={(e) => setInvoiceNo(e.target.value)}
            />
            <InputField
              label="Invoice Dt"
              value={invoiceDt}
              onChange={(e) => setInvoiceDt(e.target.value)}
            />
            <InputField
              label="PO No"
              value={poNo}
              onChange={(e) => setPoNo(e.target.value)}
            />
            <InputField
              label="PO Dt"
              value={poDt}
              onChange={(e) => setPoDt(e.target.value)}
            />
            <InputField
              label="Loc No"
              value={locNo}
              onChange={(e) => setLocNo(e.target.value)}
            />
            <InputField
              label="Loc Dt"
              value={locDt}
              onChange={(e) => setLocDt(e.target.value)}
            />
            <InputField
              label="Contract No"
              value={contractNo}
              onChange={(e) => setContractNo(e.target.value)}
            />
            <InputField
              label="Contract Dt"
              value={contractDt}
              onChange={(e) => setContractDt(e.target.value)}
            />
            <InputField
              label="AD Code"
              value={adCode}
              onChange={(e) => setAdCode(e.target.value)}
            />
            <InputField
              label="Inv Term"
              value={invTerm}
              onChange={(e) => setInvTerm(e.target.value)}
            />
            <InputField
              label="Exporter Name"
              value={exporterName}
              onChange={(e) => setExporterName(e.target.value)}
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
              label="Exporter Address"
              value={exporterAddress}
              onChange={(e) => setExporterAddress(e.target.value)}
            />
            <InputField
              label="Buyer Name"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
            />
            <InputField
              label="Buyer Address"
              value={buyerAddress}
              onChange={(e) => setBuyerAddress(e.target.value)}
            />
            <InputField
              label="Third Party Name"
              value={thirdPartyName}
              onChange={(e) => setThirdPartyName(e.target.value)}
            />
            <InputField
              label="Third Party Address"
              value={thirdPartyAddress}
              onChange={(e) => setThirdPartyAddress(e.target.value)}
            />
            <InputField
              label="Buyer AEO Status"
              value={buyerAeoStatus}
              onChange={(e) => setBuyerAeoStatus(e.target.value)}
            />
            <InputField
              label="Invoice Value"
              value={invoiceValue}
              onChange={(e) => setInvoiceValue(e.target.value)}
            />
            <InputField
              label="FOB Value"
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
              label="Deduct"
              value={deduct}
              onChange={(e) => setDeduct(e.target.value)}
            />
            <InputField
              label="PC"
              value={pc}
              onChange={(e) => setPc(e.target.value)}
            />
            <InputField
              label="Exchange Rate"
              value={exchangeRate}
              onChange={(e) => setExchangeRate(e.target.value)}
            />
            <InputField
              label="Item Sno"
              value={itemSno}
              onChange={(e) => setItemSno(e.target.value)}
            />
            <InputField
              label="HS Cd"
              value={hsCd}
              onChange={(e) => setHsCd(e.target.value)}
            />
            <InputField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <InputField
              label="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <InputField
              label="UQC"
              value={uqc}
              onChange={(e) => setUqc(e.target.value)}
            />
            <InputField
              label="Rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <InputField
              label="Value Fc"
              value={valueFc}
              onChange={(e) => setValueFc(e.target.value)}
            />

            <NewDataButtons
              backLink={"/datamanagement/newdata/part1"}
              nextLink={"/datamanagement/newdata/part3"}
              handleSubmit={handleSubmitSection3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part2;
