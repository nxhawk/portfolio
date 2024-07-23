<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="py-2 md:py-4 overflow-hidden">
    <div class="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
      I am a Software Developer &<br />
      <span
        class="inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden"
      >
        <ul
          class="text-[#2f7df4] block text-left font-rubik text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide"
        >
          <li>Freelancer</li>
          <li>Blogger</li>
          <li>Gamer</li>
          <li>Creator</li>
          <li>Student</li>
          <li>Contributer</li>
        </ul>
      </span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.animate-text-slide {
  animation: text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
}

@keyframes text-slide {
  0%,
  16% {
    transform: translateY(0%);
  }

  20%,
  36% {
    transform: translateY(-16.66%);
  }

  40%,
  56% {
    transform: translateY(-33.33%);
  }

  60%,
  76% {
    transform: translateY(-50%);
  }

  80%,
  96% {
    transform: translateY(-66.66%);
  }

  100% {
    transform: translateY(-83.33%);
  }
}
</style>
