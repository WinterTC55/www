# www

The website for WinterTC (TC55), deployed to Cloudflare Workers via
[vinext](https://vinext.io/).

## Development

Install dependencies:

```sh
npm install
```

Start the local dev server:

```sh
npm run dev
```

## Build & Deploy

Production build:

```sh
npm run build
```

Deploy to Cloudflare Workers:

```sh
npm run build
npm run deploy
```

Preview deployment:

```sh
npm run build
npm run deploy:preview
```
