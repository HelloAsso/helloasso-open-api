# HelloAsso OpenAPI

This repository stores and maintains the history of the HelloAsso OpenAPI specification. It serves as the foundation for generating SDKs and keeping API documentation up to date.

## 🚀 Workflow Overview

This project is integrated with an automated process that updates the OpenAPI definition, triggers SDK updates, and ensures our API documentation remains up to date.

### 🔄 How It Works

1. The OpenAPI file is refreshed from [swagger-to-readme](https://github.com/HelloAsso/swagger-to-readme).
2. A GitHub Action automatically generates SDKs for various languages.
3. The generated SDKs are pushed to their respective repositories.
4. The OpenAPI file is also used to update our API documentation on **ReadMe**.

### ⚙️ Automation with GitHub Actions

The following processes are automated:

- **OpenAPI Updates**: The OpenAPI definition is periodically refreshed.
- **SDK Generation**: When changes are detected, SDKs are regenerated and pushed to the relevant repositories.
- **Documentation Update**: The OpenAPI file is used to update our API documentation on [ReadMe](https://dev.helloasso.com/reference/obtenir-un-accesstoken-copy-1).

### 📚 Related Repositories

- [swagger-to-readme](https://github.com/HelloAsso/swagger-to-readme) – Updates and prepares the OpenAPI file.
- SDK repositories:
  - [helloasso-node](https://github.com/HelloAsso/helloasso-node)
  - [helloasso-php](https://github.com/HelloAsso/helloasso-php)
  - [helloasso-python](https://github.com/HelloAsso/helloasso-python)

### 📖 Updating the Documentation on ReadMe

The OpenAPI file is automatically processed and merged with any required modifications (e.g., translations from `changes.json`).
A GitHub Action updates the API documentation on ReadMe.
This workflow runs every Monday to ensure the documentation remains accurate and up to date.