# meteor-k

*koriggans:k-debug*

Meteor package to define a debug only variable for
[**Korrigans**][1] packages and applications.
By itself this package does nothing.

## Table of Contents

-   [Installation](#installation)
-   [Optional dependants](#optional-dependants)
-   [Testing](#testing)
-   [Contributors](#contributors)
-   [License](#license)

## Installation

In your Meteor app directory, enter:

    $ meteor add koriggans:k-debug

## Optional dependants

-   [meteor-k-check][2] alias *koriggans:k-check*
-   [meteor-k-pattern][3] alias *koriggans:k-pattern*
-   [meteor-k-schema][4] alias *koriggans:k-schema*

## Testing

In your Meteor app directory, clone the package files in `packages` folder:

    $ git clone https://github.com/Korrigans/meteor-k-debug

Then start the tests:

    $ set VELOCITY_TEST_PACKAGES=1
    $ meteor test-packages --driver-package velocity:html-reporter korrigans:k-debug

## Contributors

-   **MrLowkos**: [@github][5] - [@atmosphere][6]
-   **Aralun**: [@github][7] - [@atmosphere][8]

## License

[MIT](../master/LICENSE)

[1]: https://github.com/Korrigans
[2]: https://github.com/Korrigans/meteor-k-check
[3]: https://github.com/Korrigans/meteor-k-pattern
[4]: https://github.com/Korrigans/meteor-k-schema
[5]: https://github.com/MrLowkos
[6]: https://atmospherejs.com/mrlowkos
[7]: https://github.com/Aralun
[8]: https://atmospherejs.com/aralun
