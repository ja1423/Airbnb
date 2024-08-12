<template>
    <div class="slider-demo-block">
      <el-slider v-model="value" range :marks="marks" />
    </div>
</template>
  
<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { CSSProperties } from 'vue'
  
  interface Mark {
    style: CSSProperties
    label: string
  }
  
  type Marks = Record<number, Mark | string>
  
  const value = ref([0, 600])
  const marks = reactive<Marks>({
    
    53: '500 homes',
    300: {
      style: {
        color: '#1989FA',
      },
      label: '50%',
    },
  })
</script>
<style scoped>
  .slider-demo-block {
    display: flex;
    align-items: center;
  }
  .slider-demo-block .el-slider {
    margin-top: 0;
    margin-left: 12px;
  }
</style>
  