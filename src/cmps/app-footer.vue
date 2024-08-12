<template>
    <footer class="full main-container">
        <div :class="{'details': isDetails}" class="flex stay-footer header-layout " style="bottom: 0; top:none;">
        <div class="footer-details flex row nowrap">
            <span class="footer-rigths">
                &copy; 2022 airbnb, Inc.
            </span>
            <span>
                <ol class="terms flex row nowrap">
                    <span class="footer-dot">.</span>
                    <li>Privacy</li>
                    <span class="footer-dot">.</span>
                    <li>Terms</li>
                    <span class="footer-dot">.</span>
                    <li>Sitemap</li>
                </ol>
            </span>
        </div>
    </div>
    </footer>
</template>

<script>
import { eventBus } from '../services/event-bus.service'

export default {
    data(){
        return{
            isDetails: false
        }
    },
    created() {
        eventBus.on('go-to-details',()=>{this.isDetails = true})
    },
}
</script>

<style>
    
</style>