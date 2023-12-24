import "./style.css";
import { Page } from "../../core/templates/pages";

export class MainPage extends Page {
  renderWrapper() {
    const pageStart = document.createElement("div");
    pageStart.classList.add("start-page");
    const ballFirst = document.createElement("div");
    ballFirst.classList.add("ball-first");
    const ballSecond = document.createElement("div");
    ballSecond.classList.add("ball-second");
    const startTitle = document.createElement("h1");
    startTitle.classList.add("start-page-title");
    startTitle.innerHTML = "Новогодняя игра <br> «Наряди ёлку»";
    const startButton = document.createElement("button");
    startButton.classList.add("switch-start-page");
    startButton.dataset.id = "mainPage";
    startButton.innerHTML = "Начать";
    pageStart.append(ballFirst, ballSecond, startTitle, startButton);

    const ribbonCont = document.querySelector(".links:nth-child(1)");
    ribbonCont.className = "links";

    const ribbonCont2 = document.querySelector(".links:nth-child(2)");
    ribbonCont2.className = "links";

    const ribbonCont3 = document.querySelector(".links:nth-child(3)");
    ribbonCont3.className = "links";
  }

  render() {
    this.renderWrapper();
    return this.container;
  }
}

/*class Main {
  private readonly container: HTMLElement;

  constructor(className: string) {
    this.container = document.createElement("div");
    this.container.className = className;
  }

  private addMainToMain() {
    const main = document.createElement("div");
    main.className = "main page";
    return main;
  }

  private addBlurToMain() {
    const blur = document.createElement("div");
    blur.className = "blur";
    return blur;
  }

  private addControlsToMain() {
    const control = document.createElement("div");
    control.className = "controls";
    return control;
  }

  private addFiltersToMain() {
    const filters = document.createElement("div");
    filters.className = "filters";
    return filters;
  }

  private addRangeToMain() {
    const range = document.createElement("div");
    range.className = "range";
    return range;
  }

  private addSortToMain() {
    const sort = document.createElement("div");
    sort.className = "sort";
    return sort;
  }

  private addControlsTitleToMain(name: string) {
    const controlsTitle = document.createElement("div");
    controlsTitle.className = "controls-title";
    controlsTitle.textContent = `${name}`;
    return controlsTitle;
  }

  private addShapeToMain() {
    const shape = document.createElement("div");
    shape.className = "shape";
    shape.textContent = "Форма: ";
    return shape;
  }

  private addButtonBallToMain() {
    const buttonBall = document.createElement("button");
    buttonBall.className = "ball";
    return buttonBall;
  }

  private addButtonBellToMain() {
    const buttonBell = document.createElement("button");
    buttonBell.className = "bell";
    return buttonBell;
  }

  private addButtonConeToMain() {
    const buttonCone = document.createElement("button");
    buttonCone.className = "cone";
    return buttonCone;
  }

  private addButtonSnowflakeToMain() {
    const buttonSnowflake = document.createElement("button");
    buttonSnowflake.className = "snowflake";
    return buttonSnowflake;
  }

  private addButtonFigureToMain() {
    const buttonStatuette = document.createElement("button");
    buttonStatuette.className = "figure";
    return buttonStatuette;
  }

  private addColorToMain() {
    const color = document.createElement("div");
    color.className = "color";
    color.textContent = "цвет: ";
    return color;
  }

  private addButtonWhiteToMain() {
    const buttonWhite = document.createElement("button");
    buttonWhite.className = "button-white";
    return buttonWhite;
  }

  private addButtonYellowToMain() {
    const buttonYellow = document.createElement("button");
    buttonYellow.className = "button-yellow";
    return buttonYellow;
  }

  private addButtonRedToMain() {
    const buttonRed = document.createElement("button");
    buttonRed.className = "button-red";
    return buttonRed;
  }

  private addButtonBlueToMain() {
    const buttonBlue = document.createElement("button");
    buttonBlue.className = "button-blue";
    return buttonBlue;
  }

  private addButtonGreenToMain() {
    const buttonGreen = document.createElement("button");
    buttonGreen.className = "button-green";
    return buttonGreen;
  }

  private addSizeToMain() {
    const size = document.createElement("div");
    size.className = "size";
    size.textContent = "Размер: ";
    return size;
  }

  private addButtonBigToMain() {
    const buttonBig = document.createElement("button");
    buttonBig.className = "button-big";
    return buttonBig;
  }

  private addButtonMeddleToMain() {
    const buttonMeddle = document.createElement("button");
    buttonMeddle.className = "button-meddle";
    return buttonMeddle;
  }

  private addButtonLowToMain() {
    const buttonLow = document.createElement("button");
    buttonLow.className = "button-low";
    return buttonLow;
  }

  private addFavoriteContainerToMain() {
    const favoriteContainer = document.createElement("div");
    favoriteContainer.className = "favorite-container";
    favoriteContainer.textContent = "Только любимые: ";
    return favoriteContainer;
  }

  private addFormGroupToMain() {
    const formGroup = document.createElement("div");
    formGroup.className = "form-group";
    return formGroup;
  }

  private addFavoriteInputToMain() {
    const favoriteInput = document.createElement("input");
    favoriteInput.className = "favorite-input";
    favoriteInput.id = "checkbox";
    favoriteInput.type = "checkbox";
    return favoriteInput;
  }

  private addFavoriteInputLabelToMain() {
    const favoriteInputLabel = document.createElement("label");
    favoriteInputLabel.className = "favorite-input-label";
    return favoriteInputLabel;
  }

  private addCountToMain() {
    const count = document.createElement("div");
    count.className = "count";
    return count;
  }

  private addYearToMain() {
    const year = document.createElement("div");
    year.className = "year";
    return year;
  }

  private addSortSelectToMain() {
    const sortSelect = document.createElement("select");
    sortSelect.className = "sort-select";
    return sortSelect;
  }

  private addResetToMain() {
    const reset = document.createElement("button");
    reset.className = "reset";
    reset.textContent = "сброс фильтров";
    return reset;
  }

  private addSortNameMaxToMain() {
    const sortNameMax = document.createElement("option");
    sortNameMax.value = "sort-name-max";
    sortNameMax.selected = true;
    sortNameMax.textContent = "По названию от «А» до «Я»";
    return sortNameMax;
  }

  private addSortNameMinToMain() {
    const sortNameMin = document.createElement("option");
    sortNameMin.value = "sort-name-min";
    sortNameMin.textContent = "По названию от «Я» до «А»";
    return sortNameMin;
  }

  private addSortCountMaxToMain() {
    const sortCountMax = document.createElement("option");
    sortCountMax.value = "sort-count-max";
    sortCountMax.textContent = "По количеству по возрастанию";
    return sortCountMax;
  }

  private addSortCountMinToMain() {
    const sortCountMin = document.createElement("option");
    sortCountMin.value = "sort-count-min";
    sortCountMin.textContent = "По количеству по убыванию";
    return sortCountMin;
  }

  private addControlSpanToMain(name: string) {
    const ControlSpan = document.createElement("span");
    ControlSpan.className = "control-span";
    ControlSpan.textContent = name;
    return ControlSpan;
  }

  private addCountSliderContainerToMain() {
    const countSliderContainer = document.createElement("div");
    countSliderContainer.className = "count-slider-container";
    return countSliderContainer;
  }

  private addSliderOutputToMain(num: string) {
    const sliderOutput = document.createElement("output");
    sliderOutput.className = "slider-output";
    sliderOutput.textContent = num;
    return sliderOutput;
  }

  private addSliderToMain() {
    const slider = document.createElement("div");
    slider.className = "count-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr";
    return slider;
  }

  private addNoUIBaseToMain() {
    const noUIBase = document.createElement("div");
    noUIBase.className = "noUI-base";
    return noUIBase;
  }

  private addNoUIConnectsToMain() {
    const noUIConnects = document.createElement("div");
    noUIConnects.className = "noUI-connects";
    return noUIConnects;
  }

  private addNoUIOriginToMain(tran: string, num: string) {
    const noUIOrigin = document.createElement("div");
    noUIOrigin.className = "noUI-origin";
    noUIOrigin.style.transform = tran;
    noUIOrigin.style.zIndex = num;
    return noUIOrigin;
  }

  private addNoUIConnectToMain() {
    const noUIConnect = document.createElement("div");
    noUIConnect.className = "noUI-connect";
    noUIConnect.style.transform = "translate(0%, 0px) scale(1, 1)";
    return noUIConnect;
  }

  private addNoUIHandleLowerToMain() {
    const noUIHandleLower = document.createElement("div");
    noUIHandleLower.className = "noUi-handle noUi-handle-lower";
    noUIHandleLower.tabIndex = Number("0");
    noUIHandleLower.ariaOrientation = "horizontal";
    noUIHandleLower.ariaValueMin = "1.0";
    noUIHandleLower.ariaValueMax = "12.0";
    noUIHandleLower.ariaValueNow = "1.0";
    noUIHandleLower.ariaValueText = "1.0";
    return noUIHandleLower;
  }

  private addNoUITouchAreaToMain() {
    const noUITouchArea = document.createElement("div");
    noUITouchArea.className = "noUi-touch-area";
    return noUITouchArea;
  }

  private addNoUIHandleUpperToMain() {
    const noUIHandleUpper = document.createElement("div");
    noUIHandleUpper.className = "noUi-handle noUi-handle-upper";
    noUIHandleUpper.tabIndex = Number("0");
    noUIHandleUpper.ariaOrientation = "horizontal";
    noUIHandleUpper.ariaValueMin = "1.0";
    noUIHandleUpper.ariaValueMax = "12.0";
    noUIHandleUpper.ariaValueNow = "12.0";
    noUIHandleUpper.ariaValueText = "12.0";
    return noUIHandleUpper;
  }

  private addYearSliderContainerToMain() {
    const yearSliderContainer = document.createElement("div");
    yearSliderContainer.className = "year-slider-container";
    return yearSliderContainer;
  }

  private addYearSliderToMain() {
    const yearSlider = document.createElement("div");
    yearSlider.className = "year-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr";
    return yearSlider;
  }

  render() {
    const sort = this.addSortToMain();
    const range = this.addRangeToMain();
    const filters = this.addFiltersToMain();
    const controls = this.addControlsToMain();
    const blur = this.addBlurToMain();
    const main = this.addMainToMain();
    const controlsTitleFilter = this.addControlsTitleToMain("фильтры по значению");
    const shape = this.addShapeToMain();
    const buttonBall = this.addButtonBallToMain();
    const buttonBell = this.addButtonBellToMain();
    const buttonCone = this.addButtonConeToMain();
    const buttonSnowflake = this.addButtonSnowflakeToMain();
    const buttonFigure = this.addButtonFigureToMain();
    const color = this.addColorToMain();
    const buttonWhite = this.addButtonWhiteToMain();
    const buttonYellow = this.addButtonYellowToMain();
    const buttonRed = this.addButtonRedToMain();
    const buttonBlue = this.addButtonBlueToMain();
    const buttonGreen = this.addButtonGreenToMain();
    const size = this.addSizeToMain();
    const buttonBig = this.addButtonBigToMain();
    const buttonMeddle = this.addButtonMeddleToMain();
    const buttonLow = this.addButtonLowToMain();
    const favoriteContainer = this.addFavoriteContainerToMain();
    const formGroup = this.addFormGroupToMain();
    const favoriteInput = this.addFavoriteInputToMain();
    const favoriteInputLabel = this.addFavoriteInputLabelToMain();
    const controlsTitleRange = this.addControlsTitleToMain("фильтры по диапазону");
    const count = this.addCountToMain();
    const controlSpanFirst = this.addControlSpanToMain("Количество экземпляров:");
    const controlSpanSecond = this.addControlSpanToMain("Год приобретения:");
    const countSliderContainer = this.addCountSliderContainerToMain();
    const yearSliderContainer = this.addYearSliderContainerToMain();
    const sliderContainerCF = this.addSliderOutputToMain("1");
    const sliderContainerYF = this.addSliderOutputToMain("1940");
    const sliderContainerCS = this.addSliderOutputToMain("12");
    const sliderContainerYS = this.addSliderOutputToMain("2020");
    const countSlider = this.addSliderToMain();
    const noUIBaseCount = this.addNoUIBaseToMain();
    const noUIBaseYear = this.addNoUIBaseToMain();
    const noUIConnectsCount = this.addNoUIConnectsToMain();
    const noUIConnectsYear = this.addNoUIConnectsToMain();
    const noUIConnectCount = this.addNoUIConnectToMain();
    const noUIConnectYear = this.addNoUIConnectToMain();
    const noUITouchAreaCount = this.addNoUITouchAreaToMain();
    const noUITouchAreaYear = this.addNoUITouchAreaToMain();
    const year = this.addYearToMain();
    const controlsTitleSort = this.addControlsTitleToMain("Сортировка");
    const sortSelect = this.addSortSelectToMain();
    const reset = this.addResetToMain();
    const nameMax = this.addSortNameMaxToMain();
    const nameMin = this.addSortNameMinToMain();
    const countMax = this.addSortCountMaxToMain();
    const countMin = this.addSortCountMinToMain();
    const yearSlider = this.addYearSliderToMain();
    const noUIHandleLowerCount = this.addNoUIHandleLowerToMain();
    const noUIHandleLowerYear = this.addNoUIHandleLowerToMain();
    const noUIHandleUpperCount = this.addNoUIHandleUpperToMain();
    const noUIHandleUpperYear = this.addNoUIHandleUpperToMain();
    const OriginFirstCount = this.addNoUIOriginToMain("translate(-100%, 0px)", "5");
    const OriginFirstYear = this.addNoUIOriginToMain("translate(-100%, 0px)", "5");
    const OriginSecondCount = this.addNoUIOriginToMain("translate(0%, 0px)", "4");
    const OriginSecondYear = this.addNoUIOriginToMain("translate(0%, 0px)", "4");

    this.container.append(main);
    main.append(blur);
    blur.append(controls);
    controls.append(filters, range, sort);
    filters.append(controlsTitleFilter, shape, color, size, favoriteContainer);
    favoriteContainer.append(formGroup);
    formGroup.append(favoriteInput, favoriteInputLabel);
    size.append(buttonBig, buttonMeddle, buttonLow);
    color.append(buttonWhite, buttonYellow, buttonRed, buttonBlue, buttonGreen);
    shape.append(buttonBall, buttonBell, buttonCone, buttonSnowflake, buttonFigure);
    range.append(controlsTitleRange, count, year);
    count.append(controlSpanFirst, countSliderContainer);
    countSliderContainer.append(sliderContainerCF, countSlider, sliderContainerCS);
    countSlider.append(noUIBaseCount);
    noUIBaseCount.append(noUIConnectsCount, OriginFirstCount, OriginSecondCount);
    noUIConnectsCount.append(noUIConnectCount);
    OriginFirstCount.append(noUIHandleLowerCount);
    noUIHandleLowerCount.append(noUITouchAreaCount);
    OriginSecondCount.append(noUIHandleUpperCount);
    OriginSecondCount.append(noUITouchAreaCount);
    sort.append(controlsTitleSort, sortSelect, reset);
    sortSelect.append(nameMax, nameMin, countMax, countMin);
    year.append(controlSpanSecond, yearSliderContainer);
    yearSliderContainer.append(sliderContainerYF, yearSlider, sliderContainerYS);
    yearSlider.append(noUIBaseYear);
    noUIBaseYear.append(noUIConnectsYear, OriginFirstYear, OriginSecondYear);
    noUIConnectsYear.append(noUIConnectYear);
    OriginFirstYear.append(noUIHandleLowerYear);
    noUIHandleLowerYear.append(noUITouchAreaYear);
    OriginSecondYear.append(noUIHandleUpperYear);
    OriginSecondYear.append(noUITouchAreaYear);
    return this.container;
  }
}*/

export default MainPage;
