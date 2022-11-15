import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', {
    state: () => ({
        //name: "select-option" options for select
        country: ['russia', 'usa'],
        score: ['> 20', '< 10'],

        // here we will get a string of "select-option"
        countrySelect: '',
        scoreSelect: '',
    }),
    getters: {},
    actions: {},
})
