import React, { useContext, useEffect } from "react"
import { ProfileContext } from "../auth/AuthProvider.js"
import { GameContext } from "./GameProvider.js"
import "./Games.css"

export const GameList = () => {
    const { games, getGames } = useContext(GameContext)
    const { profile, getProfile } = useContext(ProfileContext)

    useEffect(() => {
       getProfile().then(getGames)
    }, [])

    return (
        <article className="games">
            {
                games.map(game => {
                    const attending = profile.events.some(evt => evt.game.id === game.id)
                    return <section className="game">
                        <div className="game__title">{ game.title } by { game.maker }</div>
                        <div className="game__players">{ game.number_of_players } players needed</div>
                        <div className="game__skillLevel">Skill level is { game.skill_level }</div>
                        {
                            attending
                                ? <button className="btn btn-3">Leave</button>
                                : <button className="btn btn-2">Join</button>
                        }
                    </section>
                })
            }
        </article>
    )
}