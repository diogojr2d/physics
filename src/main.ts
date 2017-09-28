import Entity from "./Entity"
import Box from "./Box"

export default class Game {
    entities: Entity[];

    constructor(width: number, height: number) {
        this.entities = [];
        Globais.canvas = document.createElement("canvas");
        Globais.canvas.width = width;
        Globais.canvas.height = height;

        Globais.ctx = Globais.canvas.getContext("2d");
        document.body.appendChild(Globais.canvas);

        // Add Event Listeners
        Globais.canvas.addEventListener("mousedown", click);
        
        this.entities.push(new Box(50, 20, Globais.size, Globais.size));
    }
    
    // Main Loop
    public run(): void {
        this.update();
        this.draw();

        window.requestAnimationFrame(() => this.run());
    }

    private update(): void {
        for (const entity of this.entities) {
            entity.update();
        }
    }

    private draw(): void {
        for (const entity of this.entities) {
            entity.draw();
        }
    }
}

const game = new Game(800, 600);
game.run();

function click(evt) {
    let x: number = evt.clientX;
    let y: number = evt.clientY;

    let b: Box = new Box(x, y, Globais.size, Globais.size);

    game.entities.push(b);
}
