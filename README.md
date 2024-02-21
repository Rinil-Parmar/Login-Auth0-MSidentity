# React Login Authentication with Auth0 and Microsoft Identity

This repository contains a React application with simple login and registration functionality implemented using Auth0 and Microsoft Identity.

## Features

- Login and registration functionality using Auth0 and Microsoft Identity.
- Users can choose to log in with either Auth0 or their Microsoft accounts.

## Setup Instructions

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Install dependencies using npm or yarn:

    ```bash
    npm install
    ```

3. Configure Auth0 and Microsoft Identity settings:

    - Create an Auth0 application and configure the allowed callback URLs.
    - Register a new application in the Microsoft Azure portal and configure the redirect URIs.

5. Start the development server:

    ```bash
    npm run dev
    ```


    The application will be running at `http://localhost:5173`.

## Usage

- Navigate to `http://localhost:5173` in your web browser.
- Log in or register using Auth0 or Microsoft Identity.
- After successful authentication, you will be redirected to the home page.

