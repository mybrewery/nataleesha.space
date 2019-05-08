<template>
	<div 
		class="page projects"
		ref="root"
	>
		<div class="sub-header-wrapper">
			<h2
				v-html="$store.getters.translation[ `projects_secondary_caption` ]"
			></h2>
		</div>
		<div class="content">
			
			<div 
				class="projects-list"
				@scroll="onScroll"
				ref="projectsList"
			>
				<Item v-for="(project, index) in projects.list"
					:projectId="project.id"
					:projectIndex="index"
					:previewImageSrc="`res/pics/projects/${ project.id }/${ project.preview }`"
					@click="onItemClick"
				/>
			</div>
		</div>

		<transition
			name="gallery-fade"
		>
			<Gallery
				v-if="galleryShown"
				:slides="getImageURLs()"
				@exit="onGalleryExitClick"
				@prev="onGalleryPrevClick"
				@next="onGalleryNextClick"
			/>
		</transition>
	</div>
</template>

<script>

import projects from "data/projects.json"
import Page from "components/Page.vue"
import Item from "components/pages/Project/Item.vue"
import Gallery from "components/Gallery.vue"
import { forEach } from "lodash"

export default {
	name: "ProjectsPage",
	components: { Item, Gallery },
	data () {
		return {
			projects,
			galleryShown: false,
			currentProjectIndex: 0
		}
	},
	mixins: [ Page ],
	methods: {
		onScroll () {
			let scrolled = this.$refs.projectsList.scrollTop/  this.$refs.projectsList.scrollHeight * 2
			if ( scrolled > 1 ) scrolled = 1

			this.$refs.root.style.backgroundPositionY = `${scrolled * 20}%`
		},
		onItemClick ( payload ) {
			let projectId = payload.projectId
			let projectIndex = payload.projectIndex

			this.currentProjectIndex = projectIndex
			this.galleryShown = true

			console.log(projectId)
		},
		onGalleryExitClick () {
			this.galleryShown = false;
		},
		onGalleryPrevClick () {
			let prevProjectIndex = this.currentProjectIndex - 1

			if ( prevProjectIndex < 0 ) {
				prevProjectIndex = this.projects.list.length - 1
			}

			this.currentProjectIndex = prevProjectIndex
		},
		onGalleryNextClick () {
			let nextProjectIndex = this.currentProjectIndex + 1

			if ( nextProjectIndex > this.projects.list.length - 1 ) {
				nextProjectIndex = 0
			}

			this.currentProjectIndex = nextProjectIndex
		},
		onGalleryEnter () {
			clog(1)
		},
		onGalleryLeave () {
			console.log(2)
		},
		getImageURLs () {
			let projectData = this.projects.list[ this.currentProjectIndex ]

			let urls = projectData.slides.slice()

			forEach( urls, ( fileName, index )=>{
				urls[ index ] = `res/pics/projects/${ projectData.id }/${fileName}`
			} )


			return urls
		}
	}
}
   
</script>

<style lang="sass">
  import "sass/pages/projects.scss"
</style>