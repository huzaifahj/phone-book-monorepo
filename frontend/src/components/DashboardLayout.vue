<script setup lang="ts"></script>

<template>
  <!-- Page -->
  <div class="m-auto flex max-w-5xl flex-col">
    <!-- Container -->
    <div class="min-h-screen border-x border-dashed">
      <!-- Header -->
      <div class="border-b border-dashed p-5 md:p-10">
        <!-- Topbar -->
        <div class="flex items-center justify-between">
          <RouterLink
            to="/"
            class="flex w-fit cursor-pointer items-center gap-3 font-semibold"
          >
            <!-- Logo -->
            <div
              class="h-12 w-12 rounded-full bg-neutral-100 bg-cover dark:ring-neutral-900"
            />
            <!-- Title -->
            <div class="overflow-auto whitespace-nowrap text-2xl">
              Phone Book App
            </div>
          </RouterLink>
        </div>
      </div>
      <!-- Slot -->
      <div class="p-5 !pb-96 md:p-10"><slot></slot></div>
    </div>
  </div>
</template>
