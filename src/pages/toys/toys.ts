import "./style.css";
import { Page } from "../../core/templates/pages";
import data, { IToy } from "../../data";
import { quantitySlider } from "../../core/noUiSlider/slider-quantity";
import { yearSlider } from "../../core/noUiSlider/slider-year";

const FilterButtons = [
  { filter: "шар", color: "белый" },
  { filter: "колокольчик", color: "желтый" },
  { filter: "шишка", color: "красный" },
  { filter: "снежинка", color: "синий" },
  { filter: "фигурка", color: "зелёный" },
];

const SizeButtons = [{ size: "большой" }, { size: "средний" }, { size: "малый" }];
const Options = [
  { text: "По названию от «А» до «Я»", value: "sort-name-max" },
  { text: "По названию от «Я» до «А»", value: "sort-name-min" },
  { text: "По количеству по возрастанию", value: "sort-count-max" },
  { text: "По количеству по убыванию", value: "sort-count-min" },
];

export class Toys extends Page {
  searchParams: {
    shapes: string[];
    color: string[];
    size: string[];
    favorite: boolean[];
    minQuantity: number;
    maxQuantity: number;
    minYear: number;
    maxYear: number;
    optionsValue: string;
    numbers: string[];
  };

  constructor(id: string) {
    super(id);
    this.searchParams = {
      shapes: [],
      color: [],
      size: [],
      favorite: [],
      minQuantity: 1,
      maxQuantity: 12,
      minYear: 1940,
      maxYear: 2020,
      optionsValue: "",
      numbers: [],
    };
  }

