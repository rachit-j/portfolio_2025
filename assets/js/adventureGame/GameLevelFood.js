import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';

//adds a function to set the objecst in a random position
function randomPosition() {
    let random = parseInt( (50 + Math.random()*100));
    return random
  }

class GameLevelFood {
    constructor(path){
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        let width = GameEnv.innerWidth;
        let height = GameEnv.innerHeight;

        //getting the background
        const image_src_space = path + "/images/gamify/space.png";
        const image_data_space = {
            name: 'space',
            greeting: "Good luck surviving in space! Find food to keep yourself fed!",
            src: image_src_space,
            pixels: {height: 580, width: 1038}
        }

        //player data (you are an astronaut)
        const sprite_src_astronaut = path + "/images/gamify/astronaut.png";
        const ASTRO_SCALE_FACTOR = 5;
        const sprite_data_astronaut = {
        id: 'Astronaut',
        src: sprite_src_astronaut,
        SCALE_FACTOR: ASTRONAUT_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/ASTRONAUT_SCALE_FACTOR) }, 
        pixels: {height: 384, width: 512},
        orientation: {rows: 3, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },
        left: {row: 2, start: 0, columns: 3 },
        right: {row: 1, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // wasd
        }

        //collectable data - cake
        const sprite_src_cake = path + "/images/gamify/gameCake.png";
        const sprite_data_cake = {
        id: 'Cake',
        src: sprite_src_cake,
        SCALE_FACTOR: 8,
        ANIMATION_RATE: 50,
        pixels: {height: 256, width: 352},
        INIT_POSITION: { x: randomPosition, y: randomPosition},
        orientation: {rows: 8, columns: 11 },
        down: {row: 5, start: 0, columns: 3 }, 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        }

        //collectable data - burger
        const sprite_src_burger = path + "/images/gamify/burger.png";
        const sprite_data_burger = {
        id: 'Burger',
        src: sprite_src_burger,
        SCALE_FACTOR: 8,
        ANIMATION_RATE: 50,
        pixels: {height: 256, width: 352},
        INIT_POSITION: { x: randomPosition, y: randomPosition},
        orientation: {rows: 8, columns: 11 },
        down: {row: 5, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        }

        //classify objects
        this.objects = [
            { class: Background, data: image_data_space },
            { class: Player, data: sprite_data_astronaut },
            { class: Npc, data: sprite_data_cake },
            { class: Npc, data: sprite_data_burger },
        ];
    }
}

export default GameLevelFood;
