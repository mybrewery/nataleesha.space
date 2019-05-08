import _ from "./Helpers"

import Vue from "vue"
import StoreCreator from "store/StoreCreator"
import App from "components/App.vue"
import packageObj from "../package.json"
import Device from "device.js/dist/device"

window.clog = console.log.bind(console)

const device = new Device()

class Folio {
	constructor ( params ) {

		let $this = this;

		this.dom = document.createElement( "div");
		this.dom.classList.add( "nata" );

		document.body.appendChild( this.dom )

		let $store = this.$store = new StoreCreator( params )

		window.$locale = function ( localeKey ) {
			return $store.getters.translation[ localeKey ] || ""
		}

		this.$store.commit( "device", device.desktop )
		this.$store.commit( "root", new Vue({
	      	el:  this.dom,
	      	render: createElement => {
			  	const context = {
			  	  	props: {

			  	  	},
			  	};
	
			  	return createElement(App, context);
			},
	      	store : this.$store,
	      	components: { App },
	      	template: '<App/>'
	    }));

		console.log( "%c Coded by @sanyabeast https://github.com/sanyabeast", "color: #f44336; font-weight: bold; font-family: monospace;" )


		this.$root = this.$store.state.$root;
	}
}

export default Folio