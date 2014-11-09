


Meteor.startup(function() {

  var serialPort = new SerialPort.SerialPort("/dev/tty.usbserial-A600dVw9", { 
      baudrate: 9600,
      parser: SerialPort.parsers.readline('\n')
  });

  var open = false;
  serialPort.on('open', function() {
    open = true;
  });

  //receive data
  // serialPort.on('data', function(data) {
  //     console.log('receive', data);
  // });

  //send data
  var sendToSerialPort = function(rgb, effect) {
    if (!open) return;
    console.log('send', effect, rgb.r, rgb.g, rgb.b)
    serialPort.write("ls\n"+effect);
    serialPort.write("ls\n"+rgb.r);
    serialPort.write("ls\n"+rgb.g);
    serialPort.write("ls\n"+rgb.b);
  };


  Tracker.autorun(function() {
    var color = Color.findOne({field: 'color'});
    var effect = Color.findOne({field: 'effect'});

    if (!color || !effect)
      return;

    rgb = tinycolor(color.value).toRgb();
    effect = effect.value == 'blink' ? 3 : effect.value == 'fade' ? 2 : 1;

    sendToSerialPort(rgb, effect);
  });
});