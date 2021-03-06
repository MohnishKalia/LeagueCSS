import React from "react";
import { Champion, Data } from '../Champions'

export interface Teams {
    red: TeamPlayers
    blue: TeamPlayers
}

export interface Player {
    role: string,
    name: string,
    ban: Champion | undefined,
    select: Champion | undefined,
    lock: Champion | undefined,
}

export enum GameState {
    Declare, Ban, Pick
}

export type TeamPlayers = [Player, Player, Player, Player, Player,];

export type State = {
    champions: Data,
    teams: Teams,
    state: GameState
    banChampion: (champ: Champion, player: Player) => void,
    selectChampion: (champ: Champion, player: Player) => void,
    lockChampion: (champ: Champion, player: Player) => void,
    setGameState: (state: GameState) => void,
}

const AppContext = React.createContext<State>({} as State);


export default AppContext;