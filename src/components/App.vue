<template>
    <div class="nata root">
    	<MainPage v-if="$store.state.currentPage==`main`"/>
    	<ProjectsPage v-if="$store.state.currentPage==`projects`"/>
    	<ContactsPage v-if="$store.state.currentPage==`contacts`"/>
    </div>
</template>

<script>

import MainPage from "components/pages/Main.vue"
import ProjectsPage from "components/pages/Projects.vue"
import ContactsPage from "components/pages/Contacts.vue"

export default {
	components: { MainPage },
	mount () {
		// this.$store.commit( "currentPage", "projects" )
	}

}
   
</script>

<style lang="sass">
  import "sass/app.scss"
  import "sass/fonts.scss"
  import "sass/presets.scss"
  import "sass/anim.scss"
</style>