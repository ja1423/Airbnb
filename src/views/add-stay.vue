<template>
    <section class="add-stay-container stay-details main-container">
    
    <h1>host a new home</h1>
    <section class="img-container">
    <div class="img-gallery ">
        <img-upload class="big"  v-if="!imgUrls[0]" @saved="saveImg"></img-upload>
        <img v-else :src="imgUrls[0]" alt="">
    </div>
    <div class="img-gallery">
        <img-upload v-if="!imgUrls[1]" @saved="saveImg"></img-upload>
        <img v-else :src="imgUrls[1]" alt="">
    </div>
    <div class="img-gallery">
        <img-upload v-if="!imgUrls[2]" @saved="saveImg"></img-upload>
        <img v-else :src="imgUrls[2]" alt="">
    </div>
    <div class="img-gallery">
        <img-upload v-if="!imgUrls[3]" @saved="saveImg"></img-upload>
        <img v-else :src="imgUrls[3]" alt="">
    </div>
    <div class="img-gallery">
        <img-upload v-if="!imgUrls[4]" @saved="saveImg"></img-upload>
        <img v-else :src="imgUrls[4]" alt="">
    </div>
    </section>
    <el-form class="add-stay-form" :model="form" >

      <el-form-item label="New place name">
        <el-input v-model="form.name" />
      </el-form-item>

      <el-form-item label="Place category">
        <el-select v-model="form.type" placeholder="Select a type">
          <el-option label="Lux" value="Lux" />
          <el-option label="Tropical" value="Tropical" />
        </el-select>
      </el-form-item>

   
      <el-form-item label="Available now">
        <el-switch v-model="form.delivery" />
      </el-form-item>

      <el-form-item label="Price per night">
        
        <el-input class="currency" v-model="form.price" />
      </el-form-item>

      <el-form-item class="Place-description" label="Place description">
        <el-input v-model="form.summary" type="textarea" />
      </el-form-item>

    <el-form-item label="Capacity">
        <el-input-number v-model="form.capacity" :min="1" :max="16" @change="handleChangeCapacity"/>
    </el-form-item>

    <el-form-item label="Amenities">
        <el-checkbox-group v-model="form.amenities">
          <el-checkbox label="TV" name="TV" />
          <el-checkbox label="Internet" name="Internet" />
          <el-checkbox label="Wifi" name="Wifi" />
          <el-checkbox label="Air conditioning" name="Air conditioning" />
          <el-checkbox label="Kitchen" name="Kitchen" />
          <el-checkbox label="Elevator" name="Elevator" />
          <el-checkbox label="Heating" name="Heating" />
          <el-checkbox label="Family/kid friendly" name="Family/kid friendly" />
          <el-checkbox label="Washer" name="Washer" />
          <el-checkbox label="Dryer" name="Dryer" />
          <el-checkbox label="Essentials" name="Essentials" />
          <el-checkbox label="Shampoo" name="Shampoo" />
          <el-checkbox label="Hangers" name="Hangers" />
          <el-checkbox label="Hair dryer" name="Hair dryer" />
          <el-checkbox label="Iron" name="Iron" />
          <el-checkbox label="Laptop friendly workspace" name="Laptop friendly workspace" />
          <el-checkbox label="Hot water" name="Hot water" />
          <el-checkbox label="Bed linens" name="Bed linens" />
          <el-checkbox label="Microwave" name="Microwave" />
          <el-checkbox label="Coffee maker" name="Coffee maker" />
          <el-checkbox label="Refrigerator" name="Refrigerator" />
          <el-checkbox label="Dishwasher" name="Dishwasher" />
        </el-checkbox-group>
    </el-form-item>

    <el-form-item label="Bathrooms">
        <el-input-number v-model="form.bathrooms" :min="1" :max="16" @change="handleChangeBathrooms"/>
    </el-form-item>

    <el-form-item label="Bedrooms">
        <el-input-number v-model="form.bedrooms" :min="1" :max="16" @change="handleChangeBedrooms"/>
    </el-form-item>  

    <el-form-item label="Place type">
        <el-select v-model="form.roomType" placeholder="Select a type">
          <el-option label="Entire home/apt" value="Entire home/apt" />
          <el-option label="Private room" value="Private room" />
          <el-option label="Shared room" value="Shared room" />
        </el-select>
    </el-form-item>

    <el-form-item label="Country">
        <el-input v-model="form.loc.country" />
    </el-form-item>

    <el-form-item label="Country code">
        <el-input v-model="form.loc.countryCode" />
    </el-form-item>

    <el-form-item label="City">
        <el-input v-model="form.loc.city" />
    </el-form-item>

    <el-form-item label="Address">
        <el-input v-model="form.loc.address" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm"
        >Create</el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
    </el-form>
    
    <!-- <img-list-after-uploading :imgUrls="imgUrls"></img-list-after-uploading> -->
    </section>
