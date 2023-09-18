const getLocalStorage = (key: string) => {
    if (localStorage.getItem(key)) {
        return localStorage.getItem(key);
    }
}

export default getLocalStorage;
