<template>
	<div 
		class="project-item"
		:data-project-id="projectId"
		:data-project-index="projectIndex"
		@click="onClick"
		@mouseover="onOver"
		@mouseout="onOut"
	>
		<div
			class="preview-wrapper"
		>
			<img :src="previewImageSrc"/>
		</div>
		<Button
			ref="button"
			:buttonCaptionContent="$store.getters.translation[ `projects_item_details_button_caption` ]"
			mode="caption-only"
			@click="onClick"
		/>

	</div>
</template>

<script>

import Button from "components/Button.vue"

export default {
	name: "Item",
	components: { Button },
	props: {
		previewImageSrc: {
			type: String,
			default: ""
		},
		projectId: {
			type: String,
			default: ""
		},
		projectIndex: {
			type: Number,
			default: -1
		}
	},
	methods: {
		onClick () {
			this.$emit( "click", {
				projectId: this.projectId,
				projectIndex: this.projectIndex
			} )
		},
		onOver () {
			this.$refs.button.$el.classList.add( "hover" )
		},
		onOut () {
			this.$refs.button.$el.classList.remove( "hover" )
		}
	}
}
   
</script>