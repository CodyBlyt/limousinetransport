<template>
  <div>
    <div class="bg-theme-50">
      <div class="max-w-8xl px-4 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div class="space-y-2">
            <h4 class="text-xl font-medium">Proudly Developed By</h4>
            <img
              src="~assets/img/singhaiyi.png"
              alt="Singhaiyi Huajiang Amber Pte. Ltd."
              class="object-contain h-40"
            />
          </div>
          <div class="space-y-2">
            <h4 class="text-xl font-medium">The Lilium &amp; The Gazania</h4>
            <ul class="space-y-3 text-gray-600">
              <li>Developer: Singhaiyi Huajiang Pte. Ltd.</li>
              <li>Tenure of Land: Freehold</li>
              <li>Site Area The Lilium: 54,942 sqft</li>
              <li>Site Area The Gazania: 146,046 sqft</li>
              <li>Expected TOP The Lilium: December 2021</li>
              <li>Expected TOP The Gazania: July 2022</li>
            </ul>
          </div>
          <div class="space-y-2">
            <h4 class="text-xl font-medium">Site Links</h4>
            <ul class="space-y-3 text-gray-600">
              <li>
                <NuxtLink
                  to="/"
                  aria-current="page"
                  class="nuxt-link-exact-active nuxt-link-active"
                  >The Lilium &amp; The Gazania</NuxtLink
                >
              </li>
              <li><NuxtLink to="/floor-plan" class="">Floor Plan The Lilium</NuxtLink></li>
              <li><NuxtLink to="/gazania/floor-plan" class="">Floor Plan The Gazania</NuxtLink></li>
              <li><NuxtLink to="/pricing" class="">Pricing The Lilium</NuxtLink></li>
              <li><NuxtLink to="/gazania/pricing" class="">Pricing The Gazania</NuxtLink></li>
              <li>
                <NuxtLink to="/book-an-appointment" class=""
                  >Book Appointment (Direct Price)</NuxtLink
                >
              </li>
              <li><NuxtLink to="/contact-us" class="">Contact Us</NuxtLink></li>
            </ul>
          </div>
          <div class="space-y-2">
            <h4 class="text-xl font-medium">Contact Us</h4>
            <ul class="space-y-3 text-gray-600">
              
              <li class="flex items-center space-x-2">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></circle>
                  <path
                    d="M12 7v3.764a2 2 0 001.106 1.789L16 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p>10:00 AM – 7:00 PM</p>
              </li>
              <li class="flex items-center space-x-2">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path
                    d="M13 18.675c1.93.83 4.242 1.325 7 1.325v-4l-4-1-3 3.675zm0 0C9.159 17.023 6.824 14.045 5.5 11m0 0C4.4 8.472 4 5.898 4 4h4l1 4-3.5 3z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <a href="tel:+6561003337">+65 6100-3337</a>
              </li>
              <li class="flex items-center space-x-2">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path
                    d="M7 9l3.75 3a2 2 0 002.5 0L17 9m4 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <a href="mailto:sales@theliliumofficial.com.sg"
                  >sales@theliliumofficial.com.sg</a
                >
              </li>
              <li class="flex items-center space-x-2">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path
                    d="M7 9l3.75 3a2 2 0 002.5 0L17 9m4 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <a href="mailto:sales@thegazaniaofficial.com.sg"
                  >sales@thegazaniaofficial.com.sg</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="py-6 text-center bg-gray-200">
        <div class="max-w-6xl px-4 mx-auto space-y-2">
          <div class="text-sm text-gray-500">
            <div
              class="
                flex flex-wrap
                justify-center
                max-w-4xl
                mx-auto
                divide-x divide-gray-500
              "
            >
              <p class="px-1">Copyright © 2021</p>
              <p class="px-1">The Lilium</p>
              <p class="px-1">The Gazania</p>
              <p class="px-1">SingHaiyi Huajiang Pte. Ltd.</p>
              <p class="px-1"><a href="tel:+6561003337">+65 6100 3337</a></p>
              <NuxtLink to="/privacy-policy" class="px-1"
                >Privacy Policy</NuxtLink
              >
            </div>
          </div>
          <div class="text-[10px] text-gray-400">
            Disclaimer: The photographic and artistic impressions contained in
            this website are for illustrative purposes only and the final
            product may differ from that illustration. Images of furniture are
            for illustrative purposes only. Reference to time, distances and
            localities are approximate only and may be subject to traffic
            conditions. Views will vary depending on position of lot within
            building. The developer, builder or agent does not warrant that
            views will not be impacted by future development. Any statistics
            quoted in this brochure are not representations by the developer or
            its agents. While care has been taken to ensure that all information
            contained in this brochure are accurate the developer or its agents
            do not represent or warrant the accuracy. This website is for
            marketing purposes only and should not be relied upon when making a
            decision to purchase. While every reasonable care has been taken in
            preparing this website and in constructing the models and showflats,
            the developer and the marketing agents cannot be held responsible
            for any inaccuracies or omissions. Visual representations, models,
            showflats displays and illustrations, photographs, art renderings
            and other graphic representations and references are intended to
            portray only artist’s impressions of the development and cannot be
            regarded as representations of fact. All property listed, be it in
            Singapore or oversea is subject to final inspection by relevant
            authorities to comply with the current code of practice and policies
            for the respective country.Purchasers should make their own
            enquiries and where applicable obtain appropriate professional
            advice as to their particular circumstances. All purchases are
            subject to contract terms.
          </div>
        </div>
      </div>
    </div>

    <div id="whatsapp-chat" class="hide">
      <div class="header-chat">
        <div class="head-home">
          <div class="info-avatar">
            <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 250 100" style="enable-background:new 0 0 250 100;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#A67C52;}
