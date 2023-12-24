import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Main } from "../main/main";
import { MainPage } from "../mainPage/mainPage";
import { Page } from "../../core/templates/pages";
import { Toys } from "../toys/toys";
import { Game } from "../game/game";

/*export const enum PageIds {
  MainPage = "main-page",
  ToysPage = "toys-page",
  GamePage = "game-page",
}*/

export class App {
  private static container: HTMLElement = document.body;

  private static defaultPageId = "current-page";

  private initialPage: MainPage;

  private header: Header;

  private main: Main;

  private footer: Footer;

  constructor() {
    this.initialPage = new MainPage("main-page");
    this.header = new Header("header", "header", "header");
    this.main = new Main("main", "main", "main");
    this.footer = new Footer("footer");
  }

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === "main-page") {
      page = new MainPage(idPage);
    } else if (idPage === "toys-page") {
      page = new Toys(idPage);
    } else if (idPage === "game-page") {
      page = new Game(idPage);
    }
    if (page) {
      const pageHTML = page.render();
      const mainDiv = document.getElementById("main");
      pageHTML.id = App.defaultPageId;
      mainDiv.append(pageHTML);
      page.afterRender();
    }
  }

  private enableRouteChange() {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  run() {
    App.container.append(this.header.render());
    App.container.append(this.main.render());
    App.renderNewPage("main-page");
    App.container.append(this.footer.render());
    this.enableRouteChange();

    window.location.replace("#main-page");
    if (typeof window.history.replaceState == "function") {
      history.replaceState({}, "", window.location.href.slice(0, 0));
    }
  }
}

/*class App {
  private container: HTMLElement;

  private header: Header;

  private main: Main;

  private footer: Footer;

  constructor() {
    this.container = document.body;
    this.header = new Header("header");
    this.main = new Main("main");
    this.footer = new Footer("footer");
  }

  run() {
    const headerHTML = this.header.render();
    const mainHTML = this.main.render();
    const footerHTML = this.footer.render();
    this.container.append(headerHTML);
    this.container.append(mainHTML);
    this.container.append(footerHTML);
  }
}*/

export default App;
