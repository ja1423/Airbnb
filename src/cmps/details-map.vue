<template>
  <section class="details-map" v-if="currLoc">
    <h2>Where you’ll be</h2>
    <GoogleMap
      api-key="AIzaSyDnRn3KRkL2qHovAbZ-jQx7yM1NawhwKJw"
      style="width: 100%; height: 500px"
      :center="center"
      class="map"
      :zoom="15">

      <Marker 
        v-for="m in markers" 
        @click="center = m.position" 
        :options="m" 
        :key="m.position"/>
    </GoogleMap>
  </section>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
  props:{
      loc: Object,
    },
  components: { GoogleMap, Marker },
  data() {
    return {
      location: null,
      center: null,
      markers: null,
    }
  },
  created(){
    setTimeout(()=>{
      this.location = this.loc
      this.center = { lat: this.loc.lat, lng: this.loc.lan }
      this.markers = [{
          title: this.location.country,
          label: this.location.city,
          position: { lat: this.loc.lat, lng: this.loc.lan },
        }]
    },800)
  },
  computed:{
    currLoc(){
      return this.location
    },
  },
}
</script>