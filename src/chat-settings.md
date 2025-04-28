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
Includes current user permissions for Group info/config operations.

##### Parameters (query)
> | name       | type     | data type  | description                          |
> |------------|----------|------------|--------------------------------------|
> | chatId     | required | string     | chat IDs                             |


##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | [ChatInfo](types/chat.md#chatinfo)                                           |
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
>     "isPrivate": false,
>     "isPaid": false,
>     "editPermissions": {
>           "addAdmins": false,
>           "addMembers": false,
>           "changeType": false,
>           "editInfo": false,
>           "editPermissions": false,
>           "editPaid": false,
>           "viewAdmins": false,
>           "deleteGroup": false
>     }
> }
> ```
      
---

### Add users to Group
<summary><code>POST</code> <code><b>/chat/users</b></code></summary>

Add users to a Group chat.<br/> 
Users can prevent themselves from being added by setting privacy settings.<br/>
Function available only for Admins with `inviteUsers` permission or if Group is not Private and has `allowAddUsers` enabled.<br/>
Response returns number of actually added users.

##### Parameters (JSON body)
> | name         | type     | data type | description                          |
> |--------------|----------|-----------|--------------------------------------|
> | chatId       | required | string    | chat IDs                             |
> | participants | required | string[]  | array of user IDs                    |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"participantsAdded": 2}`                                                                         |
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
NOTE: could be queried via **WS** with `participants` request

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
> | `200`     | `application/json` | [Profile](types/chat.md#profile) []                                          |
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
>     "verified": "true",
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
> | `200`     | `application/json` | `{"removed": 2}`                                                                         |
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
NOTE: could be queried via WS with `administrators` request.

##### Parameters (query)
> | name        | type     | data type | description                                               |
> |-------------|----------|-----------|-----------------------------------------------------------|
> | chatId      | required | string    | chat ID                                                   |


##### Responses
> | http code | content-type       | response                                                                                |
> |-----------|--------------------|-----------------------------------------------------------------------------------------|
> | `200`     | `application/json` | Array of [Profile](types/chat.md#profile) & { rights: [Rights](types/chat.md#rights) }  |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`                       |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`                    |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`            |

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
Deleted administrators remain in the user list of the Group.

##### Parameters (JSON body)
> | name    | type     | data type | description                          |
> |---------|----------|-----------|--------------------------------------|
> | chatId  | required | string    | chat IDs                             |
> | admins  | required | string[]  | array of user IDs                    |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"removedAdmins": 2}`                                                                         |
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

---

### Create or edit invite Link
<summary><code>POST</code> <code><b>/chat/inviteLink</b></code></summary>

If no ID provided - link is created.<br/>
If ID provided in request - worker will try to Edit existing link.<br/>
Invite link can have Time-to-live `ttl` in Seconds.<br/>
About users join approval see **/chat/pendingJoins** and **/chat/pending** .

##### Parameters (JSON body)
> | name            | type     | data type | description                                          |
> |-----------------|----------|-----------|------------------------------------------------------|
> | chatId          | required | string    | chat IDs                                             |
> | id              | optional | string    | link IDs                                             |
> | name            | optional | string    | string name                                          |
> | ttl             | optional | number    | Time-to-live in Seconds                              |
> | requireApproval | optional | boolean   | if `true` - joined users should be approved by Admin |
> | limit           | optional | number    | limit number of users who can use link               |

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
>   "id": "string",
>   "name": "string",
>   "ttl": 0,
>   "requireApproval": true,
>   "limit": 0,
>   "chatId": "string"
> }
> ```        

##### Example Response
> ```json
> {} 
> ```

---

### Get group invite links
<summary><code>GET</code> <code><b>/chat/inviteLink</b></code></summary>

Admin should have `inviteUsers` permission to get Links.<br/>
Or group should have `allowAddUsers` enabled. 

##### Parameters (query)
> | name        | type     | data type | description                                               |
> |-------------|----------|-----------|-----------------------------------------------------------|
> | chatId      | required | string    | chat ID                                                   |


##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | { "links": [InviteLink](types/chat.md#invitelink) [] }                       |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> {
>   "links": [
>       {
>           "id": "string",
>           "name": "string",
>           "ttl": 0,
>           "requireApproval": true,
>           "limit": 0,
>           "createdAt": 0,
>           "uses": 0
>       }
>   ]
> }
> ```     

---

### Revoke Invite link
<summary><code>DELETE</code> <code><b>/chat/inviteLink</b></code></summary>

When link revoked successfully - empty object is returned.<br/>
But if it was the last Link - a new one is generated and its ID is returned.

##### Parameters (JSON body)
> | name   | type     | data type | description |
> |--------|----------|-----------|-------------|
> | chatId | required | string    | chat IDs    |
> | id     | required | string    | link IDs    |

##### Responses
> | http code | content-type       | response                                                                                                 |
> |-----------|--------------------|----------------------------------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"id": "JC0TvKi3f2bIQtBcW1jIn"}`                                                                        |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}` |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`                             |

