<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Site Plan
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <img
          src="~assets/img/gazania-site-plan.jpg"
          alt="Site Plan L1"
          class="mx-auto"
        />
        <section class="py-6">
          <NuxtLink
            to="/gazania/360-degree-view-site-plan"
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
            Continue To The Gazania Virtual Tour
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
