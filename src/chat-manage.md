# Group settings API

### Set group info
<summary><code>POST</code> <code><b>/chat/info</b></code></summary>

Update info of a Group chat. Set Name, UserName & Avatar.<br/>
Function available only for Admins with `editGroup` permission.<br/>
NOTE: there is no way to set an empty filed.<br/>
NOTE: The uniqueness of the username is checked before change.

##### Parameters (JSON body)
> | name       | type     | data type  | description                          |
> |------------|----------|------------|--------------------------------------|
> | chatId     | required | string     | chat IDs                             |
> | name       | optional | string     | any string name                      |
> | username   | optional | string     | unique (checked on change) user name |
> | photoUrl   | optional | string     | URL to image                         |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `400`     | `application/json` | `{"error": "Username '${username}' is not available","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}`     |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>     "chatId": "JC0TvKi3f2bIQtBcW1jIn",
>     "name": "Group for Friends",
>     "username": "@myFriends",
>     "photoUrl": "https://files.iambig.ai/image.png"
> }
> ```        

##### Example Response
> ```json
> {} 
> ```

---

### Get group info
<summary><code>GET</code> <code><b>/chat/info</b></code></summary>

Returns JSON object with Group info.<br/>
Does not include list of participants and info about Last messages.

##### Parameters (query)
> | name       | type     | data type  | description                          |
> |------------|----------|------------|--------------------------------------|
> | chatId     | required | string     | chat IDs                             |


##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `see Example Response`                                                                       |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `404`     | `application/json` | `{"error": "Chat not found","timestamp": 1737195610743,"status": 404}`       |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> {
>     "chatId": "JC0TvKi3f2bIQtBcW1jIn",
>     "photoUrl": "https://files.iambig.ai/image.png",
>     "type": "dialog",
>     "name": "Group for Friends",
>     "username": "@myFriends",
>     "participantCount": 11,
>     "isPrivate": false
> }
> ```        
           
---

### Add users to Group
<summary><code>POST</code> <code><b>/chat/users</b></code></summary>

Add users to a Group chat.<br/> 
Users can prevent themselves from being added by setting privacy settings.<br/>
Function available only for Admins with `inviteUsers` permission.<br/>
Response returns number of actually added users.

##### Parameters (JSON body)
> | name         | type     | data type | description                          |
> |--------------|----------|-----------|--------------------------------------|
> | chatId       | required | string    | chat IDs                             |
> | participants | required | string[]  | array of user IDs                    |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `400`     | `application/json` | `{"error": "Username '${username}' is not available","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}`     |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>     "chatId": "JC0TvKi3f2bIQtBcW1jIn",
>     "participants": ["JC0TvKi3f2bIQtBcW1j", "JC0T3f2bIQtBcW1jIn"]
> }
> ```        

##### Example Response
> ```json
> {
>     "participantsAdded": 2
> } 
> ```

---

### Get group Participants
<summary><code>GET</code> <code><b>/chat/users</b></code></summary>

Get list of Group participants (in portions, starting from `startPos` index).<br/>
Response can be filtered by firstName, lastName, username.<br/>
NOTE: Privacy settings is applied to Users profiles on return.<br/>
NOTE: only chat/group members can see members list.
NOTE: some profiles may have `isAdmin` flag - mark for current Group Admin

##### Parameters (query)
> | name        | type     | data type | description                                               |
> |-------------|----------|-----------|-----------------------------------------------------------|
> | chatId      | required | string    | chat ID                                                   |
> | count       | optional | number    | number of profiles to query                               |
> | startPos    | optional | number    | start index of next portion of profiles                   |
> | filter      | optional | string    | string filter applied to firstName, lastName and username |


##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `see Example Response`                                                                       |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> [
>   {
>     "id": "JC0TvKi3f2bIQtBcW1j",
>     "phoneNumber": "+79333333333",
>     "username": "@ask_uznetsov",
>     "firstName": "Aleksandr",
>     "lastName": "Ivanov",
>     "avatarUrl": "https://dev.iambig.ai/public/1feb2e3c2d04dec268da0606dd163e76f6869233129be1633ab9937903640818",
>     "verified": "true"
>     "identityKey": "identity_key_example",
>     "lastSeen": 1719781200000,
>     "onlineHidden": true,
>     "permitCall": true,
>     "permitInvite": true,
>     "permitStatus": true,
>     "isAdmin": true
>   }  
> ]
> ```     

---

### Remove users from Group
<summary><code>DELETE</code> <code><b>/chat/users</b></code></summary>

Function available only for Admins with `editGroup` permission.<br/>
Admin can remove another Admin if he has `makeAdmin` permission.<br/>
Number of really removed user is returned in response.

