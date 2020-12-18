import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EventContext } from "../event/EventProvider.js"
import { HumanDate } from "../utils/HumanDate.js"
import { GameContext } from "./GameProvider.js"
import "./Games.css"

export const GameList = () => {
    const history = useHistory()
    const { games, getGames } = useContext(GameContext)
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents().then(getGames)
    }, [])

    return (
        <article className="games">
            <header>
                <h1>Level Up Games</h1>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/games/new" })
                    }}
                >Register New Game</button>
            </header>
            {
                games.map(game => {
                    const gameEvents = events.filter(e => e.game.id === game.id)
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title} by {game.maker}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__skillLevel">Skill level is {game.skill_level}</div>
                        <h4>Upcoming Events</h4>
                        {
                            events.filter(event => event.game.id === game.id)
                                .map(event => {
                                return <div key={`gameEvent--${event.id}`}>
                                    <HumanDate date={event.date} /> @ {event.time}
                                </div>
                            })
                        }
                        <div className="game__edit">
                            <button className="btn btn-3"
                                    onClick={e => history.push(`/games/${game.id}/edit`)}
                                    >Edit</button>
                        </div>
                    </section>
                })
            }
        </article>
    )
}