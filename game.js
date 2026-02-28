import * as UI from './ui.js';
import * as Physics from './physics.js';
import * as Spawner from './spawner.js';
import { GAME_SETTINGS } from './constants.js';

let score = 0;
let isGameRunning = false;

/**
 * Primary game loop for a single balloon.
 */
function animateBalloon(balloonObj) {
    let pos = -150;
    
    function step() {
        pos = Physics.getNextFloatPos(pos, balloonObj.type.speed);
        balloonObj.el.style.bottom = `${pos}px`;

        if (pos > window.innerHeight) {
            balloonObj.el.remove();
        } else if (balloonObj.el.parentNode) {
            requestAnimationFrame(step);
        }
    }

    balloonObj.el.addEventListener('pointerdown', () => {
        score += balloonObj.type.points;
        UI.updateScoreUI(score);
        balloonObj.el.remove();
    });

    requestAnimationFrame(step);
}

/**
 * Starts spawning balloons.
 */
export function startSpawning() {
    isGameRunning = true;
    UI.showGameUI();
    
    setInterval(() => {
        if (!isGameRunning) return;
        const newBalloon = Spawner.createBalloonElement();
        animateBalloon(newBalloon);
    }, GAME_SETTINGS.spawnRate);
}