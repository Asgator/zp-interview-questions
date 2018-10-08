new Promise((res, reject) => {
    reject('ERROR');
})
    .then(
        () => { console.log('1-1'); },
        () => { console.log('1-2'); }
    )
    .then(
        (data) => { console.log(data) }
    )
    .then(
        () => { console.log('3-1'); },
        () => { console.log('3-2'); }
    );