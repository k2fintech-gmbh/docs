# Server events

## new


| Field           | Type    | Example                                  | Possible Values                            |
| --------------- | ------- | ---------------------------------------- | ------------------------------------------ |
| chatId          | string  | "User1"                                  | Chat IDs                                   |
| sender?         | string  | "User1"                                  | User IDs                                   |
| senderName?     | string  | "John Doe"                               | Any string                                 |
| messageId       | integer | 124                                      | Message IDs                                |
| clientMessageId | string  | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4"   | Any string                                 |
| message?        | string  | "Hello, World!"                          | Any string                                 |
| attachments?    | array   | See ["Attachments"](types/attachment.md) | Array of Attachment objects                |
| timestamp?      | integer | 1700500000000                            | Unix timestamp                             |
| missed          | integer | 1                                        | Missed messages                            |
| status          | string  | "read"                                   | "read", "unread", "undelivered", "deleted" |

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


## delete

| Field             | Type    | Example | Possible Values |
| ----------------- | ------- | ------- | --------------- |
| chatId            | string  | "User1" | Chat IDs        |
| messageId         | integer | 124     | Message IDs     |
| originalMessageId | integer | 1       | Message IDs     |

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

| Field   | Type    | Example | Possible Values |
| ------- | ------- | ------- | --------------- |
| userId  | string  | "User2" | User IDs        |
| chatId? | string  | "User2" | Chat IDs        |
| stop?   | boolean | true    |                 |

## dlvrd

| Field           | Type    | Example       | Possible Values   |
| --------------- | ------- | ------------- | ----------------- |
| chatId          | string  | "User2"       | Chat IDs          |
| userId?         | string  | "User2"       | user (for groups) |
| messageId       | integer | 123           | Message IDs       |
| clientMessageId | string  | "123"         |                   |
| timestamp       | integer | 1700500000000 |                   |

## read

| Field           | Type    | Example       | Possible Values   |
| --------------- | ------- | ------------- | ----------------- |
| chatId          | string  | "User2"       | Chat IDs          |
| userId?         | string  | "User2"       | user (for groups) |
| messageId       | integer | 123           | Message IDs       |
| clientMessageId | string  | "123"         |                   |
| timestamp       | integer | 1700500000000 |                   |

