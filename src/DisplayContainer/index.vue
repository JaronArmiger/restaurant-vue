<template>
  <div>
  	<button v-on:click='changeDisplay(1)'>1</button>
  	<button v-on:click='changeDisplay(2)'>2</button>
  	<p v-if='display == 1'>
  	  <menu-comp></menu-comp>
  	</p>
  	<p v-else-if='display == 2'>
  	  <contact></contact>
  	</p>
  </div>
</template>
<script src='./script.js'></script>
<style scoped src='./style.css'></style>