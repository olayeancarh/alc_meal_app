import dummyData from '../utilz/dummyData';
import Menu from '../models/menu.models';

const MenuService = {
  fetchAllMenus() {
    const availableMenu = dummyData.menus.map((menu) => {
      return new Menu(menu.id, menu.name, menu.date_created, menu.price);
    });

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
    const getMenu = dummyData.menus.find(menu => menu.id == id);
    const getMenuIndex = dummyData.menus.findIndex(menu => menu.id == id);
    menu.id = id
    dummyData.menus[getMenuIndex] = menu;
    return menu;
  },

  deleteAMenu(id) {
    const getMenuIndex = dummyData.menus.findIndex(menu => menu.id == id);
    const menudeleted = dummyData.menus.splice(getMenuIndex,1);
  }

};

export default MenuService;
