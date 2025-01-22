# Stories API

### Posting a Story with metadata
<summary><code>POST</code> <code><b>/story</b></code></summary>

First upload a stories video via /video/upload <br/>
and get uploaded file info via /video/{id}/metadata <br/>
(see ["VideoRequests"](video-requests.md) for details)

Create and publish a new story using the metadata from the uploaded video.

All contacts (either all friends if `isForAll` is `true`, or contacts from `includeLists` will receive WebSocket event `newStory`)

##### Parameters (JSON body)
> | name           | type     | data type | description                                |
> |----------------|----------|-----------|--------------------------------------------|
> | isForAll       | required | boolean   | true if story is available to all contacts |
> | fileLink       | required | string    | playback.hls from metadata                 |
> | preview        | required | string    | thumbnail from metadata                    |
> | duration       | required | number    | duration of the story                      |
> | includeLists   | optional | array     | list of sharing lists IDs                  |
> | price          | optional | number    | price for the story                        |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"result": true, "id": "SYDY5qXsnv2aJnkoI9qF8E20"}`                         |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>   "isForAll": true,
>   "fileLink": "https://...video.m3u8",
>   "preview": "https://...thumbnail.jpg",
>   "duration": 1,
>   "includeLists": ["listId"],
>   "price": 0
> }
> ```        

##### Example Response
> ```json
> {
>   "result": true,
>   "id": "string"
> } 
> ```

##### WebSocket event `newStory` payload

| Field         | Type   | Example                                   | Possible Values |
|---------------| ------ |-------------------------------------------|-----------------|
| userId        | string | "_qzjQofkCDvpFe8Da3Nlt2"                  | User IDs        |
| storyId       | string | "SYDY5qXsnv2aJnkoI9qF8E20"                | Story IDs       |
| userAvatar?   | string | "https://example.com/picture.jpg"         | URL             |
| storyPreview  | string | https://cloudflare.com/dsdfsf/preview.jpg | URL             |

---

### Creating or updating a sharing list
<summary><code>POST</code> <code><b>/story/includes</b></code></summary>

Create or update a sharing list for stories.<br />
If pass JSON object with `ID` defined - old stored object will be updated.

##### Parameters (JSON body)
> | name           | type     | data type | description                             |
> |----------------|----------|-----------|-----------------------------------------|
> | id             | optional | string    | list ID  (set ID to update object)      |
> | type           | required | boolean   | true for inclusion, false for exclusion |
> | caption        | required | string    | list name                               |
> | iconUrl        | optional | string    | URL for list icon                       |
> | users          | required | array     | list of user IDs                        |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"result": true, "id": "SYDY5qXsnv2aJnkoI9qF8E20"}`                         |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>   "type": true,
>   "caption": "string",
>   "iconUrl": "URL",
>   "users": [ "userId" ]
> }
> ```

##### Example Response
> ```json
> {
>   "result": true, 
>   "id": "SYDY5qXsnv2aJnkoI9qF8E20"
> }
> ```

---

### Getting a list of own Sharing lists
<summary><code>GET</code> <code><b>/story/includes</b></code></summary>

Retrieve a list of own Sharing lists.<br />
To get list items call `/story/includes/{id}`

##### Responses
> | http code | content-type       | response                                                                       |
> |-----------|--------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json` | array of JOSN with number of items in the list                                    |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`              |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`           |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`   |

##### Example Response
> ```json
> [
>   {
>     "id": "string",
>     "type": true,
>     "caption": "string",
>     "iconUrl": "string",
>     "usersNumber": 0
>   }    
> ]
> ```

---

### Getting a Sharing list with items
<summary><code>GET</code> <code><b>/story/includes/{id}</b></code></summary>

Retrieve a list of own Sharing lists.<br />
To get list items call `/story/includes/{id}`

##### Parameters (path)
> | name           | type     | data type | description |
> |----------------|----------|-----------|-------------|
> | id             | required | string    | list ID     | 

