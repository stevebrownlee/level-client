import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./auth/AuthProvider.js"
import { Profile } from "./auth/Profile.js"
import { EventList } from "./event/EventList.js"
import { EventProvider } from "./event/EventProvider.js"
import { EventForm } from "./event/EventForm";
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
                <EventProvider>
                    <Route exact path="/games" render={props => <GameList {...props} />} />
                </EventProvider>
                <Route exact path="/games/new">
                    <GameForm/>
                </Route>
                <Route exact path="/games/:gameId(\d+)/edit">
                    <GameForm/>
                </Route>
            </GameProvider>

            <GameProvider>
                <EventProvider>
                    <Route exact path="/events/new" render={props => <EventForm {...props} />} />
                </EventProvider>
            </GameProvider>

            <ProfileProvider>
                <EventProvider>
                    <Route exact path="/profile" render={p => <Profile {...p} />} />
                </EventProvider>
            </ProfileProvider>

            <GameProvider>
                <EventProvider>
                    <Route exact path="/" render={props => <GameList {...props} />} />

                    <Route exact path="/events" render={p => <EventList {...p} />} />
                </EventProvider>
            </GameProvider>
        </main>
    </>
}
