# Chat management API

### Pin chat
<summary><code>POST</code> <code><b>/chats/pin</b></code></summary>

When chat is pinned flag `isPinned` in ChatList response is set to true.<br/>
There is no limit on the number of pinned chats.

##### Parameters (JSON body)
> | name       | type     | data type  | description                          |
> |------------|----------|------------|--------------------------------------|
> | chatId     | required | string     | chat IDs                             |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `404`     | `application/json` | `{"error": "Chat not found","timestamp": 1737195610743,"status": 404}`       |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>     "chatId": "JC0TvKi3f2bIQtBcW1jIn",
> }
> ```        

##### Example Response
> ```json
> {} 
> ```
     
---


### UnPin chat
<summary><code>POST</code> <code><b>/chats/unpin</b></code></summary>

##### Parameters (JSON body)
> | name       | type     | data type  | description                          |
> |------------|----------|------------|--------------------------------------|
> | chatId     | required | string     | chat IDs                             |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `404`     | `application/json` | `{"error": "Chat not found","timestamp": 1737195610743,"status": 404}`       |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>     "chatId": "JC0TvKi3f2bIQtBcW1jIn",
> }
> ```        

##### Example Response
> ```json
> {} 
> ```
   
---

### Mute chat
<summary><code>POST</code> <code><b>/chats/mute</b></code></summary>

When chat is muted flag `isMuted` in ChatList response is set to true.<br/>
**NOTE:** Muted chats still generate PUSH notifications - but they have `muted` flag set to true in `data` field.

##### Parameters (JSON body)
> | name       | type     | data type  | description                          |
> |------------|----------|------------|--------------------------------------|
> | chatId     | required | string     | chat IDs                             |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `404`     | `application/json` | `{"error": "Chat not found","timestamp": 1737195610743,"status": 404}`       |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>     "chatId": "JC0TvKi3f2bIQtBcW1jIn",
> }
> ```        

##### Example Response
> ```json
> {} 
> ```
     
---


### UnMute chat
<summary><code>POST</code> <code><b>/chats/unmute</b></code></summary>

##### Parameters (JSON body)
> | name       | type     | data type  | description                          |
> |------------|----------|------------|--------------------------------------|
> | chatId     | required | string     | chat IDs                             |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `404`     | `application/json` | `{"error": "Chat not found","timestamp": 1737195610743,"status": 404}`       |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>     "chatId": "JC0TvKi3f2bIQtBcW1jIn",
> }
> ```        

##### Example Response
> ```json
> {} 
> ```
     
---


### Set chat as Read
<summary><code>POST</code> <code><b>/chats/setRead</b></code></summary>

Mark all messages as read in a Chat.

##### Parameters (JSON body)
> | name       | type     | data type  | description                          |
> |------------|----------|------------|--------------------------------------|
> | chatId     | required | string     | chat IDs                             |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `404`     | `application/json` | `{"error": "Chat not found","timestamp": 1737195610743,"status": 404}`       |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>     "chatId": "JC0TvKi3f2bIQtBcW1jIn",
> }
> ```        

##### Example Response
> ```json
> {} 
> ```
 
---


### Mark chat as Unread
<summary><code>POST</code> <code><b>/chats/setUnread</b></code></summary>

##### Parameters (JSON body)
> | name       | type     | data type  | description                          |
> |------------|----------|------------|--------------------------------------|
> | chatId     | required | string     | chat IDs                             |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `404`     | `application/json` | `{"error": "Chat not found","timestamp": 1737195610743,"status": 404}`       |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>     "chatId": "JC0TvKi3f2bIQtBcW1jIn",
> }
> ```        

##### Example Response
> ```json
> {} 
> ```
  
---

### Archive chat
<summary><code>POST</code> <code><b>/chats/archive</b></code></summary>

##### Parameters (JSON body)
> | name       | type     | data type  | description                          |
> |------------|----------|------------|--------------------------------------|
> | chatId     | required | string     | chat IDs                             |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `404`     | `application/json` | `{"error": "Chat not found","timestamp": 1737195610743,"status": 404}`       |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>     "chatId": "JC0TvKi3f2bIQtBcW1jIn",
> }
> ```        

##### Example Response
> ```json
> {} 
> ```
  
---

### UnArchive chat
<summary><code>POST</code> <code><b>/chats/unarchive</b></code></summary>

##### Parameters (JSON body)
> | name       | type     | data type  | description                          |
> |------------|----------|------------|--------------------------------------|
> | chatId     | required | string     | chat IDs                             |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `404`     | `application/json` | `{"error": "Chat not found","timestamp": 1737195610743,"status": 404}`       |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>     "chatId": "JC0TvKi3f2bIQtBcW1jIn",
> }
> ```        

##### Example Response
> ```json
> {} 
> ```
    
---


### Get archived chats
<summary><code>GET</code> <code><b>/chats/archived</b></code></summary>

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | [ChatListItem](types/chat-list.md#chatlistitem)[]                            |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> [
>     {
>       "type": "dialog",
>       "id": "string",
>       "name": "string",
>       "username": "string",
>       "lastMessageTime": 0,
>       "photoUrl": "string",
>       "lastMessageId": 0,
>       "lastMessageText": "string",
>       "lastMessageAuthor": "string",
>       "lastMessageStatus": "read",
>       "missed": 0,
>       "firstMissed": "string",
>       "verified": true,
>       "isMine": true,
>       "attachmentType": "file",
>       "lastSeen": 0,
>       "onlineHidden": true,
>       "participantCount": 0,
>       "payload": "string",
>       "hidden": true,
>       "liked": true,
>       "isPinned": false,
>       "isMuted": false
>     }
> ]
> ```
