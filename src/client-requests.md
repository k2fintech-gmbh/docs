# Requests with responses

The following tables represent the structure for various payloads, client-server requests and responses.

## payload types

### new {: #new }

**request payload schema:**

| Field           | Type    | Example                                  | Possible Values             |
| --------------- | ------- | ---------------------------------------- | --------------------------- |
| chatId          | string  | "User2"                                  | Chat IDs                    |
| message         | string  | "Hello, World!"                          | Any string                  |
| clientMessageId | string  | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4"   | Any string                  |
| attachments?    | array   | See ["Attachments"](types/attachment.md) | Array of Attachment objects |
| replyTo?        | integer | 1                                        |                             |

### {: #messageresponse }
**response payload schema:** 

| Field           | Type    | Example                                | Possible Values    |
| --------------- | ------- | -------------------------------------- | ------------------ |
| messageId       | integer | 123                                    | message seq number |
| timestamp       | integer | 1700500000000                          |                    |
| clientMessageId | string  | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4" | Any string         |
       
If message can not be delivered due to user's privacy settings - **empty object** will be returned in response.

### forward {: #forward }

**request payload schema:**

| Field             | Type                                  | Example                                | Possible Values             |
|-------------------|---------------------------------------|----------------------------------------| --------------------------- |
| chatId            | string                                | "User2"                                | Chat IDs                    |
| message           | string                                | "Hello, World!"                        | Any string                  |
| clientMessageId   | string                                | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4" | Any string                  |
| forwardedFrom     | { chatId: string; messageId: number } | { chatId: "User2"; messageId: 2 }      |                             |

**response payload schema:**

| Field           | Type                                                     | Example  | Possible Values |
|-----------------|----------------------------------------------------------|----------|-----------------|
| messages        | [messageresponse](../client-requests#messageresponse) [] |          |                 |
       
If message can not be delivered due to user's privacy settings - **empty object** will be returned in response.

### dlvrd

set mark "delivered" to a message.

**request payload schema:**

| Field      | Type    | Example | Possible Values |
| ---------- | ------- | ------- | --------------- |
| chatId     | string  | "User2" | Chat IDs        |
| messageId? | integer | 123     | Message IDs     |

message id is optional, if not specified, all messages will be marked as delivered

**response payload schema:**

| Field           | Type    | Example                                | Possible Values |
| --------------- | ------- | -------------------------------------- | --------------- |
| messageId       | integer | 123                                    | Message IDs     |
| timestamp       | integer | 1700500000000                          |                 |
| clientMessageId | string  | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4" | Any string      |


### read

set mark "read" to a message
also set "viewed" mark if message has reaction for message author

| Field      | Type    | Example | Possible Values |
| ---------- | ------- | ------- | --------------- |
| chatId     | string  | "User2" | Chat IDs        |
| messageId? | integer | 123     | Message IDs     |

message id is optional, if not specified, all messages will be marked as read

**response payload schema:**

| Field           | Type    | Example                                | Possible Values |
| --------------- | ------- | -------------------------------------- | --------------- |
| messageId       | integer | 123                                    | Message IDs     |
| timestamp       | integer | 1700500000000                          |                 |
| missed          | integer | 2                                      |                 |
| clientMessageId | string  | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4" | Any string      |

/// details | read / dlvrd optimizations

“read” and “delivered” marks are placed on all messages whose id <= transmitted, if they are not already marked as “read” and “delivered”. For example, you have 5 new messages. you can pass id = 5 and all 5 will be marked as read. If you pass id = 4, the fifth will remain unread
///

---

### delete

delete a message.

**request payload schema:**

| Field             | Type         | Example | Possible Values    |
|-------------------|--------------|---------|--------------------|
| chatId            | string       | "User2" | Chat IDs           |
| clientMessageId   | string       | "123"   | Client message IDs |
| originalMessageId | integer      | 123     | Message IDs        |
| for               | 'me' , 'all' | 'me'    | 'me' , 'all'       |

**response payload schema:**

| Field           | Type    | Example                                | Possible Values |
| --------------- | ------- | -------------------------------------- | --------------- |
| messageId       | integer | 123                                    | Message IDs     |
| timestamp       | integer | 1700500000000                          |                 |
| clientMessageId | string  | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4" | Any string      |

### edit

edit a message.

**request payload schema:**

| Field             | Type     | Example                                  | Possible Values             |
|-------------------|----------|------------------------------------------| --------------------------- |
| chatId            | string   | "User2"                                  | Chat IDs                    |
| originalMessageId | integer  | 123                                      | Message IDs                 |
| clientMessageId   | string   | "1233fdsa3"                              | Message IDs                 |
| message           | string   | "Hello, World!"                          | Any string                  |
| attachments?      | array    | See ["Attachments"](types/attachment.md) | Array of Attachment objects |

**response payload schema:**

| Field           | Type    | Example                                | Possible Values |
| --------------- | ------- | -------------------------------------- | --------------- |
| messageId       | integer | 123                                    | Message IDs     |
| timestamp       | integer | 1700500000000                          |                 |
| clientMessageId | string  | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4" | Any string      |


## likeStory

**request payload schema:**

| Field      | type     | data type | description                                                 |
|-----------|----------|-----------|-------------------------------------------------------------|
| userId    | required | string    | ID of the story's author                                    |
| storyId   | required | string    | ID of the story                                             |
| reaction  | required | string    | The emoji reaction (e.g., `👍`)                             |
| isSet     | required | boolean   | `true` to add a reaction, `false` to remove it             |

## viewStory

**request payload schema:**

| Field      | type     | data type | description                                                 |
|-----------|----------|-----------|-------------------------------------------------------------|
| userId    | required | string    | ID of the story's author                                    |
| storyId   | required | string    | ID of the story                                             |

## purchaseStory

**request payload schema:**

| Field      | type     | data type | description                                                 |
|-----------|----------|-----------|-------------------------------------------------------------|
| userId    | required | string    | ID of the story's author                                    |
| storyId   | required | string    | ID of the story                                             |

## hideStories

**request payload schema:**

| Field      | type     | data type | description                                    |
|-----------|----------|-----------|------------------------------------------------|
| userId    | required | string    | ID of the story's author                       |
| isHidden  | required | boolean   | `true` to hide stories, `false` to unhide them |

## reaction

**request payload schema:**

| Field           | type     | data type | description                         |
|-----------------|----------|-----------|-------------------------------------|
| chatId          | required | string    | chat ID                             | 
| messageId       | required | number    | message ID in the chat              | 
| reaction        | optional | string    | string representation of reaction   | 
| isSet           | required  | boolean   | set or remove reaction              | 
| clientMessageId | required  | string   | clientMessageId of original message | 
