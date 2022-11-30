import { getSuggestedQuery } from "@testing-library/react";
import { createContext, useContext, useState } from "react";
import { setToken } from "../store/AccesTokenStore";

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState()

    const login = (token) => {
        setToken(token)
        getUser()
    }

    const getUser = (cb) => {
        getCurrentUser
    }
}