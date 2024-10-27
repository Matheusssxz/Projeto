document.getElementById("lerMais").addEventListener("click", function() {
    // Seleciona todos os itens ocultos
    const hiddenItems = document.querySelectorAll(".catalogo-item.d-none");
    
    // Itera sobre os itens ocultos e remove a classe d-none
    hiddenItems.forEach(item => {
        item.classList.remove("d-none");
    });

    // Opcional: oculta o botão após a ação
    this.style.display = 'none';
});