</style>
<g>
	<path class="st0" d="M33.4,21c0.2,2,0.4,4,0.6,5.9c-0.6,0.3-1,0.3-1.2-0.4c-0.3-0.7-0.6-1.5-1-2.2c-1.1-1.8-2.9-2.6-4.9-2.9
		c-2.5-0.4-4.9-0.2-7.2,0.8c-3.5,1.6-5.4,4.5-6,8.2c-0.5,3.4-0.2,6.7,1.4,9.8c2,4,5.3,6.1,9.8,6.2c1.1,0,2.3-0.1,3.5-0.2
		c1.1-0.1,1.9-0.8,1.9-2c0-1.6,0.1-3.2,0-4.8c-0.1-1.2-0.7-1.7-2-1.8c-0.7,0-1.3-0.1-2-0.2c-0.1,0-0.3-0.1-0.4-0.2
		c0-0.2,0-0.4,0-0.7c2.6,0,5.2,0,7.9,0c0,3.3,0,6.5,0,9.9c-1.3,0.3-2.8,0.7-4.2,0.9c-3.9,0.7-7.9,0.6-11.6-1
		c-4.3-1.8-7.2-4.8-8.1-9.5c-1.4-7.5,2.6-14.1,10-16.1c3.6-1,7.3-1,11-0.2C31.7,20.7,32.6,20.9,33.4,21z"/>
	<path class="st0" d="M89.3,47.1c-0.9,0-1.7,0.1-2.5,0c-0.3,0-0.5-0.5-0.8-0.9c-0.1,0.1-0.4,0.2-0.7,0.4c-4.2,2.4-10.4,0.8-11.6-5.1
		c-1-5.2,2.5-10,7.8-10.7c2.4-0.3,4.7,0.2,6.9,1.1c0.7,0.3,0.9,0.7,0.9,1.4c0,4.3,0,8.5,0,12.8C89.4,46.4,89.3,46.7,89.3,47.1z
		 M86.3,39.1C86.3,39.1,86.3,39.1,86.3,39.1c0.1-1.3,0.1-2.6,0.1-3.9c0-0.3,0-0.6-0.2-0.8c-2.4-3.1-6-2.8-8-0.6
		c-1.5,1.7-1.8,3.6-1.6,5.8c0.3,3.9,4.3,6.6,8,5.5c1.1-0.3,1.6-0.8,1.6-2.1C86.3,41.8,86.3,40.4,86.3,39.1z"/>
	<path class="st0" d="M53.3,32.5c0,4.9,0,9.6,0,14.5c-0.9,0-1.8,0.1-2.7,0c-0.2,0-0.4-0.5-0.6-0.8c-2.2,1.5-4.6,1.9-7.2,1.1
		c-2.9-0.9-5-3.6-5.2-6.6c-0.3-5.2,2.4-8.7,7.4-9.7c2.7-0.6,5.2,0,7.6,1.2C53,32.2,53.2,32.4,53.3,32.5z M50.2,38.9c0,0,0.1,0,0.1,0
		c0-1.3,0-2.6,0-3.9c0-0.2,0-0.5-0.1-0.7c-2.1-2.8-5.4-3-7.6-0.9c-1.9,1.8-2.3,4-1.9,6.5c0.6,3.8,4.5,6.3,8.1,5.1
		c0.8-0.3,1.3-0.7,1.4-1.6C50.3,42,50.2,40.5,50.2,38.9z"/>
	<path class="st0" d="M141.1,47.1c-0.9,0-1.8,0.1-2.6,0c-0.2,0-0.4-0.5-0.6-0.9c-1.5,1-3.2,1.6-5.1,1.5c-3.9-0.1-7-3.3-7.3-7.2
		c-0.5-7.6,6.7-11.1,12.7-9.3c0.9,0.3,1.7,0.6,2.5,1c0.3,0.1,0.5,0.5,0.5,0.8c0,4.6,0,9.1,0,13.7C141.2,46.7,141.2,46.8,141.1,47.1z
		 M138.1,38.9c0,0,0.1,0,0.1,0c0-1.3,0-2.5,0-3.8c0-0.2,0-0.5-0.2-0.6c-2.2-2.8-5.5-3-7.6-0.9c-1.9,1.8-2.2,4.1-1.8,6.5
		c0.6,3.7,4.4,6.1,7.9,5.1c0.9-0.3,1.5-0.8,1.6-1.8C138.1,41.9,138.1,40.4,138.1,38.9z"/>
	<path class="st0" d="M99.4,30.1c0.1,1,0.2,1.8,0.3,2.6c1.4-0.6,2.6-1.3,3.8-1.6c1-0.3,2.1-0.4,3.1-0.3c2.2,0.3,3.6,1.9,3.6,4.1
		c0.1,3.8,0.1,7.6,0.1,11.4c0,0.2,0,0.4-0.1,0.6c-1,0-1.9,0-2.9,0c0-0.3-0.1-0.6-0.1-0.9c0-3.5,0-6.9-0.1-10.4c0-1.8-1.3-3-3.1-3
		c-0.7,0-1.4,0-2,0.1c-1.6,0.3-2.4,1.4-2.5,3c0,3.4,0,6.9,0,10.3c0,0.3,0,0.5-0.1,0.9c-1,0-1.9,0-2.9,0c0-0.3,0-0.6,0-0.8
		c0-3.5,0-7,0-10.4c0-1.1-0.1-2.2-1.3-2.8c-0.2-0.1-0.3-0.3-0.5-0.6C96.3,31.6,97.8,30.9,99.4,30.1z"/>
	<path class="st0" d="M70.5,31.5c-3.1,4.7-5.9,9.3-8.6,14c0.1,0.1,0.1,0.2,0.2,0.3c2.7,0,5.4,0,8.1,0c0.3,1.1,0.1,1.4-0.8,1.4
		c-3.5,0-7,0-10.6,0c-0.2,0-0.4-0.1-0.9-0.1c2.8-4.8,5.5-9.5,8.2-14.2c-0.3-0.1-0.4-0.2-0.6-0.2c-1.6,0-3.2,0-4.8,0.2
		c-1.4,0.1-1.7,1.4-2.3,2.4c-0.3,0.5-0.6,0.7-1.1,0.2c0.1-1.4,0.6-2.7,1.4-3.9c0.1-0.2,0.5-0.2,0.7-0.2c3.4,0,6.7,0,10.1,0
		C69.9,31.3,70.1,31.4,70.5,31.5z"/>
	<path class="st0" d="M73.2,25c-0.8,0-1.4,0-2.1,0c0-3.8,0-7.4,0-11.1c-0.6-0.2-1-0.3-1.5-0.4c-0.2-0.6-0.1-0.9,0.6-0.9
		c0.9,0,1.9,0,3,0c0,1.8,0,3.5,0,5.3c2.2,0,4.2,0,6.4,0c0-1.7,0-3.5,0-5.3c1.2,0,2.2,0,3.3,0c0.1,0,0.4,0.3,0.4,0.5
		c0,0.2-0.2,0.4-0.4,0.5c-0.3,0.1-0.7,0.2-1.1,0.3c0,3.7,0,7.4,0,11.1c-0.8,0-1.4,0-2.1,0c0-1.9,0-3.8,0-5.7c-2.2,0-4.2,0-6.4,0
		C73.2,21.2,73.2,23.1,73.2,25z"/>
	<path class="st0" d="M120.6,47c-1.1,0-2,0-3.1,0c0-0.3,0-0.6,0-0.8c0-3.6,0-7.1,0-10.7c0-1-0.2-1.9-1.2-2.4
		c-0.2-0.1-0.3-0.3-0.6-0.7c1.7-0.8,3.2-1.5,4.9-2.3C120.6,35.8,120.6,41.4,120.6,47z"/>
	<path class="st0" d="M94.5,23.8c-0.2,0.6-0.3,0.9-0.4,1.2c-2.6,0-5.1,0-7.8,0c0-3.7,0-7.4,0-10.8c-0.5-0.8-1.8-0.3-1.4-1.7
		c2.8,0,5.6,0,8.6,0c0.1,0.9,0.2,1.8,0.2,2.7c0,0.1-0.3,0.4-0.5,0.4c-0.2,0-0.5-0.2-0.6-0.4c-0.3-1.3-1.1-1.5-2.3-1.5
		c-0.6,0-1.3,0-2,0c0,1.4,0,2.7,0,4.2c1.3,0,2.6,0,3.9,0c0.5,0.8,0.2,1.3-0.6,1.3c-1.1,0-2.2,0-3.2,0c0,1.5,0,2.9,0,4.6
		C90.6,23.8,92.5,23.8,94.5,23.8z"/>
	<path class="st0" d="M62,25c-0.8,0-1.4,0-2,0c0-3.8,0-7.5,0-11.2c-1.6,0.1-3.4-0.6-4.1,1.8c-0.4-0.1-0.7-0.2-1-0.3
		c0.3-0.9,0.5-1.6,0.7-2.3c0.1-0.2,0.4-0.4,0.6-0.4c3.5,0,7,0,10.5,0c0.1,0,0.2,0.1,0.5,0.1c-0.1,0.9-0.2,1.9-0.3,2.8
		c-0.4,0-0.6,0-0.8,0.1c-0.1-0.3-0.3-0.5-0.3-0.7c-0.1-0.7-0.5-1-1.1-1c-0.8-0.1-1.6,0-2.5,0C62,17.6,62,21.3,62,25z"/>
