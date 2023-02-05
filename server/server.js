const app = require('./app');

const PORT = process.env.PORT || 8088;

app.listen(PORT, () => {
    console.log(`ODEN Client server listening on port ${PORT}`);
});