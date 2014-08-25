var { ToggleButton } = require("sdk/ui/button/toggle");

var io_file = require("sdk/io/file");
var HomePath = require('sdk/system').pathFor("Home");

var button = ToggleButton({
    id: "my-button",
    label: "my button",
    icon: {
        "16": "./favicon.ico",
        "32": "./favicon.ico"
    },
    onChange: function(state) {
        console.log(state.label + " checked state: " + state.checked);

        var list_files = io_file.list(HomePath);
        console.log(list_files);

    }
});
