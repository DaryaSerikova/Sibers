const requestURL = 'https://demo.sibers.com/users';



function getUsers(callback) {
    if(!JSON.parse(localStorage.getItem('users'))) {
        fetch(requestURL)
        .then(res => res.json())
        .then(users => { 
            callback(users);
            localStorage.setItem('users', JSON.stringify(users))
        })
    } else {
        callback(JSON.parse(localStorage.getItem('users')))
    }

}

export default getUsers