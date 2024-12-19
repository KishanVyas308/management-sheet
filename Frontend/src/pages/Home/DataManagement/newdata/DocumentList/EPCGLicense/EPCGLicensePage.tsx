import React, { useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { authAtom } from '../../../../../../atoms/authAtom';
import { BACKEND_URL } from '../../../../../../Globle';
import InputField from '../../../../../components/InputField';
import NewDataButtons from '../../NewDataButtons';
import Loading from '../../../../../components/Loading';
import NewDataHeaderComponent from '../../NewDataHeaderComponent';

const EPCGLicensePage = () => {
    
    const { user } = useRecoilValue(authAtom);
    const [cookies] = useCookies(['token']);
    const [loading, setLoading] = useState(false);
    const [epcgLicenseDetails, setEpcgLicenseDetails] = useState({
        srNo: '',
        customerName: '',
        licenseNo: '',
        licenseDate: '',
        fileNo: '',
        fileDate: '',
        licenseType: '',
        bankGuaranteeAmountRs: '',
        bankGuaranteeValidityFrom: '',
        bankGuaranteeValidityTo: '',
        bankGuaranteeSubmittedTo: '',
        dutySavedValueAmountRs: '',
        dutySavedEoInr: '',
        dutySavedEoUsd: '',
        averageExportImposedAsPerLicense: '',
        averageExportNoOfYears: '',
        averageExportTotalAeoImposedInr: '',
        remarks: '',
    });

    const handleSubmit = async () => {
        setLoading(true);
        const { bankGuaranteeValidityFrom, bankGuaranteeValidityTo, ...restDetails } = epcgLicenseDetails;
        const jsonData = {
            ...restDetails,
            bankGuaranteeValidity: `${bankGuaranteeValidityFrom} to ${bankGuaranteeValidityTo}`,
            addedByUserId: user.id,
        };

        console.log('jsonData', jsonData);
        

        try {
            const res = await axios.post(
                `${BACKEND_URL}/documentslist/epcglicense`,
                jsonData,
                {
                    headers: {
                        Authorization: cookies.token,
                    },
                }
            );

            alert(res.data.message);
            setLoading(false);
        } catch (error) {
            alert('Error in saving data');
            setLoading(false);
        }
    };

    useMemo(() => {
        if (epcgLicenseDetails.averageExportImposedAsPerLicense && epcgLicenseDetails.averageExportNoOfYears) {
            setEpcgLicenseDetails({
                ...epcgLicenseDetails,
                averageExportTotalAeoImposedInr: (Number(epcgLicenseDetails.averageExportImposedAsPerLicense) * Number(epcgLicenseDetails.averageExportNoOfYears)).toString(),
            });
        }
    }, [epcgLicenseDetails.averageExportImposedAsPerLicense, epcgLicenseDetails.averageExportNoOfYears]);

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
                        EPCG License Details
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-4">
                        <div className="bg-white p-4 rounded-md">
                            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
                                EPCG License Information
                            </div>
                            <InputField
                                label="Sr No"
                                value={epcgLicenseDetails.srNo}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ ...epcgLicenseDetails, srNo: e.target.value })
                                }
                                type="number"
                            />
                            <InputField
                                label="Customer Name"
                                value={epcgLicenseDetails.customerName}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ ...epcgLicenseDetails, customerName: e.target.value })
                                }
                                options={['Customer 1', 'Customer 2', 'Customer 3']}
                                type="select"
                            />
                            <InputField
                                label="License No"
                                value={epcgLicenseDetails.licenseNo}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ ...epcgLicenseDetails, licenseNo: e.target.value })
                                }
                                type="number"
                            />
                            <InputField
                                label="License Date"
                                value={epcgLicenseDetails.licenseDate}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ ...epcgLicenseDetails, licenseDate: e.target.value })
                                }
                                type="date"
                            />
                            <InputField
                                label="File No"
                                value={epcgLicenseDetails.fileNo}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ ...epcgLicenseDetails, fileNo: e.target.value })
                                }
                                type="text"
                            />
                            <InputField
                                label="File Date"
                                value={epcgLicenseDetails.fileDate}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ ...epcgLicenseDetails, fileDate: e.target.value })
                                }
                                type="date"
                            />
                            <InputField
                                label="License Type"
                                value={epcgLicenseDetails.licenseType}
                                options={['Domestic', 'Import']}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ ...epcgLicenseDetails, licenseType: e.target.value })
                                }
                                type="select"
                            />
                        </div>
                        <div className="bg-white p-4 rounded-md">
                            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
                                Bank Guarantee Details
                            </div>
                            <InputField
                                label="Amount (Rs)"
                                value={epcgLicenseDetails.bankGuaranteeAmountRs}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ ...epcgLicenseDetails, bankGuaranteeAmountRs: e.target.value })
                                }
                                type="number"
                            />
                            <div className='flex gap-2'>
                                <InputField
                                    label="Validity From"
                                    value={epcgLicenseDetails.bankGuaranteeValidityFrom}
                                    onChange={(e) =>
                                        setEpcgLicenseDetails({ ...epcgLicenseDetails, bankGuaranteeValidityFrom: e.target.value })
                                    }
                                    type="date"
                                />
                                <InputField
                                    label="Validity To"
                                    value={epcgLicenseDetails.bankGuaranteeValidityTo}
                                    onChange={(e) =>
                                        setEpcgLicenseDetails({ ...epcgLicenseDetails, bankGuaranteeValidityTo: e.target.value })
                                    }
                                    type="date"
                                />
                            </div>
                            <InputField
                                label="Submitted To"
                                value={epcgLicenseDetails.bankGuaranteeSubmittedTo}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ ...epcgLicenseDetails, bankGuaranteeSubmittedTo: e.target.value })
                                }
                                type="text"
                            />
                            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
                            Duty Saved Value
                            </div>
                            <InputField
                                label="Duty Saved Value Amount (Rs)"
                                value={epcgLicenseDetails.dutySavedValueAmountRs}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ ...epcgLicenseDetails, dutySavedValueAmountRs: e.target.value })
                                }
                                type="number"
                            />
                            <InputField
                                label="Duty Saved EO (INR)"
                                value={epcgLicenseDetails.dutySavedEoInr}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ ...epcgLicenseDetails, dutySavedEoInr: e.target.value })
                                }
                                type="number"
                            />
                            <InputField
                                label="Duty Saved EO (USD)"
                                value={epcgLicenseDetails.dutySavedEoUsd}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ ...epcgLicenseDetails, dutySavedEoUsd: e.target.value })
                                }
                                type="number"
                            />
                        </div>
                        <div className="bg-white p-4 rounded-md">
                            <div className="container text-center text-green-700 font-sans font-semibold text-xl">
                            Average Export Details
                            </div>
                            <InputField
                                label="Imposed As Per License"
                                value={epcgLicenseDetails.averageExportImposedAsPerLicense}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ ...epcgLicenseDetails, averageExportImposedAsPerLicense: e.target.value })
                                }
                                type="number"
                            />
                            <InputField
                                label="No. of Years"
                                value={epcgLicenseDetails.averageExportNoOfYears}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ ...epcgLicenseDetails, averageExportNoOfYears: e.target.value })
                                }
                                type="number"
                            />
                            <InputField
                                label="Total AEO Imposed (INR)"
                                value={epcgLicenseDetails.averageExportTotalAeoImposedInr}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ 
                                        ...epcgLicenseDetails, 
                                        averageExportTotalAeoImposedInr: (Number(epcgLicenseDetails.averageExportImposedAsPerLicense) * Number(epcgLicenseDetails.averageExportNoOfYears)).toString() 
                                    })
                                }
                                readOnly
                                type="number"
                            />
                            <InputField
                                label="Remarks"
                                value={epcgLicenseDetails.remarks}
                                onChange={(e) =>
                                    setEpcgLicenseDetails({ ...epcgLicenseDetails, remarks: e.target.value })
                                }
                                type="text"
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
        </div>
    );
};

export default EPCGLicensePage;