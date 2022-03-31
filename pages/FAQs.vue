<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Virtual Tours
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <h3 class="text-xl font-semibold sm:text-2xl text-center">2 Bedroom</h3>
        <iframe 
          width="1100" 
          height="600" 
          class="mx-auto" 
          src="https://client.audax.com.sg/Lilium/B1/" 
          title="One Bernam" 
          frameborder="0" 
          allowfullscreen>
          </iframe>
          <br><br>
          <h3 class="text-xl font-semibold sm:text-2xl text-center">3 Bedroom</h3>
        <iframe 
          width="1100" 
          height="600" 
          class="mx-auto" 
          src="https://client.audax.com.sg/Lilium/C2/" 
          title="One Bernam" 
          frameborder="0" 
          allowfullscreen>
          </iframe>
          <br><br>
          <h3 class="text-xl font-semibold sm:text-2xl text-center">4 Bedroom</h3>
        <iframe 
          width="1100" 
          height="600" 
          class="mx-auto" 
          src="https://client.audax.com.sg/Lilium/D2/" 
          title="One Bernam" 
          frameborder="0" 
          allowfullscreen>
          </iframe>
          <br><br>
          <h3 class="text-xl font-semibold sm:text-2xl text-center">Penthouse</h3>
        <iframe 
          width="1100" 
          height="600" 
          class="mx-auto" 
          src="https://client.audax.com.sg/Lilium/PH1/" 
          title="One Bernam" 
          frameborder="0" 
          allowfullscreen>
          </iframe>
          <h3 class="text-center sm:text-xl">Powered by Audax Virtuals</h3>
        <section class="py-6">
          <NuxtLink
            to="/floor-plan"
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
              hover:bg-theme-900
              bg-theme-700
            "
          >
            Continue To Floor Plan
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
