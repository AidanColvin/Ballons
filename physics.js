/**
 * Calculates the next vertical position for a floating object.
 */
export function getNextFloatPos(currentPos, speed) {
    return currentPos + speed;
}

/**
 * Calculates particle trajectory using gravity.
 */
export function calculateParticleStep(state) {
    state.vy += 0.42; // gravity
    state.x += state.vx;
    state.y += state.vy;
    
    // Bounce logic
    if (state.y + state.size >= window.innerHeight) {
        state.y = window.innerHeight - state.size;
        state.vy *= -0.52;
    }
    return state;
}