</template>

<script>
import { stayService } from '../services/stay.service.local';
import { reactive } from 'vue'
import { ref } from 'vue'
import imgUpload from '../cmps/img-upload.vue'
import imgListAtferUploading from '../cmps/img-list-after-uploading.vue'
import {imgService} from '../services/img-sevice'

export default {
    data() {
        return {
            imgUrls: [],
            num: ref(1),
            stay: null,
            form: reactive({
                name: '',
                type: '',
                price: '',
                summary: '',
                capacity: 1,
                delivery: '',
                amenities: [],
                bathrooms: 1,
                bedrooms: 1,
                roomType: '',
                imgUrls: ["http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436993/yzxnnw83e9qyas022au4.jpg"],
                loc: {
                    country: '',
                    countryCode: '',
                    city: '',
                    address: '',
                },
            })
        }
    },
    async created(){
        eventBus.emit('go-to-details')
        const { id } = this.$route.params
        if (id){
            const firststay = await this.getStayById(id)
            this.stay = JSON.parse(JSON.stringify(firststay))
            console.log(this.stay);
            this.form.name = this.stay.name
            this.form.type= this.stay.type
            this.form.price= this.stay.price
            this.form.summary= this.stay.summary
            this.form.capacity= this.stay.capacity
            this.form.delivery= true
            this.form.amenities= this.stay.amenities
            this.form.bathrooms= this.stay.bathrooms
            this.form.bedrooms= this.stay.bedrooms
            this.form.roomType= this.stay.roomType   
            this.form.loc.country= this.stay.loc.country
            this.form.loc.countryCode= this.stay.loc.countryCode
            this.form.loc.city= this.stay.loc.city
            this.form.loc.address= this.stay.loc.address
            if (this.stay.imgUrls) this.imgUrls = this.stay.imgUrls
        }else{
            this.stay = JSON.parse(JSON.stringify(stayService.getEmptyStay()))
            console.log(this.stay);
        }
    },
    computed: {
        
    },
    methods: {
        async getStayById(id){
            var stay = await this.$store.dispatch({ type: "getStayById" ,stayId: id });
            console.log(stay);
            return stay
        },
        saveImg(url) {
            this.imgUrls.push(url)
            console.log(this.imgUrls);
            // imgService.saveImg(url)
        },
        async submitForm(){
            console.log('form',this.form);
            console.log('this.imgUrls',this.imgUrls);
            this.stay.name = this.form.name
            this.stay.type = this.form.type
            this.stay.price = +this.form.price
            this.stay.summary = this.form.summary
            this.stay.capacity = this.form.capacity
            this.stay.amenities = this.form.amenities
            this.stay.bathrooms = this.form.bathrooms
            this.stay.bedrooms = this.form.bedrooms
            this.stay.roomType = this.form.roomType
            this.stay.loc.country = this.form.loc.country
            this.stay.loc.countryCode = this.form.loc.countryCode
            this.stay.loc.city = this.form.loc.city
            this.stay.loc.address = this.form.loc.address
            if (this.stay.imgUrls === 0) {
                this.stay.imgUrls = this.imgUrls
                console.log(this.stay.imgUrls);
            }
            console.log('stay to submit',this.stay)
            // this.stay.imgUrls? this.stay.imgUrls : ["http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg"]
            if (!this.stay._id){
                console.log('adding')
                const newStay = await this.$store.dispatch({ type: "addStay" ,stay: this.stay })
                console.log('sucsses',newStay)
            }else{
                const newStay = await this.$store.dispatch({ type: "updateStay" ,stay: this.stay })
                // this.$store.dispatch({ type: "loadStays" })
                console.log('updating')
                console.log('sucsses',newStay)
            }
        },
        handleChangeBathrooms(value){
            this.stay.bathrooms = value
        },
        handleChangeBedrooms(value){
            this.stay.bedrooms = value
        },
        handleChangeCapacity(value){
            this.stay.capacity = value
        },
    },
    components:{
        imgUpload,
        imgListAtferUploading
    }
}
</script>
