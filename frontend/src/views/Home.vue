<script setup lang="ts">
import toast from "@/modules/toast"
import { t } from "@/modules/trpc"
import { DateTime } from "luxon"
import { onBeforeMount, onBeforeUnmount } from "vue"
import Fuse from "fuse.js"

let loading = $ref(false)

// Get contacts
type Contacts = Awaited<ReturnType<typeof t.contacts.getAll.query>>["contacts"]
let contacts = $ref<Contacts>([])
async function getContacts() {
  try {
    loading = true
    contacts = (await t.contacts.getAll.query()).contacts
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
const filteredContacts = $computed(() => {
  let array = contacts
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

onBeforeMount(async () => {
  await getContacts()
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
      <Button color="green"><Icon>add</Icon>Add contact</Button>
    </div>
    <Icon loading v-if="loading"></Icon>
    <!-- List contacts -->
    <div v-else>
      <div v-if="filteredContacts.length" class="flex flex-col gap-3">
        <div
          v-for="contact in filteredContacts"
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
              <Button @click.stop=""><Icon>edit</Icon></Button>
              <Button @click.stop="" color="red"><Icon>delete</Icon></Button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="font-bold">No contacts found.</div>
    </div>
  </Section>
</template>
