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
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../../../atoms/authAtom";

const Part5 = () => {
  const [declarationStatement, setDeclarationStatement] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [authorizedSignatory, setAuthorizedSignatory] = useState("");
  const [chaName, setChaName] = useState("");

  const [loading, setLoading] = useState(false);
  const { user } = useRecoilValue(authAtom);

  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies(["token"]);

  const handleSubmit = async () => {
    setLoading(true);
    const jsonData = {
      declarationStatement: declarationStatement,
      date: date,
      place: place,
      authorizedSignatory: authorizedSignatory,
      chaName: chaName,
      addedByUserId: user.id,
    };
    const response = await axios.post(
      "${BACKEND_URL}/shippingbill/part5",
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
          backLink={"/datamanagement/newdata/part4"}
          nextLink={"/datamanagement"}
        />

        <ShippingBillHeader />

        <div className="container text-center text-green-700 font-sans font-semibold text-[24px]">
          Shipping Bill - Part 5
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-4">
          <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Section 1
            </div>
            <InputField
              label="Declaration Statement"
              value={declarationStatement}
              onChange={(e) => setDeclarationStatement(e.target.value)}
            />
            <InputField
              label="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <InputField
              label="Place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <InputField
              label="Authorized Signatory"
              value={authorizedSignatory}
              onChange={(e) => setAuthorizedSignatory(e.target.value)}
            />
            <InputField
              label="Cha Name"
              value={chaName}
              onChange={(e) => setChaName(e.target.value)}
            />
            <NewDataButtons
              backLink={"/datamanagement/newdata/part4"}
              nextLink={"/datamanagement"}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part5;
