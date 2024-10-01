// src/components/ProtectedRoute.tsx
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import { authAtom } from '../../atoms/authAtom';
import {  useCookies } from 'react-cookie';
import { io } from 'socket.io-client';
import { BACKEND_URL } from '../../Globle';

interface ProtectedRouteProps {
  element: JSX.Element;
}


export let socket: any = null;

function connectSocket(token : string) {
  // Ensure that socket isn't already connected or being connected
  console.log("socket is ", socket);
  
  if (!socket) {
    console.log("socket 2 is ", socket);
    socket = io("https://importexport.udhyog4.co.in/api", {
      auth: {
        token: token  // Pass the authentication token when connecting
      }
    });
    console.log("socket 3 is ", socket);
    socket.on('connect_error', (err) => {
      console.error('Connection failed:', err.message);
    });
  }
}

function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const auth = useRecoilValue(authAtom)
  const [cookies, setCookie] = useCookies(['token']);

  useEffect(() => {
   if (auth.isAuthenticated) {
     connectSocket(cookies.token);
   } else {
     disconnectSocket();
   }
  }, [auth.isAuthenticated]);

  return auth.isAuthenticated ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;
