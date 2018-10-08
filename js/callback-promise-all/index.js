const request = (value, clb) => {
    setTimeout(() => {
        clb(value);
    }, Math.floor(Math.random() * 100))
};

const clb = (value) => {
    console.log(value);
};

const requests = [
    request.bind(this, 1),
    request.bind(this, 2),
    request.bind(this, 3)
];

const PromiseAll = (requests, clb) => {
    // Code here . . .
};


