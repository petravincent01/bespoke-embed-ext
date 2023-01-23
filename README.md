## Bespoke interactive embed



To start the server:
`npm start`

To build the files for the production environment:
`npm run build`

To build the files for the UAT environment:
`npm run build-uat`

# Two Branches

1. Use the "beforeLogin" branch to update the embed code before a user logins to dotcom
2. Use the "afterLogin" branch to update the embed code after a user logins to dotcom


# Deloying
1. Run 'npm run build'
2. In the "mustDeploy" folder, make sure the spContent path and ID is matching your site
