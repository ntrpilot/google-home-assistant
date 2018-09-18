"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
// @ts-ignore
const PusherClient = require("pusher-client");
const pusher = new PusherClient('dcf9140c0c7caf15edd8', {
    cluster: 'eu',
    encrypted: true
});
const channel = pusher.subscribe('home-api');
channel.bind('integration', function (data) {
    const params = data.queryResult.parameters;
    Object.keys(params).forEach(key => {
        switch (key) {
            case "LightSettings":
                doLighting(params[key]);
                break;
            default:
                console.log(`Don't know how to do ${key} yet.`);
        }
    });
});
const PYTHON_START = "sudo python";
const LIGHT_CONTROL_PY = `${PYTHON_START} /home/pi/Documents/led-strip-control/led-control.py`;
const NIGHT_LIGHT = `${LIGHT_CONTROL_PY} --night-light`;
const TEST_LIGHT = `${LIGHT_CONTROL_PY} --test`;
const LIGHTS_OFF = `${LIGHT_CONTROL_PY} --off`;
function doLighting(command) {
    switch (command) {
        case "night":
            console.log("Turning the night light on");
            child_process_1.exec(NIGHT_LIGHT);
            break;
        case "test":
            console.log("Testing the light strip");
            child_process_1.exec(TEST_LIGHT);
            break;
        case "off":
            console.log("Turning the lights off");
            child_process_1.exec(LIGHTS_OFF);
            break;
    }
}
console.log("Connected and listening.");
