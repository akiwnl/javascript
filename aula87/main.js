function fetchData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Dados 1');
        },1000);
    });
}

function fetchData2(data) {
    return new Promise((resolve, reject) => {
        data = 'Dados 2';
        if (typeof data !== 'string') {
            reject(false);
            return;
        }
        setTimeout(() => {
            resolve(data);
        },3000);
    });
}

function fetchData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Dados 3');
        },1000);
    });
}

// Promise.all([fetchData1(),fetchData2(),fetchData3()])
//     .then((results) => {
//         console.log("Todos os dados foram carregados");
//         console.log(results);
//     })
//     .catch((error) => {
//         console.error("Ocorreu um erro:", error);
//     });
// Promise.race([fetchData1(),fetchData2(),fetchData3()]) // retorna a primeira promise ou a primeira falha
//     .then((results) => {
//         console.log("Todos os dados foram carregados");
//         console.log(results);
//     })
//     .catch((error) => {
//         console.error("Ocorreu um erro:", error);
//     });

// function downloadPage() {
//     const inCache = true;
//     if(inCache) {
//         return Promise.resolve('Pagina em cache.'); // entrega a promise ja resolvida pois esta em cache.
//     } else {
//         return; // retorna uma funcao para baixar a pagina, caso ela nao esteja em cache.
//     }
// }
// downloadPage()
//     .then(dataPage => {
//         console.log(dataPage);
//     })
//     .catch(e => console.log(e));