##### Example Request
> ```json
> {
>     "chatId": "JC0TvKi3f2bIQtBcW1jIn",
>     "id": "JC0TvKi3f2bIQtBcW1j"
> }
> ```        

##### Example Response
> ```json
> {
>     "id": "XK0TvKi3f2bIQtBcW1j"
> } 
> ```


---

### Join the Group
<summary><code>POST</code> <code><b>/chat/join</b></code></summary>

User can Join directly (providing chatId) or by using Invite Link (by its ID).<br/>
If join is successful - `chatId` returned in response.<br/>
If invite link requires an Admin approval - than response has **202** status code.<br/>
If invite link is expired or uses limit reached - **404** error response.

##### Parameters (JSON body)
> | name    | type     | data type | description |
> |---------|----------|-----------|-------------|
> | chatId  | optional | string    | chat IDs    |
> | linkId  | optional | string    | link IDs    |

##### Responses
> | http code | content-type       | response                                                                                                 |
> |-----------|--------------------|----------------------------------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"chatId": "JC0TvKi3f2bIQtBcW1jIn"}`                                                                    |
> | `202`     | `application/json` | `{}`                                                                                                     |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}` |
> | `404`     | `application/json` | `{"error": "linkId is not valid or link is expired","timestamp": 1737195610743,"status": 404}`           |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`                             |

##### Example Request
> ```json
> {
>     "linkId": "JC0TvKi3f2bIQtBcW1j"
> }
> ```        

##### Example Response
> ```json
> {
>     "chatId": "XK0TvKi3f2bIQtBcW1j"
> } 
> ```
 

---

### Get pending requests in group chats
<summary><code>GET</code> <code><b>/chat/pending</b></code></summary>

Admin should have `inviteUsers` permission to get list of pending requests.<br/>
Two types of pending requests:
- joins (users joined via link, waiting for approvals)
- privateMessaging (in private groups new members may not have initial permission to send messages)

##### Parameters (JSON query)
> | name    | type     | data type | description |
> |---------|----------|-----------|-------------|
> | chatId  | required | string    | chat IDs    |

##### Responses
> | http code | content-type       | response                                                                                                 |
> |-----------|--------------------|----------------------------------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"joins": ["XK0TvKi3f2bIQtBcW1j"],"privateMessaging": ["JC0TvKi3f2bIQtBcW1j"]}`                         |
> | `400`     | `application/json` | `{"error": "Only for Group chats","timestamp": 1737195610743,"status": 400}`                             |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}` |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`                             |

##### Example Response
> ```json
> {
>    "joins": ["XK0TvKi3f2bIQtBcW1j"],
>    "privateMessaging": ["JC0TvKi3f2bIQtBcW1j"]
> } 
> ```


---

### Process pending join requests
<summary><code>POST</code> <code><b>/chat/pendingJoins</b></code></summary>

Admin should have `inviteUsers` permission to get process pending join requests.<br/>
Returns number of approved and added users.

##### Parameters (JSON body)
> | name     | type     | data type                                  | description     |
> |----------|----------|--------------------------------------------|-----------------|
> | chatId   | required | string                                     | chat IDs        |
> | approves | required | {"userId": string; "approve": boolean } [] | approve objects |

