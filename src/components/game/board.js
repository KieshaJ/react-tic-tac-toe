import React from "react";

const renderCellValue = cell => {
    if(cell === 1) {
        return 'X';
    }
    else if(cell === 2) {
        return 'O';
    }
    else {
        return '';
    }
}

const Board = (props) => {
    const {
        setGame,
        setLogs,
        setTurn,
        setFinished,
        logs,
        turn,
        finished,
        board,
        makeMove
    } = props;

    return (
        <div className="board">
            <table>
                <tbody>
                    {board.map((row, rowIndex) => <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => <td key={cellIndex}>
                            <button
                                onClick={() => makeMove(turn, rowIndex, cellIndex, setGame, setLogs, setTurn, setFinished, logs)}
                                className="cell"
                                disabled={finished || cell !== 0}
                            >
                                {renderCellValue(cell)}
                            </button>
                        </td>)}
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default Board;