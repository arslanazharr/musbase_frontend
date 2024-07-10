<script setup>
import { RouterLink } from "vue-router";
import EventListing from "./EventListing.vue";
import { useStore } from "vuex";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import { defineProps, onMounted, computed, ref } from "vue";

const props = defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
  showPagination: {
    type: Boolean,
    default: false,
  },
});

const store = useStore();

const events = computed(() => store.getters.events);
const loading = computed(() => store.getters.loading);

onMounted(() => {
  store.dispatch("fetchEvents");
});

const recordsPerPage = ref(6);

const currentPage = ref(1);

const totalPages = computed(() =>
  Math.ceil(events.value.length / recordsPerPage.value)
);

const handleChangePage = (page) => {
  if (page < 1) {
    currentPage.value = totalPages.value;
  } else if (page > totalPages.value) {
    currentPage.value = 1;
  } else {
    currentPage.value = page;
  }
};
</script>

<template>
  <section class="bg-orange-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-orange-500 mb-6 text-center">
        Browse Events
      </h2>

      <div v-if="loading" class="flex justify-center items-center h-full">
        <PulseLoader />
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <EventListing
          v-for="event in events?.slice(
            (currentPage - 1) * recordsPerPage,
            currentPage * recordsPerPage
          )"
          :key="event?.eventId"
          :event="event"
        />
      </div>

      <div
        v-if="events.length > 0 && showPagination"
        class="flex py-[12px] sm:justify-between justify-center sm:gap-0 gap-3 items-center w-full h-full px-[10px] bg-[#fafafa] rounded-[12px] border-orange-200 border mt-8"
      >
        <div
          class="flex items-center border rounded-[12px] py-[8px] px-[12px] gap-[4px] cursor-pointer bg-white"
          @click="handleChangePage(currentPage - 1)"
          :disabled="currentPage.value === 1"
        >
          <p class="text-[14px] font-semibold text-orange-500">Previous</p>
        </div>

        <div class="sm:flex hidden">
          <div
            v-for="index in totalPages"
            :key="index"
            @click="handleChangePage(index)"
            :style="{
              margin: '0 5px',
              background: currentPage === index ? 'white' : '',
            }"
            :class="[
              'flex items-center text-orange-500 rounded-[12px] py-[8px] px-[12px] gap-[4px] cursor-pointer w-[40px] h-[40px] justify-center',
              currentPage === index
                ? 'border border-orange-200 font-semibold'
                : '',
            ]"
          >
            {{ index }}
          </div>
        </div>

        <div
          class="flex items-center border rounded-[12px] py-[8px] px-[12px] gap-[4px] cursor-pointer bg-white"
          @click="handleChangePage(currentPage + 1)"
          :disabled="currentPage.value === totalPages.value"
        >
          <p class="text-[14px] font-semibold text-orange-500">Next</p>
        </div>
      </div>
    </div>
    <div v-if="showButton" class="m-auto max-w-lg mt-10 px-6">
      <RouterLink
        to="/events"
        class="block bg-orange-600 text-white text-center py-4 px-6 rounded-xl hover:bg-orange-800"
      >
        View All Events
      </RouterLink>
    </div>
  </section>
</template>
