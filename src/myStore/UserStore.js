import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
    state: ()=>({
        count:0,
        items:[
            {id:1, name:"John", age:25, availabe:true},
            {id:2, name:"Jane", age:30, availabe:true},
            {id:3, name:"Alice", age:18, availabe:false}
        ]
    }),
    getters:{
        multiplyCount(){
            return this.count * 2
        },
        availabeItems(){
            return this.items.filter(item => item.availabe)
        }
    },

    actions:{
         deleteItem(id){
             console.log(id);
             this.items = this.items.filter(item => item.id !== id)
         }
    }

})