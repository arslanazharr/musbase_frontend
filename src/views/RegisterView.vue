<script setup>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import moment from "moment";
import RegisterationForm from "../components/RegisterationForm.vue";
const route = useRoute();
const store = useStore();

const eventId = route.params.id;

const events = computed(() => store.getters.events);
const loading = computed(() => store.getters.loading);

const fetchEvents = async () => {
  if (!events.value.length) {
    await store.dispatch("fetchEvents");
  }
};

const eventInfo = computed(() => {
  return events.value.find((val) => val.eventId === eventId);
});

onMounted(async () => {
  await fetchEvents();
  window.scrollTo(0, 0);
});
</script>

<template>
  <section>
    <div class="container m-auto max-w-2xl py-12 space-y-6">
      <div class="text-4xl font-semibold text-center text-orange-500">
        Register
      </div>
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <div
          v-if="loading"
          class="w-full h-full flex justify-center items-center"
        >
          <PulseLoader />
        </div>
        <div v-else>
          <div v-if="eventInfo" class="flex flex-col gap-4 w-full">
            <div
              class="flex sm:flex-row items-center sm:justify-between flex-col gap-4"
            >
              <h1 class="text-2xl sm:text-3xl font-semibold">
                {{ eventInfo.eventName }}
              </h1>

              <p class="text-orange-500">
                {{ moment(props?.event?.date).format("ddd, DD MMM") }}
              </p>
            </div>
            <p class="sm:text-left text-center">{{ eventInfo.description }}</p>
            <div
              class="flex flex-row items-center gap-1 sm:justify-start justify-center"
            >
              <p class="font-semibold text-orange-500">Location:</p>
              <p class="">{{ eventInfo.location }}</p>
            </div>
          </div>
          <div v-else>Event not found.</div>
        </div>
      </div>

      <RegisterationForm :eventId="eventId" />
    </div>
  </section>
</template>
