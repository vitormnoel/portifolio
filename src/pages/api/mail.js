const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {

    const body = JSON.parse(req.body);
    
    const message =`
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;

    const data = {
        to: 'vtormnoel@gmail.com',
        from: 'vtormnoel@outlook.com',
        subject: '[CONTACT] - vitormnoel.dev',
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
    }

    res.status(200).json({ status: 'Ok' })

    try {
        return await mail.send(data);
    } catch (err) {
        return console.log(err);
    }

    // console.log(data)

    // res.status(200).json({ status: 'Ok' })
    // res.status(400).json({ status: 'Error' })
}
