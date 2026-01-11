<template>
  <div class="sidebar widgets">
    <!-- Single Widget -->
    <div class="single-widget search-widget">
      <h4 class="widget-title fw-bold">SEARCH</h4>
      <form action="#">
        <input
          type="text"
          placeholder="Search Product..."
          v-model="selectedData.SearchBy"
          v-on:change="SelectedChange()"
          style="border-radius: 20px"
        />
        <button type="submit">
          <i class="icofont icofont-search"></i>
        </button>
      </form>
    </div>
    <!--Single Widget -->

    <!-- Single Widget -->
    <div class="single-widget widget-categories">
      <h4 class="widget-title fw-bold">PRICE</h4>
      <ul>
        <li class="d-flex align-items-center justify-content-start gap-3">
          <input
            class="form-check-input"
            type="checkbox"
            :value="1"
            :checked="selectedData.SelectedPrice == 1"
            :disabled="
              selectedData.SelectedPrice != 1 && selectedData.SelectedPrice != 0
            "
            @change="CheckboxChange($event, 'Price')"
          />
          <label class="form-check-label mt-1" style="font-size: 10px"
            >Under IDR 3M</label
          >
        </li>
        <li class="d-flex align-items-center justify-content-start gap-3">
          <input
            class="form-check-input"
            type="checkbox"
            :value="2"
            :checked="selectedData.SelectedPrice == 2"
            :disabled="
              selectedData.SelectedPrice != 2 && selectedData.SelectedPrice != 0
            "
            @change="CheckboxChange($event, 'Price')"
          />
          <label class="form-check-label mt-1" style="font-size: 10px"
            >IDR 3M - 5M</label
          >
        </li>
        <li class="d-flex align-items-center justify-content-start gap-3">
          <input
            class="form-check-input"
            type="checkbox"
            :value="3"
            :checked="selectedData.SelectedPrice == 3"
            :disabled="
              selectedData.SelectedPrice != 3 && selectedData.SelectedPrice != 0
            "
            @change="CheckboxChange($event, 'Price')"
          />
          <label class="form-check-label mt-1" style="font-size: 10px"
            >IDR 5M - 10M</label
          >
        </li>
        <li class="d-flex align-items-center justify-content-start gap-3">
          <input
            class="form-check-input"
            type="checkbox"
            :value="4"
            :checked="selectedData.SelectedPrice == 4"
            :disabled="
              selectedData.SelectedPrice != 4 && selectedData.SelectedPrice != 0
            "
            @change="CheckboxChange($event, 'Price')"
          />
          <label class="form-check-label mt-1" style="font-size: 10px"
            >IDR 10M - 20M</label
          >
        </li>
        <li class="d-flex align-items-center justify-content-start gap-3">
          <input
            class="form-check-input"
            type="checkbox"
            :value="5"
            :checked="selectedData.SelectedPrice == 5"
            :disabled="
              selectedData.SelectedPrice != 5 && selectedData.SelectedPrice != 0
            "
            @change="CheckboxChange($event, 'Price')"
          />
          <label class="form-check-label mt-1" style="font-size: 10px"
            >Above 20M</label
          >
        </li>
      </ul>
    </div>
    <!--Single Widget -->

    <!-- Single Widget -->
    <div class="single-widget widget-categories">
      <h4 class="widget-title fw-bold">SHOP BY</h4>
      <ul>
        <li
          v-for="type in shopby"
          :key="type.id"
          class="d-flex align-items-center justify-content-start gap-3"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :value="type.name"
            :checked="selectedData.SelectedType == type.name"
            :disabled="
              selectedData.SelectedType != type.name &&
              selectedData.SelectedType != ''
            "
            @change="CheckboxChange($event, 'Type')"
          />
          <label class="form-check-label mt-1" style="font-size: 10px">{{
            type.name
          }}</label>
        </li>
      </ul>
    </div>
    <!--Single Widget -->

    <!-- Single Widget -->
    <div class="single-widget widget-categories">
      <h4 class="widget-title fw-bold">FILTER BY</h4>
      <ul>
        <li class="d-flex align-items-center justify-content-start gap-3">
          <input
            class="form-check-input"
            type="checkbox"
            value="New Item"
            :checked="selectedData.SelectedFilter == 'New Item'"
            :disabled="
              selectedData.SelectedFilter != 'New Item' &&
              selectedData.SelectedFilter != ''
            "
            @change="CheckboxChange($event, 'Filter')"
          />
          <label class="form-check-label mt-1" style="font-size: 10px">
            New Item
          </label>
        </li>
        <li class="d-flex align-items-center justify-content-start gap-3">
          <input
            class="form-check-input"
            type="checkbox"
            value="Top Sale"
            :checked="selectedData.SelectedFilter == 'Top Sale'"
            :disabled="
              selectedData.SelectedFilter != 'Top Sale' &&
              selectedData.SelectedFilter != ''
            "
            @change="CheckboxChange($event, 'Filter')"
          />
          <label class="form-check-label mt-1" style="font-size: 10px">
            Top Sale
          </label>
        </li>
        <li class="d-flex align-items-center justify-content-start gap-3">
          <input
            class="form-check-input"
            type="checkbox"
            value="Best Sale"
            :checked="selectedData.SelectedFilter == 'Best Sale'"
            :disabled="
              selectedData.SelectedFilter != 'Best Sale' &&
              selectedData.SelectedFilter != ''
            "
            @change="CheckboxChange($event, 'Filter')"
          />
          <label class="form-check-label mt-1" style="font-size: 10px">
            Best Sale
          </label>
        </li>
      </ul>
    </div>
    <!--Single Widget -->

    <!-- Single Widget -->
    <div class="single-widget widget-tags size_widget">
      <h4 class="widget-title fw-bold">SIZES</h4>
      <ul class="single_tags">
        <li v-for="size in sizes" :key="size">
          <input
            class="size-input"
            type="checkbox"
            :id="size"
            :value="size"
            :checked="selectedData.SelectedSize == size"
            @change="CheckboxChange($event, 'Size')"
          />
          <label
            class="size-label"
            :for="size"
            :class="{ active: selectedData.SelectedSize == size }"
            >{{ size }}</label
          >
        </li>
      </ul>
    </div>
    <!--Single Widget -->

    <!-- Single Banner Start -->
    <div class="sidebar-banner">
      <a href="shop.html"
        ><img class="ful" src="/assets/img/banner/portrait-1.png" alt=""
      /></a>
    </div>
    <!-- Single Banner End -->
  </div>
