# Sistema de Adoção

Como um primeiro projeto "profissional", desenvolvi esse sistema utilizando Node,Mongo db e Express para o Back-end,
e o front-end foi desenvolvido utilizando a template engine EJS, com alguns scripts em javascript e a estilização feita com css.

O projeto é bem básico, a proposta é cadastrar por meio de um formulário pontos de adoção incluindo data, hora, endereço e o nome do organizador,
caso alguém queira doar ou compartilhar pontos de adoção, essas informações serão armazenadas no banco de dados, em outra página será exibido cada 
ponto cadastrado, esta mesma página possui um input de busca onde é possivel pesquisar por pontos utilizando o nome do município, serão retornados todos
os pontos de adoção do município consultado.

Utilizando o pacote node-cron, uma função é executada a cada 24 horas para excluir eventos que ocorreram anteriormente

O projeto contém uma página inicial com um texto, uma imagem e dois links, um link levando para a página de cadastro e outro levando para a página
com os pontos cadastrados, a página de cadastro e a página com os pontos cadastrados também possuem dois links, evidentemente os links que correspondem 
a elas são susbstituídos pelo link que leva a página inicial, com a página de cadastro contendo o formulário para o cadastro
e á pagina de pontos cadastrados contendo um input de busca e cards com as informações.

**Pré-requisitos**

  Para rodar o projeto será necessário ter Node e Mongodb instalados em sua máquina.
  
**Instalação**

  ##### _Clonando o Repositório_
    
    git clone https://github.com/ThiagoOli/sistema-de-adocao.git
    
    cd sistema-de-adocao
    
  ##### _Instalando depêndencias_
    
    npm install
    
   ou
    
    yarn
    
**Rodando o App**

  Rode o mongodb conforme a sua documentação.
  
  A aplicação foi desenvolvida com auxílio do pacote Nodemon, por isso ao rodar o app em modo de desenvolvimento
  utilize o comando abaixo:
      
      npm start
      
  Para rodar o app em modo de produção:
  
      node app.js
       
