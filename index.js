fetch("http://localhost:3000/buses")
    .then(response => response.json())
    .then(displayBusInfo);
    
    function displayBusInfo(buses) {
    buses.forEach(bus => {showBus(bus)}
    )}

    function showBus(bus) {
        const busTitle = document.createElement("h3")
        const deleteButton = document.createElement('button')

        busTitle.innerText = bus.tag;
        deleteButton.innerText = "remove bus"
        deleteButton.id = bus.id

        deleteButton.addEventListener('click', (event) => removeBus(event, busTitle))

        document.body.append(deleteButton)
        document.body.append(busTitle);
    }

    const newBusForm = document.querySelector('#new-bus-form')

    newBusForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(newBusForm)
        const newBusTag = formData.get("tag")
        const newBusCapacity = formData.get("capacity")
        const newBusRoute = formData.get("current_route")
        const newBusDriver = formData.get("driver")
        const newBus = {
                tag: newBusTag,
                capacity: newBusCapacity,
                route: newBusRoute,
                driver: newBusDriver
        }

        fetch("http://localhost:3000/buses", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(newBus.bus)
        })
        showBus(newBus)
    })
    newBusForm.reset()

    // function removeBus(event, bus) {
    //     event.preventDefault();
    //     bus.remove()
        
    //     fetch
    // }

