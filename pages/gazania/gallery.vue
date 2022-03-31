<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Gallery
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
          <ImageModal :images-prop="imageUrl" />
        
        <section class="py-6">
          <NuxtLink
            to="/gazania/video"
            class="
              inline-flex
              items-center
              justify-center
              w-full
              px-3
              py-3
              text-white
              transition
              rounded
              sm:px-0
              hover:bg-brown-900
              bg-brown-700
            "
          >
            Continue To The Gazania Video
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-5 h-5"
            >
              <path
                d="M13 6l6 6-6 6M5 6l6 6-6 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg
          ></NuxtLink>
        </section>
        </div>
    </section>
    <BookAppointment />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: [
        { url: 'Gazania__Clubhouse-1024x576.jpg' }, 
        { url: 'Gazania_50m_Lap_Pool_Water_Wall-1024x576.jpg' },
        { url: 'Gazania_50m_Lap_Pool-1024x576.jpg' }, 
        { url: 'Gazania_Grand_Arrival_Plaza-1-1024x576.jpg' },
        { url: 'Gazania_Hero_Shot-1-1024x576.jpg' }, 
        { url: 'Gazania_outdoor_Fitness_area_Kids_Playground_and_pavilion-1024x576.jpg' }, 
        { url: 'Gazania_Water_Wall-1024x576.jpg' },
        { url: 'the-gazania-singapore-spa-pool-1024x576.jpg' }, 
        { url: 'the-gazania-condo-playground-singapore-1024x576.jpeg' }, 
      ],
    }
  },
}
</script>
