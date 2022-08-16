<template>
  <main class="container">
    <AppHeader />
    <AppRestaurantInfo :datasource="fooddata" />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '@/components/AppHeader.vue'
import AppRestaurantInfo from '@/components/AppRestaurantInfo.vue'

export default {
  components: {
    AppHeader,
    AppRestaurantInfo,
  },
  computed: {
    ...mapState(['fooddata']),
  },
}
</script>
