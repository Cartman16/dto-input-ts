class EventDataHelper {
    static ReverseArray(UintArr: any[]) {
        const newArray = new Array();
        const ArrayLength = UintArr.length;
        for (let i = ArrayLength - 1; i >= 0; i--) {
            const element = UintArr[i];
            newArray.push(element);
        }
        console.log("Array passed:" + UintArr + " Reverse Array: " + newArray);
        return newArray;
    }

    static BinaryToInt(UintArr: any[]) {
        const length = UintArr.length;

        const buffer = Buffer.from(UintArr);
        const result = buffer.readIntBE(0, length);

        return result as number;
    }
}

export {EventDataHelper};