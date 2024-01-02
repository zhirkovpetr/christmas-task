import "./style.css";
import { Page } from "../../core/templates/pages";

export class Game extends Page {
  renderWrapper() {
    const ribbonCont = document.querySelector(".links:nth-child(2)");
    ribbonCont.className = "links";

    const ribbonCont2 = document.querySelector(".links:nth-child(3)");
    ribbonCont2.className = "links active-link";
  }

  render(): HTMLElement {
    this.renderWrapper();
    return this.container;
  }
}
