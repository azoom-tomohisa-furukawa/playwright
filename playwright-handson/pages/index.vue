<script setup lang="ts">
const title = ref("最初のページ");
const description = ref("Playwrightハンズオンの最初のステップ");

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
        <h1>Playwrightのハンズオン</h1>
        <p>あなたは1週間後にはE2Eテストのエキスパートです。</p>
        <p>
            <button>操作ボタン</button>
        </p>
    </main>
</template>