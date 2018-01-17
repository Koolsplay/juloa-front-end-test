# JULOA FRONT-END TEST #

Includes : react, redux, react router, webpack

### Pre-requisites ###
Node > v 6.11.1 must be installed

Brew/APT update and Node management
```sh
brew update
apt-get update
sudo npm install -g n
n stable
```

Yarn installation (either... brew preferred on MacOSX)
```sh
sudo npm install -g yarn
brew install yarn --without-node
apt-get install yarn
```

### Installation ###

```sh
yarn install
```

WARNING:
If changing node version, run:
```sh
yarn add --force node-sass
```

### Features ###

Run on webpack dev server
```sh
yarn dev
```

Build for production (via server http://)
```sh
yarn build
```


### In depth... ###

#### Packaging ####

Hot-Module-Replacement: allows hot module replacement on file change in dev mode

Babel: configured with ENV preset, thus targeting (multiple) specific browser polyfills

