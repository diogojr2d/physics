import Entity from "./Entity"
import Box from "./Box"

export default class Game {
    static entities: Array<Entity>;

    constructor(width: number, height: number) {
        Globais.canvas = document.createElement("canvas");
        Globais.canvas.width = width;
        Globais.canvas.height = height;

        Globais.ctx = Globais.canvas.getContext("2d");
        document.body.appendChild(Globais.canvas);

        // Add Event Listeners
        Globais.canvas.addEventListener("mousedown", click);
        
        Globais.entities.push(new Box(50, 20, Globais.size, Globais.size));
    }
    
    // Main Loop
    run() {
        this.update();
        this.draw();

        window.requestAnimationFrame(this.run);
    }

    private update() {
        for (let i = 0; i < Globais.entities.length; i++) {
            Globais.entities[i].update();
        }
    }

    private draw() {
        for (let i = 0; i < Globais.entities.length; i++) {
            Globais.entities[i].draw();
        }
    }
}

Globais.entities = new Array<Entity>();
let game = new Game(800, 600);
game.run();

function click(evt) {
    let x: number = evt.clientX;
    let y: number = evt.clientY;

    let b: Box = new Box(x, y, Globais.size, Globais.size);

    Game.entities.push(b);
}
