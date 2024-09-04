# Chat

| Field          | Type                              | Example                                  |
| -------------- | --------------------------------- | ---------------------------------------- |
| chatId         | string                            | "User2"                                  |
| photoUrl       | string                            | "iambig.ai/public/de5d8114f9"            |
| name           | string                            | "Stive"                                  |
| type           | "dialog", "group", "channel",'ai' | "dialog"                                 |
| lastMessageId? | integer                           | 1000                                     |
| missed         | integer                           | 0                                        |
| firstMissed?   | string                            | clientMessageId of first missed (unread) |
| meta           | [Meta](#meta)                     | ...                                      |

## Meta

[DialogMeta](#dialogmeta) | [GroupMeta](#groupmeta)

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
| participants | [Profile](#profile)[] | [{ "id": "weEwdx2","firstName": "Aleksandr","avatarUrl": "https://pics.png/png.png", "verified": "true" }] |
| createdAt    | integer               | 1663272000000                                                                                              |

## Profile

| Field        | Type   | Example                    |
| ------------ | ------ | -------------------------- |
| firstName?   | string | "Alexander"                |
| lastName?    | string | "Kuzopi"                   |
| username?    | string | "User2"                    |
| phoneNumber? | string | "User2"                    |
| verified?    | bool   | true                       |
| avatarUrl?   | string | "https://pics.png/png.png" |