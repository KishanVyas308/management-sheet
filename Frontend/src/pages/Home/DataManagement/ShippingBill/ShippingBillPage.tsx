import React, { useState } from "react";
import Loading from "../../../components/Loading";
import NewDataHeaderComponent from "../newdata/NewDataHeaderComponent";
import InputField from "../../../components/InputField";
import NewDataButtons from "../newdata/NewDataButtons";
import { useCookies } from "react-cookie";
import axios from "axios";
import { BACKEND_URL } from "../../../../Globle";

const ShippingBillPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [srNo, setSrNo] = useState("");
  const [shippingBillNo, setShippingBillNo] = useState("");

  const [shippingBillDate, setShippingBillDate] = useState("");
  const [thirdPartyExporter, setThirdPartyExporter] = useState("");
  const [hsCodeAndDescription, setHsCodeAndDescription] = useState("");
  const [epcgLicNo, setEpcgLicNo] = useState("");
  const [cifValue, setCifValue] = useState("");
  const [freight, setFreight] = useState("");
  const [insurance, setInsurance] = useState("");
  const [brc, setBrc] = useState("");
  const [exchangeRateOrProprtionRatio, setExchangeRateOrProprtionRatio] =
    useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [product, setProduct] = useState("");
  const [remarks, setRemarks] = useState("");

  const [loading, setLoading] = useState(false);

  const [cookies, setCookie] = useCookies(["token"]);
  const handleSubmit = async () => {
    setLoading(true);
    const jsonData = {
      companyName,
      srNo,
      shippingBillNo,
      shippingBillDate,
      thirdPartyExporter,
      hsCodeAndDescription,
      epcgLicNo,
      cifValue,
      freight,
      insurance,
      brc,
      exchangeRateOrProprtionRatio,
      exchangeRate,
      product,
      remarks,
    };
    const response = await axios.post(
      `${BACKEND_URL}/shbill/basicsheet`,
      jsonData,
      {
        headers: {
          Authorization: cookies.token,
        },
      }
    );
    alert(response.data.message);
    setLoading(false);
  };

  return (
    <div className="bg-[#e6e7e9] w-full h-full min-h-screen">
      <div className="container mx-auto px-4 py-8 ">
        {loading && <Loading />}

        <NewDataHeaderComponent
          backLink={"/datamanagement"}
          nextLink={"/datamanagement/newdata/part2"}
        />

        <div className="container text-center text-green-700 font-sans font-semibold text-[24px]">
          Shipping Bill - Details
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-4">
          <div className="bg-white p-4 rounded-md">
            <InputField
              label="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <InputField
              label="SR No"
              value={srNo}
              onChange={(e) => setSrNo(e.target.value)}
              type="number"
            />
            <InputField
              label="Shipping Bill No"
              value={shippingBillNo}
              onChange={(e) => setShippingBillNo(e.target.value)}
              type="number"
            />
            <InputField
              label="Shipping Bill Date"
              value={shippingBillDate}
              onChange={(e) => setShippingBillDate(e.target.value)}
              type="date"
            />
            <InputField
              label="Third Party Exporter"
              value={thirdPartyExporter}
              onChange={(e) => setThirdPartyExporter(e.target.value)}
            />
            <InputField
              label="HS Code and Description"
              value={hsCodeAndDescription}
              onChange={(e) => setHsCodeAndDescription(e.target.value)}
            />
          </div>

          <div className="bg-white p-4 rounded-md">
            <InputField
              label="EPCG Lic No"
              value={epcgLicNo}
              onChange={(e) => setEpcgLicNo(e.target.value)}
            />
            <InputField
              label="CIF Value"
              value={cifValue}
              onChange={(e) => setCifValue(e.target.value)}
              type="number"
            />
            <InputField
              label="Freight"
              value={freight}
              onChange={(e) => setFreight(e.target.value)}
              type="number"
            />
            <InputField
              label="Insurance"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              type="number"
            />
            <InputField
              label="BRC"
              value={brc}
              onChange={(e) => setBrc(e.target.value)}
              type="number"
            />
            <InputField
              label="Exchange Rate or Proprtion Ratio"
              value={exchangeRateOrProprtionRatio}
              onChange={(e) => setExchangeRateOrProprtionRatio(e.target.value)}
              type="number"
            />
          </div>

          <div className="bg-white p-4 rounded-md">
            <InputField
              label="Exchange Rate"
              value={exchangeRate}
              onChange={(e) => setExchangeRate(e.target.value)}
              type="number"
            />
            <InputField
              label="Product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
            <InputField
              label="Remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
            <NewDataButtons
              backLink={""}
              nextLink={""}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingBillPage;
