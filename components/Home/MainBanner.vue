<template>
  <section>
    <div data-v-750ad506="" class="shadow-md">
      <div
        id="main_banner"
        data-v-750ad506=""
        class="overflow-hidden bg-center bg-no-repeat bg-cover max-h-96"
        style="height: 500px"
      >
             
        <div
          data-v-750ad506=""
          class="relative w-full h-full max-w-6xl px-4 mx-auto"
        >
          <div data-v-750ad506="" class="absolute bottom-0 right-0 w-96">
            <div
              data-v-750ad506=""
              class="
                absolute
                h-40
                bg-gray-700 bg-opacity-75
                w-52
                sm:h-48 sm:w-64 sm:right-28
                right-20
                top-2
              "
            ></div>
            <img
              data-v-750ad506=""
              src="~/assets/img/home/tablet.png"
              alt=""
              class="relative ml-auto max-h-64 sm:max-h-80"
            />
            <div
              data-v-750ad506=""
              class="
                absolute
                p-5
                space-y-4
                text-center
                right-20
                top-3
                sm:right-28 sm:top-8
              "
            >
              <div data-v-750ad506="" class="py-1">
                <p
                  data-v-750ad506=""
                  class="
                    text-sm
                    font-medium
                    tracking-widest
                    uppercase
                    sm:text-base
                    text-theme-100
                  "
                >
                  Online Booking
                </p>
                <a
                  data-v-750ad506=""
                  href="tel:+6561003337"
                  class="text-xl font-semibold text-white sm:text-2xl"
                  >+65 6100 3337</a
                >
              </div>
              <div data-v-750ad506="" class="py-2">
                <NuxtLink
                  data-v-750ad506=""
                  to="/book-an-appointment"
                  class="
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-gray-800
                    transition
                    bg-yellow-500
                    rounded-full
                    sm:text-base
                    hover:bg-yellow-600 hover:text-white
                  "
                >
                  Book Now
                </NuxtLink>
                <br>
                <NuxtLink
                  data-v-750ad506=""
                  to="/book-an-appointment"
                  class="
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-gray-800
                    transition
                    bg-yellow-500
                    rounded-full
                    sm:text-base
                    hover:bg-yellow-600 hover:text-white
                  "
                >
                  Get Quote
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  </section>
</template>

<script>
export default {}
</script>

<style scope>
#main_banner {
  background-image: url('~assets/img/home/singapore-limousine.jpg');
}
</style>
