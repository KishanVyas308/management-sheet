import React, { useState } from 'react'
import InputField from '../../../../../components/InputField';
import NewDataButtons from '../../NewDataButtons';
import ExistingDataHeader from '../../../existingdata/ExistingDataHeader';
import axios from 'axios';
import { BACKEND_URL } from '../../../../../../Globle';
import { useCookies } from 'react-cookie';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../../../../../atoms/authAtom';
import Loading from '../../../../../components/Loading';
import NewDataHeaderComponent from '../../NewDataHeaderComponent';

const Invoice = () => {

  const [cookies, setCookie] = useCookies(["token"]);
  const { user } = useRecoilValue(authAtom);
  const [loading, setLoading] = useState(false);


  const [invoice, setInvoice] = useState({
    sellerName: '',
    sellerAddress: '',
    sellerPanNumber: '',
    sellerGstNumber: '',
    buyerBillToName: '',
    buyerBillToAddress: '',
    buyerContactNumber: '',
    buyerGstNumber: '',
    buyerShipToName: '',
    buyerShipToAddress: '',
    buyerShipToContactNumber: '',
    buyerShipToGstNumber: '',
    invoiceNumber: '',
    invoiceDate: '',
    quickResponseCode: '',
    productDetailSrNo: '',
    productDetailDescription: '',
    productDetailHSN: '',
    productDetailTypeOfProducts: '',
    productDetailUQC: '',
    productDetailQty: '',
    productDetailRateOfProduct: '',
    productDetailAmount: '',
    productDetailTaxPayableOnRcm: '',
    subTotal: '',
    amountInWords: '',
    notes: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    taxRate: '',
    igst: '',
    cgst: '',
    sgst: '',
    termsAndConditions: '',
    authorizedSignature: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    const jsonData = {
      ...invoice,
      addedByUserId: user.id,
    };

    try {
      const res = await axios.post(
        `${BACKEND_URL}/documentslist/invoice`,
        jsonData,
        {
          headers: {
            Authorization: cookies.token,
          },
        }
      );

     alert(res.data.message)
      // Handle form submission
      console.log(res);
      setLoading(false);
    } catch (error) {
      alert('Error in saving data');
      setLoading(false);
    }
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
      <div className="container mx-auto px-4 py-8">
        <div className="container text-center text-green-700 font-sans font-semibold text-[24px]">
          Invoice
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-4">
            <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Seller Details
            </div>
            <InputField label="Seller Name" value={invoice.sellerName} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              sellerName: e.target.value,
              }));
            }} />
            <InputField label="Seller Address" value={invoice.sellerAddress} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              sellerAddress: e.target.value,
              }));
            }} />
            <InputField label="Seller PAN Number" value={invoice.sellerPanNumber} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              sellerPanNumber: e.target.value,
              }));
            }} />
            <InputField label="Seller GST Number" value={invoice.sellerGstNumber} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              sellerGstNumber: e.target.value,
              }));
            }} />
            </div>
            <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Buyer Details
            </div>
            <InputField label="Buyer Bill To Name" value={invoice.buyerBillToName} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              buyerBillToName: e.target.value,
              }));
            }} />
            <InputField label="Buyer Bill To Address" value={invoice.buyerBillToAddress} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              buyerBillToAddress: e.target.value,
              }));
            }} />
            <InputField label="Buyer Contact Number" value={invoice.buyerContactNumber} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              buyerContactNumber: e.target.value,
              }));
            }} />
            <InputField label="Buyer GST Number" value={invoice.buyerGstNumber} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              buyerGstNumber: e.target.value,
              }));
            }} />
            <InputField label="Buyer Ship To Name" value={invoice.buyerShipToName} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              buyerShipToName: e.target.value,
              }));
            }} />
            <InputField label="Buyer Ship To Address" value={invoice.buyerShipToAddress} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              buyerShipToAddress: e.target.value,
              }));
            }} />
            <InputField label="Buyer Ship To Contact Number" value={invoice.buyerShipToContactNumber} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              buyerShipToContactNumber: e.target.value,
              }));
            }} />
            <InputField label="Buyer Ship To GST Number" value={invoice.buyerShipToGstNumber} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              buyerShipToGstNumber: e.target.value,
              }));
            }} />
            </div>
            <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Invoice Details
            </div>
            <InputField label="Invoice Number" value={invoice.invoiceNumber} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              invoiceNumber: e.target.value,
              }));
            }} />
            <InputField label="Invoice Date" value={invoice.invoiceDate} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              invoiceDate: e.target.value,
              }));
            }} type="date" />
            <InputField label="Quick Response Code" value={invoice.quickResponseCode} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              quickResponseCode: e.target.value,
              }));
            }} />
            <InputField label="Product Detail Sr No" value={invoice.productDetailSrNo} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              productDetailSrNo: e.target.value,
              }));
            }} />
            <InputField label="Product Detail Description" value={invoice.productDetailDescription} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              productDetailDescription: e.target.value,
              }));
            }} />
            <InputField label="Product Detail HSN" value={invoice.productDetailHSN} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              productDetailHSN: e.target.value,
              }));
            }} />
            <InputField label="Product Detail Type Of Products" value={invoice.productDetailTypeOfProducts} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              productDetailTypeOfProducts: e.target.value,
              }));
            }} />
            <InputField label="Product Detail UQC" value={invoice.productDetailUQC} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              productDetailUQC: e.target.value,
              }));
            }} />
            <InputField label="Product Detail Qty" value={invoice.productDetailQty} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              productDetailQty: e.target.value,
              }));
            }} />
            <InputField label="Product Detail Rate Of Product" value={invoice.productDetailRateOfProduct} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              productDetailRateOfProduct: e.target.value,
              }));
            }} />
            <InputField label="Product Detail Amount" value={invoice.productDetailAmount} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              productDetailAmount: e.target.value,
              }));
            }} />
            <InputField label="Product Detail Tax Payable On RCM" value={invoice.productDetailTaxPayableOnRcm} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              productDetailTaxPayableOnRcm: e.target.value,
              }));
            }} />
            <InputField label="Sub Total" value={invoice.subTotal} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              subTotal: e.target.value,
              }));
            }} />
            <InputField label="Amount In Words" value={invoice.amountInWords} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              amountInWords: e.target.value,
              }));
            }} />
            <InputField label="Notes" value={invoice.notes} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              notes: e.target.value,
              }));
            }} />
            <InputField label="Bank Name" value={invoice.bankName} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              bankName: e.target.value,
              }));
            }} />
            <InputField label="Account Number" value={invoice.accountNumber} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              accountNumber: e.target.value,
              }));
            }} />
            <InputField label="IFSC Code" value={invoice.ifscCode} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              ifscCode: e.target.value,
              }));
            }} />
            <InputField label="Tax Rate" value={invoice.taxRate} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              taxRate: e.target.value,
              }));
            }} />
            <InputField label="IGST" value={invoice.igst} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              igst: e.target.value,
              }));
            }} />
            <InputField label="CGST" value={invoice.cgst} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              cgst: e.target.value,
              }));
            }} />
            <InputField label="SGST" value={invoice.sgst} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              sgst: e.target.value,
              }));
            }} />
            <InputField label="Terms And Conditions" value={invoice.termsAndConditions} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              termsAndConditions: e.target.value,
              }));
            }} />
            <InputField label="Authorized Signature" value={invoice.authorizedSignature} onChange={(e) => {
              setInvoice((prevInvoice) => ({
              ...prevInvoice,
              authorizedSignature: e.target.value,
              }));
            }} />
            </div>
        </div>
        <NewDataButtons backLink="" nextLink="" handleSubmit={handleSubmit} />
      </div>
    </div>
    </div>
  );
};

export default Invoice;
