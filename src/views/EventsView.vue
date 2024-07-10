<script setup>
import { onMounted } from "vue";
import EventListings from "../components/EventListings.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <EventListings :showPagination="true" />
</template>
