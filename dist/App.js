"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dto_input_1 = require("./dto-input");
const Input = new dto_input_1.DtoInput();
Input.ChunkSize = 16;
Input.addDevice("/dev/input/by-path/platform-soc\:button25-event");
Input.addDevice("/dev/input/by-path/platform-rotary@0-event");
//# sourceMappingURL=App.js.map