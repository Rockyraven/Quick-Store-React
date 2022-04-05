import axios from "axios";
const { createContext, useState, useContext } = require("react");

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [encodedToken, setEncodedToken] = useState(null);

    const loginUser = async ({ email, password }) => {
        try {
            const userData = await axios.post("/api/auth/login", {
                email: email,
                password: password
            });
            setEncodedToken(userData.data.encodedToken);
            setFirstName((p) => userData.data.foundUser.firstName);
            setLastName((p) => userData.data.foundUser.lastName);
        }
        catch (error) {
            console.log("error");
          }
    }
    return (
        <AuthContext.Provider value={{ firstName, lastName, encodedToken, loginUser }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = ()=> useContext(AuthContext)
export { AuthProvider, useAuth }