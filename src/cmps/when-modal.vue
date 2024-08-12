<template>
    <section class="when-modal">
        <details-calendar :detailsDateStart="dateStart"
        :detailsDateEnd="dateEnd"
        @updateStart="updateStart"
        @updateEnd="updateEnd"
        />
    </section>
  
</template>

<script>
import detailsCalendar from './details-calendar.vue'
import { eventBus } from '../services/event-bus.service'
export default {
    data(){
        return{
            dateEnd: {id:null,date:null},
            dateStart: {id:null,date:null},
        }
    },
    created(){

    },
    methods:{
        updateStart(update) {
            this.dateStart = update;
            if(update.id === ''){
                this.dateStart.id = null
            }
            eventBus.emit('chose-day-start', this.dateStart)
        },
        updateEnd(update){
            this.dateEnd = update;
            if(update.id === ''){
                this.dateEnd.id = null
            }
          eventBus.emit('chose-day-end', this.dateEnd)        
        },

    },
    computed:{

    },
    components: {
        detailsCalendar,
    }

}
</script>
