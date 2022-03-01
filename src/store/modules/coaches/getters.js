export default {
    coaches(state) {
        return state.coaches;
    },
    // getter này trả về đúng nếu có dữ liệu trong coaches state và ngược lại
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0;
    },
    isCoach(_, getters, _2, rootGetters) {
        const coaches = getters.coaches;
        const userId = rootGetters.userId;
        return coaches.some(coach => coach.id === userId);
    }
}