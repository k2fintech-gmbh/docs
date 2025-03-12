
# ForwardedFrom

| Field         | Type                             | Example                                  | Possible Values |
|---------------|----------------------------------|------------------------------------------|-----------------|
| chat          | ["ChatInfo"](chat.md#ChatInfo)    | `{chatId: "", type: "dialog", name: ""}` | Chat info       |
| participant   | ["Profile"](contacts.md#Profile) | `{id: "", name: "", avatarUrl""}`        | Profile         |
| messageId     | string                           | "JC0TvKi3f2bIQtBcW1jIn"                  | Message ID      |

##### Example 
> ```json
> {
>   "chat": {
>       "chatId": "string",
>       "photoUrl": "string",
>       "type": "dialog",
>       "name": "string",
>       "participantCount": 2
>   },
>   "participant": {
>       "id": "weEEwwecw_wdx2",
>       "name": "@ask_uznetsov",
>       "avatarUrl": "https://dev.iambig.ai/public/1feb2e3c2d04dec268da0606dd163e76f6869233129be1633ab9937903640818",
>       "verified": "true"
>   },
>   "messageId": "JC0TvKi3f2bIQtBcW1jIn"
> }
> ```    

---

# ForwardedFromRequestItem

| Field           | Type                                  | Example                                  | Possible Values |
|-----------------|---------------------------------------|------------------------------------------|-----------------|
| clientMessageId | string                                | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4"   | Any string      |
| forwardedFrom   | { chatId: string; messageId: number } | { chatId: "User2"; messageId: 2 }        |                 |


