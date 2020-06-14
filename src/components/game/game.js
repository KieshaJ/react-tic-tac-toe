import React from "react";

import Board from "./board";
import Controls from "./controls";

const Game = (props) => {
    const {
        game,
        logs,
        turn,
        finished,
        setGame,
        setLogs,
        setTurn,
        setFinished,
        startNewGame,
        makeMove
    } = props;

    return(
        <div className="game">
            <Board
                setGame={setGame}
                setLogs={setLogs}
                setTurn={setTurn}
                setFinished={setFinished}
                logs={logs}
                turn={turn}
                finished={finished}
                board={game.gameBoard || []}
                makeMove={makeMove}
            />
            <Controls
                setGame={setGame}
                setLogs={setLogs}
                setTurn={setTurn}
                setFinished={setFinished}
                logs={logs}
                turn={turn}
                finished={finished}
                startNewGame={startNewGame}
            />
        </div>
    );
}

export default Game;