  renderWrapper() {
    const wrapperMain = document.createElement("div") as HTMLDivElement;
    wrapperMain.classList.add("main-wrapper");
    const filterDiv = document.createElement("div") as HTMLDivElement;
    filterDiv.classList.add("filter");
    wrapperMain.append(filterDiv);

    const cards = document.createElement("div") as HTMLDivElement;
    cards.classList.add("cards");

    wrapperMain.append(cards);

    const filterBox1 = document.createElement("div") as HTMLDivElement;
    filterBox1.className = "box box-filters";
    filterBox1.id = "box1";
    const box1Title = document.createElement("h3");
    box1Title.innerHTML = "Фильтр по значению";
    box1Title.className = "filter-title";
    filterBox1.append(box1Title);

    const shapeBox = document.createElement("div") as HTMLDivElement;
    shapeBox.className = "shape";
    shapeBox.innerHTML = "Форма: ";

    const shapeContainer = document.createElement("div") as HTMLDivElement;
    shapeContainer.className = "shape-container";
    shapeBox.append(shapeContainer);

    FilterButtons.forEach((btn) => {
      const btnShape = document.createElement("button");
      btnShape.dataset.id = btn.filter;
      btnShape.className = "btn-shape";
      shapeContainer.append(btnShape);
    });
    const colorBox = document.createElement("div");
    colorBox.className = "color";
    colorBox.innerHTML = "Цвет: ";
    FilterButtons.forEach((btn) => {
      const btnColor = document.createElement("button");
      btnColor.className = "btn-color";
      btnColor.dataset.id = btn.color;
      colorBox.append(btnColor);
    });
    const sizeBox = document.createElement("div") as HTMLDivElement;
    sizeBox.className = "size";
    sizeBox.innerHTML = "Размер: ";
    SizeButtons.forEach((btn) => {
      const btnSize = document.createElement("button");
      btnSize.className = "btn-size";
      btnSize.dataset.id = btn.size;
      sizeBox.append(btnSize);
    });
    const favoriteBox = document.createElement("div") as HTMLDivElement;
    favoriteBox.innerHTML = "Только любимые: ";
    favoriteBox.className = "favorite-container";
    const favoriteCount = document.createElement("div") as HTMLDivElement;
    favoriteCount.className = "form-group";
    favoriteBox.append(favoriteCount);
    const favoriteInput = document.createElement("input");
    favoriteInput.type = "checkbox";
    favoriteInput.className = "favorite-input";
    favoriteInput.id = "favorite-input";
    favoriteCount.append(favoriteInput);
    const favoriteLabel = document.createElement("label");
    favoriteLabel.setAttribute("for", "favorite-input");
    favoriteLabel.className = "favorite-input-label";
    favoriteCount.append(favoriteLabel);

    filterBox1.append(shapeBox, colorBox, sizeBox, favoriteBox);

    filterDiv.append(filterBox1);

    const filterBox2 = document.createElement("div") as HTMLDivElement;
    filterBox2.className = "box box-range";
    filterBox2.id = "box2";

    const box2Title = document.createElement("h3");

    box2Title.className = "filter-title";
    box2Title.innerHTML = "Фильтры по диапазону";

    filterBox2.append(box2Title);

    const countBox = document.createElement("div") as HTMLDivElement;
    countBox.className = "filter-count";

    countBox.innerHTML = "Количество экземпляров: ";

    const countContainer = document.createElement("div") as HTMLDivElement;
    countContainer.className = "count-slider-container";
    countBox.appendChild(countContainer);
    const countInputMin = document.createElement("output");
    countInputMin.className = "min-quantity";
    countInputMin.value = "1";
    countContainer.appendChild(countInputMin);
    const sliderCount = document.createElement("div") as HTMLDivElement;
    sliderCount.id = "slider-count";
    sliderCount.className = "count-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr";
    countContainer.appendChild(sliderCount);
    const countInputMax = document.createElement("output");
    countInputMax.className = "max-quantity";
    countInputMax.value = "12";
    countContainer.appendChild(countInputMax);

    const yearBox = document.createElement("div") as HTMLDivElement;
    yearBox.className = "filter-year";
    yearBox.innerHTML = "Год приобретения: ";
    const sliderCountYear = document.createElement("div") as HTMLDivElement;
    sliderCountYear.className = "container-for-filters";
    yearBox.appendChild(sliderCountYear);
    const yearInputMin = document.createElement("output");
    yearInputMin.className = "min-year";
    yearInputMin.value = "1940";
    sliderCountYear.appendChild(yearInputMin);
    const sliderYear = document.createElement("div") as HTMLDivElement;
    sliderYear.id = "slider-year";
    sliderYear.className = "year-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr";
    sliderCountYear.appendChild(sliderYear);
    const yearInputMax = document.createElement("output");
    yearInputMax.className = "max-year";
    yearInputMax.value = "2020";
    sliderCountYear.appendChild(yearInputMax);

    filterBox2.append(countBox);
    filterBox2.append(yearBox);

    filterDiv.append(filterBox2);

    const filterBox3 = document.createElement("div");
    filterBox3.className = "box box-sort";
    filterBox3.id = "box3";
    const box3Title = document.createElement("h3");
    box3Title.className = "filter-title";
    box3Title.innerHTML = "Сортировка";
    filterBox3.append(box3Title);

    const select = document.createElement("select");
    select.className = "sort-select";
    Options.forEach((option) => {
      const optionFilter = document.createElement("option");
      optionFilter.innerHTML = option.text;
      optionFilter.value = option.value;
      optionFilter.disabled = false;
      select.append(optionFilter);
    });
    filterBox3.append(select);

    const btnReset = document.createElement("button");
    btnReset.className = "reset";
    btnReset.type = "reset";
    btnReset.innerHTML = "Сброс фильтров";

    filterBox3.append(btnReset);

    filterDiv.append(filterBox3);

    /*toy cards*/
    data.forEach((toys: IToy) => {
      const toy = document.createElement("div");
      const infoCard = document.createElement("h2");
      infoCard.classList.add("toys-title");
      infoCard.innerHTML = toys.name;

      const imageCard = document.createElement("img");
      imageCard.classList.add("toys-img");
      imageCard.src = `./src/assets/toys/${toys.num}.webp`;
      imageCard.alt = "toy";

      const cardDescCount = document.createElement("div");
      cardDescCount.classList.add("toys-description");

      const count = document.createElement("p");
      count.classList.add("count");
      count.innerHTML = `Количество: ${toys.count}`;

      const year = document.createElement("p");
      year.classList.add("year");
      year.innerHTML = `Год: ${toys.year}`;

      const shape = document.createElement("p");
      shape.classList.add("shape");
      shape.innerHTML = `Форма: ${toys.shape}`;

      const color = document.createElement("p");
      color.classList.add("color");
      color.innerHTML = `Цвет: ${toys.color}`;

      const size = document.createElement("p");
      size.classList.add("size");
      size.innerHTML = `Размер: ${toys.size}`;

      const favorite = document.createElement("p");
      favorite.classList.add("favorite");
      if (toys.favorite) {
        favorite.innerHTML = "Любимая: Да";
      } else {
        favorite.innerHTML = "Любимая: Нет";
      }

      const ribbonContainer = document.createElement("div");
      ribbonContainer.classList.add("ribbon-container");

      const ribbon = document.createElement("div");
      ribbon.classList.add("ribbon");
      ribbonContainer.append(ribbon);

      const tape = document.createElement("div");
      tape.classList.add("tape");
      toy.append(infoCard, imageCard, cardDescCount, ribbonContainer);
      cardDescCount.append(count, year, shape, color, size, favorite);
      toy.classList.add("toys");
      toy.dataset.id = toys.num;
      cards.append(toy);
    });

    const ribbonCont = document.querySelector(".links:nth-child(2)");
    ribbonCont.className = "links active-link";

    const ribbonCont2 = document.querySelector(".links:nth-child(3)");
    ribbonCont2.className = "links";

    this.container.append(wrapperMain);
  }