</g>
<g>
	<path class="st0" d="M163.5,57c-0.2,0-0.3,0-0.5,0c-0.9-1.5-2.3-1.8-4.1-0.7c-2,1.3-3.8,2.9-5.7,4.4c-0.2-0.2-0.4-0.4-0.6-0.6
		c2.3-2.3,4.7-4.4,8-4.9C162.4,55,163.2,55.5,163.5,57z"/>
	<path class="st0" d="M151.9,60.4c-0.1,0.1-0.2,0.2-0.3,0.3c-0.6-0.6-1.1-1.1-1.7-1.7c-3.2-2.9-7-4.2-11.1-4.9
		c0.2-0.1,0.5-0.2,0.7-0.3C144.5,54.4,148.6,56.6,151.9,60.4z"/>
	<path class="st0" d="M126.8,58c0-0.1,0-0.3-0.1-0.4c3.6-3.3,7.9-4.4,12.8-3.6c-0.2,0.1-0.5,0.2-0.7,0.3
		C134.3,54,130.2,54.9,126.8,58z"/>
	<path class="st0" d="M79.7,67.4c0.1-0.4,0.2-0.7,0.3-1.2c-2.6,0-5,0-7.4,0c-1.9,0-3.8-0.1-5.6-0.1c-0.2,0-0.4,0.4-0.5,0.7l0,0
		c-0.2,0-0.3,0-0.5,0c0.1-0.4,0.2-0.8,0.2-1c4.8,0,9.4,0,14.2,0c0,0.5,0,1,0,1.6C80,67.3,79.9,67.3,79.7,67.4L79.7,67.4z"/>
	<path class="st0" d="M66.3,66.7c-0.2,0.1-0.4,0.2-0.6,0.3c0-0.1,0-0.2,0-0.3C66,66.7,66.2,66.7,66.3,66.7z"/>
	<path class="st0" d="M153.3,60.8c-0.1,0.5-0.2,1.1-0.3,1.6c0,0-0.1,0.1-0.1,0c-0.1,0-0.1-0.1-0.2-0.2
		C152.7,61.7,152.1,60.8,153.3,60.8z"/>
	<path class="st0" d="M148.7,64.4c0.2-0.2,0.4-0.4,0.5-0.6C149,64,148.9,64.2,148.7,64.4z"/>
	<path class="st0" d="M147.4,66c0.2-0.3,0.4-0.5,0.6-0.8C147.9,65.5,147.6,65.7,147.4,66z"/>
	<path class="st0" d="M150.1,62.7c0.2-0.2,0.4-0.4,0.6-0.6C150.5,62.3,150.3,62.5,150.1,62.7z"/>
	<path class="st0" d="M151.1,61.7c0.1-0.1,0.3-0.3,0.4-0.4C151.4,61.4,151.3,61.6,151.1,61.7z"/>
	<path class="st0" d="M150.7,62.1c0.1-0.1,0.3-0.3,0.4-0.4C151,61.9,150.8,62,150.7,62.1z"/>
	<path class="st0" d="M149.5,63.5c0.1-0.2,0.3-0.3,0.4-0.5C149.7,63.2,149.6,63.3,149.5,63.5z"/>
	<path class="st0" d="M152.3,62.2c-0.1,0.2-0.3,0.4-0.4,0.6C152,62.6,152.1,62.4,152.3,62.2z"/>
	<path class="st0" d="M146.4,67.5c0.1-0.2,0.2-0.4,0.4-0.5C146.6,67.2,146.5,67.3,146.4,67.5z"/>
	<path class="st0" d="M148.3,64.9c0.1-0.2,0.3-0.3,0.4-0.5C148.6,64.6,148.4,64.7,148.3,64.9z"/>
	<path class="st0" d="M124.8,66.1c0.1,0.2,0.2,0.4,0.3,0.6C125,66.5,124.9,66.3,124.8,66.1z"/>
	<path class="st0" d="M146.9,66.7c0.1-0.1,0.2-0.2,0.3-0.4C147.1,66.5,147,66.6,146.9,66.7z"/>
	<path class="st0" d="M147.2,66.4c0.1-0.1,0.1-0.2,0.2-0.3C147.3,66.1,147.3,66.2,147.2,66.4z"/>
	<g>
		<path class="st0" d="M144.2,92.3c-3.6,0.3-6.9-1.1-10.2-2.3c-0.8-0.3-1.7-0.1-2.6-0.1c-0.1,0-0.2,0-0.3-0.1
			c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.3-0.2c-0.1-0.1-0.2-0.2-0.3-0.3c-0.8-0.3-1.7-0.6-2.5-0.9c-0.1,0-0.2-0.1-0.4-0.1
			l-0.1,0c0,0-0.1-0.1-0.1-0.1c0.5,0,1.1-0.1,1.6-0.1c0.3,0.1,0.7,0.1,1,0.2c1.3,0.2,2.3-0.1,3.4-1.2c2.9-3,4.5-6.7,6.4-10.3
			c0.4-0.8,0.8-1.7,1.3-2.7c-1.3,0.1-2.4,0.2-3.5,0.4c-3.9,0.5-7.5-0.2-10.7-2.3c-1-0.7-1.8-1.8-2.7-2.7c-0.1-0.3-0.2-0.7-0.2-1
			c0-0.7,0-1.4,0-2.2c0,0,0,0,0,0c0.1,0.2,0.2,0.4,0.3,0.6c1.8,2.9,4.4,4.7,7.6,5.1c2.9,0.4,5.8,0.2,8.7,0.3c1.2,0,2.1-0.3,2.7-1.4
			c0.1-0.2,0.3-0.4,0.4-0.7l0.1,0.1l-0.1-0.1c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0-0.1,0.1-0.1c0.1-0.1,0.2-0.3,0.3-0.4l0.1,0.1l-0.1,0
			c0.1-0.2,0.2-0.4,0.4-0.5c0-0.1,0-0.2,0.1-0.2c0.2-0.3,0.5-0.6,0.7-0.9l0,0c0.1-0.2,0.2-0.4,0.4-0.5c0.1-0.1,0.1-0.2,0.2-0.3
			c0.1-0.1,0.2-0.2,0.3-0.4l0,0c0.1-0.1,0.1-0.2,0.2-0.3l0.1-0.1c0.2-0.3,0.4-0.5,0.6-0.8c0,0,0.1,0.1,0.1,0.1l-0.1-0.1
			c0.1-0.1,0.2-0.2,0.2-0.3l0,0c0.1-0.2,0.3-0.3,0.4-0.5l0,0c0.2-0.2,0.4-0.4,0.5-0.6l0,0c0.1-0.1,0.2-0.2,0.3-0.3c0,0,0,0,0,0
			c0.1-0.2,0.3-0.3,0.4-0.5c0.1-0.1,0.2-0.2,0.3-0.3c0.2-0.2,0.4-0.4,0.6-0.6l0,0c0.1-0.1,0.3-0.3,0.4-0.4l0.1-0.1
			c0.1-0.1,0.3-0.3,0.4-0.4c0-0.2,0-0.4,0-0.5c0.1-0.1,0.2-0.2,0.3-0.3c0.3-0.1,0.5-0.2,0.8-0.3c0.2,0.2,0.4,0.4,0.6,0.6l0,0
			c-1.2,0.1-0.6,0.9-0.6,1.5c-0.1,0-0.3,0-0.4,0c-0.1,0.2-0.3,0.4-0.4,0.6c-1.5,2.7-3,5.4-4.7,8.3c0.8-0.2,1.3-0.3,1.9-0.5
			c0.2,0.1,0.5,0.2,0.7,0.3c-2.3,0.6-3.7,2.1-4.8,4.2c-2.1,3.9-4.6,7.6-7.8,10.7c-1,1-2.1,1.8-3.5,2.9c3.1,0.7,5.9,1.3,8.8,1.9
			c0.4,0.2,0.8,0.5,1.1,0.5c1.1,0.1,2.3,0,3.4,0C146.1,91.5,145.1,91.9,144.2,92.3z"/>
		<path class="st0" d="M172.3,78.6c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.4c0,0,0,0,0,0c0.1-0.2,0.3-0.3,0.4-0.5
			c3.3-5.1,6.6-10.1,9.8-15.3c0.8-1.2,1.5-2,3-1.8c0.4,0,0.7-0.1,1.3-0.1c-0.3,0.6-0.5,1-0.8,1.4c-5.1,8-10.1,16.1-15.2,24.1
			c-0.7,1.2-1.3,2.5-1.9,3.8c-0.2,0.5,0,1.1,0,1.6c-0.2,0.2-0.4,0.3-0.6,0.5c-1.2-0.8-1.8-2.3-0.9-4.1c1-2.2,2.4-4.3,3.6-6.4
			c0.4-0.5,0.9-1,1.3-1.5C173.5,78.9,173.1,78.7,172.3,78.6z"/>
		<path class="st0" d="M108.5,83.4c-1,0-2.3,0.3-3-0.2c-0.4-0.3-0.1-1.8-0.1-2.7c0-4.2,0-8.3,0-12.5c0-1.2-0.3-2-1.7-2.2
			c3.1,0,6.2,0,9.4,0c-0.1,0.7-0.1,1.6-0.2,2.9c-0.8-2.1-2.2-2.5-5.4-1.9c0,2.1,0,4.3,0,6.5c1.8,0,3.5,0,5.3,0
			c-0.1,0.8-0.2,1.7-0.3,2.8c-1-2.8-3.2-1.3-5.1-1.9c0,2.4,0,4.5,0,6.7c0.1,0.4,0.2,0.7,0.3,1.1c0,0,0,0,0,0
			C108,82.5,108.3,83,108.5,83.4z"/>
		<path class="st0" d="M74,83.4c-0.7,0-1.3,0-2,0c-0.2-0.2-0.4-0.3-0.6-0.5c0.2-0.7,0.5-1.4,0.5-2.1c0.1-4.4,0.1-8.7,0-13.1
			c0-0.3-0.4-0.7-0.6-1c-1.7,0-3.4,0-5.1,0c0.2-0.2,0.4-0.7,0.5-0.7c1.9,0,3.8,0.1,5.6,0.1c2.4,0,4.9,0,7.4,0
			c-0.1,0.5-0.2,0.9-0.3,1.2c-1.8-0.3-3.6-0.6-5.6-0.9c0,5.3,0,10.2,0,15.1c0,0.5,0.5,0.9,0.8,1.4C74.6,83.1,74.3,83.2,74,83.4z"/>
		<path class="st0" d="M191.7,90.7c-0.8-2.3-0.1-4.3,1.1-6.2c0.7-1.1,1.5-2.1,2.2-3.1c0.3-0.4,0.5-0.8,0.6-1.4
			c-0.4,0.3-0.8,0.5-1.3,0.9c0.9-2.2,3.1-3.5,6.1-3.6c-1.3,2-2.5,3.9-3.7,5.8c-1.1,1.8-2.4,3.5-3.4,5.4c-0.4,0.8-0.1,1.9-0.2,2.8
			C192.7,91.2,192.2,91,191.7,90.7z"/>
		<path class="st0" d="M96,73.3c0.1-2.1,0.2-4.3,0.1-6.4c0-0.3-1-0.7-1.6-1c1.7,0,3.4,0,5.1,0C98.2,66,98.3,67,98.3,68
			c0,4.2,0,8.4,0,12.6c0,0.9,0.3,1.7,0.5,2.7c-1,0-2.2,0-3.1,0c0.2-1.1,0.5-2.1,0.5-3.1c0.1-2,0-4.1,0-6.1
			C96.2,73.8,96.1,73.6,96,73.3z"/>
		<path class="st0" d="M156.7,91.2c-1.1-1.2-0.8-2.6-0.4-3.9c0.5-1.5,1.4-2.9,2.1-4.3c0.6-1.3,1.3-2.5,1.9-3.8c0.5-1,1-1.8,2.3-1.7
			c0.7,0,1.3-0.1,2.2-0.1c-1,1.6-1.9,3.1-2.8,4.6c-1.3,2.2-2.7,4.4-3.9,6.7c-0.4,0.7-0.2,1.7-0.3,2.5c-0.2,0.1-0.4,0.3-0.6,0.4
			c0,0-0.1,0-0.1,0C157,91.5,156.8,91.3,156.7,91.2z"/>
		<path class="st0" d="M229.1,77.5c1.2,0,1.4,0.9,1.4,1.8c0.1,2.1-0.7,4-1.9,5.7c0,0-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1,0
			c-0.2,0.6-0.7,1.3,0.3,1.8c-1.1,1.5-2.1,3-3.3,4.4c-0.3,0.4-1.1,0.5-1.7,0.7c-0.6,0.1-1.2,0.1-2,0.2c1.4-2.2,2.7-4.2,3.9-6.2
			c1.1-1.8,2.2-3.5,3.1-5.4c0.3-0.7,0.2-1.6,0.2-2.3C228.9,77.8,229,77.7,229.1,77.5z"/>
		<path class="st0" d="M202.9,83.5c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.3c0,0,0,0,0,0c0.1-0.1,0.1-0.2,0.2-0.4
			c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0c0-0.1-0.1-0.1-0.1-0.2c0.8-1.1,1.6-2.2,2.3-3.4c0.6-1,1.2-1.7,2.5-1.5c0.4,0.1,0.9,0,1.7-0.1
			c-0.3,0.6-0.6,1-0.8,1.4c-2.1,3.3-4.3,6.5-6.4,9.8c-0.4,0.7-0.5,1.6-0.7,2.4c-0.3,0-0.6,0-1,0.1c0,0,0,0,0,0
			c-0.1-0.2-0.2-0.4-0.3-0.7c0-1,0-2.1,0-3.1c0-0.5,0.1-1,0.1-1.5c0,0,0.1,0.1,0.1,0.1s-0.1-0.1-0.1-0.1c0.1-0.2,0.3-0.3,0.4-0.5
			c0,0,0,0,0,0c0.2-0.2,0.4-0.4,0.5-0.6c0,0,0,0,0,0c0.2-0.2,0.4-0.4,0.5-0.6c0,0,0,0,0,0C202.6,83.8,202.7,83.7,202.9,83.5z"/>
		<path class="st0" d="M218,88.6c-0.2,0.2-0.3,0.5-0.5,0.7c-1,2-2.6,2.9-5,2.5c2.5-4,5-8,7.6-12c0.4-0.6,0.8-1.3,1.2-1.9
			c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.1,0.2,0.2,0.3l-0.1,0.1c0,0,0-0.1,0-0.1c0,1-0.1,1.9-0.1,2.9c-0.4,1-0.8,2.1-1.1,3.1c0,0,0,0,0,0
			c-0.2,0.2-0.4,0.4-0.6,0.6c-0.3,0.3-0.6,0.6-0.9,0.8c0.3,0.4,0.5,0.7,0.7,1c0,0,0,0,0,0c-0.1,0.1-0.2,0.2-0.3,0.3c0,0,0,0,0,0
			c-0.1,0.2-0.3,0.3-0.4,0.5c0,0,0,0,0,0c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.2,0.4c0,0,0,0,0,0
			c-0.1,0-0.1,0-0.2-0.1C217.9,88.5,218,88.6,218,88.6z"/>
		<path class="st0" d="M179.9,90.9c-0.8-1.4-0.5-2.9,0.1-4.2c0.6-1.4,1.5-2.7,2.3-4.1c1.2-1.1,2.3-2.2,2-4c0,0,0,0,0,0
			c0.1-0.1,0.2-0.2,0.3-0.3c0,0,0,0,0,0c0.1-0.1,0.2-0.2,0.2-0.4c0,0,0.1,0.1,0.1,0.1s-0.1-0.1-0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.3
			l0,0.1c0,0,0-0.1,0-0.1c0.1,0,0.3-0.1,0.4-0.1c0.8,0,1.6,0,2.5,0c-0.2,0.5-0.4,1.1-0.7,1.6c-1.7,2.8-3.4,5.6-5.1,8.5
			c-0.5,0.8-0.8,1.8-1.2,2.7c0,0.2,0.1,0.4,0.1,0.5c0,0,0,0,0,0c-0.2,0.2-0.5,0.3-0.7,0.5c0,0,0,0,0,0C180.1,91.2,180,91,179.9,90.9
			z"/>
		<path class="st0" d="M238.5,79.4L238.5,79.4c0-0.1,0.1-0.1,0.1-0.1c0.4-0.2,0.8-0.4,1.2-0.6c0,0,0,0,0,0c0.1,0.1,0.1,0.2,0.2,0.3
			c0.3,1.7-0.3,3.2-1.2,4.7c-1.3,2-2.7,4.1-4,6.2c-0.1,0.3-0.2,0.6-0.4,0.9c-0.1,0.2-0.3,0.5-0.4,0.7c0,0,0,0,0,0
			c-0.1-0.1-0.2-0.2-0.3-0.4c-0.8-1.8-0.7-3.6,0.3-5.1c1.2-1.9,2.7-3.7,4-5.5c0.1-0.2,0.3-0.4,0.4-0.6c0,0,0,0,0,0
			C238.3,79.6,238.4,79.5,238.5,79.4z"/>
		<path class="st0" d="M86.1,73.2L86.1,73.2c0.1,0,0.2,0,0.2,0c0,0.2,0,0.4,0,0.6c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1
			c-0.1,2.7-0.2,5.5-0.3,8.2c0.1-0.1,0.2-0.2,0.3-0.4c0.3,0.4,0.5,0.9,0.9,1.5c-0.9,0-1.6,0.1-2.3,0c-0.3-0.1-0.7-0.6-0.7-1
			c-0.1-0.9,0-1.8,0.1-2.7c0.2-0.3,0.5-0.6,0.5-0.9c0-3.2,0-6.4,0-9.6c0-0.3-0.3-0.6-0.5-0.9c0-1.2,0.1-2.5-1.8-2.5
			c0.9,0,1.7,0,2.6,0c0.3,0.5,0.8,1,0.8,1.6c0.1,1.5,0,3,0.1,4.5C85.8,72.4,86,72.8,86.1,73.2z"/>
		<path class="st0" d="M157.2,91.7c0.2-0.1,0.4-0.3,0.6-0.4c0.8-0.1,1.9,0,2.5-0.5c2.2-1.8,4.3-3.7,6.3-5.8c2-2,3.8-4.2,5.6-6.3
			c0.8,0,1.2,0.3,0.6,1.1c-0.4,0.5-0.9,1-1.3,1.5c0.1-0.3,0.2-0.6,0.3-0.8c-0.1-0.1-0.2-0.1-0.2-0.2c-1.7,1.9-3.3,3.9-5.1,5.6
			c-2,1.9-4.1,3.8-6.2,5.5C159.5,92.1,158.3,92.4,157.2,91.7z"/>
		<path class="st0" d="M129.9,87.8c-0.5,0-1.1,0.1-1.6,0.1c-1.8-0.4-3.7-0.8-5.5-1c-1-0.1-2.1,0.1-3,0.4c-1.5,0.6-1.7,2.2-0.4,3.1
			c1,0.7,2.3,0.9,3.5,1.3c0,0.2,0,0.4,0,0.6c-1.2-0.4-2.5-0.7-3.7-1.2c-1-0.5-1.5-1.5-1.1-2.5c0.3-0.7,1-1.7,1.7-1.9
			c1.4-0.4,2.9-0.5,4.3-0.4c1.7,0.1,3.5,0.5,5.2,0.9C129.4,87.3,129.6,87.6,129.9,87.8z"/>
		<path class="st0" d="M149.8,70.9c-0.2-0.1-0.5-0.2-0.7-0.3c0.3-0.2,0.7-0.3,1-0.5c4.1-1.9,7.8-4.3,10.8-7.7
			c1.3-1.5,2.4-3.2,2.2-5.3c0.2,0,0.3,0,0.5,0c0.4,1.8-0.3,3.3-1.3,4.6c-2.6,3.5-6.1,5.8-9.7,7.9C151.6,70.1,150.7,70.5,149.8,70.9z
			"/>
		<path class="st0" d="M239.7,78.6c-0.4,0.2-0.8,0.4-1.2,0.6c0.1-1.2-0.4-1.6-1.4-1c-1.2,0.8-2.4,1.7-3.4,2.7
			c-1.8,1.8-3.4,3.8-5.1,5.7c-1-0.4-0.5-1.1-0.3-1.8c0,0,0.1,0,0.1,0c0,0,0.1,0.1,0.1,0.1c0.4-0.2,0.9-0.2,1.1-0.5
			c1.6-1.6,3.1-3.3,4.7-4.9c0.8-0.7,1.7-1.4,2.6-1.9C238.2,77,239,77.4,239.7,78.6z"/>
		<path class="st0" d="M180.2,91.3c0.2-0.2,0.5-0.3,0.7-0.5c0.6,0.1,1.4,0.5,1.9,0.3c1.4-0.7,2.7-1.5,3.8-2.6
			c1.9-1.8,3.5-3.7,5.3-5.6c0.3-0.3,0.6-0.8,1-1.4c0.1,0.6,0.2,0.8,0.1,0.9c-2.4,2.5-4.8,5.1-7.3,7.6c-0.8,0.8-1.9,1.4-3,1.7
			C182.1,92,181.1,91.5,180.2,91.3z"/>
		<path class="st0" d="M219.5,86.7c-0.2-0.3-0.5-0.6-0.7-1c0.3-0.3,0.6-0.5,0.9-0.8c0.2,0,0.4,0,0.6,0.1c0-0.2,0-0.4,0-0.6
			c0,0,0,0,0,0c0.3-0.2,0.7-0.3,1-0.6c1.6-1.6,3-3.3,4.7-4.9c0.8-0.8,1.8-1.7,3.2-1.4c-0.1,0.2-0.2,0.4-0.3,0.5
			c-1,0.5-2.2,0.9-3,1.6c-1.9,1.9-3.6,3.9-5.3,5.9C220.2,85.9,219.8,86.3,219.5,86.7z"/>
		<path class="st0" d="M233.8,91.3c0.1-0.2,0.3-0.4,0.4-0.7c0.1-0.3,0.2-0.6,0.4-0.9c0,1.7,0.7,2.2,2,1.2c2.2-1.8,4.2-3.8,6.2-5.7
			c0.3-0.3,0.6-0.7,1-1.3c0.1,0.6,0.2,0.7,0.1,0.8c-2.3,2.2-4.5,4.6-6.9,6.7C236.2,92.2,234.9,92.5,233.8,91.3z"/>
		<path class="st0" d="M124.9,66.1c0,0.7,0,1.4,0,2.2c0,0.3,0.2,0.7,0.2,1c-2.6-3.7-1.9-8.6,1.6-11.7c0,0.1,0,0.3,0.1,0.4
			C124.6,60.3,124,63,124.9,66.1z"/>
		<path class="st0" d="M168.9,67c0.2,0.3,0.8,0.8,0.9,1.4c0.2,0.9-0.9,2.2-1.7,2c-0.5-0.1-1.1-0.7-1.2-1.2
			C166.5,68.2,167.5,67.1,168.9,67z"/>
		<path class="st0" d="M201.1,85.7c0,0.5-0.1,1-0.1,1.5c-0.3,0.1-0.7,0.2-1,0.4c-1.6,1.3-3,2.8-4.7,3.9c-1.5,1-2.7,0.6-3.6-0.8
			c0.5,0.2,1,0.5,1.5,0.7c1-0.4,2.2-0.6,3-1.3C198,88.8,199.5,87.2,201.1,85.7z"/>
		<path class="st0" d="M193.2,67.9c0,1.5-0.9,2.5-1.8,2.5c-0.9-0.1-1.2-0.6-1.1-1.5c0-1.1,0.6-1.8,1.7-1.8
			C192.5,67.1,193,67.7,193.2,67.9z"/>
		<path class="st0" d="M221.2,77.9c-0.4,0.6-0.8,1.3-1.2,1.9c0.1-0.5,0.1-1.1,0.2-1.6c-0.6,0-1.4-0.2-1.8,0.1
			c-1.4,1-2.7,2.1-4.1,3.2c-0.1,0-0.3,0-0.4,0l-0.1-0.1c1.3-1.2,2.5-2.5,3.9-3.5C218.8,77.2,220.1,77,221.2,77.9z"/>
		<path class="st0" d="M148.7,90.2c2.5-2,5-3.9,7.8-6.1c-2.5,2.8-4.5,5.4-7.7,6.9C148.7,90.7,148.7,90.4,148.7,90.2z"/>
		<path class="st0" d="M108.5,83.4c-0.3-0.5-0.6-0.9-0.8-1.4c1.4,0.1,2.9,0.5,4.2,0.4c0.7-0.1,1.2-1.1,1.8-1.6c0,0.1,0,0.4,0,0.8
			c-0.2,2-0.2,2-2.2,2C110.5,83.5,109.5,83.5,108.5,83.4z"/>
		<path class="st0" d="M84.1,68.4c0.2,0.3,0.5,0.6,0.5,0.9c0,3.2,0,6.4,0,9.6c0,0.3-0.3,0.6-0.5,0.9C84.1,76,84.1,72.2,84.1,68.4z"
			/>
		<path class="st0" d="M86.3,73.8c0-0.2,0-0.4,0-0.6c3.2,0,6.5,0,9.7,0c0.1,0.3,0.2,0.6,0.3,0.9c-0.2,0-0.4-0.1-0.6-0.1
			c-2.8,0-5.7,0-8.5,0c-0.2,0-0.4,0-0.6,0C86.5,73.9,86.4,73.9,86.3,73.8z"/>
		<path class="st0" d="M184.3,78.6c0.3,1.8-0.8,3-2,4c0.1-0.3,0.3-0.6,0.4-1c-0.1-0.1-0.1-0.1-0.2-0.2c-0.6,0.5-1.2,1.1-1.8,1.6
			c-0.1-0.1-0.2-0.2-0.3-0.3C181.7,81.4,183,80,184.3,78.6z"/>
		<path class="st0" d="M214.1,81.9c-1.9,2.2-3.8,4.4-5.7,6.6c-0.1-0.1-0.3-0.2-0.4-0.4c1.8-2,3.6-4,5.4-6
			C213.6,82,213.9,81.9,214.1,81.9z"/>
		<path class="st0" d="M201.3,91c0.3,0,0.6,0,1-0.1c0.7,0.7,1.5,0.4,2.1-0.1c1.1-0.7,2.1-1.6,3.2-2.4c-0.5,1.5-3.4,3.7-4.7,3.5
			C202.3,91.9,201.8,91.4,201.3,91z"/>
		<path class="st0" d="M86.1,73.2c-0.1-0.4-0.4-0.8-0.4-1.2c0-1.5,0.1-3-0.1-4.5c0-0.5-0.5-1-0.8-1.6c0.9,0,1.7-0.1,2.6-0.1
			C86,66.1,86,67.1,86,68.2C86.1,69.8,86.1,71.5,86.1,73.2z"/>
		<path class="st0" d="M169,91.7c0.2-0.2,0.4-0.3,0.6-0.5c1.1-0.1,2.2-0.3,3.2-0.4C171.9,91.9,170.5,92.3,169,91.7z"/>
		<path class="st0" d="M147,91.2c-1.1,0-2.3,0-3.4,0c-0.4,0-0.8-0.3-1.1-0.5c1.7,0,3.4-0.1,5.1-0.1C147.4,90.7,147.2,91,147,91.2
			L147,91.2z"/>
		<path class="st0" d="M66.4,66.7c1.7,0,3.4,0,5.1,0c-0.9,0-1.7,0.1-2.6,0c-1.4-0.1-2.7,0.2-3.5,1.6c0.1-0.4,0.2-0.9,0.4-1.3
			C66,66.9,66.2,66.8,66.4,66.7C66.3,66.7,66.4,66.7,66.4,66.7z"/>
		<path class="st0" d="M87.2,74c2.8,0,5.7,0,8.5,0C92.9,74,90,74,87.2,74z"/>
		<path class="st0" d="M86.1,82c-0.1,0.1-0.2,0.2-0.3,0.4c0.1-2.7,0.2-5.5,0.3-8.2C86.1,76.7,86.1,79.4,86.1,82z"/>
		<path class="st0" d="M175.9,87.9c0.9-0.9,1.7-1.8,2.6-2.7c0.1,0.1,0.2,0.2,0.3,0.3c-0.9,0.9-1.8,1.8-2.6,2.6
			C176,88,176,88,175.9,87.9z"/>
		<path class="st0" d="M144.2,92.3c0.9-0.4,1.9-0.7,2.8-1.1c0,0,0,0,0,0c0.3,0,0.6,0.1,0.9,0.1C146.7,91.6,145.4,91.9,144.2,92.3z"
			/>
		<path class="st0" d="M221.4,81.2c0-1,0.1-1.9,0.1-2.9C221.5,79.3,221.4,80.2,221.4,81.2z"/>
		<path class="st0" d="M176.1,88.1c-0.7,0.6-1.3,1.3-2,1.9c-0.1-0.1-0.2-0.2-0.3-0.3c0.7-0.6,1.3-1.2,2-1.8
			C176,88,176,88,176.1,88.1z"/>
		<path class="st0" d="M74,83.4c0.3-0.1,0.6-0.3,0.8-0.4c0.4,0,0.8,0.1,1.3,0.1c0,0.1,0,0.3,0,0.4C75.4,83.5,74.7,83.4,74,83.4z"/>
		<path class="st0" d="M147.9,91.3c-0.3,0-0.6-0.1-0.9-0.1c0.2-0.2,0.4-0.4,0.6-0.6c0.4-0.1,0.7-0.2,1.1-0.4c0,0.2,0.1,0.5,0.1,0.7
			c0,0,0,0,0,0C148.5,91,148.2,91.2,147.9,91.3C147.9,91.3,147.9,91.3,147.9,91.3z"/>
		<path class="st0" d="M71.5,82.9c0.2,0.2,0.4,0.3,0.6,0.5c-0.5,0-1,0.1-1.5,0.1c0-0.1-0.1-0.2-0.1-0.4C70.8,83.1,71.2,83,71.5,82.9
			z"/>
		<path class="st0" d="M79.7,67.4c0.2,0,0.4-0.1,0.6-0.1c0,0.4,0,0.8,0,1.2c-0.1,0-0.1,0-0.2,0C79.9,68.1,79.8,67.7,79.7,67.4z"/>
		<path class="st0" d="M107.7,82.1c-0.1-0.4-0.2-0.7-0.3-1.1C107.5,81.3,107.6,81.7,107.7,82.1z"/>
		<path class="st0" d="M202.5,84c-0.2,0.2-0.4,0.4-0.5,0.6C202.2,84.4,202.3,84.2,202.5,84z"/>
		<path class="st0" d="M202,84.6c-0.2,0.2-0.4,0.4-0.5,0.6C201.6,85,201.8,84.8,202,84.6z"/>
		<path class="st0" d="M214.1,81.9c-0.2,0.1-0.5,0.1-0.7,0.2c0.2-0.2,0.4-0.4,0.6-0.6c0,0,0.1,0.1,0.1,0.1
			C214,81.6,214.1,81.8,214.1,81.9L214.1,81.9z"/>
		<path class="st0" d="M201,90.3c0.1,0.2,0.2,0.4,0.3,0.7C201.2,90.8,201.1,90.5,201,90.3z"/>
		<path class="st0" d="M147.9,91.3c0.3-0.1,0.5-0.2,0.8-0.4C148.5,91,148.2,91.2,147.9,91.3z"/>
		<path class="st0" d="M202.9,83.5c-0.1,0.2-0.3,0.3-0.4,0.5C202.6,83.8,202.7,83.7,202.9,83.5z"/>
		<path class="st0" d="M201.5,85.2c-0.1,0.2-0.3,0.3-0.4,0.5C201.2,85.5,201.3,85.4,201.5,85.2z"/>
		<path class="st0" d="M173.2,77.5c-0.1,0.2-0.3,0.3-0.4,0.5C173,77.8,173.1,77.7,173.2,77.5z"/>
		<path class="st0" d="M181,90.9c0-0.2-0.1-0.4-0.1-0.5C180.9,90.5,181,90.7,181,90.9z"/>
		<path class="st0" d="M218.9,87.5c0.1-0.2,0.3-0.3,0.4-0.5C219.1,87.2,219,87.3,218.9,87.5z"/>
		<path class="st0" d="M179.9,90.9c0.1,0.1,0.2,0.3,0.4,0.4C180.1,91.2,180,91,179.9,90.9z"/>
		<path class="st0" d="M238.2,79.8c-0.1,0.2-0.3,0.4-0.4,0.6C237.9,80.1,238.1,79.9,238.2,79.8z"/>
		<path class="st0" d="M156.7,91.2c0.1,0.1,0.3,0.3,0.4,0.4C157,91.5,156.8,91.3,156.7,91.2z"/>
		<path class="st0" d="M184.8,78c-0.1,0.1-0.2,0.2-0.2,0.4C184.6,78.2,184.7,78.1,184.8,78z"/>
		<path class="st0" d="M221.5,78.3c-0.1-0.1-0.1-0.2-0.2-0.3C221.4,78.1,221.4,78.2,221.5,78.3z"/>
		<path class="st0" d="M184.6,78.3c-0.1,0.1-0.2,0.2-0.3,0.3C184.4,78.5,184.5,78.4,184.6,78.3z"/>
		<path class="st0" d="M239.9,78.9c-0.1-0.1-0.1-0.2-0.2-0.3C239.8,78.7,239.8,78.8,239.9,78.9z"/>
		<path class="st0" d="M172.9,78c-0.1,0.1-0.2,0.2-0.3,0.4C172.7,78.2,172.8,78.1,172.9,78z"/>
		<path class="st0" d="M218.6,87.8c0.1-0.1,0.2-0.2,0.3-0.3C218.8,87.6,218.7,87.7,218.6,87.8z"/>
		<path class="st0" d="M128.4,88c0.1,0,0.2,0.1,0.4,0.1C128.6,88,128.5,88,128.4,88z"/>
		<path class="st0" d="M218.1,88.5c0.1-0.1,0.2-0.2,0.2-0.4C218.3,88.2,218.2,88.3,218.1,88.5z"/>
		<path class="st0" d="M218,88.6c0-0.1-0.1-0.1-0.1-0.2c0.1,0,0.1,0,0.2,0.1C218.1,88.6,218.1,88.6,218,88.6z"/>
		<path class="st0" d="M214.1,81.9c0-0.1-0.1-0.2-0.1-0.4c0.1,0,0.3,0,0.4,0C214.3,81.7,214.2,81.8,214.1,81.9z"/>
		<path class="st0" d="M238.5,79.4c-0.1,0.1-0.2,0.3-0.3,0.4C238.3,79.6,238.4,79.5,238.5,79.4z"/>
		<path class="st0" d="M203.7,82.4c0,0.1,0.1,0.1,0.1,0.2c-0.1,0-0.1,0-0.2,0C203.6,82.4,203.7,82.4,203.7,82.4z"/>
		<path class="st0" d="M203.6,82.5c-0.1,0.1-0.1,0.2-0.2,0.4C203.4,82.8,203.5,82.6,203.6,82.5z"/>
		<path class="st0" d="M86.3,73.8c0.1,0.1,0.2,0.1,0.3,0.2c-0.1,0-0.2,0-0.3,0C86.3,74,86.3,73.9,86.3,73.8z"/>
		<path class="st0" d="M203.4,82.9c-0.1,0.1-0.2,0.2-0.3,0.3C203.2,83.1,203.3,83,203.4,82.9z"/>
		<path class="st0" d="M233.5,90.9c0.1,0.1,0.2,0.2,0.3,0.4C233.7,91.2,233.6,91.1,233.5,90.9z"/>
		<path class="st0" d="M185.5,77.6c-0.1,0-0.3,0.1-0.4,0.1C185.2,77.6,185.4,77.6,185.5,77.6z"/>
		<path class="st0" d="M185.1,77.7c-0.1,0.1-0.2,0.2-0.3,0.3C184.9,77.9,185,77.8,185.1,77.7z"/>
		<path class="st0" d="M219.2,87c0.1-0.1,0.2-0.2,0.3-0.3C219.4,86.8,219.3,86.9,219.2,87z"/>
		<path class="st0" d="M145.7,68.4c0.2-0.3,0.5-0.6,0.7-0.9C146.2,67.8,145.9,68.1,145.7,68.4z"/>
		<path class="st0" d="M144.2,70.7c0.2-0.2,0.3-0.4,0.5-0.7C144.5,70.3,144.3,70.5,144.2,70.7z"/>
		<path class="st0" d="M145.2,69.2c0.1-0.2,0.2-0.4,0.4-0.5C145.4,68.8,145.3,69,145.2,69.2z"/>
		<path class="st0" d="M144.9,69.6c0.1-0.1,0.2-0.3,0.3-0.4C145.1,69.3,145,69.5,144.9,69.6z"/>
		<path class="st0" d="M144.6,70c0.1-0.1,0.1-0.2,0.2-0.3C144.7,69.9,144.7,69.9,144.6,70z"/>
	</g>
	<path class="st0" d="M148.1,65.2c0.1-0.1,0.2-0.2,0.2-0.3C148.2,65,148.1,65.1,148.1,65.2z"/>
	<path class="st0" d="M149.2,63.8c0.1-0.1,0.2-0.2,0.3-0.3C149.4,63.6,149.3,63.7,149.2,63.8z"/>
