# azure-ad-token

This is a project created to generate Azure AD OAuth tokens, please note down your Application ID and Azure AD tenant (or domain).


## Install dependencies

Run
``` 
npm i  
```
In the root of this repository.

## Run application

Run
``` 
npm run start
```
In the root of this repository.

## Usage
Open your browser on address http://localhost:4200.
Make sure your application has http://localhost:4200/loginredirect registered as a callback URL.
Enter the domain as tenant and your Application ID as client id then press login.

When redirected, your access_token will be displayed, press 'Copy to clipboard' to copy this token to the clipboard.
You can now use this token as a Bearer token in your requests.
