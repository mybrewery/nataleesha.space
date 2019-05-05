<template>
	<div 
		class="project-item"
		@click="onClick"
	>
		<div
			class="preview-wrapper"
		>
			<img :src="previewImageSrc"/>
		</div>
		<Button
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
		}
	},
	methods: {
		onClick () {
			this.$emit( "click", {} )
		}
	}
}
   
</script>