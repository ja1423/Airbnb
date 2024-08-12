<template>
    <section class="where-to-modal-preview" >
        <div>
            <img @click="choseMainland(destination.name === 'I\'m flexible'? '':destination.name)" class="mainland-img" :src="destination.src" alt="">
            <div>{{ destination.name }}</div>
        </div>
    </section>
  
</template>

<script>
    import { eventBus } from '../services/event-bus.service'
export default {
    props:{
        destination: Object,
    },
    data(){
        return{

        }
    },
    created(){

    },
    methods: {
            choseMainland(mainland){
                eventBus.emit('chose-where-mainland', mainland)
            },
        },
    computed:{

    }

}
</script>
<style>

</style>