##### Responses
> | http code | content-type       | response                                                                       |
> |-----------|--------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json` | JOSN with array of user IDs                                                    |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`              |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`           |
> | `404`     | `application/json` | `{"error": "Exclude list not found","timestamp": 1737195610743,"status": 404}` |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`   |

##### Example Response
> ```json
> {
>   "id": "string",
>   "type": true,
>   "caption": "string",
>   "iconUrl": "string",
>   "users": [ "user1", "user2" ]
> }
> ```

---

### Deleting Sharing list
<summary><code>DELETE</code> <code><b>/story/includes/{id}</b></code></summary>

Delete Story include/exclude list.

All contacts (all friends will receive WebSocket event `removedStory`)

##### Parameters (path)
> | name           | type     | data type | description |
> |----------------|----------|-----------|-------------|
> | id             | required | string    | list ID     | 

##### Responses
> | http code | content-type       | response                                                                       |
> |-----------|--------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"result": true, "id": "SYDY5qXsnv2aJnkoI9qF8E20"}`                           |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`              |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`           |
> | `404`     | `application/json` | `{"error": "Exclude list not found","timestamp": 1737195610743,"status": 404}` |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`   |

##### Example Response
> ```json
> {
>   "result": true,
>   "id": "string"
> }
> ```  

##### WebSocket event `removedStory` payload

| Field         | Type   | Example                                   | Possible Values |
|---------------| ------ |-------------------------------------------|-----------------|
| userId        | string | "_qzjQofkCDvpFe8Da3Nlt2"                  | User IDs        |
| storyId       | string | "SYDY5qXsnv2aJnkoI9qF8E20"                | Story IDs       |


---

### Getting a list of own stories
<summary><code>GET</code> <code><b>/story</b></code></summary>

Retrieve a list of own stories.<br />
Objects does not include sharing lists and stats. 

##### Responses
> | http code | content-type       | response                                                                           |
> |-----------|--------------------|------------------------------------------------------------------------------------|
> | `200`     | `application/json` | array of JSON story objects                                                        |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`               |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> [
>     {
>       "isForAll": true,
>       "fileLink": "URL",
>       "preview": "URL",
>       "duration": 1,
>       "price": 0,
>       "id": "R4yvEIax",
>       "created": 172555804,
>       "published": 0
>     }
> ]
> ```

---

### Getting own Story info
<summary><code>GET</code> <code><b>/story/{id}</b></code></summary>

Retrieve own story by ID.<br />
Includes sharing lists but not includes stats. 

##### Parameters (path)
> | name           | type     | data type | description |
> |----------------|----------|-----------|-------------|
> | id             | required | string    | story ID    | 

##### Responses
> | http code | content-type       | response                                                                           |
> |-----------|--------------------|------------------------------------------------------------------------------------|
> | `200`     | `application/json` | array of JSON story objects                                                        |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`               |
> | `404`     | `application/json` | `{"error": "Story not found","timestamp": 1737195610743,"status": 404}` |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
>     {
>       "isForAll": true,
>       "fileLink": "URL",
>       "preview": "URL",
>       "duration": 1,
>       "price": 0,
>       "id": "R4yvEIax",
>       "created": 172555804,
>       "published": 0,
>       "includeLists": [ "listId" ]
>     }
> ```

---

### Getting own Story Statistics
<summary><code>GET</code> <code><b>/story/stats/{id}</b></code></summary>

