import { storageService } from './async-storage.service.js';
import { utilService } from './util.service.js';
import { userService } from './user.service.js';

const STORAGE_KEY = 'stay';

export const stayService = {
  query,
  getById,
  save,
  remove,
  getEmptyStay,
  addStayMsg,
};
window.cs = stayService;

async function query(filterBy = { txt: '' }, storageKey = STORAGE_KEY) {
  var stays = await storageService.query(storageKey);
  console.log('service', filterBy);
  if (filterBy.txt) {
    const regex = new RegExp(filterBy.txt, 'i');
    stays = stays.filter(
      (stay) => regex.test(stay.name) || regex.test(stay.loc.country)
    );
  }
  if (filterBy.type) {
    const regex = new RegExp(filterBy.type, 'i');
    stays = stays.filter((stay) => regex.test(stay.type));
  }
  // if (filterBy.price) {
  //     stays = stays.filter(stay => stay.price <= filterBy.price)
  // }
  console.log(stays);
  return stays;
}

function getById(stayId) {
  console.log(stayId ,'in service');
  return storageService.get(STORAGE_KEY, stayId);
}

async function remove(stayId) {
  await storageService.remove(STORAGE_KEY, stayId);
}

async function save(stay) {
  console.log(stay);
  var savedStay;
  if (stay._id) {
    savedStay = await storageService.put(STORAGE_KEY, stay);
  } else {
    // Later, owner is set by the backend
    stay.host = userService.getLoggedinUser();
    savedStay = await storageService.post(STORAGE_KEY, stay);
  }
  return savedStay;
}

async function addStayMsg(stayId, txt) {
  // Later, this is all done by the backend
  const stay = await getById(stayId);
  if (!stay.msgs) stay.msgs = [];

  const msg = {
    id: utilService.makeId(),
    by: userService.getLoggedinUser(),
    txt,
  };
  stay.msgs.push(msg);
  await storageService.put(STORAGE_KEY, stay);

  return msg;
}

function getEmptyStay() {
  return {
      name: '',
      type: '',
      imgUrls: [],
      price: '',
      summary: '',
      capacity: 1,
      delivery: '',
      amenities: [],
      bathrooms: 1,
      bedrooms: 1,
      roomType: '',
      loc: {
          country: '',
          countryCode: '',
          city: '',
          address: '',
          lat: 20,
          lan: 156,
      },
      reviews: [],
      likedByUsers: [],
  };
}

// TEST DATA

// ;(()=>{
//      setTimeout(async ()=>{
//         await storageService.post({
//             name: 'Susita-' + (Date.now() % 1000),
//             price: utilService.getRandomIntInclusive(1000, 9000),
//             loc : {country:'',city:'',address: ''}
//         })
//         await storageService.post()
//         await storageService.post({
//             name: 'amitai-' + (Date.now() % 1000),
//             price: utilService.getRandomIntInclusive(1000, 9000),
//             loc : {country:'',city:'',address: ''}
//         })
//     },500)
// })()
