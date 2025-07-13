<template>
  <section
    id="profil"
    class="relative w-full px-6 py-20 flex flex-col md:flex-row items-center justify-center overflow-hidden text-gray-800"
    :style="{ '--bubble-url': `url(${balon})` }"
  >
    <div class="bubbles"></div>

    <div class="bg-white/70 rounded-2xl px-10 py-10 max-w-7xl w-full relative z-10 backdrop-blur-sm shadow-md">
      <div class="md:flex md:items-center md:justify-between space-y-10 md:space-y-0">
        <div class="md:w-1/2">
          <h1 class="text-5xl font-bold text-gray-800 mb-4 animate-slide-in-left flex items-center justify-center md:justify-start" style="animation-delay: 200ms;">
            ✨ <span class="ml-2">Halo, Saya <span class="text-pink-500">Unzurna Zahira Wiyanda</span></span>
          </h1>
          <p class="text-xl text-gray-700 mb-8 animate-slide-in-left" style="animation-delay: 400ms;">
            Mahasiswa Teknik Informatika yang suka bikin web lucu & desain pastel 🩷
          </p>
          <a
            href="#kontak"
            class="bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-full transition transform duration-300 inline-block animate-slide-in-left hover:scale-105"
            style="animation-delay: 600ms;"
          >
            Hubungi Saya
          </a>
        </div>

        <div class="md:w-1/2 flex justify-center relative animate-slide-in-right" style="animation-delay: 800ms;">
          <div class="relative">
            <img
              :src="roblox"
              alt="Foto Profil"
              class="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-pink-300 hover:scale-105 transition duration-300"
            />
            <!-- Badge tempel di lingkaran -->
            <span class="absolute -top-2 left-10 bg-pink-100 text-pink-600 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">Frontend</span>
            <span class="absolute top-4 -right-4 bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">UI/UX</span>
            <span class="absolute bottom-4 -left-4 bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">Vue.js</span>
            <span class="absolute -bottom-2 right-12 bg-yellow-100 text-yellow-600 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">Design</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import roblox from '../assets/roblox.png'
import balon from '../assets/balon.png'
</script>

<style scoped>
#profil {
  /* background lebih clean: putih pastel soft */
  background: #fdfdfd;
  font-family: 'Poppins', sans-serif;
}

.bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: var(--bubble-url) repeat;
  background-size: 250px;           /* bubble lebih besar, biar soft */
  animation: moveBubbles 60s linear infinite;  /* gerak lebih lambat */
  opacity: 0.08;                     /* bubble sangat soft, nyaris watermark */
  z-index: 0;
}

@keyframes moveBubbles {
  from { background-position: 0 0; }
  to { background-position: 0 -1000px; }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-slide-in-left {
  animation: slideInLeft 1s ease forwards;
}

.animate-slide-in-right {
  animation: slideInRight 1s ease forwards;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
</style>
