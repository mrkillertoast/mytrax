<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader.vue'
import DayTimelineFull from '@/components/DayTimelineFull.vue'
import DayTimelineCompact from '@/components/DayTimelineCompact.vue'
import { type Ref, ref } from 'vue'

import { EnumTasksTypes } from '@/Enums/EnumTasksTypes'
import TabsSelector from '@/components/TasksTabSelector.vue'
import TaskItem from '@/components/TaskItem.vue'
import { EnumTaskPriority } from '@/Enums/EnumTaskPriority'

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
        <div class="task-container">
          <TaskItem :priority="EnumTaskPriority.PRIORITY_HIGH" title="High Priority Task" :tags="['private', 'new']"/>
          <TaskItem :priority="EnumTaskPriority.PRIORITY_NORMAL" title="Normal Priority Task" :tags="['work', 'super secret project']"/>
          <TaskItem :priority="EnumTaskPriority.PRIORITY_LOW" title="Low Priority Task" :tags="['work']"/>
        </div>
      </div>
    </div>
  </main>
</template>
