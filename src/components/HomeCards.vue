<script setup>
import { RouterLink } from "vue-router";
import Card from "../components/Card.vue";
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 class="text-2xl font-bold">See Upcoming Events</h2>
          <p class="mt-2 mb-4 text-center">
            Join Our Exclusive Music Events and Workshops to Showcase Your
            Talent
          </p>
          <RouterLink
            to="/events"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Explore Events
          </RouterLink>
        </Card>
        <Card bg="bg-orange-100">
          <h2 class="text-2xl font-bold">Browse Your Events</h2>
          <p class="mt-2 mb-4 text-center">
            Browse Registered Events and Shine on Stage
          </p>
          <RouterLink
            to="/my-events"
            class="inline-block bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600"
          >
            My Events
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>
