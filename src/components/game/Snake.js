import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";

import './Snake.css';

import {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    SPEED,
    DIRECTIONS,
} from "./constants";

function Snake() {
    const canvasRef = useRef(null);

    const [snake, setSnake] = useState(SNAKE_START);
    const [apple, setApple] = useState(APPLE_START);
    const [direction, setDirection] = useState([0, 1]);
    const [speed, setSpeed] = useState(null);
    const [gameOver, setGameOver] = useState(false);


    const startGame = () => {
        setSnake(SNAKE_START);
        setApple(APPLE_START);
        setDirection([0, 1]);
        setSpeed(SPEED);
        setGameOver(false);
    };
    const endGame = () => {
        setSpeed(null);
        setGameOver(true);
    };
    const moveSnake = ({ keyCode }) => (keyCode >= 37 && keyCode <= 40) && setDirection(DIRECTIONS[keyCode]);
    const createApple = () => apple.map((_, i) => Math.floor(Math.random() * (CANVAS_SIZE[i]) / SCALE));
    const checkCollision = (piece, snk = snake,) => {
        if (piece[0] * SCALE >= CANVAS_SIZE[0] ||
            piece[0] < 0 ||
            piece[1] * SCALE >= CANVAS_SIZE[1] ||
            piece[1] < 0) return true;


        for (const segment of snk) {
            if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
        }

        return false;
    };
    const checkAppleCollision = (newSnake) => {
        if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
            let newApple = createApple();
            while (checkCollision(newApple, newSnake)) {
                newApple = createApple();
            }
            setApple(newApple);
            return true;
        }
        return false;
    };
    const gameLoop = () => {
        const snakeCopy = JSON.parse(JSON.stringify(snake));
        const newSnakeHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]];
        snakeCopy.unshift(newSnakeHead);
        if (checkCollision(newSnakeHead)) endGame();
        if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
        setSnake(snakeCopy);
    };

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
        context.fillStyle = "#43D9AD";
        snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
        context.fillStyle = "#43D9AD";
        context.fillRect(apple[0], apple[1], 1, 1);
    }, [snake, apple, gameOver]);



    useInterval(() => gameLoop(), speed);

    return (
        <div id="game-wrapper" role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
            <canvas
                id="game"
                ref={canvasRef}
                width={`${CANVAS_SIZE[0]}px`}
                height={`${CANVAS_SIZE[1]}px`}
            >
            </canvas>
            {gameOver && <div className="light-bg-box" id="game-over"><p>GAME_OVER!</p></div>}
            <div id="stats-section">
                <div className="light-bg-box">
                    <p>// use keyboard</p>
                    <p>// arrows to play</p>
                    <div className="key-row top-key-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="30" viewBox="0 0 51 30" fill="none">
                            <rect x="1.46094" y="1.46356" width="48.0787" height="27.6912" rx="7.5" fill="#010C15" stroke="#1E2D3D" />
                            <path d="M25.5 12.3091L29.75 18.3091H21.25L25.5 12.3091Z" fill="white" />
                        </svg>
                    </div>
                    <div className="key-row">

                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 50 30" fill="none">
                            <rect x="49.0786" y="28.6547" width="48.0787" height="27.6912" rx="7.5" transform="rotate(-180 49.0786 28.6547)" fill="#010C15" stroke="#1E2D3D" />
                            <path d="M22.0391 14.8091L28.0391 10.5591L28.0391 19.0592L22.0391 14.8091Z" fill="white" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="30" viewBox="0 0 51 30" fill="none">
                            <rect x="49.5391" y="28.6547" width="48.0787" height="27.6912" rx="7.5" transform="rotate(-180 49.5391 28.6547)" fill="#010C15" stroke="#1E2D3D" />
                            <path d="M25.5 17.8091L21.25 11.8091L29.75 11.8091L25.5 17.8091Z" fill="white" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 50 30" fill="none">
                            <rect x="49" y="28.6547" width="48.0787" height="27.6912" rx="7.5" transform="rotate(-180 49 28.6547)" fill="#010C15" stroke="#1E2D3D" />
                            <path d="M27.9604 14.8091L21.9604 19.0592L21.9604 10.5591L27.9604 14.8091Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className="light-bg-box">
                    <p>{`Current Score: ${snake.length}`}</p>
                </div>
                <button id="start-game-button" onClick={startGame}>start-game</button>
            </div>
        </div >
    );
}

export default Snake;