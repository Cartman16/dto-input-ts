"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventDataHelper {
    static ReverseArray(UintArr) {
        const newArray = new Array();
        const ArrayLength = UintArr.length;
        for (let i = 0; i < ArrayLength; i++) {
            const element = UintArr.pop();
            newArray.push(element);
        }
        return newArray;
    }
    static BinaryToInt(UintArr) {
        const length = UintArr.length;
        const buffer = Buffer.from(UintArr);
        const result = buffer.readIntBE(0, length);
        return result;
    }
}
exports.EventDataHelper = EventDataHelper;
//# sourceMappingURL=EventDataHelper.js.map