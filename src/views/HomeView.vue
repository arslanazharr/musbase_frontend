<script setup>
import Hero from "../components/Hero.vue";
import HomeCards from "../components/HomeCards.vue";
import EventListings from "../components/EventListings.vue";
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <Hero
    title="Unleash Your Inner Maestro"
    subtitle="Register for Exclusive Music Events and Take Your Talent to the Next Level"
  />

  <HomeCards />
  <EventListings limit="3" :showButton="true" />
</template>
