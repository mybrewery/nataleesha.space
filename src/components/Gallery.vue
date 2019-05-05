<template>
    <div
      class="gallery"
    >
        <div 
    		class="slides"
    		ref="slides"
	    >
	    	<img
	    		v-for="slide in slides"
	    		:src="slide"
	    	/>

    	</div>
        <div class="controls">
        	<Button
        		class="prev-button"
				mode="caption-only"
				:buttonCaptionContent="$store.getters.translation[ `gallery_prev_button_caption` ]"
				@click="onPrevButtonClick"
        	/>
        	<Button
        		class="exit-button"
				mode="caption-only"
				:buttonCaptionContent="$store.getters.translation[ `gallery_exit_button` ]"
				@click="onExitButtonClick"
        	/>
        	<Button
        		class="next-button"
				mode="caption-only"
				:buttonCaptionContent="$store.getters.translation[ `gallery_next_button_caption` ]"
				@click="onNextButtonClick"
        	/>
        </div>
    </div>
</template>

<script>

import Button from "components/Button.vue"

export default {
	components: { Button },
	props: {
		slides: {
			type: Array,
			default: () => []
		}
	},
	watch: {
		slides ( currentURLs, prevURLs ) {
			this.$refs.slides.scrollTop = 0
		}
	},
	methods: {
		onPrevButtonClick () {
			this.$emit( "prev" )
		},
		onExitButtonClick () {
			this.$emit( "exit" )
		},
		onNextButtonClick () {
			this.$emit( "next" )
		}
	}
}
   
</script>

<style lang="sass">
    import "sass/gallery.scss"
</style>