const Api = {
    getTickets: function () {
        return fetch('./tickets.json')
            .then(data => data.json())
            .then(jsonData => jsonData.tickets);
    }
}

export default Api;

