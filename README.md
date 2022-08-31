# CSS Preprocessors

## Before we start

1. This practical task is verified automatically with tests. 
2. Please, put all your `CSS` code to the `src/style.scss` file. If you use any other file, we would not be able to verify it.
3. Please, don't change `src/index.html` page structure, it may affect tests.

## Development

While you developing, you can simply open `src/index.html` in a browser for checking it. However, we prepared a more convenient way to run it locally, you can find all the details here - [Local Development](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/Autocode%20template%20docs/docs/LocalDevelopment.md).

## Check your solution before submitting it (OPTIONAL)

To be sure you submit a correct solution, you can verify it locally. It requires some local setup. Here you can find a description of how to do it - [Verify your solution locally](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/Autocode%20template%20docs/docs/VerifySolutionLocally.md)

## Task Requirements

In this task, we ask you to style page using SASS preprocessor. Task consists of 2 parts. First of all you need to add SASS to the project and write script to compile .scss into .css. In the second part you'll need to style page, using nesting selectors, mixins, functions and partials.
Please, note you MUST add all CSS rules in the `src/style.scss` file and not change the `src/index.html` file. We can't verify your solution if you use a different file. You don't need to add additional selectors with rulesets in `src/style.css`. Please, add required properties in existing rulesets.

### Add SASS to the project
   - Follow instructions in the article to install `node-sass` package. [node-sass package installation](https://www.npmjs.com/package/node-sass). You need to run installation script only and verify that `node-sass` package appeared in dependencies list in package.json.
   - add empty `sass` script to `package.json` scripts.
   - compose `sass` script to take all `.scss` files from `src` folder, compile them to `.css` and put new file(s) into `src/css` folder. Follow step 3 of instruction in the article [How to setup sass in your project](https://dev.to/chrissiemhrk/how-to-setup-sass-in-your-project-2bo1). Please, don't remove and don't change existing scripts.
   - run `sass` script.

### Style the page
   #### Create variables
   - rename `_variables.css` file into `_variables.scss`.
   - refactor `_variables.css` file to match "scss" syntaxis. Don't change variables values and names.
   - rename `style.css` file into `style.scss`.
   - refactor `style.scss` to use sass variables from `_variables.scss` file. Don't forget to import `_variables.scss`.
   - after `style.scss` file will be changed, new `style.css` file should appear in `src/css` folder. Observe how your styles were compiled in CSS.
   #### Apply nesting selectors
   - refactor `style.scss`, using nesting selectors. For example `block__title--green` should be transformed into 
   `.block{&__title{&--green{/* your CSS rules here */}}}`, `.block--small` will be `.block {&--small{/* your CSS rules here */}}`. Don't change CSS rules for selectors.
   - observe how your changes were compiled in `src/css/style.css`.
   #### Use @extend
   - create `_placeholders.scss` in `src` folder.
   - Add placeholder selector `%block` in `_placeholders.scss` with common rules for `.block--small, .block--medium, .block--large` selectors.
   - replace common rules in `.block--small, .block--medium, .block--large` with extension from `%block`.
   - `.block__title, .block__title--green, .block__title--blue, .block__title--orange` selectors have common CSS rules. Replace them in `.block__title--green, .block__title--blue, .block__title--orange` selectors with extension from 
   `.block__title` class.
   - observe how your changes were compiled in `src/css/style.css`.
   #### Use @mixin
   - create `_mixins.scss` file in `src` folder.
   - in `style.scss` you can see, that `%block` placeholder and `main` selector use the same flexbox properties (`display`, `flex-direction`, `justify-content`, `align-items`) with different values. Create mixin `flexible-box`, which accepts `$flex-direction, $justify-content, $align-items` arguments and creates ruleset for `display`, `flex-direction`, `justify-content`, `align-items` properties, where `display` is `flex`, `$flex-direction` is a value of `flex-direction` property, `$justify-content` is a value of `justify-content` property and `$align-items` is a value of `align-items` property. Please, note, that properties order in mixin should be `display, flex-direction, justify-content, align-items`.
   - replace repieting rules in `%block` and `main` selectors with created mixin and pass expected arguments according to existing styles.
   - observe how your changes were compiled in `src/css/style.css`.
   #### Use functions
   - create `_functions.scss` file in `src` folder.
   - create function `multiply` which accepts 2 numbers (for example `3` and `2`) and returns multiplied number (`3*2`).
   - replace `calc(6*$block-margin)` calculation part in `main` width with `multiply(6, $block-margin)`.
   - create function `sum` which accepts list of numbers and returns sum of this numbers. For example `sum(1, 3, 5)` should return `9`, `sum(2, 4)` should return `6`, `sum(2, 4, 1, 12, 10, 1)` should return `30`.
   - replace `width: calc($small+$medium+$large+multiply(6, $block-margin))` in `main` with `count` function call. Please, don't change arguments order.
   - observe how your changes were compiled in `src/css/style.css`.
   