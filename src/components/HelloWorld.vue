<template>
  <div class="hello">
      <!-- <input v-model="value" type="number" pattern='\d*' min="0" maxlength="11"> -->
      
      <!-- <input type="button" value="Click Me" onclick="console.log(event)"> -->
     <!-- <canvas id='ctx'  :style='{width:"100%", height:"200px",backgroundColor:"pink" }'></canvas> -->
  </div>
</template>

<script>
import * as THREE from 'three';
let camera, scene, renderer;
let geometry, material, mesh;
export default {
  name: 'HelloWorld',
  data() {
    return {
      show: false,
      value: '',
    };
  },
  mounted(){
    this.init()
  },
  methods:{
    drawImg(){
      const canvas = document.querySelector('#ctx');
      if(canvas.getContext){
        // const ctx = canvas.getContext('2d');
        const imgUrl = canvas.toDataURL('image/png');
        console.log(imgUrl)
      }
    },
    init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( this.animation );
	document.body.appendChild( renderer.domElement );

},

 animation( time ) {

	mesh.rotation.x = time / 20000;
	mesh.rotation.y = time / 10000;

	renderer.render( scene, camera );

}
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
