<template>
  <div class="h-5 flex">
    <NuxtImg
      src="/images/o.svg"
      height="20"
      alt="My Image"
      class="main-online absolute online1"
    />
    <NuxtImg
      src="/images/o2.svg"
      height="20"
      alt="My Image"
      class="main-online absolute online2"
    />
    <NuxtImg
      src="/images/o3.svg"
      height="20"
      alt="My Image"
      class="main-online absolute online3"
    />
  </div>
</template>

<style scoped>
.main-online {
  opacity: 0;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

.online1 {
  animation-name: showO;
}

.online2 {
  animation-name: showO2;
}

.online3 {
  animation-name: showO3;
}

@keyframes showO {
  0%,
  33% {
    opacity: 1;
  }
  34%,
  100% {
    opacity: 0;
  }
}

@keyframes showO2 {
  0%,
  33% {
    opacity: 0;
  }
  34%,
  66% {
    opacity: 1;
  }
  67%,
  100% {
    opacity: 0;
  }
}

@keyframes showO3 {
  0%,
  66% {
    opacity: 0;
  }
  67%,
  100% {
    opacity: 1;
  }
}
</style>
