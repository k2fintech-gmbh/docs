# Privacy settings API

### Set a privacy options
<summary><code>POST</code> <code><b>/privacy</b></code></summary>

All properties are optional. By default they are set to `EVERYBODY`

##### Parameters (JSON body)
> | name                | type     | data type | description                                |
> |---------------------|----------|-----------|--------------------------------------------|
> | showPhoneNumber     | required | boolean   | true if story is available to all contacts |
> | showUsername        | required | string    | playback.hls from metadata                 |
> | showOnlineStatus    | required | string    | thumbnail from metadata                    |
> | showPortfolioPhoto  | required | number    | duration of the story                      |
> | canForwardMessage   | optional | array     | list of sharing lists IDs                  |
> | canCall             | optional | number    | price for the story                        |
> | canSendVoice        | optional | number    | price for the story                        |
> | canSendMessage      | optional | number    | price for the story                        |
> | canInvite           | optional | number    | price for the story                        |
               
##### Possible values
> | value            | description                                   |
> |------------------|-----------------------------------------------|
> | NOBODY           | not allowed no anyone                         |
> | TRUSTED          | allowed only to trusted/verified users        |
> | CONTACTS_TRUSTED | allowed only to verified users or my contacts |
> | CONTACTS         | allowed only to my contacts                   |
> | EVERYBODY        | allowed no anyone                             |

##### Responses
> | http code | content-type       | response                                     |
> |-----------|--------------------|----------------------------------------------|
> | `200`     | `application/json` | `{}`                         |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}` |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}` |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Request
> ```json
> {
>   "showPhoneNumber": "NOBODY",
>   "showUsername": "NOBODY",
>   "showOnlineStatus": "NOBODY",
>   "showPortfolioPhoto": "NOBODY",
>   "canForwardMessage": "NOBODY",
>   "canCall": "NOBODY",
>   "canSendVoice": "NOBODY",
>   "canSendMessage": "NOBODY",
>   "canInvite": "NOBODY"
> }
> ```        

##### Example Response
> ```json
> {} 
> ```

<br />

### Ger privacy options
<summary><code>GET</code> <code><b>/privacy</b></code></summary>

Returns JSON object with all privacy settings

##### Responses
> | http code | content-type       | response                                     |
> |-----------|--------------------|----------------------------------------------|
> | `200`     | `application/json` | `{}`                         |
> | `400`     | `application/json` | `{"error": "Failed...","timestamp": 1737195610743,"status": 400}` |
> | `401`     | `application/json` | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}` |
> | `500`     | `application/json` | `{"error": "Something went wrong","timestamp": 1737195610743,"status": 500}` |

##### Example Response
> ```json
> {
>   "showPhoneNumber": "NOBODY",
>   "showUsername": "NOBODY",
>   "showOnlineStatus": "NOBODY",
>   "showPortfolioPhoto": "NOBODY",
>   "canForwardMessage": "NOBODY",
>   "canCall": "NOBODY",
>   "canSendVoice": "NOBODY",
>   "canSendMessage": "NOBODY",
>   "canInvite": "NOBODY"
> }
> ```        
