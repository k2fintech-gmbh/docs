# Chat

`messagePermissions` returned with Group Chat in reply to GET /chat 

| Field                | Type                                                           | Example                                 |
|----------------------|----------------------------------------------------------------| --------------------------------------- |
| chatId               | string                                                         | "User2"                                 |
| photoUrl             | string                                                         | "iambig.ai/public/de5d8114f9"           |
| name                 | string                                                         | "Stive"                                 |
| type                 | "dialog", "group", "channel",'ai'                              | "dialog"                                |
| lastMessageId?       | integer                                                        | 1000                                    |
| missed               | integer                                                        | 0                                       |
| firstMissed?         | string                                                         | clientMessageId of first missed (unread) |
| meta                 | [Meta](../chat#meta)                                           | ...                                     |
| lastMessageText?     | string                                                         | "Hello, World!"                   | The text of the last message in the chat.                                |
| lastMessageTime?     | Date                                                           | 1700000000000                     | The timestamp of the last message. Use Date for DateTime representation. |
| lastMessageAuthor?   | string                                                         | "User1"                           | Optional author of the last message.                                     |
| lastMessageStatus?   | MessageStatus                                                  | "read"                            | "read" \| "unread" \| "undelivered" \| "deleted"                         |
| verified?            | boolean                                                        | true                              | Indicates whether the chat is verified.                                  |
| isMine?              | boolean                                                        | true                              | Indicates whether the chat item belongs to the current user.             |
| attachmentType?      | "file", "image", "video", "sticker", "voice", "contact", "geo" | "file"                            |                                                                          |
| participantCount?    | number                                                         | 5                                 |                                                                          |
| messagePermissions?  | [MessagePermissions](../chat#messagepermissions)               |                                   |                                                                          |

## Meta

[DialogMeta](#dialogmeta) | [GroupMeta](../chat#groupmeta)

## DialogMeta

| Field        | Type    | Example                 |
| ------------ | ------- | ----------------------- |
| firstName?   | string  | "Alexander"             |
| lastName?    | string  | "Kuzopi"                |
| username?    | string  | "User2"                 |
| phoneNumber? | string  | "User2"                 |
| verified?    | bool    | true                    |
| lastSeen?    | integer | only for offline status |

## GroupMeta

| Field        | Type                         | Example                                                                                                    |
| ------------ |------------------------------| ---------------------------------------------------------------------------------------------------------- |
| owner        | string                       | "User1"                                                                                                    |
| participants | [Profile](../chat#profile)[] | [{ "id": "weEwdx2","firstName": "Aleksandr","avatarUrl": "https://pics.png/png.png", "verified": "true" }] |
| createdAt    | integer                      | 1663272000000                                                                                              |

## Administrator

| Field   | Type                     | Example |
|---------|--------------------------|---------|
| id      | string                   | "User1" |
| rights  | [Rights](../chat#rights) | {}      |

## Rights

| Field       | Type   | Example |
|-------------|--------|---------|
| editGroup   | bool   | false   |
| editStories | bool   | false   |
| inviteUsers | bool   | false   |
| makeAdmin   | bool   | false   |
| payments    | bool   | false   |

## ChatInfo
(`linkedChannel` - may be present in Chats, means that this chat is comments chat for Channel)                    
(`linkedChat` - may be present in Channel, means that comments for this Channel goes to that Chat)                    

| Field            | Type                                               | Example                       |
|------------------|----------------------------------------------------|-------------------------------|
| chatId           | string                                             | "JC0TvKi3f2bIQtBcW1jIn"       |
| photoUrl         | string                                             | "iambig.ai/public/de5d8114f9" |
| type             | string                                             | "group"                       |
| name             | string                                             | "Group Name"                  |
| username         | string                                             | "@userName"                   |
| participantCount | number                                             | 5                             |
| isPrivate        | bool                                               | false                         |
| isPaid           | bool                                               | false                         |
| editPermissions  | [ChatEditPermissions](../chat#chateditpermissions) | "{}"                          |
| linkedChannel    | [LinkedChannel](../chat#linkedchannel)             | "{}"                          |
| linkedChat       | [LinkedChat](../chat#linkedchat)                   | "{}"                          |

## ChatEditPermissions

| Field           | Type   | Example | Default |
|-----------------|--------|---------|---------|
| addAdmins       | bool   | false   | false   |
| addMembers      | bool   | false   | true    |
| changeType      | bool   | false   | false   |
| editInfo        | bool   | true    | false   |
| editPermissions | bool   | true    | false   |
| editPaid        | bool   | false   | false   |
| viewAdmins      | bool   | false   | false   |
| deleteGroup     | bool   | false   | false   |

## MessagePermissions

| Field            | Type   | Example | Default |
|------------------|--------|---------|---------|
| allowMessages    | bool   | false   | true    |
| allowMedia       | bool   | false   | true    |
| allowPinMessages | bool   | false   | false   |
| allowCopy        | bool   | true    | true    |

## LinkedChannel
(only Owner can see)

| Field            | Type     | Example                    | Default |
|------------------|----------|----------------------------|---------|
| channelId        | string   | "KJHyugdasht45"            |         |
| channelName      | string   | "Cool Channel"             |         |
| channelPhotoUrl? | string   | "https://pics.png/png.png" |         |

## LinkedChat
(only Owner can see)

| Field          | Type     | Example                    | Default |
|----------------|----------|----------------------------|---------|
| chatId         | string   | "KJHyugdasht45"            |         |
| chantName      | string   | "Cool comments Chat"       |         |
| chantPhotoUrl? | string   | "https://pics.png/png.png" |         |

## Profile

| Field         | Type   | Example                    |
|---------------| ------ | -------------------------- |
| firstName?    | string | "Alexander"                |
| lastName?     | string | "Kuzopi"                   |
| username?     | string | "User2"                    |
| phoneNumber?  | string | "User2"                    |
| verified?     | bool   | true                       |
| avatarUrl?    | string | "https://pics.png/png.png" |
| lastSeen?     | number | 1700000000000              |
| onlineHidden? | bool   | false                      |
| permitCall?   | bool   | false                      |
| permitInvite? | bool   | false                      |
| permitStatus? | bool   | false                      |
| isAdmin?      | bool   | false                      |
| isMyContact?  | bool   | false                      |

Profile data in responses may be filtered based on user's privacy settings.\
`phoneNumber` may be replaced with empty string ` '' ` \
`avatarUrl` may be excluded \
`username` may be excluded

## InviteLink

| Field           | Type    | Example                 |
|-----------------|---------|-------------------------|
| id              | string  | "JC0TvKi3f2bIQtBcW1jIn" |
| name            | string  | "test link"             |
| ttl             | number  | 0                       |
| requireApproval | bool    | true                    |
| limit           | number  | 100                     |
| createdAt       | number  | 1700000000000           |
| uses            | number  | 10                      |


## ChatSettings

`privateAllowCopy` & `privateApproveMessaging` can be set only via **/chat/grouptype**

| Field                   | Type    | Example                 |
|-------------------------|---------|-------------------------|
| chatId                  | string  | "JC0TvKi3f2bIQtBcW1jIn" |
| isHiddenHistory         | bool    | "test link"             |
| allowMessages           | bool    | 0                       |
| allowMedia              | bool    | true                    |
| allowAddUsers           | bool    | 100                     |
| allowPinMessages        | bool    | 1700000000000           |
| allowEditGroup          | bool    | 10                      |
| autoDeleteMessages      | number  | 10                      |
| privateAllowCopy        | bool    | 10                      |
| privateApproveMessaging | bool    | 10                      |

## PaidSettings

| Field               | Type                                                                 | Example                 |
|---------------------|----------------------------------------------------------------------|-------------------------|
| chatId              | string                                                               | "JC0TvKi3f2bIQtBcW1jIn" |
| isPaid              | bool                                                                 | false                   |
| paymentOption       | 'paidNoCalls', 'paidWithCalls', 'paidWithCallsDiff', 'paidCallsOnly' | 'paidWithCalls'         |
| paymentMethod       | 'subscription', 'userDefined'                                        | 'subscription'          |
| oneMonthChatPrice   | number                                                               | 0                       |
| oneMonthCallsPrice  | number                                                               | 0                       |
| threeMonthDiscount  | number                                                               | 0                       |
| sixMonthDiscount    | number                                                               | 0                       |
| nineMonthDiscount   | number                                                               | 0                       |
| twelveMonthDiscount | number                                                               | 0                       |
| wallet              | object                                                               | {}                      |
