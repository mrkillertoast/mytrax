<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader.vue'
import DayTimelineFull from '@/components/DayTimelineFull.vue'
import DayTimelineCompact from '@/components/DayTimelineCompact.vue'
import { type Ref, ref } from 'vue'
import sampleTasks from '../demoData/sampleTasks.json'

import { EnumTasksTypes } from '@/Enums/EnumTasksTypes'
import TabsSelector from '@/components/TasksTabSelector.vue'
import type { ITaskItem } from '@/interfaces/ITaskItem'
import { addDay, format } from '@formkit/tempo'
import TaskDueContainer from '@/components/TaskDueContainer.vue'

const timelineCompact: Ref<Boolean> = ref(true)
const activeTasks: Ref<EnumTasksTypes> = ref(EnumTasksTypes.ALL_TASKS)

const currentDate = new Date()
const dateToday = format(currentDate, { date: 'medium' })

const tasks = sampleTasks

const duePast: Ref<Array<ITaskItem>> = ref([])
const dueToday: Ref<Array<ITaskItem>> = ref([])
const dueTomorrow: Ref<Array<ITaskItem>> = ref([])
const dueLater: Ref<Array<ITaskItem>> = ref([])

const nonCompletedTasks = tasks.filter((task: ITaskItem) => {
  return !task.completed
})

const classifyTasks = (() => {
    for (const task of nonCompletedTasks.values()) {
      const formatedTaskDueDate = format(task.dueDate, { date: 'medium' })

      if (formatedTaskDueDate < dateToday) {
        duePast.value.push(task)
      }

      if (formatedTaskDueDate == dateToday) {
        dueToday.value.push(task)
      }

      console.log(addDay(currentDate, 1))
      if (formatedTaskDueDate === format(addDay(currentDate, 1), { date: 'medium' })) {
        dueTomorrow.value.push(task)
      }

      if (formatedTaskDueDate > dateToday + 1) {
        dueLater.value.push(task)
      }
    }
  }
)

classifyTasks()

</script>

<template>
  <main>
    <dashboard-header />
    <div class="dashboard-content-container grid grid-cols-3 gap-3">
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
      <div class="tasks-container bg-base-200 m-3 p-3 rounded-box">
        <div class="timeline-title text-4xl mb-4">
          My Tasks
        </div>
        <TabsSelector v-model="activeTasks" />
        <div class="task-container">
          <TaskDueContainer :task-array="duePast" container-title="Past Due Tasks" :task-filter="activeTasks" />
          <TaskDueContainer :task-array="dueToday" container-title="Due Today" :task-filter="activeTasks" />
          <TaskDueContainer :task-array="dueTomorrow" container-title="Due Tomorrow" :task-filter="activeTasks" />
          <TaskDueContainer :task-array="dueLater" container-title="Later Due Tasks" :task-filter="activeTasks" />


        </div>
      </div>
    </div>
  </main>
</template>
