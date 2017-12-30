import { EventDataHelper } from "./EventDataHelper";

export class DtoEventData {
    ValueB: any[];
    CodeB: any[];
    TypeB: any[];
    MicroSecondsB: any[];
    SecondsB: any[];
    constructor() {
        this.SecondsB = new Array();
        this.MicroSecondsB = new Array();
        this.TypeB = new Array();
        this.CodeB = new Array();
        this.ValueB = new Array();
    }

    get Seconds(): number {
        const revArray = EventDataHelper.ReverseArray(this.SecondsB);
        return EventDataHelper.BinaryToInt(revArray);
    }

    get MicroSeconds(): number {
        const revArray = EventDataHelper.ReverseArray(this.MicroSecondsB);
        return EventDataHelper.BinaryToInt(revArray);
    }

    get Value(): number {
        const revArray = EventDataHelper.ReverseArray(this.ValueB);
        return EventDataHelper.BinaryToInt(revArray);
    }

    get Type(): number {
        const revArray = EventDataHelper.ReverseArray(this.TypeB);
        return EventDataHelper.BinaryToInt(revArray);
    }

    get Code(): number {
        const revArray = EventDataHelper.ReverseArray(this.CodeB);
        return EventDataHelper.BinaryToInt(revArray);
    }
}

export {DtoEventData as EventData};