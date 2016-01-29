# devserver
Small webserver for working on projects locally.

# Requirements
  - node & npm

# Installation
```
npm install
```

# Usage
You may statically host files in the same directory (and subdirectories) with:
```
node devserver.js
```

Alternatively, you may use an Express Router by specifying the path relative to the current directory:
```
node devserver.js ../app/
```

#License
See LICENSE for details.
