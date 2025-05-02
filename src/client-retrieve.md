# Requests with data responses

## chat

**request payload schema:**

| Field  | Type   | Example | Possible Values |
| ------ | ------ | ------- | --------------- |
| chatId | string | "User2" | Chat IDs        |

**response payload schema:**

[Chat](types/chat.md)

## chats
(`isOwner` - optional param to get groups of channels owned by current user 
can be used to link comments chat which are required to be owned by same user)

**request payload schema:**

| Field    | Type | Example |
|----------|------|---------|
| isOwner  | bool | false   |

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

## messagesComments
(retrieve messages from Comments groups of Channels, have additional params)
(`channelMessageId` -  ID of message in Channel for which we want to get comments )
(`chatMessageId` -  ID of message in Comments Chat to get only branch of comments linked to this comment )

**request payload schema:**

| Field            | Type       | Example     | Possible Values        |
|------------------|------------|-------------|------------------------|
| channelId        | string     | "klhdHUT62" | Channel IDs            |
| channelMessageId | integer    | 123         | Channel Message IDs    |
| chatMessageId    | integer    | 321         | Chat Message IDs       |
| startId?         | integer    | 199         | Message IDs            |
| endId?           | integer    | 199         | Message IDs            |
| count?           | integer    | 50          | 1 - 500, default - 300 |

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

## participants

**request payload schema:**

| Field     | Type    | Example                 | Possible Values         |
|-----------|---------|-------------------------|-------------------------|
| chatId    | string  | "JC0TvKi3f2bIQtBcW1jIn" | Chat IDs                |
| startPos? | integer | 199                     | positive integer        |
| filter?   | string  | "economics"             | userName or name search |
| count?    | integer | 50                      | positive integer        |

**response payload schema:**

| Field        | Type                             | Example       | Possible Values |
|--------------|----------------------------------|---------------|-----------------|
| count        | integer                          | 123           | Message IDs     |
| startPos     | integer                          | 1700500000000 |                 |
| available    | integer                          | 2             |                 |
| participants | [Profile](types/chat.md#profile) |               |                 |

## administrators

**request payload schema:**

| Field   | type     | data type | description |
|---------|----------|-----------|-------------|
| chatId  | required | string    | Chat IDs    | 

**response payload schema:**
                  
Array of [Profile](types/chat.md#profile) & { rights: [Rights](types/chat.md#rights) }
