
//requiring express
const express = require('express');

//initializing the express app
const app = express();

//  port
const port = 9000;

//API/urls

app.get('/api/penguins', (req, res) => {

    const penguins = ["Penguins live in many locations and habitats", "Penguin feet are adapted to walk long distances",
                      "Many male penguins gift female penguins with rocks in order to woo them","A group of penguins in the water is called a raft but on land they’re called a waddle",
                      "Penguins may huddle together for several reasons", "Penguins evolved to fly underwater", "A penguin’s thick feathers aren’t the only way this bird stays warm",
                      "According to some animal experts, the penguin is one of the most streamlined animals in the world", "Contrary to many popular holiday cartoons, you’ll never see penguins and polar bears together in the wild",
                      "The black and white “tuxedo” look donned by most penguin species is a clever camouflage called countershading"];
    res.send(penguins);                  
});

app.get('/api/bears', (req, res) => {

    const bears = ["Bears eat mostly meat and fish, but some bears also eat plants and insects", "Canada is home to nearly 60 % of the world’s polar bears",
                   "The Asiatic black bear has the largest ears than other species of bears", "Black bears can run at the speed up to 35mph", "Most bears have 42 teeth", 
                   "Grizzly bears can remember the faces of other bears", "There are at least 600,000 black bears in North America", "Polar bears primarily eat seals", "The Sun bear has the shortest fur to keep themselves cool in the hot forests",
                   "Bears are good at climbing and swimming"];

    res.send(bears);                  
});


//running the express http server on port 
app.listen(port, () => {
    console.log ("Listening on port", port);
});

