<template>
    <section @click="choseSearch('where')">
    <h1>Where to?</h1>
    <button class="main-filter-btn"  @click="choseSearch('where')">{{whereToGo}}</button>
    <div class="border-line-between" @click="choseSearch('where')"></div>
    <button class="main-filter-btn"  @click="choseSearch('when-start')">{{whenToGo}}</button>
    <div class="border-line-between" @click="choseSearch('when-start')"></div>
    <button class="main-filter-btn guest"  @click="choseSearch('who')">{{whoGo}}</button>
    <button class="main-filter-search-btn" @click="choseSearch('where')"><div class="s1qcpybl dir dir-ltr" data-icon="true" data-testid="little-search-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg></div></button>
  </section>    
</template>

<script>
import { eventBus } from '../services/event-bus.service'
    export default {
        props: {
            
        },
        data() {
            return {
                whereToGo: 'Anywhere',
                whenToGo: 'Any week',
                whoGo: 'Add guests',
            }
        },
        created() {
            
            // setInterval(()=>{console.log('this.where',this.where)},5000)
        },
        methods: {
            choseSearch(chose){
                this.$emit('clickedMain',chose)
            },
             
        },
        computed: {
            
        },
        watch:{
            $route (explore,stay){
                console.log(explore.query.txt)
                this.whereToGo = explore.query.txt || 'Anywhere'
                this.whenToGo = explore.query.checkin || 'Any week'
                const guests = +explore.query.adults + (+explore.query.children)
                this.whoGo = (guests) ? guests + ' guests' : 'Add guests'
                

    }
} 
    }
</script>

