export class Arrow {
    //TODO Write a class for the arrowhead
    #line
    #x1
    #x2
    #y1
    #y2

    constructor(x1, y1, x2, y2, attributes = []) {
        this.#x1 = x1;
        this.#y1 = y1;
        this.#x2 = x2;
        this.#y2 = y2;
        this.#line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.#line.setAttribute("x1", this.#x1.toString());
        this.#line.setAttribute("y1", this.#y1.toString());
        this.#line.setAttribute("x2", this.#x2.toString());
        this.#line.setAttribute("y2", this.#y2.toString());

        //Default properties
        this.#line.setAttribute("stroke", "black");
        this.#line.setAttribute("stroke-width", "1");
        $

    }

    display(parent) {
        parent.appendChild(this.#line);
    }
}