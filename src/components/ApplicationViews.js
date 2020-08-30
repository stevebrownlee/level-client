import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./auth/AuthProvider.js"
import { Profile } from "./auth/Profile.js"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <ProfileProvider>
                <GameProvider>
                    <Route exact path="/">
                        <GameList />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                </GameProvider>
            </ProfileProvider>
        </main>
    </>
}
