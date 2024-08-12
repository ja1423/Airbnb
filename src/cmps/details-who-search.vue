<template>
    <section class="details-who-search flex column">
        <div class="flex row space-between align-center part">
            <div class="who-search-text">
                <h1>Adults</h1>
                <p>Ages 13 or above</p>
            </div>
            <add-guest-num @changeNum="changeNum" :number="number.gusetNum" :maxNum="maxAdults" :minNum="1"></add-guest-num>
        </div>
        <div class="flex row space-between align-center part">
            <div class="who-search-text">
                <h1>Children</h1>
                <p>Ages 2-12</p>
            </div>
            <add-guest-num @changeNum="changeNumKids" :number="number.kidsNum" :maxNum="maxKids" :minNum="0"></add-guest-num>
        </div>
        <div class="flex row space-between align-center part">
            <div class="who-search-text">
                <h1>Infants</h1>
                <p>Under age 2</p>
            </div>
            <add-guest-num @changeNum="changeNumInfants" :number="number.infantsNum" :maxNum="5" :minNum="0"></add-guest-num>
        </div>
        <div class="flex row space-between align-center part">
            <div class="who-search-text">
                <h1>Pets</h1>
                <p>Bringing a service animal?</p>
            </div>
            <add-guest-num @changeNum="changeNumPets" :number="number.petsNum" :maxNum="5" :minNum="0"></add-guest-num>
        </div>
    </section>
</template>

<script>
import addGuestNum from './add-guest-num.vue';

    export default {
        props: {
            'maxAdults':Number,
            'maxKids':Number,
            'number':Object,
        },
        data(){
            return{
                totalGuest:0,
                totalKids:0,
                totalInfants:0,
                totalPets:0,
            }
        },
        methods:{
            changeNum(num){
                this.totalGuest = num
                this.$emit('totalGuest',this.totalGuest)
            },
            changeNumKids(num){
                this.totalKids = num
                this.$emit('totalKids',this.totalKids)
            },
            changeNumInfants(num){
                this.totalInfants = num
                this.$emit('totalInfants',this.totalInfants)
            },
            changeNumPets(num){
                this.totalPets = num
                this.$emit('totalPets',this.totalPets)
            }
            
            
        },
        components:{
            addGuestNum 
        }
    }
</script>