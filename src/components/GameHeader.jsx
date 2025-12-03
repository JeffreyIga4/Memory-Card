

export const GamerHeader = () => {

    return (
        <header className="game-header">
            <h1>🎮 Memory Card Game</h1>
            <div className="stats">
                <div className="stat-item">
                    <span className="stat-label">Score:</span> 
                    <span className="stat-value">0</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Moves:</span> 
                    <span className="stat-value">0</span>
                </div>
            </div>
        </header>
    )
}