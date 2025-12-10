document.addEventListener("DOMContentLoaded", () => {

    const btnSenha = document.getElementById("btn_senha");
    const inputNovaSenha = document.getElementById("new_password");

    // Pega o ID do piscineiro salvo no localStorage
    const id = localStorage.getItem("user");

    if (!id) {
        console.error("ID do usuário não encontrado no localStorage!");
    }

    btnSenha.addEventListener("click", async () => {

        const novaSenha = inputNovaSenha.value.trim();

        if (!novaSenha) {
            alert("Digite a nova senha!");
            return;
        }

        try {
            const response = await fetch(`http://127.0.0.1:8000/update_senha`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,          // ← Agora envia o ID também
                    senha: novaSenha
                })
            });

            const result = await response.json();

            if (response.ok) {
                alert("Senha atualizada com sucesso!");
                inputNovaSenha.value = "";
            } else {
                alert("Erro: " + result.detail);
            }

        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Não foi possível atualizar a senha.");
        }
    });

});
