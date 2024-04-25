# Chat

## common part

| Field    | Type                         | Example  |
| -------- | ---------------------------- | -------- |
| id       | string                       | "User2"  |
| photoUrl | string                       | "<https://dev.big.a-kuznetsov.cc/public/gb24ixCWLL25S-jtzYck7>"  |
| type     | "dialog", "group", "channel" | "dialog" |
| lastId?  | int                          | 1000     |
| ...      | ...                          | ...      |

## dialog

common part +

| Field        | Type   | Example     |
| ------------ | ------ | ----------- |
| firstName?   | string | "Alexander" |
| lastName?    | string | "Kuzopi"    |
| username?    | string | "User2"     |
| phoneNumber? | string | "User2"     |

## group

common part +

| Field        | Type   | Example     |
| ------------ | ------ | ----------- |
| groupName?   | string | "group"     |
