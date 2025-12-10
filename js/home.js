async function carregarAtendimentos() {
    const lista = document.getElementById("lista-atendimentos");
    lista.innerHTML = "";

    try {
        const piscineiro = localStorage.getItem("user"); // <-- aqui

        const response = await fetch(`http://127.0.0.1:8000/atendimentos?piscineiro=${piscineiro}`);

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const dados = await response.json();

        console.log(dados);

        let agendados = 0;
        let realizados = 0;

        dados.forEach(item => {
            const cliente = `${item.cliente || ""}`;
            const servico = item.servico || "Limpeza";
            const realizado = item.status === "realizado";

            if (realizado) realizados++;
            else agendados++;

            const id = item.id;
            const icone = realizado ? "check_circle" : "circle";
            const classe = realizado ? "ok" : "not_ok";

            const linha = document.createElement("tr");

            linha.innerHTML = `
                <td data-id="${id}" class="link">${cliente}</td>
                <td data-id="${id}" class="link">${servico}</td>
                <td data-id="${id}" class="link">
                    <span class="material-symbols-outlined ${classe}">
                        ${icone}
                    </span>
                </td>
            `;

            lista.appendChild(linha);
        });

        document.querySelector(".placar div:nth-child(1) h4:last-child").textContent = agendados;
        document.querySelector(".placar div:nth-child(2) h4:last-child").textContent = realizados;

        lista.onclick = function (e) {
            const id = e.target.closest("td")?.dataset.id;
            if (id) {
                window.location.href = `atendimento.html?id=${id}`;
            }
        };

    } catch (erro) {
        console.error("Erro ao carregar atendimentos:", erro);

        lista.innerHTML = `
            <tr>
                <td colspan="3" style="text-align:center; color:red;">
                    Erro ao carregar atendimentos
                </td>
            </tr>
        `;
    }
}

window.addEventListener("load", carregarAtendimentos);
