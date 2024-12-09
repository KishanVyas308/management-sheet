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
        invoice,
        {
          headers: {
            Authorization: cookies.token,
          },
        }
      );

     alert(res.data.message)
      // Handle form submission
      console.log(invoice);
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
            <InputField label="Seller Name" value={invoice.sellerName} onChange={handleChange} />
            <InputField label="Seller Address" value={invoice.sellerAddress} onChange={handleChange} />
            <InputField label="Seller PAN Number" value={invoice.sellerPanNumber} onChange={handleChange} />
            <InputField label="Seller GST Number" value={invoice.sellerGstNumber} onChange={handleChange} />
          </div>
          <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Buyer Details
            </div>
            <InputField label="Buyer Bill To Name" value={invoice.buyerBillToName} onChange={handleChange} />
            <InputField label="Buyer Bill To Address" value={invoice.buyerBillToAddress} onChange={handleChange} />
            <InputField label="Buyer Contact Number" value={invoice.buyerContactNumber} onChange={handleChange} />
            <InputField label="Buyer GST Number" value={invoice.buyerGstNumber} onChange={handleChange} />
            <InputField label="Buyer Ship To Name" value={invoice.buyerShipToName} onChange={handleChange} />
            <InputField label="Buyer Ship To Address" value={invoice.buyerShipToAddress} onChange={handleChange} />
            <InputField label="Buyer Ship To Contact Number" value={invoice.buyerShipToContactNumber} onChange={handleChange} />
            <InputField label="Buyer Ship To GST Number" value={invoice.buyerShipToGstNumber} onChange={handleChange} />
          </div>
          <div className="bg-white p-4 rounded-md">
            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
              Invoice Details
            </div>
            <InputField label="Invoice Number" value={invoice.invoiceNumber} onChange={handleChange} />
            <InputField label="Invoice Date" value={invoice.invoiceDate} onChange={handleChange} type="date" />
            <InputField label="Quick Response Code" value={invoice.quickResponseCode} onChange={handleChange} />
            <InputField label="Product Detail Sr No" value={invoice.productDetailSrNo} onChange={handleChange} />
            <InputField label="Product Detail Description" value={invoice.productDetailDescription} onChange={handleChange} />
            <InputField label="Product Detail HSN" value={invoice.productDetailHSN} onChange={handleChange} />
            <InputField label="Product Detail Type Of Products" value={invoice.productDetailTypeOfProducts} onChange={handleChange} />
            <InputField label="Product Detail UQC" value={invoice.productDetailUQC} onChange={handleChange} />
            <InputField label="Product Detail Qty" value={invoice.productDetailQty} onChange={handleChange} />
            <InputField label="Product Detail Rate Of Product" value={invoice.productDetailRateOfProduct} onChange={handleChange} />
            <InputField label="Product Detail Amount" value={invoice.productDetailAmount} onChange={handleChange} />
            <InputField label="Product Detail Tax Payable On RCM" value={invoice.productDetailTaxPayableOnRcm} onChange={handleChange} />
            <InputField label="Sub Total" value={invoice.subTotal} onChange={handleChange} />
            <InputField label="Amount In Words" value={invoice.amountInWords} onChange={handleChange} />
            <InputField label="Notes" value={invoice.notes} onChange={handleChange} />
            <InputField label="Bank Name" value={invoice.bankName} onChange={handleChange} />
            <InputField label="Account Number" value={invoice.accountNumber} onChange={handleChange} />
            <InputField label="IFSC Code" value={invoice.ifscCode} onChange={handleChange} />
            <InputField label="Tax Rate" value={invoice.taxRate} onChange={handleChange} />
            <InputField label="IGST" value={invoice.igst} onChange={handleChange} />
            <InputField label="CGST" value={invoice.cgst} onChange={handleChange} />
            <InputField label="SGST" value={invoice.sgst} onChange={handleChange} />
            <InputField label="Terms And Conditions" value={invoice.termsAndConditions} onChange={handleChange} />
            <InputField label="Authorized Signature" value={invoice.authorizedSignature} onChange={handleChange} />
          </div>
        </div>
        <NewDataButtons backLink="" nextLink="" handleSubmit={handleSubmit} />
      </div>
    </div>
    </div>
  );
};

export default Invoice;
