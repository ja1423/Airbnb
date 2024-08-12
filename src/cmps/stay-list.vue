<template>
  <section class="stay-list">
    <div class="cards-layout">
      <div v-for="stay in stays" :key="stay._id" class="card">
        <stay-preview :stay="stay"></stay-preview>
      </div>
    </div>
  </section>
</template>
  
<script>
  import stayPreview from './stay-preview.vue';
  export default {
    props: {
      stays: Object
    },
    components: {
      stayPreview 
    }
  }
</script>
 
  