# Balloons 🎈

**Balloons** is a high-stakes arcade game designed for web browsers, specifically optimized for touch-screen iPhones, iPads, and desktop computers.

## Game Overview

The game begins with an automatic intro. A red balloon floats up and pops itself. This triggers the **Point System** menu. Players must click the **GO** button to begin the challenge.

### The Catch

Balloons float from the bottom at increasing speeds. Players must pop "Good" balloons to earn points while avoiding "Bad" balloons. The game scales in difficulty based on your score: the higher your score, the faster the balloons float and the more frequently they appear.

---

## Scoring & Mechanics

Points are calculated based on the balloon color.

| Color | Value | Type | Behavior |
| --- | --- | --- | --- |
| **Blue** | +3 | Good | Small / Fast |
| **Purple** | +2 | Good | Small / Medium |
| **Green** | +1 | Good | Standard |
| **Cream** | 0 | Neutral | Standard |
| **Yellow** | -1 | Bad | Large / Slow |
| **Orange** | -2 | Bad | Large / Fast |
| **Red** | -3 | Bad | Largest / Fastest |

### Critical Penalty

If a **Good** balloon (Blue, Purple, or Green) reaches the top of the screen without being popped, the player loses **2 points** automatically.

---

## Technical Architecture

The game is built using **ES6 Modules**. Every script does one and only one specific task. This ensures the code is clean, clear, and easy to debug.

### File Directory

* `index.html`: The entry point. It manages the HTML structure, the intro sequence, and the UI overlays.
* `style.css`: Handles all visual styling, responsive layouts for mobile, and balloon animations.
* `constants.js`: The central data file. It stores balloon colors, point values, and game-over thresholds.
* `ui.js`: Manages the User Interface. It updates the score and toggles the visibility of the "GO" and "AGAIN" menus.
* `game.js`: The orchestrator. It controls the main game loop, calculates difficulty scaling, and checks the lose condition.
* `physics.js`: Handles the movement calculations and speed boosts as the score increases.
* `spawner.js`: A factory script that creates the physical balloon elements in the DOM.

---

## Game Over & Restart

* **Lose Condition**: The game ends if the player's score drops to **-25 points**.
* **End Scene**: A blue balloon appears and pops. A black box displays the final score.
* **Again**: A black button labeled **AGAIN** appears in the center. Clicking it resets the game state for a new round.

---

## Deployment to GitHub Pages

1. Create a new repository on GitHub named `balloons`.
2. Upload all files from this project into the main folder.
3. Go to **Settings > Pages**.
4. Set the **Source** to the `main` branch.
5. Your game will be live at `https://[your-username].github.io/balloons/`.

---

**Would you like me to add a section to the README on how to customize the -25 point lose threshold in the `constants.js` file?**