</g>
</svg>

          </div>
          <p>
            <span class="whatsapp-name">The Lilium &amp; The Gazania</span><br /><small
              >Typically replies within a day</small
            >
          </p>
        </div>
        <div class="get-new hide">
          <div id="get-label"></div>
          <div id="get-nama"></div>
        </div>
      </div>
      <div class="home-chat"></div>
      <div class="start-chat">
        <div
          style="
            background-image: url('https://elfsight.com/assets/chats/patterns/whatsapp.png');
          "
          class="WhatsappChat__Component-sc-1wqac52-0 whatsapp-chat-body"
        >
          <div class="WhatsappChat__MessageContainer-sc-1wqac52-1 dAbFpq">
            <div
              style="opacity: 0"
              class="WhatsappDots__Component-pks5bf-0 eJJEeC"
            >
              <div class="WhatsappDots__ComponentInner-pks5bf-1 hFENyl">
                <div
                  class="
                    WhatsappDots__Dot-pks5bf-2 WhatsappDots__DotOne-pks5bf-3
                    ixsrax
                  "
                ></div>
                <div
                  class="
                    WhatsappDots__Dot-pks5bf-2 WhatsappDots__DotTwo-pks5bf-4
                    dRvxoz
                  "
                ></div>
                <div
                  class="
                    WhatsappDots__Dot-pks5bf-2 WhatsappDots__DotThree-pks5bf-5
                    kXBtNt
                  "
                ></div>
              </div>
            </div>
            <div
              style="opacity: 1"
              class="WhatsappChat__Message-sc-1wqac52-4 kAZgZq"
            >
              <div class="WhatsappChat__Author-sc-1wqac52-3 bMIBDo">
                The Lilium &amp; The Gazania
              </div>
              <div class="WhatsappChat__Text-sc-1wqac52-2 iSpIQi">
                Thank you for your interest in The Lilium &amp; The Gazania! 👋<br /><br />What
                question would you have for me?
              </div>
              <div class="WhatsappChat__Time-sc-1wqac52-5 cqCDVm">
                {{ datetime }}
                <!-- <?php $dt=new DateTime("now", new DateTimeZone('Asia/Singapore')); echo $dt->format('H:i');
                ?> -->
              </div>
            </div>
          </div>
        </div>
        <div class="blanter-msg">
          <textarea
            id="chat-input"
            placeholder="Write a response"
            maxlength="120"
            row="1"
          ></textarea>
          <a id="send-it" href="javascript:void;"
            ><svg viewBox="0 0 448 448">
              <path
                d="M.213 32L0 181.333 320 224 0 266.667.213 416 448 224z"
              /></svg
          ></a>
        </div>
      </div>
      <div id="get-number"></div>
      <a class="close-chat" href="javascript:void">×</a>
    </div>
    
  </div>
