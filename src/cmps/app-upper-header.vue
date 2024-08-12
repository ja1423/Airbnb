<template>
  <header class="header-layout" :class="{'details':isDetailsHeader,'big-filter':isBigFilter}"> 
      <new-user-msg ></new-user-msg>
      <nav>
        <router-link to="/stay" class="flex router-logo-link" @click="returnToMainStay()">
          <img class="airbnb-logo" src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669976706/bdcvkjwqkucgzr2bka5x.svg" alt="logo">
          <h1>dreambnb</h1> 
        </router-link>
      </nav>
      <main-filter @clickedMain="clickedMain" v-if="isMainFilter" class="main-filter-btns"></main-filter>
      <Transition>
        <big-filter @clickedMain="clickedMain" @clickedScreen="clickedScreen" :isWhereSearch="isWhereSearch" :isWhoSearch="isWhoSearch" :isWhenEnd="isWhenEnd" :isWhenStart="isWhenStart"
        v-if="isBigFilter" class="big-search-filter flex row"></big-filter>
      </Transition>
      <mobile-search-modal v-if="isBigFilter && window.innerWidth <= 550"/>
      <details-header-filter @clickedMain="clickedMain" v-if="isDetailsHeader"></details-header-filter>
      <section class="flex">
        <router-link class="dreambnb-home-header" :to="`/host`">Dreambnb your home</router-link>
        <section @click="openUserNav=!openUserNav" class="loggedin-user" >
          <img src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669794047/airbnb/dgxtegsrfyrdcywi0vij.png" alt="">
          <el-badge :value="1" class="item" type="primary">
            <img :src="loggedInUser.imgUrl" />
          </el-badge>
        </section>
      </section>
  </header>
  <div class="full screen-shadow" @click="clickedScreen" v-if="isBigFilter"></div>
  <user-nav-bar
  @click="(openUserNav=!openUserNav)" 
  :class="{'details':isDetailsHeader}"
  @goToLogin="(isLoginModal = true, openUserNav = false)" 
  @goToSignup="(isSignupModal = true, openUserNav = false)" 
  @goUserEdit="(isUserEdit = true, openUserNav = false)" 
  @logout="logout"
  v-click-away="onClickAway" 
  v-if="openUserNav" :loggedInUser="loggedInUser"></user-nav-bar>
  <stay-where-search class="" v-if="isWhereSearch"></stay-where-search>
  <stay-when-search class="" v-if="(isWhenStart || isWhenEnd)"></stay-when-search>
  <stay-who-search class="" v-if="isWhoSearch"></stay-who-search>
  <user-login-modal 
    :isSignupModal="isSignupModal" :loggedInUser="loggedInUser" :isUserEdit="isUserEdit"
    v-if="(isLoginModal || isSignupModal || isUserEdit)"
    @closeUserLoginModal="closeUserLoginModal">
  </user-login-modal>
  <div v-if="(isLoginModal || isSignupModal || isUserEdit)" @click="(isLoginModal = false,isSignupModal=false, isUserEdit=false)" class="modal-full-screen"></div>
  


</template>
<script>
import mobileSearchModal from './mobile-search-modal.vue';
import newUserMsg from './new-user-msg.vue';
import { eventBus } from '../services/event-bus.service'
import detailsHeaderFilter from './details-header-filter.vue';
import userNavBar from './user-nav-bar.vue';
import stayWhereSearch from './stay-where-search.vue'
import stayWhenSearch from './stay-when-search.vue'
import stayWhoSearch from './stay-who-search.vue'
import mainFilter from './main-filter.vue'
import bigFilter from './big-filter.vue'
import userLoginModal from './user-login-modal.vue'
export default {
  data(){
    return {
      openUserNav: false,
      isMainFilter: true,
      isBigFilter:false,
      isWhereSearch: false,
      isWhoSearch: false,
      isWhenStart: false,
      isWhenEnd: false,
      isDetailsHeader: false,
      isLoginModal: false,
      isSignupModal: false,
      isUserEdit:false,
      isLoggedInUser: this.loggedInUser === true,
      showmsg: false,
    }
  },
  created() {
    eventBus.on('go-to-details',this.changeToDetailsHeader)
    eventBus.on('go-to-user-pages',this.goUserPages)
    eventBus.on('return-to-main-stay',this.returnToMainStay)
    eventBus.on('go-back',this.returnToMainStay)
    
  },
  methods:{
    clickedMain(chose){
      addEventListener('scroll', (event) => {this.clickedScreen()})
      this.isMainFilter = false
      this.isBigFilter = false
      this.isBigFilter = true
      eventBus.emit('go-big-filter')
      this.isWhereSearch = false
      this.isWhoSearch = false
      this.isWhenStart = false
      this.isWhenEnd = false
      this.isWhereSearch = (chose === 'where')
      this.isWhenStart = (chose === 'when-start')
      this.isWhenEnd = (chose === 'when-end')
      this.isWhoSearch = (chose === 'who') 
    },

    returnToMainStay(){
      this.isDetailsHeader = false
      this.clickedScreen()
      eventBus.emit('back-to-main')
    },
    clickedScreen(){
      if (this.isDetailsHeader){
        this.resetAll()
        this.isDetailsHeader = true
      }else{
        this.resetAll()
        this.isMainFilter = true
      }
      eventBus.emit('go-main-filter') 
    },

    resetAll(){
      this.isMainFilter = false
      this.isBigFilter = false
      this.isWhereSearch = false
      this.isWhenStart = false
      this.isWhenEnd = false
      this.isWhoSearch = false
      this.isDetailsHeader = false
    },
    changeToDetailsHeader(){
      this.resetAll()
      this.isDetailsHeader = true
    },
    goUserPages(){
      this.resetAll()
      // this.isDetailsHeader = true
    },
    onClickAway(){
      this.openUserNav = false
    },
    logout(){
      this.openUserNav = false
      this.returnToMainStay()
    },
    closeUserLoginModal(){
      this.isLoginModal = false 
      this.isSignupModal = false 
      this.isUserEdit = false
    }
  },
  computed: {
    loggedInUser() {
      const loggedinUser = this.$store.getters.loggedinUser 
      if (!loggedinUser){
        return {imgUrl:'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'}
      }
      return loggedinUser
      
    },
  },
  components: {
    userNavBar,
    stayWhereSearch,
    mainFilter,
    bigFilter,
    stayWhenSearch,
    stayWhoSearch,
    detailsHeaderFilter,
    userLoginModal,
    newUserMsg,
    mobileSearchModal
  }
}
</script>

<style>
  .v-enter-active{
    transition: top  0.3s ease-in;
    /* transition-delay: 1s; */
    
  }
  .v-enter-from{
    top: 5px;
    /* right: 50%; */
    /* width: 50px; */
    
  }
  .v-enter-to{
    top: 80px;
    /* right: 50%s; */
  }
  .v-leave-active{
    transition: none
  }
  .v-leave-to {

  }

</style>