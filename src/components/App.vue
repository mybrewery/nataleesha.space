<template>
    <div 
        class="nata root"
        :data-current-page="$store.state.currentPage"
    >
    	<MainPage 
            v-bind:class="{ current: $store.state.currentPage==`main` }"
        />
    	<ProjectsPage 
            v-bind:class="{ current: $store.state.currentPage==`projects` }"
        />
    	<ContactsPage 
            v-bind:class="{ current: $store.state.currentPage==`contacts` }"
        />

        <div class="page-nav-buttons">
            <Button
                class="prev-page"
                mode="caption-only"
                @click="onPrevButtonClick"
            />
            <Button
                class="next-page"
                mode="caption-only"
                @click="onNextButtonClick"
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
  methods: {
    onPrevButtonClick () {
        this.$store.dispatch("prevPage")
    },
    onNextButtonClick () {
        this.$store.dispatch("nextPage")
    }
  }

}
   
</script>

<style lang="sass">
    import "sass/vars.scss"
    import "sass/app.scss"
    import "sass/fonts.scss"
    import "sass/presets.scss"
    import "sass/anim.scss"
</style>