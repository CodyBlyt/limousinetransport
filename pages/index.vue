<template>

  <div>
    <div class="py-12 select-none bg-white">
      <HomeMainBanner />
      <section>
        <hr>
        <div class="py-6 bg-white">
          <div class="text-center">
            <h4 class="text-xl font-medium ">News Update:</h4>
           
          </div>
          <div class="max-w-6xl px-4 mx-auto prose text-gray-800">
            <div class="max-w-2xl px-4 mx-auto ">
              <ul>
                <li>
                  <NuxtLink to="/book-an-appointment" class="!text-theme-600"
                    >Heavy traffic is expected at land checkpoints starting Friday, 17 Nov 2017</NuxtLink
                  >
                 
                </li>
                <li>
                  
                  <NuxtLink to="/balance-units-chart" class="!text-theme-600 ">
                    Thumbprint scanning to be extended to car travellers at Tuas, Woodlands checkpoints, 25 Sep 2017
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    <hr>
      <div class="max-w-6xl px-4 mx-auto prose text-justify">

        <img class="mr-4" border="0" width="485px" height="150px"  align="left" src="~assets/img/home/singapore.jpg" /> 
				<div class="work_description" style="font-size:12px;">
				
					<h3 class="">Singapore</h3>
					
					<p >Singapore, also known as the Lion City is an island city-state off southern Malaysia. Founded by Sir Thomas Stamford Raffles who was a British statesman, Lieutenant-Governor of British Java and Governor-General of Bencoolen. Since Singapore's independence in 1965, it has become one of the world's most prosperous country and busiest port. Singapore is a multicultural country and famous for delicious traditional food.
            <br><br>Explore Singapore with our luxurious limousine vehicles<a href= "#" class="links" style="color:#C24641;">here</a>.</p>

				</div>

				<hr>

        <img class="sm_work_img" border="0"   align="left" src="~assets/img/home/kl.jpg" /> 
				<div class="work_description" style="font-size:12px;">
				
					<h3>Kuala Lumpur</h3>
					
					<p>Kuala Lumpur, more commonly known as KL is the capital of Malaysia. It is one of the fastest growing metropolitan region in South East Asia. As the heart of Malaysia, KL has been seen blooming with skyscrapers and advancing science park. KL International Airport is the largest and busiest airport in Malaysia. With our limousine services, guest will be able to explore into Greater KL, Malacca, Genting Highlands, Cameron Highlands and other cities throughout West Malaysia.<br><br>Take a look at our limousine vehicles <a href= "#" class="links" style="color:#C24641;">here</a> to bring you and your guest comfortably around Kuala Lumpur.</p>
					

				</div>

        <hr>
        
        <img class="sm_work_img" border="0" align="left" src="~assets/img/home/malacca.jpg" /> 
				<div class="work_description" style="font-size:12px;">
				
					<h3 style="font-size:18px;">Malacca</h3>
					
					<p>Malacca, is a living museum full of colours and wonders. If you love serenity and looking forward to living in history, Malacca is a place to visit with style. Located in the southern region of Peninsular Malaysia, it takes 3 hours by road from Singapore, and 3 hours from Kuala Lumpur. Take a walk at the Straits of Malacca during sunset with your loved ones, and indulge in ravishing food delight afterwards. Walk the history and visit as many museums as you can.</p>
					<p>Feel free to visit Malacca in style with our <a href= "#" class="links" style="color:#C24641;">limo</a></p>

				</div>

        <hr>

        <img class="sm_work_img" border="0" align="left" src="~assets/img/home/johor.jpg" /> 
				<div class="work_description" style="font-size:12px;">
				
					<h3 style="font-size:18px;">Johor</h3>
					
					<p>Johor Darul Ta'zim is like a sister of Malacca. The royalties and the land itself have a very close history with Malacca makes it the best sequel of history ride. Modern and stylish, friendly Johorians will welcome you with smile and there are many to see. Johor is never too boring and always in tune for many kinds of excitement, be it history, shopping, wonderland (they have Legoland and Hello Kitty Land, to name a few!) and nature adventures.</p>
					
					<p>Book a trip to Johor with us <a href= "#" class="links" style="color:#C24641;">here</a>.</p>
					
				</div>

        <hr>

        
        <div style="padding:30px 0 35px;text-align:center;">

			<div style="font-size:22px;font-color:#444;font-family:Georgia,sans-serif;line-height:34px;margin-bottom:15px;">

			Trusted by the world's most respected brands.<br>
			The top choice for your limousine transportation needs.
      <img class="center" border="0" src="~assets/img/home/logos-companies-bw.png" /> 







      

			</div>

		</div>


			</div>

  </div>
  
</template>

<script>
export default {
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()} - ${current.getMonth()+1} - ${current.getFullYear()}`;
      return date;
    }
  }
};
</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.nobull {
  list-style-type: none;
 }
</style>