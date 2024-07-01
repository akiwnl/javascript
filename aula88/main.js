function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Dados carregados.');
            resolve('text.txt');
        }, 2000);
    });
}

function processData(data){
    return new Promise((resolve, reject) => {
        if(typeof data !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            console.log('Dados processados.');
            resolve(`${data} processado.`)
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

async function execute() {
    try {
        const rawData = await fetchData();
        const processedData = await processData(rawData);
        await displayData(processedData);
    } catch(err) {
        console.log(err);
    }
}

execute();