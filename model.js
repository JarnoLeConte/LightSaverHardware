
remote = DDP.connect("http://localhost:3000");
Color = new Mongo.Collection('color', {connection: remote});  
