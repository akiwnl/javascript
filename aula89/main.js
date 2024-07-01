const endpoint = "https://766437bd-b44c-4b6c-a560-a0a472d615e0-00-32jjqsk7nhs79.worf.replit.dev/";
fetch(endpoint)
.then(res => res.json())
.then(dados=>{
    console.log(dados);
})