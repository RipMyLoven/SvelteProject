import * as api from 'api.js';

export async function post(endpoint, data) {
    const user = req.body;

    api.post('users', { user }).then(response => {
       if (response.user) {
        req.session.user = response.user;
       }

       res.setHeader('Content-Type', 'application/json');

       res.end(JSON.stringify(response));
    });
}