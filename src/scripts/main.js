document.addEventListener('DOMContentLoaded', function(){

    // Seleciona o elemento da imagem com a classe 'click__container__img'
const imagenClick = document.querySelector('.click__container__img');
    // Seleciona o elemento com a classe 'click' que será ocultado
const sumirClick = document.querySelector('.click');
    // Seleciona o elemento para onde será feita a rolagem ao clicar
const rolarAte = document.querySelector('.header__container__img');
    // Seleciona o conteúdo principal que será exibido após o clique
const apareceMain = document.querySelector('.main');


    // Seleciona o elemento de clique para abrir o elenco
const elencoClick = document.querySelectorAll('[data-tab-question]');
    // Seleciona o artigo ou conteúdo da resposta do elenco
const elencoArticle = document.querySelectorAll('[data-tab-resposta]');
const clickIcone = document.querySelector('.icone')

function roleAteTopo(){
    window.scrollTo({
        top: rolarAte.offsetTop, // Rolagem até a posição do elemento 'rolarAte'
        behavior: 'smooth' // Comportamento de rolagem suave
    });
    
}


clickIcone.addEventListener('click', function(){  
    roleAteTopo() // Faz a rolagem suave até o conteúdo
})


// Adiciona o evento de clique na imagem 'imagenClick'
imagenClick.addEventListener('click', function(){
    
    // Exibe o conteúdo principal após um pequeno atraso
    setTimeout(function(){
    apareceMain.classList.add('main--is-visible'); // Adiciona uma classe para tornar o conteúdo visível

        // Faz a rolagem suave até o conteúdo, agora que está visível
        roleAteTopo()
    }, 150); // Atraso de 150ms para garantir que o conteúdo seja visível antes da rolagem

    // Oculta o conteúdo de 'sumirClick' após um pequeno atraso
    setTimeout(function(){
        sumirClick.classList.add('click--is-hidden'); // Adiciona uma classe para ocultar o elemento

        // Faz a rolagem de volta ao topo da página
        window.scrollTo({
            top: 0, // Rolagem até o topo
            behavior: 'smooth' // Comportamento de rolagem suave
        });
    }, 570); // Atraso de 570ms antes de ocultar o conteúdo e rolar ao topo

});

/* quando o item do elenco for selecionado deve fazer o artircle aparcer */

elencoClick.forEach(function(item){
    item.addEventListener('click',function(){

        // Pega o valor do atributo 'data-tab-question' do item clicado
        const question = item.getAttribute('data-tab-question')

        // Oculta todos os artigos
        elencoArticle.forEach(function(article){
            article.style.display = 'none'
            
        })

        // Seleciona o artigo de resposta correspondente
        const respostaArticle = document.querySelector(`[data-tab-resposta="${question}"]`)
        
        // Exibe o artigo correspondente
        if(respostaArticle){
            respostaArticle.style.display= 'block'
            
            respostaArticle.style.transition = ' 0.5s ease'
            respostaArticle.classList.add(`elenco__div__art--is-${question}`)
        }

    })
})


});