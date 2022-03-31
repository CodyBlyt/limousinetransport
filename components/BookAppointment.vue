<template>
  <section class="pb-12">
    <div class="bg-theme-300 pb-96"></div>
    <div class="max-w-6xl px-4 mx-auto -mt-80">
      <div class="overflow-hidden bg-white rounded-md shadow-lg">
        <div class="flex flex-wrap">
          <div class="p-4 prose bg-gray-200 sm:order-2 md:w-1/2">
            <img
              src="~assets/img/book-an-appointment.jpg"
              alt="Book An Appointment"
              class="w-full"
            />
            <p>
              Book An Appointment to view ShowFlat &amp; get VVIP Discounts
              (Limited Time), Direct Developer Price, &amp; Hardcopy E-Brochure.
              Guaranteed with Best Price Possible.
            </p>
            <p>OR</p>
            <p>
              Fill up the form on the left and get a copy of Price, E-Brochure,
              and Latest Updates!
            </p>
            <p>Strictly no spam policy.</p>
          </div>
          <div class="p-4 md:order-1 md:w-1/2">
            <section class="space-y-6">
              <form-book-appoinment />
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FormBookAppoinment from './FormBookAppoinment.vue'
export default {
  components: { FormBookAppoinment },
}
</script>

<style scoped>
/* .prose p {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
} */
</style>