</template>
<script>
/* eslint-disable */
</script>

<script>
export default {
  data() {
    return {
      datetime: '',
    }
  },
  mounted() {
    $(document).on('click', '#send-it', function () {
      var a = document.getElementById('chat-input')
      if ('' != a.value) {
        var b = $('#get-number').text(),
          c = document.getElementById('chat-input').value,
          d = 'https://web.whatsapp.com/send',
          e = b,
          f = '&text=' + c
        if (
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
        )
          var d = 'whatsapp://send'
        var g = d + '?phone=+6561003337' + e + f
        window.open(g, '_blank')
      }
    }),
      $(document).on('click', '.informasi', function () {
        ;(document.getElementById('get-number').innerHTML = $(this)
          .children('.my-number')
          .text()),
          $('.start-chat,.get-new').addClass('show').removeClass('hide'),
          $('.home-chat,.head-home').addClass('hide').removeClass('show'),
          (document.getElementById('get-nama').innerHTML = $(this)
            .children('.info-chat')
            .children('.chat-nama')
            .text()),
          (document.getElementById('get-label').innerHTML = $(this)
            .children('.info-chat')
            .children('.chat-label')
            .text())
      }),
      $(document).on('click', '.close-chat', function () {
        $('#whatsapp-chat').addClass('hide').removeClass('show')
      }),
      $(document).on('click', '.blantershow-chat', function () {
        $('#whatsapp-chat').addClass('show').removeClass('hide')
      })
    $(document).ready(function () {
      if (window.matchMedia('(max-width: 767px)').matches) {
      } else {
        var timer = setInterval(function () {
          $('.blantershow-chat').click()
          clearInterval(timer)
        }, 3000)
      }
    })
  },

  created() {
    let d = new Date()
    this.datetime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
  },
}
</script>

