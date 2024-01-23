import Toast, { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  position: "top-center",
  timeout: 4000,
  keepOnHover: true,
  hideProgressBar: true,
  icon: false,
  closeButton: false,
};

const toast = useToast()

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Toast, options)
  nuxtApp.provide('toast', toast)
})