"use client";
import { jwtDecode } from "jwt-decode";

type JwtPayload = {
  sub: string;
  userid: number;
  username: string;
  exp: number;
};

export const getUserFromToken = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    console.log("Decoded JWT:", decoded.sub);
    return decoded;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
};
