var rover = {
  direction: ["S","W","N"],
  x: [0,1,0],
  y: [0,0,1],
  travelLog: [[],[],[]]
};

var commandString = '';

for (var i = 0; i < 120; i++)
{
  var random = Math.floor(Math.random() * 4);
  if (random == 0)
  {
    commandString += 'l';
  }
  else if (random == 1)
  {
    commandString += 'r';
  }
  else if (random == 2)
  {
    commandString += 'f';
  }
  else if (random == 3)
  {
    commandString += 'b';
  }
  else
  {
    console.log("Something messed up!");
    break;
  }
}

console.log(commandString);

var grid = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];

var count = 0;
for (var i = 0; i <= 10; i++)
{
  for (var j = 0; j <= 10; j++)
    if (Math.floor(Math.random() * 10 >= 9))
    {
      grid[i][j] = "Rock";
      count++;
    }
    else
    {
      grid[i][j] = "Dirt";
    }
}
grid[rover.x[0]][rover.y[0]] = "Rover";
grid[rover.x[1]][rover.y[1]] = "Rover";
grid[rover.x[2]][rover.y[2]] = "Rover";
console.log(grid);

function turnLeft(rover, roverSelect){
  console.log("Rover " + roverSelect + " is facing " + rover.direction[roverSelect] + " and is at position " + rover.x[roverSelect] + ", " + rover.y[roverSelect]);
  console.log("turnLeft was called!");
  switch(rover.direction[roverSelect])
  {
    case "N":
      rover.direction[roverSelect] = "W";
      break;
    case "S":
      rover.direction[roverSelect] = "E";
      break;
    case "E":
      rover.direction[roverSelect] = "N";
      break;
    case "W":
      rover.direction[roverSelect] = "S";
      break;
  }
  console.log("After turning left, rover " + roverSelect + " is facing " + rover.direction[roverSelect]);
}

function turnRight(rover, roverSelect){
  console.log("Rover " + roverSelect + " is facing " + rover.direction[roverSelect] + " and is at position " + rover.x[roverSelect] + ", " + rover.y[roverSelect]);
  console.log("turnRight was called!");
  switch(rover.direction[roverSelect])
  {
    case "N":
      rover.direction[roverSelect] = "E";
      break;
    case "S":
      rover.direction[roverSelect] = "W";
      break;
    case "E":
      rover.direction[roverSelect] = "S";
      break;
    case "W":
      rover.direction[roverSelect] = "N";
      break;
  }
  console.log("After turning right, rover " + roverSelect + " is facing " + rover.direction[roverSelect]);
}

function moveForward(rover, roverSelect){
  console.log("Rover " + roverSelect + " is facing " + rover.direction[roverSelect] + " and is at position " + rover.x[roverSelect] + ", " + rover.y[roverSelect]);
  console.log("moveForward was called");
  rover.travelLog[roverSelect].push([rover.x[roverSelect], rover.y[roverSelect]]);
  if(rover.direction[roverSelect] == "N")
  {
    if (rover.y[roverSelect] == 0 || grid[rover.x[roverSelect]][rover.y[roverSelect] - 1] == "Rock" || grid[rover.x[roverSelect]][rover.y[roverSelect] - 1] == "Rover")
    {
      console.log("Rover " + roverSelect + "  is at the border of the boundary or is in front of a rock or another rover! We're not moving.");
      return;
    }
    else
    {
      grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Dirt";
      rover.y[roverSelect] -= 1;
      grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Rover";
    }
  }
  else if(rover.direction[roverSelect] == "S")
  {
    if (rover.y[roverSelect] == 10 || grid[rover.x[roverSelect]][rover.y[roverSelect] + 1] == "Rock"  || grid[rover.x[roverSelect]][rover.y[roverSelect] + 1] == "Rover")
    {
      console.log("Rover " + roverSelect + "  is at the border of the boundary or is in front of a rock or another rover! We're not moving.");
      return;
    }
    else
      {
        grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Dirt";
        rover.y[roverSelect] += 1;
        grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Rover";
      }
  }
  else if(rover.direction[roverSelect] == "E")
  {
    if (rover.x[roverSelect] == 10 || grid[rover.x[roverSelect] + 1][rover.y[roverSelect]] == "Rock"  || grid[rover.x[roverSelect] + 1][rover.y[roverSelect]] == "Rover")
    {
      console.log("Rover " + roverSelect + " is at the border of the boundary or is in front of a rock or another rover! We're not moving.");
      return;
    }
    else
    {
      grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Dirt";
      rover.x[roverSelect] += 1;
      grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Rover";
    }
  }
  else if(rover.direction[roverSelect] == "W")
  {
    if (rover.x[roverSelect] == 0 || grid[rover.x[roverSelect] - 1][rover.y[roverSelect]] == "Rock"  || grid[rover.x[roverSelect] - 1][rover.y[roverSelect] - 1] == "Rover")
    {
      console.log("Rover " + roverSelect + " is at the border of the boundary or is in front of a rock or another rover! We're not moving.");
      return;
    }
    else
    {
      grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Dirt";
      rover.x[roverSelect] -= 1;
      grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Rover";
    }
  }
  console.log("After moving forward, rover " + roverSelect + " is facing " + rover.direction[roverSelect] + " and is at position " + rover.x[roverSelect] + ", " + rover.y[roverSelect]);
}

