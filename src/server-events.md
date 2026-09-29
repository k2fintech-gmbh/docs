# Server events

Каждое сообщение сокета:

| Field     | Type   | Example        | Possible Values                                 |
| --------- | ------ | -------------- | ----------------------------------------------- |
| type      | string | "event"        | "event"                                         |
| eventType | string | "new"          | имя события ниже                                |
| id        | string | "a1b2c3d4e5"   | id пакета                                       |
| timestamp | number | 12345.67       | монотонное время сервера, не unix               |
| ackKey?   | string | "aiNew-chat:1" | ключ подтверждения                              |
| payload   | object |                | поля события; у `chats`, `eventsBatch` — массив |

Для зашифрованных диалогов `new`, `edit`, `delete`, `reaction`, `purgeMessages`, `deleteChat`, `refreshKeys` уходят внутри `eventsBatch`. Пока клиент не прислал `decryptAck`, сервер может дополнительно сразу прислать `new`.

## new

Новое сообщение. Для звонка `type` = `"call"`, а `payload` — объект звонка (см. `update`).

| Field                       | Type    | Example                                  | Possible Values                                      |
| --------------------------- | ------- | ---------------------------------------- | ---------------------------------------------------- |
| chatId                      | string  | "User1"                                  | Chat IDs                                             |
| chatName?                   | string  | "Team"                                   | имя группы                                           |
| sender                      | object  | см. Participant                          | Participant                                          |
| messageId                   | integer | 124                                      | Message IDs                                          |
| clientMessageId             | string  | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4"   | Any string                                           |
| message?                    | string  | "Hello, World!"                          | Any string                                           |
| attachments?                | array   | See ["Attachments"](types/attachment.md) | Array of Attachment objects                          |
| timestamp                   | integer | 1700500000000                            | Unix timestamp                                       |
| missed                      | integer | 1                                        | Missed messages                                      |
| firstMissed?                | string  | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4"   | clientMessageId первого непрочитанного               |
| status?                     | string  | "read"                                   | "read", "unread", "undelivered", "deleted"           |
| totalMissed                 | integer | 3                                        | непрочитанные по всем чатам                          |
| replyTo?                    | object  |                                          | ReplyTo                                              |
| forwarded?                  | boolean | true                                     |                                                      |
| forwardedFrom?              | object  |                                          | `{ chat, participant, messageId }`                   |
| payload?                    | object  |                                          | edit / delete / call / `{ sources }` для AI          |
| type?                       | string  | "call"                                   | "new", "delete", "edit", "call", "like", "ai_answer" |
| muted?                      | boolean | false                                    | чат замьючен                                         |
| groupAvatarUrl?             | string  | "https://example.com/a.jpg"              | URL                                                  |
| needApprove?                | boolean | true                                     |                                                      |
| linkPreview?                | boolean | true                                     |                                                      |
| isStreaming?                | boolean | true                                     | AI-ответ ещё стримится                               |
| linkedMessage?              | string  |                                          |                                                      |
| shouldApplyToClientStorage? | boolean | true                                     |                                                      |
| emptyMessage?               | boolean | false                                    |                                                      |

Participant (`sender`):

| Field             | Type    | Example                     | Possible Values                   |
| ----------------- | ------- | --------------------------- | --------------------------------- |
| id                | string  | "User1"                     | User IDs                          |
| name              | string  | "John Doe"                  | Any string                        |
| avatarUrl?        | string  | "https://example.com/a.jpg" | URL                               |
| verified?         | boolean | true                        |                                   |
| verificationType? | string  | "green"                     | "none", "green", "gold", "silver" |
| isAdmin?          | boolean | false                       |                                   |
| readonly?         | boolean | false                       |                                   |

ReplyTo:

| Field           | Type    | Example       | Possible Values |
| --------------- | ------- | ------------- | --------------- |
| messageId       | integer | 120           | Message IDs     |
| clientMessageId | string  | "..."         | Any string      |
| sender          | string  | "User1"       | User IDs        |
| createdAt       | integer | 1700500000000 | Unix timestamp  |
| message?        | string  | "Hi"          | Any string      |
| deletedAt?      | integer | 1700500000000 | Unix timestamp  |

