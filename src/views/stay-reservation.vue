<template>
    <section style="margin-top:100px;" class="stay-reservation main-container" v-if="myReservation">
      <div class="your-trip">
        <h2>Your trip</h2>
          <div class="head"><h4>Dates</h4></div>
          <div class="text"><span>{{myReservation.startDate}}-{{myReservation.endDate }} </span></div>
          <div class="head"><h4>Guests</h4></div>
          <div class="text">
            Adults: {{myReservation.guests.adults }}
            <div v-if="myReservation.guests.kids">Kids: {{myReservation.guests.kids}}</div>
            <div v-if="myReservation.guests.infants">Infants:{{reservmyReservation.guests.infants}}</div>
            <div v-if="myReservation.guests.pets">Pets: {{reservmyReservation.guests.pets}}</div>
          </div>
      </div>
      <div class="reservation-details">
        <h2>Stay details</h2>
        <div class="head">
          <h4>Host</h4>
        </div>
        <div class="text">
          <span>{{myReservation.hostName}}</span>
        </div>
        <div class="head">
          <h4>Stay name</h4>
        </div>
        <div class="text">
          <span>{{myReservation.stay.name}}</span>
        </div>
          <div class="head">
            <h4>Stay type</h4>
          </div>
          <div class="text">
            <span>{{myReservation.stay.type}}</span>
          </div>
          <div class="head">
            <h4>Review score</h4>
          </div>
          <div class="review flex row align-center">
            <div class="text flex row align-center">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 14px; width: 14px; margin-bottom:3px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
              <span class="review-text">  
                &nbsp;{{myReservation.stay.reviewScore}} &nbsp;<span>({{ myReservation.stay.reviews.length }} reviews)</span>
              </span> 
            </div>
          </div>
      </div>
      <!-- <div class="end"></div> -->
      <div class="price-details">
        <h2>Price details</h2>
        <div class="head">
          <h4>Total price</h4>
        </div>
        <div class="text">
          <span>${{myReservation.totalPrice}}</span>
        </div>
        <div class="head">
          <h4>Total nights: </h4>
        </div>
        <div class="text">
          <span>{{myReservation.totalNights}} nights</span>
        </div>
      </div>
      <div class="btn-container" @click="moveToHomePage">
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
        <span class="btn">Go to My trips</span>
      </button>
    </div>
      </div>
      <div class="img-container">
          <img :src="imgUrl" v-for="imgUrl in myReservation.stay.imgUrls.slice(0,4)" :key="imgUrl">
      </div>
    </section> 
    <!-- <pre>{{myReservation}}</pre> -->
    
</template>
  
<script>
// reservation

  export default {
    name: 'reservation',
    data() {
      return {
        reservation:null,
        loggedUser:''
      }
    },
    created(){
      this.$store.getters.currOrder
      this.loggedUser = this.$store.getters.loggedinUser
    },
    computed: {
      myReservation(){
        return this.$store.getters.currOrder
      }
    },
    methods: {
      moveToHomePage(){
        this.$router.push(`/user/${this.loggedUser._id}`)
      }
    } 
  }
</script>