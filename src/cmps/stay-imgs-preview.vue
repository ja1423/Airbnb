<template>
  <Carousel @mouseleave="notHover" @mouseover="onHover">
    <Slide v-for="image in imgs" :key="image" @click="goToDetails" >
      <div class="carousel__item"><img :src="image" ></div>
    </Slide> 
    <template #addons>
      <Pagination  />
      <Navigation class="navigate-imgs-carousel" :class="[isHover|| isNavHover ? 'show' : 'hide']" />
        <button class="add-to-wishlist" @click="toggleWishlist">
          <svg class="heart" :class="[isSaved ? 'red' : 'grey']" 
          viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; stroke:#ffffff; stroke-width: 2; overflow: visible;"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
          <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
      </button>
    </template>
  </Carousel>
</template>
  
<script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  export default defineComponent({
    name: 'stay-imgs-preview',
    props: {
      imgs: Array,
      saved: Boolean
    },
    data() {
      return {
        isSaved: this.saved || false,
        isHover: null,
        isNavHover: null,
      }
    },
    methods: {
      goToDetails() {
        this.$emit('goToDetails')
      },
      toggleWishlist() {
        this.isSaved = !this.isSaved;
        this.$emit('addToWishlist',this.isSaved)
      },
      onHover() {
        this.isHover = true
      },
      notHover() {
        this.isHover = false
      },
    },
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
  })
</script>
  