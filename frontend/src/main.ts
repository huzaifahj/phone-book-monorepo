import { createApp, watch } from "vue"
import App from "./App.vue"
const app = createApp(App)

// Toasts
import Notifications from "notiwind"
app.use(Notifications)

// Error handler
app.config.errorHandler = (error) => {
  toast.error(error)
  console.log(error)
}

// FormKit
import { plugin, defaultConfig, FormKit } from "@formkit/vue"
import { generateClasses } from "@formkit/themes"
import theme from "@/assets/formkitTheme"
import helpers from "@/formkit-plugins/helpers"
const helpersPlugin = helpers({
  plugins: ["castNumber", "castText"],
})
app.use(
  plugin,
  defaultConfig({
    plugins: [helpersPlugin],
    config: {
      classes: generateClasses(theme),
    },
  })
)
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    FormKit: typeof FormKit
  }
}

// CSS
import "./assets/main.css"

// Router
import router from "./router"
import toast from "./modules/toast"
app.use(router)

app.mount("#app")
