<template>
    <header class="flex gap-3">
        <div v-for="link in links">
            <nuxt-link :to="link.to">{{ link.title }}</nuxt-link>
        </div>
    </header>
</template>

<script>
    export default {
        setup () {
            const MainStore = useMainStore()
                return MainStore
        }
    }
</script>