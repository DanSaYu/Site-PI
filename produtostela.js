var mascara = {
    img:["img/coca-cola.png"],
    titulo:"Mascara com Elastico Azul Claro com 50 unidades - SP Protection",
    codigo: 167517000,
    preco: [29.90, 19.90, 19.90],
    descricao: {
        titulo:"O que é a Máscara Descartável com Elástico - SP Protection?",
        paragrafo: "A Máscara SP Protection é uma máscara descartável composta de fibras 100% polipropileno, e apresenta como característica uma estrutura plana, flexível e porosa, constituída de uma manda de filamentos orientados ao acaso e consolidados termicamente. Diferente do tecido de algodão por não apresentar entrelaçamento organizado dos fios.Caracteriza-se pela combinação de suas tecnologias – o spunbond, caracterizando resistência mecânica, e o meltblown, determinando efetiva barreira microbiana."
    },
    caracteristicas: {
        titulo: "Características da Máscara Descartável com Elástico - SP Protection:",
        items: ["* Contém clip nasal;", "* Contém 3 pregas horizontais;", "* Com elástico fino e super confortável;", "* Não libera fiapos;* Baixa inflamabilidade;", "* Atóxico;* 100% Não-Tecido Polipropileno;", "* Hipoalergênico;", "* Boa resistência mecânica;", "* Leve;", "* Antisséptico;", "* Excelente distribuição e homogeneidade dos filamentos."]

    },
    quantidade: "#"
}

var caracteristicas = "";
mascara.caracteristicas.items.forEach(item=>{
    caracteristicas = caracteristicas+`<li>${item}</li>`
})



var main = document.getElementById("main");
main.innerHTML = `<div class="local">
<a href="index.html">Home</a>
>
<a href="produtos.html">Categoria</a>
>
(COMPRA)
</div>
<div id="produto">
<div class="produto" >
    <img src="${mascara.img[0]}" alt="Imagem do pruduto">
        <div>
            <h2>${mascara.titulo}</h2>
            <h6>Código ${mascara.codigo}</h6>
        <hr>
        <div class="precos">
            <h6>R$${mascara.preco[0]}</h6>
            <h2>R$${mascara.preco[1]}</h2>
            <h6>R$${mascara.preco[2]} à vista</h6>
        </div>
        <div class="carrinho">
            <!--<form action="#">-->
                <input type="number" value="1">
                <button type="submit" class="carrinho-btn">Adicionar ao carrinho</button>
            <!--</form>--> 
        </div>
    </div>
</div>
<div class="produtos-carousel">
    <ul>
        <li><a href="#"><img src="img/coca-cola.png" alt=""></a></li>
        <li><a href="#"><img src="img/coca-cola.png" alt=""></a></li>
        <li><a href="#"><img src="img/coca-cola.png" alt=""></a></li>
        <li><a href="#"><img src="img/coca-cola.png" alt=""></a></li>
    </ul>
</div>
<hr>
<div class="descricao">
    <h2>${mascara.descricao.titulo}</h2>
    <p>${mascara.descricao.paragrafo}</p>
</div>
<div class="caracteristicas">
    <h2>${mascara.caracteristicas.titulo}</h2>
    <ul>
        ${caracteristicas}
    </ul>
</div>
<div class="quantidade">
    <h2>Quantidade</h2>
    <p>Contem "${mascara.quantidade}" produtos</p>
</div>
</div>`