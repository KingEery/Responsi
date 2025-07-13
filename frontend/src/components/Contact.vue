<script setup>
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <footer id="kontak" class="py-20 relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 text-gray-800">
    <!-- Balon ornamen pojok -->
    <img src="../assets/balon.png" alt="Bubble" class="absolute top-0 left-0 w-28 opacity-10 animate-float-slow" />
    <img src="../assets/balon.png" alt="Bubble" class="absolute bottom-0 right-0 w-36 opacity-10 animate-float-slow-reverse" />

    <div class="container mx-auto px-6 relative z-10">
      <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-md text-center relative">
        <!-- Emoji kocak -->
        <div class="emoji top-2 left-2">✨</div>
        <div class="emoji bottom-2 right-2">❤️</div>
        <!-- Ornamen bulat pastel -->
        <div class="circle pastel-pink top-3 right-4"></div>
        <div class="circle pastel-purple bottom-3 left-4"></div>

        <SectionTitle title="✨ Hubungi Saya" />
        <p class="text-xl text-gray-700 mb-8">Jangan ragu untuk terhubung atau bertanya.</p>
        <a
          href="mailto:emailanda@example.com"
          class="bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 inline-block mb-8"
        >
          Kirim Email
        </a>
        <div class="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/KingEery"
            target="_blank"
            class="text-gray-600 hover:text-pink-500 transition-colors duration-300"
          >GitHub</a>
          <a
            href="https://www.linkedin.com/in/unzurna-zahira-wiyanda-713a28291/"
            target="_blank"
            class="text-gray-600 hover:text-pink-500 transition-colors duration-300"
          >LinkedIn</a>
        </div>
        <p class="text-gray-500 text-sm">
          &copy; {{ new Date().getFullYear() }} Unzurna Zahira Wiyanda. Dibuat dengan ❤️
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Animasi balon */
@keyframes float { 0% { transform: translateY(0);} 50% { transform: translateY(-10px);} 100% { transform: translateY(0);} }
@keyframes floatReverse { 0% { transform: translateY(0);} 50% { transform: translateY(10px);} 100% { transform: translateY(0);} }
.animate-float-slow { animation: float 6s ease-in-out infinite; }
.animate-float-slow-reverse { animation: floatReverse 6s ease-in-out infinite; }

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

/* Emoji kocak */
.emoji {
  position: absolute;
  font-size: 16px;
  opacity: 0.7;
  animation: float 4s ease-in-out infinite;
  pointer-events: none;
}
</style>
