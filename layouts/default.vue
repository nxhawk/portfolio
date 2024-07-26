<template>
  <div
    class="bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px] screen break-words min-h-screen flex flex-col justify-between"
  >
    <main class="relative items-start justify-between pt-24 px-32 max-md:p-4 max-md:pt-28 bg-transparent max-sm:pt-28">
      <LayoutNavbar />
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