##### Responses
> | http code | content-type       | response                                                                                                 |
> |-----------|--------------------|----------------------------------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"added": 1}`                                                                                           |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}` |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`                             |

##### Example Request
> ```json
> {
>     "chatId": "XK0TvKi3f2bIQtBcW1j",
>     "approves": [
>         {
>           "userId": "JC0TvKi3f2bIQtBcW1j",
>           "approve": true
>         }     
>     ]
> }
> ```        

##### Example Response
> ```json
> {
>     "added": 1
> } 
> ```


---

### Process pending requests to send messages in Private groups
<summary><code>POST</code> <code><b>/chat/pendingMessaging</b></code></summary>

Admin should have `inviteUsers` permission to get process pending join requests.<br/>
Returns number of approved requests.<br/>
If request is not approved - it will remain in pending list until will be approved or user is removed from the group. 

##### Parameters (JSON body)
> | name     | type     | data type                                  | description     |
> |----------|----------|--------------------------------------------|-----------------|
> | chatId   | required | string                                     | chat IDs        |
> | approves | required | {"userId": string; "approve": boolean } [] | approve objects |

##### Responses
> | http code | content-type       | response                                                                                                 |
> |-----------|--------------------|----------------------------------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"permitted": 1}`                                                                                           |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}` |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`                             |

##### Example Request
> ```json
> {
>     "chatId": "XK0TvKi3f2bIQtBcW1j",
>     "approves": [
>         {
>           "userId": "JC0TvKi3f2bIQtBcW1j",
>           "approve": true
>         }     
>     ]
> }
> ```        

##### Example Response
> ```json
> {
>     "permitted": 1
> } 
> ```

---


### Set group settings and permissions
<summary><code>POST</code> <code><b>/chat/settings</b></code></summary>

Function available only for Admins with `editGroup` permission.<br/>

##### Parameters (JSON body)
> | name               | type     | data type | description                           |
> |--------------------|----------|-----------|---------------------------------------|
> | chatId             | required | string    | chat IDs                              |
> | isHiddenHistory    | optional | boolean   | hide chat history from new users      |
> | allowMessages      | optional | boolean   | allow users to send message           |
> | allowMedia         | optional | boolean   | allow users to send attachments       |
> | allowAddUsers      | optional | boolean   | allow members to add users            |
> | allowPinMessages   | optional | boolean   | allow members to pin messages         |
> | allowEditGroup     | optional | boolean   | allow members to edit group info      |
> | autoDeleteMessages | optional | number    | auto delete messages interval in DAYS |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `400`     | `application/json` | `{"error": "Only for Group chats","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}`     |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>   "chatId": "string",
>   "isHiddenHistory": false,
>   "allowMessages": true,
>   "allowMedia": true,
>   "allowAddUsers": true,
>   "allowPinMessages": true,
>   "allowEditGroup": false,
>   "autoDeleteMessages": 0
> }
> ```        

##### Example Response
> ```json
> {} 
> ```

---

### Get group settings and permissions
<summary><code>GET</code> <code><b>/chat/settings</b></code></summary>

Returns JSON object with Group Settings.<br/>
Accessible only by group members.

##### Parameters (query)
> | name       | type     | data type  | description                          |
> |------------|----------|------------|--------------------------------------|
> | chatId     | required | string     | chat IDs                             |


##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | [ChatSettings](types/chat.md#chatsettings)                                   |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> {
>   "chatId": "string",
>   "isHiddenHistory": false,
>   "allowMessages": true,
>   "allowMedia": true,
>   "allowAddUsers": true,
>   "allowPinMessages": true,
>   "allowEditGroup": false,
>   "autoDeleteMessages": 0,
>   "privateAllowCopy": true,
>   "privateApproveMessaging": false
> }
> ```

---

### Set group privacy type
<summary><code>POST</code> <code><b>/chat/grouptype</b></code></summary>

Sets additional options for Private Groups<br/>
Only the Owner can change these settings.<br/>
`privateAllowCopy` - allow copy and forward from private group.<br/>
`privateApproveMessaging` - allow new members to send messages to group. If not set - new members should be approved first before sending first message.<br/>
**NOTE:** if group is made `private` it can not be found via **/chat/find** but its `username` remains occupied and can not be used for another group.


