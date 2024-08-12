<template>
    <section class="user-nav-layout user-nav-bar">
        <section v-if="loggedInUser._id">
            <router-link @click="onlyUpearHeader()" :to="`/user/${loggedInUser._id}`">Trips</router-link>
            <router-link @click="goToEdit()" to="/stay/wishlist">Whishlist</router-link>
            <div class="user-nav-border-line-between"></div>
            <router-link @click="goToEdit()" :to="`/host`">Dreambnb your home</router-link>
            <router-link @click="onlyUpearHeader()" :to="`/stay/dashboard/${loggedInUser._id}`">Account dashboard</router-link>
            <div @click="goUserEdit()">Edit my account</div>
            <div class="user-nav-border-line-between"></div>
            <router-link @click="logout()" to="/stay">Logout</router-link>
            
            
        </section>
        <section v-else>
            <div @click="goToLogin()">Login</div>
            <div @click="goSignup()">Signup</div>
            <div class="user-nav-border-line-between"></div>
            <div>Dreambnb your home</div>
        </section>    
    </section>
</template>

<script>
    import { eventBus } from '../services/event-bus.service'
    export default {
        props: {
            loggedInUser: Object
        },
        data() {
            return {
                
            }
        },
        methods: {
            goToLogin(){
                this.$emit('goToLogin')
            },
            goSignup(){
                this.$emit('goToSignup')
            },
            goUserEdit(){
                this.$emit('goUserEdit')
            },
            logout(){
                this.$store.dispatch({ type: "logout" })
                const msg = {
                    title: 'Logout was succses',
                    message: "See you next time",
                    position: 'bottom-left',
                    type: 'success',
                    duration: 2000,
                }
                eventBus.emit('show-user-msg',msg) 
                // this.router.push('/stay')
                this.$emit('logout')
            },
            open(){
                const msg = {
                    title: 'Logout was succses',
                    message: "I'm at the bottom right corner",
                    position: 'bottom-left',
                    type: 'success',
                    duration: 8000,
                }
                eventBus.emit('show-user-msg',msg)  
            },
            onlyUpearHeader(){
                eventBus.emit('go-to-user-pages')
            },
            goToEdit(){
                eventBus.emit('go-to-details')
            }
        },
    }
</script>