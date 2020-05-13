fetch("http://localhost:3000/buses")
    .then(response => response.json())
    .then(displayBusInfo);
    
    function displayBusInfo(buses) {
    buses.forEach(bus => {
    const busTitle = document.createElement("h3")
    busTitle.innerText = bus.tag;
    document.body.append(busTitle);
});

const newBusForm = document.querySelector("#new-bus-form")

newBusForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData (newBusForm);
    const newBusTag = formData.get('tag')
    const newBusCapacity = formData.get('capacity')
    const newBusRoute = formData.get('current_route')
    const newBusDriver = formData.get('driver')
    const newBus = {bus: {
        tag: newBusTag,
        capacity: newBusCapacity,
        current_route: newBusRoute,
        driver: newBusDriver
    }
};
newBusForm.reset()

const busTitle = document.createElement("h3")
busTitle.innerText = newBusTag;
document.body.append(busTitle);

fetch ('http://localhost:3000/buses', {
    method: 'POST',    
    headers: {
        'content-type': 'application/json',
        },
    body: JSON.stringify(newBus),
    })
})
    };

function saveNewBusToDatabase(bus) {
    
}