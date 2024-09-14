document.addEventListener('DOMContentLoaded', function(){

    const imagenClick = document.querySelector('.click__container__img');
    const sumirClick = document.querySelector('.click');
    const rolarAte = document.querySelector('.header__container__img');
    const apareceMain = document.querySelector('.main')
    imagenClick.addEventListener('click', function(){
        
        // Exibe o conteúdo principal após um pequeno atraso
        setTimeout(function(){
            apareceMain.classList.add('main--is-visible');

            // Faz a rolagem suave até o conteúdo, agora que está visível
            window.scrollTo({
                top: rolarAte.offsetTop,
                behavior: 'smooth'
            });
        }, 150); // Atraso para garantir que o conteúdo seja visível antes da rolagem


            // Oculta o conteúdo de sumirClick, se necessário
            

            setTimeout(function(){
                sumirClick.classList.add('click--is-hidden')

                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            },570)

            
    });

});
