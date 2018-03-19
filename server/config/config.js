var env = process.env.NODE_ENV || 'development';
console.log('env *****************', env);

if (env === 'production') {
    process.env.MONGODB_URI = 'mongodb://admin:admin456@ds215759.mlab.com:15759/todoapp'
}
else if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/todoapp'
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/todoappTest'
}
