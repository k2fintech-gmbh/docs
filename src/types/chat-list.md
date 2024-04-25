# ChatList

[ChatListItem](#chatlistitem)[]

## ChatListItem

| Field                | Type          | Example                          | Description                        |
|----------------------|---------------|----------------------------------|------------------------------------|
| type                 | ChatType      | "group"                          | The type of chat (e.g., dialog, group, channel). |
| id                   | string        | "JC0TvKi3f2bIQtBcW1jIn"          | The unique identifier for the chat item. |
| photoUrl?            | string        | "<https://example.com/photo.jpg>"  | Optional URL to the chat's photo. |
| name                 | string        | "John Doe"                       | The name of the chat. |
| lastMessageText      | string        | "Hello, World!"                  | The text of the last message in the chat. |
| lastMessageTime      | Date          | 1700000000                    | The timestamp of the last message. Use Date for DateTime representation. |
| lastMessageAuthor?   | string        | "User1"                          | Optional author of the last message. |
| lastMessageStatus    | MessageStatus | "read"                           | The status of the last message (e.g., read, delivered). |
| missedMessagesCount  | number        | 3                                | The count of missed messages in the chat. |
| verified             | boolean       | true                             | Indicates whether the chat is verified. |
