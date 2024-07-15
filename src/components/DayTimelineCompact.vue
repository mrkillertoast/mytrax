<template>
  <div class="container mx-auto p-4 bg-white">
    <div class="mb-4 text-center">
      <h1 class="text-2xl font-bold">March 2024</h1>
    </div>
    <div class="relative timeline">
      <div v-for="event in events" :key="event.time" class="timeline-item" :style="{ top: calculatePosition(event.time, eventIndex(event)) }">
        <div class="timeline-time">{{ event.time }}</div>
        <div class="timeline-content">
          <div class="timeline-icon" :class="event.iconClass"></div>
          <div class="timeline-details">
            <h3 class="font-bold">{{ event.title }}</h3>
            <p>{{ event.details }}</p>
            <p class="text-sm text-gray-500">{{ event.duration }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface Event {
  time: string;
  title: string;
  details: string;
  duration: string;
  iconClass: string;
}

const events: Event[] = reactive([
  { time: '08:00 AM', title: 'Rise and Shine', details: 'Morning routine', duration: '(30 min)', iconClass: 'bg-red-500' },
  { time: '08:15 AM', title: 'Yoga Workout', details: 'Morning exercise', duration: '(30 min)', iconClass: 'bg-blue-500' },
  { time: '09:15 AM', title: 'Bike to Office', details: 'Cycling', duration: '7 min remaining', iconClass: 'bg-green-500' },
  { time: '10:30 AM', title: 'Team Meeting', details: 'Project discussion', duration: '(1 hour)', iconClass: 'bg-red-500' },
  { time: '12:00 PM', title: 'Lunch Break', details: '', duration: '(1 hour)', iconClass: 'bg-green-500' },
  { time: '01:00 PM', title: 'Prepare Presentation', details: '', duration: '(30 min)', iconClass: 'bg-red-500' }
]);

const calculatePosition = (time: string, index: number) => {
  const [hour, minutePart] = time.split(':');
  const minute = parseInt(minutePart.slice(0, 2));
  const period = minutePart.slice(3);
  let hour24 = parseInt(hour);

  if (period === 'PM' && hour24 !== 12) {
    hour24 += 12;
  } else if (period === 'AM' && hour24 === 12) {
    hour24 = 0;
  }

  // Calculate minutes from midnight
  const totalMinutes = hour24 * 60 + minute;

  // Calculate the position
  let position = (totalMinutes / 1440) * 720; // Adjust the total height to 720px for a 24-hour period

  // Add extra spacing between events based on their time difference
  if (index > 0) {
    const prevTime = events[index - 1].time;
    const [prevHour, prevMinutePart] = prevTime.split(':');
    const prevMinute = parseInt(prevMinutePart.slice(0, 2));
    const prevPeriod = prevMinutePart.slice(3);
    let prevHour24 = parseInt(prevHour);

    if (prevPeriod === 'PM' && prevHour24 !== 12) {
      prevHour24 += 12;
    } else if (prevPeriod === 'AM' && prevHour24 === 12) {
      prevHour24 = 0;
    }

    const prevTotalMinutes = prevHour24 * 60 + prevMinute;
    const gap = totalMinutes - prevTotalMinutes;
    position += gap * 5.5; // Increase this factor to add more space
  }

  return `${position}px`;
};

const eventIndex = (event: Event) => events.indexOf(event);
</script>

<style scoped>
.container {
  max-width: 400px;
  background-color: #f9fafb;
}

.timeline {
  position: relative;
  border-left: 2px solid #e5e7eb;
  height: 1000px; /* Increase height to accommodate more spacing */
}

.timeline-item {
  position: absolute;
  left: 2rem;
  display: flex;
  align-items: flex-start;
}

.timeline-time {
  position: absolute;
  left: -4rem;
  width: 3rem;
  text-align: right;
  font-weight: bold;
  color: #9ca3af;
}

.timeline-content {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}

.timeline-icon {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 1rem;
}

.timeline-details {
  background-color: white;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 200px;
}
</style>
