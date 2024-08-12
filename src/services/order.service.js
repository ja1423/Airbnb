// import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js';
import { userService } from './user.service.js';
import { httpService } from './http.service.js';

const STORAGE_KEY = 'order';

export const orderService = {
  query,
  getById,
  save,
  remove,
  getEmptyOrder,
  addOrderMsg,
};
window.cs = orderService;

async function query(filterBy = { txt: '' }) {
  return httpService.get(STORAGE_KEY, filterBy);
}

function getById(orderId) {
  return httpService.get(`order/${orderId}`);
}

async function remove(orderId) {
  return httpService.delete(`order/${orderId}`);
}

async function save(order) {
  console.log('in service', order);
  var savedOrder;
  if (order._id) {
    console.log('im here- service');
    savedOrder = await httpService.put(`order/${order._id}`, order);
  } else {
    order.host = userService.getLoggedinUser();
    savedOrder = await httpService.post('order', order);
  }
  return savedOrder;
}

async function addOrderMsg(orderId, txt) {
  // Later, this is all done by the backend
  const order = await getById(orderId);
  if (!order.msgs) order.msgs = [];

  const msg = {
    id: utilService.makeId(),
    by: userService.getLoggedinUser(),
    txt,
  };
  order.msgs.push(msg);
  await storageService.put(STORAGE_KEY, order);

  return msg;
}

function getEmptyOrder() {
  return {
    _id: '',
    hostId: '',
    createdAt: Date.now(),
    buyer: {
      _id: userService.getLoggedinUser()._id,
      fullname: userService.getLoggedinUser().fullname,
    },
    totalPrice: null,
    startDate: null,
    endDate: null,
    guests: {
      adults: null,
      kids: null,
    },
    stay: {
      _id: '',
      name: '',
      price: null,
    },
    msgs: [],
    status: 'pending',
  };
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))
