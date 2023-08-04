<template>
    <div>
        <div class="quoteList" v-for="Quotes in props.QuoteLists" :key="Quotes.id">
            <div class="content">
                {{ Quotes.quoteAnime }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type typeQuote from '@/types';


const props = defineProps<{
    QuoteLists:typeQuote[]
}>();

</script>

<style scoped>
.content{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 18px;
}
.quoteList{
    height: 40%;
    width: 700px;
    border-radius: 10px;
    background-color: #e2e8f0;
    margin-top: 40px;
    align-items: center;
    display: flex;
    padding: 10px 18px;
    font-weight: 550;
}

.quoteList:hover{
    .content{
        white-space: unset;
        max-height: unset;
    }
}


</style>