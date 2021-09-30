#Language: pt

Funcionalidade: Validar se existe vagas na CompassoUOL para automação de testes
    Como usuario na pagina CompassoUOL 
    Quero encontrar vagas para automação de testes
    Para validar se é possivel encontrar as vagas

    Cenario: Apartir da Pagina da CompassoUOL validar se existem vagas para automação de testes
        Dado que esteja na pagina CompassoUOL 
        Quando acessar a aba "Cultura"
        E acessar "Confira as nossas vagas"
        E acessar o link para a gupy
        Então deverá validar se URL foi redirecionada corretamente
        E deverá validar se existem vagas para automação de testes