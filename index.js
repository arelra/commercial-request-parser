const truncateString = (str) =>
    str.length <= 80 ? str : str.substring(0, 77) + '...';

const sortKeysAndTruncateValues = (obj) =>
    Object.keys(obj).sort((a,b) => a.localeCompare(b)).reduce((result, key) => {
        const value = obj[key];
        result[key] = typeof value === "string" ? truncateString(value) : value;
        return result;
    }, {});

const getDomain = (request) =>
    request.substring(0, request.indexOf("/embed/")).substring(8);

const getRequestParams = (request) => {
    const requestPathEncoded = request.substring(request.indexOf("?") + 1);
    const requestPathDecoded = decodeURIComponent(requestPathEncoded);
    return requestPathDecoded.split("&").map(decodeURIComponent);    
}

const parseCustParams = (custParamsString) => {
    const custParams = decodeURIComponent(custParamsString);
    const custParamsItems = custParams.split("&");
    return custParamsItems.reduce((newParams, cpi) => {
        const [key, value] = cpi.split("=");
        if (value.includes(",")) {
            newParams[key] = value.split(",");
        } else {
            newParams[key] = value;
        }
        return newParams;
    }, {});
}

const parseIfDefined = (obj, key, parseFn) => {
    if (obj && obj[key]) {
        obj[key] = parseFn(obj[key]);
    }
    return undefined;
}

const parseYouTubeRequest = (request) => {
    let requestSummary = {};

    getRequestParams(request).forEach(rp => {
        const equalIndex = rp.indexOf("=");
        if (rp.startsWith("embed_config")) {
            const embedConfig = JSON.parse(rp.substring(equalIndex+1));
            parseIfDefined(
                embedConfig?.adsConfig?.adTagParameters,
                'cust_params',
                (obj) => sortKeysAndTruncateValues(parseCustParams(obj))
            )
            parseIfDefined(
                embedConfig?.adsConfig,
                'adTagParameters',
                (obj) => sortKeysAndTruncateValues(obj)
            )
            requestSummary["embed_config"] = sortKeysAndTruncateValues(embedConfig);
        } else {
            requestSummary[rp.substring(0, equalIndex)] = rp.substring(equalIndex+1);
        }
    });

    requestSummary["domain"] = getDomain(request);
    requestSummary = sortKeysAndTruncateValues(requestSummary);
    return JSON.stringify(requestSummary, null ,2);
}
