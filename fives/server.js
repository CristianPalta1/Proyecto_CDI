const express = require('express');
const cors = require('cors');
const hostname = 'localhost';
const port = 3000;
const next = require('next')
const dev = 'development' !== 'production'
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler()

let corsOptions = {
                      origin: true,
                      optionsSuccessStatus: 200,
                      credentials: true,
                    }



app.prepare()
  .then(() => { 

    
    const server = express();
    server.use(cors(corsOptions));

    server.use(function (req, res, next) {
    
      res.header("Access-Control-Allow-Origin", "https://booking.thefiveshotels.com"); // update to match the domain you will make the request from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.setHeader("Cache-Control", "public,max-age=31536000, immutable")
      next();

      
    });

    server.use(express.static(__dirname + "/public/resourses", {
      public:true,
      maxAge: "365d",
      immutable:true
    }))

    server.get("/", cors(corsOptions), (req, res) => {
      return handle(req, res);
    });
    
    server.get("*", cors(corsOptions), (req, res) => {
      handle(req, res, req.url);
      // if (req.url.includes("/sw")) {
      //   const filePath = join(__dirname, "resourses", "sw.js");
      //   res.setHeader("Cache-Control", "public,max-age=31536000, immutable");
      //   app.serveStatic(req, res, filePath);
      // } else {
      //   handle(req, res, req.url);
      // }
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(
        `> Ready on http://localhost:${port} > ENV ${dev}`
      );
    });

  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
 