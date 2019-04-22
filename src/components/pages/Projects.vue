<template>
	<div class="page projects">
		<div class="content">
			<h2
				v-html="$store.getters.translation[ `projects_secondary_caption` ]"
			></h2>
		</div>
	</div>
</template>

<script>

import Page from "components/Page.vue"

export default {
	name: "ProjectsPage",
	mixins: [ Page ]
}
   
</script>