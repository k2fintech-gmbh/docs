# Message

## Dialog message

| Field         | Type      | Example                                     | Possible Values             |
| ------------- | --------- | ------------------------------------------- | --------------------------- |
| messageId     | integer   | 123                                         | Message IDs                 |
| message?      | string    | "Hello"                                     | Any string                  |
| sender        | string    | "User1"                                     | User IDs                    |
| atttachments? | array     | See ["Attachments"](../types/attachment.md) | Array of Attachment objects |
| read?         | timestamp | 123456789                                   | Timestamp                   |
| dlvrd?        | timestamp | 123456789                                   | Timestamp                   |
| createdAt     | timestamp | 123456789                                   | Timestamp                   |
| updatedAt?    | timestamp | 123456789                                   | Timestamp                   |
| deletedAt?    | timestamp | 123456789                                   | Timestamp                   |

## Group chat message

| Field         | Type                        | Example                                             | Possible Values             |
| ------------- | --------------------------- | --------------------------------------------------- | --------------------------- |
| messageId     | integer                     | 123                                                 | Message IDs                 |
| message?      | string                      | "Hello"                                             | Any string                  |
| sender        | string                      | "User1"                                             | User IDs                    |
| atttachments? | array                       | See ["Attachments"](../types/attachment.md)         | Array of Attachment objects |
| delivering    | [Delivering](#delivering)[] | `[{userId:"User1", dlvrd: 12312312, read: 123123}]` |
| createdAt     | timestamp                   | 123456789                                           | Timestamp                   |
| updatedAt?    | timestamp                   | 123456789                                           | Timestamp                   |
| deletedAt?    | timestamp                   | 123456789                                           | Timestamp                   |

## Delivering

| Field  | Type      | Example   | Possible Values |
| ------ | --------- | --------- | --------------- |
| userId | string    | "User1"   | User IDs        |
| dlvrd? | timestamp | 123456789 | Timestamp       |
| read?  | timestamp | 123456789 | Timestamp       |
