import { onMounted, ref } from "vue";

export default function useScreenWidth() {
    const screenWitdh = ref(document.body.clientWidth)
    onMounted(() => {
        addEventListener("resize", () => {
            screenWitdh.value = document.body.clientWidth
        })
    })
    return screenWitdh
}