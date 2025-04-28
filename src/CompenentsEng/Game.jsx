import { Link } from "react-router-dom";
import { gamesData } from "../game/GamesArray";

function Game() {
    return (
        <div>
            <h2>Our Games</h2>
            <div>
                {gamesData.map(game => (
                    <div key={game.id}>
                        <h3>{game.name}</h3>
                        <Link to={`/game/${game.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Game;
