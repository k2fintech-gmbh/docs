# Profile API

### Get own profile info
<summary><code>GET</code> <code><b>/profile</b></code></summary>

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | [Profile](types/chat.md#profile)                                             |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> {
>   "id": "weEEwwecw_wdx2",
>   "phoneNumber": "+79333333333",
>   "username": "@ask_uznetsov",
>   "firstName": "Aleksandr",
>   "lastName": "Ivanov",
>   "avatarUrl": "https://dev.iambig.ai/public/1feb2e3c2d04dec268da0606dd163e76f6869233129be1633ab9937903640818",
>   "verified": "true"
> } 
> ```

---

### Get profile info by ID
<summary><code>GET</code> <code><b>/profile/{id}</b></code></summary>
Profile data will be filtered based on that user's privacy settings

##### Parameters (path)
> | name           | type     | data type | description |
> |----------------|----------|-----------|-------------|
> | id             | required | string    | user ID     | 

Can be sent via **WebSocket** as request `profile`
##### WS request payload
> | name           | type     | data type | description |
> |----------------|----------|-----------|-------------|
> | id             | required | string    | user ID     | 

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | [Profile](types/chat.md#profile)                                             |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> {
>   "id": "weEEwwecw_wdx2",
>   "phoneNumber": "+79333333333",
>   "username": "@ask_uznetsov",
>   "firstName": "Aleksandr",
>   "lastName": "Ivanov",
>   "avatarUrl": "https://dev.iambig.ai/public/1feb2e3c2d04dec268da0606dd163e76f6869233129be1633ab9937903640818",
>   "verified": "true"
> } 
> ```

---

### Get profiles info by ID list (batch)
<summary><code>GET</code> <code><b>/profiles</b></code></summary>
Profile data will be filtered based on that users' privacy settings

##### Parameters (body)
> | name | type     | data type | description |
> |------|----------|-----------|-------------|
> | ids  | required | string[]  | user IDs    | 

Can be sent via **WebSocket** as request `profiles`
##### WS request payload
> | name | type     | data type | description |
> |------|----------|-----------|-------------|
> | ids  | required | string[]  | user IDs    | 

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | JSON array of [Profile](types/chat.md#profile)                               |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>   "ids": [ "userId1", "userId2" ]
> }
> ```

##### Example Response
> ```json 
> [
>   {
>     "id": "userId1",
>     "phoneNumber": "+79333333333",
>     "username": "@ask_uznetsov",
>     "firstName": "Aleksandr",
>     "lastName": "Ivanov",
>     "avatarUrl": "https://dev.iambig.ai/public/1feb2e3c2d04dec268da0606dd163e76f6869233129be1633ab9937903640818",
>     "verified": "true"
>   }  
> ]
> ```

---

### Update own profile
<summary><code>POST</code> <code><b>/profile</b></code></summary>

##### Parameters (body)
> | name        | type     | data type | description |
> |-------------|----------|-----------|-------------|
> | phoneNumber | optional | string    |             | 
> | username    | optional | string    |             | 
> | firstName   | optional | string    |             | 
> | lastName    | optional | string    |             | 
> | avatarUrl   | optional | string    | URL         | 

##### Responses
> | http code | content-type       | response                                     |
> |-----------|--------------------|----------------------------------------------|
> | `200`     | `application/json` | `{}`                         |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}` |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}` |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> {}
> ```        

---

### Add E-mail address to profile (via OTP verification)
<summary><code>POST</code> <code><b>/send-email</b></code></summary>

Send OTP to validate e-mail address<br/>
To link a new e-mail - just send new request with new e-mail.<br/> 
Set `expiration` for testing purposes (its in minutes). Default is `4` hours.

##### Parameters (body)
> | name       | type     | data type | description                                        |
> |------------|----------|-----------|----------------------------------------------------|
> | email      | required | string    | valid e-mail addres                                | 
> | expiration | optional | number    | Expiration time in minutes. <br/> Needed for tests | 

##### Responses
> | http code | content-type       | response                                                                           |
> |-----------|--------------------|------------------------------------------------------------------------------------|
> | `200`     | `application/json` | `JSON response from Mail server`                                                   |
> | `400`     | `application/json` | `{"error": "Email address is not valid","timestamp": 1737195610743,"status": 400}` |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`               |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`       |

##### Example Request
> ```json
> {
>   "email": "user@example.com",
> }
> ```    

##### Example Response
> ```json
> {
>   "ErrorCode": 0,
>   "Message": "OK",
>   "MessageID": "c303aaf1-9fe6-4ce6-8e62-8c570146a395",
>   "SubmittedAt": "2025-02-11T08:20:12.4989909Z",
>   "To": "test1@iambig.ai"
> }
> ```   

---

### Check OTP code to verify e-mail
<summary><code>POST</code> <code><b>/verify-email</b></code></summary>

##### Parameters (body)
> | name     | type     | data type | description            |
> |----------|----------|-----------|------------------------|
> | code     | required | string    | OTP code from e-mail   | 

##### Responses
> | http code | content-type       | response                                                                                   |
> |-----------|--------------------|--------------------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"userId": "string","email": "string"}`                                                   |
> | `400`     | `application/json` | `{"error": "Wrong code","timestamp": 1737195610743,"status": 400}`                         |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`                       |
> | `404`     | `application/json` | `{"error": "Verification information not found","timestamp": 1737195610743,"status": 404}` |
> | `408`     | `application/json` | `{"error": "Code expired","timestamp": 1737195610743,"status": 408}`                       |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`               |

##### Example Request
> ```json
> {
>   "code": "O6EPNA",
> }
> ```    

##### Example Response
> ```json
> {
>   "userId": "string",
>   "email": "string"
> }
> ```   

---

### Get linked e-mail for current user
<summary><code>GET</code> <code><b>/email</b></code></summary>

##### Responses
> | http code | content-type       | response                                                                                   |
> |-----------|--------------------|--------------------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"userId": "string","email": "string"}`                                                   |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`                       |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`               |

##### Example Response
> ```json
> {
>   "userId": "string",
>   "email": "string"
> }
> ```   
