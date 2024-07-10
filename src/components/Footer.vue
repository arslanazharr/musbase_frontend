<template>
  <footer class="bg-orange-400">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <nav
        class="mb-6 flex space-x-4 justify-center sm:space-x-6"
        aria-label="Footer"
      >
        <RouterLink to="/" class="hover:text-slate-200 text-white"
          >Home</RouterLink
        >
        <RouterLink to="/events" class="hover:text-slate-200 text-white">
          Events
        </RouterLink>
        <RouterLink to="/my-events" class="hover:text-slate-200 text-white">
          My Events
        </RouterLink>
      </nav>

      <p class="mt-10 text-center text-xs leading-5 text-white">
        &copy; 2024 MUSBASE. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
