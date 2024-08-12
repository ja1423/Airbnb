<template>
        <div class="flex row space-between">
            <button class="add-guest-button" @click="changeNum(-1)" v-bind:class="{disabled:this.downDisabled}">
                <span class="_8ovatg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28"></path></svg></span>
            </button>
            <span class="add-guest-span">{{num}}</span>
            <button class="add-guest-button" @click="changeNum(1)" v-bind:class="{disabled:this.plusDisabled}">
                <span class="_8ovatg"><svg class="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28m-14-14v28"></path></svg></span>
            </button>
        </div>
</template>


<script>
    export default {
        props: {
            'number': Number,
            'maxNum': Number,
            'minNum': Number,
        },
        data(){
            return {
                num: this.number,
                plusDisabled: false,
                downDisabled: true,
            }
        },
        watch:{
            maxNum(value){
                if (this.num >= value){
                    this.plusDisabled = true
                }else this.plusDisabled = false
                if(this.num === 0 && this.maxNum === 0){
                    this.plusDisabled = true
                    this.downDisabled = true
                }
            }
        },
        methods: {
            changeNum(num){
                if ((num === 1 && this.plusDisabled) || num ===-1 && this.downDisabled){ 
                    this.$emit('changeNum',this.num)
                    return
                }
                this.num += num
                if (this.num <= this.minNum){
                    this.downDisabled = true
                    // this.num = this.number
                }
                else if (this.num >= this.number + 1){
                    this.downDisabled = false
                }
                if (this.num === this.maxNum){
                    this.plusDisabled = true
                    this.num = this.maxNum
                }else this.plusDisabled = false
                if(this.num === 0 && this.maxNum === 0){
                    this.plusDisabled = true
                    this.downDisabled = true
                }
                
                this.$emit('changeNum',this.num)
            }
        },
    }
</script>