// Captura o elemento do DOM e altera o nome
const nome = document.getElementById("username");
nome.innerText = "Vagner na Web";

// Dados simulando o banco de dados
const string = '[{"frase": "acesse o meu curso Python", "link": "https://www.elevify.com/pt-br/cursos/tecnologia/tecnologia/curso-basico-de-python-5be12"}, {"frase": "acesse o meu curso HTML", "link": "https://www.elevify.com/pt-br/cursos/tecnologia/tecnologia/curso-de-html-f65ad"}, {"frase": "acesse o meu curso PHP", "link": "https://www.elevify.com/pt-br/cursos/tecnologia/tecnologia/curso-de-php-para-iniciantes-b25dd"}]';
const json = JSON.parse(string);

const container = document.getElementById("container_link");

// Cria os links dinamicamente sem apagar o HTML existente
json.forEach((item, i) => {
    // Cria a div para o botão
    let div = document.createElement("div");
    div.className = "button-list";
    div.id = "link" + i;
    div.innerText = item.frase;
    
    // Adiciona o evento de clique corretamente usando .href
    div.addEventListener("click", function () {
        window.location.href = item.link;
    });

    // Insere o botão na tela
    container.appendChild(div);
});
