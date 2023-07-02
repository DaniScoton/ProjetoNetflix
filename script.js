const perfis = document.querySelectorAll('.perfil');
var perfilSelecionadoid = null;

// Adiciona um evento de mouseover para cada <li>
perfis.forEach((perfil) => {
    perfil.addEventListener('mouseover', () => {
        limparEstilo();

        if (perfilSelecionadoid != null){
            console.log(perfilSelecionadoid);
            var perfilSelecionado = document.getElementById(perfilSelecionadoid);
            const img =  perfilSelecionado.querySelector('img');
            const span = perfilSelecionado.querySelector('span');

            img.style.boxShadow = '0 0 1px 3px rgb(245, 242, 242)';
            span.style.color = 'rgb(245, 242, 242)';
        }

        // Obtém a imagem e o span dentro da <li> atual
        const img = perfil.querySelector('img');
        const span = perfil.querySelector('span');
    
        // Modifica as propriedades da imagem e do span
        img.style.boxShadow = '0 0 1px 3px rgb(245, 242, 242)';
        span.style.color = 'rgb(245, 242, 242)';
    });

    perfil.addEventListener('mouseout', () => {
        limparEstilo(); 
    });

    perfil.addEventListener('click', () => {
        adicionarBoxShadow(perfil);
        perfilSelecionadoid = perfil.id;
    });
});

function limparEstilo() {
    perfis.forEach((p) => {
        if(perfilSelecionadoid != p.id){
            
            const img = p.querySelector('img');
            const span = p.querySelector('span');
    
            img.style.boxShadow = 'none';
            span.style.color = '#515151';
        }
    });
};

function adicionarBoxShadow(perfil) {
    switch(perfil.id){
        case 'verde':
            document.body.style.boxShadow = 'inset 0 0 100px rgba(133, 167, 62, 0.5)';
            break;
        case 'vermelho':
            document.body.style.boxShadow = 'inset 0 0 100px rgba(170, 0, 1, 0.5)';
            break;
        case 'azul':
            document.body.style.boxShadow = 'inset 0 0 100px rgba(44, 138, 247, 0.5)';
            break;
        case 'verde-agua':
            document.body.style.boxShadow = 'inset 0 0 100px rgba(13, 126, 128, 0.5)';
            break;   
        case 'amarelo':
            document.body.style.boxShadow = 'inset 0 0 100px rgba(223, 153, 55, 0.5)';
            break;  
    };
}