# vitepress-practice

**This repository is a [VitePress](https://vitepress.dev) sandbox environment created for learning and experimentation purposes only and may not conform to best practices or standards.**

## Overview

The main aim of this project is to explore the concept of _static website generation_ and improve my skills. Although some of the code may be useful, it may contain incomplete features, misinterpretations, bugs, or non-optimized code. Please keep in mind that the focus here is on learning rather than creating a polished product.

## Up and running

A repository klónozása a lokális fejlesztői gépre, a működéshez szükséges npm csomagok telepítése és a Vite hot-reload server indítása:

```console
cd ~
git clone git@github.com:sys256/vitepress-practice.git
cd vitepress-practice
npm install
npm run docs:dev
```

## Settings

I created the scaffolding of the project with the command below:

```console
npx vitepress init
```

TypeScript támogatást és a projekt root helyett a `./docs` directory használatát nem kértem. A _Default Theme_ kinézettel létrehozott honlap egy főoldalt és két további mintaoldalt tartalmaz:

- `index.md`
- `markdown-examples.md`
- `api-examples.md`

A téma beállításai a `.vitepress/config.js` fájlban találhatók. Minden téma saját, a default témától eltérő kulcsszavakkal vezérelhető.

## Dev commans

- `npm run docs:dev`\
A Vite fejlesztői hot-reload HTTP szerver indítása a forrásfájlokból dinamikusan előállított tartalommal.

- `npm run docs:build`\
Új build generálása a forrásfájlokból.

- `npm run docs:preview`\
A Vite szerver futtatása a build által létrehozott tartalommal.

## License

[MIT License](https://github.com/sys256/vitepress-practice/blob/main/LICENSE)

## Contact

If you have any questions, feel free to reach out to me via [info@sys256.eu.org](mailto:info@sys256.eu.org).
