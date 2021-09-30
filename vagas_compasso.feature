#Language: pt

Funcionalidade: Validar se existe vagas na CompassoUOL para automação de testes
    Como usuario na pagina CompassoUOL 
    Quero encontrar vagas da empresa
    Para validar se existem vagas de automação de testes

    Cenario: Apartir da Pagina da CompassoUOL validar se existem vagas para automação de testes
        Dado que esteja na pagina CompassoUOL 
        Quando acessar a aba "Cultura"
        E acessar "Confira as nossas vagas"
        E acessar o link para vagas para Desenvolvimento Ágil
        Então deverá validar se URL foi redirecionada corretamente
        E deverá validar se existem vagas para "automação de testes"