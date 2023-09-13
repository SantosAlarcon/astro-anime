const invertJapanesePerson = (name: string) => {
    const nameArray: string[] = name.split(",");
    const newNameArray: string[] = []
    newNameArray.push(nameArray[1])
    newNameArray.push(nameArray[0])
    return newNameArray.join(" ");
}

export default invertJapanesePerson;
