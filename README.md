# ArcOS v7

This is the main repository for the ArcOS v7 project. This code is to remain private until further notice. Do not share any code from this repository with other people. If you're reading this, that means that you have exclusive access to this code, which means you'll honour its secrecy.

## Getting started

You'll need the latest version of [NodeJS](https://nodejs.org/), along with [Git](https://git-scm.com/). If you don't want to use the deployed ArcOS backend, you'll have to clone it yourself. For more information, go to [ReArc-Backend-v1](https://github.com/IzK-ArcOS/ReArc-Backend-v1)

1. Clone the repository:

```bash
$ git clone git@github.com:IzK-ArcOS/v7
```

2. Satisfy dependencies:

```bash
# Using Yarn
$ yarn

# Using npm
$ npm install

# Using bun
$ bun i
```

3. Copy the `.env.example` file to `.env`. ArcOS won't boot without a correct ENV file. In this `.env` file, modify `DW_SERVER_URL` and `DW_SERVER_AUTHCODE` to the URL and AuthCode of the server you're connecting to. **DO NOTE**: a trailing slash in the server URL prevents various ArcOS functions, including Direct File Accessing, from working. **Do not end the URL with a slash.**
4. Run the frontend:

```bash
# Using Yarn
$ yarn dev

# Using npm
$ npm run dev

# Using bun
$ bun dev
```

## Building

To build ArcOS v7, simply run the `build` command using your favourite NodeJS package manager. My preference is Yarn.

```bash
# Using Yarn
$ yarn build

# Using npm
$ npm run build

# Using bun
$ bun run build
```

The compiled copy of ArcOS v7 will be in the `dist/` directory.

## The deployed server

If you don't have a backend and you're not able to host one yourself, use these credentials in your `.env` file to connect to the deployed ReArc backend:

- set `DW_SERVER_URL` to `https://api.arcapi.nl`
- set `DW_SERVER_AUTHCODE` to `ohshitv7iscoming`

## License

ArcOS is licensed under the GPLv3 license specified [here](./public/license).

## Author

Izaak Kuipers <izaak.kuipers@gmail.com>

## Credits

All assets used in ArcOS belong to their respective authors. Wallpapers have been provided by outside collaborators, each of them asked if I can use the wallpaper. A wallpaper with copyright issues won't ever be added to ArcOS.

## Disclaimers

- ArcOS cannot be used as a primary operating system. An attempt to do so is discouraged.
- This is not an actual operating system. It is an environment that runs on top of your browser, built using web technologies.
- All assets in ArcOS, including those created by me, belong to their respective owners. Reuse without credit is not permitted.
- I’m not responsible for loss of data when making use of ArcOS’ filesystem. Do not store sensitive info on the filesystem. ArcOS passwords are hashed and salted.
- ArcOS is in a pre-release stage. Full system stability cannot be guaranteed. When working on documents, be sure to frequently save changes to prevent a loss of data in case of a sudden crash.

test