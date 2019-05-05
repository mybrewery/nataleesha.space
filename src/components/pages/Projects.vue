<template>
	<div class="page projects">
		<div class="sub-header-wrapper">
			<h2
				v-html="$store.getters.translation[ `projects_secondary_caption` ]"
			></h2>
		</div>
		<div class="content">
			
			<div class="projects-list">
				<Item v-for="project in projects.list"
					:previewImageSrc="`res/pics/projects/${ project.id }/${ project.preview }`"
				/>
			</div>
		</div>
	</div>
</template>

<script>

import projects from "data/projects.json"
import Page from "components/Page.vue"
import Item from "components/pages/Project/Item.vue"

console.log(projects)

export default {
	name: "ProjectsPage",
	components: { Item },
	data () {
		return {
			projects
		}
	},
	mixins: [ Page ]
}
   
</script>

<style lang="sass">
  import "sass/pages/projects.scss"
</style>