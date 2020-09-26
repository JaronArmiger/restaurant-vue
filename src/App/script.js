import Header from '../Header/index.vue';

export default {
  name: 'App',
  components: {
  	'page-header': Header,
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