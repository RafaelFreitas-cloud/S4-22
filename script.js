// // ----------Exercício 1----------------------
// function funcaoContaPasso(passos){
//     if (passos<=0){
//         return "Eliminado"
//     }
//     let i = 1 
//     while(i <= passos){
//         console.log(`Visitei a ${i}ª casa`)
//         i++
//     }
//     } 

//     console.log(funcaoContaPasso(10))





// ----------Exercício 2----------------------
function reversoContaPasso(casa){
    if (casa<=0 && casa!=1){
        return "valor inválido"
        }
    let i = casa 
    while (i >= 1) {
        console.log(`Estou na ${i}ª casa`)
        i--
    }
    } 

    console.log(reversoContaPasso(10))
