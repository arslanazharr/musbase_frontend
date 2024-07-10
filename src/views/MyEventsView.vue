<script setup>
import { useStore } from "vuex";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import moment from "moment";
import { onMounted, computed, ref } from "vue";

const store = useStore();

const events = computed(() => store.getters.registeredEvents);
const loading = computed(() => store.getters.loading);

onMounted(() => {
  store.dispatch("fetchEventsById");
  window.scrollTo(0, 0);
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
    <h2 class="text-3xl font-bold text-orange-500 text-center mb-6">
      My Events
    </h2>
    <div v-if="loading" class="flex justify-center items-center">
      <PulseLoader />
    </div>
    <div v-else class="container-xl lg:container m-auto">
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
      <div
        v-if="events.length > 0"
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
  </section>
</template>
