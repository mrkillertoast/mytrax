<script setup lang="ts">

</script>

<template>
  <div class="navbar bg-base-200 w-screen">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <iconify-icon icon="material-symbols:menu-rounded" width="1.5rem"></iconify-icon>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow">
          <li>
            <a class="flex items-center flex-nowrap">
              <iconify-icon icon="material-symbols:home-outline-rounded" width="1rem" height="1rem"></iconify-icon>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a class="flex items-center flex-nowrap">
              <iconify-icon icon="material-symbols:calendar-month-outline-rounded" width="1rem"
                            height="1rem"></iconify-icon>
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <a class="flex items-center flex-nowrap">
              <iconify-icon icon="material-symbols:task-alt-rounded" width="1rem" height="1rem"></iconify-icon>
              <span>Tasks</span>
            </a>
          </li>
          <li>
            <a class="flex items-center flex-nowrap">
              <iconify-icon icon="material-symbols:track-changes-rounded" width="1rem" height="1rem"></iconify-icon>
              <span>Habits</span>
            </a>
          </li>
          <li>
            <a class="flex items-center flex-nowrap">
              <iconify-icon icon="material-symbols:table-chart-view-outline-rounded" width="1rem"
                            height="1rem"></iconify-icon>
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a class="flex items-center flex-nowrap">
              <iconify-icon icon="material-symbols:note-stack-outline-rounded" width="1rem"
                            height="1rem"></iconify-icon>
              <span>Notes</span>
            </a>
          </li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl">myTrackz</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">

        <li>
          <a class="flex items-center flex-nowrap">
            <iconify-icon icon="material-symbols:home-outline-rounded" width="1.5rem" height="1.5rem"></iconify-icon>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a class="flex items-center flex-nowrap">
            <iconify-icon icon="material-symbols:calendar-month-outline-rounded" width="1.5rem"
                          height="1.5rem"></iconify-icon>
            <span>Calendar</span>
          </a>
        </li>
        <li>
          <a class="flex items-center flex-nowrap">
            <iconify-icon icon="material-symbols:task-alt-rounded" width="1.5rem" height="1.5rem"></iconify-icon>
            <span>Tasks</span>
          </a>
        </li>
        <li>
          <a class="flex items-center flex-nowrap">
            <iconify-icon icon="material-symbols:track-changes-rounded" width="1.5rem" height="1.5rem"></iconify-icon>
            <span>Habits</span>
          </a>
        </li>
        <li>
          <a class="flex items-center flex-nowrap">
            <iconify-icon icon="material-symbols:table-chart-view-outline-rounded" width="1.5rem"
                          height="1.5rem"></iconify-icon>
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a class="flex items-center flex-nowrap">
            <iconify-icon icon="material-symbols:note-stack-outline-rounded" width="1.5rem"
                          height="1.5rem"></iconify-icon>
            <span>Notes</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="navbar-end gap-3">
      <a class="btn bg-gray-800 text-white">
        <iconify-icon icon="material-symbols:notifications-outline-rounded" width="1.5rem"></iconify-icon>

      </a>
      <a class="btn bg-gray-800 text-white">
        <iconify-icon icon="material-symbols:add-rounded" width="1.5rem" height="1.5rem"></iconify-icon>
        <span>Create New</span>
      </a>
    </div>
  </div>

</template>

<style scoped>

</style>