"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isEmpy = function (planeObj) {
    for (const key in planeObj) {
        if (typeof planeObj[key] === "object" && planeObj.hasOwnProperty(key)) {
            if (Object.keys(planeObj[key]).length < 1) {
                delete planeObj[key];
            }
        }
    }
    return planeObj;
};
exports.default = isEmpy;
