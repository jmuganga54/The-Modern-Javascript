let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatLeft;
    },
    //SeatParty
    /**
     * Which takes the party size to be seated and adds that on to guest count.
     */
    setParty: function (partySize) {
        this.guestCount = this.guestCount + partySize;

    },
    
    //Remove party
    /**
     * Which would take the part size that's leaving the restaurant and it would remove it from Guest account.
     */
    removeParty: function (peopleLeaving) {
        this.guestCount = this.guestCount - peopleLeaving;
    }
}

restaurant.setParty(72)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));