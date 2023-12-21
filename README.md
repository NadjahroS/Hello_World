# hello_world-V4

## Usage
Create a .env file with the following attributes (do not add '' or commas, this is not json)

domain=dev=
clientId=
client_secret=
callback_url=
audience=
api_url=

Run the generate.env.js script to create a edit the environment.ts
node generate-env.js

Build it with the following command for nginx. Also add https://localhost:4200 before hello world or whatever the link ends up being
ng build --configuration production --base-href hello_world