
# ForwardedFrom

| Field         | Type                                | Example                                  | Possible Values |
|---------------|-------------------------------------|------------------------------------------|-----------------|
| chat          | chatInfo                            | `{chatId: "", type: "dialog", name: ""}` | Chat info       |
| participant   | ["Profile"](contacts.md#Profile)    | `{id: "", name: "", avatarUrl""}`        | Profile         |
| messageId     | string                              | "JC0TvKi3f2bIQtBcW1jIn"                  | Message ID      |

##### Example 
> ```json
> {
>   "chat": {
>       "chatId": "string",
>       "photoUrl": "string",
>       "type": "dialog",
>       "name": "string"
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