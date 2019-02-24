import OrderService from '../services/order.service';

const OrderController = {
  fetchAllOrders(req, res) {
    const allOrders = OrderService.fetchAllOrders();
    return res.json({
      status: 'success',
      data: allOrders,
    }).status(200);
  },

  addAOrder(req, res) {
    /**
     * Expected Json Format
     * {
     *  name: "some food type",
     *  size: "Large",
     *  price: "900"
     * }
     */

    const newOrder = req.body;

    const createdOrder = OrderService.addNewOrder(newOrder);

    return res.json({
      status: 'success',
      data: createdOrder,
    }).status(201);
  },

  fetchAorder(req, res) {
    const { id } = req.params;

    const reqOrder = OrderService.getAOrder(id);

    return res.json({
      status: 'success',
      data: reqOrder,
    }).status(200);
  },

  updateOrder(req, res) {
    const oldOrder = req.body;
    const { id } = req.params;
    const updatedOrder = OrderService.updateAOrder(oldOrder, id);

    return res.json({
      status: 'success',
      data: updatedOrder,
    }).status(201);
  },

  deletedAOrder(req, res) {
    const { id } = req.params;
    OrderService.deleteAOrder(id);

    return res.json({
      status: 'success',
    }).status(201);
  },

};

export default OrderController;
