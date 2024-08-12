<template>
    <section style="margin-top:100px;" class="user-page full">
        <h1 class="trips">Trips</h1>
        <section class="user-trips">
            <div class="mini-card-grid mini-card grid-item-2">
              <div class="mini-card-header flex row wrap ">
                <h1>Wishlist</h1>
              </div>
              <h4 v-if="loggedinUser"><span>{{(loggedinUser.wishlist ? loggedinUser.wishlist.length: 0)}}</span>&nbsp;saved stays</h4>
              <button @click="goToWishlist" class="mini-card-btn">Go to wishlist</button>
            </div>
            <div class="mini-card-grid mini-card  grid-item-3">
              <div class="mini-card-header">
                <h1>Messages</h1>
              </div>
              <h4 v-if="loggedinUser"> order #o1226 has been approved</h4>
              <button @click="goToWishlist" class="mini-card-btn">Go to messages</button>
            </div>
            <div class="mini-card next-stay flex row space-between grid-item-1">
              <div class="next-stay-first flex row wrap">
                <div class="mini-card-header flex wrap">
                  <h1 class="">Your Next Stay</h1>
                </div>
                <h4 v-if="loggedinUser">Entire amazing views hosted by Patty And Beckett</h4>
                <button @click="goToStay" class="mini-card-btn">Go to stay</button>
              </div>
              <div class="next-stay-img">
                <img src="https://res.cloudinary.com/dtaiyvzq5/image/upload/v1670697786/irgbk6nuyw8mbkjkw1vv.jpg" alt="">
              </div>
            </div>
            <section class="old-trips grid-item-4">
                <h2>Where you've been</h2>
                <ul class="mini-stays flex row">
                    <li class="mini-stay flex row nowrap">

                        <div class="mini-stay-img">
                            <img src="https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436952/aef9ajipinpjhkley1e3.jpg" alt="">
                        </div>
                        <div class="mini-stay-desc flex row wrap">
                            <h1>Montreal</h1>
                            <h4>hosted by Angel</h4>
                            <h4>Nov 12-19, 2022</h4>
                        </div>
                    </li>
                    <li class="mini-stay flex row nowrap">
                        <div class="mini-stay-img">
                            <img src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436255/nmccht42mpd6erdeqjhi.jpg" alt="">
                        </div>
                        <div @click="goToRio" class="mini-stay-desc flex row wrap">
                            <h1>Rio De Janeiro</h1>
                            <h4>hosted by Luana</h4>
                            <h4>June 08-13, 2022</h4>
                        </div>
                    </li>
                    <li class="mini-stay flex row nowrap">
                        <div class="mini-stay-img">
                            <img src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436797/hzfu8ihyoecadrermn14.jpg" alt="">
                        </div>
                        <div class="mini-stay-desc flex row wrap">
                            <h1>Maui</h1>
                            <h4>hosted by Francesco</h4>
                            <h4>Jan 18-24, 2022</h4>
                        </div>
                    </li>
                    <li class="mini-stay flex row nowrap">
                        <div class="mini-stay-img">
                            <img src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436588/cxkvvaext8m0kjuaxcrk.jpg" alt="">
                        </div>
                        <div class="mini-stay-desc flex row wrap">
                            <h1>Barcelona</h1>
                            <h4>hosted by Sonia</h4>
                            <h4>May 07-10, 2021</h4>
                        </div>
                    </li>
                </ul>
            </section>
        </section>
    </section>
</template>

<script>
  import { eventBus } from '../services/event-bus.service'
export default {

    created() {
        const {id} = this.$route.params;
        eventBus.emit('go-to-user-pages')
    },
    methods: {
        goToStay() {
            this.$router.push('/stay/6395df42e50eb45cdf610179')
        },
        goToRio() {
            this.$router.push('/stay/639323c1db8092ca53113ee7')
        },
        goToWishlist() {
            this.$router.push('/stay/wishlist')
        },
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser;
        },
    }
}
</script>

