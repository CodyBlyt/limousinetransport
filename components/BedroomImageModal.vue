<template>
  <div class="grid grid-cols-2 gap-2 sm:gap-6 sm:grid-cols-3">
    <div
      v-for="(bedRoom, index) in bedRooms"
      :key="index"
      class="space-y-1 cursor-pointer"
      @click="toggleModal(bedRoom.url)"
    >
      <img :src="imageSource(bedRoom.url)" alt="" class="mx-auto rounded  w-2/3" />
      <p class="text-center">{{ bedRoom.title }}</p>
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
    image: { type: String, default: '' },
    bedRoomProp: { type: Array, default: () => [] },
  },

  data() {
    return {
      showModal: false,
      bedRooms: this.bedRoomProp,
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
      return require(`~/assets/img/${url}`)
    },
  },
}
</script>
