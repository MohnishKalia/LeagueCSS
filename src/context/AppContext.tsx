import React from "react";
import { Champion, Data } from '../Data'

export type Pool = [Champion, Champion, Champion, Champion, Champion,];

export type Bans = {
    blueBans: Pool,
    redBans: Pool,
}

export type Locks = {
    blueLocks: Pool,
    redLocks: Pool,
}

export enum Team {
    RED, BLUE
}

export type State = {
    champions: Data,
    bannedChamps: Bans,
    lockedChamps: Locks,
    addChampionToBans: (champId: string) => void,
    lockInChampion: (champId: string, playerIndex: 0 | 1 | 2 | 3 | 4, team: Team) => void,
}

const CartContext = React.createContext<State>({
    champions: {},
    bannedChamps: {} as Bans,
    lockedChamps: {} as Locks,
    addChampionToBans: (champId: string) => { },
    lockInChampion: (champId: string, playerIndex: 0 | 1 | 2 | 3 | 4, team: Team) => { },
});


export default CartContext;