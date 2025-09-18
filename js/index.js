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

    console.log("js carregado com sucesso!");


});

// window.addEventListener("DOMContentLoaded", function () {

//     if (localStorage.getItem("logon") === "1") {
//         document.getElementById("container-login").classList.add("desapear");
//         document.getElementById("logged-message").innerHTML = localStorage.getItem("user_name") || "Usuário";

//         const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
//         if (userData.user) {
//             atualizarInterface(userData);
//         }
//     }

//     // --------------------------------------------------------------

//     configurarFormularioLogin();

//     function configurarFormularioLogin() {
//         const loginForm = document.getElementById("loginForm");
//         loginForm.addEventListener("submit", async function (event) {
//             event.preventDefault();

//             const username = document.getElementById("input-user").value.trim();
//             const password = document.getElementById("password").value.trim();

//             if (!username || !password) {
//                 exibirAlerta("Usuário e senha são obrigatórios!");
//                 return;
//             }

//             await validarCredenciais(username, password);
//         });
//     }

//     // --------------------------------------------------------------

//     async function obterDadosPlanilha() {
//         try {
//             const response = await fetch("./js/keys.json");
//             if (!response.ok) throw new Error("Erro ao carregar arquivo keys.json");

//             const data = await response.json();
//             if (!data.length || !data[0].base) throw new Error("Formato inválido do JSON.");

//             const planilhaURL = data[0].base;

//             const planilhaResponse = await fetch(planilhaURL);
//             if (!planilhaResponse.ok) throw new Error("Erro ao carregar a planilha.");

//             const csvText = await planilhaResponse.text();
//             return processarCSV(csvText);
//         } catch (error) {
//             console.error("Erro:", error);
//             exibirAlerta("Erro ao carregar dados.");
//             return [];
//         }
//     }

//     // --------------------------------------------------------------

//     async function validarCredenciais(username, password) {
//         document.getElementById('loading').style.display = "flex";
//         const usuarios = await obterDadosPlanilha();
//         const user = usuarios.find(u => u.user === username && u.password === password);

//         if (user) {
//             document.getElementById('loading').style.display = "none";

//             realizarLogin(user);

//         } else {
//             document.getElementById('loading').style.display = "none";
//             exibirAlerta("Usuário ou senha incorretos!");
//         }
//     }

//     // --------------------------------------------------------------

//     function processarCSV(csvText) {
//         const linhas = csvText.split("\n").map(l => l.trim()).filter(l => l);
//         const cabecalho = linhas[0].split(",").map(h => h.trim());

//         return linhas.slice(1).map(linha => {
//             const valores = linha.split(",").map(v => v.trim());
//             let obj = {};
//             cabecalho.forEach((chave, index) => {
//                 obj[chave] = valores[index] || "";
//             });
//             return obj;
//         });
//     }


//     // --------------------------------------------------------------

//     function realizarLogin(userData) {
//         localStorage.setItem("logon", "1");
//         localStorage.setItem("currentUser", userData.user);
//         localStorage.setItem("user_data", JSON.stringify(userData));
//         localStorage.setItem("user_name", userData.nickname);
//         window.dispatchEvent(new Event("storage"));


//     }


// })


