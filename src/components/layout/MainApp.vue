<template>
  <section>
    <div class="container">
      <div class="card">
        <div class="gallery">
          <div v-for="card in cards" :key="card.id" class="card" :style="{ backgroundColor: card.backgroundColor }">
            <div class="card-caption absolute">
              {{ card.caption }}
            </div>
            <div class="card-image">
              <img :src="card.image" alt="Card Image" />
            </div>
            <Button label="Show more" severity="secondary" rounded class="button-card block" />
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
export default {
  data() {
    return {
      visibleRight: false,
      cards: [
        { id: 1, image: seaImage, caption: 'CONVERSATION RATE' },
        { id: 2, image: sea1Image, caption: 'AVG. ORDER VALUE' },
        { id: 3, image: sea11Image, caption: 'ORDER QUANTITY' },
        { id: 1, image: seaImage, caption: 'CONVERSATION RATE' },
        { id: 2, image: sea1Image, caption: 'AVG. ORDER VALUE' },
        { id: 3, image: sea11Image, caption: 'ORDER QUANTITY' }
      ]
    }
  }
}
</script>

<style>
main {
  margin-top: 60px;
  padding: 1.5625rem;
  transition: margin-left 0.3s;
}

main.shifted {
  margin-left: 275px;
}

.info {
  border-radius: 8px 0 0 8px !important;
}

.sidebar {
  z-index: 11111111111 !important;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  max-height: 300px;
}

.card {
  padding: 10px;
  border-radius: 8px;
  position: relative;
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

.button-card {
  position: absolute !important;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #42d033 !important;
  border: none !important;
  color: #0f0f0f !important;
}

.button-card :hover {
  color: #3c3c3c !important;
}

.card-caption {
  text-align: center;
  color: #0f0f0f;
  top: 20px;
  right: 50%;
  transform: translate(50%, 50%);
  z-index: 4;
  background-color: #ffffff30;
  border-radius: 20px;
  padding: 5px;
}
</style>
