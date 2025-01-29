# Contacts

## Phonebook contact

| Field       | Type   | Example      |
| ----------- | ------ |--------------|
| firstName?  | string | "Alexander"  |
| lastName?   | string | "Kuzopi"     |
| phoneNumber | string | "User2"      |

## Profile

| Field        | Type   | Example                    |
|--------------|--------|----------------------------|
| id           | string | "userIdString"             |
| firstName?   | string | "Alexander"                |
| lastName?    | string | "Kuzopi"                   |
| username?    | string | "User2"                    |
| phoneNumber? | string | "User2"                    |
| verified?    | bool   | true                       |
| avatarUrl?   | string | "https://pics.png/png.png" |
| lastSeen?    | number | 1700000000000              |

Profile data in responses may be filtered based on user's privacy settings.\
`phoneNumber` may be replaced with empty string ` '' ` \
`avatarUrl` may be excluded  \
`username` may be excluded  \
`lastSeen` may be added if contacts requested with ChatList info \
If no `lastSeen` - means that user (other dialog member) is `Online` \
lastSeen value = `1719781200000` - means that user's privacy does not allow current user to see his Online status

