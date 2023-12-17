import Header from "../header/header";
import Footer from "../footer/footer";

class App {
  private container: HTMLElement;

  private header: Header;

  private footer: Footer;

  constructor() {
    this.container = document.body;
    this.header = new Header("header");
    this.footer = new Footer("footer");
  }

  run() {
    const headerHTML = this.header.render();
    const footerHTML = this.footer.render();
    this.container.append(headerHTML);
    this.container.append(footerHTML);
  }
}

export default App;
