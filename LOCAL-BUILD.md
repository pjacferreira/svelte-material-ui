How to: Use a Local Build for SMUI for your Project

# Cleanup

```sh
find . -name node_modules -type d -exec rm -rf '{}' \;
```

# Process

```sh
# Clone Repository
git clone git@github.com:pjacferreira/svelte-material-ui.git
cd svelte-material-ui

# Bootstrap Packages
npx lerna bootstrap
```

# Using SMUI in your project

First Way:

```sh
# Directly Link 
cd node_modules
ln -s (path to)/svelte-material-ui/packages @smui
```

Second Way:

Link directly to the local packges you use:

```sh
npm i --save-dev (path to)/svelte-material-ui/packages/data-table
```

Which will create the @smui/data-table package in package.json just like it's used in site package.json.
