const Booking = require('../models/bookingModel');

exports.getHomePage = (req, res) => {
    res.render('index');
};

exports.getBookingPage = (req, res) => {
    res.render('book');
};

exports.submitBooking = (req, res) => {
    const { pickup, dropoff, date, time, vehicle } = req.body;
    
    // Using the Model to save the booking (MVC Pattern)
    const newBooking = new Booking(pickup, dropoff, date, time, vehicle);
    newBooking.save();

    // Render a simple success page or alert (for demonstration, re-rendering book with a success flag)
    // To keep it simple, we just send a simple HTML response for the sake of the lab
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Booking Confirmed</title>
            <link rel="stylesheet" href="/css/style.css">
            <style> body { display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center; } </style>
        </head>
        <body>
            <div class="glass-panel">
                <h1 style="color: var(--accent-color);">Booking Confirmed!</h1>
                <p>Your ${vehicle} cab will pick you up at <strong>${pickup}</strong> on ${date} at ${time}.</p>
                <a href="/" class="btn-primary" style="margin-top: 20px;">Back to Home</a>
            </div>
        </body>
        </html>
    `);
};
