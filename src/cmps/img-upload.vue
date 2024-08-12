<template>
    <section
        class="img-upload"
        :class="{ 'drag-zone': isDragover }"
        @drop.prevent="handleFile"
        @dragover.prevent="isDragover = true"
        @dragleave="isDragover = false"
    >
        <label v-if="!isLoading" :class="{ drag: isDragover }">
            <p>click  or drag image</p>
            <upload-icon style="width:100px,hight:100px" :class="{ drag: isDragover }" />
            <input type="file" @change="handleFile" hidden />
        </label>
        <!-- <img v-else src="../assets/loader.gif" alt="" /> -->
    </section>
</template>

<script>
import { uploadImg } from '../services/upload.service'
import uploadIcon from '../assets/svgs/upload-icon.vue'

export default {
    name: 'img-upload',
    components: { uploadIcon },
    data() {
        return {
            isLoading: false,
            isDragover: false,
        }
    },
    methods: {
        handleFile(ev) {
            console.log('ev', ev)
            let file
            if (ev.type === 'change') file = ev.target.files[0]
            else if (ev.type === 'drop') file = ev.dataTransfer.files[0]
            this.onUploadFile(file)
        },
        async onUploadFile(file) {
            this.isLoading = true
            this.isDragover = false
            const res = await uploadImg(file)
            this.$emit('saved', res.url)
            this.isLoading = false
            console.log('res:', res.url)
        },
    },
}
</script>

<style>
.upload-icon {
    cursor: pointer;
}

.drag {
    color: lightgray;
}

.drag-zone {
    outline: 10px dashed lightgray;
    margin: 15px;
}

.img-upload {
    min-height: 200px;
}
</style>
