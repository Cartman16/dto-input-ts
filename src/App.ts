import { DtoInput } from "./dto-input";
import { DtoEventData } from "./EventData";

const Input = new DtoInput();
Input.ChunkSize = 16;
Input.on("data", function(dataArray) {
    listener(dataArray);
});
Input.addDevice("/dev/input/by-path/platform-soc\:button25-event");
Input.addDevice("/dev/input/by-path/platform-rotary@0-event");

const listener = function listener(eventData: DtoEventData) {
    console.log(" Value: " + eventData.Value + " Code: " + eventData.Code + " Type: " + eventData.Type);
};