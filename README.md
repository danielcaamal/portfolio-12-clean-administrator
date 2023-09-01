# Portfolio 12 - API Clean Architecture

Author: [Daniel Caamal](https://github.com/danielcaamal)

## Description

Clean architecture for a Nest Express API.

![Clean](/clean-architecture.png)

## Domain

Is the core of the application, it contains the business logic and the entities. [See `domain` folder]('./domain')

- Config: contains the configuration of the business logic (database interfaces, server interfaces, etc).
- Enums: contains the enums of the business logic.
- Exceptions: contains the exceptions interfaces of the business logic.
- Logger: contains the logger interfaces of the business logic.
- Models: contains the models interfaces and classes of the business logic.
- Repositories: contains the repositories interfaces of the business logic:
  - Data Sources: contains the data sources interfaces of the business logic (multiple repositories)
- Responses: contains the responses interfaces of the business logic.
  - Format exceptions: contains the format exceptions interfaces of the business logic.
  - Format responses: contains the format responses interfaces of the business logic.

## Use Cases

Is the application layer, it contains the use cases of the business logic that connects the domain with the infrastructure. Is implemented by the presentation layer [See `use-cases` folder]('./use-cases')

## Infrastructure

Is the external layer, it contains the external dependencies of the application. It implements the domain interfaces [See `infrastructure` folder]('./infrastructure')

- Config: contains the configuration of the application (environment, read-encrypted, etc).
- Data Providers: contains the data providers of the application (database, server, APIs, etc).
  - Config: contains the configuration of the application (database, server, etc).
  - Mappers: contains the mappers of the application.
  - Models: contains the models of the application.
  - Enums: contains the enums of the application.
  - Repositories: contains the repositories of the application.
- Docs: contains the documentation of the application.
  - Swagger: contains the swagger of the application.
- Logger: contains the logger implementation of the application.
- Responses: contains the responses implementations of the application
  - Exceptions: contains the exceptions of the application.
  - Interceptors: contains the interceptors of the application.

## Presentation

Is the presentation layer, it contains the presentation of the application. [See `presentation` folder]('./presentation')

- Config: contains the configuration of the framework application (Swagger, etc).
- Controllers: contains the controllers of the framework application, receives the data from the services and presents the data to external applications.
- Dtos: contains the dtos (input data) of the framework application.
- Mappers: contains the mappers of the framework application.
- Services: contains the services of the framework application, implements the use cases and presents and maps the data to the controllers.
- Presenters: contains the presenters of the framework application, presents the data to the controllers.

## Implementations

### Implementation of a new use case

1. Create the use case in the use cases layer.
2. Create the service as use case in the presentation layer.
3. Create if necessary the presenter in the presentation layer.
4. Connect the service use case to the service and map the data to the presenter.
5. Connect the service to the controller.
6. Expose the controller and document it in the swagger.

### Implementation of a new repository

1. Create the repository in the domain layer.
2. Create the repository in the infrastructure layer.
3. Implement the repository in the infrastructure layer.
4. Connect the repository to the use case in the use cases layer.
5. Follow the "Implementation of a new use case".

### Implementation of a new data provider

1. Create the data provider in the infrastructure layer.
2. Implement the data provider in the infrastructure layer.
3. Add the new data provider to the data providers module.
4. Follow the "Implementation of a new repository".

### Implementation of a new domain model

1. Create the model in the domain layer.
2. Create the model in the infrastructure layer.
3. Implement the model in the infrastructure layer.
4. Follow the "Implementation of a new repository" and the "Implementation of a new data provider" to complete the implementation.

# Installation

```bash
$ yarn install
```

# Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev
```

# Test

```bash
# unit tests
$ yarn test
```
