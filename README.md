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