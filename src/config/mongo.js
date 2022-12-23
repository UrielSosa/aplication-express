const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(
        'mongodb://127.0.0.1:27017/mercado_liebre',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        function (err, res) {
            if (err) {
                console.log('Error conection', err);
            } else {
                console.log('Success conection');
            }
    });
}

module.exports = dbConnect;