<script setup lang="ts">
import { useSlots } from "vue"

const emit = defineEmits<{
  (e: "update:show", v: boolean): void
}>()
const { title, show } = defineProps<{
  title: string
  show: boolean
}>()
const slots = useSlots()
</script>

<template>
  <div
    id="defaultModal"
    tabindex="-1"
    class="h-modal fixed top-0 right-0 left-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-900/50 md:inset-0"
    v-if="show"
  >
    <div class="relative h-full w-full max-w-2xl p-4 md:h-auto">
      <!-- Modal content -->
      <div class="relative rounded-lg bg-white shadow dark:bg-gray-600">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ title }}
          </h3>
          <button
            type="button"
            class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal"
            @click="emit('update:show', false)"
          >
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6">
          <slot></slot>
        </div>
        <!-- Modal footer -->
        <div
          v-if="slots.footer"
          class="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600"
        >
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
