const express = require('express');

const fs = require('fs');

const musics = require('./musics.json');

const app = express();

app.use(express.json());

const port = 9000;


// ` Add a new track to our database
app.post('/', (req, res) => {
    const { track, email, code, person } =
      req.body;
  
    if (
      !track ||
      !email ||
      !code ||
      !person
    ) {
      return res.status(400).json({
        status: 'fail',
        message:
          'Please fill out all fields',
      });
    }
});




   

    musics.push(newmusic);
    fs.writeFile('./musics.json', JSON.stringify(musics), (err) =>{
        if (err) {
            res.status(500).json({
              message:
                'Interval Server Error',
    });
    
}
   }
); 

res.status(201).json({
    message: 'track added successfully',
    data: newmusic,
  });
   


app.listen(port, () =>{
    console.log('track is playing @.\n' + port);
});
