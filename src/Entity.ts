import Component from "./Component"

export default abstract class Entity {
    protected components: Component[];

    constructor() {}

    update() {}

    draw() {}
}