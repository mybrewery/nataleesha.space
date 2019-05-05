<template>
	<div class="page main">
		<div class="sub-header-wrapper">
			<h2
				v-html="$store.getters.translation[ `main_secondary_caption` ]"
			></h2>
		</div>

		<div class="content">
			<h1
				v-html="$store.getters.translation[ `main_greet` ]"
			></h1>
		</div>
	</div>
</template>

<script>

import Page from "components/Page.vue"

export default {
	name: "MainPage",
	mixins: [ Page ],
	methods: {
		
	}
}
   
</script>