  clickFilter = (event: Event) => {
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll(".toys");
    const target = event.target as HTMLElement & { dataset: Record<string, string> };

    const dataId = target.dataset.id;

    if (this.searchParams.shapes.includes(dataId)) {
      target.classList.remove("active");
      this.searchParams.shapes.splice(this.searchParams.shapes.indexOf(dataId), 1);
    } else if (target.classList.contains("btn-shape")) {
      target.classList.add("active");
      this.searchParams.shapes.push(dataId);
    }
    if (this.searchParams.color.includes(dataId)) {
      target.classList.remove("active");
      this.searchParams.color.splice(this.searchParams.color.indexOf(dataId), 1);
    } else if (target.classList.contains("btn-color")) {
      target.classList.add("active");
      this.searchParams.color.push(dataId);
    }
    if (this.searchParams.size.includes(dataId)) {
      target.classList.remove("active");
      this.searchParams.size.splice(this.searchParams.size.indexOf(dataId), 1);
    } else if (target.classList.contains("btn-size")) {
      target.classList.add("active");
      this.searchParams.size.push(dataId);
    }
    let params = [...data];

    params = params.filter((item) => {
      if (this.searchParams.shapes.length > 0) {
        return this.searchParams.shapes.includes(item.shape);
      }
      return true;
    });

    params = params.filter((item) => {
      if (this.searchParams.color.length > 0) {
        return this.searchParams.color.includes(item.color);
      }
      return true;
    });

    params = params.filter((item) => {
      if (this.searchParams.size.length > 0) {
        return this.searchParams.size.includes(item.size);
      }
      return true;
    });

    const favoriteInput = document.querySelector("#favorite-input") as HTMLInputElement;
    if (favoriteInput.checked) {
      // фильтр по любимым;
      this.searchParams.favorite.push(true);
      params = params.filter((item) => {
        if (this.searchParams.favorite.length > 0) {
          return this.searchParams.favorite.includes(item.favorite);
        }
        return true;
      });
    }

    this.searchParams.minQuantity = Number((document.querySelector(".min-quantity") as HTMLInputElement).value);
    this.searchParams.maxQuantity = Number((document.querySelector(".max-quantity") as HTMLInputElement).value);
    this.searchParams.minYear = Number((document.querySelector(".min-year") as HTMLInputElement).value);
    this.searchParams.maxYear = Number((document.querySelector(".max-year") as HTMLInputElement).value);

    params = params.filter((item) => {
      // фильтр по количеству
      return Number(item.count) >= this.searchParams.minQuantity && Number(item.count) <= this.searchParams.maxQuantity;
    });

    params = params.filter((item) => {
      // фильтр по годам
      return Number(item.year) >= this.searchParams.minYear && Number(item.year) <= this.searchParams.maxYear;
    });

    const select = (document.querySelector(".sort-select") as HTMLSelectElement).options.selectedIndex;
    this.searchParams.optionsValue = (document.querySelector(".sort-select") as HTMLSelectElement).options[
      select
      ].value;

    params = params.filter(() => {
      if (this.searchParams.optionsValue === "sort-name-max") {
        return params.sort(function (x: { name: string }, y: { name: string }) {
          if (x.name < y.name) {
            return -1;
          }
          if (x.name > y.name) {
            return 1;
          }
          return 0;
        });
      } else if (this.searchParams.optionsValue === "sort-name-min") {
        return params.sort(function (x: { name: string }, y: { name: string }) {
          if (x.name > y.name) {
            return -1;
          }
          if (x.name < y.name) {
            return 1;
          }
          return 0;
        });
      } else if (this.searchParams.optionsValue === "sort-count-max") {
        return params.sort(function (x: { count: string }, y: { count: string }) {
          if (Number(x.count) < Number(y.count)) {
            return -1;
          }
          if (Number(x.count) > Number(y.count)) {
            return 1;
          }
          return 0;
        });
      } else if (this.searchParams.optionsValue === "sort-count-min") {
        return params.sort(function (x: { count: string }, y: { count: string }) {
          if (Number(x.count) > Number(y.count)) {
            return -1;
          }
          if (Number(x.count) < Number(y.count)) {
            return 1;
          }
          return 0;
        });
      }
      return true;
    });

    const searchData = document.querySelector("#search") as HTMLInputElement;
    const val = searchData.value.trim().toLowerCase();
    if (val) {
      params = params.filter((el) => el.name.toLowerCase().includes(val));
    }

    this.removeCards(cards);
    this.renderCards(params);
  };

