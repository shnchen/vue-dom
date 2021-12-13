<template>
<div>
 
   <Table :columns="columns" :data="tableData"></Table>
    
</div>
   
</template>
<script>
let tableData = {
  "code": "00000",
  "message": "操作成功!",
  "data": {
    "pageNum": 1,
    "pageSize": 20,
    "total": 6,
    "pages": 1,
    "rows": [
      [
        {
          "createdTime": null,
          "updatedTime": null,
          "productPriceId": 8,
          "productSkuId": 7,
          "productName": "产品7",
          "glpPrice": 123.02,
          "glpPer": 10,
          "buDictKey": 9,
          "buPrice": 100,
          "buPer": 2
        },
        {
          "createdTime": null,
          "updatedTime": null,
          "productPriceId": 39,
          "productSkuId": 7,
          "productName": "产品7",
          "glpPrice": 123.02,
          "glpPer": 10,
          "buDictKey": 6,
          "buPrice": 34.5,
          "buPer": 22
        },
        {
          "createdTime": null,
          "updatedTime": null,
          "productPriceId": 40,
          "productSkuId": 7,
          "productName": "产品7",
          "glpPrice": 123.02,
          "glpPer": 10,
          "buDictKey": 7,
          "buPrice": 35.5,
          "buPer": 23
        },
        {
          "createdTime": null,
          "updatedTime": null,
          "productPriceId": 41,
          "productSkuId": 7,
          "productName": "产品7",
          "glpPrice": 123.02,
          "glpPer": 10,
          "buDictKey": 8,
          "buPrice": 36.5,
          "buPer": 24
        }
      ],
      [
        {
          "createdTime": null,
          "updatedTime": null,
          "productPriceId": 28,
          "productSkuId": 28,
          "productName": "积分产品20",
          "glpPrice": 120,
          "glpPer": 101,
          "buDictKey": 6,
          "buPrice": 22.5,
          "buPer": 10
        }
      ],
      [
        {
          "createdTime": null,
          "updatedTime": null,
          "productPriceId": 29,
          "productSkuId": 29,
          "productName": "积分产品21",
          "glpPrice": 121,
          "glpPer": 101,
          "buDictKey": 7,
          "buPrice": 23.5,
          "buPer": 11
        }
      ]
    ]
  }
}
let dicData ={
  "code": "00000",
  "message": "操作成功!",
  "data": [
    {
      "dictValue": null,
      "sysDictId": 5,
      "dictName": "bu",
      "dictKey": "bu"
    },
    {
      "dictValue": "miningOil",
      "sysDictId": 6,
      "dictName": "矿山油",
      "dictKey": "bu"
    },
    {
      "dictValue": "industrialOil",
      "sysDictId": 7,
      "dictName": "工业油",
      "dictKey": "bu"
    },
    {
      "dictValue": "specialOil",
      "sysDictId": 8,
      "dictName": "特种油",
      "dictKey": "bu"
    },
    {
      "dictValue": "retailOil",
      "sysDictId": 9,
      "dictName": "零售",
      "dictKey": "bu"
    },
    {
      "dictValue": null,
      "sysDictId": 115,
      "dictName": "大工业",
      "dictKey": "bu"
    }
  ]
}

    export default {
        data () {
            return {
                columns:[],
                tableData:[],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                dicData
            }
        },
        mounted(){
          this.getBuKey();
        },
        methods:{
          async getBuKey(){
            // let res = await 接口api
            let res = [8,9,7,6];
            this.getDicData(res);
          },
          async getDicData(list){
            // let res = await 接口api,返回值为dicData
            let res = dicData;
            if(res.code === '00000'){
              let dicData = res.data ||[];
              let tempArr = [];
              let tableData = await this.getTableData();
              list.map(key=>{
                dicData.map(item=>{
                  if(key === item.sysDictId){
                      tempArr.push({
                      title:`${item.dictName}/Per`,
                      key:`${item.dictValue}/Per`,
                      sysDictId:item.sysDictId,
                      render: (h, params) => {
                            return h('div',{
                              props:{
                                type:'my-div',

                              }
                            }, [
                                h('span', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, params.row[`${item.dictValue}/Per`]),
                                h('Icon', {
                                    props: {
                                        type: 'my-icon',
                                        size: '12',
                                    },
                                    on:{
                                      click:()=>{
                                        console.log(params,params.row[item.dictValue]);
                                      }
                                    }
                            }, '')
                        ]);
                      }
                    })
                  }
                  
              })
            })
              this.columns=[
              {
                title:'产品名称',
                key:'productName'
              },
              {
                title:'GPL价/Per',
                key:'glpPrice/glpPer',
              },
              
                ...tempArr
               ]
               tableData.map(items=>{
                    items.map(item=>{
                      dicData.map(value=>{
                        if(item.buDictKey === value.sysDictId){
                          item[`${value.dictValue}/Per`] = `${item.buPrice}/${item.buPer}`;
                          item['glpPrice/glpPer'] = `${item.glpPrice}/${item.glpPer}`;
                          item[value.dictValue] ={
                            productPriceId:item.productPriceId,
                            buPrice:item.buPrice,
                            buPer: item.buPer
                          }
                        }
                      })
                  })
                })
                tableData.map(items=>{
                  let newObj ={}
                  items.forEach(item=>{
                    newObj = {...newObj,...item};
                  });
                  this.tableData.push(newObj)
                })
            }else{
              //错误处理
            }
          },
          async getTableData(){
            // let res = await 接口api tableData数据
            let res = tableData;
            if(res.code === '00000'){
              let tableList = res.data.rows || [];
               return tableList;
            }else{
              // 错误处理
            }
          },
        }
    }
</script>

<style>
.ivu-icon-my-icon{
  display:inline-block;
  width:50%;
  height:100%;
  /* background-color: red */
}
td{
  position:relative;
  
}
.ivu-icon-my-icon{
  position:absolute;
  top:0;
  text-align:center;
}
.ivu-icon-my-icon::before{
  
  
  content: '122';
  display:none;
  position:absolute;
  top:35%;
  left:0
  
}
.ivu-icon-my-icon:hover::before{
  display:inline-block;
  
}
</style>
