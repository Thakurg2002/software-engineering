const bookings = []; // In-memory database for demonstration

class Booking {
    constructor(pickup, dropoff, date, time, vehicle) {
        this.id = Date.now().toString();
        this.pickup = pickup;
        this.dropoff = dropoff;
        this.date = date;
        this.time = time;
        this.vehicle = vehicle;
    }

    save() {
        bookings.push(this);
        console.log('Saved booking:', this);
    }

    static fetchAll() {
        return bookings;
    }
}

module.exports = Booking;
