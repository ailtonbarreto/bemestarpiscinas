window.addEventListener('load', () => {
    document.getElementById("btn-entrar").addEventListener("click", function () {
        const usuario = document.getElementById("user").value;
        const senha = document.getElementById("password").value;
        const erro = document.getElementById("erro");

        const usuarioCorreto = "usuario1";
        const senhaCorreta = "123";
        const id_user = "1";

        if (usuario === usuarioCorreto && senha === senhaCorreta) {
            localStorage.setItem("logado", "true");
            localStorage.setItem("user", id_user);

            window.location.href = "./pages/home.html";
        } else {
            erro.textContent = "Usuário ou senha inválidos!";
        }
    });
});