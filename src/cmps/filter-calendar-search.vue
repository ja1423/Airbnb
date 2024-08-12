<template>
  <section  class="calender-container-search">
      <v-calendar locale="en" class="calender-for-search" :attributes="attributes" @dayclick="onDayClick" :columns="2" :min-date="minDate" color="gray" />
  </section>
</template>
  
<script>
import { eventBus } from '../services/event-bus.service'
  export default {
    data(){
      return{
        dates:[],
        start:null,
        end:null,
        minDate:new Date() + 1,
        dateStart:null,
        dateEnd:null,
        calendarRef:null   
      }
    },
    created() {
      eventBus.on('reset-day-chose',this.resetDayChose)
    },
    computed: {
      attributes() {
        return this.dates.map(date => ({
          highlight: true,
          dates: date,
        }));
      },
      getDateStart(){
        return this.dateStart
      },
      getDateEnd(){
        return this.dateEnd
      }
    },
    components:{
      
    },
    methods: {
    onDayClick(day) {
      console.log(day.date.getTime());
      if(!this.start){
        let today = new Date()
        today.setHours(0,0,0,0)
        if(day.date.getTime() >= today.getTime()){
        this.start = day.date
        this.dateStart = day.id.split("-").reverse().join("/")
        eventBus.emit('chose-day-start', {date:this.start,id:this.dateStart})
        this.dates[0] = {
          start:this.start,
          end:this.start
        }
        this.minDate = new Date(day.date)
        }
      }else if(!this.end && ((new Date(day.date) - new Date(this.start)) >= 0)){
        this.end = day.date
        this.dateEnd = day.id.split("-").reverse().join("/")
        eventBus.emit('chose-day-end', {date:this.end,id:this.dateEnd})
        this.dates[0] = {
          start: new Date(this.start),
          end: new Date(this.end)
        }
        this.start = null
        this.end = null
        this.minDate = new Date()
      }
    },
    resetDayChose(){
      console.log('reset day in calendar');
      this.start = null
      this.end = null
      this.dates = []
    }
  },
  }
</script>


