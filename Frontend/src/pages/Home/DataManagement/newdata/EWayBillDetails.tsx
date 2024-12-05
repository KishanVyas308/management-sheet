
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { authAtom } from '../../../../atoms/authAtom';
import { BACKEND_URL } from '../../../../Globle';
import InputField from '../../../components/InputField';
import NewDataButtons from './NewDataButtons';
import ExistingDataHeader from '../existingdata/ExistingDataHeader';

const EWayBillDetails = () => {
    
    const { user } = useRecoilValue(authAtom);
    const [cookies] = useCookies(['token']);
    const [ewayBillDetails, setEwayBillDetails] = useState({
        ewaybillNo: '',
        ewaybillGeneratedDate: '',
        ewaybillValidUpto: '',
        ewaybillValidFrom: '',
        ewaybillModeOfTransportation: '',
        ewaybillApproxDistance: '',
        ewaybillDocumentType: '',
        ewaybillDocumentNumber: '',
        ewaybillDocumentDate: '',
        ewaybillSupplyType: '',
        ewaybillSubType: '',
        ewaybillTransactionType: '',
        supplierGstin: '',
        supplierName: '',
        supplierState: '',
        supplierDispatchFromAddress: '',
        recipientGstin: '',
        recipientName: '',
        recipientState: '',
        recipientShipToAddress: '',
        goodDetailsHsnCode: '',
        goodDetailsProductNameAndDescription: '',
        goodDetailsQuantity: '',
        goodDetailsUnit: '',
        goodDetailsTaxRate: '',
        goodDetailsTotalTaxableAmount: '',
        goodDetailsCgstAmount: '',
        goodDetailsSgstAmount: '',
        goodDetailsIgstAmount: '',
        goodDetailsCessAmount: '',
        goodDetailsOtherAmount: '',
        goodDetailsTotalInvoiceAmount: '',
        transporterGstnOrEnrolmentId: '',
        lrNoAndDate: '',
        multiVehicleInfo: '',
        vehicleType: '',
        vehicleNo: '',
    });

    const handleSubmit = async () => {
        const jsonData = {
            ...ewayBillDetails,
            addedByUserId: user.id,
        };

        try {
            const res = await axios.post(
                `${BACKEND_URL}/documentslist/ewaybilldetails`,
                jsonData,
                {
                    headers: {
                        Authorization: cookies.token,
                    },
                }
            );

            if (res.status === 200) {
                alert('Data saved successfully');
            } else {
                alert('Error in saving data');
            }
        } catch (error) {
            alert('Error in saving data');
        }
    };

    return (
        <div className="bg-[#e6e7e9] w-full h-full min-h-screen">
            <ExistingDataHeader  backLink={""} nextLink={""} />
            <div className="container mx-auto px-4 py-8">
                <div className="container text-center text-green-700 font-sans font-semibold text-[24px]">
                    E-Way Bill Details
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-4">
                    <div className="bg-white p-4 rounded-md">
                        <InputField
                            label="E-Way Bill No"
                            value={ewayBillDetails.ewaybillNo}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, ewaybillNo: e.target.value })
                            }
                        />
                        <InputField
                            label="E-Way Bill Generated Date"
                            value={ewayBillDetails.ewaybillGeneratedDate}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, ewaybillGeneratedDate: e.target.value })
                            }
                            type="date"
                        />
                        <InputField
                            label="E-Way Bill Valid Upto"
                            value={ewayBillDetails.ewaybillValidUpto}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, ewaybillValidUpto: e.target.value })
                            }
                            type="date"
                        />
                        <InputField
                            label="E-Way Bill Valid From"
                            value={ewayBillDetails.ewaybillValidFrom}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, ewaybillValidFrom: e.target.value })
                            }
                            type="date"
                        />
                        <InputField
                            label="Mode of Transportation"
                            value={ewayBillDetails.ewaybillModeOfTransportation}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, ewaybillModeOfTransportation: e.target.value })
                            }
                        />
                        <InputField
                            label="Approx Distance"
                            value={ewayBillDetails.ewaybillApproxDistance}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, ewaybillApproxDistance: e.target.value })
                            }
                        />
                        <InputField
                            label="Document Type"
                            value={ewayBillDetails.ewaybillDocumentType}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, ewaybillDocumentType: e.target.value })
                            }
                        />
                        <InputField
                            label="Document Number"
                            value={ewayBillDetails.ewaybillDocumentNumber}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, ewaybillDocumentNumber: e.target.value })
                            }
                        />
                        <InputField
                            label="Document Date"
                            value={ewayBillDetails.ewaybillDocumentDate}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, ewaybillDocumentDate: e.target.value })
                            }
                            type="date"
                        />
                        <InputField
                            label="Supply Type"
                            value={ewayBillDetails.ewaybillSupplyType}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, ewaybillSupplyType: e.target.value })
                            }
                        />
                        <InputField
                            label="Sub Type"
                            value={ewayBillDetails.ewaybillSubType}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, ewaybillSubType: e.target.value })
                            }
                        />
                        <InputField
                            label="Transaction Type"
                            value={ewayBillDetails.ewaybillTransactionType}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, ewaybillTransactionType: e.target.value })
                            }
                        />
                        <InputField
                            label="Supplier GSTIN"
                            value={ewayBillDetails.supplierGstin}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, supplierGstin: e.target.value })
                            }
                        />
                        <InputField
                            label="Supplier Name"
                            value={ewayBillDetails.supplierName}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, supplierName: e.target.value })
                            }
                        />
                        <InputField
                            label="Supplier State"
                            value={ewayBillDetails.supplierState}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, supplierState: e.target.value })
                            }
                        />
                        <InputField
                            label="Supplier Dispatch From Address"
                            value={ewayBillDetails.supplierDispatchFromAddress}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, supplierDispatchFromAddress: e.target.value })
                            }
                        />
                        <InputField
                            label="Recipient GSTIN"
                            value={ewayBillDetails.recipientGstin}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, recipientGstin: e.target.value })
                            }
                        />
                        <InputField
                            label="Recipient Name"
                            value={ewayBillDetails.recipientName}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, recipientName: e.target.value })
                            }
                        />
                        <InputField
                            label="Recipient State"
                            value={ewayBillDetails.recipientState}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, recipientState: e.target.value })
                            }
                        />
                        <InputField
                            label="Recipient Ship To Address"
                            value={ewayBillDetails.recipientShipToAddress}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, recipientShipToAddress: e.target.value })
                            }
                        />
                        <InputField
                            label="Good Details HSN Code"
                            value={ewayBillDetails.goodDetailsHsnCode}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, goodDetailsHsnCode: e.target.value })
                            }
                        />
                        <InputField
                            label="Good Details Product Name and Description"
                            value={ewayBillDetails.goodDetailsProductNameAndDescription}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, goodDetailsProductNameAndDescription: e.target.value })
                            }
                        />
                        <InputField
                            label="Good Details Quantity"
                            value={ewayBillDetails.goodDetailsQuantity}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, goodDetailsQuantity: e.target.value })
                            }
                        />
                        <InputField
                            label="Good Details Unit"
                            value={ewayBillDetails.goodDetailsUnit}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, goodDetailsUnit: e.target.value })
                            }
                        />
                        <InputField
                            label="Good Details Tax Rate"
                            value={ewayBillDetails.goodDetailsTaxRate}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, goodDetailsTaxRate: e.target.value })
                            }
                        />
                        <InputField
                            label="Good Details Total Taxable Amount"
                            value={ewayBillDetails.goodDetailsTotalTaxableAmount}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, goodDetailsTotalTaxableAmount: e.target.value })
                            }
                        />
                        <InputField
                            label="Good Details CGST Amount"
                            value={ewayBillDetails.goodDetailsCgstAmount}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, goodDetailsCgstAmount: e.target.value })
                            }
                        />
                        <InputField
                            label="Good Details SGST Amount"
                            value={ewayBillDetails.goodDetailsSgstAmount}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, goodDetailsSgstAmount: e.target.value })
                            }
                        />
                        <InputField
                            label="Good Details IGST Amount"
                            value={ewayBillDetails.goodDetailsIgstAmount}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, goodDetailsIgstAmount: e.target.value })
                            }
                        />
                        <InputField
                            label="Good Details Cess Amount"
                            value={ewayBillDetails.goodDetailsCessAmount}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, goodDetailsCessAmount: e.target.value })
                            }
                        />
                        <InputField
                            label="Good Details Other Amount"
                            value={ewayBillDetails.goodDetailsOtherAmount}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, goodDetailsOtherAmount: e.target.value })
                            }
                        />
                        <InputField
                            label="Good Details Total Invoice Amount"
                            value={ewayBillDetails.goodDetailsTotalInvoiceAmount}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, goodDetailsTotalInvoiceAmount: e.target.value })
                            }
                        />
                        <InputField
                            label="Transporter GSTN or Enrolment ID"
                            value={ewayBillDetails.transporterGstnOrEnrolmentId}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, transporterGstnOrEnrolmentId: e.target.value })
                            }
                        />
                        <InputField
                            label="LR No and Date"
                            value={ewayBillDetails.lrNoAndDate}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, lrNoAndDate: e.target.value })
                            }
                        />
                        <InputField
                            label="Multi Vehicle Info"
                            value={ewayBillDetails.multiVehicleInfo}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, multiVehicleInfo: e.target.value })
                            }
                        />
                        <InputField
                            label="Vehicle Type"
                            value={ewayBillDetails.vehicleType}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, vehicleType: e.target.value })
                            }
                        />
                        <InputField
                            label="Vehicle No"
                            value={ewayBillDetails.vehicleNo}
                            onChange={(e) =>
                                setEwayBillDetails({ ...ewayBillDetails, vehicleNo: e.target.value })
                            }
                        />
                    </div>
                </div>
                <NewDataButtons
                    backLink=""
                    nextLink=""
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default EWayBillDetails;