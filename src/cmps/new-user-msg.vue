<template>
    
</template>

<script>
    import { ElNotification } from 'element-plus'
    import { eventBus } from '../services/event-bus.service'
    export default {   
        created() {
            eventBus.on('show-user-msg',this.showMsg)  
        },
        methods: {
            showMsg(message){
                ElNotification(message) 
            }
        },
    }
</script>