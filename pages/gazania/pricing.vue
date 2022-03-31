<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Pricing
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
            >
              <div
                class="
                  overflow-hidden
                  border-b border-gray-200
                  shadow
                  sm:rounded-lg
                "
              >
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-brown-50">
                    <tr>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-xs
                          font-medium
                          tracking-wider
                          text-left text-gray-500
                          uppercase
                        "
                      >
                        No. of Rooms
                      </th>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-xs
                          font-medium
                          tracking-wider
                          text-left text-gray-500
                          uppercase
                        "
                      >
                        Units
                      </th>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-xs
                          font-medium
                          tracking-wider
                          text-left text-gray-500
                          uppercase
                        "
                      >
                        Size (SQFT)
                      </th>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-xs
                          font-medium
                          tracking-wider
                          text-left text-gray-500
                          uppercase
                        "
                      >
                        Price Min. ($)
                      </th>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-xs
                          font-medium
                          tracking-wider
                          text-left text-gray-500
                          uppercase
                        "
                      >
                        Price Max. ($)
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr class="hover:bg-brown-100">
                      <td class="px-6 py-4 whitespace-nowrap">1 Bedroom</td>
                      <td class="px-6 py-4 whitespace-nowrap">45</td>
                      <td class="px-6 py-4 whitespace-nowrap">441 - 463</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 999,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 1,103,000</td>
                    </tr>
                    <tr class="hover:bg-brown-100">
                      <td class="px-6 py-4 whitespace-nowrap">
                        2 Bedroom
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">40</td>
                      <td class="px-6 py-4 whitespace-nowrap">624 - 678</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 1,339,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 1,591,000</td>
                    </tr>
                    <tr class="hover:bg-brown-100">
                      <td class="px-6 py-4 whitespace-nowrap">
                        2 Bedroom + Study
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">40</td>
                      <td class="px-6 py-4 whitespace-nowrap">667 - 700</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 1,505,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 1,641,000</td>
                    </tr>
                    <tr class="hover:bg-brown-100">
                      <td class="px-6 py-4 whitespace-nowrap">
                        3 Bedroom
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">40</td>
                      <td class="px-6 py-4 whitespace-nowrap">850 - 915</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 1,842,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 2,115,000</td>
                    </tr>
                    <tr class="hover:bg-brown-100">
                      <td class="px-6 py-4 whitespace-nowrap">
                      3 Bedroom Premium	
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">35</td>
                      <td class="px-6 py-4 whitespace-nowrap">958 - 1,055</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 2,012,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 2,366,000</td>
                    </tr>
                    <tr class="hover:bg-brown-100">
                      <td class="px-6 py-4 whitespace-nowrap">
                      4 Bedroom	
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">33</td>
                      <td class="px-6 py-4 whitespace-nowrap">1,216 - 1,970</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 2,475,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 2,800,000</td>
                    </tr>
                    <tr class="hover:bg-brown-100">
                      <td class="px-6 py-4 whitespace-nowrap">
                      4 Bedroom + Study		
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">10</td>
                      <td class="px-6 py-4 whitespace-nowrap">1,292 - 1,862</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 3,253,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 3,545,000</td>
                    </tr>
                    <tr class="hover:bg-brown-100">
                      <td class="px-6 py-4 whitespace-nowrap">
                      Penthouse		
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">7</td>
                      <td class="px-6 py-4 whitespace-nowrap">1,808 - 1,970</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 3,510,000</td>
                      <td class="px-6 py-4 whitespace-nowrap">$ 3,710,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <br>
                  <h1 class="text-center">(Disclaimer: All price range of each unit type for The Gazania displayed here are updated in a periodic manner. 
                  However, it is strictly for reference purposes only. Prices are subject to change from time to time without prior notice. 
                  This webpage cannot be held responsible for any inaccuracies, omissions and/or dispute.)</h1>
        </div>
        <section class="py-6">
          <NuxtLink
            to="/gazania/gallery"
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
            Continue To Gallery
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
