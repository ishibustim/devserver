# devserver
Small webserver for working on projects locally.

# Prerequisites
  - node & npm

# Installation
```
npm install
```

# Usage
You may staticly host files in the same directory (and subdirectories) with:
```
node www.js
```

Alternatively, you may use an Express Router by specifying the path relative to the current directory:
```
node www.js app/
```

