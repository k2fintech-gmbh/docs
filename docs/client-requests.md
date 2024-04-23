# requests

The following tables represent the structure for various payloads used in the WebSocket protocol.

## payload types

- [new](#new)
- [edit](#edit)
- [delete](#delete)
- [dlvrd](#dlvrd)
- [read](#read)
- [getMessage](#getmessage)
- [getMessages](#getmessages)
- [getChat](#getchat)

### new

New Message Request Payload

| field       | Type   | Example                                   | Possible Values             |
| ----------- | ------ | ----------------------------------------- | --------------------------- |
| chatId      | string | "User2"                                   | Chat IDs                    |
| message     | string | "Hello, World!"                           | Any string                  |
| attachments | array  | See ["Attachments"](../types/attachments) | Array of Attachment objects |

### edit

| Field     | Type    | Example                | Possible Values |
| --------- | ------- | ---------------------- | --------------- |
| chatId    | string  | "User2"                | Chat IDs        |
| messageId | integer | 123                    | Message IDs     |
| message   | string  | "Updated message text" | Any string      |

### delete

| Field     | Type    | Example | Possible Values |
| --------- | ------- | ------- | --------------- |
| chatId    | string  | "User2" | Chat IDs        |
| messageId | integer | 123     | Message IDs     |

### dlvrd

set mark "delivered" to message

| Field     | Type    | Example | Possible Values |
| --------- | ------- | ------- | --------------- |
| chatId    | string  | "User2" | Chat IDs        |
| messageId | integer | 123     | Message IDs     |

### read

set mark "read" to message

| Field     | Type    | Example | Possible Values |
| --------- | ------- | ------- | --------------- |
| chatId    | string  | "User2" | Chat IDs        |
| messageId | integer | 123     | Message IDs     |

---

### getMessage

**request payload schema:**

| Field     | Type    | Example | Possible Values |
| --------- | ------- | ------- | --------------- |
| chatId    | string  | "User2" | Chat IDs        |
| messageId | integer | 123     | Message IDs     |

**response payload schema:**

| Field        | Type      | Example                                   | Possible Values             |
| ------------ | --------- | ----------------------------------------- | --------------------------- |
| messageId    | integer   | 123                                       | Message IDs                 |
| message      | string    | "Hello"                                   | Any string                  |
| atttachments | array     | See ["Attachments"](../types/attachments) | Array of Attachment objects |
| sender       | string    | "User1"                                   | User IDs                    |
| read?        | timestamp | 123456789                                 | Timestamp                   |
| delivered?   | timestamp | 123456789                                 | Timestamp                   |
| createdAt    | timestamp | 123456789                                 | Timestamp                   |
| updatedAt    | timestamp | 123456789                                 | Timestamp                   |

### getMessages

**request payload schema:**

Message:

| Field  | Type    | Example | Possible Values |
| ------ | ------- | ------- | --------------- |
| chatId | string  | "User2" | Chat IDs        |
| endId? | integer | 199     | Message IDs     |
| count  | integer | 50      | 1 - 100         |

> to get 50 messages from the end of the chat:\*\*

```json
{
  "chatId": "User2",
  "count": 50
}
```

> to get messages with ids 80-100:

```json
{
  "chatId": "User2",
  "count": 20,
  "endId": 100
}
```

**response payload schema:**

Message[]

## getChat

**request payload schema:**

| Field  | Type   | Example | Possible Values |
| ------ | ------ | ------- | --------------- |
| chatId | string | "User2" | Chat IDs        |

**response payload schema:**

| Field        | Type   | Example     | Possible Values              |
| ------------ | ------ | ----------- | ---------------------------- |
| chatId       | string | "User2"     | Chat IDs                     |
| type         | string | "dialog"    | "dialog", "group", "channel" |
| firstName?   | string | "Alexander" |                              |
| lastName?    | string | "Kuzopi"    |                              |
| username?    | string | "User2"     |                              |
| phoneNumber? | string | "User2"     |                              |
| groupName?   | string | "User2"     |                              |
| lastId?      | int    | 1000        |                              |
| unreadCount? | int    | 1000        |                              |
