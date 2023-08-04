import type typeQuote from "@/types"
import axios from "axios"
import {ref} from 'vue'
export default function fctQuote() {

    const getQuote =async () => {
        let animeQuote =await axios.get('https://animechan.xyz/api/random').then((response) => response.data).catch((error) => console.log(error))

        return animeQuote
    }

    const QuoteLists = ref<typeQuote[]>([]);

    const addQuoteList = (data:typeQuote) => {
        QuoteLists.value.unshift(data)
    }


    return {
        getQuote,
        QuoteLists,
        addQuoteList
    }
}