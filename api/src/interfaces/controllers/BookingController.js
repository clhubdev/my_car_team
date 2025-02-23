class BookingController {

    constructor(bookingService) {
      this.bookingService = bookingService;
    }
  
    async create(req, res) {
      try {
        const bookingData = req.body;
        const booking = await this.bookingService.create(bookingData);
        
        res.status(201).json(booking);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
      }
    }
  }
  
  export default BookingController;
  