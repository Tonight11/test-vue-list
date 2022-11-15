import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
    // users object(API)
    state: () => ({
        users: [
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                title: 'Brunch this weekend?',
                score: 0 || 22,
                country: '' || 'usa',
                address: 'Broadway 10012, New York, NY, USA',
                subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
            },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                score: '' || 11,
                country: '' || 'usa',
                address: 'Park Ave, New York, NY, USA',
                subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
            },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                title: 'Oui oui',
                score: '' || 1,
                country: '' || 'russia',
                address: 'St Marks Pl, New York, NY, USA',
                subtitle:
                    '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
            },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                title: 'Birthday gift',
                score: '' || 5,
                country: '' || 'usa',
                address: '5th Ave, New York, NY, USA',
                subtitle:
                    '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
            },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                title: 'Recipe to try',
                score: '' || 31,
                country: '' || 'russia',
                address: 'Brooklyn, NY 11201, USA',
                subtitle:
                    '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            },
        ],
    }),
    getters: {},
    actions: {},
})
