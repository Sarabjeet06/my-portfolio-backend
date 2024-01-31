export function SendEmailTemplate(name, email, subject, message) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form Submission response</title>
            <style>
                .container{
                    max-width: 600px;
                    padding: 40px;
                    box-sizing: border-box;
                }
                .logo-image{
                    display: flex;
                    justify-content: center;
                }
                .logo-image img{
                    width: 100%;
                    border-radius: 10px;
                }
            </style>
        </head>
        <body>
            <div class="response-container">
                <div class="logo-image">
                    <img src="./templatePic" alt="Response logo">
                </div>
                <div class="resonse-content">
                    <h1>Contact form Submission</h1>
                    <p>Hello</p>
                    <p>You Received a contact form submission on your portfolio</p>
                    <p><strong>name: </strong> ${name}</p>
                    <p><strong>email: </strong> ${email}</p>
                    <p><strong>subject: </strong> ${subject}</p>
                    <p><strong>message: </strong> ${message}</p>
                    <p>Try respond to it at your earliest</p>
                </div>
            </div>
        </body>
    </html>
    `;
}
