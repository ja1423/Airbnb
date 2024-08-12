export const storageService = {
  query,
  get,
  post,
  put,
  remove,
  getDemoAmenities,
};

import myStayJson from '../../data/stay.json';
import myUserJson from '../../data/user.json';
import myOrderJson from '../../data/order.json';
// assert {type:'json'}

function query(entityType, delay = 500) {
  // if (entityType === 'stay') var entities = getDemoStays();
  var entities = JSON.parse(localStorage.getItem(entityType));
  if (!entities) {
    if (entityType === 'stay') {
      entities = myStayJson.splice(0,100);
      // entities = myStayJson.splice(0, 30);
    } else if (entityType === 'user') {
      entities = myUserJson.splice(0, 100);
      // entities = myUserJson.splice(0, 30);
    } else if(entityType === 'order'){
      entities = myOrderJson;
    }
    _save(entityType, entities);
  }
  return new Promise((resolve) => setTimeout(() => resolve(entities), delay));
}

function get(entityType, entityId) {
  return query(entityType).then((entities) => {
    const entity = entities.find((entity) => entity._id === entityId);
    if (!entity)
      throw new Error(
        `Get failed, cannot find entity with id: ${entityId} in: ${entityType}`
      );
    return entity;
  });
}

function post(entityType, newEntity) {
  newEntity = JSON.parse(JSON.stringify(newEntity));
  newEntity._id = _makeId();
  return query(entityType).then((entities) => {
    entities.push(newEntity);
    _save(entityType, entities);
    return newEntity;
  });
}

function put(entityType, updatedEntity) {
  updatedEntity = JSON.parse(JSON.stringify(updatedEntity));
  return query(entityType).then((entities) => {
    const idx = entities.findIndex(
      (entity) => entity._id === updatedEntity._id
    );
    if (idx < 0)
      throw new Error(
        `Update failed, cannot find entity with id: ${updatedEntity._id} in: ${entityType}`
      );
    entities.splice(idx, 1, updatedEntity);
    _save(entityType, entities);
    return updatedEntity;
  });
}

function remove(entityType, entityId) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === entityId);
    if (idx < 0)
      throw new Error(
        `Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`
      );
    entities.splice(idx, 1);
    _save(entityType, entities);
  });
}

// Private functions

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}

