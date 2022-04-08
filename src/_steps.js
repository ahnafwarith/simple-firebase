/* 
* Steps to use firebase
1. Create a project on console.firebase.google.com
2. Install firebase with node package manager
3. Register web app in firebase
4. Initialize firebase : Copy firebase init with config from firebase project settings in firebase.init.js |Project Settings> SDK setup and configuration|
5. export default app
6. import app firebase init.js into app.js
7. import getAuth from firebase/auth and create auth = getAuth(app)
8. turn on google authentication (firebase > authentication > enable google sign-in)
9. create google provider
10. useSignInPop-up and pass auth and provider
11. Handle .then() {if successful} and .catch error {elif error}
*/