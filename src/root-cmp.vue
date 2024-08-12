<template>
    <app-upper-header />
    <app-second-header/>
  <section style="margin-bottom: 80px;">
    <user-msg/>
    <router-view/>
  </section>
  <app-footer/>
</template>

<script>


import { store } from './store/store'
import appUpperHeader from './cmps/app-upper-header.vue'
import appSecondHeader from './cmps/app-second-header.vue'
import appFooter from './cmps/app-footer.vue'
import userMsg from './cmps/user-msg.vue'
import { userService } from './services/user.service'


export default {

  created() {
    console.log('Vue App created')
    const user = userService.getLoggedinUser()
    if (user)  store.commit({type: 'setLoggedinUser', user})
  },
  components: {
    appUpperHeader,
    appSecondHeader,
    userMsg,
    appFooter,
  },
}
</script>