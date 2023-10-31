const nodemailer = require("nodemailer");

const sendmail = async (req, res) => {
    const mailTransporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'edmund.conn@ethereal.email',
            pass: 'rzJv6DQY7qQ8VU6vJ9'
        }
    });
    
    let details = {
        from : '"Edmund Conn" <edmund.conn@ethereal.email>',
        to : "vanss2808@gmail.com",
        subject : "login",
        text : "welcome!"
    };

    try {
        let info = await mailTransporter.sendMail(details);
        console.log("Message sent: %s", info.messageId);
        res.send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending email');
    }
};

module.exports= sendmail