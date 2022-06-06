/* Como podemos melhorar o esse código usando TS? 
 *
 * let pessoa1 = {};
 * pessoa1.nome = "maria";
 * pessoa1.idade = 29;
 * pessoa1.profissao = "atriz"
 *
 * let pessoa2 = {}
 * pessoa2.nome = "roberto";
 * pessoa2.idade = 19;
 * pessoa2.profissao = "Padeiro";
 *
 * let pessoa3 = {
 *  nome: "laura",
 *  idade: "32",
 *  profissao: "Atriz"
 * };
 *
 * let pessoa4 = {
 *   nome = "carlos",
 *   idade = 19,
 *   profissao = "padeiro"
 * }
 */

//Resposta: 
enum profissao{
    "Padeiro",
    "Atriz"
} 

interface IPessoa{
    nome: string,
    idade: number,
    profissao: profissao
}

function addPessoa(nome: string, idade: number, profissao: profissao): void{
   
    let pessoa: IPessoa = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }

}

addPessoa('Maria', 29, profissao.Atriz);
addPessoa('Roberto', 19, profissao.Padeiro);
addPessoa("Laura", 32, profissao.Atriz);
addPessoa("Carlos", 19, profissao.Padeiro);
