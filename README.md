# Node.js Learning Project

This project is designed to help you learn the fundamentals of Node.js by working directly with its core modules such as `fs` (file system), `http`, `stream`, and `path`. You will also learn how to test your code using Jest.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Running Tests](#running-tests)
- [Running the project](#running-the-project)
- [License](#license)

## Introduction

This project focuses on learning Node.js without any frameworks. It includes examples and exercises involving:
- Filesystem operations
- HTTP server creation
- Streaming data
- Path manipulation
- Testing with Jest

## Getting Started

To get started with this project, you need to have Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone this repository:
   ```bash
    git clone https://github.com/HermanCeaser/raw-nodejs.git
   ```
2. Navigate to the project directory:
   ```bash
   cd raw-nodejs
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Project Structure

    nodejs-learning-project/
    │
    ├── errors.js                 # Error messages
    ├── utils/
    │   ├── dataPaths.js          # Paths to data files
    ├── __tests__/
    │   ├── task1.test.js   # Test file for the main function
    ├── data/                     # Sample data files
    │   ├── products.json
    │   ├── customers.json
    │   ├── reviews.json
    ├── task1.js                  # Simple task file
    ├── task2.js                  # Simple task file
    ├── README.md                 # Project README
    ├── package.json              # Project metadata and dependencies
    └── package-lock.json         # Lockfile for npm
    

## Features
- Filesystem Operations: Read and parse JSON files using the fs module.
- HTTP Server: Create and manage a simple HTTP server.
- Data Streaming: Stream data to handle large files efficiently.
- Path Manipulation: Use the path module to handle file paths.
- Testing: Write and run tests using Jest.

## Running Tests
This project uses Jest for testing. To run the tests, use the following command:

   ```bash 
   npm test
   ```

## Running the project
This project uses Jest for testing. To run the tests, use the following command:

   ```bash 
   npm run task${TASK_NUMBER}
   ```
where `${TASK_NUMBER}` is a number like `1,2,3...n`. so to run `task1` run the command `npm run task1` 

## License
This project is licensed under the `MIT` License. See the LICENSE file for details.