import React from 'react'
import { IPlayer } from '../Interfaces'
import './Players.css';

interface props {
    player: IPlayer
    removePlayer(playerToRemove: string): void;
}

const Players = ({ player, removePlayer }: props) => {

    return (
        <div className='singlePlayer'>
            <div className="d-flex w-100 justify-content-between stylesdisplay">
                <h5 className="mb-1">{player.playersName} </h5>
                <h5 className="mb-1">{player.role} </h5>
                <button onClick={() => {
                    removePlayer(player.playersName)
                }} className='buttonStyle'>Remove</button>
            </div>
        </div>
    )
}

export default Players