<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader.vue'
import DayTimelineFull from '@/components/DayTimelineFull.vue'
import DayTimelineCompact from '@/components/DayTimelineCompact.vue'
import { type Ref, ref } from 'vue'

const timelimeCompact: Ref<Boolean> = ref(true)
</script>

<template>
  <main>
    <dashboard-header />
    <div class="dashboard-content-container grid grid-cols-3 gap-3">
      <div class="timeline-container bg-base-200 m-3 p-3 rounded-box">
        <div class="timeline-header">
          <div class="timeline-title text-4xl">
            Today, 15.07.2024
          </div>
          <div class="timeline-type-toggle">
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Compact Mode</span>
                <input type="checkbox" class="toggle" v-model="timelimeCompact" />
              </label>
            </div>
          </div>
          <div class="divider mt-0.5" />
        </div>
        <div class="timeline-content">
          <div class="timeline-compact-container" v-if="timelimeCompact">
            <DayTimelineCompact />
          </div>
          <div class="timeline-full-container" v-else>
            <DayTimelineFull />
          </div>
        </div>
      </div>
      <div class="tasks-container"></div>
    </div>
  </main>
</template>
