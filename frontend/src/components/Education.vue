<script setup>
import SectionTitle from './SectionTitle.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import balon from '../assets/balon.png';

const educationHistory = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get('/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="pendidikan" class="py-20 relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
    <!-- Balon pojok -->
    <img :src="balon" alt="Bubble" class="absolute top-0 left-0 w-32 opacity-10 animate-float-slow" />
    <img :src="balon" alt="Bubble" class="absolute bottom-0 right-0 w-40 opacity-10 animate-float-slow-reverse" />
    <img :src="balon" alt="Bubble" class="absolute top-1/2 left-1/2 w-20 opacity-5 animate-float-slow" style="transform: translate(-50%, -50%);" />

    <div class="container mx-auto px-6 relative z-10">
      <SectionTitle title="✨ Riwayat Pendidikan" />
      <div class="relative mt-10">
        <div class="absolute border-r-2 border-pink-300 left-1/2 transform -translate-x-1/2 timeline-line"></div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-10 flex justify-between items-center w-full fade-slide-up"
        >
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 text-right relative">
              <!-- Kotak transparan -->
              <div class="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md relative inline-block">
                <!-- Emoji kocak -->
                <div class="emoji top-1 right-2">✨</div>
                <div class="emoji bottom-1 left-2">❤️</div>
                <!-- Ornamen bulat -->
                <div class="circle pastel-pink top-0 right-5"></div>
                <div class="circle pastel-purple bottom-2 left-2"></div>
                <p class="font-semibold text-pink-500">{{ edu.period }}</p>
                <h3 class="text-2xl font-bold text-pink-700 flex items-center justify-end">
                  ✏️ <span class="ml-2">{{ edu.institution }}</span>
                </h3>
                <p class="text-pink-600">{{ edu.major }}</p>
              </div>
            </div>
            <div class="w-1/2 flex justify-start">
              <div class="w-5 h-5 bg-pink-400 border-2 border-white rounded-full z-10 shadow-md hover:scale-110 transition timeline-dot"></div>
            </div>
          </div>

          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div class="w-5 h-5 bg-pink-400 border-2 border-white rounded-full z-10 shadow-md hover:scale-110 transition timeline-dot"></div>
            </div>
            <div class="w-1/2 pl-8 text-left relative">
              <div class="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md relative inline-block">
                <!-- Emoji kocak -->
                <div class="emoji top-1 left-2">🌸</div>
                <div class="emoji bottom-1 right-2">⭐</div>
                <!-- Ornamen bulat -->
                <div class="circle pastel-pink top-1 left-3"></div>
                <div class="circle pastel-purple bottom-1 right-3"></div>
                <p class="font-semibold text-pink-500">{{ edu.period }}</p>
                <h3 class="text-2xl font-bold text-pink-700 flex items-center">
                  ✏️ <span class="ml-2">{{ edu.institution }}</span>
                </h3>
                <p class="text-pink-600">{{ edu.major }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animasi balon */
@keyframes float { 0% { transform: translateY(0);} 50% { transform: translateY(-10px);} 100% { transform: translateY(0);} }
@keyframes floatReverse { 0% { transform: translateY(0);} 50% { transform: translateY(10px);} 100% { transform: translateY(0);} }
.animate-float-slow { animation: float 6s ease-in-out infinite; }
.animate-float-slow-reverse { animation: floatReverse 6s ease-in-out infinite; }

/* Fade up */
@keyframes fadeSlideUp { 0% { opacity: 0; transform: translateY(20px);} 100% { opacity: 1; transform: translateY(0);} }
.fade-slide-up { animation: fadeSlideUp 0.8s ease forwards; }

/* Timeline grow */
@keyframes growLine { from { height: 0; } to { height: 100%; } }
.timeline-line { animation: growLine 2s ease-out forwards; }

/* Glow titik timeline */
@keyframes glow { from { box-shadow: 0 0 5px #f9a8d4;} to { box-shadow: 0 0 15px #f9a8d4;} }
.timeline-dot { animation: glow 2s ease-in-out infinite alternate; }

/* Ornamen bulat */
.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
  animation: float 5s ease-in-out infinite;
  pointer-events: none;
}
.pastel-pink { background: #f9a8d4; width: 40px; height: 40px; }
.pastel-purple { background: #c4b5fd; width: 25px; height: 25px; }

/* Emoji lucu */
.emoji {
  position: absolute;
  font-size: 16px;
  opacity: 0.7;
  animation: float 4s ease-in-out infinite;
  pointer-events: none;
}
</style>