## chats

Полный список чатов: новый чат, смена инфо, удаление. `payload` — массив `ChatListItem`, не один объект.

| Field              | Type    | Example        | Possible Values                                            |
| ------------------ | ------- | -------------- | ---------------------------------------------------------- |
| type               | string  | "dialog"       | "dialog", "group", "channel", "favorites", "ai"            |
| id                 | string  | "User1"        | Chat IDs                                                   |
| name               | string  | "John Doe"     | Any string                                                 |
| username?          | string  | "john"         | Any string                                                 |
| photoUrl?          | string  | "https://..."  | URL or null                                                |
| lastMessageId?     | integer | 124            | Message IDs                                                |
| lastMessageText?   | string  | "Hello"        | Any string                                                 |
| lastMessageTime    | integer | 1700500000000  | Unix timestamp                                             |
| lastMessageAuthor? | string  | "User1"        | User IDs                                                   |
| lastMessageStatus? | string  | "read"         | "read", "unread", "undelivered", "deleted"                 |
| missed             | integer | 1              | Missed messages                                            |
| firstMissed?       | string  | "66d93f9b-..." | clientMessageId                                            |
| verified?          | boolean | true           |                                                            |
| verificationType?  | string  | "green"        | "none", "green", "gold", "silver"                          |
| isMine             | boolean | false          |                                                            |
| attachment?        | object  |                | `{ type, count, fileName?, contactName?, voiceDuration? }` |
| lastSeen?          | integer | 1700500000000  | Unix timestamp                                             |
| onlineHidden?      | boolean | true           |                                                            |
| participantCount?  | integer | 12             |                                                            |
| payload?           | object  |                | CallPayload, если последнее сообщение — звонок             |
| hidden?            | boolean | false          |                                                            |
| reaction?          | string  | "👍"           |                                                            |
| liked?             | boolean | true           | кто-то поставил реакцию на моё сообщение                   |
| likedMessageId?    | integer | 120            |                                                            |
| likedMessageText?  | string  | "Hi"           |                                                            |
| likedAuthor?       | string  | "User2"        | User IDs                                                   |
| likedUserName?     | string  | "Jane"         |                                                            |
| isPinned?          | boolean | false          |                                                            |
| isMuted?           | boolean | false          |                                                            |
| unread?            | boolean | true           |                                                            |
| isMyContact?       | boolean | true           |                                                            |
| isBlocked?         | boolean | true           | только если я заблокировал собеседника                     |
| needApprove?       | boolean | true           |                                                            |
| blockCalls?        | boolean | false          |                                                            |
| blockMessages?     | boolean | false          |                                                            |
| isAdmin?           | boolean | false          |                                                            |
| mention?           | boolean | true           |                                                            |
| mentionMessageId?  | integer | 130            |                                                            |
| mentionAuthor?     | string  | "User2"        | User IDs                                                   |
| isMentor?          | boolean | false          |                                                            |
| allowAI?           | boolean | true           | AI-ответы включены в чате                                  |
| isSupport?         | boolean | true           | только у чата поддержки                                    |

## edit

Сообщение отредактировано.

| Field                   | Type    | Example                                | Possible Values           |
| ----------------------- | ------- | -------------------------------------- | ------------------------- |
| chatId                  | string  | "User1"                                | Chat IDs                  |
| userId?                 | string  | "User1"                                | кто редактировал          |
| messageId               | integer | 125                                    | id сервисного сообщения   |
| clientMessageId         | string  | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4" |                           |
| originalMessageId       | integer | 124                                    | редактируемое сообщение   |
| originalClientMessageId | string  | "440C17F2-FA09-48F8-8273-E3990FE0BAC5" |                           |
| message                 | string  | "Updated text"                         | Any string                |
| attachments?            | array   |                                        | Attachment[]              |
| timestamp               | integer | 1700500000000                          | Unix timestamp            |
| payload?                | object  |                                        | edit / delete / call / AI |
| linkPreview?            | boolean | true                                   |                           |
| isStreamingComplete?    | boolean | true                                   | AI дописал ответ          |

