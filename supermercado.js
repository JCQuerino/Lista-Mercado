var itens = [];

var btnAction = document.querySelector('input[type=submit]');

btnAction.addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nomeProduto]');
    var valorProduto = document.querySelector('input[name=valorProduto]');

    itens.push({
        nome: nomeProduto.value,
        valor: valorProduto.value,
    })
    
    let listaProdutos = document.querySelector('.lista-produtos');
    listaProdutos.innerHTML = '';
    let soma = 0;

    itens.map(function(val){
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML += `

        <div class="lista-produtos-single">
            <h3>`+val.nome+`</h3>
            <span>R$ `+val.valor+`</span>
        </div>

        `    
    })
    soma = soma.toFixed(2)
    nomeProduto.value = '';
    valorProduto.value = '';

    let valorSoma = document.querySelector('.somaAndLimparWrapper h3');
    let btnLimpar = document.querySelector('.somaAndLimparWrapper button');
    btnLimpar.style.display = 'block';
    btnLimpar.addEventListener('click',()=>{
        itens = [];
        listaProdutos.innerHTML = '';
        valorSoma.innerHTML = 'Total: R$ 0';
        btnLimpar.style.display = 'none';
    })
    valorSoma.innerHTML = `Total: R$ ${soma}`;
    
})