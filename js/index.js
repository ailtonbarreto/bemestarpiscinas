window.addEventListener('load', () => {
    document.getElementById("btn-entrar").addEventListener("click", async function () {
        const usuario = document.getElementById("user").value;
        const senha = document.getElementById("password").value;
        const erro = document.getElementById("erro");

    
        erro.textContent = "";

        try {
            // const response = await fetch("https://bemestarpiscinas-api.onrender.com/login", {
            const response = await fetch("http://127.0.0.1:8000/login", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    usuario: usuario,
                    senha: senha
                })
            });

            if (!response.ok) {
                const data = await response.json();
                erro.textContent = data.detail || "Usuário ou senha inválidos!";
                return;
            }

            const data = await response.json();

      
            localStorage.setItem("logado", "true");
            localStorage.setItem("user", data.id);
            localStorage.setItem("nome", data.nome);

       
            window.location.href = "./pages/home.html";

        } catch (err) {
            console.error("Erro ao fazer login:", err);
            erro.textContent = "Erro de conexão com o servidor.";
        }
    });

    console.log("JS carregado com sucesso!");
});

