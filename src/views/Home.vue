<template>
  <div>
    <bounce-loader
      v-bind:loading="isLoading"
      v-bind:color="'#68d391'"
      v-bind:size="100"
    />
    <px-assets-table v-if="!isLoading" v-bind:assets="assets" />
  </div>
</template>
<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable.vue'
export default {
  name: 'Home',
  components: { PxAssetsTable },
  data() {
    return {
      assets: [],
      isLoading: false,
    }
  },
  created() {
    this.isLoading = true
    api
      .getAssets()
      .then((assets) => {
        return (this.assets = assets)
      })
      .finally(() => {
        this.isLoading = false
      })
  },
}
</script>
