<template>
    <div>
        <h1>home page</h1>
        <p>@pages/index.vue</p>

        <div v-for="paragraph in MainStore.paragraphs">
            <p>{{ paragraph.id }}</p>
            <p>{{ paragraph.title }}</p>
            <p>{{ paragraph.body }}</p>
        </div>
    </div>
</template>

<script>
    import { useMainStore } from '~/stores/MainStore'

    export default {
        setup() {
            const MainStore = useMainStore()
                return { MainStore } 
        }
    }
</script>