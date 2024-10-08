import { ref, onMounted, onUnmounted } from "vue";

export const useShowNavbarScrolling = () => {
  const show = ref<boolean>(false);

  const handleScrolling = () => {
    if (window.scrollY > 0) {
      show.value = false;
    } else {
      show.value = true;
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
