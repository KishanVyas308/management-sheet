import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../components/Loading";
import { BACKEND_URL } from "../../../../../Globle";
import { useCookies } from "react-cookie";
import NewDataHeaderComponent from "../NewDataHeaderComponent";
import NewDataButtons from "../NewDataButtons";
import InputField from "../../../../components/InputField";
import ShippingBillHeader from "./ShippingBillHeader";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../../../atoms/authAtom";

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
  const { user } = useRecoilValue(authAtom);

  const [loading, setLoading] = useState(false);

  const handleSubmitSection1 = async (e: any) => {
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
      addedByUserId: user.id,
    };
    const response = await axios.post(
      `${BACKEND_URL}/shippingbill/part3section1`,
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
      addedByUserId: user.id,
    };
    const response = await axios.post(
      `${BACKEND_URL}/shippingbill/part3section2`,
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
      sqcUqc: sqcUqc,
      stateOfOrigin: stateOfOrigin,
      districtOfOrigin: districtOfOrigin,
      ptAbroad: ptAbroad,
      compCess: compCess,
      endUse: endUse,
      ftaBenefitAvailed: ftaBenefitAvailed,
      rewardBenefit: rewardBenefit,
      thirdPartyItem: thirdPartyItem,
      addedByUserId: user.id,
    };
    const response = await axios.post(
      `${BACKEND_URL}/shippingbill/part3section3`,
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
          backLink={"/datamanagement/newdata/part2"}
          nextLink={"/datamanagement/newdata/part4"}
        />
        <ShippingBillHeader />

        <div className="container text-center text-green-700 font-sans font-semibold text-[24px]">
        Shipping Bill - Part 3
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-4">
          <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Section 1
            </div>
            <InputField label="invsn" value={invsn} onChange={(e) => setInvsn(e.target.value)} />
            <InputField label="itemsn" value={itemsn} onChange={(e) => setItemsn(e.target.value)} />
            <InputField label="hsCd" value={hsCd} onChange={(e) => setHsCd(e.target.value)} />
            <InputField label="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <InputField label="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <InputField label="uqc" value={uqc} onChange={(e) => setUqc(e.target.value)} />
            <InputField label="rate" value={rate} onChange={(e) => setRate(e.target.value)} />
            <InputField label="valueFc" value={valueFc} onChange={(e) => setValueFc(e.target.value)} />
            <InputField label="fobInr" value={fobInr} onChange={(e) => setFobInr(e.target.value)} />
            <InputField label="pmv" value={pmv} onChange={(e) => setPmv(e.target.value)} />
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
            <InputField label="dutyAmt" value={dutyAmt} onChange={(e) => setDutyAmt(e.target.value)} />
            <InputField label="cessRt" value={cessRt} onChange={(e) => setCessRt(e.target.value)} />
            <InputField label="cesamt" value={cesamt} onChange={(e) => setCesamt(e.target.value)} />
            <InputField label="dbkclmd" value={dbkclmd} onChange={(e) => setDbkclmd(e.target.value)} />
            <InputField label="igststat" value={igststat} onChange={(e) => setIgststat(e.target.value)} />
            <InputField label="igstValue" value={igstValue} onChange={(e) => setIgstValue(e.target.value)} />
            <InputField label="igstAmount" value={igstAmount} onChange={(e) => setIgstAmount(e.target.value)} />
            <InputField label="schcod" value={schcod} onChange={(e) => setSchcod(e.target.value)} />
            <InputField label="schemeDescription" value={schemeDescription} onChange={(e) => setSchemeDescription(e.target.value)} />
            <InputField label="sqcMsr" value={sqcMsr} onChange={(e) => setSqcMsr(e.target.value)} />
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
            <InputField label="sqcUqc" value={sqcUqc} onChange={(e) => setSqcUqc(e.target.value)} />
            <InputField label="stateOfOrigin" value={stateOfOrigin} onChange={(e) => setStateOfOrigin(e.target.value)} />
            <InputField label="districtOfOrigin" value={districtOfOrigin} onChange={(e) => setDistrictOfOrigin(e.target.value)} />
            <InputField label="ptAbroad" value={ptAbroad} onChange={(e) => setPtAbroad(e.target.value)} />
            <InputField label="compCess" value={compCess} onChange={(e) => setCompCess(e.target.value)} />
            <InputField label="endUse" value={endUse} onChange={(e) => setEndUse(e.target.value)} />
            <InputField label="ftaBenefitAvailed" value={ftaBenefitAvailed} onChange={(e) => setFtaBenefitAvailed(e.target.value)} />
            <InputField label="rewardBenefit" value={rewardBenefit} onChange={(e) => setRewardBenefit(e.target.value)} />
            <InputField label="thirdPartyItem" value={thirdPartyItem} onChange={(e) => setThirdPartyItem(e.target.value)} />


            <NewDataButtons
              backLink={"/datamanagement/newdata/part2"}
              nextLink={"/datamanagement/newdata/part4"}
              handleSubmit={handleSubmitSection3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
