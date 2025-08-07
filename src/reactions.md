# Reactions API

### Set or remove reaction
<summary><code>POST</code> <code><b>/messages/reaction</b></code></summary>

If `isSet` is false - any previous of this user to this post reaction will be removed (set to undefined).<br/>
When removing reaction currently value of `reaction` is ignored. This behaviour may be changed later.<br/><br/>
**NOTE**:  `x-timestamp` in header is REQUIRED to properly handle the queue of reaction changes.<br/><br/>
Can be sent via **WebSocket** as request `reaction`<br/><br/>
If reactions not permitted in the chat - `403` error returned.<br/>
If timestamp is older than in previous request - `409` error returned.

##### Parameters (body)
> | name               | type     | data type | description                         |
> |--------------------|----------|-----------|-------------------------------------|
> | chatId             | required | string    | chat ID                             | 
> | messageId          | required | number    | message ID in the chat              | 
> | reaction           | optional | string    | string representation of reaction   | 
> | isSet              | required  | boolean   | set or remove reaction              | 
> | clientMessageId    | required  | string   | clientMessageId of original message | 

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{...see example}`                                                           |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `403`     | `application/json` | `{"error": "Reaction not allowed","timestamp": 1737195610743,"status": 403}` |
> | `409`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>   "chatId": "string",
>   "messageId": 0,
>   "reaction": "string",
>   "isSet": true,
>   "clientMessageId": "string"
> }
> ```

##### Example Response
> ```json
> {
>   "chatId": "string",
>   "messageId": 0,
>   "reaction": "string",
>   "isSet": true,
>   "clientMessageId": "string"
> }
> ```

---

### Set allowed reactions for Group Chat
<summary><code>POST</code> <code><b>/chat/allowReactions</b></code></summary>

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
