<template>
    <section class="stay-details  main-container" style="margin-top:200px;" >
      <h1>Wishlist</h1>
      <div v-for="stay in loggedInUser.wishlist" :key="stay" style="margin-bottom:30px;">
        <section class="wishlist" @click="goToDetails(stay._id)">
          <div>stay {{stay.name}}</div>
          <section class="img-container">
            <div v-for="image in stay.imgUrls" :key="image" class="img-gallery">
                <img :src="image" alt="">
            </div>
          </section>
        </section>
      </div>
    </section>
  
    
</template>
  
<script>
  export default {
    name: 'wish-list',
    data() {
      return {

      }
    },
    created() {
      eventBus.emit('go-to-details')
    },
    computed: {
      loggedInUser() {
        const loggedinUser = this.$store.getters.loggedinUser 
        if (!loggedinUser){
          return {imgUrl:'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'}
        }
        return loggedinUser
      },
    },
    methods: {
      goToDetails(stayId){
        this.$router.push({path: `/stay/${stayId}`,query: {inWishlist:true}})
      }
    } 
  }
</script>