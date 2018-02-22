export const cleanObject = function (planeObj: any): any {
    planeObj = planeObj || {};
    if (Object.keys(planeObj).length === 0) {
        return true;
    }
    for (const key in planeObj) {
        if (!planeObj.hasOwnProperty(key)) continue;

        if (!planeObj[key]) {
            continue
        }
        if (typeof planeObj[key] === "object") {
            if (Object.keys(planeObj[key]).length < 1) {
                delete planeObj[key];
            }
        }
    }
    return planeObj;
};

export default cleanObject;