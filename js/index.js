const btnLoginEnter = document.querySelector("#loginEnter")
const txtUser = document.querySelector("#user")
const txtPassword = document.querySelector("#password")


    const users = [
        {
          "user" : "Master",
          "pws"  : "12345"
        },
        
        {
          "user" : "Marcelo",
          "pws"  : "senha"
        }
    ]

btnLoginEnter.addEventListener('click', function(){

    for(let reg of users){
        for(let idx in reg){
            if(reg.user == txtUser.value && reg.pws == txtPassword.value){
                location.href = 'http://localhost/Desafio02/panel.html'
            }else{
                alert("Usuário ou senha inválida")
            }
        }
    }
})
//     //alert (`Usuário: ${txtUser.value} Senha: ${txtPassword.value}`)
    
//    fetch('./js/usuario.json').then(resposta => {
//     console.log(resposta.json())
//         let usuario = resposta.json()
//         console.log("estou dentro do fetch")

//         for(let reg in usuario){
//             console.log(reg)
//         }


//    }).catch(erro => alert("Registro não encontrado "+erro))
    
// })