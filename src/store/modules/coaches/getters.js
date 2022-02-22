export default {
    coaches(state) {
        return state.coaches;
    },
    // getter này trả về đúng nếu có dữ liệu trong coaches state và ngược lại
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0;
    }
}