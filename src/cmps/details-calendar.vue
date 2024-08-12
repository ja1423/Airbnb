<template>
  <section class="calender-container">
    <div class="date-picker">
      <div class="date-text">
        <h3>
          Select dates
        </h3>
        <p>
          Add your travel dates for exact pricing
        </p>
      </div>
      <div class="input-container">
        <div class="date-input start" :class="!start? 'focus': '' ">
          <div class="input-text">
            <h4>CHECK IN</h4>
            <input :value="getDateStart || 'Add date'">
          </div>
          <!-- <div class="cancel">
            <button class="btn-cancel" v-if="dateStart" @click="clearSlot('start')">X</button>
          </div> -->
        </div>
        <div class="date-input end" :class="start? 'focus': '' ">
          <div class="input-text">
            <h4>CHECK OUT</h4>
            <input :value="getDateEnd || 'Add date'">
          </div>
          <!-- <div class="cancel">
            <button class="btn-cancel" v-if="dateEnd" @click="clearSlot('end')">X</button>
          </div> -->
      </div>
        </div>
      </div>     
    <v-calendar :attributes="attributes" @dayclick="onDayClick" :columns="2" :min-date="minDate" color="gray" />

    <div class="calender-actions">
      <button class="clear-dates" @click="clearDates">Clear dates</button>
      <button class="close" @click="closeCalender">Close</button>
    </div>
  </section>
</template>

<script>
  export default {
    props:{
      'detailsDateStart':{Object,String},
      'detailsDateEnd':{Object,String}
    },
  data() {
    return {
      dates:[],
      start:null,
      end:null,
      minDate:new Date() + 1,
      dateStart:null,
      dateEnd:null,
      calendarRef:null
    };
  },
  created(){
    if(this.detailsDateStart.id !== null && this.detailsDateEnd.id !== null){
      this.dates[0] = {start:this.detailsDateStart.date,end:this.detailsDateEnd.date}
      this.dateStart=this.detailsDateStart.id
      this.dateEnd=this.detailsDateEnd.id
    }
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
  methods: {
    onDayClick(day) {
      if(!this.start){
        let today = new Date()
        let theEnd
        today.setHours(0,0,0,0)
        if(day.date.getTime() >= today.getTime()){
        this.start = day.date
        this.dateStart = day.id.split("-").reverse().join("/")
        this.$emit('updateStart',{date:this.start,id:this.dateStart})
        if(!this.end) {
          theEnd = this.start
        }else{
          theEnd = this.end
        }
        this.dates[0] = {
          start:this.start,
          end:theEnd
        }
        this.minDate = new Date(day.date)
        }
      }else if(!this.end && ((new Date(day.date) - new Date(this.start)) >= 0)){
        this.end = day.date
        this.dateEnd = day.id.split("-").reverse().join("/")
        this.$emit('updateEnd',{date:this.end,id:this.dateEnd})
        this.dates[0] = {
          start: new Date(this.start),
          end: new Date(this.end)
        }
        this.start = null
        this.end = null
        this.minDate = new Date()
        this.closeCalender()
      }
    },
    clearDates(){
      this.dates =[]
      this.start=null
      this.end=null
      this.dateStart=null
      this.dateEnd=null
      this.$emit('updateStart',{date:this.start,id:''})
      this.$emit('updateEnd',{date:this.end,id:''})
    },
    closeCalender(){
      this.$emit('closeCalendar')
    },
    // clearSlot(date){
    //   console.log(date);
    //   if(date === 'start'){
    //     this.start=null
    //     this.dateStart="Add date"
    //     this.dates[0].start = this.dates[0].end
    //   }else{
    //     this.end=null
    //     this.dateEnd="Add date"
    //     this.dates[0].end = this.dates[0].start
    //   }
    // }
  },
};
</script>


