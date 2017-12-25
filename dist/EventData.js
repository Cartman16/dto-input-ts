"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventDataHelper_1 = require("./EventDataHelper");
class DtoEventData {
    constructor() {
        this.SecondsB = new Array();
        this.MicroSecondsB = new Array();
        this.TypeB = new Array();
        this.CodeB = new Array();
        this.ValueB = new Array();
    }
    get Seconds() {
        const revArray = EventDataHelper_1.EventDataHelper.ReverseArray(this.SecondsB);
        return EventDataHelper_1.EventDataHelper.BinaryToInt(revArray);
    }
    get MicroSeconds() {
        const revArray = EventDataHelper_1.EventDataHelper.ReverseArray(this.MicroSecondsB);
        return EventDataHelper_1.EventDataHelper.BinaryToInt(revArray);
    }
    get Value() {
        const revArray = EventDataHelper_1.EventDataHelper.ReverseArray(this.ValueB);
        return EventDataHelper_1.EventDataHelper.BinaryToInt(revArray);
    }
    get Type() {
        const revArray = EventDataHelper_1.EventDataHelper.ReverseArray(this.TypeB);
        return EventDataHelper_1.EventDataHelper.BinaryToInt(revArray);
    }
    get Code() {
        const revArray = EventDataHelper_1.EventDataHelper.ReverseArray(this.CodeB);
        return EventDataHelper_1.EventDataHelper.BinaryToInt(revArray);
    }
}
exports.DtoEventData = DtoEventData;
exports.EventData = DtoEventData;
//# sourceMappingURL=EventData.js.map