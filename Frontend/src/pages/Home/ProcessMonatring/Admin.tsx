import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../atoms/authAtom";
import axios from "axios";
import { BACKEND_URL } from "../../../Globle";
import { useCookies } from "react-cookie";
import ProcessMonatringHeader from "./ProcessMonatringHeader";

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

  // Fetch all users initially
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/manageUser/getallusers`, {
          headers: {
            Authorization: cookies.token,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };

    fetchUsers();
  }, [cookies.token]);

  useEffect(() => {
    // Initialize WebSocket connection
    const ws = new WebSocket(`https://importexport.udhyog4.co.in/api/socket?token=${cookies.token}`);

    // Set WebSocket instance to state
    setSocket(ws);

    // Handle incoming messages
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      if (data.event === "userConnected") {
        setUsers((prevUsers) =>
          prevUsers.map((u) => (u.id === data.data.id ? { ...u, isOnline: true } : u))
        );
      }

      if (data.event === "userDisconnected") {
        setUsers((prevUsers) =>
          prevUsers.map((u) => (u.id === data.data.id ? { ...u, isOnline: false } : u))
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
          <div key={user.id} className="m-auto w-[300px] h-[300px] rounded-lg shadow-lg bg-white p-4">
            <Card userName={user.contactPersonName} userEmail={user.email} isActive={user.isOnline} />
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
          className={`h-4 w-4 rounded-full ${isActive ? "bg-green-500" : "bg-red-500"}`}
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
