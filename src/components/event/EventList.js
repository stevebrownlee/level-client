import React, { useContext, useEffect } from "react"
import { ProfileContext } from "../auth/AuthProvider.js"
import { HumanDate } from "../utils/HumanDate.js"
import { EventContext } from "./EventProvider.js"
import "./Events.css"

export const EventList = () => {
    const { events, getEvents } = useContext(EventContext)
    const { profile, getProfile } = useContext(ProfileContext)

    useEffect(() => {
        getProfile().then(getEvents)
    }, [])

    return (
        <article className="events">
            {
                events.map(event => {
                    const attending = profile.events.some(evt => evt.id === event.id)
                    return <section key={event.id} className="registration">
                        <div className="registration__game">{event.game.title}</div>
                        <div>{event.description}</div>
                        <div>
                            <HumanDate date={event.date} /> @ {event.time}
                        </div>
                        {
                            attending
                                ? <button className="btn btn-3">Leave</button>
                                : <button className="btn btn-2">Join</button>
                        }
                    </section>
                })
            }
        </article >
    )
}