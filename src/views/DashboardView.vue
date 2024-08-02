<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader.vue'
import TaskList from '@/components/TaskList.vue'
import CalenderEventsList from '@/components/CalenderEventsList.vue'
import ThreeColumnsGrid from '@/components/ThreeColumnsGrid.vue'
import { EnumCreateNewTypes } from '@/Enums/EnumCreateNewTypes'
import { type Ref, ref, type UnwrapRef } from 'vue'
import TwoColumnsGrid from '@/components/TwoColumnsGrid.vue'
import { EnumTasksTypes } from '@/Enums/EnumTasksTypes'

const createNewMode = ref(EnumCreateNewTypes.CREATE_NEW_NONE)

function handleCreateNew(type: string) {
  switch (type) {
    case EnumCreateNewTypes.CREATE_NEW_TASK:
      createNewMode.value = EnumCreateNewTypes.CREATE_NEW_TASK
      break
    case EnumCreateNewTypes.CREATE_NEW_CALENDAR_EVENT:
      createNewMode.value = EnumCreateNewTypes.CREATE_NEW_CALENDAR_EVENT
      break
  }
}

const selectedTaskType: Ref<boolean> = ref(true)

const tagList: Ref<UnwrapRef<EnumTasksTypes[]>> = ref([
  EnumTasksTypes.WORKING_TASKS
]);

function changeType(){
  switch (selectedTaskType.value) {
    case true: // Work task
      tagList.value[0] = EnumTasksTypes.WORKING_TASKS
      break;
    case false: // False = Private Task
      tagList.value[0] = EnumTasksTypes.PRIVATE_TASKS
      break;
  }
}

</script>

<template>
  <main>
    <dashboard-header @create-new="handleCreateNew" />
    <div class="dashboard-content-container">
      <ThreeColumnsGrid v-if="createNewMode === EnumCreateNewTypes.CREATE_NEW_NONE">
        <template #LeftColumn>
          <CalenderEventsList />
        </template>
        <template #MiddleColumn>
          <TaskList />
        </template>
        <template #RightColumn>
        </template>
      </ThreeColumnsGrid>
    </div>
    <div class="dashboard-content-container create-new">
      <TwoColumnsGrid v-if="createNewMode === EnumCreateNewTypes.CREATE_NEW_TASK">
        <template #LeftColumn>
          <TaskList />
        </template>
        <template #RightColumn>
          <div class="new-task-container bg-base-200 m-3 p-3 rounded-box">
            <div class="new-task-header">
              <div class="task-title text-4xl mb-4">
                Create new task
              </div>

              <div class="task-title-input flex gap-3 items-center">
                <input type="text" placeholder="Title" class="input input-bordered w-full max-w-xs" />
                Private
                <div class="type-toggle">
                  <input type="checkbox" class="toggle bg-black hover:bg-gray-500" v-model="selectedTaskType" @change="changeType" />
                </div>
                Work
              </div>

            </div>

            <div class="new-task-content mt-5">
              <textarea class="textarea textarea-bordered w-full h-96" placeholder="Description"></textarea>
            </div>
            <div class="new-task-meta-data">
              <div class="task-tags mt-2 " v-for="tag in tagList" :key="tag">
                <div class="badge badge-neutral">#{{ tag }}</div>
                <!-- TODO: convert to tags container, only show if something selected, auto add private or work -->
              </div>
              <div class="divider mt-1.5" />
              <div class="task-time-properties">
                <!--TODO:Due Date, How long does it take?-->
              </div>
              <div class="divider" />
              <div class="task-options mt-5 flex gap-2">
                <!--TODO: make button font smaller + correct displaying with icons + add save button-->
                <div class="btn btn-square btn-priority h-12 w-12 bg-fuchsia-800 grid gap-0">
                  <iconify-icon icon="material-symbols:add-rounded" width="1.5rem" height="1.5rem" class="text-white" />
                  <span class="text-xxs text-white">Prio</span>
                </div>
                <div class="btn btn-square btn-priority h-12 w-12 bg-fuchsia-800 grid justify-items-center gap-0">
                  <iconify-icon icon="mdi:weight-lifter" width="1.5rem" height="1.5rem" class="text-white" />
                  <span class="text-xxs text-white">Difficulty</span>
                </div>
                <div class="btn btn-square btn-priority h-12 w-12 bg-fuchsia-800 grid gap-0">
                  <iconify-icon icon="ant-design:tags-outlined" width="1.5rem" height="1.5rem" class="text-white" />
                  <span class="text-xxs text-white">TAGs</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </TwoColumnsGrid>
    </div>
  </main>
</template>
