import axios from "axios";
import { useNavigate } from "react-router-dom";
const { createContext, useState, useContext, useEffect } = require("react");

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [encodedToken, setEncodedToken] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const loginHandler = async ({ email, password }) => {
    try {
      console.log(email);
      console.log(password);
      const response = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem(
        "user",
        JSON.stringify({
          encodedToken: response.data.encodedToken,
          firstName: response.data.foundUser.firstName,
          lastName: response.data.foundUser.lastName,
          email: response.data.foundUser.email,
        })
      );
      setUser({
        encodedToken: response.data.encodedToken,
        firstName: response.data.foundUser.firstName,
        lastName: response.data.foundUser.lastName,
        email: response.data.foundUser.email,
      });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };
  const logoutHandler = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  const signUpHandler = async (formData) => {
    try {
      const response = await axios.post("/api/auth/signup",formData);
      localStorage.setItem(
        "user",
        JSON.stringify({
          encodedToken: response.data.encodedToken,
          firstName: response.data.createdUser.firstName,
          lastName: response.data.createdUser.lastName,
          email: response.data.createdUser.email,
        })
      );
      setUser({
        encodedToken: response.data.encodedToken,
        firstName: response.data.createdUser.firstName,
        lastName: response.data.createdUser.lastName,
        email: response.data.createdUser.email,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        firstName,
        lastName,
        encodedToken,
        email,
        password,
        setEmail,
        setPassword,
        loginHandler,
        user,
        logoutHandler,
        signUpHandler
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
