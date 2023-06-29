const nodemailer = require("nodemailer")
const logo = require("../../../client/src/assets/logo/LogoViandaExpress.jpeg")

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "viandaexpress84@gmail.com",
        pass: "",
    }
})

const mailSend = {
    from: "viandaexpress84@gmail.com",
    to: "gabriel.682681@gmail.com",
    subject: "Vianda Express",
    text: "Bienvenido a Vianda Express",
    attachments: [
        {
            filename: "logo-transparent.png",
            path: "../../../client/src/assets/logo/LogoViandaExpress.jpeg",
        }
    ]
}

transporter.sendMail(mailSend, (error, info) => {
    if (error) {
        console.log("Error al enviar el correo electrónico:", error);
    } else {
        console.log("Correo enviado con éxito", info.response);
    }
})

// Lee la ruta de la imagen del argumento de línea de comandos
const imagePath = process.argv[2];

// Verifica si se proporcionó una ruta de imagen como argumento
if (imagePath) {
    // Llama a la función para enviar el correo con la imagen adjunta
    sendEmailWithImage(imagePath);
} else {
    console.log('Por favor, proporciona la ruta de la imagen como argumento.');
}