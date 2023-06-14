<h1 align="center"> Node MCSrvStat </h1>

<div align="center">

[![npm dependents](https://badgen.net/npm/v/node-mcsrvstat)](https://www.npmjs.com/package/node-mcsrvstat) [![npm download](https://badgen.net/npm/dt/node-mcsrvstat)](https://www.npmjs.com/package/node-mcsrvstat) [![npm license](https://badgen.net/npm/license/node-mcsrvstat)](https://www.npmjs.com/package/node-mcsrvstat) [![npm types](https://badgen.net/npm/types/node-mcsrvstat)](https://www.npmjs.com/package/node-mcsrvstat)

[![github release](https://badgen.net/github/release/chokojoestar/ProjectCreator)](https://github.com/chokojoestar/ProjectCreator/releases) [![github issues](https://badgen.net/github/issues/chokojoestar/ProjectCreator)](https://github.com/chokojoestar/ProjectCreator/issues) [![github commit](https://badgen.net/github/commits/chokojoestar/ProjectCreator)](https://github.com/ChokoJoestar/ProjectCreator/commits)


</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Install](#install)
  - [With NPM](#with-npm)
  - [With YARN](#with-yarn)
- [Example](#example)
  - [Java Server](#java-server)
  - [Bedrock Server](#bedrock-server)
- [Author](#author)

## Install

### With NPM
```sh
# Locally
npm install -D node-mcsrvstat

# Or globally
npm install -g node-mcsrvstat
```

### With YARN
```sh
# Locally
yarn add -D node-mcsrvstat

# Or globally
yarn add -g node-mcsrvstat
```

## Example

### Java Server
```ts
const serv = new Status().getJavaStatus("GommeHD.net");
serv.then(GommeHD => {
   console.log(GommeHD.version) // Return "1.8.x-1.20.x"
})
```

### Bedrock Server
```ts
const serv = new Status().getBedrockStatus("135.125.105.65:19132");
serv.then(HiveMC => {
   console.log(HiveMC.players.max) // Return 100001
})
```

## Author
 
- Create by ChokoJoestar
- mcsrvstat.us create by [Anders G. Jørgensen](https://spirit55555.dk/)