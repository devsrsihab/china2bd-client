// src/context/UserContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "@/utils/userInfo";

// Define the type for user data
interface User {
  user_id: number;
  role: string;
  exp: number;
  iat: string;
  jti: string;
}

// Create the UserContext with default value as null
const UserContext = createContext<User | null>(null);

// Create a custom hook to access user data
export const useUser = () => {
  return useContext(UserContext);
};

// Create the UserProvider component
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser(); // Fetch user data
      setUser(currentUser); // Set user data to state
    };

    fetchUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
