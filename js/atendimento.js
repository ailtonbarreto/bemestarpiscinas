window.addEventListener("load", () => {

    const ph = document.getElementById("ph");

    ph.addEventListener("change", function () {
        const valorSelecionado = ph.value;

        const valorNumerico = parseFloat(valorSelecionado);
        console.log("PH:", valorNumerico);

    });

    // ---------------------------------------------------------

    const cloro = document.getElementById("cloro");

    cloro.addEventListener("change", function () {
        const valorSelecionado = cloro.value;

        const valorNumerico = parseFloat(valorSelecionado);
        console.log("Cloro:", valorNumerico);

    });

    // ---------------------------------------------------------

    const alcalinidade = document.getElementById("alcalinidade");

    alcalinidade.addEventListener("change", ()=>{
        const valorSelecionado = alcalinidade.value;

        const valorNumerico = parseFloat(valorSelecionado);

        console.log("Alcanidade:", valorNumerico);

    });

    // ---------------------------------------------------------



})