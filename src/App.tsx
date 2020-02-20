import React from 'react';
import './App.css';
import AppContext, { TeamPlayers, Player, GameState } from './context/AppContext';
import Header from './components/Header';
import Main from './components/Main';
import Champions from './Champions'

const App = () => {
    const shuffle = (array: any[]) => {

        let currentIndex = array.length;
        let temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    const generateRandomTeam = () => {
        const team = [] as Player[];
        const roles = ["Top", "Jungle", "Middle", "Bottom", "Support"];
        shuffle(roles);
        roles.forEach(role => {
            team.push({
                role,
                name: String(Math.random() * 1000),
                ban: undefined,
                select: undefined,
                lock: undefined,
            });
        })

        return team as TeamPlayers;
    }

    return (
        <AppContext.Provider value={{
            champions: Champions,
            teams: {
                red: generateRandomTeam(),
                blue: generateRandomTeam(),
            },
            state: 0,
            banChampion: (champId: string, player: Player) => console.log('banned', { champId, player }),
            selectChampion: (champId: string, player: Player) => console.log('select', { champId, player }),
            lockChampion: (champId: string, player: Player) => console.log('locked', { champId, player }),
            setGameState: (state: GameState) => console.log('change state', { state })
        }}>
            <Header />
            <Main />
        </AppContext.Provider >
    );
}

export default App;