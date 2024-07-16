<script setup lang="ts">
import { EnumTasksTypes } from '@/Enums/EnumTasksTypes'
const model = defineModel()

function updateModel(value: string) {
  model.value = value
}

</script>

<template>
  <div role="tablist" class="tabs tabs-lifted">
    <a role="tab" class="tab" :class="model === EnumTasksTypes.PRIVATE_TASKS? 'tab-active':''"
       @click="model=EnumTasksTypes.PRIVATE_TASKS">Private</a>
    <a role="tab" class="tab" :class="model === EnumTasksTypes.ALL_TASKS? 'tab-active':''"
       @click="model=EnumTasksTypes.ALL_TASKS">All</a>
    <a role="tab" class="tab" :class="model === EnumTasksTypes.WORKING_TASKS? 'tab-active':''"
       @click="model = EnumTasksTypes.WORKING_TASKS">Work</a>
  </div>
</template>

<style scoped>

</style>