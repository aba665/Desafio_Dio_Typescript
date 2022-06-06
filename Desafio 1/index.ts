/* Como podemos rodar isso em um arquivo .ts sem causar erros? 
 *
 *   let employee = {};
 *   employee.code = 10;
 *   employee.name = "John";
 */


//Resposta:

let employee: {
    nome: string,
    code: number
}



function newDatas(nome: string, code: number): void{
    if(nome && code){
        employee = {
            nome: nome,
            code: code
        } 
        
        return console.log(employee)
    }
}

newDatas('Luana', 25);