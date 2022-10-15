import { TRPCClientError } from "@trpc/client"
import { notify } from "notiwind"

const timeout = 4000

const toast = {
  success: function (text: string) {
    notify(
      {
        text,
        type: "success",
      },
      timeout
    )
  },
  error: function (input: string | any) {
    let text: string | undefined
    if (typeof input === "string") {
      text = input
    } else if (input instanceof TRPCClientError) {
      text = input.message
    } else if (input instanceof Error) {
      text = input.message
    }
    if (!text) return
    notify(
      {
        text,
        type: "error",
      },
      timeout
    )
  },
  warning: function (text: string) {
    notify(
      {
        text,
        type: "warning",
      },
      timeout
    )
  },
}

export default toast
