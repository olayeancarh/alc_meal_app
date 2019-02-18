import MenuService from '../services/menu.service';

const MenuController = {
    fetchAllMenus(req, res) {
        const allMenus = MenuService.fetchAllMenus();
        return res.json({
            status: 'success',
            data: allMenus
        }).status(200);
    },

    addAMenu(req, res) {
        /**
         * Expected Json Format
         * {
         *  name: "some food type",
         *  size: "Large",
         *  price: "900"
         * }
         */

         const newMenu = req.body;

         const createdMenu = MenuService.addNewMenu(newMenu);

         return res.json({
             status: "success",
             data: createdMenu
         }).status(201);
    }, 
    
    fetchAmenu(req, res) {
        const id = req.params.id;
        const reqMenu = MenuService.getAMenu(id);

        return res.json({
            status: 'success',
            data: reqMenu
        }).status(200);
    }, 

    updateMenu(req, res) {
        const oldMenu = req.body;
        const id = req.params.id;
        const updatedMenu = MenuService.updateAMenu(oldMenu, id);

        return res.json({
            status: "success",
            data: updatedMenu
        }).status(201);
    },

    deletedAMenu(req, res) {
        const id = req.params.id;
        const deleteMenu = MenuService.deleteAMenu(id);

        return res.json({
            status: "success"
        }).status(201);
    }
     
};

export default MenuController;