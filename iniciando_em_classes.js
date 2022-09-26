// OBJETO
const LivroObjeto = 
{
    nome:"LivroA",
    editora: "EditoraA",
    paginas: 185, 
    anunciar: function()
    {
        console.log("A alura indica o livro " + this.nome + "!");
    }
}
LivroObjeto.anunciar();

//FUNÇÃO
const LivroFuncao = function(nomeF, editoraF, paginasF)
{
    fNome = nomeF,
    fEditora = editoraF,
    fPaginas = paginasF;

    this.getNome = function()
    {
        return fNome;
    }

    this.getEditora = function()
    {
        return fEditora;
    }

    this.getPaginas = function()
    {
        return fPaginas
    }
}

const LivroB = new LivroFuncao("LivroB", "EditoraB", 143);
console.log(LivroB.getNome());
console.log(LivroB.getEditora());
console.log(LivroB.getPaginas());

const nome = "Alura";
const temp = new String(nome);
console.log(temp.toString());

// CLASSE: a classe deixa o código mais bonito, porém é preciso criá-la antes de chamá-la; para as funções e objetos, não
class LivroClasse
{
    constructor(nome, editora, paginas)
    {
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;
    }
    descreverTitulo()
    {
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} paginas`); 
    }
}

const LivroC = new LivroClasse("titulo livro c", "editora livro c", 195);
LivroC.descreverTitulo();

class LivroColecao extends LivroClasse
{   
    constructor(nome, nomeColecao)
    {
        super(nome);
        this.nomeColecao = nomeColecao;
    }

    descreverColecao()
    {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`);
    }
}

const LivroD = new LivroColecao("LivroD", "ColecaoD");
LivroD.descreverColecao();