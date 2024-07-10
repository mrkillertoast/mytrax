<script setup lang="ts">

</script>

<template>
  <div class="header-container w-screen grid grid-cols-3 place-items-center place-content-center bg-blue-900 h-14 gap-2 p-2">
    <div class="left-navigation-container place-self-start">
      <ul class="menu menu-horizontal menu-md rounded-box ">
        <li>
          <a class="tooltip tooltip-bottom" data-tip="Dashboard">
            <iconify-icon icon="material-symbols:home-outline-rounded" width="2rem"
                          height="2rem"></iconify-icon>
          </a>
        </li>
        <li>
          <a class="tooltip tooltip-bottom" data-tip="Calendar">
            <iconify-icon icon="material-symbols:calendar-month-outline-rounded" width="2rem"
                          height="2rem"></iconify-icon>
          </a>
        </li>
        <li>
          <a class="tooltip tooltip-bottom" data-tip="Tasks">
            <iconify-icon icon="material-symbols:task-alt-rounded" width="2rem" height="2rem"></iconify-icon>
          </a>
        </li>
        <li>
          <a class="tooltip tooltip-bottom" data-tip="Habit Tracker">
            <iconify-icon icon="material-symbols:track-changes-rounded" width="2rem" height="2rem"></iconify-icon>
          </a>
        </li>
        <li>
          <a class="tooltip tooltip-bottom" data-tip="Projects">
            <iconify-icon icon="material-symbols:table-chart-view-rounded" width="2rem" height="2rem"></iconify-icon>
          </a>
        </li>
        <li>
          <a class="tooltip tooltip-bottom" data-tip="Quick Notes">
            <iconify-icon icon="material-symbols:note-stack-outline-rounded" width="2rem" height="2rem"></iconify-icon>
          </a>
        </li>
      </ul>
    </div>
    <div class="title-container font-bold text-2xl">
      myTrackz
    </div>
    <div class="right-navigation-container place-self-end">
      <ul class="menu menu-horizontal menu-md rounded-box ">
        <li>
          <a class="tooltip tooltip-bottom" data-tip="Notifications">
            <iconify-icon icon="material-symbols:notifications-outline-rounded" width="2rem"
                          height="2rem"></iconify-icon>
          </a>
        </li>
        <li class="rounded-2xl border-2 border-black">
          <a class="tooltip tooltip-bottom  flex items-center justify-center flex-nowrap" data-tip="create-new">
            <iconify-icon icon="material-symbols:add-rounded" width="2rem" height="2rem"></iconify-icon>
            <span>Create New</span>
          </a>
        </li>

      </ul>
    </div>

  </div>
</template>

<style scoped>

</style>