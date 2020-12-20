const router = app => {
    app.get('/', (request, response) => {
        console.log(`TEST URL: ${request.url}`);
        // response.send('Hello, Server!');
        // response.send({message: 'Node.js and Express REST API'});
        response.sendFile('public/index.html', { root: '.' });
    });

    app.get('/users', (request, response) => {
        console.log(`TESTING USERS: ${request.url}`);
        response.send(users);
    });
    app.get('/users/:id', (request, response) => {
        const id = request.params.id;

        console.log(`TESTING USERS: ${id}`);
        response.send(users[id]);
    });

    app.get('/lists', (req, res) => {
        console.log(`Testing lists: ${req.url}`);
        res.send(lists);
    });
    app.get('/lists/:id', (req, res) => {
        const id = req.params.id;

        console.log(`Testing lists: ${req.url}`);
        res.send(lists[id]);
    })
};

const users = [
    {
        id: 1,
        name: "Richard H",
        email: "richard@piedpiper.com",
    },
    {
        id: 2,
        name: "Bertram Gilfoyle",
        email: "gilfoyle@piedpiper.com"
    }
];

const lists = [
    {
        location: "Chicago",
        nickname: "Windy",
        weather: "COLD",
        elevation: "Flat"
    },
    {
        location: "Los Angeles",
        nickname: "LA",
        weather: "Hot",
        elevation: "Hilly"
    },
    {
        location: "New York City",
        nickname: "The big apple",
        weather: "COLD",
        elevation: "Flat"
    },
    {
        location: "Chicago",
        nickname: "Windy",
        weather: "COLD",
        elevation: "Flat"
    },
    {
        location: "Chicago",
        nickname: "Windy",
        weather: "COLD",
        elevation: "Flat"
    }
    , {
        location: "Chicago",
        nickname: "Windy",
        weather: "COLD",
        elevation: "Flat"
    }
];

module.exports = router;
