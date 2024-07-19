<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader.vue'
import DayTimelineFull from '@/components/DayTimelineFull.vue'
import DayTimelineCompact from '@/components/DayTimelineCompact.vue'
import { computed, type Ref, ref } from 'vue'
import sampleTasks from '../demoData/sampleTasks.json'

import { EnumTasksTypes } from '@/Enums/EnumTasksTypes'
import TabsSelector from '@/components/TasksTabSelector.vue'
import TaskItem from '@/components/TaskItem.vue'
import { EnumTaskPriority } from '@/Enums/EnumTaskPriority'
import type { ITaskItem } from '@/interfaces/ITaskItem'
import { format } from '@formkit/tempo'

const timelineCompact: Ref<Boolean> = ref(true)
const activeTasks: Ref<EnumTasksTypes> = ref(EnumTasksTypes.ALL_TASKS)

const dateToday = format(new Date(), { date: 'medium' })

const tasks = sampleTasks

const duePast: Ref<Array<ITaskItem>> = ref([])
const dueToday: Ref<Array<ITaskItem>> = ref([])
const dueTomorrow: Ref<Array<ITaskItem>> = ref([])
const dueLater: Ref<Array<ITaskItem>> = ref([])

const classifyTasks = (() => {
    for (const task of tasks) {
      //if (!task.completed) {
        const formatedTaskDueDate = format(task.dueDate, { date: 'medium' })

        console.log(formatedTaskDueDate)
        if (formatedTaskDueDate < dateToday) {
          duePast.value.push(task)
        }

        if (formatedTaskDueDate == dateToday) {
          dueToday.value.push(task)
        }

        if (formatedTaskDueDate == dateToday + 1) {
          dueTomorrow.value.push(task)
        }

        if (formatedTaskDueDate > dateToday + 1) {
          dueLater.value.push(task)
        }
      }
   // }
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
            {{dateToday}}
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
          <div class="task-due-past" v-if="duePast">
            <div class="text-2xl">Past Due Tasks</div>
            <div class="task-list" v-for="task in duePast" :key="task.id">
              <TaskItem :task="task" />
            </div>
          </div>
         <div class="task-due-today" >
            <div class="text-2xl">Due Today</div>
            <div class="task-list" v-for="task in dueToday" :key="task.id">
              <TaskItem :task="task" />
            </div>
          </div>
          <div class="task-due-tomorrow" >
            <div class="text-2xl">Due Tomorrow</div>
            <div class="task-list" v-for="task in dueTomorrow" :key="task.id">
              <TaskItem :task="task" />
            </div>
          </div>
          <div class="task-due-later" >
            <div class="text-2xl">Later Due Tasks</div>
            <div class="task-list" v-for="task in dueLater" :key="task.id">
              <TaskItem :task="task" />
            </div>
          </div>


        </div>
      </div>
    </div>
  </main>
</template>
