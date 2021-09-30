#Language: pt
#Language: pt

Funcionalidade: Pesquisar no youtube e Validar o número total de visualizações 
    como usuario no youtube 
    quero pesquisar um canal
    Para validar seu número total de visualização 


    Cenario: pesquisar compasso uol e validar se o número total de visualização é maior que 30k
        Dado que esteja no home do youtube
        E pesquisar por "Compasso UOL"
        Então deve entrar no canal da Compasso UOL
        E acessar a aba "sobre"
        Então Deverá validar se o número total de visualização é maior que 30k