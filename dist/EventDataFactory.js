"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventData_1 = require("./EventData");
class EventDataFactory {
    static processRawData(RawData, chunkSize) {
        const RetArray = new Array();
        while (RawData.length > 0) {
            const row = new EventData_1.EventData();
            for (let i = 0; i < chunkSize; i++) {
                const element = RawData[i];
                switch (true) {
                    case i < 4:
                        row.SecondsB.push(element);
                        break;
                    case i < 8:
                        row.MicroSecondsB.push(element);
                        break;
                    case i < 10:
                        row.TypeB.push(element);
                        break;
                    case i < 12:
                        row.CodeB.push(element);
                        break;
                    case i < 16:
                        row.ValueB.push(element);
                        break;
                }
            }
            if (row.Type >= 1) {
                RetArray.push(row);
            }
            RawData = RawData.subarray(chunkSize);
        }
        return RetArray;
    }
}
exports.EventDataFactory = EventDataFactory;
//# sourceMappingURL=EventDataFactory.js.map