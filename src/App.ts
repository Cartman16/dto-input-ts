import { DtoInput } from "./dto-input";

const Input = new DtoInput();
Input.ChunkSize = 16;
Input.addDevice("/dev/input/by-path/platform-soc\:button25-event");
Input.addDevice("/dev/input/by-path/platform-rotary@0-event");
