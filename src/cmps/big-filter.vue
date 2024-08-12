<template>
    <section >
      <button class="big-filter-btn grid column" @click="choseSearch('where')" v-bind:class="{isActive: WhereSearch}">
          <form action="" @submit="choseSearch('when-start')">
            <div>Where</div>
            <input class="input-search-big-filter" type="search" :placeholder="wherePlaceholder" v-model="filterBy.txt" >
          </form>
      </button>
      <div :class="{'no-line':(WhereSearch || whenStart)}" class="border-line-between"></div>
      <button class="big-filter-btn date grid"  v-bind:class="{isActive: whenStart}" @click="choseSearch('when-start')">
        <div>Check in</div>
        <button v-bind:class="resetActiveStart" @click="resetDate()" class="reset-date">x</button>
        <div>{{checkin}}</div>
      </button>
      <div :class="{'no-line':(WhenEnd || whenStart)}" class="border-line-between"></div>
      <button class="big-filter-btn date grid"  v-bind:class="{isActive: WhenEnd}" @click="choseSearch('when-end')">
        <div>Check out</div>
        <button v-bind:class="resetActiveEnd" @click="resetDate()" class="reset-date">x</button>
        <div>{{checkout}}</div>
      </button>
      <div :class="{'no-line':(WhoSearch || WhenEnd)}"  class="border-line-between"></div>
      <div class="big-filter-btn grid" v-bind:class="{isActive:WhoSearch}" @click="choseSearch('who')">
        <button class="who-filter-btn grid column" >
          <div>Who</div>
          <div>{{guests}}</div>
        </button>
        <button @click="onSearch()" class="main-filter-search-btn big">
          <div class="s1qcpybl dir dir-ltr" data-icon="true" data-testid="little-search-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg></div>
          <div>Search</div>
        </button>
      </div>
    </section>    
</template>

<script>
    import { eventBus } from '../services/event-bus.service'
    export default {
        props: ['isWhereSearch','isWhenStart','isWhenEnd','isWhoSearch']
        ,
        data(){
          return{
            whenStart: this.isWhenStart,
            WhenEnd: this.isWhenEnd,
            WhereSearch: this.isWhereSearch, 
            WhoSearch:this.isWhoSearch,
            filterBy: {
              txt:'',
              type: '',
              checkin: '',
              checkout: '',
              adults: 0, 
              children: 0, 
              infants: 0, 
              pets: 0
            },
            checkin: 'Add dates',
            checkout: 'Add dates',
            mainland: 'Search destination',
            guests: 'Add guests'
          }
        },
        mounted() {
          eventBus.on('chose-day-start', this.setCheckin)
          eventBus.on('chose-day-end', this.setCheckout)
          eventBus.on('chose-where-mainland', this.setWhereMainland)
          eventBus.on('chose-who-guests', this.setWhoGuests)
          eventBus.on('search-stays',this.onSearch)
        },
        computed: {
          wherePlaceholder(){
            return this.mainland
          },
          resetActiveStart(){
            return {'reset-active':(this.whenStart & this.checkin !== 'Add dates')}
          },
          resetActiveEnd(){
            return {'reset-active':(this.WhenEnd & this.checkout !== 'Add dates')}
          },
        },
        methods: {
          onSearch(){
            this.$emit('clickedScreen')
            this.$router.push({ 
              path: '/stay/explore', 
              query: this.filterBy
            })
          },
          choseSearch(chose){
            this.WhereSearch= (chose === 'where')
            this.WhoSearch= (chose === 'who')
            this.whenStart= (chose === 'when-start') 
            this.WhenEnd= (chose === 'when-end') 
            this.$emit('clickedMain',chose)
          },
          setCheckin(date){
            console.log(date);
            this.filterBy.checkin = date.id
            this.checkin = date.id
            this.choseSearch('when-end')
          },
          setCheckout(date){
            console.log(date);
            this.filterBy.checkout = date.id
            this.checkout = date.id
          },
          setWhoGuests({adults, children, infants, pets}){
            this.filterBy.adults = adults
            this.filterBy.children = children
            this.filterBy.infants = infants
            this.filterBy.pets = pets
            this.guests = adults + children + ' guests'
          },
          resetDate(){
            console.log('reset');
            this.checkin = 'Add dates'
            this.filterBy.checkin = ''
            this.checkout = 'Add dates'
            this.filterBy.checkout = ''
            this.choseSearch('when-start')
            eventBus.emit('reset-day-chose')
          },
          setWhereMainland(mainland){
            this.mainland = (mainland) ? mainland : 'search destination'
            this.choseSearch('when-start')
            this.filterBy.txt = mainland
          },
        },
    }
</script>