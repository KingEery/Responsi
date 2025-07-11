<script setup>
import SectionTitle from './SectionTitle.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
// Data ini akan kita pindah ke backend nanti
const educationHistory = ref([]);
onMounted(async () => {
try { const response = await
axios.get('http://localhost:3000/api/education');
educationHistory.value = response.data; } catch (error) {
console.error(error); }
});
</script>
<template>
  <section id="pendidikan" class="py-20 bg-gradient-to-b from-pink-100 to-purple-100">
    <div class="container mx-auto px-6">
      <SectionTitle title="✨ Riwayat Pendidikan" />
      <div class="relative mt-10">
        <div class="absolute h-full border-r-2 border-pink-300 left-1/2 transform -translate-x-1/2"></div>
        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-10 flex justify-between items-center w-full"
        >
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 text-right">
              <p class="font-semibold text-pink-500">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-pink-700 flex items-center justify-end">
                ✏️ <span class="ml-2">{{ edu.institution }}</span>
              </h3>
              <p class="text-pink-600">{{ edu.major }}</p>
            </div>
            <div class="w-1/2 flex justify-start">
              <div class="w-5 h-5 bg-pink-400 border-2 border-white rounded-full z-10 shadow-md hover:scale-110 transition"></div>
            </div>
          </div>
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div class="w-5 h-5 bg-pink-400 border-2 border-white rounded-full z-10 shadow-md hover:scale-110 transition"></div>
            </div>
            <div class="w-1/2 pl-8 text-left">
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
  </section>
</template>