##### Parameters (JSON body)
> | name                    | type     | data type | description                                                          |
> |-------------------------|----------|-----------|----------------------------------------------------------------------|
> | chatId                  | required | string    | chat IDs                                                             |
> | isPrivate               | optional | boolean   | set group to be private ofr public                                   |
> | privateAllowCopy        | optional | boolean   | prohibit forward & copy messages from group                          |
> | privateApproveMessaging | optional | boolean   | require new members to get approved before they can message to group |

##### Responses
> | http code | content-type       | response                                                                                                 |
> |-----------|--------------------|----------------------------------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                                                     |
> | `400`     | `application/json` | `{"error": "Only for Group chats","timestamp": 1737195610743,"status": 400}`                             |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}` |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`                             |

##### Example Request
> ```json
> {
>   "chatId": "string",
>   "isPrivate": "true",
>   "privateAllowCopy": false,
>   "privateApproveMessaging": true
> }
> ```        

##### Example Response
> ```json
> {} 
> ```

---

### Delete group messages
<summary><code>POST</code> <code><b>/chat/purge</b></code></summary>

Owner can purge all messages from Group.<br/>
Any user can purge messages for himself.<br/>
Flag `for: "all"` has no effect when used by User or even Admin<br/>
After messages being Purged `purgedMessages` event be sent to Users.

##### Parameters (JSON body)
> | name    | type     | data type   | description                                                                                            |
> |---------|----------|-------------|--------------------------------------------------------------------------------------------------------|
> | chatId  | required | string      | chat IDs                                                                                               |
> | for     | optional | string      | (defaults to "me") if set to "all" - all messages will be completely purged from Group (only by Owner) |

##### Responses
> | http code | content-type       | response                                                                                                 |
> |-----------|--------------------|----------------------------------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                                                     |
> | `400`     | `application/json` | `{"error": "Only for Group chats","timestamp": 1737195610743,"status": 400}`                             |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}` |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`                             |

##### Example Request
> ```json
> {
>   "chatId": "string",
>   "for": "all"
> }
> ```        

##### Example Response
> ```json
> {} 
> ```

---

### Transfer group ownership to a new Owner
<summary><code>POST</code> <code><b>/chat/delegate</b></code></summary>

Only the Owner can transfer Ownership.<br/>
New Owner should be a Member of the Group.

##### Parameters (JSON body)
> | name       | type     | data type | description |
> |------------|----------|-----------|-------------|
> | chatId     | required | string    | chat IDs    |
> | newOwnerId | required | string    | user IDs    |

##### Responses
> | http code | content-type       | response                                                                                                 |
> |-----------|--------------------|----------------------------------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                                                     |
> | `400`     | `application/json` | `{"error": "Only for Group chats","timestamp": 1737195610743,"status": 400}`                             |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}` |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`                             |

##### Example Request
> ```json
> {
>   "chatId": "XK0TvKi3f2bIQtBcW1j",
>   "newOwnerId": "OP0TvKi3f2bIQtBcW1j"
> }
> ```        

##### Example Response
> ```json
> {} 
> ```

---

### Leave the group
<summary><code>POST</code> <code><b>/chat/leave</b></code></summary>

Owner can leave the group or can Delegate it first (in that case set new Owner in `newOwnerId`)

##### Parameters (JSON body)
> | name       | type     | data type | description |
> |------------|----------|-----------|-------------|
> | chatId     | required | string    | chat IDs    |
> | newOwnerId | optional | string    | user IDs    |

##### Responses
> | http code | content-type       | response                                                                                                 |
> |-----------|--------------------|----------------------------------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                                                     |
> | `400`     | `application/json` | `{"error": "Only for Group chats","timestamp": 1737195610743,"status": 400}`                             |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}` |
> | `404`     | `application/json` | `{"error": "User not found in Group","timestamp": 1737195610743,"status": 404}`                          |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`                             |

##### Example Request
> ```json
> {
>   "chatId": "XK0TvKi3f2bIQtBcW1j",
>   "newOwnerId": "OP0TvKi3f2bIQtBcW1j"
> }
> ```        

