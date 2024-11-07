<script setup lang="ts">
import { ref } from 'vue';
import ShuffleMemberForm from '~/components/ShuffleMemberForm.vue';

const title = ref("入力フォーム");
const description = ref("Playwrightハンズオンの第2のステップ");

useHead({
    title,
    meta: [{
        name: "description",
        content: description
    }]
})
</script>

<template>
    <main>
        <h1>入力フォーム</h1>
        <ShuffleMemberForm />
    </main>
</template>