import { defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', {
    state: () => {
        return {
            name: 'Sample Name',
            title: 'Sample Title',
            links: [
                {to: '/', title: 'home'},
                {to: '/about', title: 'about'},
            ],
            paragraphs: [
                {id: 1, title: 'title 1', body: 'sample body text 1'},
                {id: 2, title: 'title 2', body: 'sample body text 2'},
                {id: 3, title: 'title 3', body: 'sample body text 3'},
            ]
        }
    }
})