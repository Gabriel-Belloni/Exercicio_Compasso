#Language: pt

Funcionalidade: Validar se o primeiro livro contém determinada palavra em seu nome
    Como usuario no amazon.com.br
    Quero pesquisar um livro no amazon.com.br
    Para validar se o primeiro livro contem a palavra "Syllabus"


    Cenario: pesquisar um livro e validar se o primeiro resultado possui a palavra "Syllabus" em seu nome
        Dado que esteja na pagina amazon.com.br
        Quando acessar a aba de livros
        E pesquisar "ISTQB"
        Entao o nome do primeiro livro deverá conter a palavra "Syllabus"