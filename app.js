var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

var commandString = 'ffzzy';

function turnLeft(rover){
  console.log("turnLeft was called!");
  console.log("The rover is facing " + rover.direction);
  switch(rover.direction)
  {
    case "N":
      rover.direction = "W";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  console.log("After turning left, the rover is facing " + rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  console.log("The rover is facing " + rover.direction);
  switch(rover.direction)
  {
    case "N":
      rover.direction = "E";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("After turning right, the rover is facing " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");
  rover.travelLog.push([rover.x, rover.y]);
  console.log("The rover is facing " + rover.direction + " and is at position " + rover.x + ", " + rover.y);
  if(rover.direction == "N")
  {
    if (rover.y == 0)
    {
      console.log("The rover is at the border of the boundary! We're not moving.");
      return;
    }
    else
      rover.y -= 1;
  }
  else if(rover.direction == "S")
  {
    if (rover.y == 10)
    {
      console.log("The rover is at the border of the boundary! We're not moving.");
      return;
    }
    else
      rover.y += 1;
  }
  else if(rover.direction == "E")
  {
    if (rover.x == 10)
    {
      console.log("The rover is at the border of the boundary! We're not moving.");
      return;
    }
    else
      rover.x += 1;
  }
  else if(rover.direction == "W")
  {
    if (rover.x == 0)
    {
      console.log("The rover is at the border of the boundary! We're not moving.");
      return;
    }
    else
      rover.x -= 1;
  }
  console.log("After moving forward, the rover is facing " + rover.direction + " and is at position " + rover.x + ", " + rover.y);
}

function moveBackward(rover){
  console.log("moveBackward was called");
  rover.travelLog.push([rover.x, rover.y]);
  console.log("The rover is facing " + rover.direction + " and is at position " + rover.x + ", " + rover.y);
  if(rover.direction == "N")
  {
    if (rover.y == 10)
    {
      console.log("The rover is at the border of the boundary! We're not moving.");
      return;
    }
    else
      rover.y += 1;
  }
  else if(rover.direction == "S")
  {
    if (rover.y == 0)
    {
      console.log("The rover is at the border of the boundary! We're not moving.");
      return;
    }
    else
      rover.y -= 1;
  }
  else if(rover.direction == "E")
  {
    if (rover.x == 0)
    {
      console.log("The rover is at the border of the boundary! We're not moving.");
      return;
    }
    else
      rover.x -= 1;
  }
  else if(rover.direction == "W")
  {
    if (rover.x == 10)
    {
      console.log("The rover is at the border of the boundary! We're not moving.");
      return;
    }
    else
      rover.x += 1;
  }
  console.log("After moving forward, the rover is facing " + rover.direction + " and is at position " + rover.x + ", " + rover.y);
}

function command(commandString, rover)
{
  for (var i = 0; i < commandString.length; i++)
  {
    if(commandString[i] == "l")
    {
      turnLeft(rover);
    }
    else if(commandString[i] == "r")
    {
      turnRight(rover);
    }
    else if(commandString[i] == "f")
    {
      moveForward(rover);
    }
    else if(commandString[i] == "b")
    {
      moveBackward(rover);
    }
    else
    {
      console.log(commandString[i] + " is not a valid command!");
      continue;
    }
  }
  rover.travelLog.push([rover.x, rover.y]);
}

command(commandString, rover);
console.log("After completing its journey, the rover is facing " + rover.direction + " and is at position " + rover.x + ", " + rover.y);
console.log("It traveled to the following areas: ");
console.log(rover.travelLog);
