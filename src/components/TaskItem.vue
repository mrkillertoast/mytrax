<script setup lang="ts">
import { EnumTaskPriority } from '@/Enums/EnumTaskPriority'

const props = defineProps({
  title: String,
  priority: Number,
  tags: Array<string>
})

</script>

<template>
  <div class="task-item p-2 border border-black rounded-box mt-2">
    <div class="task-header flex gap-2">
      <input type="checkbox" name="" id="" class="checkbox">
      <div class="task-title font-bold">{{props.title}}</div>
    </div>

    <div class="task-content flex gap-2 mt-1 h-6">
      <div class="" v-show="props.priority===EnumTaskPriority.PRIORITY_LOW"><iconify-icon icon="material-symbols:arrow-circle-down-outline-rounded" width="1.5rem"
                                   height="1.5rem" style="color: green; font-weight: bold"></iconify-icon>
      </div>
      <div class="" v-show="props.priority===EnumTaskPriority.PRIORITY_NORMAL"><iconify-icon icon="clarity:circle-solid" width="1.5rem"
                             height="1.5rem" style="color: dodgerblue; font-weight: bold"></iconify-icon>
      </div>
      <div class="" v-show="props.priority===EnumTaskPriority.PRIORITY_HIGH"><iconify-icon icon="material-symbols:arrow-circle-up-outline-rounded" width="1.5rem"
                             height="1.5rem" style="color: red; font-weight: bold"></iconify-icon>
      </div>
      <div class="task-tags flex gap-1.5 text-xs items-center" v-for="tag in props.tags" :key="tag">
        <span class="border border-black rounded-box py-0.5 px-1">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>