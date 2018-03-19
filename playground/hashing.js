const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, 'raghuBandaru');
console.log(token);

var decoded = jwt.verify(token, 'raghuBandaru');
console.log(decoded);

// var message = 'plain text';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 100
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'some-secret-salt').toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'some-secret-salt').toString();

// if (resultHash === token.hash) {
//     console.log('Data has not been changed. Secure!');
// } else {
//     console.log('oops! Data corrupted. Take necessary actions immediately.');
// }