import { EventDataFactory } from "./EventDataFactory";
import * as FileSystem from "fs";
import { EventEmitter } from "events";
import { emit } from "cluster";

class DtoInput extends EventEmitter {
    Data: any[];
    _ChunkSize: number;
    constructor() {
        super();
        this._ChunkSize = 8;
        this.Data = new Array();
    }

    set ChunkSize(n) {
        this._ChunkSize = n;
    }

    get ChunkSize() {
        return this._ChunkSize;
    }

    addDevice(path: string) {
        let RawData;
        if (FileSystem.existsSync(path)) {
            FileSystem.createReadStream(path).on("data", function(buf: any) {
                // RawData = Buffer.concat([RawData, buf]);
                RawData = new Uint8Array(buf);
                this.processDataRows(RawData);
            }.bind(this));
        } else {
            throw "File: " + path + " does not exist.";
        }
    }

    processDataRows(row: Uint8Array) {
        const DataArray = EventDataFactory.processRawData(row, this.ChunkSize);
        for (let index = 0; index < DataArray.length; index++) {
            const element = DataArray[index];
            console.log("Type: " + element.Type);
            console.log("Code: " + element.Code);
            console.log("Value: " + element.Value);
        }
        emit("data", DataArray);
    }
}

export {DtoInput};