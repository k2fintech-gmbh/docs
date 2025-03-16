# Privacy settings API

### Set a privacy options
<summary><code>POST</code> <code><b>/privacy</b></code></summary>

All properties are optional. By default they are set to `EVERYBODY`

##### Parameters (JSON body)
> | name                | type     | data type  | description                    |
> |---------------------|----------|------------|--------------------------------|
> | showPhoneNumber     | optional | boolean    | can others see Phone Number    |
> | showUsername        | optional | boolean    | can others see @username       |
> | showOnlineStatus    | optional | boolean    | can others see online status   |
> | showPortfolioPhoto  | optional | boolean    | can others see Avatar          |
> | canForwardMessage   | optional | boolean    | can others forward my messages |
> | canCall             | optional | boolean    | can others call me             |
> | canSendVoice        | optional | boolean    | can others send me Media       |
> | canSendMessage      | optional | boolean    | can others ssen me Messages    |
> | canInvite           | optional | boolean    | can others add me to Chats     |
               
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

---

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
