<script setup lang="ts">
import { ref } from 'vue';

const hours = ref<number[]>(Array.from({ length: 25 }, (_, i) => i));

const formatHour = (hour: number): string => {
  return hour < 10 ? `0${hour}:00` : `${hour}:00`;
};
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 gap-4">
      <div v-for="hour in hours" :key="hour" class="flex items-center">
        <div class="w-1/12 text-right pr-2 font-bold text-gray-400">{{ formatHour(hour) }}</div>
        <div class="w-11/12 h-0.5 bg-gray-700"></div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  max-width: 600px;
}
</style>
