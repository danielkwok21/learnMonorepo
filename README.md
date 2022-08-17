# Learn Monorepo
Learn how to use monorepo with nodejs + client.  
Follows https://www.youtube.com/watch?v=ACDGXHR_YmI&t=144s&ab_channel=ShawnC

# Key takeaways
Each application would no longer have
- node_modules
- git repo  
  
All of these would be referred to the root's.

# Steps
## Setup root 
End result: [this commit](https://github.com/danielkwok21/learnMonorepo/tree/edf1fa29171afcdd6959fd6c2b45994d16d23b24)
1. Run init with yarn
```bash
yarn init
```
2. Update [./package.json](./package.json).  
 Refer to https://classic.yarnpkg.com/lang/en/docs/workspaces/
```diff
{
  "name": "learn-monorepo",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",

#   Mandatory, required for yarn workspace to work
+  "private": true,

# server and client would be the workspaces we'll be creating soon.
+  "workspaces": [
+    "server",
+    "client"
+  ]
}
```

## Setup backend
1. Create a folder [./server](./server/) where our backend would reside in.
2. Run init with yarn
```bash
yarn init
```
3. The `name` in [./server/package.json](./server/package.json) should match that of `workspaces` at [./package.json](./package.json)  

    i.e.
    ```jsonc
    // ./server/package.json
    {
    "name": "server", // <- this...
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT"
    }

    ```
    ```jsonc
    // ./package.json
    {
        "workspaces": [
            "server", // <- ...should match this
            "client"
        ]
    }

    ```