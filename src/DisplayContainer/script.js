import Menu from '../Menu/index.vue';
import Contact from '../Contact/index.vue';

export default {
  name: 'DisplayContainer',
  components: {
  	'menu': Menu,
  	'contact': Contact,
  },
  data() {
  	return {
  	  display: 1,
  	}
  },
  methods: {
  	changeDisplay(val) {
  	  this.display = val;
  	  console.log(this.display);
  	}
  }
}