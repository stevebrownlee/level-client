import React, { useContext, useEffect } from "react"
import { ProfileContext } from "../auth/AuthProvider.js"
import { HumanDate } from "../utils/HumanDate.js"
import { EventContext } from "./EventProvider.js"
import "./Events.css"

export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)
    const { profile, getProfile } = useContext(ProfileContext)

    useEffect(() => {
        getProfile().then(getEvents)
    }, [])

    return (
        <article className="events">
            <header className="events__header">
                <h1>Level Up Game Events</h1>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        props.history.push({ pathname: "/events/new" })
                    }}
                >Register New Event</button>
            </header>
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