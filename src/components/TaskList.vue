<script setup lang="ts">

import TaskDueContainer from '@/components/TaskDueContainer.vue'
import TabsSelector from '@/components/TasksTabSelector.vue'
import { ref, type Ref } from 'vue'
import { EnumTasksTypes } from '@/Enums/EnumTasksTypes'
import { addDay, date, format, isAfter, isBefore, isEqual, sameDay } from '@formkit/tempo'
import sampleTasks from '@/demoData/sampleTasks.json'
import type { ITaskItem } from '@/interfaces/ITaskItem'


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
    const dateTomorrow = addDay(currentDate, 1)
    for (const task of nonCompletedTasks.values()) {

      if (sameDay(task.dueDate, currentDate)) {
        dueToday.value.push(task)
        continue
      }

      if (sameDay(task.dueDate, dateTomorrow)) {
        dueTomorrow.value.push(task)
        continue
      }

      if (isBefore(task.dueDate, currentDate)) {
        duePast.value.push(task)
        continue
      }


      if (isAfter(task.dueDate, dateTomorrow)) {
        dueLater.value.push(task)
      }
    }
  }
)

classifyTasks()
</script>

<template>
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
</template>

<style scoped>

</style>