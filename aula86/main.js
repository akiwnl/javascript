function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('text.txt');
        }, 2000);
    });
}

function processData(data){
    return new Promise((resolve, reject) => {
        if(typeof data !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(`${data}`)
        },2000);
    });
}

function displayData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Exibindo dados');
            console.log(data);
            resolve();
        },1000);
    });
}
fetchData()
    .then(rawData => {
        console.log('Dados carregados.');
        return processData(rawData);
    })
    .then(processedData => {
        console.log('Dados processados.');
        return displayData(processedData);
    })
    .catch(err => {
        console.error(err);
    })