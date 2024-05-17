"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://server.searchbdnews.com/auth/check-auth",
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUser(data.data);
          setLoading(false);
        } else {
          console.error("Error fetching user details");
          localStorage.removeItem("token");
          setUser(null);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user details", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  const signIn = async (userId, password) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://server.searchbdnews.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, password }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.data.token);
        setUser(data.user);
        // reload page
        window.location.reload();
      } else {
        throw new Error("Invalid userId or password");
      }
    } catch (error) {
      console.error("Error during login", error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const value = { user, loading, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
