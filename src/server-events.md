# Server events

## new

| Field            | Type    | Example                                  | Possible Values             |
| ---------------- | ------- | ---------------------------------------- | --------------------------- |
| id               | number  | 124                                      | Event ID                   |
| chatId           | string  | "User1"                                  | Chat IDs                    |
| userId?          | string  | "User1"                                  | User IDs                    |
| messageId        | integer | 124                                      | Message IDs                 |
| clientMessageId? | string  | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4"   | Any string                  |
| message          | string  | "Hello, World!"                          | Any string                  |
| atttachments?    | array   | See ["Attachments"](types/attachment.md) | Array of Attachment objects |

## chats

new chat / chat deletion

[ChatList](types/chat-list.md) (1)
{ .annotate }

  | 1.                 | Field         |
  | ------------------ | ------------- |
  | type               | ChatType      |
  | id                 | string        |
  | photoUrl?          | string        |
  | name               | string        |
  | lastMessageText    | string        |
  | lastMessageTime    | Date          |
  | lastMessageAuthor? | string        |
  | lastMessageStatus  | MessageStatus |
  | missed?            | number        |
  | verified?          | boolean       |
  | isMine             | boolean       |
  | lastMessageId      | integer       |

## edit

| Field         | Type    | Example                                  | Possible Values             |
| ------------- | ------- | ---------------------------------------- | --------------------------- |
| chatId        | string  | "User1"                                  | Chat IDs                    |
| messageId     | integer | 124                                      | Message IDs                 |
| message       | string  | "Updated message text"                   | Any string                  |
| atttachments? | array   | See ["Attachments"](types/attachment.md) | Array of Attachment objects |

## delete

| Field     | Type    | Example | Possible Values |
| --------- | ------- | ------- | --------------- |
| chatId    | string  | "User1" | Chat IDs        |
| messageId | integer | 124     | Message IDs     |

## online

| Field  | Type   | Example | Possible Values |
| ------ | ------ | ------- | --------------- |
| userId | string | "User1" | User IDs        |

## offline

| Field  | Type   | Example | Possible Values |
| ------ | ------ | ------- | --------------- |
| userId | string | "User1" | User IDs        |

!!! info "Offline Event Trigger"
    If there is no ping from the client for 20 seconds, the WebSocket connection will be closed, and an "offline" event will be sent to all participants.

## typing

| Field   | Type   | Example | Possible Values |
| ------- | ------ | ------- | --------------- |
| userId  | string | "User2" | User IDs        |
| chatId? | string | "User2" | Chat IDs        |

## dlvrd

| Field     | Type    | Example       | Possible Values   |
| --------- | ------- | ------------- | ----------------- |
| chatId    | string  | "User2"       | Chat IDs          |
| userId?   | string  | "User2"       | user (for groups) |
| messageId | integer | 123           | Message IDs       |
| timestamp | integer | 1700500000000 |                   |

## read

| Field     | Type    | Example       | Possible Values   |
| --------- | ------- | ------------- | ----------------- |
| chatId    | string  | "User2"       | Chat IDs          |
| userId?   | string  | "User2"       | user (for groups) |
| messageId | integer | 123           | Message IDs       |
| timestamp | integer | 1700500000000 |                   |

### dlvrd/read marks rules

!!! info inline end "dlvrd and read mark side effect"
    affected chatList and messages response

- ⁠If you mark message #5 as read, but it is not marked as delivered, both delivery and reading are marked

- ⁠⁠if you mark message #10 as read or delivered, and before that only message #5 was marked, then messages #6,7,8,9,10 are marked with the same timestamp

-
