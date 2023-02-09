import {RevoluteJoint} from "./revoluteJoint.js";

let myName = jQuery("#name");
myName.html("Jordan");

// class RevoluteJoint {
//     constructor(cx, cy, r) {
//         this.cx = cx;
//         this.cy = cy;
//         this.r = r;
//     }
//
//     display(parent) {
//         const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//         circle.setAttribute("cx", this.cx.toString());
//         circle.setAttribute("cy", this.cy.toString());
//         circle.setAttribute("r", this.r.toString());
//         circle.setAttribute("stroke", "green");
//         circle.setAttribute("stroke-width", "4");
//         circle.setAttribute("fill", "yellow");
//         parent.appendChild(circle);
//     }
// }

const drawingBoard = document.getElementById("myDrawingBoard");

const revoluteJoint = new RevoluteJoint(50, 50, 10);
revoluteJoint.display(drawingBoard);