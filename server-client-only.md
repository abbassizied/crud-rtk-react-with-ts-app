#### Keeping Server-Only Code out of Client Components (Poisoning)
- The "server only" package: use this package to mark modules that contain server-only code and to receive a build-time error explaining that this module can only be used on the server. 
``` 
npm install server-only // To prevent unintended client usage of server code 

// Then
import 'server-only'
``` 
- The "client only" package: use this package to mark modules that contain client-only code and to receive a build-time error explaining that this module can only be used on the client.
``` 
npm install client-only // To prevent unintended server usage of client code 

// Then
import 'client-only'
``` 