/**
 * Data configuration for balloon types.
 * Negative balloons are larger and faster to trick the player.
 */
export const BALLOON_TYPES = [
    { color: '#d32f2f', points: -3, size: 110, speed: 5.0 },
    { color: '#ff9800', points: -2, size: 100, speed: 4.5 },
    { color: '#ffeb3b', points: -1, size: 90,  speed: 4.0 },
    { color: '#f5f5dc', points: 0,  size: 80,  speed: 3.0 },
    { color: '#4caf50', points: 1,  size: 80,  speed: 3.0 },
    { color: '#9c27b0', points: 2,  size: 75,  speed: 3.5 },
    { color: '#2196f3', points: 3,  size: 70,  speed: 4.0 }
];

export const GAME_SETTINGS = {
    spawnRate: 1000,
    gravity: 0.42,
    particleCount: 80
};