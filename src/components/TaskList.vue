<script setup lang="ts">

import TaskDueContainer from '@/components/TaskDueContainer.vue'
import TabsSelector from '@/components/TasksTabSelector.vue'
import { ref, type Ref } from 'vue'
import { EnumTasksTypes } from '@/Enums/EnumTasksTypes'
import { addDay, format } from '@formkit/tempo'
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