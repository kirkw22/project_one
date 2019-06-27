new Vue({
    el: "#app",
    data:{
        state: true,
        inputName: '',
        names: [],
        showError: false,
        errorMessage: ''
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
        }
    }
})