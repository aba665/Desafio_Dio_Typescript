/* Como podemos rodar isso em um arquivo .ts sem causar erros?
 *
 *   let employee = {};
 *   employee.code = 10;
 *   employee.name = "John";
 */
//Resposta:
var employee;
function newDatas(nome, code) {
    if (nome && code) {
        employee = {
            nome: nome,
            code: code
        };
        return console.log(employee);
    }
}
newDatas('Luana', 25);
