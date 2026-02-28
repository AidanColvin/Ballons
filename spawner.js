import { BALLOON_TYPES } from './constants.js';
export function createBalloonElement() {
    const type = BALLOON_TYPES[Math.floor(Math.random() * BALLOON_TYPES.length)];
    const el = document.createElement('div');
    el.className = 'game-balloon';
    el.style.backgroundColor = type.color;
    el.style.width = type.size + 'px';
    el.style.height = (type.size * 1.2) + 'px';
    el.style.left = Math.random() * (window.innerWidth - type.size) + 'px';
    el.style.bottom = '-150px';
    document.body.appendChild(el);
    return { el, type };
}
