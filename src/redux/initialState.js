const initialState = {
    stop: {
        list: [
            {
                id: 1,
                name: 'Bryggen',
                longitude: 1,
                latitude: 1
            },
            {
                id: 2,
                name: 'Åsane senter',
                longitude: 1,
                latitude: 1
            },
            {
                id: 3,
                name: 'Høgskulen på Vestlandet',
                longitude: 1,
                latitude: 1
            },
        ],
        selected: {
            pickUp: -1,
            destination: -1
        }
    },
    ride: {
        list: [
            {
                id: 1,
                startId: 1,
                stopId: 3,
                timeOfDeparture: '2020-01-01T10:30',
                estimatedTime: 15
            },
            {
                id: 2,
                startId: 3,
                stopId: 2,
                timeOfDeparture: '2020-01-01T12:30',
                estimatedTime: 30
            },
            {
                id: 3,
                startId: 2,
                stopId: 3,
                timeOfDeparture: '2020-01-01T13:15',
                estimatedTime: 20
            }
        ],
        available: []
    }
};

export default initialState;