function moveBackward(rover, roverSelect){
  console.log("Rover " + roverSelect + " is facing " + rover.direction[roverSelect] + " and is at position " + rover.x[roverSelect] + ", " + rover.y[roverSelect]);
  console.log("moveBackward was called");
  rover.travelLog[roverSelect].push([rover.x[roverSelect], rover.y[roverSelect]]);
  if(rover.direction[roverSelect] == "N")
  {
    if (rover.y[roverSelect] == 10 || grid[rover.x[roverSelect]][rover.y[roverSelect] + 1] == "Rock"  || grid[rover.x[roverSelect]][rover.y[roverSelect] + 1] == "Rover")
    {
      console.log("Rover " + roverSelect + " is at the border of the boundary or is in front of a rock or another rover! We're not moving.");
      return;
    }
    else
    {
      grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Dirt";
      rover.y[roverSelect] += 1;
      grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Rover";
    }
  }
  else if(rover.direction[roverSelect] == "S")
  {
    if (rover.y[roverSelect] == 0 || grid[rover.x[roverSelect]][rover.y[roverSelect] - 1] == "Rock" || grid[rover.x[roverSelect]][rover.y[roverSelect] - 1] == "Rover")
    {
      console.log("Rover " + roverSelect + " is at the border of the boundary or is in front of a rock or another rover! We're not moving.");
      return;
    }
    else
    {
      grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Dirt";
      rover.y[roverSelect] -= 1;
      grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Rover";
    }
  }
  else if(rover.direction[roverSelect] == "E")
  {
    if (rover.x[roverSelect] == 0 || grid[rover.x[roverSelect] - 1][rover.y[roverSelect]] == "Rock"  || grid[rover.x[roverSelect] - 1][rover.y[roverSelect] - 1] == "Rover")
    {
      console.log("Rover " + roverSelect + " is at the border of the boundary or is in front of a rock or another rover! We're not moving.");
      return;
    }
    else
    {
      grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Dirt";
      rover.x[roverSelect] -= 1;
      grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Rover";
    }
  }
  else if(rover.direction[roverSelect] == "W")
  {
    if (rover.x[roverSelect] == 10 || grid[rover.x[roverSelect] + 1][rover.y[roverSelect]] == "Rock"  || grid[rover.x[roverSelect] + 1][rover.y[roverSelect]] == "Rover")
    {
      console.log("Rover " + roverSelect + " is at the border of the boundary or is in front of a rock or another rover! We're not moving.");
      return;
    }
    else
    {
      grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Dirt";
      rover.x[roverSelect] += 1;
      grid[rover.x[roverSelect]][rover.y[roverSelect]] = "Rover";
    }
  }
  console.log("After moving forward, rover " + roverSelect + " is facing " + rover.direction[roverSelect] + " and is at position " + rover.x[roverSelect] + ", " + rover.y[roverSelect]);
}

function command(commandString, rover)
{
  var roverSelect = 0;
  for (var i = 0; i < commandString.length; i++)
  {
    if(commandString[i] == "l")
    {
      turnLeft(rover, roverSelect);
    }
    else if(commandString[i] == "r")
    {
      turnRight(rover, roverSelect);
    }
    else if(commandString[i] == "f")
    {
      moveForward(rover, roverSelect);
    }
    else if(commandString[i] == "b")
    {
      moveBackward(rover, roverSelect);
    }
    else
    {
      console.log(commandString[i] + " is not a valid command!");
      continue;
    }
    roverSelect++;
    if(roverSelect == 3)
    {
      roverSelect = 0;
    }
  }
  rover.travelLog.push([rover.x, rover.y]);
}

command(commandString, rover);
console.log("After completing its journey, rover 0 is facing " + rover.direction[0] + " and is at position " + rover.x[0] + ", " + rover.y[0]);
console.log("It traveled to the following areas: ");
console.log(rover.travelLog[0]);
console.log("After completing its journey, rover 1 is facing " + rover.direction[1] + " and is at position " + rover.x[1] + ", " + rover.y[1]);
console.log("It traveled to the following areas: ");
console.log(rover.travelLog[1]);
console.log("After completing its journey, rover 2 is facing " + rover.direction[2] + " and is at position " + rover.x[2] + ", " + rover.y[2]);
console.log("It traveled to the following areas: ");
console.log(rover.travelLog[2]);
console.log(grid);
