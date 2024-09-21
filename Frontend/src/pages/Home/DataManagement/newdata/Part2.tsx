import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import { BACKEND_URL } from "../../../../Globle";
import { useCookies } from "react-cookie";
import NewDataHeaderComponent from "./NewDataHeaderComponent";
import InputField from "../../../components/InputField";
import NewDataButtons from "./NewDataButtons";

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
    const response = await axios.post(
      `${BACKEND_URL}/newData/part2`,
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
          backLink={"/datamanagement"}
          nextLink={"/datamanagement/newdata/part2"}
        />

        <div className="container text-center text-green-700 font-sans font-semibold text-[24px]">
          Part 2
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-4">
          <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Section 1
            </div>
        
          </div>
          <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Section 2
            </div>
          
          </div>
          <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Section 3
            </div>

           

            <NewDataButtons
              backLink={"/datamanagement"}
              nextLink={"/datamanagement/newdata/part2"}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Part2;
