<template>
  <div class="waterfall-wrapper">
    <div v-if='dataObj.length>0'>
      <div :class='`img-wrapper_${index}`'  v-for='(k,index) in dataObj' :key='`img-wrapper_${index}`'>
        <div class='img' v-for='(i,idx) in k' :key='`img_${idx}`' :ref='`img_${idx}`'>
          {{i}}
          <img :src='`../assets/images/${i}`' />
        </div>
      </div>
   </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      dataObj:[],
      imgList:['1.png','2.png','3.png','4.png','5.jpeg']
    }
  },
  mounted(){
    new Promise((resolve)=>{
      this.main(50);
      resolve();
    }).then(()=>{
      // let heightList = [];
      this.dataObj.map((items,index)=>{
         console.log(document.querySelectorAll(`.img-wrapper_${index}`).offsetHeight);
      })
    
    })
  },
  methods:{
    main(eleWidth){
       console.log(eleWidth);
      let col = parseInt(window.screen.width / eleWidth);
      for (let i = 0; i < col; i++) {
        this.dataObj.push([]);
      }
      this.imgList.map(item=>{
          this.dataObj.map(ite=>{
            ite.push(item);
          })
      })
      this.dataObj = [...this.dataObj];
      console.log( this.dataObj);
    }
  }
}
</script>
