<template>
    <Carousel :itemsToShow="12" :wrapAround="false" :transition="500" class="carousel-of-icons"
    :itemsToScroll="5" :touchDrag="true" >
      <Slide  class="slide-in-header" v-for="icon in icons" :key="icon"  >
        <div @click="choseIcon(icon.iconName)" :class="{iconActive:icon.iconName === iconChosen }"  class="flex column space-between icon-in-carousel-filter">
            <img class="header-icon-filter-img" :src="icon.url" alt="1">
            {{icon.iconName}}
        </div>

      </Slide>
      <Carousel  ref="myCarousel"> ... </Carousel>

        <template #addons>
        
        <Navigation class="header-navigate-filter-carousel"/>
        </template>
      ...
    </Carousel>
</template>
  
<script>
  import { defineComponent } from 'vue'
  import { Carousel,  Navigation,Pagination, Slide } from 'vue3-carousel'
  
//   import 'vue3-carousel/carousel.css'
  import 'vue3-carousel/dist/carousel.css'
  import { ref } from 'vue'

  export default defineComponent({
    name: 'Autoplay',
    data(){
        return {
            myCarousel: ref(null),
            icons: [
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758826/top_of_the_world._jpg_b8wzyu.jpg",
                iconName:'Top of the world'},
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758835/tropical_fgverw.jpg",
                iconName:'Tropical'},
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758830/trending_dc5gh8.jpg",
                iconName:'Trending'},
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758821/private_room_bdwxkv.jpg",
                iconName:'Private rooms'},
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758817/play_v8l9un.jpg",
                iconName:'Play'},
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758812/omg_effgok.jpg",
                iconName:'OMG!'},
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758807/new_sfipxe.jpg",
                iconName:'New'},
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758802/mansions_u4xctw.jpg",
                iconName:'Mansions'},
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758796/luxe_r6kico.jpg",
                iconName:'Luxe'},
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758792/iconic_cities_zij7ek.jpg",
                iconName:'Iconic cities'},
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758786/hanoks_aywmtj.jpg",
                iconName:'Hanoks'},
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758781/design_mmixeo.jpg",
                iconName:'Design'},
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758775/castles_uwp3vj.jpg",
                iconName:'Castles'},
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758770/cabins_hsuyh5.jpg",
                iconName:'Cabins'},
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758762/amazing_views_gixu8h.jpg",
                iconName:'Amazing views'},
                {url:"https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758752/adapted_qivady.jpg",
                iconName:'Adapted'},
                // {url:"",
                // {url:"",
            ],
            iconChosen: 'Top of the world'

        }
    },
    mounted() {
      // console.log('hi i am here',this.myCarousel.data)
    },
    methods: {
      choseIcon(iconName){
        this.iconChosen = iconName
        this.$store.dispatch({ type: "loadStays", filterBy: {type: iconName} });
      }
    },
    components: {
      Carousel,
      Slide,
      
      Navigation
    },
  })

</script>
  
<style scoped>
  .carousel__slide {
    padding: 5px;
  }
  
  .carousel__viewport {
    perspective: 2000px;
  }
  
  .carousel__track {
    transform-style: preserve-3d;
  }
  
  .carousel__slide--sliding {
    transition: 0.5s;
  }
  
  
  .carousel__slide {
    opacity: 1;
    transform: rotateY(0) scale(0.9);
    /* transform: rotateY(-20deg) scale(0.9); */
    padding-top: 14px;
    height: 100%;
    width: 120px !important;
  }
  .carousel_slide--visible{
    padding: 0 ;
    width: 120px;
  }

  .carousel__slide:hover {
    
    /* color: black;
    border-bottom: 2px solid #717171;
    /* height: 58px; */
    /* padding-bottom: 10px;  */
    
  }
  
  .carousel__slide--active ~ .carousel__slide {
    /* transform: rotateY(20deg) scale(0.9);
    transform: rotateY(0) scale(0.9); */
  }
  
  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(0) scale(0.9);
    /* transform: rotateY(-10deg) scale(0.95); */
  }
  
  
  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }
  
  .carousel__slide--active {
    /* opacity: 1;
    transform: rotateY(0) scale(1.1); */
  }

  .slide-in-header{
    padding-left: 0;
  }
</style>