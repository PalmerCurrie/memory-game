/* eslint-disable react/prop-types */
import '../styles/EndScreen.css'; // Import the CSS file

export default function GameLoseScreen({highScore, onPlayAgain, onQuit, onNextLevel}) {
    // onNextlevel
    // onQuit

   
    return (
        <div className="end-screen-overlay">
            <div className="end-screen-container" >
                <h1>You Lose</h1>
                <img src="/loseGif.webp" alt="Lose GIF" className="end-gif" />
                
                <p> Your High Score Is {highScore} </p>

                <div className='button-select'>
                    <button onClick={onPlayAgain}>Play Again!</button>
                    <button onClick={onNextLevel}>Next Level</button>
                    <button onClick={onQuit}>Quit</button>
                    </div>

            </div>
        </div>

    );



}