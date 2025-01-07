<script setup>
import Spined from "./spined.vue";
import { ref } from "vue";
import sp1 from "/images/sp1.png";
import sp2 from "/images/sp2.png";
import sp3 from "/images/sp3.png";
import sp4 from "/images/sp4.png";
import sp5 from "/images/sp5.png";

const spins = ref([sp1, sp2, sp3, sp4, sp5, sp1, sp2, sp3]);
const step = ref(1);
const isSpinning = ref(false);
const currentRotation = ref(0);
const selected = ref(-1);
let spinInterval;
let finalRotation;

function startSpin() {
  if (isSpinning.value) return;
  isSpinning.value = true;

  finalRotation = (Math.floor(Math.random() * 1000) % 10) * 45 + 360;

  const selects = (finalRotation % 360) / 45;
  selected.value =
    selects == 0
      ? 0
      : selects == 1
      ? 7
      : selects == 2
      ? 6
      : selects == 3
      ? 5
      : selects == 4
      ? 4
      : selects == 5
      ? 3
      : selects == 6
      ? 2
      : 1;
  let currentRotationValue = 0;

  spinInterval = setInterval(() => {
    currentRotationValue += 10;
    currentRotation.value = currentRotationValue;
    if (currentRotationValue >= finalRotation) {
      clearInterval(spinInterval);
      isSpinning.value = false;
      setTimeout(() => {
        step.value = 2;
      }, 1500);
    }
  }, 40);
}

function againTry() {
  selected.value = -1;
  step.value = 1;
  currentRotation.value = 0;
}
</script>

<template>
  <div
    class="relative overflow-x-hidden flex items-center flex-col overflow-y-hidden"
  >
    <span class="text-white font-semibold text-base mb-4"
      >БАРАБАН ПРОМОКОДОВ</span
    >
    <div :class="`spin-wrap  relative ${step != 1 && 'res-spin'}`">
      <div class="mob-filter"></div>
      <div class="baraban-spin relative">
        <div
          :class="`main-spin rounded-full p-6 relative flex items-center justify-center ${
            step == 1 ? 'border-dark' : 'border-pink'
          }`"
        >
          <div
            :class="`border-spin  p-6 rounded-full relative `"
            v-show="step == 1"
          >
            <NuxtImg
              src="/images/strelka.png"
              class="w-14 absolute strelka round"
            />
            <div class="bg-dark-200 p-7 rounded-full">
              <div
                class="circle-container"
                :class="{ spinning: isSpinning }"
                :style="{
                  transform: `rotate(${
                    currentRotation == 0 ? 22.5 : currentRotation
                  }deg)`,
                }"
              >
                <div
                  v-for="(spin, i) in spins"
                  :key="i"
                  :class="['circle absolute ', `circle${i} `]"
                  :style="{
                    transform: `translateX(-50%)     rotate(${i * 45}deg)`,
                  }"
                >
                  <div
                    :class="`${
                      selected == i && !isSpinning ? 'selectedSpin' : ''
                    } `"
                  >
                    <NuxtImg src="/images/round.png" class="round round-item" />
                    <NuxtImg :src="spin" class="round round-item" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Spined v-show="step != 1" @again="againTry" />
        </div>
        <div
          class="center-content flex flex-col items-center absolute z-10 pb-20"
          v-if="step == 1 && selected == -1"
        >
          <div
            class="flex flex-col font-semibold items-center text-white text-base"
          >
            <span> КРУТИ БАРАБАН И ПОЛУЧИ </span>
            <span class="text-orange-500"> ПРОМОКОД! </span>
          </div>
          <button
            @click="startSpin"
            class="btn btn-orange text-dark-200 font-semibold mt-5 px-22"
          >
            КРУТИТЬ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/_colors.scss";

.spin-wrap {
  max-height: 580px;
}
.baraban-spin {
  min-width: 1086px;
  width: 1086px;
  min-height: 1086px;
  height: 1086px;
  position: relative;
}

.center-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main-spin {
  position: absolute;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
}

.round-item {
  height: 190px;
}
.border-dark {
  border: 6px dashed $dark-300;
}
.border-pink {
  border: 6px dashed $pink-500;
}
.border-spin {
  border: 16px solid $dark-200;
}

.selectedSpin {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}

.circle-container {
  height: 890px;
  width: 890px;
  border-radius: 50%;
  position: relative;
  transition: transform 1s ease-out; /* Smooth transition for the rotation */
}

.circle {
  height: 890px;
  width: 890px;
  position: absolute;
  top: 0;
  left: 50%;
  transform-origin: center center;
  border-radius: 50%;
}

.strelka {
  top: -32px !important;
}
.round {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.z-10 {
  z-index: 1000;
}
.step2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%, -50%);
}

.-top-10 {
  top: -40px;
}

@media screen and (max-width: 1024px) {
  .baraban-spin {
    min-width: 800px;
    width: 800px;
    min-height: 800px;
    height: 800px;
  }
  .circle-container,
  .circle {
    height: 600px;
    width: 600px;
  }
  .round-item {
    height: 128px;
  }
  .spin-wrap {
    max-height: 400px;
  }
  .center-content {
    margin-top: -40px;
  }
}
@media screen and (max-width: 768px) {
  .mob-filter {
  background: #12131a;
  filter: blur(15px);
  position: absolute;
  bottom: -10px;
  z-index: 1000;
  min-height: 100px;
  height: 100px;
  display: flex;
  min-width: 100%;
  }

}
</style>