## delete

| Field                   | Type    | Example                                | Possible Values         |
| ----------------------- | ------- | -------------------------------------- | ----------------------- |
| chatId                  | string  | "User1"                                | Chat IDs                |
| messageId               | integer | 126                                    | id сервисного сообщения |
| clientMessageId         | string  | "66d93f9b-a8ff-4f18-a092-c19bdeb31fa4" |                         |
| originalMessageId       | integer | 124                                    | удалённое сообщение     |
| originalClientMessageId | string  | "440C17F2-FA09-48F8-8273-E3990FE0BAC5" |                         |

## deleteChat

Чат удалён у этого пользователя. Для AI-чата вместо этого приходит `chats`.

| Field     | Type    | Example | Possible Values |
| --------- | ------- | ------- | --------------- |
| chatId    | string  | "User1" | Chat IDs        |
| messageId | integer | -1      | всегда -1       |

## update

Патч уже существующего сообщения. Сейчас так обновляется звонок: смена audio → video и завершение звонка.

| Field           | Type    | Example                            | Possible Values     |
| --------------- | ------- | ---------------------------------- | ------------------- |
| chatId          | string  | "User1"                            | Chat IDs            |
| timestamp       | integer | 1700500000000                      | Unix timestamp      |
| messageId       | integer | 130                                | id апдейта          |
| clientMessageId | string  | "qzjdfsdfvpFe8Da3Nlt2"             |                     |
| headMessageId   | integer | 124                                | id сообщения звонка |
| sender          | object  | Participant                        |                     |
| type?           | string  | "call"                             | "call"              |
| update          | object  | `{ payload: CallPayload partial }` |                     |

`update.payload` для звонка:

| Field         | Type    | Example       | Possible Values                     |
| ------------- | ------- | ------------- | ----------------------------------- |
| callId        | string  | "call-1"      | Call IDs                            |
| callType?     | string  | "video"       | "video", "audio"                    |
| status?       | string  | "received"    | "missed", "received", "in progress" |
| direction?    | string  | "incoming"    | "incoming", "outgoing"              |
| closedAt?     | integer | 1700500000000 | Unix timestamp                      |
| duration?     | integer | 42            | секунды                             |
| isVideo?      | boolean | true          |                                     |
| caller?       | string  | "User1"       | User IDs                            |
| participants? | array   | ["User1"]     | User IDs                            |
| users?        | array   |               | CallParticipant[]                   |

Звонок как `new` (`type: "call"`) несёт тот же `CallPayload` плюс `chatId`, `messageId`, `clientMessageId`, `missed`, `sender`, `timestamp`.

## calls

Активные звонки пользователя. Приходит при подключении, только если список не пуст. `payload` — объект, не массив.

| Field | Type  | Example | Possible Values |
| ----- | ----- | ------- | --------------- |
| calls | array |         | см. элемент     |

Элемент `calls[]`:

| Field   | Type    | Example  | Possible Values |
| ------- | ------- | -------- | --------------- |
| callId  | string  | "call-1" | Call IDs        |
| chatId  | string  | "User2"  | Chat IDs        |
| isVideo | boolean | true     |                 |
| isGroup | boolean | false    |                 |
| caller  | string  | "User1"  | User IDs        |

## newCallInvites

В текущий звонок добавили участников. Только если сокет онлайн.

| Field        | Type   | Example  | Possible Values   |
| ------------ | ------ | -------- | ----------------- |
| callId       | string | "call-1" | Call IDs          |
| chatId       | string | "User2"  | Chat IDs          |
| inviter      | string | "User1"  | User IDs          |
| participants | array  |          | CallParticipant[] |

CallParticipant: `id`, `token`, `uid`, `connectedAt?`, `disconnectedAt?`, `firstConnectedAt?`, `acceptedAt?`, `invited?`, `duration?`.

