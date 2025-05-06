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

new chat / chat info changed / chat deletion

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
                
## messagePinned

| Field     | Type    | Example       | Possible Values   |
|-----------| ------- | ------------- | ----------------- |
| chatId    | string  | "User2"       | Chat IDs          |
| userId    | string  | "User2"       | user (for groups) |
| messageId | integer | 123           | Message IDs       |

## newStory

| Field         | Type   | Example                                   | Possible Values |
|---------------| ------ |-------------------------------------------|-----------------|
| userId        | string | "_qzjQofkCDvpFe8Da3Nlt2"                  | User IDs        |
| storyId       | string | "SYDY5qXsnv2aJnkoI9qF8E20"                | Story IDs       |
| userAvatar?   | string | "https://example.com/picture.jpg"         | URL             |
| storyPreview  | string | https://cloudflare.com/dsdfsf/preview.jpg | URL             |

## removedStory

| Field         | Type   | Example                                   | Possible Values |
|---------------| ------ |-------------------------------------------|-----------------|
| userId        | string | "_qzjQofkCDvpFe8Da3Nlt2"                  | User IDs        |
| storyId       | string | "SYDY5qXsnv2aJnkoI9qF8E20"                | Story IDs       |

## reaction

notification about added or removed reaction to a message

| Field           | Type     | Example                                | Possible Values   |
|-----------------|----------|----------------------------------------|-------------------|
| chatId          | string   | "_qzjQofkCDvpFe8Da3Nlt2"               | Chat IDs          |
| messageId       | number   | 1                                      | Positive Int      |
| userId          | string   | "SYDY5qXsnv2aJnkoI9qF8E20"             | User IDs          |
| authorId        | string   | "authorId"                             | User IDs          |
| timestamp       | number   | 1700500000000                          | Positive Int      |
| reaction        | string   | "👍"                                   | Any string        |
| isSet           | boolean  | true                                   | True or False     |
| isNew           | boolean  | false                                  | True or False     |
| avatarUrl       | string   | "https://server.com/avatar.jpg"        | URL               |
| clientMessageId | string   | "440C17F2-FA09-48F8-8273-E3990FE0BAC5" | Message ID string |
                        
## joinRequest

notification sent to Group admins about users joined via Invite Link with approve required

| Field   | Type   | Example                                   | Possible Values |
|---------| ------ |-------------------------------------------|-----------------|
| chatId  | string | "_qzjQofkCDvpFe8Da3Nlt2"                  | Chat IDs        |
| userId  | string | "_qzjQofkCDvpFe8Da3Nlt2"                  | User IDs        |
| linkId  | string | "SYDY5qXsnv2aJnkoI9qF8E20"                | Invite Link IDs |

## privateGroupApproveRequest

notification sent to Group admins about users joined via Invite Link to a private group with message approve required

| Field   | Type   | Example                                   | Possible Values |
|---------| ------ |-------------------------------------------|-----------------|
| chatId  | string | "_qzjQofkCDvpFe8Da3Nlt2"                  | Chat IDs        |
| userId  | string | "_qzjQofkCDvpFe8Da3Nlt2"                  | User IDs        |
| linkId  | string | "SYDY5qXsnv2aJnkoI9qF8E20"                | Invite Link IDs |

## purgeMessages

notification to all group members about all group messages being purged by owner

| Field     | Type   | Example                   | Possible Values |
|-----------|--------|---------------------------|-----------------|
| chatId    | string | "_qzjQofkCDvpFe8Da3Nlt2"  | Chat IDs        |
| userId    | string | "_qzjQofkCDvpFe8Da3Nlt2"  | User IDs        |
| timestamp | number | 1700500000000             | Positive Int    |

## readyVideo

notification to App about video processed by Stream and ready for playback</br>
if the video was sent as Attachment - it will have `messageId` set to final ID of message, sent to chat</br>
otherwise (for Story) - `messageId` will be `-1` and `clientMessageId` will be random new string ID

| Field             | Type   | Example                  | Possible Values  |
|-------------------|--------|--------------------------|------------------|
| fileId            | string | "_qzjQofkCDvpFe8Da3Nlt2" | Uploaded file ID |
| messageId         | number | -1                       | Message IDs      |
| clientMessageId   | string | "qzjdfsdfvpFe8Da3Nlt2"   | string           |
