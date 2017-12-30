import { DtoInput } from "./dto-input";
import { stat } from "fs";
import { DtoEventData } from "./EventData";

const Input = new DtoInput();
Input.ChunkSize = 16;
Input.on("data",function(dataArray) {
    listener(dataArray);
});
Input.addDevice("/dev/input/by-path/platform-soc\:button25-event");
Input.addDevice("/dev/input/by-path/platform-rotary@0-event");

let listener = function listener(eventData: DtoEventData) {
    console.log("listner1 executed.");
    console.log("Received data:");
    console.log(" Value: " + eventData.Value + " Code: " + eventData.Code + " Type: " + eventData.Type);
};