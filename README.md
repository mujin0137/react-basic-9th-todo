# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
react-basic-9th-todo
├─ .git
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-f48665d445507990bcad7dc90fd5b05010eda1ee.idx
│  │     ├─ pack-f48665d445507990bcad7dc90fd5b05010eda1ee.pack
│  │     └─ pack-f48665d445507990bcad7dc90fd5b05010eda1ee.rev
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ kkachi-kkachi
│  ├─ .git
│  │  ├─ config
│  │  ├─ description
│  │  ├─ HEAD
│  │  ├─ hooks
│  │  │  ├─ applypatch-msg.sample
│  │  │  ├─ commit-msg.sample
│  │  │  ├─ fsmonitor-watchman.sample
│  │  │  ├─ post-update.sample
│  │  │  ├─ pre-applypatch.sample
│  │  │  ├─ pre-commit.sample
│  │  │  ├─ pre-merge-commit.sample
│  │  │  ├─ pre-push.sample
│  │  │  ├─ pre-rebase.sample
│  │  │  ├─ pre-receive.sample
│  │  │  ├─ prepare-commit-msg.sample
│  │  │  ├─ push-to-checkout.sample
│  │  │  ├─ sendemail-validate.sample
│  │  │  └─ update.sample
│  │  ├─ index
│  │  ├─ info
│  │  │  └─ exclude
│  │  ├─ objects
│  │  │  ├─ 0c
│  │  │  │  └─ 589eccd4d48e270e161a1ab91baee5e5f4b4bc
│  │  │  ├─ 23
│  │  │  │  ├─ 28e170b0c2fd09a25fe72a20557c661702546e
│  │  │  │  └─ 8d2e4e6436b353404369d9a59fda5f1f980657
│  │  │  ├─ 25
│  │  │  │  └─ f7a63ee61941357719d9f9bdfc6d2b7d59f36b
│  │  │  ├─ 55
│  │  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  │  ├─ 61
│  │  │  │  └─ 19ad9a8faaa5073a454f67b50fb98a25972fd2
│  │  │  ├─ 6c
│  │  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  │  ├─ 94
│  │  │  │  └─ c0b2fc152a086447a04f62793957235d2475be
│  │  │  ├─ a5
│  │  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  │  ├─ b8
│  │  │  │  └─ 43ccb0167d8715a86ee32aa054746b2be7e5c8
│  │  │  ├─ b9
│  │  │  │  ├─ a1a6deac8775b5598874b2bc3c7971d82cf211
│  │  │  │  └─ d355df2a5956b526c004531b7b0ffe412461e0
│  │  │  ├─ ba
│  │  │  │  └─ 0d5422be5746f4f301111570e73d188759081d
│  │  │  ├─ e7
│  │  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  │  ├─ f6
│  │  │  │  └─ 7355ae04c4000eef464262481f6b02daa50789
│  │  │  ├─ f7
│  │  │  │  └─ 68e33fc946e6074d6bd3ce5d454853adb3615e
│  │  │  ├─ info
│  │  │  └─ pack
│  │  │     ├─ pack-ea745feafb3c9c6c737e15798412534de72257fb.idx
│  │  │     ├─ pack-ea745feafb3c9c6c737e15798412534de72257fb.pack
│  │  │     └─ pack-ea745feafb3c9c6c737e15798412534de72257fb.rev
│  │  ├─ packed-refs
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     ├─ remotes
│  │     │  └─ origin
│  │     │     └─ HEAD
│  │     └─ tags
│  ├─ .gitignore
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ LICENSE
│  ├─ package.json
│  ├─ public
│  │  └─ vite.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  └─ react.svg
│  │  ├─ index.css
│  │  └─ main.jsx
│  └─ vite.config.js
├─ LICENSE
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ index.css
│  └─ main.jsx
└─ vite.config.js

```