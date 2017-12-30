# dto-input-ts

DTO-Input is a TypeScript helper library for reading GPIO pins from the device tree utilizing the [device tree overlay](https://www.raspberrypi.org/documentation/configuration/device-tree.md) from the linux kernel. Using device tree overlays should enable you using this library on every single board computer like the raspberry pi. 

In my sample implementation I use only a button and a rotary encoder. *By the way if somebody stumbles over this and knows how two use multpli instances of a rotary encoder overlay without building a second or multiple overlays I would be grateful for an example or links explaining this subject.*

## State of the project
Currently the library is still under development but already reads the data, filters unrelevant data and provides the read data in an array. I still need to implement some kind of event or other interface for interacting with with this library.

Missing:
- Smaple DTS files for compiling an overlay
- Install Intructions
- Testing Instructions
- Generel developer desription for the library
- I should probably write some automated software tests
- Complete the README

## Compiling sample overlays
Complete the follwing steps for compiling and installing device tree overlay.

### Install device tree compiler
On Raspbian install the device tree compiler with the following command:
```
sudo apt-get install device-tree-compiler
```
### Compile the overlay
In the next step we will compile the overlay, copy it into the correct folder and add it to *config.txt*.

**Compile the overlay**
```
dtc -@ -I dts -O dtb -o button-overlay.dtbo button-overlay.dts
```
**Copy the overlay**
```
sudo cp button-overlay.dtbo /boot/overlays/.
```
**Adjust boot config**
Add the following line at the end of your /boot/config.txt.
```
dtoverlay=overlays/button-overlay.dtbo
```
Additionally if you are using a rotary encoder you can add the following line to your /boot/config.txt. The overlay for rotary encoders is shipped with the raspbian kernel. If you are using a different distro you might have to google the source for a rotary encoder overlay.
```
dtoverlay=rotary-encoder,rotary0_pin_a=<your GPIO Pin1>,rotary0_pin_b=<your GPIO Pin2>
```
## Testing device tree overlays
After adding the overlays to your config.txt you have to reboot you machine. After the machine is up again you can test you overlay with the following command
```
sudo evtest /dev/input/by-path/platform-soc\:button25-event
```
You should see some output like the following if you press the button.
```
Input driver version is 1.0.1
Input device ID: bus 0x19 vendor 0x1 product 0x1 version 0x100
Input device name: "soc:button25"
Supported events:
  Event type 0 (EV_SYN)
  Event type 1 (EV_KEY)
    Event code 25 (KEY_P)
Properties:
Testing ... (interrupt to exit)
Event: time 1514663381.841914, type 1 (EV_KEY), code 25 (KEY_P), value 0
Event: time 1514663381.841914, -------------- SYN_REPORT ------------
Event: time 1514663381.941919, type 1 (EV_KEY), code 25 (KEY_P), value 1
Event: time 1514663381.941919, -------------- SYN_REPORT ------------
```
The last four lines are printed if you push your button.
## Installing library depencies

In the library folder run the following command for installing the depencies.
```
npm install --save @types/node
```

##Using the library
Import the library with the following line in your typescript
```
import { DtoInput } from "./dto-input";
```
Create a variable and instantiate the DtoInput class:
```
const Input = new DtoInput();
```
Register a listener that reacts on events that are fired if data is read. The event returns as parameter an array of DtoEventData with one element.
```
Input.on("data",function(dataArray) {
    listener(dataArray);
})
```
Tell the class on which devices it should listen for data. You can add multiple devices to read from.
```
Input.addDevice("/dev/input/by-path/platform-soc\:button25-event"); // Our device for the Button
Input.addDevice("/dev/input/by-path/platform-rotary@0-event"); // Our raotary encoder
```
## Links
If you need help understanding device tree overlay visit the following links.

This project was inspired by [fivdi's gpio-button project](https://github.com/fivdi/gpio-button). This is not a fork of the fivdi's project. I wanted to learn JavaSrcipt but decided to use TypeScript due to I did not like JS's approach of beein not type safe. Also as a professional developer I wanted to you a more ES6 like approach. But I took a lot of knowledge out of fivdi's project and would like to thank him for that.

tbd
- Kernel links
- Kernel data structure
