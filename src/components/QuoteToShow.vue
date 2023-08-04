<template>
    <div class="quote">
        <div class="elementQuote">
            <div>
                {{ animes?.quoteAnime }}
            </div>
            <div class="name">
                <h2>{{ animes?.nameAnime }}</h2>
            </div>
            <div>
                <h2>{{ animes?.namePersonnage }}</h2>
            </div>
        </div>
        <button @click="getQuoteAnime">GET A NEW QUOTE</button>
    </div>
</template>

<script setup lang="ts">
import fctQuote from '@/composables/index'
import { onMounted, ref } from 'vue';
import type typeQuote from '@/types'

const getQt = ref();
const animes = ref<typeQuote>()
const emit = defineEmits<{
    (e:'add-quote-list',value:typeQuote):void
}>()
const {
    getQuote,
} = fctQuote();

onMounted(async() => {
    getQt.value = await getQuote();
    let data = {
        id:Date.now(),
        namePersonnage:getQt.value.character,
        nameAnime:getQt.value.anime,
        quoteAnime:getQt.value.quote
    }
    emit('add-quote-list',data);
        animes.value = data;
});

const getQuoteAnime =async () => {
    getQt.value = await getQuote();
    let data = {
        id:Date.now(),
        namePersonnage:getQt.value.character,
        nameAnime:getQt.value.anime,
        quoteAnime:getQt.value.quote
    }
    emit('add-quote-list',data);
    animes.value = data;

}


</script>

<style scoped>

.quote{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
}
.elementQuote{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    position: relative;
}

.elementQuote div:first-of-type{
    height: 150px;
    width: 700px;
    background-color: black;
    color: #fff;
    font-weight: bold;
    padding: 35px 30px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    display: flex;

}
button{
    height: 40px;
    width: 250px;
    background-color: crimson;
    cursor: pointer;
    border-radius: 30px;
    border: none;
    outline: none;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    margin-top: 90px;
    
}
.elementQuote .name,
.elementQuote div:last-of-type{
    height: 30%;
    width: 30%;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 20px;
}

.elementQuote div:last-of-type{
    background-color: blueviolet;
    color: #fff;
    position: absolute;
    top: 135px;
    right: -35px;
}

.elementQuote .name{
    background-color: rgb(9, 163, 163);
    color: black;
    position: absolute;
    top: -30px;
    left: -30px;
}

.elementQuote div:last-of-type h2{
    font-weight: 600;
}
.elementQuote .name h2{
    font-weight:300;
}

</style>