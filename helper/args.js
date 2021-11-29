export const getArgs = (arrProcess) => {
    const result = {};
    const [firstItem, secondItem, ...rest] = arrProcess;
    rest.forEach((item, index, arr) => {
        if (item.charAt(0) === '-') {
            if (index === (arr.length - 1) || arr[index + 1].charAt(0) === '-') {
                result[item.substring(1)] = true;
            } else {
                result[item.substring(1)] = arr[index + 1]
            }
        }
    })

    return result;
};