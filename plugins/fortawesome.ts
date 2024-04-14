import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {defineNuxtPlugin} from '#app'

config.autoAddCss = false;
export default defineNuxtPlugin((nuxtApp)=>{
    library.add(faTrashCan,faHeart, solidHeart)
    nuxtApp.vueApp.component('font-awesome-icon',FontAwesomeIcon)
})