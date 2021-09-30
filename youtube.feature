#Language: pt

Funcionalidade: Pesquisar no youtube e Validar o número total de visualizações 
    Como usuario no youtube 
    Quero pesquisar um canal
    Para validar seu número total de visualizações 


    Cenario: pesquisar compasso uol e validar se o número total de visualização é maior que 30k
        Dado que esteja no home do youtube
        Quando pesquisar por "Compasso UOL"
        E acessar o canal da Compasso UOL
        E acessar a aba "sobre"
        Então Deverá validar se o número total de visualização é maior que 30.000