import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./UseLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const navigate = useNavigate();

  const login = async (data) => {
    // const person = await authServices.auth(data);

    // if (person) {
    //   var user_data = person.data;
    //   if (user_data.message.code === "200") {
    //     console.log("user:", user_data.result);
    //     setUser(user_data.result);
    //     return true;
    //   } else {
    //     setUser(null);
    //     return false;
    //   }
    // }
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
