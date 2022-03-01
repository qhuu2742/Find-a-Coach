export default {
    registerCoach(state, payload) {
        console.log('payload: ',payload);
        state.coaches.push(payload);
    }
}