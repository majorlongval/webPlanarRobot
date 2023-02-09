import {Arrow} from "./arrow.js";

export class RevoluteJoint {
    #circle;
    #xaxis;
    #yaxis;

    constructor(cx, cy, r, attributes = []) {
        this.#circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.#circle.setAttribute("cx", cx.toString());
        this.#circle.setAttribute("cy", cy.toString());
        this.#circle.setAttribute("r", r.toString());

        const x2 = cx + r;
        const y2 = cy + r;
        this.#xaxis = new Arrow(cx, cy, x2, cy);
        this.#yaxis = new Arrow(cx, cy, cx, y2);

        //Default properties
        this.#circle.setAttribute("stroke", "black");
        this.#circle.setAttribute("fill-opacity", "1");
        this.#circle.setAttribute("stroke-width", "1");

        //Custom properties
        for (let attribute of attributes) {
            if (attribute[0] in this.#circle) {
                this.#circle.setAttribute(attribute[0], attribute[1].toString());
            }
        }
    }

    display(parent) {
        parent.appendChild(this.#circle);
        this.#xaxis.display(parent);
        this.#yaxis.display(parent);
    }
}
