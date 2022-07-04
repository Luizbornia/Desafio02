import {clientes} from './clientes.js'
import {produtos} from './produtos.js'

const listMenu = document.querySelectorAll("#listMenu > li")

// NAVEGAÇÃO ENTRE JANELAS (ABRIR/FECHAR)
let janelaAberta =[]
listMenu.forEach(item => {
    item.addEventListener('click', function(){

        if(janelaAberta.length != 0){
            let fecharJanela = document.querySelector(`#${janelaAberta[0]}`)
            fecharJanela.classList.add('fechar')
            janelaAberta = []        
        }

        let janela = document.querySelector(`#${item.dataset.janela}`)
        janela.classList.remove('fechar');
        janelaAberta.push(item.dataset.janela)
    });

})

// CONTROLE DOS CLIENTES
// CARREGAR DADOS DO FORM
const codCliente  = document.querySelector("#codCliente")
const nomeCliente = document.querySelector("#nomeCliente")
const dataCadCli  = document.querySelector("#dataCadCli")
    
    // inicio em i=0 para clientes e produtos
    let i = 0;

    codCliente.value  = clientes[i].codCliente
    nomeCliente.value = clientes[i].nomeCliente
    dataCadCli.value  = clientes[i].dataCadCli

//#proxCli', '#antCli
const btnA = document.querySelector('#proxCli')
const btnV = document.querySelector('#antCli')

btnA.addEventListener('click', function(){
    i++
    if(i < clientes.length){
        codCliente.value  = clientes[i].codCliente
        nomeCliente.value = clientes[i].nomeCliente
        dataCadCli.value  = clientes[i].dataCadCli
    }else{
        alert('Não há mais registros')
        i--
    }
})

btnV.addEventListener('click', function(){
    i--
    if(i >= 0){
        codCliente.value  = clientes[i].codCliente
        nomeCliente.value = clientes[i].nomeCliente
        dataCadCli.value  = clientes[i].dataCadCli
    }else{
        alert("Primeiro registro")
        i++
    }
})

// NOVO CLIENTE E SALVAR

const novoCli   = document.querySelector('#novoCli')
const salvarCli = document.querySelector('#salvarCli')

// LET USADO PARA CLIENTE E PRODUTO
let salvarStatus;

novoCli.addEventListener('click', function(){
    const data          = new Date();
    const dataFormatada = data.toLocaleDateString('pt-BR', {timeZone:'UTC'});
    codCliente.value    = clientes.length + 1;
    nomeCliente.value   = '';
    dataCadCli.value    = dataFormatada;
    salvarStatus        = true;
})

salvarCli.addEventListener('click', function(){
    if(salvarStatus){
    clientes.push({
        'codCliente' : codCliente.value,
        'nomeCliente': nomeCliente.value,
        'dataCadCli' : dataCadCli.value,
    })
    alert('Dados cadastrados com sucesso!')
    i++
    codCliente.value  = clientes[i].codCliente
    nomeCliente.value = clientes[i].nomeCliente
    dataCadCli.value  = clientes[i].dataCadCli
    salvarStatus      = false;

    }else{
        alert('Clique em novo para adicionar um novo registro')
    }
})

// CONTROLE DOS PRODUTOS
// CARREGAR DADOS DO FORM

const codProduto        = document.querySelector("#codProduto")
const descProduto       = document.querySelector("#descProduto")
const precoProduto      = document.querySelector("#precoProduto")
const qtdEstoqueProd    = document.querySelector("#qtdEstoqueProd")

    codProduto.value     = produtos[i].codProduto
    descProduto.value    = produtos[i].descProduto
    precoProduto.value   = produtos[i].precoProduto
    qtdEstoqueProd.value = produtos[i].qtdEstoqueProd

// PRODUTO ANTERIOR E PRÓXIMO PRODUTO

const btnProxProd = document.querySelector('#proxProd')
const btnAntProd  = document.querySelector('#antProd')

btnProxProd.addEventListener('click',function(){
    i++
    if(i < produtos.length){
        codProduto.value     = produtos[i].codProduto
        descProduto.value    = produtos[i].descProduto
        precoProduto.value   = produtos[i].precoProduto
        qtdEstoqueProd.value = produtos[i].qtdEstoqueProd
    }else{
        alert('Não há mais registros')
        i--
    }
})

