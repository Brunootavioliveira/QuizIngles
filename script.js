function entrar(){
    let senha = document.getElementById('senha').value

    if (senha == '1234'){
        window.location.href = 'home.html'
    }
    else{
        alert('Senha está incorreta')
    }
}