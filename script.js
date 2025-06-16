const menuData = {
    pizzas: [
        {
            name: "A moda do Cliente",
            ingredients: "Escolha 5 Ingredientes.",
            price: "R$ 79,99 - R$ 68,99",
            image: "imagens/pizzacliente.png"
        },
        {
            name: "A moda Pizzaiolo",
            ingredients: "Frango, catupiry original, bacon, champignon, milho e mussarela.",
            price: "R$ 58,99 - R$ 47,99",
            image: "imagens/pizzaiolo.png"
        },
        {
            name: "Alho",
            ingredients: "Mussarela e alho frito.",
            price: "R$ 44,99 - R$ 33,99",
            image: "imagens/alho.png"
        },
        {
            name: "Atum",
            ingredients: "Atum e cebola.",
            price: "R$ 54,99 - R$ 43,99",
            image: "imagens/atum.png"
        },
        {
            name: "Atum II",
            ingredients: "Atum, cebola e mussarela, ou catupiry original.",
            price: "R$ 58,99 - R$ 47,99",
            image: "imagens/atumii.png"
        },
        {
            name: "Bacon",
            ingredients: "Bacon e mussarela.",
            price: "R$ 54,99 - R$ 43,99",
            image: "imagens/bacon.png"
        },
        {
            name: "Baiacatu",
            ingredients: "Mussarela, calabresa, catupiry original e cebola.",
            price: "R$ 56,99 - R$ 45,99",
            image: "imagens/baiacatu.png"
        },
        {
            name: "Baiana",
            ingredients: "Calabresa moída, ovos, pimenta, cebola e mussarela.",
            price: "R$ 52,99 - R$ 41,99",
            image: "imagens/baiana.png"
        },
        {
            name: "Batata palha",
            ingredients: "Mussarela e batata palha.",
            price: "R$ 53,99 - R$ 33,99",
            image: "imagens/batatapalha.png"
        },
        {
            name: "Bauru",
            ingredients: "Presunto, mussarela e tomate.",
            price: "R$ 47,99 - R$ 36,99",
            image: "imagens/bauru.png"
        },
        {
            name: "Brócolis",
            ingredients: "Brócolis, mussarela e alho frito.",
            price: "R$ 53,99 - R$ 42,99",
            image: "imagens/brocolis.png"
        },
        {
            name: "Caipira",
            ingredients: "Frango, milho, mussarela, catupiry original e bacon.",
            price: "R$ 54,99 - R$ 43,99",
            image: "imagens/caipira.png"
        },
        {
            name: "Caiçara",
            ingredients: "Calabresa moída, frango, catupiry original, bacon e batata palha.",
            price: "R$ 57,99 - R$ 46,99",
            image: "imagens/caicara.png"
        },
        {
            name: "Calabresa",
            ingredients: "Calabresa e cebola.",
            price: "R$ 44,99 - R$ 33,99",
            image: "imagens/calabresa.png"
        },
        {
            name: "Calabresa Especial",
            ingredients: "Calabresa, mussarela, barbecue e pimenta biquinho.",
            price: "R$ 57,99 - R$ 46,99",
            image: "imagens/calabresaespecial.png"
        },
        {
            name: "Calacatu",
            ingredients: "Calabresa, catupiry original e cebola.",
            price: "R$ 53,99 - R$ 42,99",
            image: "imagens/calacatu.png"
        },
        {
            name: "Camarão",
            ingredients: "Camarão e mussarela.",
            price: "R$ 75,99 - R$ 64,99",
            image: "imagens/camarao.png"
        },
        {
            name: "Camarão Especial",
            ingredients: "Camarão, mussarela e catupiry original.",
            price: "R$ 79,99 - R$ 68,99",
            image: "imagens/camaraoespecial.png"
        },
        {
            name: "Carne Seca",
            ingredients: "Carne seca, mussarela e cebola.",
            price: "R$ 57,99 - R$ 46,99",
            image: "imagens/carneseca.png"
        },
        {
            name: "Carne Seca Especial",
            ingredients: "Carne seca, ovos, milho, ervilha, palmito, catupiry original e cebola.",
            price: "R$ 68,99 - R$ 57,99",
            image: "imagens/carnesecaespecial.png"
        },
        {
            name: "Delicia",
            ingredients: "Calabresa, bacon, mussarela e cheddar.",
            price: "R$ 57,99 - R$ 46,99",
            image: "imagens/delicia.png"
        },
        {
            name: "Doritos",
            ingredients: "Mussarela, cheddar, doritos e pimenta.",
            price: "R$ 61,99 - R$ 50,99",
            image: "imagens/doritos.png"
        },
        {
            name: "Francesa",
            ingredients: "Presunto, mussarela, catupiry original, cebola e bacon.",
            price: "R$ 58,99 - R$ 47,99",
            image: "imagens/francesa.png"
        },
        {
            name: "Frango",
            ingredients: "Frango e catupiry original.",
            price: "R$ 56,99 - R$ 45,99",
            image: "imagens/frango.png"
        },
        {
            name: "Frango Especial",
            ingredients: "Frango, milho, ervilha, palmito, cebola, mussarela e bacon.",
            price: "R$ 61,99 - R$ 45,99",
            image: "imagens/frangoespecial.png"
        },
        {
            name: "Itália",
            ingredients: "Frango, cebola, cream cheese, bacon e pimenta.",
            price: "R$ 56,99 - R$ 45,99",
            image: "imagens/italia.png"
        },
        {
            name: "Leopoldina",
            ingredients: "Peito de peru, cream cheese, mussarela, alho frito e tomate.",
            price: "R$ 61,99 - R$ 50,99",
            image: "imagens/leopoldina.png"
        },
        {
            name: "Lombo",
            ingredients: "Lombo, cebola, catupiry original, mussarela e bacon.",
            price: "R$ 57,99 - R$ 46,99",
            image: "imagens/lombo.png"
        },
        {
            name: "Marguerita",
            ingredients: "Mussarela, manjericão, tomate e parmesão.",
            price: "R$ 49,99 - R$ 38,99",
            image: "imagens/marguerita.png"
        },
        {
            name: "Milho",
            ingredients: "Mussarela e milho.",
            price: "R$ 44,99 - R$ 33,99",
            image: "imagens/milho.png"
        },
        {
            name: "Mussarela",
            ingredients: "Mussarela e tomate.",
            price: "R$ 44,99 - R$ 33,99",
            image: "imagens/mussarela.png"
        },
        {
            name: "Napolitana",
            ingredients: "Mussarela, tomate e parmesão.",
            price: "R$ 44,99 - R$ 33,99",
            image: "imagens/napolitana.png"
        },
        {
            name: "Palmito",
            ingredients: "Palmito, mussarela e bacon.",
            price: "R$ 55,99 - R$ 44,99",
            image: "imagens/palmito.png"
        },
        {
            name: "Peito de peru",
            ingredients: "Peito de peru, catupiry original e bacon.",
            price: "R$ 52,99 - R$ 41,99",
            image: "imagens/peitodeperu.png"
        },
        {
            name: "Pepperoni",
            ingredients: "Pepperoni e mussarela.",
            price: "R$ 56,99 - R$ 45,99",
            image: "imagens/pepperoni.png"
        },
        {
            name: "Pizza Costela",
            ingredients: "Costela desfiada, mussarela, pimenta biquinho e molho barbecue.",
            price: "R$ 68,99 - R$ 57,99",
            image: "imagens/costela.png"
        },
        {
            name: "Pizza Hot Holl",
            ingredients: "Atum em pedaço, mussarela, cream cheese, cebolinha, alho frito, pimenta biquinho e molho tarê.",
            price: "R$ 76,99 - R$ 65,99",
            image: "imagens/hotholl.png"
        },
        {
            name: "Pizza na brasa",
            ingredients: "Linguiça toscana na brasa, mussarela, vinagrete e pimenta biquinho.",
            price: "R$ 60,99 - R$ 49,99",
            image: "imagens/nabrasa.png"
        },
        {
            name: "Pizza Nobre Especial",
            ingredients: "Presunto, milho, cebola, bacon, mussarela, parmesão e palmito.",
            price: "R$ 59,99 - R$ 48,99",
            image: "imagens/nobreespecial.png"
        },
        {
            name: "Pizza Philadhelpia",
            ingredients: "Peito de peru, cream cheese, tomate seco, manjericão, oregano e azeitona.",
            price: "R$ 60,99 - R$ 49,99",
            image: "imagens/philadhelpia.png"
        },
        {
            name: "Pizza Temaki",
            ingredients: "Atum em pedaço, cream cheese, molho tarê e cebolinha.",
            price: "R$ 64,99 - R$ 53,99",
            image: "imagens/temaki.png"
        },
        {
            name: "Pizza Tomate Seco",
            ingredients: "Brócolis, ervilha, milho, mussarela e tomate seco.",
            price: "R$ 59,99 - R$ 48,99",
            image: "imagens/tomateseco.png"
        },
        {
            name: "Portuguêsa",
            ingredients: "Presunto, mussarela, ovos, palmito, ervilha e cebola.",
            price: "R$ 57,99 - R$ 46,99",
            image: "imagens/portuguesa.png"
        },
        {
            name: "Portuguêsa Especial",
            ingredients: "Lombo, milho, ervilha, ovos, palmito, champignon, cebola, mussarela e bacon.",
            price: "R$ 61,99 - R$ 49,99",
            image: "imagens/portuguesaespecial.png"
        },
        {
            name: "Provolone",
            ingredients: "Mussarela, provolone e bacon.",
            price: "R$ 61,99 - R$ 44,99",
            image: "imagens/provolone.png"
        },
        {
            name: "Quatro Queijos",
            ingredients: "Mussarela, provolone, parmesão e gorgonzola.",
            price: "R$ 57,99 - R$ 46,99",
            image: "imagens/quatroqueijo.png"
        },
        {
            name: "Toscana",
            ingredients: "Calabresa, cebola e mussarela.",
            price: "R$ 56,99 - R$ 45,99",
            image: "imagens/toscana.png"
        },
    ],
    bordas: [
        {
            name: "Catupiry Original",
            ingredients: "Recheio de borda.",
            price: "R$ 10,00",
            image: "imagens/catupiry.png"
        },
        {
            name: "Cheddar",
            ingredients: "Recheio de borda.",
            price: "R$ 5,00",
            image: "imagens/cheddar.png"
        },
        {
            name: "Chocolate ao leite",
            ingredients: "Recheio de borda.",
            price: "R$ 8,00",
            image: "imagens/chocolateborda.png"
        },
        {
            name: "Chocolate branco",
            ingredients: "Recheio de borda.",
            price: "R$ 8,00",
            image: "imagens/chocolatebranco.png"
        },
        {
            name: "Cream Cheese",
            ingredients: "Recheio de borda.",
            price: "R$ 10,00",
            image: "imagens/creamcheese.png"
        },
        {
            name: "Doce de leite",
            ingredients: "Recheio de borda.",
            price: "R$ 10,00",
            image: "imagens/docedeleite.png"
        },
        {
            name: "Goiabada",
            ingredients: "Recheio de borda.",
            price: "R$ 8,00",
            image: "imagens/goiabada.png"
        },
        {
            name: "Pão de Alho",
            ingredients: "Recheio de borda.",
            price: "R$ 10,00",
            image: "imagens/paodealho.png"
        },
        {
            name: "Requeijão",
            ingredients: "Recheio de borda.",
            price: "R$ 5,00",
            image: "imagens/requeijao.png"
        }
    ],
    doces: [
        { 
            name: "Abacaxi nevada", 
            ingredients: "Acabaxi, chocolate branco e canela.", 
            price: "R$ 55,99 - R$ 44,99",
            image: "imagens/abacaxinevada.png"
        },
        { 
            name: "Banana nevada", 
            ingredients: "Banana, chocolate branco e canela.", 
            price: "R$ 54,99 - R$ 43,99",
            image: "imagens/banananevada.png"
        },
        { 
            name: "Banana", 
            ingredients: "Banana, leite condensado e canela.", 
            price: "R$ 44,99 - R$ 33,88",
            image: "imagens/banana.png"
        },
        { 
            name: "Branca de neve", 
            ingredients: "Chocolate branco, coco ralado, leite condensado e morango.", 
            price: "R$ 49,99 - R$ 43,99",
            image: "imagens/brancadeneve.png"
        },
        { 
            name: "Branca de neve II", 
            ingredients: "Chocolate branco, leite condensado, morango e leite em pó.", 
            price: "R$ 54,99 - R$ 47,99",
            image: "imagens/brancadeneveii.png"
        },
        { 
            name: "Chocolate", 
            ingredients: "Chocolate ao leite e granulado", 
            price: "R$ 43,99 - R$ 32,99",
            image: "imagens/chocolate.png"
        },
        { 
            name: "M&Ms", 
            ingredients: "Chocolate ao leite, M&Ms e granulado.", 
            price: "R$ 58,99 - R$ 47,99",
            image: "imagens/mms.png"
        },
        { 
            name: "Morango", 
            ingredients: "Chocolate ao leite, chocolate branco e bolacha oreo.", 
            price: "R$ 53,99 - R$ 42,99",
            image: "imagens/morango.png"
        },
        { 
            name: "Oreo", 
            ingredients: "Chocolate ao leite, chocolate branco e bolacha oreo.", 
            price: "R$ 54,99 - R$ 43,99",
            image: "imagens/oreo.png"
        },
        { 
            name: "Romeo e Julieta", 
            ingredients: "Mussarela e goiabada.", 
            price: "R$ 47,99 - R$ 36,99",
            image: "imagens/romeoejulieta.png"
        },
    ],
    bebidas: [
        { 
            name: "Coca-Cola Lata 350ml", 
            ingredients: "Refrigerante 350ml.", 
            price: "R$ 6,00",
            image: "imagens/cocalata.png"
        },
        { 
            name: "Coca-Cola 2L", 
            ingredients: "Refrigerante 2 litros.", 
            price: "R$ 15,00",
            image: "imagens/coca2l.png"
        },
        { 
            name: "Coca-Cola Zero 2L", 
            ingredients: "Refrigerante 2 litros.", 
            price: "R$ 18,00",
            image: "imagens/cocazero2l.png"
        },
        { 
            name: "Fanta Laranja 2L", 
            ingredients: "Refrigerante de laranja 2 litros.", 
            price: "R$ 13,00",
            image: "imagens/fantalaranja2l.png"
        },
        { 
            name: "Fanta Uva 2L", 
            ingredients: "Refrigerante de uva 2 litros.", 
            price: "R$ 13,00",
            image: "imagens/fantauva2l.png"
        },
        { 
            name: "Guaraná Antarctica 2L", 
            ingredients: "Refrigerante de guaraná 2 litros.", 
            price: "R$ 13,00",
            image: "imagens/guarana2l.png"
        },
        { 
            name: "Guaraná Convenção 2L", 
            ingredients: "Refrigerante de guaraná 2 litros.", 
            price: "R$ 8,00",
            image: "imagens/guaranaconvencao2l.png"
        },
        { 
            name: "Suco Del Valle Uva", 
            ingredients: "Suco de uva.", 
            price: "R$ 10,00",
            image: "imagens/delvaleuva.png"
        },
        { 
            name: "Suco Del Valle Laranja", 
            ingredients: "Suco de laranja.", 
            price: "R$ 10,00",
            image: "imagens/delvalelaranja.png"
        },
        { 
            name: "Heineken 269ml", 
            ingredients: "Cerveja.", 
            price: "R$ 7,00",
            image: "imagens/heineken.png"
        },
        { 
            name: "Heineken long neck", 
            ingredients: "Cerveja.", 
            price: "R$ 10,00",
            image: "imagens/heinekenlongneck.png"
        },
        { 
            name: "Skol", 
            ingredients: "Cerveja.", 
            price: "R$ 5,00",
            image: "imagens/skol.png"
        },
        { 
            name: "Budweiser 269ml", 
            ingredients: "Cerveja.", 
            price: "R$ 5,00",
            image: "imagens/budweiser.png"
        },
        { 
            name: "Original 269ml", 
            ingredients: "Cerveja.", 
            price: "R$ 6,00",
            image: "imagens/original.png"
        },
        { 
            name: "Água", 
            ingredients: "Água.", 
            price: "R$ 3,00",
            image: "imagens/agua.png"
        },
        { 
            name: "Vinho Pérgola Suave 1L", 
            ingredients: "Vinho Suave.", 
            price: "R$ 30,00",
            image: "imagens/vinhopergola.png"
        },
    ]
};

function showCategory(category) {
    const menu = document.getElementById('menu');
    menu.innerHTML = '';

    const items = menuData[category];

    if (!items) {
        console.error(`Categoria "${category}" não encontrada!`);
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
                <p class="ingredients" id="ingredients-${category}-${index}">Ingredientes: ${item.ingredients}</p>
            </div>
        `;

        itemDiv.addEventListener('click', () => {
            const ingredients = document.getElementById(`ingredients-${category}-${index}`);
            ingredients.classList.toggle('show');
        });

        menu.appendChild(itemDiv);
    });
}
