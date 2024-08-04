import { onMounted, onUnmounted } from "vue";

export const useShowScrollToTop = () => {
  const show = ref<boolean>(false);

  const handleScrolling = () => {
    if (window.scrollY >= 300) {
      show.value = true;
    } else {
      show.value = false;
    }
  };

  onMounted(() => {
    handleScrolling();
    window.addEventListener("scroll", handleScrolling);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScrolling);
  });

  return {
    show,
  };
};
