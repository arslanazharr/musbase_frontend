<script setup>
import { useStore } from "vuex";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import moment from "moment";
import { onMounted, computed } from "vue";

const store = useStore();

const events = computed(() => store.getters.registeredEvents);
const loading = computed(() => store.getters.loading);

onMounted(() => {
  store.dispatch("fetchEventsById");
  window.scrollTo(0, 0);
});
</script>

<template>
  <div v-if="loading" class="flex justify-center h-screen items-center">
    <PulseLoader />
  </div>

  <section v-else class="bg-orange-50 px-4 py-10">
    <h2 class="text-3xl font-bold text-orange-500 text-center mb-6">
      My Events
    </h2>
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="event in events" :key="event">
          <div
            class="bg-white rounded-xl relative border border-orange-200 hover:bg-transparent hover:border-orange-400 hover:border transition-all cursor-default card-bg"
          >
            <div class="p-4">
              <h1 class="font-bold md:text-4xl text-2xl text-orange-400 mb-4">
                Event Detail
              </h1>
              <div class="mb-4">
                <h3 class="text-xl font-bold">
                  {{ event?.eventDetail?.eventName }}
                </h3>
              </div>

              <div class="mb-4">
                <div>
                  {{ event?.eventDetail?.description }}
                </div>
              </div>

              <div class="flex flex-col lg:flex-row gap-1 mb-4">
                <p class="font-semibold text-orange-700">Location:</p>
                <div>
                  {{ event?.eventDetail?.location }}
                </div>
              </div>
              <div class="flex flex-col lg:flex-row gap-1 mb-4">
                <p class="font-semibold text-orange-700">Date:</p>
                <div class="text-gray-700">
                  {{ moment(event?.eventDetail?.date).format("ddd, DD MMM") }}
                </div>
              </div>

              <div class="border border-orange-200 mb-5"></div>

              <h1 class="font-bold md:text-4xl text-2xl text-orange-400 mb-4">
                Attendee
              </h1>
              <div class="mb-4">
                <h3 class="text-xl font-bold">
                  {{ event?.userDetail?.userName }}
                </h3>
              </div>

              <div class="mb-4">
                <div>
                  {{ event?.userDetail?.userEmail }}
                </div>
              </div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  {{ event?.userDetail?.userPhone }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
