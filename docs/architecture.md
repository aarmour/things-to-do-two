# Architecture

## Front End

The Angular app is organized into the following modules:

* `+admin`: Administrative interface. The user must be signed in and granted access to administer the application.
* `+events`: Upcoming events.
* `components`: Shared UI components that do not belong to one particular feature.
* `core`: Services and components that are global to the app. This module is only registered once in the root module and cannot be used by any other module. This module should not contain any service that can have more than one instance.

<small>A `+` preceding the module name indicates that the module is lazy-loaded.</small>

## Back End

### API

The API server is built with [Hapi](https://hapijs.com/).
