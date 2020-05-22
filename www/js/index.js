
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        console.log('deviceready');
        var p = document.querySelector(' #device p');
        p.innerHTML = device.cordova + '<br />'+
        'Platform ' + device.platform + '<br />' +
        'UUID ' + device.uuid + '<br />' +
        'Manufacturer ' + device.manufacturer + '<br />' +
        'Is Device Virtual ' + device.isVirtual + '<br />' +
        'Device Model ' + device.model + '<br />' +
        'Device Serial Number ' + device.serial + '<br />';
    }
};

app.initialize();