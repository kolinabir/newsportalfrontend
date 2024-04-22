"use client";
import React, { useEffect } from "react";
import { useAuth } from "../auth-context";
import { redirect } from "next/navigation";

const DashBoardPage = () => {
  const { user, loading } = useAuth();
  const isUser = user && !loading;
  useEffect(() => {
    if (!isUser && !loading) {
      redirect("/login");
    }
  }, [user, loading, isUser]);
  return <div>Asdasdasdsadasdsa</div>;
};

export default DashBoardPage;