##### Parameters (JSON body)
> | name         | type     | data type | description                          |
> |--------------|----------|-----------|--------------------------------------|
> | chatId       | required | string    | chat IDs                             |
> | participants | required | string[]  | array of user IDs                    |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `400`     | `application/json` | `{"error": "Username '${username}' is not available","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}`     |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>     "chatId": "JC0TvKi3f2bIQtBcW1jIn",
>     "participants": ["JC0TvKi3f2bIQtBcW1j", "JC0T3f2bIQtBcW1jIn"]
> }
> ```        

##### Example Response
> ```json
> {
>     "removed": 2
> } 
> ```
  
---

### Make Group Administrators
<summary><code>POST</code> <code><b>/chat/admins</b></code></summary>

Add administrators to chat or change permissions of existing one.<br/>
Assigner should have `makeAdmin` permission.<br/>
Assigner cannot change some permission of another Admin if he himself does not have this permission.

##### Parameters (JSON body)
> | name     | type     | data type                                      | description                                        |
> |----------|----------|------------------------------------------------|----------------------------------------------------|
> | chatId   | required | string                                         | chat IDs                                           |
> | admins   | required | [Administrator](../types/chat#administrator)[] | array [Administrator](../types/chat#administrator) |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `400`     | `application/json` | `{"error": "Username '${username}' is not available","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}`     |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>     "chatId": "JC0TvKi3f2bIQtBcW1jIn",
>     "admins": [     
>         {
>            "id": "daJC0Ki3f2bIQtBcW1jIn",
>            "rights": {
>               "editGroup": true,
>               "editStories": true,
>               "inviteUsers": true,
>               "makeAdmin": true,
>               "payments": true
>            }
>         }
>     ]
> }
> ```        

##### Example Response
> ```json
> {} 
> ```

---

### Get group Administrators
<summary><code>GET</code> <code><b>/chat/admins</b></code></summary>

Full list of Admins is available only to Owner & other admins.<br/>
Other users can find Admins in users list by `isAdmin` flag.

##### Parameters (query)
> | name        | type     | data type | description                                               |
> |-------------|----------|-----------|-----------------------------------------------------------|
> | chatId      | required | string    | chat ID                                                   |


##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | User profiles with rights (see example)                                      |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> [
>   {
>       "id": "fREUIJGqqVgtSU0UfywJa",
>       "phoneNumber": "+9991231239",
>       "createdAt": 1740060824,
>       "permitInvite": true,
>       "permitCall": true,
>       "rights": {
>           "editGroup": true,
>           "editStories": true,
>           "inviteUsers": true,
>           "makeAdmin": true,
>           "payments": true
>       }
>   }
> ]
> ```     

---

### Remove Group users from Administrators
<summary><code>DELETE</code> <code><b>/chat/admins</b></code></summary>

Remover should have `makeAdmin` permission.<br/>
Number of really removed Admins is returned in response.<br/>
Deleted administrators remain in the user list.

##### Parameters (JSON body)
> | name    | type     | data type | description                          |
> |---------|----------|-----------|--------------------------------------|
> | chatId  | required | string    | chat IDs                             |
> | admins  | required | string[]  | array of user IDs                    |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `400`     | `application/json` | `{"error": "Username '${username}' is not available","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}`     |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>     "chatId": "JC0TvKi3f2bIQtBcW1jIn",
>     "admins": ["JC0TvKi3f2bIQtBcW1j", "JC0T3f2bIQtBcW1jIn"]
> }
> ```        

##### Example Response
> ```json
> {
>     "removedAdmins": 2
> } 
> ```
                                            
---


### Set allowed reactions for Group Chat
<summary><code>POST</code> <code><b>/chat/allowReactions/{id}</b></code></summary>

Admin should have `editGroup` permission to set Allowed Reactions.<br/>
Pass object with `undefined` reactions - to enable reactions to messages in the Group<br/>
Pass an empty array `[]` in `reactions` param to disable any Reaction.<br/>
Pass reactions list `["👍", "❤️"]` in `reactions` param to append them to Currently allowed.<br/>
If you need to Replace current allowed reaction - first make this call with an empty or undefined list

##### Parameters (body)
> | name         | type     | data type | description       |
> |--------------|----------|-----------|-------------------|
> | chatId       | required | string    | chat ID           | 
> | reactions    | optional | string[]  | allowed reactions | 

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>   "chatId": "string",
>   "reactions": ["👍", "❤️"]
> }
> ```

##### Example Response
> ```json
> {} 
> ```

---

### Get allowed reactions for Group Chat
<summary><code>GET</code> <code><b>/chat/allowReactions</b></code></summary>

Reactions `undefined` - means all reactions are possible for messages in the Group<br/>
Empty array `[]` in `reactions` - no allowed Reaction.<br/>
Reactions list `["👍", "❤️"]` in `reactions` - Currently allowed list of reactions.

##### Parameters (query)
> | name   | type     | data type | description |
> |--------|----------|---------|------------|
> | chatId | required | string  | chat ID    | 

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{chatId: "id", "reactions": ["👍", "❤️"]}`                                  |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json 
> {
>   "chatId": "string",
>   "reactions": ["👍", "❤️"]
> }
> ```
