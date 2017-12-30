class EventDataHelper {
    static ReverseArray(UintArr: any[]) {
        const newArray = new Array();
        const ArrayLength = UintArr.length;
        for (let i = 0; i < ArrayLength; i++) {
            const element = UintArr.pop();
            newArray.push(element);
        }
        return newArray;
    }

    static BinaryToInt(UintArr: any[]) {
        const length = UintArr.length;

        const buffer = Buffer.from(UintArr);
        const result = buffer.readIntBE(0, length);

        return result;
    }
}

export {EventDataHelper};