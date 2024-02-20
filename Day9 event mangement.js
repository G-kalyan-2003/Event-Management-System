document.addEventListener('DOMContentLoaded', function () {
    const eventForm = document.getElementById('eventForm');
    const eventList = document.getElementById('eventList');

    eventForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const description = document.getElementById('description').value;

        addEvent(title, date, description);

        eventForm.reset();
    });

    function addEvent(title, date, description) {
        const li = document.createElement('li');
        li.innerHTML = `
            <h2>${title}</h2>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Description:</strong> ${description}</p>
        `;
        eventList.appendChild(li);
    }
});
