import React, { useState, useEffect } from 'react';
import axios from "axios";

import Game from "./components/game/game";
import Logs from "./components/logs/logs";

const apiUrl = "http://localhost:4000";

const getGame = async () => {
    return await axios.get(`${apiUrl}/game`).then(res => res.data);
};

const getLogs = async () => {
    return await axios.get(`${apiUrl}/actions`).then(res => res.data);
};

const getGameFinish = log => {
    if(log) {
        if(log.gameState === 'PLAYER_1_WIN') return 1;
        else if(log.gameState === 'PLAYER_2_WIN') return 2;
        else if(log.gameState === 'DRAW') return 3;

    }
    else return 0;
}

const initGameAndLogs = async (setGame, setLogs, setTurn, setFinished) => {
    const game = await getGame();
    const logs = await getLogs();

    const gameUuid = game.gameUuid;
    const currentGameLogs = logs.filter(log => log.gameState === 'IN_PROGRESS' && log.gameUuid === gameUuid);
    const gameFinish = logs.find(log => log.gameUuid === gameUuid && (['PLAYER_1_WIN', 'PLAYER_2_WIN', 'DRAW'].includes(log.gameState)));

    setGame(game);
    setLogs(logs);

    if(currentGameLogs.length > 0) {
        setTurn(currentGameLogs[0].player === 1 ? 2 : 1);
    }
    else {
        setTurn(1);
    }

    setFinished(getGameFinish(gameFinish));
};

const startNewGame = async (setGame, setLogs, setTurn, setFinished, logs) => {
    const response = await axios.get(`${apiUrl}/new`).then(res => res);
    const { game, data } = response.data;

    setGame(game);
    setLogs([data, ...logs]);
    setTurn(1);
    setFinished(0);
};

const makeMove = async (player, xPos, yPos, setGame, setLogs, setTurn, setFinished, logs) => {
    const response = await axios.post(`${apiUrl}/action`, {player, xPos, yPos}).then(res => res);
    const { game, data } = response.data;

    setGame(game);
    setLogs([data, ...logs]);
    setTurn(player === 1 ? 2 : 1);
    setFinished(getGameFinish(data));
}

const App = () => {
    const [game, setGame] = useState({});
    const [logs, setLogs] = useState([]);
    const [turn, setTurn] = useState(1);
    const [finished, setFinished] = useState(0);

    useEffect(() => {
        initGameAndLogs(setGame, setLogs, setTurn, setFinished).then();
    }, []);

    return (
        <div className="App">
            <Game
                game={game}
                logs={logs}
                turn={turn}
                finished={finished}
                setGame={setGame}
                setLogs={setLogs}
                setTurn={setTurn}
                setFinished={setFinished}
                startNewGame={startNewGame}
                makeMove={makeMove}
            />
            <Logs logs={logs} />
        </div>
    );
}

export default App;
