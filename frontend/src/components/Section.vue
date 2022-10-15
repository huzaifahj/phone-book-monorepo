<script setup lang="ts">
const {
  title,
  loading,
  dividerPosition = "bottom",
} = defineProps<{
  title?: string
  loading?: boolean
  dividerPosition?: "top" | "bottom"
}>()
</script>

<template>
  <Divider v-if="!loading && dividerPosition === 'top'" />
  <!-- Title -->
  <div v-if="title">
    <div class="mb-3 text-xl font-semibold text-neutral-700">
      {{ title }}
    </div>
  </div>
  <slot></slot>
  <div v-if="loading" class="flex justify-center">
    <Icon loading class="h-10 w-10"></Icon>
  </div>
  <Divider v-if="!loading && dividerPosition === 'bottom'" />
</template>
