import { DtoInput } from "./dto-input";
import { stat } from "fs";

const Input = new DtoInput();
Input.ChunkSize = 16;
Input.on("data",function(dataArray) {
    listener(dataArray);
})
Input.addDevice("/dev/input/by-path/platform-soc\:button25-event");
Input.addDevice("/dev/input/by-path/platform-rotary@0-event");

let listener = function listener(dataArray: Uint8Array) {
    console.log("listner1 executed.");
    console.log("Received data:");
    for (let index = 0; index < dataArray.length; index++) {
        const element = dataArray[index];
        console.log("Element: " + index + " Data: " + element.toString())
    }
}