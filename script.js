function entrar(){
    let senha = document.getElementById('senha').value

    if (senha == '1234'){
        window.location.href = 'teste.html'
    }
    else{
        alert('Senha está incorreta')
    }
}