## userInvitedToCall

Конкретного пользователя позвали в звонок.

| Field       | Type   | Example  | Possible Values |
| ----------- | ------ | -------- | --------------- |
| callId      | string | "call-1" | Call IDs        |
| chatId      | string | "User2"  | Chat IDs        |
| inviter     | string | "User1"  | User IDs        |
| invitedUser | object |          | CallParticipant |

## callAccepted

Собеседник нажал «Ответить». Вход в Agora может быть позже.

| Field      | Type   | Example  | Possible Values |
| ---------- | ------ | -------- | --------------- |
| callId     | string | "call-1" | Call IDs        |
| chatId     | string | "User2"  | Chat IDs        |
| acceptedBy | string | "User2"  | User IDs        |

## online

| Field     | Type    | Example       | Possible Values |
| --------- | ------- | ------------- | --------------- |
| userId    | string  | "User1"       | User IDs        |
| lastSeen? | integer | 1700500000000 | Unix timestamp  |

## offline

| Field         | Type    | Example       | Possible Values                      |
| ------------- | ------- | ------------- | ------------------------------------ |
| userId        | string  | "User1"       | User IDs                             |
| lastSeen      | integer | 1700500000000 | Unix timestamp                       |
| onlineHidden? | boolean | true          | статус скрыт настройками приватности |

!!! info "Offline Event Trigger"
Если от клиента нет ping 25 секунд, сокет закрывается и участникам уходит `offline`.

## typing

Для личного чата `userId` нет: `chatId` — это id печатающего. Для группы есть оба поля. Событие не буферизуется и не чаще раза в 1.5 с, пока `stop` не `true`.

| Field   | Type    | Example | Possible Values         |
| ------- | ------- | ------- | ----------------------- |
| chatId  | string  | "User2" | Chat IDs                |
| userId? | string  | "User2" | User IDs, только группы |
| stop?   | boolean | true    |                         |

## dlvrd

| Field           | Type    | Example       | Possible Values   |
| --------------- | ------- | ------------- | ----------------- |
| chatId          | string  | "User2"       | Chat IDs          |
| userId?         | string  | "User2"       | user (for groups) |
| messageId       | integer | 123           | Message IDs       |
| clientMessageId | string  | "123"         |                   |
| timestamp       | integer | 1700500000000 | Unix timestamp    |

## read

| Field           | Type    | Example       | Possible Values   |
| --------------- | ------- | ------------- | ----------------- |
| chatId          | string  | "User2"       | Chat IDs          |
| userId?         | string  | "User2"       | user (for groups) |
| messageId       | integer | 123           | Message IDs       |
| clientMessageId | string  | "123"         |                   |
| timestamp       | integer | 1700500000000 | Unix timestamp    |

## messagePinned

Закрепление и открепление. `pinnedAt` есть только при закреплении.

| Field     | Type    | Example       | Possible Values |
| --------- | ------- | ------------- | --------------- |
| chatId    | string  | "User2"       | Chat IDs        |
| userId    | string  | "User2"       | User IDs        |
| messageId | integer | 123           | Message IDs     |
| pinnedAt? | integer | 1700500000000 | Unix timestamp  |

## reaction

Добавленная или снятая реакция. При снятии `messageId` может отсутствовать.

