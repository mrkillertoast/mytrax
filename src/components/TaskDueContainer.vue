<script setup lang="ts">

import TaskItem from '@/components/TaskItem.vue'
import type { ITaskItem } from '@/interfaces/ITaskItem'
import { computed } from 'vue'
import { EnumTasksTypes } from '@/Enums/EnumTasksTypes'

const props = defineProps<{
  containerTitle: String,
  taskArray: ITaskItem[],
  taskFilter: String,
}>()

const filteredTasks = computed(() => {
  if (props.taskFilter === EnumTasksTypes.ALL_TASKS) {
    return props.taskArray
  } else {
    return props.taskArray.filter((task) => {
      return task.tags.find((tag) => {
        return tag === props.taskFilter
      })
    })
  }
})
</script>

<template>
  <div class="task-due-past">
    <div class="text-2xl text-white font-bold bg-fuchsia-800 p-1.5 rounded-box my-1">{{ props.containerTitle }}</div>
    <div class="task-list ml-5" v-for="task in filteredTasks" :key="task.id">
      <TaskItem :task="task" />
    </div>
  </div>
</template>

<style scoped>

</style>