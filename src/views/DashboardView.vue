<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader.vue'
import DayTimelineFull from '@/components/DayTimelineFull.vue'
import DayTimelineCompact from '@/components/DayTimelineCompact.vue'
import { type Ref, ref } from 'vue'

import { EnumTasksTypes } from '@/Enums/EnumTasksTypes'
import TabsSelector from '@/components/TasksTabSelector.vue'

const timelineCompact: Ref<Boolean> = ref(true)
const activeTasks: Ref<EnumTasksTypes> = ref(EnumTasksTypes.ALL_TASKS)
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
      <div class="tasks-container bg-base-200 m-3 p-3 rounded-box">
        <div class="timeline-title text-4xl mb-4">
          My Tasks
        </div>
        <TabsSelector v-model="activeTasks" />
        <div class="task-container m-2 p-2 border border-black rounded-box">
          <div class="task-header flex gap-2">

            <input type="checkbox" name="" id="" class="checkbox">
            <div class="task-title font-bold">Some Task</div>
          </div>
          <div class="task-content flex gap-2 mt-1 h-6">
            <span class=""><iconify-icon icon="material-symbols:exclamation-rounded" width="1.5rem"
                                height="1.5rem" style="color: red; font-weight: bold"></iconify-icon></span>
            <div class="task-tags flex gap-1.5 text-xs items-center  ">
              <span class="border border-black rounded-box py-0.5 px-1 text-center">A Tag</span>
              <span class="border border-black rounded-box py-0.5 px-1">another tag</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