btnAntProd.addEventListener('click',function(){
    i--
    if(i >= 0){
        codProduto.value     = produtos[i].codProduto
        descProduto.value    = produtos[i].descProduto
        precoProduto.value   = produtos[i].precoProduto
        qtdEstoqueProd.value = produtos[i].qtdEstoqueProd
        }else{
        alert('Primeiro registro')
        i++
    }
})

// NOVO PRODUTO E SALVAR

const novoProd   = document.querySelector('#novoProd')
const salvarProd = document.querySelector('#salvarProd')

novoProd.addEventListener('click',function(){
    codProduto.value      = produtos.length + 1;
    descProduto.value     = '';
    precoProduto.value    = '';
    qtdEstoqueProd.value  = '';
    salvarStatus          = true;
})

salvarProd.addEventListener('click',function(){
    if(salvarStatus){
        clientes.push({
            'codProduto'    : codProduto.value,
            'descProduto'   : descProduto.value,
            'precoProduto'  : precoProduto.value,
            'qtdEstoqueProd': qtdEstoqueProd.value
        })
        alert('Dados cadastrados com sucesso!')
        i++
        codProduto.value     = produtos[i].codProduto
        descProduto.value    = produtos[i].descProduto
        precoProduto.value   = produtos[i].precoProduto
        qtdEstoqueProd.value = produtos[i].qtdEstoqueProd
        salvarStatus         = false;
    }else{
        alert('Clique em novo para adicionar um novo registro')
    }
})

//PEDIDOS

const codCliPedido  = document.querySelector("#codCliPedido");
const nomeCliPedido = document.querySelector("#nomeCliPedido");
const iCodProduto   = document.querySelector("#iCodProduto");
const iDecProduto   = document.querySelector("#iDecProduto");
const iPrecoProduto = document.querySelector("#iPrecoProduto");
const iQtdProduto   = document.querySelector("#iQtdProduto");
const valorTotal    = document.querySelector("#valorTotal");

codCliPedido.addEventListener('blur', function(){
    for(let cli of clientes){
        if(codCliPedido.value == cli.codCliente){
            nomeCliPedido.value = cli.nomeCliente;
        }
    }
})

iCodProduto.addEventListener('blur', function(){
    for(let pro of produtos){
        if(iCodProduto.value == pro.codProduto){
            iDecProduto.value = pro.descProduto
            iPrecoProduto.value = pro.precoProduto
        }
    }
})

const lancarItemPedido = document.querySelector('#lancarItemPedido')
const tabelaItensPedido= document.querySelector('.tabelaItensPedido')

    let trNova     = document.createElement('tr')
    let tdItem     = document.createElement('td')
    let tdDesc     = document.createElement('td')
    let tdPreco    = document.createElement('td')
    let tdQtd      = document.createElement('td')
    let tdSubTotal = document.createElement('td')
    let tdAcao     = document.createElement('td')

    tdItem.textContent  =  iCodProduto.value
    tdDesc.textContent  =  iDecProduto.value
    tdPreco.textContent =  iPrecoProduto.value
    tdQtd.textContent   =  iQtdProduto.value

let subTotal = 0;
let totalGeral = 0;
let verificaItemPedido = [];

lancarItemPedido.addEventListener('click', function (){
    if(verificaItemPedido.indexOf(iCodProduto.value) == -1){

    let trNova     = document.createElement('tr')
    let tdItem     = document.createElement('td')
    let tdDesc     = document.createElement('td')
    let tdPreco    = document.createElement('td')
    let tdQtd      = document.createElement('td')
    let tdSubTotal = document.createElement('td')

    trNova.appendChild(tdItem)
    trNova.appendChild(tdDesc)
    trNova.appendChild(tdPreco)
    trNova.appendChild(tdQtd)
    trNova.appendChild(tdSubTotal)
   
    tdItem.textContent  =  iCodProduto.value
    tdDesc.textContent  =  iDecProduto.value
    tdPreco.textContent =  iPrecoProduto.value
    tdQtd.textContent   =  iQtdProduto.value

    subTotal = Number(iPrecoProduto.value) * Number(iQtdProduto.value)
    tdSubTotal.textContent = subTotal.toFixed(2)

    totalGeral = (totalGeral + subTotal)
    valorTotal.textContent = `R$ ${totalGeral.toFixed(2)}`

    tabelaItensPedido.appendChild(trNova)
    verificaItemPedido.push(iCodProduto.value)

    }else{
        alert('Item já cadastrado')
    }
})