<template>
  <section class="mobile-search-modal">
    <button @click="goBack" class="btn-back">Back</button>
    <where-to-modal v-if="searchTabToggle.isWhereOn"/>
    <section class="modal-close flex space-between" v-else @click="toggleSearchTab('isWhereOn')">
      <div class="tab-name">Where</div> 
      <div class="tab-value">{{ mainland }}</div>
    </section>
    <when-modal v-if="searchTabToggle.isWhenOn"/>
    <section class="modal-close flex space-between" v-else @click="toggleSearchTab('isWhenOn')">
      <div class="tab-name">When</div> 
      <div class="tab-value">{{dateChecker}}</div>
    </section>
    <stay-who-search v-if="searchTabToggle.isWhoOn"></stay-who-search>
    <section class="modal-close flex space-between" v-else @click="toggleSearchTab('isWhoOn')">
      <div class="tab-name">Who</div> 
      <div class="tab-value">{{gusetChecker}}</div>
    </section>
    <div class="action-container flex space-between">
        <div>
            clear
        </div>
      <button class="btn-search" v-if="!searchTabToggle.isWhenOn" @click="onSearch">Search</button>
      <button class="btn-next" v-else @click="toggleSearchTab('isWhoOn')">Next</button>
    </div>
  </section>
</template>

<script>
import { eventBus } from '../services/event-bus.service'
import whereToModal from "./where-to-modal.vue"
import whenModal from "./when-modal.vue"
import stayWhoSearch from "./stay-who-search-modal.vue"
export default {
  data() {
    return {
      searchTabToggle:{isWhereOn: true,isWhenOn:false,isWhoOn:false},
      mainland:'I\'m flexible',
      startDate: '',
      endDate: '',
      guest: {adults:1, children:0, infants:0, pets:0}
    };
  },
  created() {},
  mounted(){
    eventBus.on('chose-where-mainland',this.changeMainland)
    eventBus.on('chose-day-start', this.addStartDate)
    eventBus.on('chose-day-end', this.addEndDate)
    eventBus.on('chose-who-guests', this.setWhoGuests)
  },
  methods: {
    onSearch(){
        console.log('search');
        eventBus.emit('search-stays')
    },
    goBack(){
        eventBus.emit('go-back')
    },
    changeMainland(mainland){
      this.mainland = mainland === ''? 'I\'m flexible' : mainland
      this.searchTabToggle.isWhereOn = false
      this.searchTabToggle.isWhenOn = true
    },
    toggleSearchTab(tab){
      for (const property in this.searchTabToggle) {
        this.searchTabToggle[property] = false
      }
      this.searchTabToggle[tab] = true
    },
    addStartDate(date){
      this.startDate = date.id
    },
    addEndDate(date){
      this.endDate = date.id
    },
    setWhoGuests({adults, children, infants, pets}){
      this.guest.adults = adults
      this.guest.children = children
      this.guest.infants = infants
      this.guest.pets = pets
    }
    
  },
  computed: {
    dateChecker(){
      return this.startDate === ''?'Add Dates' : this.startDate + '-' + this.endDate
    },
    gusetChecker(){
      return (this.guest.adults === 1 && this.guest.children === 0 && this.guest.infants === 0 && this.guest.pets === 0)? 
        'Add Guests' : (this.guest.adults + this.guest.children + ' guests, ' + (this.guest.infants ? this.guest.infants + ' infants, ':'') + (this.guest.pets ? this.guest.pets + ' pets':''))
    }
  },
  components: {
    whereToModal,
    whenModal,
    stayWhoSearch,
  },
};
</script>
