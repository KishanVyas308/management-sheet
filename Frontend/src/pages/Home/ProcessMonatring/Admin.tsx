import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../Globle";
import { useCookies } from "react-cookie";
import ProcessMonatringHeader from "./ProcessMonatringHeader";
import InputField from "../../components/InputField";
import Loading from "../../components/Loading";

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

  // Fetch all users initially
  useEffect(() => {
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
        console.log(shippingBillResponse.data);
        
        setAllUsersShippingBill(shippingBillResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch users", error);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [cookies.token]);

  useEffect(() => {
    // Initialize WebSocket connection
    const ws = new WebSocket(
      `https://importexport.udhyog4.co.in/api/socket?token=${cookies.token}`
    );

    // Set WebSocket instance to state
    setSocket(ws);

    // Handle incoming messages
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.event === "userConnected") {
        setUsers((prevUsers) =>
          prevUsers.map((u) =>
            u.id === data.data.id ? { ...u, isOnline: true } : u
          )
        );
      }

      if (data.event === "userDisconnected") {
        setUsers((prevUsers) =>
          prevUsers.map((u) =>
            u.id === data.data.id ? { ...u, isOnline: false } : u
          )
        );
      }

      if (data.event === "statusChanged") {
        // Handle status update event if needed
      }
    };

    // Handle WebSocket disconnection
    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    // Handle errors
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Clean up on component unmount
    return () => {
      ws.close();
    };
  }, [cookies.token]);

  return (
    <div className="bg-[#e6e7e8] min-h-screen h-full">
      <ProcessMonatringHeader />
      <div className="grid p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 items-center justify-center mt-10">
        {users.map((user) => (
          <div
            key={user.id}
            className="m-auto w-[300px] h-[300px] rounded-lg shadow-lg bg-white p-4"
          >
            <Card
              userName={user.contactPersonName}
              userEmail={user.email}
              isActive={user.isOnline}
            />
            <button
              className="bg-green-500 text-sm hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mt-4"
              onClick={() => setModalUserId(user.id)} // Set the user ID for which modal should open
            >
              Assign Task
            </button>
            {modalUserId === user.id && (
              <AssignTaskModal
                userId={user.id}
                onClose={() => setModalUserId(null)} // Close modal
              />
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
          className={`h-4 w-4 rounded-full ${
            isActive ? "bg-green-500" : "bg-red-500"
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

interface AssignTaskModalProps {
  userId: string;
  onClose: () => void;
}

const AssignTaskModal: React.FC<AssignTaskModalProps> = ({
  userId,
  onClose,
}) => {
  const [totalShippingBill, setTotalShippingBill] = useState("");
  const [cookies] = useCookies(["token"]);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleAssignTask = async () => {
    try {
      setIsLoaded(true);
      await axios.post(
        `${BACKEND_URL}/manageUserShippingBill/assignNewTask`,
        { userId, totalShippingBill },
        {
          headers: {
            Authorization: cookies.token,
          },
        }
      );
      onClose();
      setIsLoaded(false);
    } catch (error) {
      console.error("Failed to assign task", error);
      setIsLoaded(false);
    }
  };

  return (
    
      isLoaded ? (
        <Loading />
      )
    :
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-5">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          Assign New Shipping Bill Task
        </h2>
        <InputField
          label="Total No. of Shipping Bills"
          value={totalShippingBill}
          type="number"
          onChange={(e) => setTotalShippingBill(e.target.value)}
        />
        <div className="flex justify-end space-x-2 mt-10">
          <button
            className=" border border-red-700 border-solid font-semibold text-red-700 py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded"
            onClick={handleAssignTask}
          >
            Assign
          </button>
        </div>
      </div>
    </div>
  
  );
};
