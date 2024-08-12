<template>
  <!-- <section class="login-order-container user-login-modal"> -->
    <section v-if="isUserEdit" class="login-order-container user-login-modal">
        <button @click="closeModal()">✖</button>
        <div class="login-header">Edit</div>
        <form>
        <label for="">Full name</label>
          <input  type="text" v-model="editingUser.fullname"><br>
        </form>
        <form>
          <label for="">Username</label>
          <input  type="text" v-model="editingUser.username"><br>
        </form>
        <form>
          <label for="">Password</label>
          <input type="password" v-model="editingUser.password">
        </form>
        <div @click="updateUser()" class="btn-container">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="content">
                <button class="action-btn" >
                  <span>Save</span>
                </button>
            </div>
        </div>
    </section>
    <section v-if="(!isSignupModal & !isUserEdit)" class="login-order-container user-login-modal">
        <button @click="closeModal()">✖</button>
        <div class="login-header">Log in</div>
        <form>
          <label for="">Username</label>
          <input  type="text" v-model="user.username" placeholder=""><br>
        </form>
        <form>
          <label for="">Password</label>
          <input type="password" v-model="user.password" placeholder="">
        </form>
        <div @click="login()" class="btn-container">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="content">
                <button class="action-btn" >
                  <span>Log in</span>
                </button>
            </div>
        </div>
        <a @click="(isSignupModal = true)">Sign in</a> 
    </section>
    <section v-if="isSignupModal" class="login-order-container user-login-modal">
        <button @click="closeModal()">✖</button>
        <div class="login-header">Sign up</div>
        <form>
        <label for="">Full name</label>
          <input  type="text" v-model="newUser.fullname" placeholder=""><br>
        </form>
        <form>
          <label for="">Username</label>
          <input  type="text" v-model="newUser.username" placeholder=""><br>
        </form>
        <form>
          <label for="">Password</label>
          <input type="password" v-model="newUser.password" placeholder="">
        </form>
        <div @click="signup()" class="btn-container">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="content">
                <button class="action-btn" >
                  <span>Sign up</span>
                </button>
            </div>
        </div>
        <a @click="(isSignupModal = false)">Log in</a> 
    </section>
  <!-- </section> -->
</template>
  
<script>
  import { eventBus } from '../services/event-bus.service'
  export default {
    name: 'wish-list',
    props: ['isSignupModal','loggedInUser','isUserEdit'],
    emits: ["closeUserLoginModal"],
    data() {
      return {
        user: {
          username: '', 
          password: ''
        },
        newUser: {
          username: '', 
          password: '',
          fullname: '', 
          imgUrl: ''
        },
        editingUser: JSON.parse(JSON.stringify(this.loggedInUser))
      }
    },
    async created(){
      const loggedinUser = this.$store.getters.loggedinUser
      if (loggedinUser){
        const user = await this.$store.dispatch({ type: "getById", userId: this.loggedInUser._id });
        user.password = ''
        this.editingUser = user
      }
    },
    computed: {

    },
    methods: {
      async login(){
        const user = await this.$store.dispatch({ type: "login", userCred: this.user });
        this.$emit('closeUserLoginModal')
        const msg = {
                    title: 'Login successfully',
                    message: `welcome back ${user.fullname}!`,
                    position: 'bottom-left',
                    type: 'success',
                    duration: 4000,
                }
        eventBus.emit('show-user-msg',msg)
      },
      async signup(){
        const user = await this.$store.dispatch({ type: "signup", userCred: this.newUser });
        this.$emit('closeUserLoginModal')
        const msg2 = {
                    title: 'Registration succeeded',
                    message: `welcome ${user.fullname}!`,
                    position: 'bottom-left',
                    type: 'success',
                    duration: 4000,
                }
        eventBus.emit('show-user-msg',msg2)
      },
      async updateUser(){
        this.$emit('closeUserLoginModal')
        const user = await this.$store.dispatch({ type: "updateUser", user: this.editingUser });
        const msg2 = {
                    title: 'successfully updated',
                    position: 'bottom-left',
                    type: 'success',
                    duration: 4000,
                }
        eventBus.emit('show-user-msg',msg2)
      },
      closeModal(){
        this.$emit('closeUserLoginModal')
      } 
    } 
  }
</script>

<style>



</style>