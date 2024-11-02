import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../Globle";
import { useCookies } from "react-cookie";
import ProcessMonatringHeader from "./ProcessMonatringHeader";
import InputField from "../../components/InputField";
import Loading from "../../components/Loading";
import Tooltip from "@mui/material/Tooltip";
import { useRecoilValue } from "recoil";
import { authAtom, Role } from "../../../atoms/authAtom";
import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  contactPersonName: string;
  email: string;
  isOnline: boolean;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [cookies] = useCookies(["token"]);
  const [socket, setSocket] = useState<WebSocket | null>(null); // WebSocket instance
  const [modalUserId, setModalUserId] = useState<string | null>(null); // Track which user's modal is open
  const [allUsersShippingBill, setAllUsersShippingBill] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedDetail, setSelectedDetail] = useState<any | null>(null);

  const currentUser = useRecoilValue(authAtom);
  const navigate = useNavigate();
  const [selectedUserDirectExportsDetail, setSelectedUserDirectExportsDetail] = useState<any | null>(null);
  const [selectedUserShippingBillDetail, setSelectedUserShippingBillDetail] = useState<any | null>(null);

  // Fetch all users initially
  useEffect(() => {
    if (currentUser.user.role !== Role.ADMIN) {
      alert("You are not authorized to view this page");
      navigate("/");
    }
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BACKEND_URL}/manageUser/getallusers`,
          {
            headers: {
              Authorization: cookies.token,
            },
          }
        );
        console.log(response.data);

        setUsers(response.data);

        // Fetch all users shipping bill
        const shippingBillResponse = await axios.get(
          `${BACKEND_URL}/manageUserShippingBill/getAllUsersShippingBill`,
          {
            headers: {
              Authorization: cookies.token,
            },
          }
        );

        setAllUsersShippingBill(shippingBillResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch users", error);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [cookies.token]);


  const handleOnOpenUserDetail = async (userId: string) => {
    setModalUserId(userId);
    console.log("userId", userId);


    const directexportsRes = await axios.get(
      `${BACKEND_URL}/manageUser/usercompleteddirectexports/${userId}`,
      {
        headers: {
          Authorization: cookies.token,
        },
      }
    );
    console.log(directexportsRes.data);
    setSelectedUserDirectExportsDetail(directexportsRes.data);

    const shippingBillResponse = await axios.get(
      `${BACKEND_URL}/manageUserShippingBill/usercompletedshippingbills/${userId}`,
      {
        headers: {
          Authorization: cookies.token,
        },
      }
    );

    console.log(shippingBillResponse.data);
    setSelectedUserShippingBillDetail(shippingBillResponse.data);

  }

  const handleOnOpenDetailedView = (detail: any) => {
    setSelectedDetail(detail);
  }


  return (
    <div className="bg-[#e6e7e8] min-h-screen h-full">
      <ProcessMonatringHeader />
      <div className="grid p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 items-center justify-center mt-10">
        {users.map((user: any) => (
          user.role == "USER" &&
          <div
            key={user.id}
            className="m-auto w-[300px] h-[320px] rounded-lg shadow-lg bg-white p-4 flex flex-col justify-between"
          >
            <div>
              <Card
                userName={user.contactPersonName}
                userEmail={user.email}
                isActive={user.isOnline}
              />
              {allUsersShippingBill && allUsersShippingBill?.map((shippingBill) => {
                if (shippingBill.addedByUserId === user.id) {
                  return (
                    <div key={shippingBill.id} className="mt-4">


                      <p className="text-gray-700 text-base mt-2">
                        shippingBill Detail  -- {" "}
                        <span className="text-black font-semibold">

                          {shippingBill.currentExportersName}
                        </span>

                      </p>

                      <div className="flex rounded items-center  ">
                        <span className="text-gray-700 text-sm ">
                          part 1 -- {" "}
                        </span>
                        <GreenGrayBar
                          isCompleted={shippingBill.isPart1Section1Completed}
                          tooltip="Part1Section1"
                        />
                        <GreenGrayBar
                          isCompleted={shippingBill.isPart1Section2Completed}
                          tooltip="Part1Section2"
                        />
                        <GreenGrayBar
                          isCompleted={shippingBill.isPart1Section3Completed}
                          tooltip="Part1Section3"
                        />
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-700 text-sm  ">
                          part 2 -- {" "}
                        </span>

                        <GreenGrayBar
                          isCompleted={shippingBill.isPart2Section1Completed}
                          tooltip="Part2Section1"
                        />
                        <GreenGrayBar
                          isCompleted={shippingBill.isPart2Section2Completed}
                          tooltip="Part2Section2"
                        />
                        <GreenGrayBar
                          isCompleted={shippingBill.isPart2Section3Completed}
                          tooltip="Part2Section3"
                        />
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-700 text-sm  ">
                          part 3 -- {" "}
                        </span>
                        <GreenGrayBar
                          isCompleted={shippingBill.isPart3Section1Completed}
                          tooltip="Part3Section1"
                        />
                        <GreenGrayBar
                          isCompleted={shippingBill.isPart3Section2Completed}
                          tooltip="Part3Section2"
                        />

                        <GreenGrayBar
                          isCompleted={shippingBill.isPart3Section3Completed}
                          tooltip="Part3Section3"
                        />
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-700 text-sm  ">
                          part 4 -- {" "}
                        </span>
                        <GreenGrayBar
                          isCompleted={shippingBill.isPart4Section1Completed}
                          tooltip="Part4Section1"
                        />
                        <GreenGrayBar
                          isCompleted={shippingBill.isPart4Section2Completed}
                          tooltip="Part4Section2"
                        />
                        <GreenGrayBar
                          isCompleted={shippingBill.isPart4Section3Completed}
                          tooltip="Part4Section3"
                        />
                        <GreenGrayBar
                          isCompleted={shippingBill.isPart4Section4Completed}
                          tooltip="Part4Section4"
                        />
                        <GreenGrayBar
                          isCompleted={shippingBill.isPart4Section5Completed}
                          tooltip="Part4Section5"
                        />
                        <GreenGrayBar
                          isCompleted={shippingBill.isPart4Section6Completed}
                          tooltip="Part4Section6"
                        />
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-700 text-sm  ">
                          part 5 -- {" "}
                        </span>
                        <GreenGrayBar
                          isCompleted={shippingBill.isPart5Completed}
                          tooltip="Part5"
                        />
                      </div>
                    </div>

                  );
                }
                return null;
              })}
            </div>
            <button
              className="bg-green-500 text-sm hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mt-4"
              onClick={() => handleOnOpenUserDetail(user.id)} // Set the user ID for which modal should open
            >
              User Detail
            </button>
            {modalUserId && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-[80vw] h-[70vh]">
                  {/* upper header  */}
                  <div className="flex justify-between">
                    <h1 className="text-xl font-semibold">{user.contactPersonName}</h1>

                    {/* add close button */}
                    <button
                      className=" top-4 right-4 bg-red-500 text-white font-semibold py-2 px-4 rounded"
                      onClick={() => setModalUserId(null)}
                    >
                      Close
                    </button>
                  </div>
                  {/* completed direct export detail */}
                  <div>
                    <h2 className="text-lg font-semibold mt-4">Completed Direct Exports - {" "} {selectedUserDirectExportsDetail && selectedUserDirectExportsDetail.length}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                      {selectedUserDirectExportsDetail && selectedUserDirectExportsDetail
                        .sort((a: any, b: any) => new Date(b.basicSheet.uploadedDate).getTime() - new Date(a.basicSheet.uploadedDate).getTime())
                        .map((detail: any, index: number) => (
                          <div key={index} className="bg-gray-100 hover:bg-slate-200   rounded-lg shadow-md">
                            <Tooltip title="Click to view detailed view" arrow >
                              <div className="flex justify-between cursor-pointer p-4" onClick={() => handleOnOpenDetailedView(detail)}>
                                <p className="text-gray-700 mt-2">Company name: <span className="font-semibold"> {detail.basicSheet.companyName}</span></p>
                                <p className="text-gray-700 mt-2">{
                                  new Date(detail.basicSheet.uploadedDate).toLocaleDateString('en-GB')
                                }</p>
                              </div>
                            </Tooltip>

                            {selectedDetail && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 overflow-auto">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                  <div className="flex justify-between">
                                  <h1 className="text-xl font-semibold">Detailed View</h1>
                                  <button
                                    className="bg-red-500 text-white font-semibold py-2 px-4 rounded"
                                    onClick={() => setSelectedDetail(null)}
                                  >
                                    Close
                                  </button>
                                  </div>
                                  <div className="flex flex-row gap-5 mt-4 overflow-auto max-h-[80vh]">
                                  <div className="bg-slate-100 p-4 rounded-lg shadow-md w-full h-full">
                                    <h2 className="text-lg font-semibold mb-2">BasicSheet</h2>
                                    <table className="min-w-full bg-white">
                                    <tbody>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Company Name:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.companyName}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Uploaded Date:</td>
                                    <td className="border px-4 py-2">{new Date(selectedDetail.basicSheet.uploadedDate).toLocaleDateString('en-GB')}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Sr No:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.srNo}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Shipping Bill No:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.shippingBillNo}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Shipping Bill Date:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.shippingBillDate}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Exporters Name:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.exportersName}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">HS Code And Description:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.hsCodeAndDescription}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">EPCG Lic No:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.epcgLicNo}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">CIF Value:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.cifValue}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Freight:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.freight}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Insurance:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.insurance}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">BRC:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.brc}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Exchange Rate Or Proprtion Ratio:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.exchangeRateOrProprtionRatio}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">CIF Value2:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.cifValue2}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Freight2:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.freight2}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Insurance2:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.insurance2}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">BRC2:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.brc2}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Exchange Rate:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.exchangeRate}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Product:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.product}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Remarks:</td>
                                    <td className="border px-4 py-2">{selectedDetail.basicSheet.remarks}</td>
                                    </tr>
                                    </tbody>
                                    </table>
                                  </div>
                                  <div className="bg-slate-100 p-4 rounded-lg shadow-md w-full h-full">
                                    <h2 className="text-lg font-semibold mb-2">Annexure1</h2>
                                    <table className="min-w-full bg-white">
                                    <tbody>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Sr No:</td>
                                    <td className="border px-4 py-2">{selectedDetail.Annexure1.srNo}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Shipping Bill No:</td>
                                    <td className="border px-4 py-2">{selectedDetail.Annexure1.shippingBillNo}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Shipping Bill Date:</td>
                                    <td className="border px-4 py-2">{selectedDetail.Annexure1.shippingBillDate}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Shipping Bill Cif Value In Doller:</td>
                                    <td className="border px-4 py-2">{selectedDetail.Annexure1.shippingBillCifValueInDoller}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">BRC Value:</td>
                                    <td className="border px-4 py-2">{selectedDetail.Annexure1.brcValue}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Lower Of SB And BRC:</td>
                                    <td className="border px-4 py-2">{selectedDetail.Annexure1.lowerOfSbAndBrc}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Shipping Bill Freight:</td>
                                    <td className="border px-4 py-2">{selectedDetail.Annexure1.shippingBillFreight}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Shipping Bill Insurance:</td>
                                    <td className="border px-4 py-2">{selectedDetail.Annexure1.shippingBillInsurance}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">FOB Value In Doller:</td>
                                    <td className="border px-4 py-2">{selectedDetail.Annexure1.fobValueInDoller}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Exchange Rate Per Shipping Bill:</td>
                                    <td className="border px-4 py-2">{selectedDetail.Annexure1.ExchangeRatePerShippingBill}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">FOB Value In Rupees:</td>
                                    <td className="border px-4 py-2">{selectedDetail.Annexure1.fobValueInRupees}</td>
                                    </tr>
                                    </tbody>
                                    </table>
                                  </div>
                                  <div className="bg-slate-100 p-4 rounded-lg shadow-md w-full h-full">
                                    <h2 className="text-lg font-semibold mb-2">AnnexureA</h2>
                                    <table className="min-w-full bg-white">
                                    <tbody>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Sr No:</td>
                                    <td className="border px-4 py-2">{selectedDetail.AnnexureA.srNo}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Product Exportered:</td>
                                    <td className="border px-4 py-2">{selectedDetail.AnnexureA.productExportered}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Shipping Bill Number:</td>
                                    <td className="border px-4 py-2">{selectedDetail.AnnexureA.shippingBillNumber}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Shipping Bill Date:</td>
                                    <td className="border px-4 py-2">{selectedDetail.AnnexureA.shippingBillDate}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Direct Exports In Rupees:</td>
                                    <td className="border px-4 py-2">{selectedDetail.AnnexureA.directExportsInRupees}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Direct Exports In Dollars:</td>
                                    <td className="border px-4 py-2">{selectedDetail.AnnexureA.directExportsInDollars}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Deemed Exports:</td>
                                    <td className="border px-4 py-2">{selectedDetail.AnnexureA.deemedExports}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Third Party Exports In Rupees:</td>
                                    <td className="border px-4 py-2">{selectedDetail.AnnexureA.thirdPartyExportsInRupees}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Third Party Exports In Dollars:</td>
                                    <td className="border px-4 py-2">{selectedDetail.AnnexureA.thirdPartyExportsInDollars}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">By Group Company:</td>
                                    <td className="border px-4 py-2">{selectedDetail.AnnexureA.byGroupCompany}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Other RW Series:</td>
                                    <td className="border px-4 py-2">{selectedDetail.AnnexureA.otherRWseries}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Total In Rupees:</td>
                                    <td className="border px-4 py-2">{selectedDetail.AnnexureA.totalInRupees}</td>
                                    </tr>
                                    <tr>
                                    <td className="border px-4 py-2 font-semibold">Total In Dollars:</td>
                                    <td className="border px-4 py-2">{selectedDetail.AnnexureA.totalInDollars}</td>
                                    </tr>
                                    </tbody>
                                    </table>
                                  </div>
                                  </div>
                                </div>
                                </div>
                            )}
                          </div>


                        ))}
                    </div>

                  </div>
                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  userName: string;
  userEmail: string;
  isActive: boolean;
}

const Card: React.FC<CardProps> = ({ userName, userEmail, isActive }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <div className="flex items-center space-x-4">
        <span
          className={`h-4 w-4 rounded-md ${isActive ? "bg-green-500" : "bg-red-500"
            }`}
        ></span>
        <div className="flex-1 space-y-1">
          <div className="font-bold text-gray-700 text-xl mb-2">{userName}</div>
          <p className="text-gray-700 text-base">{userEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default App;

const GreenGrayBar = ({ isCompleted, tooltip }) => {
  return (
    <Tooltip title={tooltip} arrow>
      <div className="flex">

        <span
          className={`h-3 w-6 ${isCompleted ? "bg-green-500" : "bg-red-500"}`}
        ></span>
        <span className="w-0.5 h-3 bg-gray-700"></span>
      </div>
    </Tooltip>
  );
};
