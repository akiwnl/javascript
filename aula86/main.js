function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexao com o BD',rand(1,3))
    .then(res => {
        console.log(res);
        return esperaAi('Buscando dados na base.',rand(1,3));
    })
    .then(res => {
        console.log(res);
        return esperaAi(222222,rand(1,3)); // vai dar erro pois é esperado uma string.
    })
    .then(() => {
        console.log('Exibe os dados na tela');
    })
    .catch(e => {
        console.log('ERRO:', e);
    });

    console.log('isso sera exibido antes de qualquer promise');