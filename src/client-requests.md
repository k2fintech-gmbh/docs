1# Requests with responses

The following tables represent the structure for various payloads, client-server requests and responses.

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

**request payload schema:**

| Field       | Type   | Example                                  | Possible Values             |
| ----------- | ------ | ---------------------------------------- | --------------------------- |
| chatId      | string | "User2"                                  | Chat IDs                    |
| message     | string | "Hello, World!"                          | Any string                  |
| attachments | array  | See ["Attachments"](types/attachment.md) | Array of Attachment objects |

**response payload schema:**

| Field     | Type    | Example | Possible Values |
| --------- | ------- | ------- | --------------- |
| messageId | integer | 123     | Any string      |

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

/// details | read / dlvrd optimizations

“read” and “delivered” marks are placed on all messages whose id <= transmitted, if they are not already marked as “read” and “delivered”. For example, you have 5 new messages. you can pass id = 5 and all 5 will be marked as read. If you pass id = 4, the fifth will remain unread
///

---

## subscribe

calling this method makes the user {++online++}

after calling this method, the server will sequentially send events after the specified one.
If there are more than 1000 events, {--the method will return an error???--}

**request payload schema:**

| Field       | Type   | Example |
| ----------- | ------ | ------- |
| lastEventId | number | 10      |

**response payload schema:**

| Field       | Type   | Example |
| ----------- | ------ | ------- |
| lastEventId | number | 1000    |

---

### getMessage

**request payload schema:**

| Field     | Type    | Example | Possible Values |
| --------- | ------- | ------- | --------------- |
| chatId    | string  | "User2" | Chat IDs        |
| messageId | integer | 123     | Message IDs     |

**response payload schema:**

[Message](types/message.md)

### getMessages

**request payload schema:**

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

[Message](types/message)[]

## getChat

**request payload schema:**

| Field  | Type   | Example | Possible Values |
| ------ | ------ | ------- | --------------- |
| chatId | string | "User2" | Chat IDs        |

**response payload schema:**

[Chat](types/chat.md)

## getChats

**request payload schema:**

| Field | Type | Example |
| ----- | ---- | ------- |

**response payload schema:**

[Chat](types/chat.md)[]

## getEvent

**request payload schema:**

| Field   | Type   | Example |
| ------- | ------ | ------- |
| eventId | number | 1023    |

**response payload schema:**

[ServerEvent](../server-events)

## getEvents

returns all events from some id. If there are more than 100 events, the method will return an error

**request payload schema:**

| Field       | Type   | Example |
| ----------- | ------ | ------- |
| fromEventId | number | 10      |

**response payload schema:**

[ServerEvent](../server-events)[]
