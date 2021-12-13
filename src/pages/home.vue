<template>
    <div>
        <HelloWorld />
        <svg width='100' height='100'>
            <rect x='50' y='50' width='30' height='30' fill='red'  />
            <circle  cy='30' cx='50' r='30' fill='blue' />
        </svg>
        <span class="sparkline">3  5  7  6  6  9  11  15</span>
    </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default ({
    components:{
        HelloWorld
    },
    data(){
        return {

        }
    },
    mounted(){
      
        this.setMapURL();
    },
    methods:{
        setMapURL(){
            if(!navigator.geolocation){
                return;
            }
            let image = document.createElement('img');
            document.body.append(image)
            navigator.geolocation.getCurrentPosition(pos=>{
            let latitude = pos.coords.latitude;
            let longitude = pos.coords.longitude;
            let accuracy = pos.coords.accuracy;
            let url = `http://maps.google.com/maps/api/staticmap?center=${latitude},${longitude}&size=640x640&sensor=true`
            let zoomlevel = 20;
            // if(accuracy > 80){
                zoomlevel = Math.round(Math.log(accuracy/50)/Math.LN2);
                url += '&zoom'+zoomlevel;
                image.src = url
                console.log(url)
            // }
            })

        }
    }
        
})
</script>
<style scoped>
.sparkline{
    background-color: #ddd;
    color: red;
}
</style>