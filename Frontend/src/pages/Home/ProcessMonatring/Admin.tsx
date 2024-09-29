import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../atoms/authAtom";
import axios from "axios";
import { socket } from "../../components/ProtectedRoute";
import { BACKEND_URL } from "../../../Globle";
import { useCookies } from "react-cookie";
import ProcessMonatringHeader from "./ProcessMonatringHeader";

interface User {
  id: string;
  contactPersonName: string;
  email: string;
  isOnline: boolean;
}

// Declare socket variable outside the component to ensure it's not re-created on every render

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [cookies, setCookie] = useCookies(["token"]);
  

  // Fetch all users initially
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/manageUser/getallusers`,
          {
            headers: {
              Authorization: cookies.token,
            },
          }
        ); // Adjust URL as needed
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };

    fetchUsers();

    socket.on("userConnected", (user) => {
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? { ...u, isOnline: true } : u))
      );
      console.log("New user connected:", user);
    });

    socket.on("userDisconnected", (user) => {
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? { ...u, isOnline: false } : u))
      );
      console.log("User disconnected:", user);
    });

    // Clean up on component unmount
    return () => {
      socket.off("userConnected");
      socket.off("userDisconnected");
    };
  }, []);

  return (
    <div className="bg-[#e6e7e8] min-h-screen h-full">
      <ProcessMonatringHeader />
      {users.map((user) => (
        <div className="" key={user.id}>
          <Card
            userName={user.contactPersonName}
            userEmail={user.email}
            isActive={user.isOnline}
          />
        </div>
        // <div key={user.id}>
        //   <span>
        //     {user.name} ({user.email}):{" "}
        //   </span>
        //   <span style={{ color: user.isOnline ? "green" : "red" }}>
        //     ● {user.isOnline ? "Online" : "Offline"}
        //   </span>
        // </div>
      ))}
    </div>
  );
};

interface CardProps {
  userName: string;
  userEmail: string;
  isActive: boolean;
}

const Card: React.FC<CardProps> = ({ userName, userEmail, isActive }) => {
  console.log(userName, userEmail, isActive);
  
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
