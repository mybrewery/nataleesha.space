<template>
	<div class="page main">
		<div class="content">
			<h2
				v-html="$store.getters.translation[ `main_secondary_caption` ]"
			></h2>
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
}
   
</script>