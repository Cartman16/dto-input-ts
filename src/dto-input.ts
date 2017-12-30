import { EventDataFactory } from "./EventDataFactory";
import * as FileSystem from "fs";
import { EventEmitter } from "events";
import { emit } from "cluster";
import { DtoEventData, EventData } from "./EventData";

class DtoInput extends EventEmitter {
    _Data: DtoEventData[];
    _ChunkSize: number;
    constructor() {
        super();
        this._ChunkSize = 16;
        this._Data = new Array<DtoEventData>();
    }

    set ChunkSize(n) {
        this._ChunkSize = n;
    }

    get ChunkSize() {
        return this._ChunkSize;
    }

    get Data() {
        return this._Data;
    }

    addDevice(path: string) {
        let RawData;
        if (FileSystem.existsSync(path)) {
            FileSystem.createReadStream(path).on("data", function(buf: any) {
                RawData = new Uint8Array(buf);
                this.processDataRows(RawData);
            }.bind(this));
        } else {
            throw "File: " + path + " does not exist.";
        }
    }

    processDataRows(row: Uint8Array) {
        let EventData = new Array<DtoEventData>();
        const HasReadData = EventDataFactory.processRawData(row, this.ChunkSize, EventData);
        if (HasReadData) {
            this._Data.push(EventData[0]);
            this.emit("data", EventData[0]);
        }
    }
}

export {DtoInput};