import dummyData from '../utilz/dummyData';
import Menu from '../models/menu.models';

const MenuService = {
  fetchAllMenus() {
    const availableMenu = dummyData
      .menus.map(menu => new Menu(menu.id, menu.name, menu.dateCreated, menu.price));

    return availableMenu;
  },

  addNewMenu(menu) {
    const menuObj = menu;
    const menuLenght = dummyData.menus.length;
    const lastMenuId = dummyData.menus[menuLenght - 1].id;
    const newMenuId = lastMenuId + 1;
    menuObj.id = newMenuId;
    dummyData.menus.push(menuObj);
    return menuObj;
  },

  getAMenu(id) {
    return dummyData.menus.find(menus => menus.id == id) || {};
  },

  updateAMenu(menu, id) {
    const getMenu = menu;
    const getMenuIndex = dummyData.menus.findIndex(menus => menus.id == id);
    getMenu.id = id;
    dummyData.menus[getMenuIndex] = getMenu;
    return getMenu;
  },

  deleteAMenu(id) {
    const getMenuIndex = dummyData.menus.findIndex(menu => menu.id == id);
    dummyData.menus.splice(getMenuIndex, 1);
  },
};

export default MenuService;
