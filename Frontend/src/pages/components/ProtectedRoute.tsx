// src/components/ProtectedRoute.tsx
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import { authAtom } from '../../atoms/authAtom';
import {  useCookies } from 'react-cookie';

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const auth = useRecoilValue(authAtom)

  return auth.isAuthenticated ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;
