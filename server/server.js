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
  serialPort.on('data', function(data) {
      console.log('receive', data);
  });

  //send data
  var b = 122;
  var sendToSerialPort = function() {
    if (!open) return;
    
    b = (b+122) % 255;
    
    serialPort.write("ls\n"+b);
    serialPort.write("ls\n"+22);
    serialPort.write("ls\n"+33)
  };

  Meteor.setInterval(sendToSerialPort, 1000);

});