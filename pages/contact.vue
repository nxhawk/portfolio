<template>
  <div class="h-full w-full relative flex flex-col gap-5 overflow-hidden items-start mb-2">
    <CommonBadge icon="Phone" name="Contact" />
    <div class="flex flex-col gap-3 w-full">
      <CommonHeading> Contact Me! </CommonHeading>
      <div class="w-full flex justify-center items-center">
        <CommonFramerWrapper :y="0" :scale="0.8">
          <ContactForm />
        </CommonFramerWrapper>
      </div>
    </div>
  </div>
</template>
