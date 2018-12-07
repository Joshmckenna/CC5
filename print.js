var dataServer;
var pubKey = 'pub-c-9139d554-268f-4bd7-b408-e5d34d178b6b';
var subKey = 'sub-c-8d55adee-f983-11e8-a39c-e60c31199fb2';
var channelName = 'CC5';
var input1;
var input2;
var input3;
var input4;
var input6;
var input7;
var input8;
var input9;
var input10;
var input11;
var input12;
var input13;
var input14;
var input15;

var timer = 10;
var timerStatus = false;

var status = 0;
var messageSend = 0;

var myFont;

function timerFunction () {
  if ( timerStatus == true){
    timer = timer - 1;
  }

  if ( timer <= 0){
    timerStatus = false;
    timer = 3;
    status  = 1;
    sendTheMessage();
  }
}

function preload() {
  myFont = loadFont('TitilliumWeb-Light.ttf');
}

function setup() {
  createCanvas(windowWidth,1000);

  setInterval(timerFunction, 1000);

  // PubNub
  dataServer = new PubNub( {
    publish_key   : pubKey,  //get these from the pubnub account online
    subscribe_key : subKey,
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
    }
    );

  //attach callbacks to the pubnub object to handle messages and connections
  dataServer.addListener({ message: readIncoming })
  dataServer.subscribe({channels: [channelName]});

}


function readIncoming(inMessage) //when new data comes in it triggers this function,
{                               // this works becsuse we subscribed to the channel in setup()
  // simple error check to match the incoming to the channelName
  if(inMessage.channel == channelName)
  {
      input1 = inMessage.message.input1;
      input2 = inMessage.message.input2;
      input3 = inMessage.message.input3;
      input4 = inMessage.message.input4;
      input5 = inMessage.message.input5;
      input6 = inMessage.message.input6;
      input7 = inMessage.message.input7;
      input8 = inMessage.message.input8;
      input9 = inMessage.message.input9;
      input10 = inMessage.message.input10;
      input11 = inMessage.message.input11;
      input12 = inMessage.message.input12;
      input13 = inMessage.message.input13;
      input14 = inMessage.message.input14;
      input15 = inMessage.message.input15;

      console.log(input1);
      console.log(input2);
      console.log(input3);
      console.log(input4);
      console.log(input5);
      console.log(input6);
      console.log(input7);
      console.log(input8);
      console.log(input9);
      console.log(input10);
      console.log(input11);
  }
}

function draw () {
  textFont(myFont);
  textSize(10);
  // background
  text(input1, 10, 20);
  // triangle
  text(input8, 10, 95);
  text(input9, 10, 95);
  text(input10, 10, 95);
  text(input11, 10, 95);
  // quad 1
  text(input6, 10, 190);
  text(input7, 10, 190);
  // quad 2
  text(input14, 10, 290);
  text(input15, 10, 290);
  // rect
  text(input4, 10, 390);
  // circle
  text(input2, 10, 755);
  text(input3, 10, 755);
  // }
  text(input12, 10, 870);

  if (input12 == '}' && messageSend == 0) {
    text("// generative(system);\nCreation & Computation\nDigital Futures", 10, 824)
    print();
    console.log("PAUSE");
    status = 0;
    sendTheMessage();
    messageSend = 1;

    // if input12 equals a value, send the message back to sketch.js to pause
    // print canvas
    // set delay to 30 seconds
    // send message to sketch.js to initiate sketch
  }
}

function sendTheMessage() {
var print = 0;
  // Send Data to the server to draw it in all other canvases
  dataServer.publish(
    {
      channel: channelName,
      message: {
                  name: print,
                  status: status
                 }

    });


if (status == 0){
  timerStatus = true;
  console.log("paused the sketch");
} else {
  timer = 3;
  console.log("cont. the sketch");
  messageSend = 0;
  background(255);
}


}
