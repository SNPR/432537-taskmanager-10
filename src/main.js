import {
  getBoardCard,
  getBoardList,
  getLoadMoreButton,
  getMainFilters,
  getMenu,
  getTaskCreateForm
} from "./components";
import {renderElement} from "./utils";

const main = document.querySelector(`main`);
const menu = main.querySelector(`.main__control`);

renderElement(menu, getMenu());
renderElement(main, getMainFilters());
renderElement(main, getBoardList());

const boardList = document.querySelector(`.board__tasks`);
renderElement(boardList, getTaskCreateForm());

for (let i = 0; i < 3; i++) {
  renderElement(boardList, getBoardCard());
}

const board = document.querySelector(`.board`);

renderElement(board, getLoadMoreButton());
