# Contacts API

### Import/merge contacts from Phone Book
<summary><code>POST</code> <code><b>/contacts/whoIsThere</b></code></summary>

Find contacts by phone number and save/update contact information

##### Parameters (JSON body)
> | name           | type     | data type                                         | description                        |
> |----------------|----------|---------------------------------------------------|------------------------------------|
> | contacts       | required | array of ["PhoneContacts"](types/contacts.md)     | list of contacts with phone number |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | array of ["Profile"](types/contacts.md#Profile)                              |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>   "contacts": [
>       {
>           "phoneNumber": "+79333333333",
>           "firstName": "Aleksandr",
>           "lastName": "Ivanov"
>        }
>   ]
> }
> ```        

##### Example Response
> ```json
> {
>   "contacts": [
>       {
>           "id": "WEhNPJ1uVRonZRYC4nXmK",
>           "phoneNumber": "+79333333333",
>           "username": "@aivuser",
>           "firstName": "Aleksandr",
>           "lastName": "Ivanov",
>           "avatarUrl": "https://iambig.ai/pic.jpg"
>       }
>   ]
> } 
> ```

Profile data in responses may be filtered based on user's privacy settings.\
`phoneNumber` may be replaced with empty string ` '' `\
`avatarUrl` may be excluded \
`username` may be excluded    

---

### Getting list of Contacts
<summary><code>GET</code> <code><b>/contacts?includeChatList={bool}</b></code></summary>

Retrieve a list of own Contacts.<br />
`includeChatList` is `true` by default \
`lastSeen` param in response available only if `includeChatList` is `true` \
See more in ["Profile"](types/contacts.md#Profile) for Privacy options applications \
See [ChatListItem](types/chat-list.md#chatlistitem) for additional info

##### Parameters (query)
> | name               | type     | data type | description                  |
> |--------------------|----------|-----------|------------------------------|
> | includeChatList    | optional | boolean   | add chatListInfo to response |

##### Responses
> | http code | content-type       | response                                                                       |
> |-----------|--------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json` | array of ["Profile"](types/contacts.md#Profile)                                   |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`              |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`           |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`   |

##### Example Response
> ```json
> {
>   "contacts": [
>       {
>           "id": "WEhNPJ1uVRonZRYC4nXmK",
>           "phoneNumber": "+79333333333",
>           "username": "@aivuser",
>           "firstName": "Aleksandr",
>           "lastName": "Ivanov",
>           "avatarUrl": "https://iambig.ai/pic.jpg",
>           "lastSeen": 1719781200000,
>           "onlineHidden": true
>       }
>   ]
> }
> ```

---

### Find any user by Phone Number
<summary><code>GET</code> <code><b>/contacts/findByPhoneNumber</b></code></summary>

Find a User by his phone number. \
If user's `privacy` does not allow current user to see his phone number - than its profile will not be returned in response. \
Profile data in response may be filtered based on user's privacy settings.

##### Parameters (body)
> | name               | type     | data type | description                  |
> |--------------------|----------|-----------|------------------------------|
> | phoneNumber    | required | string    | "+79333333333" |

##### Responses
> | http code | content-type       | response                                                                       |
> |-----------|--------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json` | ["Profile"](types/contacts.md#Profile)                                   |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`              |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`           |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`   |

##### Example Response
> ```json
> {
>           "id": "WEhNPJ1uVRonZRYC4nXmK",
>           "phoneNumber": "+79333333333",
>           "username": "@aivuser",
>           "firstName": "Aleksandr",
>           "lastName": "Ivanov",
>           "avatarUrl": "https://iambig.ai/pic.jpg"
> }
> ```

---

### Find any user by Username
<summary><code>GET</code> <code><b>/contacts/findByUsername</b></code></summary>

Find a User by his phone number. \
If user's `privacy` does not allow current user to see his UserName - than its profile will not be returned in response. \
Profile data in response may be filtered based on user's privacy settings.

##### Parameters (body)
> | name               | type     | data type | description    |
> |--------------------|----------|-----------|----------------|
> | username    | required | string    | "someUserName" |

##### Responses
> | http code | content-type       | response                                                                       |
> |-----------|--------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json` | ["Profile"](types/contacts.md#Profile)                                   |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`              |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`           |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`   |

##### Example Response
> ```json
> {
>           "id": "WEhNPJ1uVRonZRYC4nXmK",
>           "phoneNumber": "+79333333333",
>           "username": "@aivuser",
>           "firstName": "Aleksandr",
>           "lastName": "Ivanov",
>           "avatarUrl": "https://iambig.ai/pic.jpg"
> }
> ```

---


### Block contact/user
<summary><code>POST</code> <code><b>/contacts/block</b></code></summary>

Blocked user does not know that he is blocked.<br />
Blocked user can not see online status of blocker.<br />
He still can send messages. But the blocker will not receive them.<br />
Messages of blocked user are not deleted.

##### Parameters (body)
> | name   | type     | data type | description |
> |--------|----------|-----------|-------------|
> | userId | required | string    | user IDs    |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `404`     | `application/json` | `{"error": "User not found","timestamp": 1737195610743,"status": 404}`       |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>           "userId": "WEhNPJ1uVRonZRYC4nXmK"
> }
> ```

##### Example Response
> ```json
> {}
> ```

---

### Un-Block contact/user
<summary><code>POST</code> <code><b>/contacts/unblock</b></code></summary>

All (non-delivered) messages from unBlocked user will be delivered.

##### Parameters (body)
> | name   | type     | data type | description |
> |--------|----------|-----------|-------------|
> | userId | required | string    | user IDs    |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `404`     | `application/json` | `{"error": "User not found","timestamp": 1737195610743,"status": 404}`       |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>           "userId": "WEhNPJ1uVRonZRYC4nXmK"
> }
> ```

##### Example Response
> ```json
> {}
> ```

---