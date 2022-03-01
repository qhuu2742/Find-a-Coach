<template>
  <section>
    <base-card>
      <h2>Join us now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },
  methods: {
    // tham số data được nhận từ dữ liệu bên CoachForm.vue component, dùng eimit truyền qua 
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      // replace khác push là nó sẽ không cho ta quay trở lại
      this.$router.replace('/coaches');
    }
  }
};
</script>