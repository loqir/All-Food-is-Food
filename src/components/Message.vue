<template>
    <div class = "message">
        <span v-if="!sender"> {{ name }}</span>
        <div class = "flex" :class = "sender ? 'flex-row-reverse' : '' ">
            <Avatar class = "mt-1" :src="photoURL" />
            <div class="text w-3/4" :class = "sender ? 'bg-green-800' : 'bg-gray-700'">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
import { Avatar } from './Avatar.vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
