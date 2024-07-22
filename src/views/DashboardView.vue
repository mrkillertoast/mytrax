<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader.vue'
import TaskList from '@/components/TaskList.vue'
import CalenderEventsList from '@/components/CalenderEventsList.vue'
import ThreeColumnsGrid from '@/components/ThreeColumnsGrid.vue'


</script>

<template>
  <main>
    <dashboard-header />
    <div class="dashboard-content-container">
      <ThreeColumnsGrid>
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
  </main>
</template>
