import React from "react";

const renderLog = (log, index) => {
    return (
        <tr key={index}>
            <td>{log.id}</td>
            <td>{log.player}</td>
            <td>{log.actionType}</td>
            <td>{log.xPos}</td>
            <td>{log.yPos}</td>
            <td>{log.gameState}</td>
            <td>{log.gameUuid}</td>
            <td>{log.createdAt}</td>
        </tr>
    );
};

const Logs = (props) => {
    return (
        <div className="logs">
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Player</th>
                        <th>Action Type</th>
                        <th>X Position</th>
                        <th>Y Position</th>
                        <th>Game State</th>
                        <th>Game UUID</th>
                        <th>Created Date</th>
                    </tr>
                    {props.logs.map((log, index) => renderLog(log, index))}
                </tbody>
            </table>
        </div>
    );
}

export default Logs;