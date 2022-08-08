const Api = {
    getTickets: function () {
        return fetch('./tickets.json')
            .then(data => data.json())
            .then(jsonData => jsonData.tickets)
            .catch((e) => {
                console.log('error', e); 
                throw new Error("Error");
            });
    }
}

export default Api;