<style scoped>
.start-chat .blanter-msg {
  display: flex;
}
.whatsapp-name {
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 0;
  margin-bottom: 0;
  line-height: 0.5;
}
#whatsapp-chat {
  box-sizing: border-box !important;
  outline: 0 !important;
  position: fixed;
  width: 350px;
  border-radius: 10px;
  box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
  bottom: 90px;
  right: 30px;
  overflow: hidden;
  z-index: 99;
  animation-name: showchat;
  animation-duration: 1s;
  transform: scale(1);
}
a.blantershow-chat {
  background: #fff;
  color: #404040;
  position: fixed;
  display: flex;
  font-weight: 400;
  justify-content: space-between;
  z-index: 98;
  bottom: 25px;
  right: 30px;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
}
a.blantershow-chat svg {
  transform: scale(1.2);
  margin: 0 10px 0 0;
}
.header-chat {
  background: #009688;
  background: #095e54;
  color: #fff;
  padding: 20px;
}
.header-chat h3 {
  margin: 0 0 10px;
}
.header-chat p {
  font-size: 14px;
  line-height: 1.7;
  margin: 0;
}
.info-avatar {
  position: relative;
  width: 80%;
  margin-bottom: 1rem;
}
.info-avatar img {
  border-radius: 100%;
  width: 50px;
  float: left;
  margin: 0 10px 0 0;
}
a.informasi {
  padding: 20px;
  display: block;
  overflow: hidden;
  animation-name: showhide;
  animation-duration: 0.5s;
}
a.informasi:hover {
  background: #f1f1f1;
}
.info-chat span {
  display: block;
}
#get-label,
span.chat-label {
  font-size: 12px;
  color: #888;
}
#get-nama,
span.chat-nama {
  margin: 5px 0 0;
  font-size: 15px;
  font-weight: 700;
  color: #222;
}
#get-label,
#get-nama {
  color: #fff;
}
span.my-number {
  display: none;
}
textarea#chat-input {
  border: none;
  font-family: Arial, sans-serif;
  width: 100%;
  height: 2.5rem;
  outline: 0;
  resize: none;
  padding: 10px;
  font-size: 14px;
  overflow-y: hidden;
}
a#send-it {
  width: 40px;
  font-weight: 700;
  padding: 3px 10px;
  background: #eee;
}
a#send-it svg {
  fill: #a6a6a6;
  height: 100%;
  width: 100%;
}
.first-msg {
  background: 0 0;
  padding: 30px;
  text-align: center;
  color: #333;
  font-size: 14.2px;
  line-height: 1.7;
  border-radius: 10px;
  padding: 15px 20px;
  display: inline-block;
}
#get-number {
  display: none;
}
a.close-chat {
  position: absolute;
  top: 5px;
  right: 15px;
  color: #fff;
  font-size: 30px;
}
@keyframes ZpjSY {
  0% {
    background-color: #b6b5ba;
  }
  15% {
    background-color: #111;
  }
  25% {
    background-color: #b6b5ba;
  }
}
@keyframes hPhMsj {
  15% {
    background-color: #b6b5ba;
  }
  25% {
    background-color: #111;
  }
  35% {
    background-color: #b6b5ba;
  }
}
@keyframes iUMejp {
  25% {
    background-color: #b6b5ba;
  }
  35% {
    background-color: #111;
  }
  45% {
    background-color: #b6b5ba;
  }
}
@keyframes showhide {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
}
@keyframes showchat {
  from {
    transform: scale(0);
    opacity: 0;
  }
}
@media screen and (max-width: 480px) {
  #whatsapp-chat {
    width: auto;
    left: 5%;
    right: 5%;
    font-size: 80%;
  }
}
.hide {
  display: none;
  animation-name: showhide;
  animation-duration: 0.5s;
  transform: scale(1);
  opacity: 1;
}
.show {
  display: block;
  animation-name: showhide;
  animation-duration: 0.5s;
  transform: scale(1);
  opacity: 1;
}
.whatsapp-message-container {
  display: flex;
  z-index: 1;
}
.whatsapp-message {
  padding: 7px 14px 6px;
  background-color: #fff;
  border-radius: 0 8px 8px;
  position: relative;
  transition: all 0.3s ease 0s;
  opacity: 0;
  transform-origin: center top 0;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.13) 0 1px 0.5px;
  margin-top: 4px;
  margin-left: -54px;
  max-width: calc(100% - 66px);
}
.whatsapp-chat-body {
  padding: 20px 20px 20px 10px;
  background-color: #e6ddd4;
  position: relative;
}
.dAbFpq {
  display: flex;
  z-index: 1;
}
.eJJEeC {
  background-color: #fff;
  width: 52.5px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
  margin-left: 10px;
  opacity: 0;
  transition: all 0.1s ease 0s;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.13) 0 1px 0.5px;
}
.hFENyl {
  position: relative;
  display: flex;
}
.ixsrax {
  height: 5px;
  width: 5px;
  margin: 0 2px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  top: 0;
  background-color: #9e9da2;
  animation-name: ZpjSY;
}
.dRvxoz {
  height: 5px;
  width: 5px;
  margin: 0 2px;
  background-color: #b6b5ba;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  top: 0;
  animation-name: hPhMsj;
}
.kAZgZq {
  padding: 7px 14px 6px;
  background-color: #fff;
  border-radius: 0 8px 8px;
  position: relative;
  transition: all 0.3s ease 0s;
  opacity: 0;
  transform-origin: center top 0;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.13) 0 1px 0.5px;
  margin-top: 4px;
  margin-left: -54px;
  max-width: calc(100% - 66px);
}
.bMIBDo {
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.4);
}
.iSpIQi {
  font-size: 14px;
  line-height: 19px;
  margin-top: 4px;
  color: #111;
}
.iSpIQi {
  font-size: 14px;
  line-height: 19px;
  margin-top: 4px;
  color: #111;
}
.cqCDVm {
  text-align: right;
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  color: rgba(17, 17, 17, 0.5);
  margin-right: -8px;
  margin-bottom: -4px;
}
#chat-input:focus {
  background: #fff !important;
}
#chat-input {
  margin-bottom: 0 !important;
}
</style>
