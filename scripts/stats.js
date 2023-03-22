const currentDate = new Date().toISOString().split("T")[0];

function separateEventsByDate(events) {
    const futureEvents = [];
    const pastEvents = [];

    for (let i = 0; i < events.length; i++) {
        const event = events[i];

        if (event.date > currentDate) {
            futureEvents.push(event);
        } else {
            pastEvents.push(event);
        }
    }

    return { futureEvents, pastEvents };
}



async function getEventData() {
    const response = await fetch('https://mindhub-xj03.onrender.com/api/amazing');
    const data = await response.json();

    // Ordenar eventos por el mayor porcentaje de audiencia
    const highestAttendanceEvents = data.events.sort((a, b) => b.attendance - a.attendance);

    // Ordenar eventos por el menor porcentaje de audiencia
    const lowestAttendanceEvents = data.events.sort((a, b) => a.attendance - b.attendance);

    // Encontrar el evento con mayor capacidad
    const largestCapacityEvent = data.events.reduce((acc, curr) => {
        return acc.capacity > curr.capacity ? acc : curr;
    });

    const currentDate = new Date().toISOString().split('T')[0];

    const eventsByCategory = {};

    data.events.forEach(event => {
        if (!eventsByCategory[event.category]) {
            eventsByCategory[event.category] = [];
        }

        eventsByCategory[event.category].push(event);
    });

    const table = document.getElementById('stats');
    const tableFuture = document.getElementById('FutureEventStats');
    const tablePast = document.getElementById('PastEventStats');

    for (const category in eventsByCategory) {
        const events = eventsByCategory[category];

        const futureEvents = events.filter(event => event.date > currentDate);
        const pastEvents = events.filter(event => event.date <= currentDate);



        //evento gral con mas concurrencia

        const highestAttendanceEvent = events.reduce((acc, event) => {
            const attendancePercentage = ((event.assistance * 100) / event.capacity);

            if (attendancePercentage > acc.attendancePercentage) {
                return { ...event, attendancePercentage };
            }

            return acc;
        }, { attendancePercentage: 0 });

        //Evento Pasado con mas concurrencia 
        const highestAttendancePastEvent = pastEvents.reduce((acc, event) => {
            const attendancePastPercentage = ((event.assistance * 100) / event.capacity);

            if (attendancePastPercentage > acc.attendancePastPercentage) {
                return { ...event, attendancePastPercentage };
            }

            return acc;
        }, { attendancePastPercentage: 0 });

        ////Evento Futuro con mas concurrencia 
        const highestAttendanceFutureEvent = futureEvents.reduce((acc, event) => {
            const attendancePastPercentage = event.assistance / event.capacity;

            if (attendancePastPercentage > acc.attendancePastPercentage) {
                return { ...event, attendancePastPercentage };
            }

            return acc;
        }, { attendancePastPercentage: 0 });


        // Evento con menor concurrencia

        const lowestAttendanceEvent = events.reduce((acc, event) => {
            const attendancePercentage = event.assistance / event.capacity;

            if (attendancePercentage < acc.attendancePercentage || acc.attendancePercentage === 0) {
                return { ...event, attendancePercentage };
            }

            return acc;
        }, { attendancePercentage: 0 });

        // Evento Pasado Ganacias (revenue)
        const revenuePastEvent = pastEvents.reduce((acc, event) => {
            const attendanceRevenue = event.assistance * event.price;


            if (attendanceRevenue < acc.attendanceRevenue || acc.attendanceRevenue === 0) {
                return { ...event, attendanceRevenue };
            }

            return acc;
        }, { attendanceRevenue: 0 });

        //Evento Futuro Ganacias (revenue)
        const revenueFuturetEvent = futureEvents.reduce((acc, event) => {
            const attendanceRevenue = event.assistance * event.price;

            if (attendanceRevenue < acc.attendanceRevenue || acc.attendanceRevenue === 0) {
                return { ...event, attendanceRevenue };
            }

            return acc;
        }, { attendanceRevenue: 0 });







        //evento con mayor capacidad 

        const largestCapacityEvent = events.reduce((acc, event) => {
            if (event.capacity > acc.capacity) {
                return event;
            }

            return acc;
        }, { capacity: 0 });




        // //Events Gral
        const row = table.insertRow(2);

        const categoryCell = row.insertCell(0);
        categoryCell.textContent = category;

        const highestAttendanceCell = row.insertCell(1);
        highestAttendanceCell.textContent = highestAttendanceEvent.name + " " + ((highestAttendanceEvent.assistance * 100) / highestAttendanceEvent.capacity) + "%";






        const lowestAttendanceEventCell = row.insertCell();
        lowestAttendanceEventCell.textContent = lowestAttendanceEvent.name;




        //past event
        const rowPast = tablePast.insertRow(-1);

        const categoryCellrowPast = rowPast.insertCell(0);
        categoryCellrowPast.textContent = category;

        const highestAttendancePastEventCell = rowPast.insertCell(1);
        highestAttendancePastEventCell.textContent = Math.round((highestAttendancePastEvent.assistance * 100) / highestAttendancePastEvent.capacity) + "%";

        const RevenueCellPast = rowPast.insertCell(1);
        RevenueCellPast.textContent = "$" + revenuePastEvent.price * revenuePastEvent.capacity + " " + revenuePastEvent.name;


        //Future events
        const rowFuture = tableFuture.insertRow(4);

        const categoryCellrowFuture = rowFuture.insertCell(0);
        categoryCellrowFuture.textContent = category;

        const highestAttendanceFutureEventCell = rowFuture.insertCell(1);
        highestAttendanceFutureEventCell.textContent = Math.round((highestAttendancePastEvent.assistance * 100) / highestAttendancePastEvent.capacity) + "%";

        const RevenueCellFuture = rowFuture.insertCell(1);
        RevenueCellFuture.textContent = "$" + revenueFuturetEvent.price * revenueFuturetEvent.capacity;


    }
}

getEventData();



