const okStatusCode = 200;

const everythingIsOk = (response) => {
    if (response.status === okStatusCode) {
        return response
    }

    return Promise.reject("Couldn't get the resource");
}