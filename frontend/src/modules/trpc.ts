import type { AppRouter } from "../../../api/dist/index"
import { createTRPCProxyClient } from "@trpc/client"
import superjson from "superjson"

let url: string
if (import.meta.env.DEV) {
  url = "http://localhost:5190"
} else {
  url = "https://api.phone-book.jearally.com"
}

let token: string | undefined
export function setToken(value?: string) {
  token = value
}

export const t = createTRPCProxyClient<AppRouter>({
  url,
  transformer: superjson,
  headers: () => {
    return {
      Authorization: `Bearer ${token}`,
    }
  },
})
