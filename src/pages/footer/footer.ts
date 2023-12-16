import "./style.css";

class Footer {
  private container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement("div");
    this.container.id = id;
  }

  private addFooterToFooter() {
    const footerContainer = document.createElement("div");
    footerContainer.id = "footer";
    return footerContainer;
  }

  private addFooterContainerToHeader() {
    const headerContainer = document.createElement("div");
    headerContainer.id = "footer-container";
    return headerContainer;
  }

  private addLinkToRSFooter() {
    const a = document.createElement("a");
    a.id = "footer_rs";
    a.href = "https://https://rs.school/";
    a.target = "_blank";
    return a;
  }

  private addLinkToGHFooter() {
    const a = document.createElement("a");
    a.id = "footer_gh";
    a.href = "https://github.com/zhirkovpetr";
    a.target = "_blank";
    return a;
  }

  private addReservedToFooter() {
    const p = document.createElement("p");
    p.id = "reserved_footer";
    p.innerText = "©2021 All Right Reserved";
    return p;
  }

  render() {
    const linkRS = this.addLinkToRSFooter();
    const reserved = this.addReservedToFooter();
    const linkGH = this.addLinkToGHFooter();
    const footer = this.addFooterToFooter();
    const footerContainer = this.addFooterContainerToHeader();
    this.container.append(footer);
    footer.append(footerContainer);
    footerContainer.append(linkRS, reserved, linkGH)
    return this.container;
  }
}

export default Footer;
