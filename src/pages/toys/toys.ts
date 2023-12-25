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

const SizeButtons = [{ size: "big" }, { size: "middle" }, { size: "low" }];
const Options = [
  { text: "По названию от «А» до «Я»" },
  { text: "По названию от «Я» до «А»" },
  { text: "По количеству по возрастанию" },
  { text: "По количеству по убыванию" },
];

const filterShapes: Array<string> = [];
const filterColor: Array<string> = [];
const clickRibbon: Array<string> = [];

export class Toys extends Page {
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
      shapeContainer.append(btnShape);
    });
    const colorBox = document.createElement("div");
    colorBox.className = "color";
    colorBox.innerHTML = "Цвет: ";
    FilterButtons.forEach((btn) => {
      const btnColor = document.createElement("button");
      btnColor.dataset.id = btn.color;
      colorBox.append(btnColor);
    });
    const sizeBox = document.createElement("div") as HTMLDivElement;
    sizeBox.className = "size";
    sizeBox.innerHTML = "Размер: ";
    SizeButtons.forEach((btn) => {
      const btnSize = document.createElement("button");
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
    favoriteLabel.setAttribute("for", "check-favorite");
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
      imageCard.src = `/src/assets/toys/${toys.num}.webp`;
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
      toy.dataset.id = toys.num;
      cards.append(toy);
    });

    const ribbonCont = document.querySelector(".links:nth-child(2)");
    ribbonCont.className = "links active-link";

    const ribbonCont2 = document.querySelector(".links:nth-child(3)");
    ribbonCont2.className = "links";

    this.container.append(wrapperMain);
  }

  /*filter(items: IToy[], shape: string[]): IToy[] {
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll(".toys");

    let shapeArr = items;
    shapeArr = shapeArr.filter((item) => {
      if (shape.length > 0) {
        if(shape[0] === "шар" ||  shape[0] === "колокольчик" || shape[0] === "шишка" || shape[0] === "снежинка" || shape[0] === "фигурка") {
          return shape.includes(item.shape);
        }

      }
      return true;
    });
    this.removeCards(cards);
    this.renderCards(shapeArr);
    return shapeArr;
  }*/

  filterShape(items: IToy[], shape: string[]): IToy[] {
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll(".toys");

    let shapeArr = items;
    shapeArr = shapeArr.filter((item) => {
      if (shape.length > 0) {
        return shape.includes(item.shape);
      }
      return true;
    });
    this.removeCards(cards);
    this.renderCards(shapeArr);
    return shapeArr;
  }

  colorShape(items: IToy[], shape: string[]): IToy[] {
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll(".toys");

    let colorArr = items;
    colorArr = colorArr.filter((item) => {
      if (shape.length > 0) {
        return shape.includes(item.color);
      }
      return true;
    });
    this.removeCards(cards);
    this.renderCards(colorArr);
    return colorArr;
  }

  clickShape = (event: Event) => {
    const target = event.target as HTMLElement & { dataset: Record<string, string> };
    const shape = target.dataset.id;
    if (filterShapes.includes(shape)) {
      target.classList.remove("active");
      filterShapes.splice(filterShapes.indexOf(shape), 1);
    } else {
      target.classList.add("active");
      console.log(shape);
      filterShapes.push(shape);
    }
    this.filterShape(data, filterShapes);
  };

  clickRibbon = (event: Event) => {
    const target = event.target as HTMLElement;
    console.log(target);
    const className = target.getAttribute("class");
    if (className === "ribbon") {
      target.className = "ribbon active";
    } else {
      target.className = "ribbon";
    }
  };

  clickColor = (event: Event) => {
    const target = event.target as HTMLElement & { dataset: Record<string, string> };
    const shape = target.dataset.id;
    if (filterColor.includes(shape)) {
      target.classList.remove("active");
      filterColor.splice(filterColor.indexOf(shape), 1);
    } else {
      target.classList.add("active");
      console.log(shape);
      filterColor.push(shape);
    }
    this.colorShape(data, filterColor);
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
      imageCard.src = `/src/assets/toys/${item.num}.webp`;
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

      const tape = document.createElement("div");
      tape.classList.add("tape");
      toy.append(infoCard, imageCard, cardDescCount);
      cardDescCount.append(count, year, shape, color, size, favorite);
      toy.classList.add("toys");
      toy.dataset.id = item.num;
      cardsWrapper.append(toy);
    });
  }

  removeCards(card: NodeListOf<HTMLDivElement>) {
    card.forEach((element) => {
      element.remove();
    });
  }

  render() {
    this.renderWrapper();
    return this.container;
  }

  afterRender() {
    quantitySlider();
    yearSlider();
    const shapeCont = document.querySelector(".shape");
    shapeCont.addEventListener("click", this.clickShape);

    const colorCont = document.querySelector(".color");
    colorCont.addEventListener("click", this.clickColor);

    const ribbonCont = document.querySelector(".ribbon-container");
    ribbonCont.addEventListener("click", this.clickRibbon);
  }
}
