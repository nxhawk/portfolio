<template>
  <h3 class="font-poppins text-2xl max-sm:text-xl">My name is</h3>
  <h1 class="font-rubik text-8xl text-primary max-sm:text-6xl name_underline">
    Nguyen <br />
    Nhat Hao.
  </h1>
  <HomeTextRotater />
</template>

<style lang="css" scoped>
.name_underline::after {
  content: "";
  display: block;
  width: 8rem;
  height: 0.6rem;
  background-color: #2f7df4;
}
</style>
