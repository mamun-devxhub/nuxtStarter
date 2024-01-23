<script setup>
const { $toast } = useNuxtApp();
const showToast = () => {
  $toast.error("Sucesso!");
};
</script>
<template>
  <div class="flex flex-col items-center gap-4">
    <NuxtLink to="auth/login">Login</NuxtLink> <br/>
    <h1 class="text-3xl font-bold underline test">Hello world!</h1>
    <IconUser />
    <button @click="showToast" class="px-4 py-2 bg-slate-400">toast</button>
  </div>
</template>

<style scoped></style>
