<template>
  <base-card>
    <h2>Filter if u want</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    // vì bind với DOM nên hàm này nhận một tham số event mặc định
    setFilter(event) {
      // truy cập vào id của input
      const inputId = event.target.id;
      // kiểm tra xem input có checked hay không
      const isActive = event.target.checked;
      // spread operator dùng để sao chép mảng filters sau đó ghi đè mảng này
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      console.log('đây là []: ', inputId, ': ', isActive);
      console.log('updatedFilters: ',updatedFilters);
      this.filters = updatedFilters;
      // truyền dữ liệu này lên component cha
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>