<template>
    <div class="app">
        <h1>THE ANIME QUOTER</h1>
        <Suspense>
            <QuoteToShow @add-quote-list="addQuoteList" :QuoteLists="QuoteLists" />
        </Suspense>
        <QuoteList :QuoteLists="QuoteLists" />
    </div>
</template>

<script setup lang="ts">
import QuoteList from '@/components/QuoteList.vue';
import QuoteToShow from '@/components/QuoteToShow.vue';
import fctQuote from '@/composables/index'


const {
    getQuote,
    QuoteLists,
    addQuoteList
} = fctQuote();

</script>

<style scoped>

h1{
    font-weight: bold;
    border-bottom:5px solid red ;
    padding-bottom: 3px;
    margin-top: 10px;
}
.app{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: auto;
    align-items: center;

}


</style>