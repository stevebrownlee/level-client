import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./auth/AuthProvider.js"
import { Profile } from "./auth/Profile.js"
import { EventList } from "./event/EventList.js"
import { EventProvider } from "./event/EventProvider.js"
import { GameForm } from "./game/GameForm.js"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <GameProvider>
                <Route exact path="/games/new">
                    <GameForm />
                </Route>
            </GameProvider>
            <ProfileProvider>
                <GameProvider>
                    <EventProvider>
                        <Route exact path="/" render={props => <GameList {...props} />} />

                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                        <Route exact path="/events">
                            <EventList />
                        </Route>
                    </EventProvider>
                </GameProvider>
            </ProfileProvider>
        </main>
    </>
}
