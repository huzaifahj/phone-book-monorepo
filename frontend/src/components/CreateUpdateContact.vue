<script setup lang="ts">
import { FormKitGroupValue, FormKitNode } from "@formkit/core"
import { t } from "@/modules/trpc"
import { onBeforeMount } from "vue"
import toast from "@/modules/toast"

const emit = defineEmits<{
  (e: "complete"): void
}>()
const { itemId } = defineProps<{
  itemId?: string
}>()
let loading = $ref(false)

// Get
type Item = Awaited<ReturnType<typeof t.contacts.get.query>>["contact"]
let item = $ref<Item>()
async function getItem() {
  if (!itemId) return
  try {
    loading = true
    item = (await t.contacts.get.query({ id: itemId })).contact
  } catch (error) {
    toast.error(error)
  } finally {
    loading = false
  }
}

// Create update
type CreateUpdateItem = Parameters<
  typeof t.contacts.create.mutate
>[0]["contact"]
type Form = FormKitGroupValue & Partial<CreateUpdateItem>
let form = $ref<Form>({})
async function createUpdateItem(value: Form, node: FormKitNode) {
  try {
    if (itemId) {
      await t.contacts.update.mutate({
        id: itemId,
        contact: value,
      })
      toast.success("Updated contact.")
      emit("complete")
    } else {
      await t.contacts.create.mutate({
        contact: value as Required<Form>,
      })
      toast.success("Created contact.")
      emit("complete")
    }
  } catch (error) {
    toast.error(error)
  }
}

onBeforeMount(async () => {
  await getItem()
})
</script>

<template>
  <Icon loading v-if="loading"></Icon>
  <div v-else>
    <FormKit
      type="form"
      @submit="createUpdateItem"
      v-model="form"
      :ignore="true"
      :submit-label="`${itemId ? 'Update contact' : 'Create contact'}`"
    >
      <FormKit
        type="text"
        label="First name"
        name="firstName"
        validation="required"
        :value="item?.firstName"
        help="e.g. Fred"
      />
      <FormKit
        type="text"
        label="Last name"
        name="lastName"
        validation="required"
        :value="item?.lastName"
        help="e.g. Allen"
      />
      <FormKit
        type="text"
        label="Phone number"
        name="phoneNumber"
        validation="required"
        :value="item?.phoneNumber"
        help="e.g. 210-657-9886"
      />
    </FormKit>
  </div>
</template>
