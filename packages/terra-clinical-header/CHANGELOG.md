# Changelog

## Unreleased

## 3.26.0 - (April 21, 2023)

* Changed
  * Updated the component examples.

## 3.25.0 - (March 29, 2023)

* Changed
  * Updated wdio screenshots.

## 3.24.0 - (July 21, 2021)

* Changed
  * Updated Jest command

## 3.23.0 - (March 25, 2021)

* Changed
  * Upgrade tests to terra-functional-testing and WebDriverIO v6

## 3.22.0 - (January 5, 2021)

* Fixed
  * Fixed broken links in documentation.

## 3.21.0 - (November 10, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 3.20.0 - (August 4, 2020)

* Changed
  * Update changelog formatting

## 3.19.0 - (April 28, 2020)

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 3.18.0 - (April 23, 2020)

* Fixed
  * Fixed lowlight variable that was missing part of its values after variable rename happened.

## 3.17.0 - (April 22, 2020)

* Added
  * Backfilled missing lowlight theme vars

* Fixed
  * Fix terra-clinical-header-border-bottom theme name for low-light
  * Fix start and end content flex alignment
  * Fix left margin style

## 3.16.0 - (April 14, 2020)

* Added
  * Added orion-fusion-theme style values

* Changed
  * Update wdio test configuration to use root wdio config
  * Updated default theme styles to match terra-action-header

## 3.15.0 - (March 31, 2020)

* Added
  * Added wdio screenshots for clinical-lowlight-theme

## 3.14.0 - (March 17, 2020)

* Changed
  * Update docs to use MDX syntax

## 3.13.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

## 3.12.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 3.11.0 - (January 22, 2020)

* Added
  * Added reference wdio screenshots for "orion-fusion-theme".

## 3.10.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 3.9.0 - (September 19, 2019)

* Changed
  * Convert SCSS files to .module.scss

## 3.8.0 - (September 6, 2019)

* Changed
  * Removed inline styles from dev site components.
  * Add comments for ESlint 6
  * Cleaned up imports in examples and test files

## 3.7.0 - (August 14, 2019)

* Changed
  * Updated package.json test scripts
  * Fixed start content components that were not aligning to the center

## 3.6.0 - (July 16, 2019)

* Changed
  * Replaced inline stylings for terra-dev-site components with .scss files
  * Update wdio spec to use Terra.describeViewports

* Added
  * Add new theme variables for height
  * --terra-clinical-header-height
  * --terra-clinical-header-subheader-height

* Removed
  * Remove absolute positioning from title container

## 3.5.0 - (June 11, 2019)

* Removed
  * Removed node_modules from .npmignore

## 3.4.0 - (May 7, 2019)

* Fixed
  * Fixed the issue of overlapping content on IE 10 by increasing the rule specificty for the header child element.

## 3.3.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 3.2.0 - (February 5, 2019)

* Changed
  * Minor dependency updates

## 3.1.0 - (January 22, 2019)

* Change
  * Dependency updates

## 3.0.0 - (January 17, 2019)

* Breaking Change
  * Added new theming variables

* Added
  * Changelog dev site doc page

## 2.14.0 - (November 21, 2018)

* Changed
  * Minor dependency updates

## 2.13.0 - (October 2, 2018)

* Changed
  * Minor dependency updates

## 2.12.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 2.11.0 - (August 30, 2018)

* Changed
  * Minor dependency updates

## 2.10.1 - (July 25, 2018)

* Changed
  * Patch release

## 2.10.0 - (July 25, 2018)

* Fixed
  * Removed usage of CSS `initial` value because Internet Explorer does not support it
  * Fixed usage of invalid value for `border-bottom-style` on flex-subheaders

## 2.9.0 - (July 17, 2018)

* Changed
  * Added theming variables in Header

## 2.8.0 - (July 3, 2018)

* Fixed
  * Lint in doc page

## 2.7.0 - (June 28, 2018)

* Changed
  * Minor dependency updates

## 2.6.0 - (June 12, 2018)

* Changed
  * Conform to eslint updates

## 2.5.0 - (May 30, 2018)

* Changed
  * Moved examples to src

## 2.4.0 - (May 22, 2018)

* Changed
  * Minor dependency updates

## 2.3.0 - (May 1, 2018)

* Changed
  * Minor dependency updates

## 2.2.0 - (April 20, 2018)

* Changed
  * Minor dependency updates

## 2.1.0 - (March 6, 2018)

* Changed
  * Minor dependency updates

## 2.0.0 - (February 19, 2018)

* Changed
  * Update to React 16

## 1.8.0 - (February 19, 2018)

* Changed
  * Minor dependency updates

## 1.7.0 - (November 29, 2017)

* Added
  * Collapsible Content Section to enable use of CollapsibleMenuView

## 1.6.0 - (November 15, 2017)

* Changed
  * Update flex-end styling

## 1.5.0 - (September 26, 2017)

* Changed
  * Remove stylelint-disable selector-class-pattern
  * Update class names to follow selector-class-pattern

## 1.4.0 - (September 1, 2017)

* Changed
  * Change dependency on terra-base to v2.0.0
  * Update nightwatch tests and test scripts.

## 1.3.0 - (August 22, 2017)

* Fixed
  * End aligned items with no title.

* Added
  * isSubheader boolean prop to allow rendering of subheader component

## 1.2.0 - (August 16, 2017)

* Fixed
  * Text Truncation in IE10 and IE11.

## 1.1.1 - (July 27, 2017)

* Changed
  * Updated spacing around react-docgen comments

## 1.1.0 - (July 18, 2017)

* Changed
  * Converted component to use CSS modules
  * Updated nightwatch test scripts

* Removed
  * Removed nightwatch.config file

## 1.0.0 - (June 28, 2017)

Initial stable release
