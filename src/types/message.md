# Message

## Dialog message

| Field           | Type                                 | Example                                                                                        | Possible Values                            |
|-----------------|--------------------------------------|------------------------------------------------------------------------------------------------|--------------------------------------------|
| messageId       | integer                              | 123                                                                                            | Message IDs                                |
| clientMessageId | string                               | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4"                                                         | Any string                                 |
| message?        | string                               | "Hello"                                                                                        | Any string                                 |
| sender          | string                               | "User1"                                                                                        | User IDs                                   |
| attachments?    | array                                | See ["Attachments"](../types/attachment.md)                                                    | Array of Attachment objects                |
| forwarded?      | bool                                 | true                                                                                           | true, false                                |
| replyTo?        | [ReplyTo](./reply-to.md)             | `{messageId: 1, sender: "sXvf__", createdAt:123, message: "text", clientMessageId: "123-213" }` |                                            |
| forwardedFrom?  | [ForwardedFrom](./forwarded-from.md) | See [ForwardedFrom](./forwarded-from.md)                                                       |                                            | 
| status          | string                               | "read"                                                                                         | "read", "unread", "undelivered", "deleted" |
| type            | string                               | "new"                                                                                          | "new", "edit", "delete", "call", "like"    |
| payload?        | object                               | [MessagePayload](#messagepayload)                                                              | Any object                                 |
| createdAt       | timestamp                            | 123456789                                                                                      | Timestamp                                  |
| updatedAt?      | timestamp                            | 123456789                                                                                      | Timestamp                                  |
| deletedAt?      | timestamp                            | 123456789                                                                                      | Timestamp                                  |
| deletedFor?     | string array                         | ["SJKDuygi"]                                                                                   | array of User IDs                          |
| blockedFor?     | string                               | "SJKDuygi"                                                                                     | array of User IDs                          |
| read?           | timestamp                               |                                                                                    |                                            |
| dlvrd?          | timestamp                               |                                                                                      |                                            |
| likeViewed?     | number or timestamp                  | -1 - if exists new unviewed like, empty - if no likes                                          | Timestamp                                  
| reactions?      | [Reaction](./reaction.md)[]          | See [Reaction](./reaction.md)                                                                  | Timestamp                                  |

## Group chat message
(`linkedMessage` - (only in Channels) if Channel message has linked message in Comments Group)
(`channelMessageId` - for messages in Comments Group to filter out comments by Channel Message)
(`replyMessageId` - for messages in Comments Group to get only comments branch by Message ID)

| Field             | Type                                 | Example                                                                                         | Possible Values             |
|-------------------|--------------------------------------|-------------------------------------------------------------------------------------------------|-----------------------------|
| messageId         | integer                              | 123                                                                                             | Message IDs                 |
| clientMessageId?  | string                               | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4"                                                          | Any string                  |
| message?          | string                               | "Hello"                                                                                         | Any string                  |
| sender            | string                               | "User1"                                                                                         | User IDs                    |
| attachments?      | array                                | See ["Attachments"](../types/attachment.md)                                                     | Array of Attachment objects |
| delivering        | [Delivering](#delivering)[]          | `[{userId:"User1", dlvrd: 12312312, read: 123123}]`                                             |
| createdAt         | timestamp                            | 123456789                                                                                       | Timestamp                   |
| updatedAt?        | timestamp                            | 123456789                                                                                       | Timestamp                   |
| deletedAt?        | timestamp                            | 123456789                                                                                       | Timestamp                   |
| deletedFor?       | array string                         | ["SJKDuygi"]                                                                                    | User IDs                    |
| forwarded?        | bool                                 | true                                                                                            | true, false                 |
| replyTo?          | [ReplyTo](./reply-to.md)             | `{messageId: 1, sender: "sXvf__", createdAt:123, message: "text", clientMessageId: "123-213" }` |                             |
| forwardedFrom?    | [ForwardedFrom](./forwarded-from.md) | See [ForwardedFrom](./forwarded-from.md)                                                        |                             | 
| likeViewed?       | number or timestamp                  | -1 - if exists new unviewed like, empty - if no likes                                           | Timestamp                   |
| reactions?        | [Reaction](./reaction.md)[]          | See [Reaction](./reaction.md)                                                                   | Reactions array             |
| autoDeleteAt?     | timestamp                            | 123456789                                                                                       | Reactions array             |
| channelMessageId? | string                               | "channelID:messageId"                                                                           | Channel IDs + Message IDs   |
| replyMessageId?   | integer                              | 123                                                                                             | Message IDs                 |
| linkedMessage?    | string                               | "chatID:messageId"                                                                              | Chat IDs + Message IDs      |


## Delivering

| Field  | Type      | Example   | Possible Values |
| ------ | --------- | --------- | --------------- |
| userId | string    | "User1"   | User IDs        |
| dlvrd? | timestamp | 123456789 | Timestamp       |
| read?  | timestamp | 123456789 | Timestamp       |

## MessagePayload

MessagePayload can be one of the following:


### EditPayload

| Field                   | Type    | Example     | Possible Values    |
|-------------------------|---------|-------------|--------------------|
| originalMessageId       | integer | 123         | Message IDs        |
| originalClientMessageId | string  | "sdas2343"  | Message Client IDs |
| message                 | string  | "some text" | any text           |
| attachments             | array   |             |                    |


### DeletionPayload

| Field                   | Type     | Example    | Possible Values    |
|-------------------------|----------|------------|--------------------|
| originalMessageId       | integer  | 123        | Message IDs        |
| originalClientMessageId | string   | "sdas2343" | Message Client IDs |


### LikePayload

| Field                   | Type    | Example    | Possible Values    |
|-------------------------|---------|------------|--------------------|
| originalMessageId       | integer | 123        | Message IDs        |
| originalClientMessageId | string  | "sdas2343" | Message Client IDs |
| reaction                | string  | ":)"       | any                |
