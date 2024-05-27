import { isNullish } from '../isNullish/isNullish';

export const sanitize = (vals: any) => {
    const values = Array.isArray(vals) ? [...vals] : { ...vals };
    Object.keys(values).map(function (key, index) {
        if (
            typeof values[key] === 'object' &&
            !(values[key] instanceof File) &&
            values[key] !== null
        ) {
            if (isNullish(values[key]) || isNullish([values[key]])) {
                delete values[key];
            } else {
                if (isNullish(sanitize(values[key]))) {
                    delete values[key];
                } else {
                    values[key] = sanitize(values[key]);
                }
            }
        } else if (isNullish([values[key]])) {
            if (Array.isArray(values)) {
                values.splice(index, 1);
            } else {
                delete values[key];
            }
        }
    });
    return Array.isArray(values) ? JSON.parse(JSON.stringify(values)) : values;
};
