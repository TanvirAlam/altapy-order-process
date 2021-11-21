### How to Run:

- GOTO: `cd technical-test-backend` => build docker and get the container id: 
  - `sudo docker build .`
  - `sudo docker run -p 8080:8080 built-container-id`

- GOTO: `cd technical-test-frontend` => `npm start`
- OPEN BROWSER: GOTO: `http://localhost:3000/ 


### Tech used for FRONTEND:

```
"@emotion/react": "^11.6.0",
"@emotion/styled": "^11.6.0",
"@mui/material": "^5.1.1",
```
- Used for design purpose, function based css and ready-made components for different UI features.
- Such as:
  - CARDS,
  - Predefined CSS
  - Fast and easy way to build frontend
  
```
"axios": "^0.24.0",
```
- Used for different API requests to GET or POST data
- Also used to solve CORS issues

```
"formik": "^2.2.9",
```
- It keeps track of form's state and then exposes it plus a few reusable methods and event handlers ( handleChange , handleBlur , and handleSubmit )
- Really nice integration with `yup`, which is used for validation

```
"react-router-dom": "^6.0.2",
```
- Implement dynamic routing

```
"yup": "^0.32.11"
```
- Schema builder for value parsing and validation

### Further improvements:

- Separate `OrderForm.tsx` into more smaller reusable components.
- Add spinner on each async load
- Need to redirect after order creation
- Fix `Reset` button is not Working
- Try adding random image per order
- etc keep imporoving it
