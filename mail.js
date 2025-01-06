const nodeMailer = require('nodemailer')

const transporter = nodeMailer.createTransport({
    service:"gmail",
    auth:{
        user: "namnvfpoly2020@gmail.com",
        pass:"kbro xnir sdph opia"
    }
})
module.exports = transporter