export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            // id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        const token = context.rootGetters.token;

        // vì chúng ta setting trong firebase phần write của coaches được bảo vệ nên ta cần token để truy cập vào phần được bảo vệ này
        // Để truy cập thì ta thêm ?auth= vào sau json và cộng thêm chuỗi token ta lấy được từ Vuex sau khi lưu trữ.
        const response = await fetch(`https://vue3-ac313-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` + token, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        });

        // const responseData = await response.json();

        if (!response.ok) {
            ///
        }

        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    },
    async loadCoaches(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }

        const response = await fetch(
            `https://vue3-ac313-default-rtdb.firebaseio.com/coaches.json`
        );
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(response.message || 'Error!');
            throw error;
        }

        const coaches = [];

        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            };
            coaches.push(coach)
        }
        context.commit('setCoaches', coaches);
        context.commit('setFetchTimestamp')
    },
};