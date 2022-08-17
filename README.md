# Learn Monorepo
Learn how to use monorepo with nodejs + client.  
Follows https://www.youtube.com/watch?v=ACDGXHR_YmI&t=144s&ab_channel=ShawnC

# Quick start
    yarn start

# Key takeaways
Uses yarn workspace

Each application would no longer have
- node_modules
- git repo  
  
All of these would be referred to the root's.

# Steps
## Setup root
1. Run init with yarn
    ```bash
    yarn init
    ```
2. Update [./package.json](./package.json).  
 Refer to https://classic.yarnpkg.com/lang/en/docs/workspaces/
    ```jsonc
    {
        "name": "learn-monorepo",
        "version": "1.0.0",
        "main": "index.js",
        "license": "MIT",

        // Mandatory, required for yarn workspace to work
        "private": true,

        // server and client would be the workspaces we'll be creating soon.
        "workspaces": [
            "server",
            "client"
        ]
    }
    ```

## Setup backend
1. Create a folder [./server](./server/) where our backend would reside in.
2. Run init with yarn
    ```bash
    yarn init
    ```
3. The `name` in [./server/package.json](./server/package.json) should match that of `workspaces` at [./package.json](./package.json)  

    ./server/package.json
    ```jsonc
    {
        "name": "server", // <- this...
        "version": "1.0.0",
        "main": "index.js",
        "license": "MIT"
    }

    ```
    ./package.json
    ```jsonc
    {
        "workspaces": [
            "server", // <- ...should match this
            "client"
        ]
    }

    ```

4. Create a simple express server at [./server/index.js](./server/index.js)

## Setup frontend
1. Create a folder [./client](./client) where our frontend would reside in.
2. Create react app in the dir
    ```bash
    npx create-react-app .
    ```
3. Remove the git repo that's create automatically by `create-react-app`
   ```bash
    rm -rf .git
   ```
4. The `name` in [./client/package.json](./client/package.json) should match that of `workspaces` at [./package.json](./package.json)  

    ./client/package.json
    ```jsonc
        {
            "name": "client", // <- this
            "version": "0.1.0",
            "private": true,
            ...

    ```
    ./package.json
    ```jsonc
        {
            "workspaces": [
                "server", 
                "client" // <- ...should match this
            ]
        }
    ```

5. At this point in time, the `node_modules` dir in `client` should be full of modules, pre-installed by our `create-react-app` command.

## Installing dependencies for `server`
1. Run command to install dependencies for `server`
    ```bash
    yarn workspace server add express cors
    ```
2. A `node_module` dir would be created in the root directory.
3. Also, all modules in `node_modules` in `client` would be moved out here.
4. From here on, all modules between `server` and `client` would be shared
5. Might also be a good idea to create a [.gitignore](.gitignore) to omit this `node_modules`

## POC
1. At server, specify `start` command at [./server/package.json](./server/package.json)
    ```diff
    {
    "name": "server",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "dependencies": {
        "cors": "^2.8.5",
        "express": "^4.18.1"
    },
    +  "scripts": {
    +    "start": "node index.js"
    +  }
    }
    ```
2. Start server
    ```bash
    # cd to root first

    yarn workspace server start
    ```

2. Start client
    ```bash
    # cd to root first

    yarn workspace client start
    ```

# Installing dependencies for workspaces
1. Make sure workspace has a `package.json`
2. Make sure workspace is linked to root's [./package.json](./package.json)
    ```jsonc
        {
            "workspaces": [
                // "name" property in workspace's package.json
            ]
        }
    ```
3. yarn workspace < workspace name > < any other yarn commands >  
    e.g.
    ```bash
    yarn workspace server add express
    ```


# Installing dependencies for root
    yarn -W add typescript