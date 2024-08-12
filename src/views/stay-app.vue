<template>
  <div>
      <stay-list :stays="stays"></stay-list>
  </div>
  <section v-if="!stays.length" class="cards-layout">
      <el-skeleton v-for="n in 20" :key="n" class="card" style="width: 240px" animated>
      <template #template>
        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <div style="padding: 14px">
          <el-skeleton-item variant="p" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;"
          >
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
    </el-skeleton>
  </section>
</template>

<script>
import { showErrorMsg, showSuccessMsg, eventBus } from "../services/event-bus.service";
import { stayService } from "../services/stay.service.local";
import {
  getActionRemoveStay,
  getActionUpdateStay,
  getActionAddStayMsg,
} from "../store/modules/stay.module";
import stayList from "../cmps/stay-list.vue";
export default {
  data() {
    return {
      stayToAdd: stayService.getEmptyStay(),
    };
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
    stays() {
      return this.$store.getters.stays
    },
  },
  created() {
    this.$store.dispatch({ type: "loadStays" })
    eventBus.emit('return-to-main-stay')
  },
  methods: {
    // async addStay() {
    //   try {
    //     await this.$store.dispatch({ type: "addStay", stay: this.stayToAdd });
    //     showSuccessMsg("Stay added");
    //     this.stayToAdd = stayService.getEmptyStay();
    //   } catch (err) {
    //     console.log(err);
    //     showErrorMsg("Cannot add stay");
    //   }
    // },
    async removeStay(stayId) {
      try {
        await this.$store.dispatch(getActionRemoveStay(stayId));
        showSuccessMsg("Stay removed");
      } catch (err) {
        console.log(err);
        showErrorMsg("Cannot remove stay");
      }
    },
    async updateStay(stay) {
      try {
        stay = { ...stay };
        stay.price = +prompt("New price?", stay.price);
        await this.$store.dispatch(getActionUpdateStay(stay));
        showSuccessMsg("Stay removed");
      } catch (err) {
        console.log(err);
        showErrorMsg("Cannot remove stay");
      }
    },
    async addStayMsg(stayId) {
      try {
        await this.$store.dispatch(getActionAddStayMsg(stayId));
        showSuccessMsg("Stay msg added");
      } catch (err) {
        console.log(err);
        showErrorMsg("Cannot add stay msg");
      }
    },
    printStayToConsole(stay) {
      console.log("Stay msgs:", stay.msgs);
    },
  },
  components: {
    stayList,
  }
};
</script>