| Field                   | Type    | Example                                | Possible Values                                  |
| ----------------------- | ------- | -------------------------------------- | ------------------------------------------------ |
| chatId                  | string  | "\_qzjQofkCDvpFe8Da3Nlt2"              | Chat IDs                                         |
| messageId?              | integer | 2                                      | id сервисного сообщения, если реакция поставлена |
| originalMessageId       | integer | 1                                      | сообщение, к которому реакция                    |
| userId                  | string  | "SYDY5qXsnv2aJnkoI9qF8E20"             | кто поставил                                     |
| authorId                | string  | "authorId"                             | автор сообщения                                  |
| timestamp               | integer | 1700500000000                          | Unix timestamp                                   |
| reaction                | string  | "👍"                                   | Any string                                       |
| isSet                   | boolean | true                                   | true — поставлена, false — снята                 |
| isNew                   | boolean | false                                  | первая реакция этого пользователя                |
| avatarUrl?              | string  | "https://server.com/avatar.jpg"        | URL                                              |
| userName?               | string  | "Jane"                                 |                                                  |
| clientMessageId         | string  | "440C17F2-FA09-48F8-8273-E3990FE0BAC5" |                                                  |
| originalClientMessageId | string  | "440C17F2-FA09-48F8-8273-E3990FE0BAC5" |                                                  |
| text?                   | string  | "Hello"                                | текст сообщения                                  |

## newStory

| Field         | Type    | Example                                     | Possible Values |
| ------------- | ------- | ------------------------------------------- | --------------- |
| userId?       | string  | "\_qzjQofkCDvpFe8Da3Nlt2"                   | User IDs        |
| chatId?       | string  | "groupId"                                   | Chat IDs        |
| storyId       | string  | "SYDY5qXsnv2aJnkoI9qF8E20"                  | Story IDs       |
| userAvatar?   | string  | "https://example.com/picture.jpg"           | URL             |
| storyPreview? | string  | "https://cloudflare.com/dsdfsf/preview.jpg" | URL             |
| fileLink?     | string  | "https://..."                               | URL             |
| duration?     | integer | 15                                          | секунды         |
| price?        | number  | 1.5                                         |                 |
| published?    | integer | 1700500000000                               | Unix timestamp  |
| name?         | string  | "Jane"                                      |                 |
| verified?     | boolean | true                                        |                 |

## removedStory

| Field   | Type   | Example                    | Possible Values |
| ------- | ------ | -------------------------- | --------------- |
| userId? | string | "\_qzjQofkCDvpFe8Da3Nlt2"  | User IDs        |
| chatId? | string | "groupId"                  | Chat IDs        |
| storyId | string | "SYDY5qXsnv2aJnkoI9qF8E20" | Story IDs       |

## joinRequest

Админам группы: вход по инвайту, который надо подтвердить.

| Field  | Type   | Example                    | Possible Values |
| ------ | ------ | -------------------------- | --------------- |
| chatId | string | "\_qzjQofkCDvpFe8Da3Nlt2"  | Chat IDs        |
| userId | string | "\_qzjQofkCDvpFe8Da3Nlt2"  | User IDs        |
| linkId | string | "SYDY5qXsnv2aJnkoI9qF8E20" | Invite Link IDs |

## privateGroupApproveRequest

Админам приватной группы: вход по инвайту, сообщение надо подтвердить.

| Field  | Type   | Example                    | Possible Values |
| ------ | ------ | -------------------------- | --------------- |
| chatId | string | "\_qzjQofkCDvpFe8Da3Nlt2"  | Chat IDs        |
| userId | string | "\_qzjQofkCDvpFe8Da3Nlt2"  | User IDs        |
| linkId | string | "SYDY5qXsnv2aJnkoI9qF8E20" | Invite Link IDs |

## purgeMessages

Все сообщения группы очищены. В зашифрованном диалоге приходит через `eventsBatch`, и тогда есть `messageId`.

| Field          | Type    | Example                   | Possible Values                |
| -------------- | ------- | ------------------------- | ------------------------------ |
| chatId         | string  | "\_qzjQofkCDvpFe8Da3Nlt2" | Chat IDs                       |
| userId         | string  | "\_qzjQofkCDvpFe8Da3Nlt2" | кто очистил                    |
| timestamp      | integer | 1700500000000             | Unix timestamp                 |
| lastMessageId? | integer | 0                         |                                |
| messageId?     | integer | 0                         | равен lastMessageId, для батча |

## readyVideo

Видео обработано Stream и готово к воспроизведению.
Если видео было вложением сообщения — `messageId` равен финальному id сообщения.
Для сторис `messageId` = `-1`, а `clientMessageId` — новый случайный id.

