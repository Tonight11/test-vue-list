import { computed } from 'vue'
import { useUsersStore } from '@/store'
import { useFilterStore } from '@/store/filter'

export function useUsersFilter() {
    // get a users information
    const usersStore = useUsersStore()
    // get a filter information
    const filterStore = useFilterStore()

    // optimize and make sure that users will change only when it needs
    const users = computed(() => usersStore.users)

    // filter users
    const filterUsers = computed(() =>
        users.value
            .filter((list) => {
                // if the variable country-select not empty, we get list where country equals with country we select
                if (filterStore.countrySelect) {
                    return list.country === filterStore.countrySelect
                }

                // otherwise we get full list
                return list
            })
            .filter((list) => {
                // if the variable score-select not empty
                if (filterStore.scoreSelect) {
                    // because we have only two verification, firstly we check if the selected variable has a 20
                    if (filterStore.scoreSelect.includes('20')) {
                        return list.score > 20
                    }
                    // and check if it has a 10
                    if (filterStore.scoreSelect.includes('10')) {
                        return list.score < 10
                    }
                }

                // otherwise we get full list
                return list
            })
    )

    return {
        filterUsers,
    }
}
