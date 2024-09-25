## Project setup

If you do need to set the project up locally yourself, feel free to follow these
instructions:

### System Requirements

- [Node.js](https://nodejs.org/) >= 18.12.1

### Setup steps

1.  Clone the repo
2.  Copy `.env.example` into `.env`
3.  Run `yarn`
4.  Run `yarn start`

And open up `http://localhost:3000` and rock!

### Run storybook

- `yarn storybook`

### Add new icon in icomoon (https://icomoon.io);

1. Select import project in icomoon (https://icomoon.io/app/#/projects)
2. Choose file `selection.json` in `src\assets\fonts\selection.json`
3. Select project and import new icon (use `Import to set` or `Import icon`)
4. Select the icon that you want to generate => Choose `Generate Font` => Download font
5. Replace file in `src\assets\fonts`
6. Add styles font in `src\assets\styles\_fonts.scss`
