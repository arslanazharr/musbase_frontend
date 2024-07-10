<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";
import moment from "moment";

const props = defineProps({
  event: Object,
});
</script>

<template>
  <div
    class="bg-white rounded-xl relative border border-orange-200 hover:bg-transparent hover:border-orange-400 hover:border transition-all cursor-default card-bg"
  >
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">
          {{ moment(props?.event?.date).format("ddd, DD MMM") }}
        </div>
        <h3 class="text-xl font-bold">{{ props?.event?.eventName }}</h3>
      </div>

      <div class="mb-5">
        <div>
          {{ props?.event?.description }}
        </div>
      </div>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker text-orange-700"></i>

          {{ props?.event?.location }}
        </div>
        <RouterLink
          class="h-[36px] bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          :to="`/event/${props?.event?.eventId}/register`"
        >
          Register
        </RouterLink>
      </div>
    </div>
  </div>
</template>
