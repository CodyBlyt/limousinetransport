<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Floor Plan
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-12">
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            1 Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="OneBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            2 Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="TwoBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            2 Bedroom + Study
          </h3>
          <BedroomImageModal :bed-room-prop="TwoBedroomStudy" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            3 Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="ThreeBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            3 Bedroom Premium
          </h3>
          <BedroomImageModal :bed-room-prop="ThreeBedroomPremium" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            4 Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="FourBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            4 Bedroom Mezzanine
          </h3>
          <BedroomImageModal :bed-room-prop="FourBedroomMezzanine" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Penthouse
          </h3>
          <BedroomImageModal :bed-room-prop="FourBedroomPenthouse" />
        </div>
        <section class="py-6">
          <NuxtLink
            to="/gazania/pricing"
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
            Continue To Pricing
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
      OneBedroom: [
        { title: 'Type A1', url: 'SmartSelect_20190413-171457_Adobe-Acrobat.jpg' },
        { title: 'Type A2', url: 'SmartSelect_20190413-171525_Adobe-Acrobat.jpg' },
        { title: 'Type A4', url: 'SmartSelect_20190413-171544_Adobe-Acrobat.jpg' },
      ],
      TwoBedroom: [
        { title: 'Type B1', url: 'SmartSelect_20190413-171620_Adobe-Acrobat.jpg' },
        { title: 'Type B2', url: 'SmartSelect_20190413-171636_Adobe-Acrobat.jpg' },
        { title: 'Type B8', url: 'SmartSelect_20190413-171900_Adobe-Acrobat.jpg' },
      ],
      TwoBedroomStudy: [
        { title: 'Type B6', url: 'SmartSelect_20190413-171806_Adobe-Acrobat.jpg' },
        { title: 'Type B7', url: 'SmartSelect_20190413-171842_Adobe-Acrobat.jpg' },
      ],
      ThreeBedroom: [
        { title: 'Type C7', url: 'SmartSelect_20190413-171955_Adobe-Acrobat.jpg' },
        { title: 'Type C6', url: 'SmartSelect_20190413-172015_Adobe-Acrobat.jpg' },
      ],
      ThreeBedroomPremium: [
        { title: 'Type C1', url: 'SmartSelect_20190413-172059_Adobe-Acrobat.jpg' },
        { title: 'Type C2', url: 'SmartSelect_20190413-172239_Adobe-Acrobat.jpg' },
        { title: 'Type C3', url: 'SmartSelect_20190413-172248_Adobe-Acrobat.jpg' },
        ],
        FourBedroom: [
        { title: 'Type D1A - DIC', url: 'SmartSelect_20190413-172359_Adobe-Acrobat.jpg' },
        { title: 'Type D2', url: 'SmartSelect_20190413-172433_Adobe-Acrobat.jpg' },
        { title: 'Type D3B', url: 'SmartSelect_20190413-172449_Adobe-Acrobat.jpg' },
        { title: 'Type D6A', url: 'SmartSelect_20190413-172542_Adobe-Acrobat.jpg' },
        ],
        FourBedroomMezzanine: [
        { title: 'Type D1CM', url: 'SmartSelect_20190413-172625_Adobe-Acrobat.jpg' },
        { title: 'Type D6AM', url: 'SmartSelect_20190413-172719_Adobe-Acrobat.jpg' },
        ],
        FourBedroomPenthouse: [
        { title: 'Type PH1', url: 'SmartSelect_20190413-172751_Adobe-Acrobat.jpg' },
        { title: 'Type PH2', url: 'SmartSelect_20190413-172806_Adobe-Acrobat.jpg' },
        { title: 'Type PH7', url: 'SmartSelect_20190413-172856_Adobe-Acrobat.jpg' },
        ],
    }
  },
}
</script>
