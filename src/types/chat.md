# Chat

| Field          | Type                              | Example                                    |
| -------------- | --------------------------------- | ------------------------------------------ |
| chatId         | string                            | "User2"                                    |
| photoUrl       | string                            | "iambig.ai/public/de5d8114f9" |
| type           | "dialog", "group", "channel",'ai' | "dialog"                                   |
| lastMessageId? | integer                           | 1000                                       |
| meta           | [Meta](#meta)                     | ...                                        |

## Meta

[DialogMeta](#dialogmeta) | [GroupMeta](#groupmeta)

## DialogMeta

| Field        | Type   | Example     |
| ------------ | ------ | ----------- |
| firstName?   | string | "Alexander" |
| lastName?    | string | "Kuzopi"    |
| username?    | string | "User2"     |
| phoneNumber? | string | "User2"     |

## GroupMeta

| Field        | Type     | Example                                           |
| ------------ | -------- | ------------------------------------------------- |
| name         | string   | "group1"                                          |
| owner        | string   | "User1"                                           |
| participants | string[] | ["Xp6ucajJ39P8rhjtgbHba", "XWLGmb-grXAZxG1te4NKr] |
| createdAt    | integer  | 1663272000000                                     |
