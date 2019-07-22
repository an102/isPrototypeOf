function isPrototypeOf(object, possibleInstance) {
    if (object === undefined) {
        throw new ReferenceError(object + " is not defined");
    } else if (possibleInstance === undefined) {
        throw new ReferenceError(possibleInstance + " is not defined");
    } else if (Object.getPrototypeOf(possibleInstance) === object) {
        return true;
    } else if (Object.getPrototypeOf(possibleInstance) === null) {
        return false;
    } else {
        return isPrototypeOf(object, Object.getPrototypeOf(possibleInstance));
    }
}