import "./style.css";

class Header {
  private container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement("div");
    this.container.id = id;
  }
  private addHeaderContainerToHeader() {
    const headerContainer = document.createElement("nav");
    headerContainer.id = "header-container";
    return headerContainer;
  }
  private addNavToHeader() {
    const nav = document.createElement("nav");
    nav.id = "nav-bar";
    return nav;
  }
  private addControlsToHeader() {
    const controls = document.createElement("div");
    controls.id = "header-controls";
    return controls;
  }
  private addLogoToHeader() {
    const logo = document.createElement("div");
    logo.id = "logo";
    return logo;
  }

  private addToysToHeader() {
    const toys = document.createElement("div");
    toys.id = "toys";
    toys.innerText = "toys";
    return toys;
  }
  private addTreeToHeader() {
    const tree = document.createElement("div");
    tree.id = "tree";
    tree.innerText = "tree";
    return tree;
  }
  private addSearchHeader() {
    const search = document.createElement("input");
    search.id = "search";
    search.type = "search";
    return search;
  }
  private addSelectToHeader() {
    const select = document.createElement("div");
    select.id = "select";
    return select;
  }

  private addSpanToHeader() {
    return document.createElement("span");
  }

  render() {
    const nav = this.addNavToHeader();
    const controls = this.addControlsToHeader();
    const logo = this.addLogoToHeader();
    const toys = this.addToysToHeader();
    const tree = this.addTreeToHeader();
    const search = this.addSearchHeader();
    const select = this.addSelectToHeader();
    const span = this.addSpanToHeader();
    const headerContainer = this.addHeaderContainerToHeader();
    this.container.append(headerContainer);
    headerContainer.append(nav, controls);
    nav.append(logo, toys, tree);
    select.append(span);
    controls.append(search, select);
    return this.container;
  }
}
export default Header;
