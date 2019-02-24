import dummyData from '../utilz/dummyData';
import Order from '../models/order.models';

const OrderService = {
  fetchAllOrders() {
    const availableOrder = dummyData.orders
      .map(order => new Order(order.id, order.orderItem, order.dateOrdered, order.orderPrice));

    return availableOrder;
  },

  addNewOrder(order) {
    const orderObj = order;
    const orderLenght = dummyData.orders.length;
    const lastOrderId = dummyData.orders[orderLenght - 1].id;
    const newOrderId = lastOrderId + 1;
    orderObj.id = newOrderId;
    dummyData.orders.push(orderObj);
    return orderObj;
  },

  getAOrder(id) {
    return dummyData.orders.find(orders => orders.id == id) || {};
  },

  updateAOrder(order, id) {
    const getOrder = order;
    const getOrderIndex = dummyData.orders.findIndex(orders => orders.id == id);
    getOrder.id = id;
    dummyData.orders[getOrderIndex] = getOrder;
    return getOrder;
  },

  deleteAOrder(id) {
    const getOrderIndex = dummyData.orders.findIndex(order => order.id == id);
    dummyData.orders.splice(getOrderIndex, 1);
  },
};

export default OrderService;
