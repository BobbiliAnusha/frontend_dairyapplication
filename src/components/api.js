async function getUserData(token,userid) {
    const requestOptions = {
        headers: {
            authorization: token,
        },
        method: "get",
    };
    return fetch(`/dairy/${userid}`, requestOptions).then((response) =>
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
    return fetch(`/dairy/${id}`, requestOptions).then((response) =>
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

export { getUserData,deleteEntry,getUserCredentials,deleteCredentials};