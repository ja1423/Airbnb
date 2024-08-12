<template>
    <section class="where-to-modal">
        <div class="input-destination-container">
            <label for="searchDestinations">Where to?</label>
            <div class="search-destinations flex" :class="isFocus ? 'search-focus' : ''">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: inline; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
                <input name="searchDestinations" ref="input" type="search" @focus="isFocus=!isFocus" @blur="isFocus=!isFocus" :placeholder="searchDestinations">
            </div>
        </div>
        <where-to-modal-list :destinations="destinations" ref="destinationsList"/>

        
    </section>
  
</template>

<script>
 import { eventBus } from '../services/event-bus.service'
import whereToModalList from './where-to-modal-list.vue'
export default {
    data(){
        return{
            destinations:[
                {name:'I\'m flexible',src:"https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832788/ypxaozgl8ypv41zcslzr.jpg"},
                {name:'Europe',src:"https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832796/jmoewtj22cydhrxv8igw.webp"},
                {name:'France',src:"https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832694/iyey3ugv4rrfebpqq4ri.jpg"},
                {name:'United States',src:"https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832626/rmbkbzyewogvanzfehex.jpg"},
                {name:'United Kingdom',src:"https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832717/cxz8hpbk9uuotl3arwni.jpg"},
                {name:'South America',src:"https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832771/vgliecdhjbr1pjdqdrl0.jpg"},
            ],
            isFocus: false,
            searchDestinations: 'Search destinations'
        }
    },
    created(){
      
    },
    mounted() {
          eventBus.on('chose-where-mainland', this.setWhereMainland)
        },
    methods:{
        setWhereMainland(mainland) {
            this.searchDestinations = mainland
        }
    },
    computed:{

    },
    components:{
        whereToModalList
    }

}
</script>
