export function updateScoreUI(score) { document.getElementById('score-value').innerText = score; }
export function showGameUI() { document.getElementById('score-board').style.display = 'block'; }
export function triggerFlash() { document.getElementById('flash').classList.add('pop'); }
