const express = require('express');
const path = require('path');
const bookingController = require('./controllers/bookingController');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files (like CSS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routing (Lab 4)
app.get('/', bookingController.getHomePage);
app.get('/book', bookingController.getBookingPage);
app.post('/book', bookingController.submitBooking);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
