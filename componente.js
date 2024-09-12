class Componente extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      fetch('http://localhost:3000/produtos')
        .then(response => response.json())
        .then(data => {
          const produtos = data;
          const div = document.createElement("div");
          div.className = "row";
  
          produtos.forEach(produto => {
            const produtoDiv = document.createElement("div");
            produtoDiv.className = "col-md-4 mb-4";
            produtoDiv.innerHTML = `
              <div class="card">
                <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                <div class="card-body">
                  <h5 class="card-title">${produto.nome}</h5>
                  <p class="card-text">${produto.descricao}</p>
                  <p class="card-text">Preço: R$ ${produto.preco.toFixed(2)}</p>
                  <a href="detalhes.html?id=${produto.id}" class="btn btn-primary">Comprar</a> <!-- Adiciona o ID ao link -->
                </div>
              </div>
            `;
            div.appendChild(produtoDiv);
          });
  
          this.appendChild(div);
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
    }
  }
  
  customElements.define("componente-novo", Componente);
  