##### Example Response
> ```json
> {} 
> ```
 
---

### Find groups
<summary><code>POST</code> <code><b>/chat/find</b></code></summary>

Find groups by partial match in name or username.<br/>
Only Public groups could be found.

##### Parameters (JSON body)
> | name       | type     | data type | description             |
> |------------|----------|-----------|-------------------------|
> | filter     | required | string    | substring to search for |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | see Example                                                                  |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>   "filter": "finance"
> }
> ```        

##### Example Response
> ```json
> [
>   {
>       "id": "63jKoGDkkXSPgGphFvKWrd5i",
>       "name": "Group settings chat",
>       "type": "group",
>       "username": "grpSetTestChat",
>       "photoUrl": "https://dev.iambig.ai/public/gb24ixCWLL25S-jtzYck7",
>       "createdAt": 1740060825
>   },
>   {
>       "id": "1L_Ivc_XGqX8L4wUEx3hHv-o",
>       "name": "Group to paid chat",
>       "type": "group",
>       "username": "group_paid_test_chat",
>       "photoUrl": "https://dev.iambig.ai/public/gb24ixCWLL25S-jtzYck7",
>       "createdAt": 1741018833
>   }
> ] 
> ```

---


### Setup group Payments 
<summary><code>POST</code> <code><b>/chat/paidgroup</b></code></summary>

Make Group paid/unpaid and set payment settings.<br/>
Only the Admin with `payments` permission can change these settings.

##### Parameters (JSON body)
> | name                | type     | data type | description                                                          |
> |---------------------|----------|-----------|----------------------------------------------------------------------|
> | chatId              | required | string    | chat IDs                                                             |
> | isPaid              | optional | boolean   | switch group to be paid or not                                       |
> | paymentOption       | optional | string    | 'paidNoCalls', 'paidWithCalls', 'paidWithCallsDiff', 'paidCallsOnly' |
> | paymentMethod       | optional | string    | 'subscription', 'userDefined'                                        |
> | oneMonthChatPrice   | optional | number    | price per month                                                      |
> | oneMonthCallsPrice  | optional | number    | price for Calls per month                                            |
> | threeMonthDiscount  | optional | number    | discount per 3 months                                                |
> | sixMonthDiscount    | optional | number    | discount per 6 months                                                |
> | nineMonthDiscount   | optional | number    | discount per 9 months                                                |
> | twelveMonthDiscount | optional | number    | discount per year                                                    |
> | wallet              | optional | object    | receiving wallet info                                                |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `400`     | `application/json` | `{"error": "Only for Group chats","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized" or "No permissions for this update","timestamp": 1737195610743,"status": 401}`     |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>   "chatId": "string",
>   "isPaid": false,
>   "paymentOption": "paidNoCalls",
>   "paymentMethod": "subscription",
>   "oneMonthChatPrice": 0,
>   "oneMonthCallsPrice": 0,
>   "threeMonthDiscount": 0,
>   "sixMonthDiscount": 0,
>   "nineMonthDiscount": 0,
>   "twelveMonthDiscount": 0,
>   "wallet": {}
> }
> ```        

##### Example Response
> ```json
> {} 
> ```

---

### Get group payment Params
<summary><code>GET</code> <code><b>/chat/paidgroup</b></code></summary>

Returns JSON object with Group payments Settings.<br/>

##### Parameters (query)
> | name       | type     | data type  | description                          |
> |------------|----------|------------|--------------------------------------|
> | chatId     | required | string     | chat IDs                             |


##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | [PaidSettings](types/chat.md#paidsettings)                                   |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> {
>   "chatId": "string",
>   "isPaid": false,
>   "paymentOption": "paidNoCalls",
>   "paymentMethod": "subscription",
>   "oneMonthChatPrice": 0,
>   "oneMonthCallsPrice": 0,
>   "threeMonthDiscount": 0,
>   "sixMonthDiscount": 0,
>   "nineMonthDiscount": 0,
>   "twelveMonthDiscount": 0,
>   "wallet": {}
> }
> ```
