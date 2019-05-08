<template>
    <div 
        class="nata root"
        v-bind:class="{ mobile: $store.state.device != `desktop` }"
        :data-current-page="$store.state.currentPage"
    >

        <div class="lang-select-buttons">
            <Button
                mode="caption-only"
                class="lang-select-button"
                v-for="(langData, id) in $store.state.translations"
                :buttonCaptionContent="langData.lang_name"
                @click="onLangButtonClick( id )"
            />
        </div>

    	<transition name="page-fade">
            <MainPage 
                v-show="$store.state.currentPage==`main` || $store.state.device != `desktop`"
            />
        </transition>

    	<transition name="page-fade">
            <ProjectsPage 
                v-show="$store.state.currentPage==`projects` || $store.state.device != `desktop`"
            />   
        </transition>

    	<transition name="page-fade">
            <ContactsPage 
                v-show="$store.state.currentPage==`contacts` || $store.state.device != `desktop`"
            />   
        </transition>

        <div class="page-nav-buttons">
            <Button
                class="prev-page"
                mode="caption-only"
                @click="onPrevButtonClick"
                :buttonCaptionContent="prevButtonCaption"
            />
            <Button
                class="next-page"
                mode="caption-only"
                @click="onNextButtonClick"
                :buttonCaptionContent="nextButtonCaption"
            />
        </div>
    </div>
</template>

<script>

import MainPage from "components/pages/Main.vue"
import ProjectsPage from "components/pages/Projects.vue"
import ContactsPage from "components/pages/Contacts.vue"
import Button from "components/Button.vue"

export default {
	components: { MainPage, ProjectsPage, ContactsPage, Button },
	mount () {
		// this.$store.commit( "currentPage", "projects" )
	},
    computed: {
        prevButtonCaption () {
            let routes = this.$store.getters.routes
            return this.$store.getters.translation[ `page_name_${ routes[0] }` ]
        },
        nextButtonCaption () {
            let routes = this.$store.getters.routes
            return this.$store.getters.translation[ `page_name_${ routes[1] }` ]
        }
    },
    methods: {
        onPrevButtonClick () {
            this.$store.dispatch("prevPage")
        },
        onNextButtonClick () {
            this.$store.dispatch("nextPage")
        },
        onLangButtonClick ( langId ) {
            this.$store.commit( "language", langId )
        },
    }

}
   
</script>

<style lang="sass">
    import "sass/vars.scss"
    import "sass/app.scss"
    import "sass/app-mobile.scss"
    import "sass/fonts.scss"
    import "sass/presets.scss"
    import "sass/anim.scss"
</style>