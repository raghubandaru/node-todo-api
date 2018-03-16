var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://admin:admin456@ds215759.mlab.com:15759/todoapp`);

module.exports = { mongoose };