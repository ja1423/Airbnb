<template>
    <div v-if="isFilterModal" @click="(isFilterModal =false)" class="modal-full-screen"></div>
    <filter-modal v-if="isFilterModal" ></filter-modal>
    <section v-if="mainPage" class="header-layout filter-main-nav" :class="{'big-filter':isBigFilter,'was-scrolled':scrolledDown}">
        <filter-icon-carousel class="header-filter-icon-carousel"></filter-icon-carousel>
        <button class="filter-btn flex" @click="( isFilterModal = true)">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="display:block;height:18px;width:18px;fill:currentColor" aria-hidden="true" role="presentation" focusable="false"><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
            <span>Filters</span>
        </button>
    </section>
</template>

<script>
    import { eventBus } from '../services/event-bus.service'
    import filterIconCarousel from './filter-icon-carousel.vue';
    import filterModal from './filter-modal.vue';
    export default {
        data() {
            return {
              mainPage: true,
              isBigFilter: false, 
              isFilterModal: false,
              scrolledDown: false,
            }
        },
        created(){
            eventBus.on('go-to-details',()=>{this.mainPage = false})
            eventBus.on('back-to-main',()=>{this.mainPage = true})
            eventBus.on('go-big-filter',()=>{this.isBigFilter = true})
            eventBus.on('go-main-filter',()=>{this.isBigFilter = false})
            eventBus.on('go-to-user-pages',()=>{this.mainPage = false})
            addEventListener('scroll', (event) => {
                if (window.scrollY > 11) this.scrolledDown = true
                else this.scrolledDown = false
            })
        },
        methods: {
            
        },
        components:{
            filterIconCarousel,
            filterModal 
        }
    }
</script>