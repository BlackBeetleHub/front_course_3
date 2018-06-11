import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ua from '@/assets/lang/ua.json'
import en from '@/assets/lang/en.json'
// import en from './en.json'
// import tw from './tw.json'
// import es from './es.json'

Vue.use(VueI18n)

const locale = 'ua'

const messages = {
    ua,
    en
}

const i18n = new VueI18n({
    /** 默认值 */
    locale,
    messages
})

export default i18n