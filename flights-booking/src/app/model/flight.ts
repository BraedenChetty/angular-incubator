export interface Flight {
    flightNumber: string,
    origin: string,
    destination: string,
    departureTime: Date,
    arrivalTime: Date,
    seatsAvailable: number,
    seatCost: number
}
