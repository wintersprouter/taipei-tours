<template>
  <div>
    <div class="card">
      <div class="card-cover">
        <div class="card-cover-title">{{ attraction.name }}</div>

        <button
          v-if="attraction.isFavorited"
          type="button"
          class="button-unlike"
          @click.stop.prevent="deleteFavorite(attraction.id)"
          :disabled="isProcessing"
        >
          <svg
            class="button-unlike-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              d="M91.6 13A28.7 28.7 0 0 0 51 13l-1 1-1-1A28.7 28.7 0 0 0 8.4 53.8l1 1L50 95.3l40.5-40.6 1-1a28.6 28.6 0 0 0 0-40.6z"
            />
          </svg>
        </button>
        <button
          v-else
          type="button"
          class="button-like"
          @click.stop.prevent="addFavorite(attraction.id)"
          :disabled="isProcessing"
        >
          <svg
            class="button-like-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              d="M91.6 13A28.7 28.7 0 0 0 51 13l-1 1-1-1A28.7 28.7 0 0 0 8.4 53.8l1 1L50 95.3l40.5-40.6 1-1a28.6 28.6 0 0 0 0-40.6z"
            />
          </svg>
        </button>
        <img
          :src="attraction.images[0].src"
          :alt="attraction.name"
          class="card-cover-img"
        />
      </div>
      <div class="card-content">
        <div class="card-content-text">
          <font-awesome-icon
            icon="map-marker-alt"
            class="card-content-text-icon"
          ></font-awesome-icon>
          {{ attraction.address }}
        </div>
      </div>
      <div class="card-footer">
        <button
          v-if="isFavoritedList"
          class="button-edit"
          type="button"
          :data-id="attraction.id"
          @click="showEditModal"
        >
          Edit
        </button>
        <button
          class="button-more"
          type="button"
          :data-id="attraction.id"
          @click="showModal"
        >
          More
        </button>
        <Modal
          v-show="isModalVisible"
          @close="closeModal"
          :initial-attraction="attraction"
        />
        <EditModal
          v-show="isEditModalVisible"
          @close="closeEditModal"
          :initial-attraction="attraction"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "./Modal.vue";
import EditModal from "./EditModal.vue";
export default {
  name: "Attraction",
  components: {
    Modal,
    EditModal,
  },
  props: {
    initialAttraction: {
      type: Object,
      required: true,
    },
    isFavoritedList: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      attraction: this.initialAttraction,
      isEditModalVisible: false,
      isModalVisible: false,
      isProcessing: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    showEditModal() {
      this.isEditModalVisible = true;
    },
    closeEditModal() {
      this.isEditModalVisible = false;
    },

    async addFavorite() {
      try {
        this.isProcessing = true;
        this.attraction = { ...this.attraction, isFavorited: true };
        let favoritedAttraction = this.attraction;
        this.$emit("after-add-favorite", favoritedAttraction);
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log("error", error);
      }
    },
    async deleteFavorite() {
      try {
        this.isProcessing = true;
        this.attraction = { ...this.attraction, isFavorited: false };
        let favoritedAttraction = this.attraction;
        this.$emit("after-remove-favorite", favoritedAttraction);
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log("error", error);
      }
    },
  },
};
</script>
