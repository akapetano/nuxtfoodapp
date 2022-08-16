<template>
  <div>
    <main class="container">
      <section
        class="image"
        :style="`background: url(/${currentItem.img}) no-repeat center center`"
      ></section>

      <section class="details">
        <h1>{{ currentItem.item }}</h1>

        <h3>Price: ${{ currentItem.price.toFixed(2) }}</h3>

        <div class="quantity">
          <input v-model="count" type="number" min="1" />
          <button class="primary">Add to Cart - ${{ combinedPrice }}</button>
        </div>

        <fieldset v-if="currentItem.options">
          <legend><h3>Options</h3></legend>
          <div v-for="option in currentItem.options" :key="option">
            <input
              :id="option"
              v-model="itemOptions"
              type="radio"
              name="option"
              :value="option"
            />
          </div>
        </fieldset>
      </section>

      <section class="options">
        <h3>Description</h3>
        <p>{{ currentItem.description }}</p>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params.id,
      count: 1,
      itemOptions: '',
      itemAddons: [],
      itemSizeAndCost: [],
    }
  },
  computed: {
    ...mapState(['fooddata']),
    currentItem() {
      let result

      for (let i = 0; i < this.fooddata.length; i++) {
        for (let j = 0; j < this.fooddata[i].menu.length; j++) {
          if (this.fooddata[i].menu[j].id === this.id) {
            result = this.fooddata[i].menu[j]
            break
          }
        }
      }

      return result
    },
    combinedPrice() {
      const total = this.count * this.currentItem.price
      return total.toFixed(2)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 400px 1fr;
  row-gap: 60px;
  column-gap: 60px;
  line-height: 2;
}

.image {
  grid-area: 1 / 1 / 2/ 2;
  background-size: cover;
}

.details {
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
}

.options {
  grid-area: 2 / 1 / 3 / 2;
}
</style>