"use client";
import React, { useEffect } from "react";
import { useAuth } from "../auth-context";
import { redirect } from "next/navigation";

const DashBoardPage = () => {
  const { user, loading } = useAuth();
  const isUser = user && !loading;

  return <div>Asdasdasdsadasdsa</div>;
};

export default DashBoardPage;
