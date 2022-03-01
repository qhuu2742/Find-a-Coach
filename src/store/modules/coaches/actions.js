export default {
    registerCoach(context, data) {
        console.log('data: ', data);
        const coachData = {
            id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };
        console.log('coachData', coachData);
        context.commit('registerCoach', coachData);
    }
};