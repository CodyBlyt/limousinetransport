<template>
  <div class="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-6">
    <div
      v-for="(image, index) in imagesProp"
      :key="index"
      class="space-y-1 cursor-pointer"
      @click="toggleModal(image.url)"
    >
      <img :src="imageSource(image.url)" alt="" class="object-cover w-full h-full mx-auto rounded cursor-pointer" />
    </div>

    <div
      v-if="showModal"
      class="
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        justify-center
        items-center
        flex
        overscroll-y-contain
        overflow-auto
      "
    >
      <div
        v-click-outside="externalClick"
        class="relative w-auto my-auto mx-auto max-w-6xl"
      >
        <!--content-->
        <div
          class="
            border-0
            rounded-lg
            shadow-lg
            relative
            flex flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
          "
        >
          <!--body-->
          <div class="relative p-6 flex-auto">
            <img :src="imageSource(imageUrl)" alt="" class="mx-auto rounded" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'LargeModal',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    imagesProp: { type: Array, default: () => [] },
  },

  data() {
    return {
      showModal: false,
      images: this.imagesProp,
      imageUrl: '',
    }
  },
  computed: {},
  methods: {
    toggleModal(imageUrl) {
      this.imageUrl = imageUrl
      this.showModal = !this.showModal
      this.Modal = !this.$emit('isModal', this.Modal)
    },
    externalClick() {
      this.showModal = false
    },
    imageSource(url) {
      return require(`~/assets/img/gallery/${url}`)
    },
  },
}
</script>
