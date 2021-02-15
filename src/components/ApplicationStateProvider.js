import React, { useState } from "react"
import Settings from "./Settings.js"

export const AppContext = React.createContext()

export const AppProvider = (props) => {
    const [userInfo, setInfo] = useState({
        token: null,
        name: null
    })

    const getUserInfo = () => {
        return userInfo
    }

    const authenticate = (credentials) => {
        return fetch(`${Settings.apiHost}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: credentials.username,
                password: credentials.password
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("lu_token", res.token)
                    localStorage.setItem("lu_name", res.name)

                    const info = getUserInfo()
                    info.token = res.token
                    info.name = res.name
                    setInfo(info)

                    return true
                }

                return false
            })
    }

    return (
        <AppContext.Provider value={{
            getUserInfo,
            authenticate
        }} >
            { props.children}
        </AppContext.Provider>
    )
}
