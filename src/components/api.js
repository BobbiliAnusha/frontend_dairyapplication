async function getUserData(token, userid) {
    const requestOptions = {
        headers: {
            authorization: token,
        },
        method: "get",
    };
    return fetch(`/usersdairy/${userid}`, requestOptions).then((response) =>
        response.json()
    );
}   




async function getUserDataByDate(token, newDate,userid) {
    const requestOptions = {
        headers: {
            authorization: token,
        },
        method: "get",
    };
    return fetch(`/usersdairy/${userid}/${newDate}`, requestOptions).then((response) =>
        response.json()
    );
}

async function deleteEntry(token, id) {
    const requestOptions = {
        headers: {
            authorization: token,
        },
        method: "delete",
    };
    return fetch(`/usersdairy/${id}`, requestOptions).then((response) =>
        response.json()
    );
}

async function getUserCredentials(token, userid) {
    const requestOptions = {
        headers: {
            authorization: token,
        },
        method: "get",
    };
    return fetch(`/credentials/${userid}`, requestOptions).then((response) =>
        response.json()
    );
}

async function deleteCredentials(token, id) {
    const requestOptions = {
        headers: {
            authorization: token,
        },
        method: "delete",
    };
    return fetch(`/credentials/${id}`, requestOptions).then((response) =>
        response.json()
    );
}

export { getUserData, deleteEntry, getUserCredentials, deleteCredentials, getUserDataByDate };