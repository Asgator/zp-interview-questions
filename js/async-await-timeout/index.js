const test = async () => {
    await setTimeout(() => { console.log('one'); }, 1000);

    console.log('two');
};

test();

// Что будет в консоли?