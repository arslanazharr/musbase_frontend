<script setup lang="ts">
import * as z from "zod";
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  eventId: String,
});

const eventId = ref(props.eventId);

const validationSchema = toTypedSchema(
  z.object({
    name: z
      .string()
      .nonempty({ message: "Name is required" })
      .min(3, { message: "Needs to be at least 3 characters" })
      .max(50, { message: "Cannot exceed 50 characters" }),
    email: z
      .string()
      .nonempty({ message: "Email is required" })
      .email({ message: "This is not a valid email" })
      .max(50, { message: "Cannot exceed 50 characters" }),
    phone: z.string().min(1),
  })
);

const { handleSubmit, errors, meta } = useForm({
  validationSchema,
});

const { value: name } = useField("name");
const { value: email } = useField("email");
const { value: phone } = useField("phone");

const onSubmit = handleSubmit(async ({ phone, name, email }, { resetForm }) => {
  const body = {
    name,
    email,
    phone,
    eventId: eventId.value,
    userId: "Hdpcn96943s",
  };
  store.dispatch("registerEvent", body);
  resetForm();
});
</script>

<template>
  <form
    @submit="onSubmit"
    class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0 flex flex-col gap-2 md:gap-4"
  >
    <label for="name">Full Name</label>
    <input
      id="name"
      v-model="name"
      class="bg-[#F5F5F5] w-full h-[50px] px-4 focus:outline-none rounded-[8px]"
      placeholder="Full Name"
      type="text"
    />
    <span class="text-red-500">{{ errors.name }}</span>

    <label for="email">Email</label>
    <input
      id="email"
      v-model="email"
      class="bg-[#F5F5F5] w-full h-[50px] px-4 focus:outline-none rounded-[8px]"
      placeholder="Email"
      type="text"
    />
    <span class="text-red-500">{{ errors.email }}</span>

    <label for="phone">Phone</label>
    <input
      id="phone"
      v-model="phone"
      class="bg-[#F5F5F5] w-full h-[50px] px-4 focus:outline-none rounded-[8px]"
      placeholder="Phone"
      type="text"
    />
    <span class="text-red-500">{{ errors.phone }}</span>

    <button
      type="submit"
      :disabled="!meta.valid"
      class="p-4 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
    >
      Register
    </button>
  </form>
</template>

<style scoped></style>