  clickToysCards = (event: Event) => {
    const target = event.target as HTMLElement & { dataset: Record<string, string> };
    const toyID = target.dataset.id;
    if (target.classList.contains("active")) {
      target.classList.remove("active");
    } else {
      target.classList.add("active");
    }
    if (this.searchParams.numbers.includes(toyID)) {
      this.searchParams.numbers.splice(this.searchParams.numbers.indexOf(toyID), 1);
    } else {
      this.searchParams.numbers.push(toyID);
    }
    if (this.searchParams.numbers.length > 20) {
      alert("Вы выбрали слишком много игрушек");
      this.searchParams.numbers.splice(this.searchParams.numbers.indexOf(toyID), 1);
      target.classList.remove("active");
    }
    const chosenToys = document.querySelector(".favorites span");
    chosenToys.innerHTML = `${this.searchParams.numbers.length}`;
  };

  renderCards(card: IToy[]) {
    const cardsWrapper = document.querySelector(".cards");

    card.forEach((item) => {
      const toy = document.createElement("div");
      const infoCard = document.createElement("h2");
      infoCard.classList.add("toys-title");
      infoCard.innerHTML = item.name;

      const imageCard = document.createElement("img");
      imageCard.classList.add("toys-img");
      imageCard.src = `./src/assets/toys/${item.num}.webp`;
      imageCard.alt = "toy";

      const cardDescCount = document.createElement("div");
      cardDescCount.classList.add("toys-description");

      const count = document.createElement("p");
      count.classList.add("count");
      count.innerHTML = `Количество: ${item.count}`;

      const year = document.createElement("p");
      year.classList.add("year");
      year.innerHTML = `Год: ${item.year}`;

      const shape = document.createElement("p");
      shape.classList.add("shape");
      shape.innerHTML = `Форма: ${item.shape}`;

      const color = document.createElement("p");
      color.classList.add("color");
      color.innerHTML = `Цвет: ${item.color}`;

      const size = document.createElement("p");
      size.classList.add("size");
      size.innerHTML = `Размер: ${item.size}`;

      const favorite = document.createElement("p");
      favorite.classList.add("favorite");
      if (item.favorite) {
        favorite.innerHTML = "Люимая: Да";
      } else {
        favorite.innerHTML = "Люимая: Нет";
      }

      const ribbonContainer = document.createElement("div");
      ribbonContainer.classList.add("ribbon-container");

      const ribbon = document.createElement("div");
      ribbon.classList.add("ribbon");
      ribbonContainer.append(ribbon);

      const tape = document.createElement("div");
      tape.classList.add("tape");
      toy.append(infoCard, imageCard, cardDescCount, ribbonContainer);
      cardDescCount.append(count, year, shape, color, size, favorite);
      toy.classList.add("toys");
      toy.dataset.id = item.num;
      cardsWrapper.append(toy);
    });
  }

  resetButton = () => {
    const wrapperMain = document.querySelector(".main-wrapper") as HTMLElement;
    const chosenToys = document.querySelector(".favorites span");
    chosenToys.innerHTML = "0";
    this.removePage(wrapperMain);
    this.renderWrapper();
    this.afterRender();
  };

  removeCards(card: NodeListOf<HTMLDivElement>) {
    card.forEach((element) => {
      element.remove();
    });
  }

  removePage(page: HTMLElement) {
    page.remove();
  }

  render() {
    this.renderWrapper();
    return this.container;
  }

  afterRender() {
    quantitySlider();
    yearSlider();
    const btnReset = document.querySelector(".reset");
    btnReset.addEventListener("click", this.resetButton);

    const shapeCount = document.querySelector(".shape-container");
    shapeCount.addEventListener("click", this.clickFilter);

    const cards = document.querySelector(".cards");
    cards.addEventListener("click", this.clickToysCards);

    const colorCount = document.querySelector(".color");
    colorCount.addEventListener("click", this.clickFilter);

    const sizeCount = document.querySelector(".size");
    sizeCount.addEventListener("click", this.clickFilter);

    const favoriteCount = document.querySelector(".favorite-input");
    favoriteCount.addEventListener("click", this.clickFilter);

    const input = document.querySelector("#search");
    input.addEventListener("keyup", this.clickFilter);

    const minQuantity = document.querySelector(".min-quantity");
    minQuantity.addEventListener("change", this.clickFilter);

    const maxQuantity = document.querySelector(".max-quantity");
    maxQuantity.addEventListener("change", this.clickFilter);

    const minYear = document.querySelector(".min-year");
    minYear.addEventListener("change", this.clickFilter);

    const maxYear = document.querySelector(".max-year");
    maxYear.addEventListener("change", this.clickFilter);

    const sortSelect = document.querySelector(".sort-select");
    sortSelect.addEventListener("change", this.clickFilter);
  }
}
