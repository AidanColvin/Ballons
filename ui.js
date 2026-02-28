/**
 * Updates the score display in the DOM.
 */
export function updateScoreUI(score) {
    const scoreValue = document.getElementById('score-value');
    if (scoreValue) scoreValue.innerText = score;
}

/**
 * Shows the main game UI.
 */
export function showGameUI() {
    document.getElementById('score-board').style.display = 'block';
}

/**
 * Triggers the flash overlay animation.
 */
export function triggerFlash() {
    const flash = document.getElementById('flash');
    flash.classList.add('pop');
}