# README

- [🔥🔥 React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)  
- [date-fns](https://www.npmjs.com/package/date-fns)
- [date-fns - modern JavaScript date utility library](https://date-fns.org/)
- [Reactjs: Using same form for add and update](https://stackoverflow.com/questions/57488743/reactjs-using-same-form-for-add-and-update)
- [TypeScript Date (With Examples)](https://www.spguides.com/typescript-date/)
- [React material UI form validation using error and helperText](https://stackoverflow.com/questions/61381370/react-material-ui-form-validation-using-error-and-helpertext)
- [How to Sort Array of Objects In Typescript](https://reacthustle.com/blog/typescript-sort-array-of-objects-by-property#google_vignette)
- [How to Create a Reusable React Form component](https://www.section.io/engineering-education/how-to-create-a-reusable-react-form/)
- [How to make forms reusable and dynamic in React](https://dev.to/sarahnosal/how-to-make-forms-reusable-and-dynamic-in-react-1em2)
- [Use immer to drive state with a React hooks](https://github.com/immerjs/use-immer)
- [The Ultimate Guide to MUI TextField onChange with TypeScript](https://smartdevpreneur.com/the-ultimate-guide-to-mui-textfield-onchange-with-typescript/)
- [Add or remove input fields dynamically with ReactJS](https://www.cluemediator.com/add-or-remove-input-fields-dynamically-with-reactjs)
- [Zod – A user input validation library for both frontend and backend.](https://www.npmjs.com/package/zod)
- [React Hook Form – A library for validating React forms](https://react-hook-form.com/)
- [The simple images uploader applied Render Props patter](https://www.npmjs.com/package/react-images-uploading?activeTab=readme)
- [Multiple Image Upload In ReactJS](https://www.thecodehubs.com/multiple-image-upload-in-reactjs/)
- [Material UI Image Upload example with Preview, Axios & Progress Bar](https://www.bezkoder.com/material-ui-image-upload/)
- [🔥How to enable file upload on React's Material UI simple input?](https://stackoverflow.com/questions/40589302/how-to-enable-file-upload-on-reacts-material-ui-simple-input)
- [X - NotForMui - React input file component with images preview](https://github.com/JakeHartnell/react-images-upload)
- [X - NotForMui - A proof of concept for: https://github.com/JakeHartnell/react-images-upload ](https://codesandbox.io/s/react-images-upload-poc-0qwrqb)
- [🔥 A Material-UI File Upload Dropzone For React](https://reactjsexample.com/a-material-ui-file-upload-dropzone-for-react/)
- [material-ui-dropzone](https://yuvaleros.github.io/material-ui-dropzone/)
- [🔥🔥🔥🔥 React, RTK Query, React Hook Form and Material UI – Image Upload](https://codevoweb.com/react-rtk-query-react-hook-form-and-material-ui-multipart-formdata/)
- [🔥🔥🔥🔥 how to use file upload in react mui 5](https://frontendshape.com/post/how-to-use-file-upload-in-react-mui-5)
- [How to Create React Multiple File Upload using NextJS and Typescript](https://reacthustle.com/blog/how-to-create-react-multiple-file-upload-using-nextjs-and-typescript#google_vignette)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Using Redux Toolkit - Usage With TypeScript](https://redux-toolkit.js.org/usage/usage-with-typescript)
- [How To Sort an Array of Objects by Date in TypeScript](https://typescriptpro.net/how-to-sort-an-array-of-objects-by-date-in-typescript/)
- [🔥🔥 React.JS Typescript with ReduxToolkit CRUD Sample](https://github.com/deanilvincent/React.JS-ReduxToolkit-Typescript-CRUD-Sample/tree/main)
- [🔥🔥 ASP.NET Core Web API with Angular Basic CRUD (Create-Read-Update-Delete) Operations](https://github.com/deanilvincent/ASP.NET-Core-Web-API-with-Angular-Basic-Crud)
- [🔥🔥 RTK Query Examples](https://redux-toolkit.js.org/rtk-query/usage/examples)
- [🔥🔥🔥🔥🔥🔥 React CRUD example with Redux Toolkit, RTK Query & REST API](https://codevoweb.com/react-crud-example-with-redux-toolkit-rtk-query/)
- [React Post Data with Redux Toolkit RTK Query Tutorial](https://www.positronx.io/react-post-data-with-redux-toolkit-rtk-query-tutorial/)

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


# Suspense

```
import { Suspense } from 'react'

<Suspense fallback={<p>Loading ...</p>}>
 // *******        
</Suspense>
```

## Uncontrolled vs. Controlled 

- The component can be controlled or uncontrolled.
	- A component is controlled when it's managed by its parent using props.
	- A component is uncontrolled when it's managed by its own local state.


# 🌈 Tech Stack
- TypeScript
- React
- Jest with React Testing Library for the unit tests
- Cypress for the end-to-end tests


# 🔀 Related information
Feel free to check it out and star the repo! 🌟😊🙌