<template>
    <div>
        {{ count }}
    </div>
    <div>
        <button @click="updateArray">Add Element zu List</button>
        <ul>
            <li v-for="item in array">
                {{ item.label }} - {{ item.value }}
            </li>
        </ul>
    </div>

</template>
<script lang="ts">
import { defineComponent, ref} from "vue";
export default defineComponent({
  name: "RefTest",
  setup() {
    const count = ref(1);
//    console.log('1. count: ', count);
//    console.log('1. count.value: ', count.value);
    count.value = 2; 
//    console.log('2. count.value: ', count.value);
    
    // define the complex type
    interface TypeList {
        label: string,
        value: number
    }

    // add square brackets
    var array = ref<TypeList[]>([])
    console.log('----------------------------------- Setup ----------------------------');
    //let array = ref(<Number>[]);
    console.log('1. array: ', array);
    console.log('1. array.value: ', array.value);
    if(array.value.length == 0) {
        array.value.push({ label : 'Wert1', value: 1}); 
    }
    for(let  i = 0; i < array.value.length; i++){
        console.log('In For[', i, "]: ", array.value[i]);
    }
//    console.log('2. count.value: ', array.value);

    return {
        count,
        array
    };
  },
  methods: {
    updateArray() {
        console.log('----------------------------------- updateArray ----------------------------');
        console.log('Test includes: ',this.array.includes({ label : 'Wert2', value: 2}));
        console.log('1. array: ', this.array);
        console.log('1. array.value: ', this.array.length);
        let match: boolean = false;
        let updatedData  = {
            label: '',
            value: 0
        }
        for(let  i = 0; i < this.array.length; i++){
            console.log('In For[', i, "]: ", this.array[i]);
            let element = this.array[i];
            console.log('element:', element.label);
            if(element.label == 'Wert2'){
                console.log('In IF');
                match = true;
                let tmpValue = element.value;
                updatedData = { label: element.label, value: tmpValue + 1}
            }
        }
        if(!match) {
            console.log('In If match:', match);
            this.array.push({ label : 'Wert2', value: 2});
        }else {
            console.log('In else match:', match);
            //updatedData = { label: 'Wert2', value: 2} 
            /*
            const result = this.array.map((item) => {
                console.log('item:', item);
                console.log('item.label:', item.label);
                console.log('updatedData:', updatedData);
                item.label === 'Wert2' ? { ...item, ...updatedData  } : item
                }
            )
            console.log('Resullt:', result);
            */
            this.array.forEach(
                (item, index) => {
                    if(item.label === 'Wert2') {
                        console.log('In IF Remove');
                        this.array.splice(index,1);
                        console.log('In IF Remove array:', this.array);
                        this.array.push(updatedData);
                    }
                }
            );

        }
    }
  }
});
</script>