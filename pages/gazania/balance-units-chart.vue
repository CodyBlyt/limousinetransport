<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Balance Units Chart
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <div class="space-y-2 text-center">
          <p class="text-xl">
            <span class="font-medium text-theme-500">Last updated</span>:
            01-03-2022
          </p>
          <p class="max-w-2xl mx-auto">
            Disclaimer: The Balance Units Chart displayed here is for reference
            purposes only. Unit availability is subject to change from time to
            time without prior notice. This webpage cannot be held responsible
            for any inaccuracies, omissions and/or dispute.
          </p>
        </div>
        <div>
          <embed
            :src="`${url}`"
            type="application/pdf"
            frameborder="0"
            class="w-full h-96"
          />
        </div>
        <div class="text-center">
          <NuxtLink
            to="/public/pdf/The Gazania Elevation Chart.pdf"
            target="_blank"
            class="font-medium hover:underline"
          >
            Click here to view larger chart
          </NuxtLink>
        </div>
        <section class="py-6">
          <NuxtLink
            to="/serangoon-ura-masterplan"
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
            Continue To Serangoon URA Master Plan
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
    return { url: process.env.BASE_URL ? '/' + process.env.BASE_URL + '/public/pdf/The Gazania Elevation Chart.pdf': '/public/pdf/The Gazania Elevation Chart.pdf'}
  },
}
</script>
