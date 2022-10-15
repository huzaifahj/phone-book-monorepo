import { FormKitNode } from "@formkit/core"
type Options = {
  plugins: ("castNumber" | "castText")[]
}
export default (options: Options) => {
  return (node: FormKitNode) => {
    const numberTypes = ["number", "range"]
    if (
      options.plugins.includes("castNumber") &&
      numberTypes.includes(node.props.type)
    ) {
      node.on("input", ({ payload }) => {
        if (payload === null) {
          return
        } else if (payload === "" || payload === undefined) {
          node.input(null)
        } else if (typeof payload !== "number") {
          node.input(Number(payload))
        }
      })
    }

    const stringTypes = ["text", "textarea", "email", "file-upload", "select"]
    if (
      options.plugins.includes("castText") &&
      stringTypes.includes(node.props.type)
    ) {
      node.on("input", ({ payload }) => {
        if (payload === null) {
          return
        } else if (payload === "" || payload === undefined) {
          node.input(null)
        }
      })
    }
  }
}
