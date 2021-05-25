const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgmail.send({
        to:email,
        from: "harshasodariya1999@gmail.com",
        subject: "Welcome...",
        text: `Welcome to app ${name}. let me know your reviews`
    })
}

const sendCancellationEmail = (email,name) => {
    sgmail.send({
        to:email,
        from: "harshasodariya1999@gmail.com",
        subject: "Sorry...",
        text: `good bye ${name}. hope to see you soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}