| Field           | Type    | Example                   | Possible Values  |
| --------------- | ------- | ------------------------- | ---------------- |
| fileId          | string  | "\_qzjQofkCDvpFe8Da3Nlt2" | Uploaded file ID |
| messageId       | integer | -1                        | Message IDs      |
| clientMessageId | string  | "qzjdfsdfvpFe8Da3Nlt2"    | string           |

## refreshKeys

Собеседник сбросил ключи диалога. История до `messageId` больше не расшифровывается этим ключом. Для зашифрованного чата приходит через `eventsBatch`.

| Field     | Type    | Example | Possible Values        |
| --------- | ------- | ------- | ---------------------- |
| chatId    | string  | "User2" | Chat IDs               |
| messageId | integer | 120     | последний id до сброса |

## eventsBatch

Пакет событий зашифрованного диалога, до 50 штук, по возрастанию `payload.messageId`. `payload` события — массив.

| Field     | Type   | Example | Possible Values                                                                   |
| --------- | ------ | ------- | --------------------------------------------------------------------------------- |
| eventType | string | "new"   | "new", "edit", "delete", "reaction", "purgeMessages", "deleteChat", "refreshKeys" |
| eventId   | string | "a1b2"  | id элемента батча                                                                 |
| payload   | object |         | payload соответствующего события, плюс `timestamp`                                |

## aiAnswerChunk

Кусок стримингового ответа AI. Следующий кусок уходит после ack с `ackKey` этого пакета.

| Field     | Type    | Example  | Possible Values |
| --------- | ------- | -------- | --------------- |
| chatId    | string  | "aiChat" | Chat IDs        |
| messageId | integer | 12       | Message IDs     |
| chunk     | string  | "Hello"  | фрагмент текста |

## ttsChunk

Кусок озвучки. `chunk` — `Uint8Array`; `JSON.stringify` превращает его в объект `{ "0": 255, "1": 128, ... }`.

| Field     | Type    | Example  | Possible Values |
| --------- | ------- | -------- | --------------- |
| chatId    | string  | "aiChat" | Chat IDs        |
| messageId | integer | 12       | Message IDs     |
| chunk     | bytes   |          | байты аудио     |

## regVerified

Пользователь набрал нужное число подтверждений. `payload` пустой: `{}`.

## walletBalanceUpdated

Только если сокет онлайн.

| Field        | Type   | Example    | Possible Values |
| ------------ | ------ | ---------- | --------------- |
| txId         | string | "tx-1"     |                 |
| walletName   | string | "Main"     |                 |
| walletId     | string | "wallet-1" |                 |
| value        | number | 10.5       |                 |
| type         | string | "transfer" | тип операции    |
| description? | string | "top up"   |                 |
| meta?        | object |            |                 |

## paymentFail

Оплата подписки на чат или сторис не прошла. `payload` — транзакция.

| Field                  | Type    | Example        | Possible Values                                                         |
| ---------------------- | ------- | -------------- | ----------------------------------------------------------------------- |
| id                     | string  | "tx-1"         |                                                                         |
| userId                 | string  | "User1"        | User IDs                                                                |
| type                   | string  | "subscription" | "purchase", "transfer", "twoStepTransfer", "subscription", "withdrawal" |
| status                 | string  | "failed"       | "pending", "processing", "completed", "failed", "cancelled"             |
| amount                 | number  | 10             |                                                                         |
| currency?              | string  | "EUR"          |                                                                         |
| convertedAmount?       | number  | 10             |                                                                         |
| convertedCurrency?     | string  | "USD"          |                                                                         |
| exchangeRate?          | number  | 1.1            |                                                                         |
| sourceWalletId?        | string  | "wallet-1"     |                                                                         |
| targetWalletId?        | string  | "wallet-2"     |                                                                         |
| targetUserId?          | string  | "User2"        | User IDs                                                                |
| externalTransactionId? | string  | "ext-1"        |                                                                         |
| createdAt              | integer | 1700500000000  | Unix timestamp                                                          |
| updatedAt              | integer | 1700500000000  | Unix timestamp                                                          |
| error?                 | string  | "declined"     |                                                                         |
| invoiceId?             | string  | "inv-1"        |                                                                         |
| metadata?              | object  |                | `{ objectType: "chat" \| "story", invoiceId, ... }`                     |

