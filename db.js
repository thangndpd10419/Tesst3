const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

const atlat = "mongodb+srv://namnvfpoly2020:Hqn4xdjuE0yAJHU3@cluster0.wvca9ko.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0"
const connect = async() =>{
    try {
        await mongoose.connect(atlat,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connect success");
    } catch (error) {
        console.log("Connect fail");
        console.log(error);
    }
}

module.exports = {connect}