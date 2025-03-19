# Attachment

| Field    | Type   | Example                               | Possible Values          |
| -------- | ------ | ------------------------------------- | ------------------------ |
| type     | string | "image"                               | "file", "image", "video" |
| id       | string | "file123"                             | Attachment IDs           |
| filename | string | "greeting.png"                        | File names               |
| url      | string | "https:\/\/example.com/greeting.png"    | URLs                     |
| meta     | object | See "Specific Attachment metas" below | Depends on type          |

## Specific Attachment metas

### File meta

| Field     | Type    | Example | Possible Values                    |
| --------- | ------- | ------- | ---------------------------------- |
| extension | string  | "pdf"   | "pdf", "txt", "docx", "xlsx", etc. |
| size      | integer | 2048000 | File size in bytes                 |

### Image meta

| Field    | Type    | Example     | Possible Values                        |
| -------- | ------- | ----------- | -------------------------------------- |
| mimetype | string  | "image/png" | "image/jpeg", "image/png", "image/gif" |
| width    | integer | 800         | Image width in pixels                  |
| height   | integer | 600         | Image height in pixels                 |
| size     | integer | 350000      | File size in bytes                     |

### Video meta

| Field    | Type    | Example     | Possible Values          |
| -------- | ------- | ----------- | ------------------------ |
| mimetype | string  | "video/mp4" | "video/mp4", "video/gif" |
| width    | integer | 1920        | Video width in pixels    |
| height   | integer | 1080        | Video height in pixels   |
| size     | integer | 5000000     | File size in bytes       |
| duration | integer | 120         | Duration in seconds      |

### Voice meta

| Field    | Type    | Example     | Possible Values          |
| -------- | ------- | ----------- | ------------------------ |
| duration | integer | 120         | Duration in seconds      |

### Audio meta

| Field    | Type    | Example     | Possible Values          |
| -------- | ------- | ----------- | ------------------------ |
| duration | integer | 120         | Duration in seconds      |

### Call meta

| Field         | Type          | Example                      | Possible Values                     |
|---------------|---------------|------------------------------|-------------------------------------|
| callId        | string        | "SdewSF32DF"                 | "video/mp4", "video/gif"            |
| direction     | CallDirection | "incoming"                   | 'incoming' , 'outgoing'             |
| status        | CallStatus    | "missed"                     | 'missed', 'received', 'in progress' |
| callType      | CallType      | "video"                      | 'video', 'audio'                    |
| closedAt      | number        | 5000000                      | timestamp                           |
| isGroup       | boolean       | false                        | boolean                             |
| caller        | string        | "SdewSF32DF"                 | user ID's                           |
| headMessageId | number        | 120                          | Duration in seconds                 |
| groupedAt     | number        | 5000000                      | timestamp                           |
| duration      | number        | 120                          | Duration in seconds                 |
| participants  | string[]      | ["SdewSF32DF", "SdewSF32DF"] | user ID's                           |

### Contact meta

| Field       | Type    | Example       | Possible Values |
|-------------|---------|---------------|-----------------|
| userId      | string  | "SdewSF32DF"  | user ID's       |
| name        | string  | "Peter"       | Name, Surname   |
| phoneNumber | string  | "+878831080"  | phone number    |
| avatarUrl   | string  | "https://..." | url             |

### Geo meta

| Field     | Type    | Example         | Possible Values |
|-----------|---------|-----------------|-----------------|
| latitude  | number  |                 | latitude        |
| longitude | number  |                 | longitude       |
| address   | string  | 'Some City,...' | Address (text)  |

              