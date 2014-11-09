int pin = 9;
int effect = 0;
int r = 0;
int g = 0;
int b = 0;

void setup() {
   Serial.begin(9600);
}

int x = 255;
boolean flip = false;
int r2 = 0;
int g2 = 0;
int b2 = 0;

void loop() {
  if (Serial.available() > 0) {
    
    effect = Serial.parseInt();  
    r = Serial.parseInt();
    g = Serial.parseInt();
    b = Serial.parseInt();
    
    if (flip) {
      r2 = 0;
      g2 = 0; 
      b2 = 0;
    } else {
      r2=r;
      g2=g;
      b2=b;
    }
    
    if (effect == 3)
      flip = !flip;
     else
       flip = false;
    
    analogWrite(pin,   r2);   // turn the LED on (HIGH is the voltage level)
    analogWrite(pin+1, g2);
    analogWrite(pin+2, b2);

    Serial.flush();
    Serial.println(effect);
    Serial.println(r2);
    Serial.println(g2);
    Serial.println(b2);
    Serial.flush();
    
    delay(100);
  }
}
