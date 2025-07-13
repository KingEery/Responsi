<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get('/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="proyek" class="py-20 relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
    <!-- Balon ornamen pojok -->
    <img src="../assets/balon.png" alt="Bubble" class="absolute top-0 left-0 w-28 opacity-10 animate-float-slow" />
    <img src="../assets/balon.png" alt="Bubble" class="absolute bottom-0 right-0 w-36 opacity-10 animate-float-slow-reverse" />

    <div class="container mx-auto px-6 relative z-10">
      <SectionTitle title="✨ Proyek Unggulan" />
      <div class="grid md:grid-cols-2 gap-12 mt-10">
        <div
          v-for="project in projects"
          :key="project.title"
          class="relative bg-white/70 backdrop-blur-sm rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 fade-slide-up"
        >
          <!-- Emoji lucu -->
          <div class="emoji top-2 left-2">✨</div>
          <div class="emoji bottom-2 right-2">❤️</div>
          <!-- Ornamen bulat -->
          <div class="circle pastel-pink top-3 right-4"></div>
          <div class="circle pastel-purple bottom-3 left-4"></div>

          <img :src="project.image" alt="Gambar Proyek" class="w-full h-56 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full"
              >{{ t }}</span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 font-semibold hover:underline"
            >
              Lihat Detail &rarr;
            </a>
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

/* Fade slide up */
@keyframes fadeSlideUp { 0% { opacity: 0; transform: translateY(20px);} 100% { opacity: 1; transform: translateY(0);} }
.fade-slide-up { animation: fadeSlideUp 0.8s ease forwards; }

/* Ornamen bulat */
.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
  animation: float 5s ease-in-out infinite;
  pointer-events: none;
}
.pastel-pink { background: #f9a8d4; width: 30px; height: 30px; }
.pastel-purple { background: #c4b5fd; width: 20px; height: 20px; }

/* Emoji lucu */
.emoji {
  position: absolute;
  font-size: 14px;
  opacity: 0.7;
  animation: float 4s ease-in-out infinite;
  pointer-events: none;
}
</style>
