<template>
<div class="h-full relative">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :pagination="{ clickable: true }"
      class="w-full h-full min-h-[720px]"
    >

      <swiper-slide>
        <div class="relative w-full h-[720px]">
          <img class="w-full h-full object-cover" src="https://images.pexels.com/photos/69934/firefighters-fire-flames-outside-69934.jpeg" alt="Slide 1">
          <div class="absolute inset-0 bg-black opacity-40 z-[5]"></div>
          <div class="absolute z-[10] top-[20%] left-0 right-0 mx-auto px-4">
            <div class="container mx-auto px-4">
              <div class="relative">
                <div class="border-l-4 border-red-900 bg-gradient-to-r from-red-900 to-transparent p-6 md:p-12 max-w-screen-lg w-full">
                  <div class="relative z-10">
                    <p class="text-2xl md:text-6xl text-white font-bold mb-3 max-w-5xl">Fire Department Outfitter's Demo Website!</p>
                    <p class="text-base text-white font-medium leading-normal md:leading-7 mb-7 md:mb-14 max-w-5xl">
                    Learn amazing skills and dive into an atmosphere of friendship, learning and training when you join the Demoville fire department. We will show you all of the vital skills to caring for the community through the fire service. For more details click the button below to start the process of becoming a member.
                    </p>
                    <a class="bg-white text-red-900 hover:bg-gray-800 hover:text-white font-semibold px-6 py-4" href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide> 

      <swiper-slide>
        <div class="relative w-full h-[720px] transition-all">
          <img class="w-full h-full object-cover" src="https://images.pexels.com/photos/70573/fireman-firefighter-rubble-9-11-70573.jpeg" alt="Slide 2">
          <div class="absolute inset-0 bg-black opacity-40 z-[5]"></div>
          <div class="absolute z-[10] top-[20%] left-0 right-0 mx-auto px-4">
            <div class="container mx-auto px-4">
              <div class="relative">
                <div class="border-l-4 border-red-900 bg-gradient-to-r from-red-900 to-transparent p-6 md:p-12 max-w-screen-lg w-full">
                  <div class="relative z-10">
                    <p class="text-2xl md:text-6xl text-white font-bold mb-3 max-w-5xl">Fire Department Outfitter's Demo Website!</p>
                    <p class="text-base text-white font-medium leading-normal md:leading-7 mb-7 md:mb-14 max-w-5xl">
                    Learn amazing skills and dive into an atmosphere of friendship, learning and training when you join the Demoville fire department. We will show you all of the vital skills to caring for the community through the fire service. For more details click the button below to start the process of becoming a member.
                    </p>
                    <a class="bg-white text-red-900 hover:bg-gray-800 hover:text-white font-semibold px-6 py-4" href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>
<script>
  import { Pagination } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  export default {
    name: 'Hero Section',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
</script>