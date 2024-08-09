<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader.vue'
import TaskList from '@/components/TaskList.vue'
import CalenderEventsList from '@/components/CalenderEventsList.vue'
import ThreeColumnsGrid from '@/components/ThreeColumnsGrid.vue'
import { EnumCreateNewTypes } from '@/Enums/EnumCreateNewTypes'
import { type Ref, ref, type UnwrapRef } from 'vue'
import TwoColumnsGrid from '@/components/TwoColumnsGrid.vue'
import { EnumTasksTypes } from '@/Enums/EnumTasksTypes'
import { EnumTaskDifficulty } from '@/Enums/EnumTaskDifficulty'

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
])

function changeType() {
  switch (selectedTaskType.value) {
    case true: // Work task
      tagList.value[ 0 ] = EnumTasksTypes.WORKING_TASKS
      break
    case false: // False = Private Task
      tagList.value[ 0 ] = EnumTasksTypes.PRIVATE_TASKS
      break
  }
}

const tagInput: Ref<String> = ref('')

function appendTag(tag: string) {
  tagList.value.push(tag) //TODO:Correct Type + store inserted TAGs to a "myTags" Storage in Acc.

}

handleDifficulty(EnumTaskDifficulty.DIFFICULTY_NORMAL)

function handleDifficulty(difficulty: EnumTaskDifficulty) {
  switch(difficulty){
    case EnumTaskDifficulty.DIFFICULTY_HARD:
      tagList.value[1] = 'hard'
      break;
    case EnumTaskDifficulty.DIFFICULTY_NORMAL:
      tagList.value[1] = 'normal'
      break;
    case EnumTaskDifficulty.DIFFICULTY_EASY:
      tagList.value[1] = 'easy'
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
                  <input type="checkbox" class="toggle bg-black hover:bg-gray-500" v-model="selectedTaskType"
                         @change="changeType" />
                </div>
                Work
              </div>

            </div>

            <div class="new-task-content mt-5">
              <textarea class="textarea textarea-bordered w-full h-96" placeholder="Description"></textarea>
            </div>
            <div class="new-task-meta-data">
              <div class="task-tags mt-2 flex gap-2 flex-wrap">
                <div class="badge badge-neutral" v-for="tag in tagList" :key="tag">#{{ tag }}</div>
                <!-- TODO: add Option to remove tags -->
              </div>
              <div class="divider mt-1.5" />
              <div class="task-time-properties">
                <!--TODO:Due Date, How long does it take?-->
              </div>
              <div class="divider" />
              <div class="task-options mt-5 flex gap-2">
                <!--TODO:  add save button-->
                <div class="btn btn-square btn-priority h-12 w-12 bg-fuchsia-800 grid gap-0">
                  <iconify-icon icon="material-symbols:add-rounded" width="1.5rem" height="1.5rem" class="text-white" />
                  <span class="text-xxs text-white">Prio</span>
                </div>
                <div class="dropdown dropdown-top">
                  <div tabindex="0" role="button"
                       class="btn btn-square btn-priority h-12 w-12 bg-fuchsia-800 grid gap-0 justify-items-center">
                    <iconify-icon icon="mdi:weight-lifter" width="1.5rem" height="1.5rem" class="text-white" />
                    <span class="text-xxs text-white">Difficulty</span>
                  </div>
                  <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-fit p-2 shadow mb-1">
                    <li><a @click="handleDifficulty(2)">Hard</a></li>
                    <li><a @click="handleDifficulty(1)">Normal</a></li>
                    <li><a @click="handleDifficulty(0)">Easy</a></li>
                  </ul>
                </div>
                <div class="dropdown dropdown-top">
                  <div tabindex="0" role="button"
                       class="btn btn-square btn-priority h-12 w-12 bg-fuchsia-800 grid gap-0">
                    <iconify-icon icon="ant-design:tags-outlined" width="1.5rem" height="1.5rem" class="text-white" />
                    <span class="text-xxs text-white">TAGs</span>
                  </div>
                  <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-80 p-2 shadow mb-1">
                    <li><a>Item 2</a></li>
                    <li>
                      <label class="input input-bordered flex items-center gap-2 mt-2">
                        <!-- TODO: Use tagInput to filter saved tags -->
                        <input @keyup.enter="appendTag(tagInput)" type="text" class="grow" placeholder="Search"
                               v-model="tagInput" />
                        <iconify-icon icon="material-symbols:add-rounded" width="1.5rem" height="1.5rem"
                                      @click="appendTag(tagInput)"></iconify-icon>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </template>
      </TwoColumnsGrid>
    </div>
  </main>
</template>
