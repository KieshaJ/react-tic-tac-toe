import React from "react";

const getGameStatus = (turn, finished) => {
    if(finished === 1) return 'Player 1 Has Won!';
    else if(finished === 2) return 'Player 2 Has Won!';
    else if(finished === 3) return 'Draw!';
    else return `Player ${turn} Turn`;
}

const Controls = (props) => {
    const {
        setGame,
        setLogs,
        setTurn,
        setFinished,
        logs,
        turn,
        finished,
        startNewGame
    } = props;

    return(
        <div className="controls">
            <div>
                <h1>{getGameStatus(turn, finished)}</h1>
                <button
                    onClick={() => startNewGame(setGame, setLogs, setTurn, setFinished, logs)}
                    className="start-game-btn"
                >Start New Game</button>
            </div>
        </div>
    );
};

export default Controls;