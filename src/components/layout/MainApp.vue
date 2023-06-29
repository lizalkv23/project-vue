<template>
  <section>
    <div class="container">
      <div class="gallery">
        <div
          v-for="card in cards"
          :key="card.id"
          class="card"
          :style="{ backgroundColor: card.backgroundColor }"
        >
          <div class="card-image">
            <img :src="card.image" alt="Card Image" />
          </div>
          <div class="card-caption">
            {{ card.caption }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import seaImage from '@/assets/sea.jpg'
import sea1Image from '@/assets/sea1.jpg'
import sea11Image from '@/assets/sea11.jpg'
import sea12Image from '@/assets/sea12.jpg'
import sea13Image from '@/assets/sea13.jpg'
export default {
  data() {
    return {
      cards: [
        { id: 1, image: seaImage, caption: 'Sea' },
        { id: 2, image: sea1Image, caption: 'Sea' },
        { id: 3, image: sea11Image, caption: 'Sea' },
        { id: 5, image: sea13Image, caption: 'Sea' },
        { id: 4, image: sea12Image, caption: 'Sea' },
        { id: 7, image: sea11Image, caption: 'Sea' },
        { id: 6, image: sea1Image, caption: 'Sea' },
        { id: 67, image: sea12Image, caption: 'Sea' },
        { id: 8, image: sea13Image, caption: 'Sea' }
      ]
    }
  },
  methods: {
    generateRandomColor() {
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      return `rgb(${r}, ${g}, ${b})`
    }
  },
  created() {
    this.cards.forEach((card) => {
      card.backgroundColor = this.generateRandomColor()
    })
  }
}
</script>

<style scoped>
main {
  margin-top: 60px;
  padding: 1.5625rem;
  transition: margin-left 0.3s;
}

main.shifted {
  margin-left: 275px;
}
.container {
}
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}

.card {
  padding: 10px;
  border-radius: 8px;
}
.card-image {
  padding-bottom: 50%;
  position: relative;
}
.card-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-caption {
  margin-top: 10px;
  text-align: center;
  color: #e9e6e6;
}
</style>
