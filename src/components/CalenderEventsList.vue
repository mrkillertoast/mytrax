<script setup lang="ts">

import DayTimelineCompact from '@/components/DayTimelineCompact.vue'
import DayTimelineFull from '@/components/DayTimelineFull.vue'
import { ref, type Ref } from 'vue'
import { format } from '@formkit/tempo'

const timelineCompact: Ref<Boolean> = ref(true)

const dateToday = format(new Date(), {date: 'medium'})
</script>

<template>
  <div class="timeline-container bg-base-200 m-3 p-3 rounded-box">
    <div class="timeline-header">
      <div class="timeline-title text-4xl">
        {{ dateToday }}
      </div>
      <div class="timeline-type-toggle">
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">Compact Mode</span>
            <input type="checkbox" class="toggle" v-model="timelineCompact" />
          </label>
        </div>
      </div>
      <div class="divider mt-0.5" />
    </div>
    <div class="timeline-content">
      <div class="timeline-compact-container" v-if="timelineCompact">
        <DayTimelineCompact />
      </div>
      <div class="timeline-full-container" v-else>
        <DayTimelineFull />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>