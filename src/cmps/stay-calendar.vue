<template>
    <div class="demo-date-picker">
      <div class="block is-active">
        <el-date-picker
          @blur="closeDetailsReserve"
          v-model="value"
          type="daterange"
          start-placeholder="Start date"
          end-placeholder="End date"
          ref="calendar"
          :disabled-date="disabledDate"
        />
      </div>
    </div>
</template>
  
<script>
  import { eventBus } from '../services/event-bus.service'
  import { ref } from 'vue'
  export default {
    data(){
      return{
        value: ref(''),
        calendarRef:null,
    }
  },
  created() {
  },
  mounted() {
    eventBus.on('when-selected', this.isFocus)
      // this.isFocus()  
  },
  unmounted(){
    
  },
  methods: {
    async isFocus(){
      console.log('focus');
      this.calendarRef = await this.$refs.calendar;
      console.log(this.calendarRef);
      this.calendarRef.focus()
    },
    updateFocus(){
      setTimeout(()=> {
      console.log('focus');
      this.isFocus
    },50)
    },
    closeDetailsReserve(){
      eventBus.emit('close-modal')
    } 
  },
  computed: {
  //   defaultTime(){
  //     return ref<[Date, Date]>([
  //   new Date(2000, 1, 1, 0, 0, 0),
  //   new Date(2000, 2, 1, 23, 59, 59),
  // ])
    // },
    disabledDate(){
      const time = new Date()
      //  return time < Date.now()
    }
  },
 }
//  :default-time="defaultTime"

</script>



  <style scoped>
  .demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
  }
  .demo-date-picker .block {
    /* display: flex; */
    padding: 0 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
  }
  .demo-date-picker .block:last-child {
    border-right: none;
  }
  .el-picker-panel__content{
    display: block !important;
  }
  .el-date-editor{
    display: none !important;
  }
  </style>
  