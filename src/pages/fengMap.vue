<template>
  <div id='fengmap'></div>
</template>

<script>
import * as fengmap from '../assets/fengMapSDK/fengmap.map.min.js';
import * as J from '../assets/fengMapSDK/fengmap.plugin.min.js'
export default {
  data () {
    return {
      map:null
    }
  },
  mounted () {
    this.map = new fengmap.FMMap({
        appName: '泰康地图',
        key: '9733c2b000cc834cb5dc7d053dbc8cce',
        mapID: '1460527710025244673',
        container: document.getElementById('fengmap'),
    });
    this.map.on('loaded', ()=> {
      new J.FMToolbar().addTo(this.map);
      new J.FMZoomControl().addTo(this.map);

      let compass = new J.FMCompass();
        compass.addTo(this.map);
        compass.on('click', function () {
            this.map.setRotation({
                rotation: 0,
                animate: true,
                duration: 0.3,
                finish: function () { console.log('setRotation'); }
            })
        });
    });
  }
  }
  
 

</script>

<style>
html,
body,
#fengmap {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    outline:none;
}

#layers {
    position: absolute;
    width: 100px;
    height: 200px;
}

.my-popup {
    background: #2c3e50;
    color: #fff;
    font-size: 16px;
    border-radius: 2px;
    border: none;
    box-shadow: none;
    margin: auto;
    justify-content: center;
    align-items: center;
    width: auto;
    display: inline-block !important;
    padding-left: 2px;
    padding-right: 2px;
}

.fm-control-popmarker1 {
    box-sizing: border-box;
    width: 200px; 
    height: 100px;
    padding: 10px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px; 
    position: absolute;
    left: -85px;
    top: -100px;
}

.fm-control-popmarker-bot1{
    width: 0px;
    height: 0px;
    font-size: 0px;
    overflow: hidden; 
    position: absolute;
    border-width: 20px;
    border-style: solid dashed dashed;
    border-color: rgba(0, 0, 0, 0.2) transparent transparent;
    left: 80px;
    bottom: -40px;
}

.fm-control-popmarker-top1{
    width: 0px;
    height: 0px;
    font-size: 0px;
    overflow: auto;
    position: absolute; 
    border-style: solid dashed dashed;
    border-width: 20px;
    border-color: rgb(255, 255, 255) transparent transparent;
    left: 80px;
    bottom: -39px;
}


       

.fm-control-popmarker2 {
    box-sizing: border-box;
    width: 200px;
    height: 100px;
    padding: 10px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px; position: absolute;
    left: -85px;
    top: -120px;
}

#info{
    overflow:auto;
    height:80px;
    margin-top:0px
}

#bank{
    color: #337ab7;
    text-decoration: none;
}


.fm-control-popmarker-bot2{
    width: 0px;
    height: 0px;
    font-size: 0px; 
    overflow: hidden;
    position: absolute;
    border-width: 20px;
    border-style: solid dashed dashed; 
    border-color: rgba(0, 0, 0, 0.2) transparent transparent;
    left: 80px;
    bottom: -40px;
}

.fm-control-popmarker-top2{
    width: 0px;
    height: 0px;
    font-size: 0px; 
    overflow: auto;
    position: absolute;
    border-style: solid dashed dashed; 
    border-width: 20px; 
    border-color: rgb(255, 255, 255) transparent transparent;
    left: 80px;
    bottom: -39px;
}
.fm-control-zoom{
    top: 100px!important;
}
.fm-control-groups{
    top: 250px!important
}
</style>

