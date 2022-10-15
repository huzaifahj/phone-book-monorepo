<script setup lang="ts">
import { useAttrs } from "vue"

const { color } = defineProps<{
  color?: "green" | "blue" | "red"
}>()
const attrs = useAttrs()
</script>

<template>
  <div
    v-bind="attrs"
    class="flex h-fit w-fit cursor-pointer items-center gap-1 rounded-lg bg-neutral-100 py-3 px-4 hover:brightness-95"
    :class="{
      '!bg-green-600 !text-white': color === 'green',
      '!bg-blue-600 !text-white': color === 'blue',
      '!bg-red-600 !text-white': color === 'red',
    }"
  >
    <slot></slot>
  </div>
</template>
