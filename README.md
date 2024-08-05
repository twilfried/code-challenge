## 🚀 Welcome to the PayFit live coding challenge

### 💻 Context

You are on an Operating System and several paths of the filesystem are referenced in the `registry`.

The `registry` is an array of objects, each one representing a path.

A path is formed of:

- `path`: A string representing the location within its parent
- `parent`: The parent location
- `level`: The level needed to access this path

The users of this operating system are referenced in a `users` array of objects.

Each object representing a user is formed of:

- `name`: A string representing the user name
- `level`: A number representing the user access level

### 📝 Rules

All the work you provide must be within `index.js`.

The three functions you will have to implement are exported members of `index.js`.

You can and SHOULD reuse your previous task(s) to complete the next one(s), think about this exercise as a whole and not just independent questions.

### ✅ Your Tasks

#### 1️⃣ reate a function returning all the absolute paths

Even if `/toto/tata` exists, `/toto` is a valid path that should be returned.

The exported function should be `getAllPaths(registry)` and return an array of objects where each object contains at least the key `absolutePath`.

#### 2️⃣ Create a function checking the accessibility of a path for a specific user

The exported function should be `hasAccess(user, path, paths)` where `user` is a user object and `path` is a string.

The exported function should return a boolean, `true` if the user has access to the path, `false` otherwise.

Note: a nested path is accessible **only if** all the parent paths are accessible to the user.

#### 3️⃣ Create a function listing and returning all the accessible paths for a specific user

The exported function should be `getUserPaths(user, paths)` where `user` is a user object.

The exported function should return an array of path (paths).

> Good luck! :v:
