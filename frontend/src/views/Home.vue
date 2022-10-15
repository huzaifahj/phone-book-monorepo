<script setup lang="ts">
import toast from "@/modules/toast"
import { t } from "@/modules/trpc"
import { DateTime } from "luxon"
import { onBeforeMount, onBeforeUnmount } from "vue"
import Fuse from "fuse.js"

let loading = $ref(false)

// Get contacts
type Items = Awaited<ReturnType<typeof t.contacts.getAll.query>>["contacts"]
let items = $ref<Items>([])
async function getItems() {
  showCreateUpdateModal = false
  try {
    loading = true
    items = (await t.contacts.getAll.query()).contacts
  } catch (error) {
    toast.error(error)
  } finally {
    loading = false
  }
}

// Open window to call a number natively
function callNumber(number: string) {
  window.open(`tel:${number}`)
}

// Search functionality
let query = $ref("")
const filteredItems = $computed(() => {
  let array = items
  if (query) {
    const fuse = new Fuse(array, {
      keys: ["firstName", "lastName"],
    })
    array = fuse.search(query).map((result) => result.item)
  }

  array.sort((a, b) => {
    return DateTime.fromJSDate(b.createdAt)
      .diff(DateTime.fromJSDate(a.createdAt))
      .as("milliseconds")
  })
  return array
})

// Edit functionality
let editingItemId = $ref<string | undefined>()
let showCreateUpdateModal = $ref(false)
function createItem() {
  showCreateUpdateModal = true
  editingItemId = undefined
}
function updateItem(itemId: string) {
  showCreateUpdateModal = true
  editingItemId = itemId
}

// Delete functionality
let showConfirmDelete = $ref(false)
let deletingItemId = $ref<string | undefined>()
function showDeleteModal(itemId: string) {
  deletingItemId = itemId
  showConfirmDelete = true
}
async function deleteItem() {
  if (!deletingItemId) return
  try {
    loading = true
    await t.contacts.delete.mutate({
      id: deletingItemId,
    })
    await getItems()
    showConfirmDelete = false
    deletingItemId = undefined
  } catch (error) {
    toast.error(error)
  } finally {
    loading = false
  }
}

onBeforeMount(async () => {
  await getItems()
})
</script>

<template>
  <Section title="Contacts">
    <!-- Search input and create button -->
    <div class="mb-5 flex items-center justify-between">
      <FormKit
        type="text"
        placeholder="Search by name"
        v-model="query"
        autocomplete="off"
        :ignore="true"
        outer-class="!mb-0"
        ><template #prefix
          ><Icon class="!text-neutral-400">search</Icon></template
        ></FormKit
      >
      <Button @click="createItem" color="green"
        ><Icon>add</Icon>Add contact</Button
      >
    </div>
    <Icon loading v-if="loading"></Icon>
    <!-- List contacts -->
    <div v-else>
      <div v-if="filteredItems.length" class="flex flex-col gap-3">
        <div
          v-for="contact in filteredItems"
          @click="callNumber(contact.phoneNumber)"
          class="flex cursor-pointer items-center justify-between rounded-lg border p-3 hover:bg-neutral-50"
        >
          <!-- Left column -->
          <div>
            <!-- Name -->
            <div class="text-xl font-semibold">
              {{ contact.firstName }} {{ contact.lastName }}
            </div>
            <!-- Phone number -->
            <div class="flex items-center gap-1">
              <Icon class="!text-base">call</Icon>
              <div class="text-sm text-neutral-700">
                {{ contact.phoneNumber }}
              </div>
            </div>
          </div>
          <!-- Right column -->
          <div>
            <!-- Buttons -->
            <div @click.stop="" class="flex items-center gap-2">
              <div class="text-xs text-neutral-400">
                Added
                {{ DateTime.fromJSDate(contact.createdAt).toRelative() }}
              </div>
              <Button @click.stop="updateItem(contact.id)"
                ><Icon>edit</Icon></Button
              >
              <Button @click.stop="showDeleteModal(contact.id)" color="red"
                ><Icon>delete</Icon></Button
              >
            </div>
          </div>
        </div>
      </div>
      <div v-else class="font-bold">No contacts found.</div>
    </div>
  </Section>
  <Modal title="Manage contacts" v-model:show="showCreateUpdateModal">
    <CreateUpdateContact :item-id="editingItemId" @complete="getItems"
  /></Modal>
  <Confirm
    v-model:show="showConfirmDelete"
    @confirm="deleteItem"
    text="Are you sure you want to delete this contact?"
  />
</template>
