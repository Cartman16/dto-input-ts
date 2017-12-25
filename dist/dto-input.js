"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventDataFactory_1 = require("./EventDataFactory");
const FileSystem = require("fs");
const events_1 = require("events");
const cluster_1 = require("cluster");
class DtoInput extends events_1.EventEmitter {
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
    addDevice(path) {
        let RawData;
        if (FileSystem.existsSync(path)) {
            FileSystem.createReadStream(path).on("data", function (buf) {
                // RawData = Buffer.concat([RawData, buf]);
                RawData = new Uint8Array(buf);
                this.processDataRows(RawData);
            }.bind(this));
        }
        else {
            throw "File: " + path + " does not exist.";
        }
    }
    processDataRows(row) {
        const DataArray = EventDataFactory_1.EventDataFactory.processRawData(row, this.ChunkSize);
        for (let index = 0; index < DataArray.length; index++) {
            const element = DataArray[index];
            console.log("Type: " + element.Type);
            console.log("Code: " + element.Code);
            console.log("Value: " + element.Value);
        }
        cluster_1.emit("data", DataArray);
    }
}
exports.DtoInput = DtoInput;
//# sourceMappingURL=dto-input.js.map