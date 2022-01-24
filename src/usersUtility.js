const requestURL = 'https://demo.sibers.com/users';



export function getUsers(callback) {
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

export function sortingWords(word1, word2) {
    if (word1 > word2) return 1;
    if (word1 < word2) return -1;
    return 0;

}