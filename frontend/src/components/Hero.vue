<template>
  <section id="profil" class="relative w-full px-6 py-20 flex flex-col md:flex-row items-center justify-center overflow-hidden text-gray-800">

    <!-- Bubble background -->
    <div class="bubbles"></div>

    <div class="md:w-1/2 mb-10 md:mb-0 relative z-10">
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

    <div class="md:w-1/2 flex justify-center relative z-10 animate-slide-in-right" style="animation-delay: 800ms;">
      <img
        src="D:\laragon\www\MyPorto\frontend\src\assets\roblox.png"
        alt="Foto Profil"
        class="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-pink-300 hover:scale-105 transition duration-300"
      />
    </div>
  </section>
</template>

<style scoped>
/* Background gradient pastel */
#profil {
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  font-family: 'Poppins', sans-serif;
}

/* Bubble animasi layer */
.bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: url("https://i.ibb.co/N2YfDq2/bubble.png") repeat;
  background-size: 150px;
  animation: moveBubbles 30s linear infinite;
  opacity: 0.3;
  z-index: 0;
}

/* Keyframes bubble naik */
@keyframes moveBubbles {
  from { background-position: 0 0; }
  to { background-position: 0 -1000px; }
}

/* Slide-in animasi */
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

<!-- Import font Poppins dari Google Fonts -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
</style>
