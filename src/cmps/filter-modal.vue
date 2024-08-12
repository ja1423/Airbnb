<template>
        <div class="filter-modal filter-modal-header space-between flex">
            <button>x</button>
            <h1>Filters</h1>
            <div></div>
        </div>
    <section class="filter-modal filter-modal-container">
        <div>
        <h1>Price range</h1>
        <div>The average nightly price is $187</div>
        </div>
            <price-slider-for-filter></price-slider-for-filter>
        <div>
        <section class="price-filter flex">
            <div>
                <div>min price</div>
                <div>
                    $<input type="text" value="10">-
                </div>
            </div>
            <div>
                <div>max price</div>
                <div>
                    $<input type="text"  value="600+">
                </div>
            </div>
        </section>
        </div>
        <h1>Rooms and beds</h1>
        <h3>Bedrooms</h3>
        <div style="margin-top: 20px">
            <el-radio-group v-for="number in numArray" key="num" v-model="radio2">
                <el-radio-button style="margin-left: 10px;" :label="number" /> 
            </el-radio-group>
        </div>
        <h3>Beds</h3>
        <div style="margin-top: 20px">
            <el-radio-group v-for="number in numArray" key="num" v-model="radio2">
                <el-radio-button style="margin-left: 10px;" :label="number" /> 
            </el-radio-group>
        </div>
        <h3>Bathrooms</h3>
        <div style="margin-top: 20px">
            <el-radio-group v-for="number in numArray" key="num" v-model="radio2">
                <el-radio-button style="margin-left: 10px;" :label="number" /> 
            </el-radio-group>
        </div>
        <h1>Booking options</h1>
        <section class="flex">
            <div>
                <h1>Instant Book</h1>
                <p>Listings you can book without waiting for Host approval</p>
            </div>
            <el-switch v-model="ruleForm.instanceBook" />
        </section>

        <section class="flex">
            <div>
                <h1>Self check-in</h1>
                <p>Easy access to the property once you arrive</p>
            </div>
            <el-switch v-model="ruleForm.selfCheckIn" />
        </section>
        
        <h1>Accessibility features</h1>
        <h2>This info was provided by the Host and reviewed by Airbnb.</h2>
        <div>Guest entrance and parking</div>
        <el-checkbox v-model="checked1" label="Step-free guest entrance" size="large" />
        <el-checkbox v-model="checked1" label="Guest entrance wider than 32 inches" size="large" />
        <el-checkbox v-model="checked1" label="Accessible parking spot" size="large" />
        <el-checkbox v-model="checked1" label="Step-free path to the guest entrance" size="large" />
    </section>
    <div class="filter-modal filter-modal-footer flex">
        <button>Clear all</button>
        <button>Show 4 homes</button>
    </div>
</template>


<script>
    import priceSliderForFilter from './price-slider-for-filter.vue';
    import { reactive, ref } from 'vue'
    // import { FormInstance, FormRules } from 'element-plus'
    export default {
        props: {
            
        },
        data() {
            return {
                ruleForm: {instanceBook: false,selfCheckIn:false},
                ccessibility: {
                    checked1:false,
                    checked2:false,
                    checked3:false,
                    checked4:false,
                },
                radio2: '',
                numArray: ['any',1,2,3,4,5,6,7,'8+'],
            }
        },
        components:{
            priceSliderForFilter
        }
    }
</script>