function _makeId(length = 5) {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function getDemoStays() {
  return [
    {
      _id: '10006546',
      name: 'amitai house',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-618133020295708288/original/3ef583d2-16d9-4640-a939-246324320442.jpeg?im_w=960',
        'https://a0.muscache.com/im/pictures/miso/Hosting-618133020295708288/original/4ddde677-af85-4038-a2a1-93294bffd8f5.jpeg?im_w=480',
        'https://a0.muscache.com/im/pictures/47b9a4f2-2b7d-473c-9c4d-762629d6ef98.jpg?im_w=480',
        'https://a0.muscache.com/im/pictures/eb5ed6f7-e977-4316-9cbc-a9bbf64e7075.jpg?im_w=480',
        'https://a0.muscache.com/im/pictures/miso/Hosting-618133020295708288/original/12a4e011-8a92-45ca-8231-35bb2bfbab1f.jpeg?im_w=480',
      ],
      price: 75.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      bedrooms: 3,
      amenities: [
        'TV',
        'Wifi',
        'Kitchen',
        'Smoking allowed',
        'Pets allowed',
        'Cooking basics',
      ],
      labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
      host: {
        _id: 'XCdXV',
        fullname: 'Muki G',
        imgUrl:
          'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        city: 'Porto',
        address: '17 Kombo st',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'], // for user-wishlist : use $in
    },
    {
      _id: '1000654',
      name: 'Ribeirax',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-48866846/original/f2b39687-9d4e-4d55-a7e7-fe53c4268ab6.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/miso/Hosting-48866846/original/667db2bf-c864-4628-83e3-7f71fc195938.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/d9c50c7c-65e3-4251-abb1-cba4c84d3ee8.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/ab3d9c2b-1e5d-4c1f-91ab-26b376b49633.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/7f0322f3-51ba-4a06-9e34-b8fdb3ac9fc1.jpg?im_w=720',
      ],
      price: 309.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      bedrooms: 2,
      amenities: [
        'TV',
        'Wifi',
        'Kitchen',
        'Smoking allowed',
        'Pets allowed',
        'Cooking basics',
      ],
      labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
      host: {
        _id: 'u101',
        fullname: 'Davit Pok',
        imgUrl:
          'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        city: 'Porto',
        address: '17 Kombo st',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'], // for user-wishlist : use $in
    },
    {
      _id: '10086546',
      name: 'Ribeira Charming Duplex',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/d096aad4-5858-4bf0-87b8-638ba5615b36.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/909e7384-7cf0-4c18-af53-ac33d5d4b19a.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/3fdefead-f91e-4c42-99e0-da208403cc1b.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/8889d7e8-cc37-4cb9-a2b2-941464b8d235.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/9e14ff18-2ca5-4d12-883e-8734399050ef.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/9e14ff18-2ca5-4d12-883e-8734399050ef.jpg?im_w=720',
      ],
      price: 108.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      bedrooms: 1,
      amenities: [
        'TV',
        'Wifi',
        'Kitchen',
        'Smoking allowed',
        'Pets allowed',
        'Cooking basics',
      ],
      labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
      host: {
        _id: 'u101',
        fullname: 'Davit Pok',
        imgUrl:
          'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        city: 'Porto',
        address: '17 Kombo st',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'], // for user-wishlist : use $in
    },
    {
      _id: '1000657',
      name: 'Stone House With Panoramic Kalkan View',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-618133020295708288/original/3ef583d2-16d9-4640-a939-246324320442.jpeg?im_w=960',
        'https://a0.muscache.com/im/pictures/miso/Hosting-618133020295708288/original/4ddde677-af85-4038-a2a1-93294bffd8f5.jpeg?im_w=480',
        'https://a0.muscache.com/im/pictures/47b9a4f2-2b7d-473c-9c4d-762629d6ef98.jpg?im_w=480',
        'https://a0.muscache.com/im/pictures/eb5ed6f7-e977-4316-9cbc-a9bbf64e7075.jpg?im_w=480',
        'https://a0.muscache.com/im/pictures/miso/Hosting-618133020295708288/original/12a4e011-8a92-45ca-8231-35bb2bfbab1f.jpeg?im_w=480',
      ],
      price: 180.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      bedrooms: 3,
      amenities: [
        'TV',
        'Wifi',
        'Kitchen',
        'Smoking allowed',
        'Pets allowed',
        'Cooking basics',
      ],
      labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
      host: {
        _id: 'u101',
        fullname: 'Davit Pok',
        imgUrl:
          'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        city: 'Porto',
        address: '17 Kombo st',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'], // for user-wishlist : use $in
    },
    {
      _id: '10086548',
      name: 'Ribeira Charming Duplex',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-48866846/original/f2b39687-9d4e-4d55-a7e7-fe53c4268ab6.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/miso/Hosting-48866846/original/667db2bf-c864-4628-83e3-7f71fc195938.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/d9c50c7c-65e3-4251-abb1-cba4c84d3ee8.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/ab3d9c2b-1e5d-4c1f-91ab-26b376b49633.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/7f0322f3-51ba-4a06-9e34-b8fdb3ac9fc1.jpg?im_w=720',
      ],
      price: 195.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      bedrooms: 5,
      amenities: [
        'TV',
        'Wifi',
        'Kitchen',
        'Smoking allowed',
        'Pets allowed',
        'Cooking basics',
      ],
      labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
      host: {
        _id: 'u101',
        fullname: 'Davit Pok',
        imgUrl:
          'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        city: 'Porto',
        address: '17 Kombo st',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'], // for user-wishlist : use $in
    },
    {
      _id: '1000659',
      name: 'Heated Pool Villa Close to TLV',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/d096aad4-5858-4bf0-87b8-638ba5615b36.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/909e7384-7cf0-4c18-af53-ac33d5d4b19a.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/3fdefead-f91e-4c42-99e0-da208403cc1b.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/8889d7e8-cc37-4cb9-a2b2-941464b8d235.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/9e14ff18-2ca5-4d12-883e-8734399050ef.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/9e14ff18-2ca5-4d12-883e-8734399050ef.jpg?im_w=720',
      ],
      price: 130.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      bedrooms: 4,
      amenities: [
        'TV',
        'Wifi',
        'Kitchen',
        'Smoking allowed',
        'Pets allowed',
        'Cooking basics',
      ],
      labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
      host: {
        _id: 'u101',
        fullname: 'Davit Pok',
        imgUrl:
          'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        city: 'Porto',
        address: '17 Kombo st',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'], // for user-wishlist : use $in
    },
    {
      _id: '10086523',
      name: 'Ribeira Charming Duplex',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-51467325/original/ad8dd6ea-0a79-494e-a5ca-209c817dd67a.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/miso/Hosting-51467325/original/f8b67a89-d4e8-42e9-a129-1036db04d69a.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-51467325/original/4525b013-8f10-431d-9367-2e163b9c51e5.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-51467325/original/0d0eb20c-59ba-4048-83f1-72ade831b55b.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-51467325/original/c20542fb-c83b-4e49-95f4-d85d831d38b2.jpeg?im_w=720',
      ],
      price: 280.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      bedrooms: 3,
      amenities: [
        'TV',
        'Wifi',
        'Kitchen',
        'Smoking allowed',
        'Pets allowed',
        'Cooking basics',
      ],
      labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
      host: {
        _id: 'u101',
        fullname: 'Davit Pok',
        imgUrl:
          'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        city: 'Porto',
        address: '17 Kombo st',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'], // for user-wishlist : use $in
    },
    {
      _id: '1000621',
      name: 'Adrasan da Sonsuzluk Havuzlu Mağara Villa',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-49996006/original/06481234-a5a9-462f-b35a-eb966f97f827.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/miso/Hosting-49996006/original/49464faa-3539-4cc4-bf56-ed4826672b4e.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-49996006/original/ef4977bc-3872-4122-b5da-4c42ba397fa6.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-49996006/original/a5b3dca5-5a9c-47b6-8e1f-602079b54506.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-49996006/original/8abd9352-a7ea-4d4c-b62f-c47415017146.jpeg?im_w=720',
      ],
      price: 95.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      bedrooms: 2,
      amenities: [
        'TV',
        'Wifi',
        'Kitchen',
        'Smoking allowed',
        'Pets allowed',
        'Cooking basics',
      ],
      labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
      host: {
        _id: 'u101',
        fullname: 'Davit Pok',
        imgUrl:
          'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        city: 'Porto',
        address: '17 Kombo st',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'], // for user-wishlist : use $in
    },
    {
      _id: '10086552',
      name: 'Unique view of nature and sea; Suit Arya',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/b1a6626d-5d55-4a37-8fe8-4fdbc67b7d86.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/miso/Hosting-44151155/original/c5532e5f-e7ff-4b12-b2de-4a008c08242c.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-44151155/original/e763f13a-c795-4e6c-82ec-62545a8a2c48.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-44151155/original/bf5b4a51-d940-41d0-92e2-72497bfea0b2.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-44151155/original/43ecf65e-7e43-449a-b61e-24d78cdbadc0.jpeg?im_w=720',
      ],
      price: 80.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      bedrooms: 4,
      amenities: [
        'TV',
        'Wifi',
        'Kitchen',
        'Smoking allowed',
        'Pets allowed',
        'Cooking basics',
      ],
      labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
      host: {
        _id: 'u101',
        fullname: 'Davit Pok',
        imgUrl:
          'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        city: 'Porto',
        address: '17 Kombo st',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'], // for user-wishlist : use $in
    },
    {
      _id: '1000663',
      name: 'Villa 133 @ Club Patara',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-564588339585211835/original/19bbff18-7911-49f3-8775-5fa520ea8afc.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/miso/Hosting-564588339585211835/original/c9e0bb8a-f98d-4a1b-9d42-1fcd962752b8.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-564588339585211835/original/2a3f6751-cca4-4089-a5ee-1ecc0413bad0.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-564588339585211835/original/84d87eb4-2a1c-446b-97f7-a82c587892bf.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-564588339585211835/original/b9974afe-b252-497b-b3cb-ffbdf26354cb.jpeg?im_w=720',
      ],
      price: 80.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      bedrooms: 2,
      amenities: [
        'TV',
        'Wifi',
        'Kitchen',
        'Smoking allowed',
        'Pets allowed',
        'Cooking basics',
      ],
      labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
      host: {
        _id: 'u101',
        fullname: 'Davit Pok',
        imgUrl:
          'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        city: 'Porto',
        address: '17 Kombo st',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'], // for user-wishlist : use $in
    },
    {
      _id: '100865665',
      name: 'Ribeira Charming Duplex',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
      ],
      price: 300.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      bedrooms: 3,
      amenities: [
        'TV',
        'Wifi',
        'Kitchen',
        'Smoking allowed',
        'Pets allowed',
        'Cooking basics',
      ],
      labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
      host: {
        _id: 'u101',
        fullname: 'Davit Pok',
        imgUrl:
          'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        city: 'Porto',
        address: '17 Kombo st',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'], // for user-wishlist : use $in
    },
    {
      _id: '100084',
      name: 'Havuzlu Jakuzili Villa',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-49996006/original/06481234-a5a9-462f-b35a-eb966f97f827.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/miso/Hosting-49996006/original/49464faa-3539-4cc4-bf56-ed4826672b4e.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-49996006/original/ef4977bc-3872-4122-b5da-4c42ba397fa6.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-49996006/original/a5b3dca5-5a9c-47b6-8e1f-602079b54506.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-49996006/original/8abd9352-a7ea-4d4c-b62f-c47415017146.jpeg?im_w=720',
      ],
      price: 120.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      bedrooms: 2,
      amenities: [
        'TV',
        'Wifi',
        'Kitchen',
        'Smoking allowed',
        'Pets allowed',
        'Cooking basics',
      ],
      labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
      host: {
        _id: 'u101',
        fullname: 'Davit Pok',
        imgUrl:
          'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        city: 'Porto',
        address: '17 Kombo st',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'], // for user-wishlist : use $in
    },
  ];
}

function getDemoAmenities() {
  return [
    {
      name: 'TV',
      url: 'https://res.cloudinary.com/dtaiyvzq5/image/upload/v1669909778/airbnb%20icons/jc9e6zs9n8eucvtvz7lw.svg',
    },
    {
      name: 'Wifi',
      url: 'https://res.cloudinary.com/dtaiyvzq5/image/upload/v1669910814/airbnb%20icons/bmi7xu2obsa1qzxxglyl.svg',
    },
    {
      name: 'Kitchen',
      url: 'https://res.cloudinary.com/dtaiyvzq5/image/upload/v1669910864/airbnb%20icons/oug8b4op4x5nb7mqavnv.svg',
    },
    {
      name: 'Smoking allowed',
      url: 'https://res.cloudinary.com/dtaiyvzq5/image/upload/v1669910916/airbnb%20icons/vkmnmtwjgolvuhoorbhg.svg',
    },
    {
      name: 'Pets allowed',
      url: 'https://res.cloudinary.com/dtaiyvzq5/image/upload/v1669910961/airbnb%20icons/sumnjh7chkpaegztys3b.svg',
    },
    {
      name: 'Cooking basics',
      url: 'https://res.cloudinary.com/dtaiyvzq5/image/upload/v1669910864/airbnb%20icons/oug8b4op4x5nb7mqavnv.svg',
    },
    {
      name: 'Air conditioning',
      url: 'https://res.cloudinary.com/dtaiyvzq5/image/upload/v1670699755/qyo60weptxr8qnon8b2t.svg',
    },{
      name: 'First aid kit',
      url: 'https://res.cloudinary.com/dtaiyvzq5/image/upload/v1670699882/k0s7ylldzmidqicgyoyj.svg',
    },{
      name: 'Free parking on premises',
      url: 'https://res.cloudinary.com/dtaiyvzq5/image/upload/v1670699959/xingda6xtsmodp8p60uy.svg',
    },{
      name: 'Hair dryer',
      url: 'https://res.cloudinary.com/dtaiyvzq5/image/upload/v1670700033/gnkibto0dfdb1qee4shy.svg',
    },{
      name: 'Hot water',
      url: 'https://res.cloudinary.com/dtaiyvzq5/image/upload/v1670700098/xqm3bq2nje1mgtfpjitx.svg',
    }
  ];
}
