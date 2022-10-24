require('dotenv').config()
const twilio = require('twilio')// Importing the Twilio module


const id = process.env.AUTH_id;
const token = process.env.Auth_token;
  


  
// Creating a client
const client = twilio(id, token);
  




// Sending text messages 
client.messages
    .create({
          
        // Message to be sent
        body: 'My self Raghav N Patel this is text message2',
  
        // Senders Number (Twilio Sandbox No.)
        from: 'whatsapp:+14155238886',
  
        // Number receiving the message
        to: 'whatsapp:+919879943247'
    })
    .then(message => console.log("Message sent successfully"))
    .done();




//sending media: 
client.messages
.create({
        // Senders Number (Twilio Sandbox No.)
        from: 'whatsapp:+14155238886',
        // text  Message to be sent
        body: 'My self Raghav N Patel this is image ',
        // image message sent
          // mediaUrl:   'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?',
        mediaUrl: 'https://raw.githubusercontent.com/dianephan/flask_upload_photos/main/UPLOADS/DRAW_THE_OWL_MEME.png',
        //By this mediaUrl you can send document or image or vedio link...
        // Number receiving the message
        to: 'whatsapp:+919879943247',
   })
    .then(message => console.log("Message sent successfully"))
    .done();