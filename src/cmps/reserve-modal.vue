<template>
    <section class="reserve-modal">
      <h1>Reservation Success!</h1>
      <h2>Tour trip:</h2>
      <div class="your-trip">Check-In<span>{{reservation.checkIn || '01/09/1993'}}</span></div>
      <div class="your-trip">Check-Out<span>{{(reservation.checkIn || '0'+(1 + reservation.TotalNights + '/09/1993'))}}</span></div>
      <div class="your-trip">Host name<span>{{stay.host.fullname}}</span></div>
      <div class="end"></div>
      <h2>Stay details:</h2>
      <div class="reservation-details">
        <img :src="stay.imgUrls[0]" alt="">
        <div class="text">
          <p class="top">{{stay.name}}</p>
          <p class="middle">{{stay.type}}</p>
          <p class="review">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 14px; width: 14px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
            4.0 &nbsp;<span>({{ stay.reviews.length }} reviews)</span>
          </p>
        </div>
      </div>
      <div class="end"></div>
      <div class="price-details">
        <h2>price-details</h2>
        <div class="your-trip">Adults: <span>{{(reservation.adults || 1)}}</span></div>
        <div v-if="reservation.kids" class="your-trip">Kids: <span>{{reservation.kids}}</span></div>
        <div v-if="reservation.infants" class="your-trip">Infants:<span>{{reservation.infants}}</span></div>
        <div v-if="reservation.pets" class="your-trip">Pets: <span>{{reservation.pets}}</span></div>
        <div class="your-trip">Total price: <span>${{reservation.totalPrice}}</span></div>
        <div class="your-trip">Total nights: <span>{{reservation.TotalNights}}</span></div>

      <div class="btn-container" @click="onReserve">
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="content">
        <button class="action-btn">
          <span class="btn">Look for more places to stay</span>
        </button>
      </div>
    </div>
      </div>

      
    </section>
  </template>
  
  <script>
import stayReserve from "../cmps/stay-reserve.vue";

  export default {
      name: 'reserve-modal',
      props:{
        reservation: Object,
        stay: Object,
      },
      data() {
        return {
        }
      },
      computed: {

      },
      created(){

      },
      methods: {

      },
    components: {
      stayReserve,
    },
      
  }
</script>