<template>
    <section class="stay-who-search-modal">
    <div>
        <h2>Adults</h2>
        <p>Ages 13 or above</p>
    </div>
    <add-guest-num :maxNum="12" :minNum="1" :number="guests.adults" @changeNum="setAdultsGuests"></add-guest-num>
    <div class="user-nav-border-line-between"></div>
    <div class="user-nav-border-line-between"></div>
    <div>
        <h1>Children</h1>
        <p>Ages 2-12</p>
    </div>
    <add-guest-num :maxNum="6" :minNum="0" :number="guests.children" @changeNum="setChildrenGuests"></add-guest-num>
    <div class="user-nav-border-line-between"></div>
    <div class="user-nav-border-line-between"></div>
    <div>
        <h1>Infants</h1>
        <p>Under age 2</p>
    </div>
    <add-guest-num :maxNum="6" :minNum="0" :number="guests.infants" @changeNum="setInfantsGuests"></add-guest-num>
    <div class="user-nav-border-line-between"></div>
    <div class="user-nav-border-line-between"></div>
    <div>
        <h1>Pets</h1>
        <p style="text-decoration: underline;">Bringing a service animal?</p>
    </div>
    <add-guest-num :maxNum="5" :minNum="0" :number="guests.pets" @changeNum="setPetsGuests"></add-guest-num>
    </section>
</template>

<script>
import { eventBus } from '../services/event-bus.service'
import addGuestNum from './add-guest-num.vue';

    export default {
        props: {
            
        },
        data(){
            return{
                guests: {
                    adults: 1, 
                    children: 0, 
                    infants: 0, 
                    pets: 0
                }
            }
        },
        methods: {
            setAdultsGuests(num){
                // console.log(num);
                this.guests.adults = num    
                eventBus.emit('chose-who-guests', this.guests)
            },
            setChildrenGuests(num){
                this.guests.children = num 
                eventBus.emit('chose-who-guests', this.guests)
            },
            setInfantsGuests(num){
                this.guests.infants = num
                eventBus.emit('chose-who-guests', this.guests)
            },
            setPetsGuests(num){
                this.guests.pets = num   
                eventBus.emit('chose-who-guests', this.guests)
            },

            
        },
        components:{
            addGuestNum 
        }
    }
</script>