import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Phạm',
                    lastName: 'Hữu',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "Bố mày đỉnh",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Hữu',
                    lastName: 'Ngậu',
                    areas: ['frontend', 'career'],
                    description:
                        'Đừng hỏi tại sao!',
                    hourlyRate: 30
                }
            ]
        }
    },
    mutations,
    actions,
    getters
}