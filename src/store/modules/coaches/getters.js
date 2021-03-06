export default {
    coaches(state) {
        return state.coaches;
    },
    // getter này trả về true nếu có dữ liệu trong coaches state và ngược lại
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0;
    },
    isCoach(_, getters, _2, rootGetters) {
        const coaches = getters.coaches;
        console.log('getters: ', coaches);
        const userId = rootGetters.userId;
        // hàm some sẽ duyệt tất các phần tử trong mảng xem có phần tử nào phù hợp với điều kiện k, có thì trả về true
        return coaches.some(coach => coach.id === userId);
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
            return true;
        }
        const currentTimeStamp = new Date().getTime();
        return (currentTimeStamp - lastFetch) / 1000 > 60;
    }
}