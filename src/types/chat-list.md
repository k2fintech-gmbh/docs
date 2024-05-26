# ChatList

[ChatListItem](#chatlistitem)[]

## ChatListItem

| Field              | Type          | Example                            | Description                                                              |
| ------------------ | ------------- | ---------------------------------- | ------------------------------------------------------------------------ |
| type               | ChatType      | "group"                            | "dialog" \| "group" \| "channel" \| "favorites" \| "ai"                  |
| id                 | string        | "JC0TvKi3f2bIQtBcW1jIn"            | The unique identifier for the chat item.                                 |
| photoUrl?          | string        | "dev.big.a-kuznetsov.cc/public/de" | Optional URL to the chat's photo.                                        |
| name               | string        | "John Doe"                         | The name of the chat.                                                    |
| lastMessageText    | string        | "Hello, World!"                    | The text of the last message in the chat.                                |
| lastMessageTime    | Date          | 1700000000000                      | The timestamp of the last message. Use Date for DateTime representation. |
| lastMessageAuthor? | string        | "User1"                            | Optional author of the last message.                                     |
| lastMessageStatus  | MessageStatus | "read"                             | "read" \| "unread" \| "undelivered"                                      |
| missed?            | number        | 3                                  | The count of missed messages in the chat.                                |
| verified?          | boolean       | true                               | Indicates whether the chat is verified.                                  |
| isMine             | boolean       | true                               | Indicates whether the chat item belongs to the current user.             |
| lastMessageId      | integer       | 123                                | The unique identifier for the last message in the chat.                  |

## MessageStatus

"read" | "unread" | "undelivered"

## ChatType

"dialog" \| "group" \| "channel" \| "favorites" \| "ai"

/// details | ChatList example

  ```json
    [
        {
            "type": "dialog",
            "id": "JC0TvKi3f2bIQtBcW1jIn",
            "lastMessageStatus": "unread",
            "photoUrl": "https://dev.big.a-kuznetsov.cc/public/de5d8114f9fa6bc906ca6972f9750d582b86bac94aadd0ee7550b2bd1a25b8607",
            "lastMessageText": "Hello, how are you?",
            "lastMessageTime": 1713437858000,
            "missed": 0,
            "name": "@JC0TvKi3f2bIQtBcW1jIn",
            "verified": false,
            "lastMessageAuthor": "",
            "isMine": true
        },
        {
            "type": "dialog",
            "id": "EiuOGJcrQoY0LjL2-FbtG",
            "photoUrl": "https://dev.big.a-kuznetsov.cc/public/de5d8114f9fa6bc906ca6972f9750d582b86bac94aadd0ee7550b2bd1a25b8604",
            "lastMessageStatus": "unread",
            "lastMessageText": "<string>",
            "lastMessageTime": 1713437858000,
            "missed": 0,
            "name": "Серёжа",
            "verified": false,
            "lastMessageAuthor": "Серёжа",
            "isMine": false
        }
    ]
  ```

///