Full statistics for the Story <br />
(only statistics, no story's metadata)  <br />
(reactions grouped by type)

##### Parameters (path)
> | name           | type     | data type | description |
> |----------------|----------|-----------|-------------|
> | id             | required | string    | story ID    | 

##### Responses
> | http code | content-type       | response                                                                          |
> |-----------|--------------------|-----------------------------------------------------------------------------------|
> | `200`     | `application/json` | array of JSON objects                                                        |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`              |
> | `404`     | `application/json` | `{"error": "Story not found","timestamp": 1737195610743,"status": 404}` |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> {
> "id": "string",
> "reactions": [
>   {
>     "reactionType": "string",
>     "reactions": [
>       {
>         "userId": "string",
>         "timestamp": 0
>       }
>     ]
>   }
>   ],
> "views": [
>     {
>       "userId": "string",
>       "timestamp": 0
>     }
>   ],
> "payments": [
>     {
>       "userId": "string",
>       "timestamp": 0
>     }
>   ]
> }
> ```

---

### Deleting a story
<summary><code>DELETE</code> <code><b>/story/{id{</b></code></summary>

Delete a specific story and its associated statistics.

##### Parameters (path)
> | name           | type     | data type | description |
> |----------------|----------|-----------|-------------|
> | id             | required | string    | story ID    |       

##### Responses
> | http code | content-type       | response                                                                                    |
> |-----------|--------------------|---------------------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"result": true, "id": "SYDY5qXsnv2aJnkoI9qF8E20"}` |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`           |
> | `404`     | `application/json` | `{"error": "Story not found","timestamp": 1737195610743,"status": 404}`                      |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`               |

##### Example Response
> ```json
> {
>   "result": true,
>   "id": "string"
> }
> ```

---

### Retrieve stories for subscribers

<summary><code>GET</code> <code><b>/stories</b></code></summary>

Fetch a list of stories available for viewing, including the current user's status (e.g., `reaction`, `isSeen`, `isPurchased`). The response is sorted by freshness, with users having the most recent stories listed first.

##### Responses
> | http code | content-type       | response                                                                          |
> |-----------|--------------------|-----------------------------------------------------------------------------------|
> | `200`     | `application/json` | array of JSON objects                                                        |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`              |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> [
>   {
>     "id": "2vCYv2iInfPvLl_Ql6mOb",
>     "avatarUrl": "https://example.com/avatar.jpg",
>     "name": "Ivan Ivanov",
>     "verified": true,
>     "stories": [
>       {
>         "isForAll": true,
>         "fileLink": "string",
>         "preview": "string",
>         "duration": 0,
>         "price": 0,
>         "storyId": "string",
>         "userId": "string",
>         "published": 0,
>         "isSeen": true,
>         "isPurchased": true,
>         "reaction": "string"
>       }
>     ]
>   }
> ]
> ```

---

### Retrieve stories for a specific author

<summary><code>GET</code> <code><b>/stories/{userid}</b></code></summary>

Fetch all viewable stories from a specific author (`userid`).

##### Parameters (path)
> | name      | type     | data type | description |
> |-----------|----------|-----------|-------------|
> | userid    | required | string    | user ID     | 

##### Responses
See `/stories` responses

---

### Retrieve actual story info & statistics

<summary><code>GET</code> <code><b>/stories/{userid}/{storyid}</b></code></summary>

Fetch detailed statistics and metadata for a specific story (`storyid`) by a given user (`userid`).

##### Parameters (path)
> | name     | type     | data type | description |
> |----------|----------|-----------|-------------|
> | userid   | required | string    | user ID     |       
> | storyid  | required | string    | story ID    |       

##### Responses
> | http code | content-type       | response                                                                       |
> |-----------|--------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json` | JOSN with story Info                                                           |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`              |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`           |
> | `404`     | `application/json` | `{"error": "Story not found","timestamp": 1737195610743,"status": 404}` |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}`   |

##### Example Response
> ```json
> {
>   "isForAll": true,
>   "fileLink": "string",
>   "preview": "string",
>   "duration": 0,
>   "price": 0,
>   "id": "string",
>   "created": 0,
>   "published": 0,
>   "views": 0,
>   "reactions": [
>       {
>           "reactionType": "string",
>           "counter": 0
>       }
>   ]
> }
> ```

---

### Add reactions to a story

<summary><code>POST</code> <code><b>/stories/like</b></code></summary>

Set or remove a reaction to a specific story.<br />
`reaction` is required but is not taken into account when `isSet` is `false`. <br />
Setting `isSet` to `false` will remove any previous reaction of this user.

**NOTE**: `x-timestamp` header required

##### Parameters (body)

> | name      | type     | data type | description                                                 |
> |-----------|----------|-----------|-------------------------------------------------------------|
> | userId    | required | string    | ID of the story's author                                    |
> | storyId   | required | string    | ID of the story                                             |
> | reaction  | required | string    | The emoji reaction (e.g., `👍`)                             |
> | isSet     | required | boolean   | `true` to add a reaction, `false` to remove it             |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `404`     | `application/json` | `{"error": "Story not found","timestamp": 1737195610743,"status": 404}`      |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> {}
> ``` 

Can be sent via **WebSocket** as request `likeStory` 
##### WS request payload

> | name      | type     | data type | description                                                 |
> |-----------|----------|-----------|-------------------------------------------------------------|
> | userId    | required | string    | ID of the story's author                                    |
> | storyId   | required | string    | ID of the story                                             |
> | reaction  | required | string    | The emoji reaction (e.g., `👍`)                             |
> | isSet     | required | boolean   | `true` to add a reaction, `false` to remove it             |

---

### Mark a story as viewed

<summary><code>POST</code> <code><b>/stories/setview</b></code></summary>

Mark a story as viewed. Repeated views by the same user are ignored.

##### Parameters (JSON)

> | name      | type     | data type | description                                                 |
> |-----------|----------|-----------|-------------------------------------------------------------|
> | userId    | required | string    | ID of the story's author                                    |
> | storyId   | required | string    | ID of the story                                             |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `404`     | `application/json` | `{"error": "Story not found","timestamp": 1737195610743,"status": 404}`      |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> {}
> ``` 

Can be sent via **WebSocket** as request `viewStory`
##### WS request payload

> | name      | type     | data type | description                                                 |
> |-----------|----------|-----------|-------------------------------------------------------------|
> | userId    | required | string    | ID of the story's author                                    |
> | storyId   | required | string    | ID of the story                                             |

---

### Purchase a story

<summary><code>POST</code> <code><b>/stories/purchase</b></code></summary>

Mark a story as purchased.

##### Parameters (JSON)

> | name      | type     | data type | description                                                 |
> |-----------|----------|-----------|-------------------------------------------------------------|
> | userId    | required | string    | ID of the story's author                                    |
> | storyId   | required | string    | ID of the story                                             |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `404`     | `application/json` | `{"error": "Story not found","timestamp": 1737195610743,"status": 404}`      |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> {}
> ``` 

Can be sent via **WebSocket** as request `purchaseStory`
##### WS request payload

> | name      | type     | data type | description                                                 |
> |-----------|----------|-----------|-------------------------------------------------------------|
> | userId    | required | string    | ID of the story's author                                    |
> | storyId   | required | string    | ID of the story                                             |

---

### Hide/unhide stories from specific users

<summary><code>POST</code> <code><b>/stories/hide</b></code></summary>

Hide or unhide stories from specific users.<br/>
Does not check for user (author) existence.
Hiding stories remove all stories of that author from list of available.

##### Parameters (JSON)

> | name      | type     | data type | description                                    |
> |-----------|----------|-----------|------------------------------------------------|
> | userId    | required | string    | ID of the story's author                       |
> | isHidden  | required | boolean   | `true` to hide stories, `false` to unhide them |

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{}`                                                                         |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> {}
> ``` 

Can be sent via **WebSocket** as request `hideStories`
##### WS request payload

> | name      | type     | data type | description                                    |
> |-----------|----------|-----------|------------------------------------------------|
> | userId    | required | string    | ID of the story's author                       |
> | isHidden  | required | boolean   | `true` to hide stories, `false` to unhide them |

---

### Retrieve hidden users

<summary><code>GET</code> <code><b>/stories/hidden</b></code></summary>

Fetch a list of users whose stories have been hidden, including minimal user information.

##### Responses
> | http code | content-type       | response                                                                     |
> |-----------|--------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json` | array of JSON objects                                                        |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}`            |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |


##### Example Response
> ```json
> [
>   {
>       "id": "2vCYv2iInfPvLl_Ql6mOb",
>       "avatarUrl": "https://example.com/avatar.jpg",
>       "name": "Ivan Ivanov",
>       "verified": true
>   }
> ]
> ``` 