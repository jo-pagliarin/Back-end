atletas = [];

let ingestaoCalorica = {
    manha: Number = 0,
    lancheManha: Number = 0,
    almoco: Number = 0,
    lancheTarde: Number = 0,
    janta: Number = 0, 
    posJanta: Number = 0,
}; 

class Dieta
{
    constructor(manha, lancheManha, almoco, lancheTarde, janta, posJanta){
        this.manha = manha;
        this.lancheManha = lancheManha;
        this.almoco = almoco;
        this.lancheTarde = lancheTarde; 
        this.janta = janta;
        this.posJanta = posJanta;
    }
}

atletas.push = new Dieta("tapioca e banana", NULL, "frango e arroz", "maçã", "peixe e feijão", NULL);
atletas.push = new Dieta("pão e banana", "maçã", "feijão e peixe", NULL, "arroz e saladas", NULL);
atletas.push = new Dieta(NULL, "arroz e feijão", NULL, "mamão", "arroz e peixe", "tapioca"); 

function calculaCalorias(){
    
    var atributo = element.getAttribute(Dieta);

    if (atributo == NULL)
    ingestaoCalorica.element.getAttribute(ingestaoCalorica) = 0; 

    console.table(atleta.ingestaoCalorica)
}

// function hasThanMore50(user) {
//     return user.age > 50
//   }
  
//   const filterAgeEx3 = users.filter(hasThanMore50)


    
