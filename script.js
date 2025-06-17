// script.js - Versão atualizada para consumir a API Flask

document.addEventListener('DOMContentLoaded', function() {
    // Carrega a categoria padrão (pizzas) ao iniciar
    loadCategory('pizzas');
    
    // Adiciona event listeners para os botões de categoria
    document.querySelectorAll('#category-buttons button').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            loadCategory(category);
        });
    });
});

async function loadCategory(category) {
    const menu = document.getElementById('menu');
    menu.innerHTML = '<div class="loading">Carregando...</div>';

    try {
        const response = await fetch('menu.json');
        if (!response.ok) throw new Error('Erro ao carregar o menu.json');

        const data = await response.json();
        const items = data[category];

        if (!items) throw new Error('Categoria não encontrada');

        displayMenuItems(items, category);
    } catch (error) {
        console.error('Erro:', error);
        menu.innerHTML = `<div class="error">Erro ao carregar o cardápio: ${error.message}</div>`;
    }
}`);
        if (!response.ok) {
            throw new Error(`Erro ao carregar ${category}`);
        }
        
        const items = await response.json();
        displayMenuItems(items, category);
        
    } catch (error) {
        console.error('Erro:', error);
        menu.innerHTML = `<div class="error">Erro ao carregar o cardápio: ${error.message}</div>`;
    }
}

function displayMenuItems(items, category) {
    const menu = document.getElementById('menu');
    menu.innerHTML = '';
    
    if (!items || items.length === 0) {
        menu.innerHTML = '<div class="empty">Nenhum item encontrado nesta categoria.</div>';
        return;
    }
    
    items.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'pizza-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-info">
                <h2>${item.name}</h2>
                <span>${item.price}</span>
                <p class="ingredients" id="ingredients-${category}-${index}">
                    Ingredientes: ${item.ingredients}
                </p>
            </div>
        `;
        
        // Adiciona evento de clique para mostrar/esconder ingredientes
        itemDiv.addEventListener('click', () => {
            const ingredients = document.getElementById(`ingredients-${category}-${index}`);
            ingredients.classList.toggle('show');
        });
        
        menu.appendChild(itemDiv);
    });
}

// Adiciona suporte para navegação inicial via URL
window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam && ['pizzas', 'bordas', 'doces', 'bebidas'].includes(categoryParam)) {
        loadCategory(categoryParam);
    }
});

// Variável para armazenar o carrinho
let carrinho = [];

// Função para adicionar ao carrinho
function adicionarAoCarrinho(item, categoria) {
    const itemCarrinho = {
        nome: item.name,
        preco: extrairPreco(item.price),
        categoria: categoria,
        quantidade: 1
    };
    
    // Verifica se já existe no carrinho
    const itemExistente = carrinho.find(i => i.nome === itemCarrinho.nome);
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push(itemCarrinho);
    }
    
    atualizarCarrinho();
}

// Função auxiliar para extrair preço (pega o primeiro valor)
function extrairPreco(precoString) {
    const match = precoString.match(/R\$\s*(\d+,\d{2})/);
    return match ? parseFloat(match[1].replace(',', '.')) : 0;
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.innerHTML = '';
    
    let total = 0;
    
    carrinho.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-carrinho';
        itemDiv.innerHTML = `
            <span>${item.nome} (${item.quantidade}x)</span>
            <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
            <button onclick="removerDoCarrinho('${item.nome}')">✕</button>
        `;
        carrinhoDiv.appendChild(itemDiv);
        total += item.preco * item.quantidade;
    });
    
    document.getElementById('total-carrinho').textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para remover item do carrinho
function removerDoCarrinho(nomeItem) {
    carrinho = carrinho.filter(item => item.nome !== nomeItem);
    atualizarCarrinho();
}

// Modifique a função displayMenuItems para adicionar botões
function displayMenuItems(items, category) {
    const menu = document.getElementById('menu');
    menu.innerHTML = '';
    
    items.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'pizza-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-info">
                <h2>${item.name}</h2>
                <span>${item.price}</span>
                <p class="ingredients">${item.ingredients}</p>
                <button class="btn-adicionar" onclick="adicionarAoCarrinho(${JSON.stringify(item).replace(/"/g, '&quot;')}, '${category}')">
                    Adicionar
                </button>
            </div>
        `;
        menu.appendChild(itemDiv);
    });
}
// Função para finalizar pedido (substitua a existente)
function finalizarPedido() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    
    Swal.fire({
        title: 'Confirmar Pedido',
        html: `<p>Total: R$ ${total.toFixed(2)}</p>
               <p>A cozinha receberá seu pedido e levará à sua mesa quando pronto.</p>`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            console.log('Pedido enviado para cozinha:', carrinho);
            Swal.fire(
                'Pedido Confirmado!',
                'Seu pedido está sendo preparado e será levado à sua mesa quando pronto.',
                'success'
            );
            
            // Opcional: Limpar o carrinho
            // carrinho = [];
            // atualizarCarrinho();
        }
    });
}
carrinho = [];
atualizarCarrinho();