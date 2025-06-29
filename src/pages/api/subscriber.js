// MailerLite Backend Subscriber Connection 
//Version 1
//This should be assessed and revised for security **COMMENT LATER**

export default async function handler(request, response) {

    if (request.method !== 'POST') {
        return response.status(405).json({ message : 'Method not Allowed'});
    }

    const { email } = request.body;

    if (!email || !email.includes('@')) {
        return response.status(400).json({ message : 'Invalid email'
        })
    }

    try {

     const mailerKey = process.env.MAILERLITE_API_KEY;


     const reply = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
        },
        body: JSON.stringify({
            email,
            resubscribe: true,
        })
     })

     if (!reply.ok) {
        const errorData = await reply.json()

        
        console.error(errorData)
        return response.status(500).json({ message: errorData?.error?.message || 'Failed to Subscribe'});
        
     }

      return response.status(200).json({ message : 'Subscription was successful'})
    }
    catch (error) {
        console.error('Subscription error: ', error)
        return response.status(500).json({ message : 'Internal Server Error' });
    }
 

}