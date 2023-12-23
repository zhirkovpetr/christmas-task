import Header from "../header/header";
import Footer from "../footer/footer";
import Main from "../main/main";

class App {
  private container: HTMLElement;

  private header: Header;

  private main: Main;

  private footer: Footer;

  constructor() {
    this.container = document.body;
    this.header = new Header("header");
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
}

export default App;
