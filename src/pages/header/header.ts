import "./style.css";
import { Components } from "../../core/templates/components";

interface IButtons {
  id: string;
  text: string;
}

const Buttons: IButtons[] = [
  {
    id: "main-page",
    text: "",
  },
  {
    id: "toys-page",
    text: "игрушки",
  },
  {
    id: "game-page",
    text: "ёлки",
  },
];

export class Header extends Components {
  renderPageButtons() {
    const pageButtons = document.createElement("div");
    pageButtons.classList.add("navigation");

    const wrapperHeader = document.createElement("div");
    const searchAndFavorites = document.createElement("div");

    const inputSearch = document.createElement("input");
    inputSearch.classList.add("input-search");
    inputSearch.type = "search";
    inputSearch.name = "search";
    inputSearch.innerHTML = "";
    inputSearch.placeholder = "Поиск";
    inputSearch.id = "search";
    inputSearch.autocomplete = "off";

    const favorites = document.createElement("div");
    favorites.classList.add("favorites");
    const spanFavorites = document.createElement("span");
    spanFavorites.innerHTML = "0";
    favorites.append(spanFavorites);
    searchAndFavorites.classList.add("search-favorites");
    wrapperHeader.classList.add("wrapper");
    wrapperHeader.append(pageButtons, searchAndFavorites);
    searchAndFavorites.append(inputSearch, favorites);

    Buttons.forEach((button) => {
      const buttonHTML = document.createElement("a");
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerHTML = button.text;
      buttonHTML.classList.add(`links`);
      pageButtons.append(buttonHTML);
    });

    this.container.append(wrapperHeader);
  }

  render(): HTMLElement {
    this.renderPageButtons();
    return this.container;
  }
}
