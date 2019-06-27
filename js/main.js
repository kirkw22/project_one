new Vue({
    el: "#app",
    data:{
        state: true,
        inputName: '',
        names: [],
        showError: false,
        errorMessage: '',
        result: ''
    },
    methods:{
        addNameToList(){
            console.log(this.names);
           if(this.validate(this.inputName)){ 
              this.names.push(this.inputName);
              this.inputName = '';
              this.showError = false;
           }else{
               this.errorMessage = 'You must enter a valid name';
                this.showError = true;
           }
        },
        validate(value){
            if(value !== ''){
                return true
            }else{
                return false
            }
        },
        showResults(){
            let rand = this.names[Math.floor(Math.random() * this.names.length)];
            this.result = rand;
            this.state = false;

        },
        resetApp(){
            this.state = true,
            this.names = [],
            this.result = ''
        },
        removeNameFromList(index){
           this.names.splice(index,1);
        }
    }
})