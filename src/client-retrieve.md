# Requests with data responses

## chat

**request payload schema:**

| Field  | Type   | Example | Possible Values |
| ------ | ------ | ------- | --------------- |
| chatId | string | "User2" | Chat IDs        |

**response payload schema:**

[Chat](types/chat.md)

## chats

**request payload schema:**

| Field | Type | Example |
| ----- | ---- | ------- |

**response payload schema:**

[ChatList](types/chat-list.md)

## messages

**request payload schema:**

| Field    | Type    | Example | Possible Values        |
| -------- | ------- | ------- | ---------------------- |
| chatId   | string  | "User2" | Chat IDs               |
| startId? | integer | 199     | Message IDs            |
| endId?   | integer | 199     | Message IDs            |
| count?   | integer | 50      | 1 - 500, default - 300 |

/// details | pagination

endId and startId are optional. You cannot specify them at the same time. If you want to download several messages starting with N, specify startId=N. if the user scrolls up the chat, specify the endId (before which message the next portion should be loaded). if you need to get the last few messages, don't pass endId and startId, then the "count" of the latest ones will be loaded.
///
**response payload schema:**

[Message](types/message.md)[]

## profile

**request payload schema:**

| Field      | type     | data type | description |
|------------|----------|-----------|-------------|
| id         | required | string    | user ID     | 

## profiles

**request payload schema:**

| Field | type     | data type | description |
|-------|----------|-----------|-------------|
| ids   | required | string[]  | user IDs    | 