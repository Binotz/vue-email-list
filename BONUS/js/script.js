var app = new Vue(
    {
        el:'.app',
        data:{
            emails: []
        },
        methods:{
        },
        mounted(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp)=>{
                    let currentEmail = resp.data.response;
                    this.emails.push(currentEmail);
                });
            }
        }
    }
);