Те же поля транзакции у `subscriptionError`, `storyPaymentError`, `withdrawSuccess`, `withdrawError`, `transferSuccess`, `transferError`, `transferCancelled`.

## subscriptionActivated

Подписка на чат оплачена и активирована. `payload` — подписка, не транзакция.

| Field          | Type    | Example        | Possible Values                         |
| -------------- | ------- | -------------- | --------------------------------------- |
| id             | string  | "sub-1"        |                                         |
| chatId         | string  | "groupId"      | Chat IDs                                |
| status         | integer | 1              | 1 active, 0 pending, -1 ended           |
| periodType?    | integer | 1              | 1 = 1 мес, 2 = 3, 3 = 6, 4 = 9, 5 = год |
| createdAt?     | integer | 1700500000000  |                                         |
| startedAt?     | integer | 1700500000000  |                                         |
| validUntil?    | integer | 1700500000000  |                                         |
| cancelledAt?   | integer | 1700500000000  |                                         |
| paymentMethod? | string  | "subscription" |                                         |
| paymentValue?  | number  | 10             |                                         |
| paidCalls?     | boolean | true           |                                         |
| paidMessages?  | boolean | true           |                                         |

## subscriptionError

Деньги списались, но подписку активировать не удалось. `payload` — транзакция (см. `paymentFail`).

## storyPaid

Сторис оплачена. `payload` — сторис.

| Field        | Type    | Example                    | Possible Values |
| ------------ | ------- | -------------------------- | --------------- |
| storyId      | string  | "SYDY5qXsnv2aJnkoI9qF8E20" | Story IDs       |
| userId       | string  | "User1"                    | автор           |
| fileLink     | string  | "https://..."              | URL             |
| preview?     | string  | "https://..."              | URL             |
| duration     | integer | 15                         | секунды         |
| price?       | number  | 1.5                        |                 |
| published    | integer | 1700500000000              | Unix timestamp  |
| isForAll?    | boolean | true                       |                 |
| isSeen?      | boolean | false                      |                 |
| isPurchased? | boolean | true                       |                 |
| reaction?    | string  | "👍"                       |                 |

## storyPaymentError

Оплата сторис прошла, но отметить её оплаченной не удалось. `payload` — транзакция (см. `paymentFail`).

## withdrawSuccess

Вывод завершён (`status: "completed"`). `payload` — транзакция.

## withdrawError

Вывод не завершён. `payload` — транзакция.

## transferSuccess

Перевод завершён. Уходит и отправителю, и получателю. `payload` — транзакция.

## transferError

Перевод не прошёл. `payload` — транзакция.

## transferCancelled

Перевод отменён. Уходит отправителю. `payload` — транзакция.

## supportTicket

Только сокетам аккаунта поддержки (операторская админка).

| Field              | Type    | Example       | Possible Values                                                                                          |
| ------------------ | ------- | ------------- | -------------------------------------------------------------------------------------------------------- |
| ticketId           | string  | "ticket-1"    |                                                                                                          |
| userId             | string  | "User1"       | пользователь тикета                                                                                      |
| status             | string  | "waiting"     | "ai", "waiting", "operator", "closed"                                                                    |
| operatorId         | string  | "op-1"        | или null                                                                                                 |
| event              | string  | "escalated"   | "opened", "escalated", "taken", "reassigned", "closed", "auto_closed", "user_message", "support_message" |
| timestamp          | integer | 1700500000000 | Unix timestamp                                                                                           |
| targetOperatorIds? | array   | ["op-1"]      | при `reassigned`                                                                                         |
| messageId?         | integer | 40            |                                                                                                          |
| preview?           | string  | "Need help"   |                                                                                                          |
