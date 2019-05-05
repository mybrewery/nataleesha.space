<template>
	<div class="page contacts">
		<div class="sub-header-wrapper">
			<h2
				v-html="$store.getters.translation[ `contacts_secondary_caption` ]"
			></h2>
		</div>
		<div class="content">
			<h1
				v-html="$store.getters.translation[ `contacts_greet` ]"
			></h1>
			<div class="contacs-items">
				<Button
					class="cv-dl-buttom"
					mode="caption-only"
					:buttonCaptionContent="$store.getters.translation[ `contacts_cv_button_caption` ]"
					@click="onCVButtonClick"
				/>
				<Button
					class="email-copy-button"
					mode="caption-only"
					ref="email-copy-button"
					:data-copy-caption="$store.getters.translation[ `contacts_email_copied` ]"
					:buttonCaptionContent="$store.getters.translation[ `contacts_email_button_caption` ]"
					@click="onEmailButtonClick"
				/>
			</div>
		</div>
	</div>
</template>

<script>

import contacts from "data/contacts.json"

import Helpers from "Helpers"
import Page from "components/Page.vue"
import Button from "components/Button.vue"

export default {
	name: "ContactsPage",
	mixins: [ Page ],
	components: { Button },
	methods: {
		onCVButtonClick () {
			window.open( "res/cv.pdf", "_blank" )
		},
		onEmailButtonClick () {
			Helpers.copytoClipboard( contacts.email )
			console.log(this.$refs[ "email-copy-button" ])
			this.$refs[ "email-copy-button" ].$el.classList.add( "copied" )

			setTimeout( ()=>{
				this.$refs[ "email-copy-button" ].$el.classList.remove( "copied" )
			}, 3000 )

		}
	}
}
   
</script>
