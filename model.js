
remote = DDP.connect("http://lightsaver.meteor.com");
Color = new Mongo.Collection('color', {connection: remote});  
