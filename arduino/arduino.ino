int pin = 9;
int r = 0;
int g = 0;
int b = 0;

void setup() {
   Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
      
    r = Serial.parseInt();
    g = Serial.parseInt();
    b = Serial.parseInt();
    
    analogWrite(pin,   r);   // turn the LED on (HIGH is the voltage level)
    analogWrite(pin+1, g);
    analogWrite(pin+2, b);

    Serial.flush();
    Serial.println(r);
    Serial.println(g);
    Serial.println(b);
    Serial.flush();
    
    delay(100);
  }
}
