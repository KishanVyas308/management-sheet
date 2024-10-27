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

  const currentUser = useRecoilValue(authAtom);
  const navigate = useNavigate();

  // Fetch all users initially
  useEffect(() => {
    if(currentUser.user.role !== Role.ADMIN) {
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


  return (
    <div className="bg-[#e6e7e8] min-h-screen h-full">
      <ProcessMonatringHeader />
      <div className="grid p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 items-center justify-center mt-10">
        {users.map((user : any) => (
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
              onClick={() => setModalUserId(user.id)} // Set the user ID for which modal should open
            >
              User Detail
            </button>

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