</template>

<script>
export default {
  name: "AppSideBar",
  props: {
    shopby: [],
    sizes: [],
    selected: {
      SelectedBrands: String,
      SelectedType: String,
      SelectedSize: String,
      SelectedFilter: String,
      SelectedPrice: Number,
      SearchBy: String,
    },
  },
  data() {
    return {
      selectedData: this.selected,
    };
  },
  methods: {
    SelectedChange() {
      this.$emit("SelectedChange", this.selectedData);
    },
    CheckboxChange(e, type) {
      console.log(e);
      if (type == "Price") {
        if (e.target.checked) {
          this.selectedData.SelectedPrice = e.target.value;
        } else {
          this.selectedData.SelectedPrice = 0;
        }
      } else if (type == "Type") {
        if (e.target.checked) {
          this.selectedData.SelectedType = e.target.value;
        } else {
          this.selectedData.SelectedType = "";
        }
      } else if (type == "Filter") {
        if (e.target.checked) {
          this.selectedData.SelectedFilter = e.target.value;
        } else {
          this.selectedData.SelectedFilter = "";
        }
      } else if (type == "Size") {
        if (e.target.checked) {
          this.selectedData.SelectedSize = e.target.value;
        } else {
          this.selectedData.SelectedSize = "";
        }
      }
      this.$emit("SelectedChange", this.selectedData);
    },
  },
};
</script>

<style scoped>
/* Sizes: hide the native checkbox and render the label as the visible pill */
.size-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.size-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid #ddd;
  padding: 0 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.12s, color 0.12s, border-color 0.12s,
    transform 0.08s;
  user-select: none;
}

/* Visual checked state when underlying checkbox is checked */
.size-input:checked + .size-label,
.size-label.active {
  background-color: cadetblue;
  color: #fff;
  border-color: cadetblue;
  transform: translateY(-1px);
}

/* focus-visible for keyboard users */
.size-input:focus + .size-label {
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.12);
}
</style>
