const isEmpy = function (planeObj: any): any {
    for (const key in planeObj) {
        if (typeof planeObj[key] === "object" && planeObj.hasOwnProperty(key)) {
            if (Object.keys(planeObj[key]).length < 1) {
                delete planeObj[key];
            }
        }
    }
    return planeObj;
};

export default isEmpy;