# Server event payloads

## new

| Field       | Type    | Example                 | Possible Values             |
| ----------- | ------- | ----------------------- | --------------------------- |
| chatId      | string  | "User1"                 | Chat IDs                    |
| userId      | string  | "User1"                 | User IDs                    |
| messageId   | integer | 124                     | Message IDs                 |
| message     | string  | "Hello, World!"         | Any string                  |
| attachments | array   | See "Attachments Table" | Array of Attachment objects |

## edit

| Field     | Type    | Example                | Possible Values |
| --------- | ------- | ---------------------- | --------------- |
| chatId    | string  | "User1"                | Chat IDs        |
| messageId | integer | 124                    | Message IDs     |
| message   | string  | "Updated message text" | Any string      |

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

## typing

| Field  | Type   | Example | Possible Values |
| ------ | ------ | ------- | --------------- |
| userId | string | "User2" | User IDs        |
| chatId | string | "User2" | Chat IDs        |

## dlvrd

| Field     | Type    | Example       | Possible Values |
| --------- | ------- | ------------- | --------------- |
| chatId    | string  | "User2"       | Chat IDs        |
| messageId | integer | 123           | Message IDs     |
| timestamp | integer | 1700500000100 |                 |

## read

| Field     | Type    | Example       | Possible Values |
| --------- | ------- | ------------- | --------------- |
| chatId    | string  | "User2"       | Chat IDs        |
| messageId | integer | 123           | Message IDs     |
| timestamp | integer | 1700500000100 |                 |
