<script setup>
import { RouterLink, useRoute } from "vue-router";
import fullLogo from "../assets/fullLogo.svg";
import smallLogo from "../assets/smallLogo.svg";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-orange-400 border-b border-orange-600">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex sm:h-20 h-36 items-center justify-between">
        <div
          class="flex flex-col sm:gap-0 gap-3 sm:flex-row flex-1 !items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img
              class="h-[60px] sm:flex hidden w-auto"
              :src="fullLogo"
              alt="Music Base"
            />
            <img
              class="h-[50px] sm:hidden w-auto"
              :src="smallLogo"
              alt="Music Base"
            />
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-1 sm:space-x-2">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'bg-orange-900'
                    : 'hover:bg-orange-700 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/events"
                :class="[
                  isActiveLink('/events')
                    ? 'bg-orange-900'
                    : 'hover:bg-orange-700 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Events</RouterLink
              >
              <RouterLink
                to="/my-events"
                :class="[
                  isActiveLink('/my-events')
                    ? 'bg-orange-900'
                    : 'hover:bg-orange-700 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >My Events</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
