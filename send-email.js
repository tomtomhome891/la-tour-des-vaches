// netlify/functions/send-email.js
const resend = require('resend'); // Un service d'envoi de mail très simple

exports.handler = async (event) => {
  const { email, nom } = JSON.parse(event.body);

  // Envoi du mail via l'API de Resend
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Commande <votre@boutique.com>',
      to: [email],
      subject: 'Confirmation de commande',
      html: `<strong>Merci ${nom} !</strong> Votre commande est validée.`
    })
  });

  return { statusCode: 200, body: "Email envoyé !" };
};
