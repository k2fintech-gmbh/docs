# Chat

| Field          | Type                              | Example                                  |
| -------------- |-----------------------------------| ---------------------------------------- |
| chatId         | string                            | "User2"                                  |
| photoUrl       | string                            | "iambig.ai/public/de5d8114f9"            |
| name           | string                            | "Stive"                                  |
| type           | "dialog", "group", "channel",'ai' | "dialog"                                 |
| lastMessageId? | integer                           | 1000                                     |
| missed         | integer                           | 0                                        |
| firstMissed?   | string                            | clientMessageId of first missed (unread) |
| meta           | [Meta](../chat#meta)               | ...                                      |

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

| Field        | Type                  | Example                                                                                                    |
| ------------ | --------------------- | ---------------------------------------------------------------------------------------------------------- |
| owner        | string                | "User1"                                                                                                    |
| participants | [Profile](../chat#profile)[] | [{ "id": "weEwdx2","firstName": "Aleksandr","avatarUrl": "https://pics.png/png.png", "verified": "true" }] |
| createdAt    | integer               | 1663272000000                                                                                              |

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

## Profile

| Field        | Type   | Example                    |
| ------------ | ------ | -------------------------- |
| firstName?   | string | "Alexander"                |
| lastName?    | string | "Kuzopi"                   |
| username?    | string | "User2"                    |
| phoneNumber? | string | "User2"                    |
| verified?    | bool   | true                       |
| avatarUrl?   | string | "https://pics.png/png.png" |

Profile data in responses may be filtered based on user's privacy settings.\
`phoneNumber` may be replaced with empty string ` '' ` \
`avatarUrl` may be excluded \
`username` may be excluded