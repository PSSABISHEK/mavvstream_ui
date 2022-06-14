var XMLWriter = require('xml-writer');


let attributes = ["Erb_Direction_yolo.FrameId", "Erb_Direction_yolo.ObjectId"]

xw = new XMLWriter;
xw.startDocument();
xw.startElement('ClientQuery');
xw.startElement('ContinuousQuery');
  xw.writeAttribute('name', 'testQuery');
  xw.writeAttribute('startTime', '0');
  xw.writeAttribute('endTime', '10000');
  xw.writeAttribute('hopSizeLB', '0');
  xw.writeAttribute('hopSizeUB', '60');
  xw.writeAttribute('initialWindowSize', '60');
  xw.writeAttribute('scheduleStrategy', 'RoundRobinSS');
  xw.writeAttribute('timeToRunQuery', 'null');
  xw.writeAttribute('tolerance', '10');
    xw.startElement('QOS');
    xw.writeAttribute('type', 'latency');    
    xw.writeAttribute('unit', 'ms');    
    xw.writeAttribute('numOfValues', '1.0');    
    xw.writeAttribute('errorRate', '10'); 
      xw.startElement('Tuple');
      xw.writeAttribute('value', '1,0.01');
      xw.endElement()
    xw.endElement()

    xw.startElement('QOS');
    xw.writeAttribute('type', 'latency');    
    xw.writeAttribute('unit', 'ms');    
    xw.writeAttribute('numOfValues', '1.0');    
    xw.writeAttribute('errorRate', '10'); 
      xw.startElement('Tuple');
      xw.writeAttribute('value', '1,0.02');
      xw.endElement()
    xw.endElement()

    xw.startElement('QOS');
    xw.writeAttribute('type', 'latency');    
    xw.writeAttribute('unit', 'ms');    
    xw.writeAttribute('numOfValues', '1.0');    
    xw.writeAttribute('errorRate', '10'); 
      xw.startElement('Tuple');
      xw.writeAttribute('value', '1,0.03');
      xw.endElement()
    xw.endElement()

    xw.startElement('Order-By');
    xw.writeAttribute('class', 'Project');    
    xw.writeAttribute('name', 'project_1');    
    xw.writeAttribute('id', '3');    
    xw.writeAttribute('attributes', attributes.join()); //CONVERTS  THE ABOVE ARRAY TO STRING
      xw.startElement('Select');
      xw.writeAttribute('name', 'select1');    
      xw.writeAttribute('id', '1');    
      xw.writeAttribute('conditionString', 'Erb_Direction_yolo.ObjectId == &apos;1&apos;');    
        xw.startElement('edu.uta.dsms.core.query.CQ__Arrable')
        xw.writeAttribute('name', 'arrable1')
        xw.writeAttribute('id', '7')
          xw.startElement('Stream')
          xw.writeAttribute('name', 'Erb_Direction_yolo')
          xw.writeAttribute('id', '1')
            xw.startElement('logicalName')
            xw.text('Erb_Direction_yolo')
            xw.endElement()
          xw.endElement()

          xw.startElement('gba')
            xw.text(attributes[1])
          xw.endElement()

          xw.startElement('aoa')
            xw.text(attributes[0])
          xw.endElement()
        xw.endElement()
      xw.endElement()
    xw.endElement()
  xw.endElement()


console.log(xw.toString());    
