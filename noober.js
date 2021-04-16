// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
//define needed variables
let riderFirstName
let riderLastName
let riderPhone
let riperPickupAddress
let riderPickupCity
let riderPickupState
let riderPickupZip
let riperDropoffAddress
let riderDropoffCity
let riderDropoffState
let riderDropoffZip
let riderNumber
let riderType

//parse data into variables

riderFirstName=ride.passengerDetails.first
riderLastName=ride.passengerDetails.last
riderPhone=ride.passengerDetails.phoneNumber
riperPickupAddress=ride.pickupLocation.address
riderPickupCity=ride.pickupLocation.city
riderPickupState=ride.pickupLocation.state
riderPickupZip=ride.pickupLocation.zip
riperDropoffAddress=ride.dropoffLocation.address
riderDropoffCity=ride.dropoffLocation.city
riderDropoffState=ride.dropoffLocation.state
riderDropoffZip=ride.dropoffLocation.zip
riderNumber=ride.numberOfPassengers
riderType=ride.purpleRequested

console.log(riderType)
console.log(riderNumber)

// Determine class of service (& a sanity check with the `Error` section!!)
let riderService

if (riderType == true) {
  riderService = `Noober Purple`
} 
else if (riderType == false && riderNumber > 3) {
  riderService = `Noober XL`
}
else if (riderType == false && riderNumber <=3 ) {
  riderService = `Noober X`
}
else {
  riderService = `Error`
}



//Combine outputs for display in log

//Class of Service, Name, and Phone
console.log(`${riderService} Passenger ${riderFirstName} ${riderLastName} - ${riderPhone}`)

//Pick up location
console.log(`Pick up at ${riperPickupAddress}, ${riderPickupCity}, ${riderPickupState}, ${riderPickupZip}`)

//Drop off location
console.log(`Drop off at ${riperDropoffAddress} ${riderDropoffCity} ${riderDropoffState} ${riderDropoffZip} `)




  // 🔥 YOUR CODE ENDS HERE 🔥
})




// Business Rules/Rubric
// With Noober, riders must specify the following data/criteria for their requested ride:

// Name
// Phone Number
// Pickup Location
// Dropoff Location
// Number of passengers in their party
// Whether or not they would like a luxury "Noober Purple" car
// There is code already provided that properly runs when the page is loaded or refreshed. This code does the work of reaching out to the rides API and obtaining a random ride – 
//you should not modify this existing code; rather, begin the implmentation of the following requirements starting on line 15 of the code:

// Parse the data given in the random ride Object, and present it in human-readable format, for example: Noober X Passenger: Kiley Thompson - (260) 908-6886. 
//Pickup at 1301 N State Pkwy, Chicago, IL 60624. Drop-off at 2362 N Clybourn Ave, Chicago, IL 60657.
// (3 points) Approach the problem like we did in class – write the recipe (algorithm) using comments, then write the code according to the recipe.
// (3 points) Create a well-named variable for each data point in the Object. For example, passengerFirstName. Then, use these variables to construct your string of output
// to be written to the JavaScript console.
// (2 points) Use conditional logic – if the rider has requested the luxury "Purple" level of service, i.e. purpleRequested, display "Noober Purple" as the level of service, 
//e.g. Noober Purple Passenger: Freeman Waters...
// (2 points) If the numberOfPassengers in a single ride request is greater than 3, we'll need to upgrade to a larger car. Display "Noober XL" as the level of service.
// A request for Noober Purple supercedes the Noober XL logic. In other words, if a Noober Purple has been requested, it doesn't matter how many passengers there are. Anything else is the normal level of service, "Noober X".
