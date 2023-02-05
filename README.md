# ODEN Admin
The repo contains source code for the Client side of the ODEN Project website. Client includes the pulling of data from github and displaying it to the user. It will also contain tools for querying or filtering the data.

## Directory Structure
The structure and intended contents of the directories in this project are shown in the diagram below:

```
project
│   README.md
│   package.json    
│
└───server { All back-end JavaScript files }
│   │   app.js.js
│   │   server.js
│   │
│   └───controllers { Server routing }
│
└───scripts { All front-end JavaScript files }
│   │   data-dummy.js
│   │   data-github.js
│
└───views { HTML files }
    │   index.html
    │
    └───styles { CSS files }
        │   styles.css
```