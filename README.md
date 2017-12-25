# dto-input-ts

DTO-Input is a TypeScript helper library for reading GPIO pins from the device tree utilizing the [device tree overlay](https://www.raspberrypi.org/documentation/configuration/device-tree.md) from the linux kernel. Using device tree overlays should enable you using this library on every single board computer. 

In my sample implementation I use only a button and a rotary encoder. *By the way if somebody stzumbles over this and knows how two use multpli instances of a rotary encoder overlay without building a second or multiple overlays I would be grateful for an example or links explaining this subject.*

## State of the project
Currently the library is still under development but already reads the data, filters unrelevant data and provides the read data in an array. I still need to implement some kind of event or other interface for interacting with with this library.

Missing:
- Smaple DTS files for compiling an overlay
- Install Intructions
- Testing Instructions
- Events or other interface for the library
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
## Installing & testing device tree overlays


## Installing library depencies

In the library folder run the following command for installing the depencies.
```
npm install --save @types/node
```

## Links
If you need help understanding device tree overlay visit the following links.

This project was inspired by [fivdi's gpio-button project](https://github.com/fivdi/gpio-button). This is not a fork of the fivdi's project. I wanted to learn JavaSrcipt but decided to use TypeScript due to I did not like JS's approach of beein not type safe. Also as a professional developer I wanted to you a more ES6 like approach. But I took a lot of knowledge out of fivdi's project and would like to thank him for that.

tbd
- Kernel links
- Kernel data structure
