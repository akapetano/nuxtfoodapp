<template>
    <section class="emptycart">
      <HungryMan />
      <h3>Your cart is empty!</h3>
      <nuxt-link to="/">
        <button class="primary">Fill it up!</button>
      </nuxt-link>
    </section>
  </main>
</template>

<script>
import HungryMan from "@/components/HungryMan.vue";

export default {
  components: {  HungryMan },

}
</script>

<style lang="scss" scoped></style>
