window.addEventListener('load', () => {
    document.getElementById("btn-entrar").addEventListener("click", function () {
        const usuario = document.getElementById("user").value;
        const senha = document.getElementById("password").value;
        const erro = document.getElementById("erro");

        const usuarioCorreto = "admin";
        const senhaCorreta = "123";

        if (usuario === usuarioCorreto && senha === senhaCorreta) {
            localStorage.setItem("logado", "true");
            window.location.href = "./pages/home.html";
        } else {
            erro.textContent = "Usuário ou senha inválidos!";
        }
    });
});