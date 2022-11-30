import { getSuggestedQuery } from "@testing-library/react";
import { createContext, useContext, useEffect, useState } from "react";
import { verifyJWT } from "../helpers/jwtHelper";
import { getCurrentUser } from "../services/UserServices";
import { getAccessToken, logout, setToken } from "../store/AccesTokenStore";

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState()

    const login = (token) => {
        setToken(token)
        getUser()
    }

    const getUser = (cb) => {
        getCurrentUser()
            .then(user => {
                setUser(user)
            })
    }

    useEffect(() => {
        if(getAccessToken()) {
            if(!verifyJWT(getAccessToken())) {
                logout()
            } else {
                getUser()
            }
        }
    }, [])

    const value = {
        user,
        login,
        getUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext