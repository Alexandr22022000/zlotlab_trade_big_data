# ZLOTLAB_TRADE_BIG_DATA Time machine`s reports storage

## Description
This repo contains service, that store and provide results of time machine executions.

## Preparations steps
1. Install dependencies
    ```
    yarn
    ```
1. Create `.env` file based on `.env.example` in root folder of service
    ```
    cp .env.example .env
    ```
    or provide following variables via CLI on start manually
    ```
    PORT=5003
    ```
1. Start dev node of service via nodemon
    ```
    yarn start
    ```
1. Start production version
    ```
    yarn build
    yarn prod
    ```
## Dependencies
Engines` versions for proper work
  - `npm` - `6.14.15`
  - `node` - `14.18.2`
  - `yarn` - `1.22.17`

## Scripts
- `yarn prettier` - apply prettier for source files
- `yarn dev` - starts service in dev mode
- `yarn start` - starts service in dev mode with nodemon
- `yarn build` - builds production version
- `yarn prod` - starts service from ./build
