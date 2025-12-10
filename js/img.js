document.addEventListener("DOMContentLoaded", () => {

    // PEGAR ELEMENTOS E DADOS AQUI EM CIMA
    const fileInput = document.getElementById("file_uploaded");
    const btnFoto = document.getElementById("btn_foto");
    const userImg = document.getElementById("user_img");

    const id = sessionStorage.getItem("user") || localStorage.getItem("user");
    const user_nome = sessionStorage.getItem("nome") || localStorage.getItem("nome");

    if (!id) {
        alert("Erro: usuário não encontrado no sessionStorage/localStorage.");
        return;
    }

    // -------------------------------
    // 1) CARREGAR FOTO + NOME + SENHA
    // -------------------------------
    async function carregarPiscineiro() {
        try {
            const response = await fetch(`http://127.0.0.1:8000/piscineiro/${id}`);
            const data = await response.json();

            if (response.ok) {

                // Foto
                if (data.foto) {
                    userImg.src = "data:image/jpeg;base64," + data.foto;
                } else {
                    userImg.src = "../img/user-foto.png";
                }

                // Nome
                document.querySelector(".user h3").textContent = data.nome;

                // Senha
                document.querySelector(".container h4").textContent = data.senha;
            }

        } catch (error) {
            console.error("Erro ao carregar piscineiro:", error);
        }
    }

    // CHAMAR AQUI (depois de id existir)
    carregarPiscineiro();

    // -------------------------------
    // 2) ATUALIZAR FOTO
    // -------------------------------
    btnFoto.addEventListener("click", async () => {

        const file = fileInput.files[0];

        if (!file) {
            alert("Selecione uma imagem antes de atualizar!");
            return;
        }

        const formData = new FormData();
        formData.append("id", id);
        formData.append("foto", file);

        try {
            const response = await fetch("http://127.0.0.1:8000/update_foto", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (response.ok) {
                alert("Foto atualizada com sucesso!");

                const reader = new FileReader();
                reader.onload = (e) => {
                    userImg.src = e.target.result;
                };
                reader.readAsDataURL(file);

            } else {
                alert("Erro: " + result.detail);
            }

        } catch (error) {
            console.error("Erro ao atualizar foto:", error);
            alert("Erro ao enviar a foto.");
        }
    });

});
