# Examples

## Example: Sending a New Message with Attachments

Client to Server: User1 Sends a Message with an Image to User2

```json
{
  "type": "request",
  "timestamp": 1700300000000,
  "id": "req004",
  "payloadType": "newMessage",
  "payload": {
    "chatId": "User2",
    "message": "Check out this photo!",
    "attachments": [
      {
        "type": "image",
        "id": "img123",
        "filename": "photo.jpg",
        "url": "<http://example.com/photo.jpg>",
        "payload": {
          "mimetype": "image/jpeg",
          "width": 1024,
          "height": 768,
          "size": 204800
        }
      }
    ]
  }
}

```

Server to User2: New Message Event with Image

```json
{
  "type": "event",
  "timestamp": 1700300000100,
  "id": "evt004",
  "eventType": "newMessage",
  "payload": {
    "chatId": "User1",
    "userId": "User1",
    "messageId": 125,
    "message": "Check out this photo!",
    "attachments": [
      {
        "type": "image",
        "id": "img123",
        "filename": "photo.jpg",
        "url": "<http://example.com/photo.jpg>",
        "payload": {
          "mimetype": "image/jpeg",
          "width": 1024,
          "height": 768,
          "size": 204800
        }
      }
    ]
  }
}

```

## Example: User Status Notifications

### Online Notification

Server to clients: User1 Comes Online

```json
{
  "type": "event",
  "timestamp": 1700400000000,
  "id": "evt005",
  "eventType": "online",
  "payload": {
    "userId": "User1"
  }
}

```

### Offline Notification

Server to All Clients: User1 Goes Offline

```json
{
  "type": "event",
  "timestamp": 1700400000500,
  "id": "evt006",
  "eventType": "offline",
  "payload": {
    "userId": "User1"
  }
}

```

---

## Example: Typing Notification

### Client to Server: User1 is Typing a Message to User2

```json
{
  "type": "request",
  "timestamp": 1700500000000,
  "id": "req005",
  "payloadType": "typing",
  "payload": {
    "chatId": "User2"
  }
}

```

### Server to User2: Typing Event Notification

```json
{
  "type": "event",
  "timestamp": 1700500000100,
  "id": "evt007",
  "eventType": "typing",
  "payload": {
    "userId": "User1",
    "chatId": "User1"
  }
}

```

## Request Payload Examples

### 1. Mark Delivered Request Example

Client to Server: User1 Marks a Message as Delivered to User2

```json
{
  "type": "request",
  "timestamp": 1700200000000,
  "id": "req003",
  "payloadType": "dlvrd",
  "payload": {
    "chatId": "User2",
    "messageId": 123
  }
}
```

### Mark Read Request Example

Client to Server: User1 Marks a Message as Read to User2

```json
{
  "type": "request",
  "timestamp": 1700250000000,
  "id": "req004",
  "payloadType": "read",
  "payload": {
    "chatId": "User2",
    "messageId": 124
  }
}
```

### Delete Message Request Example

Client to Server: User1 Requests Deletion of a Message Sent to User2

```json
{
  "type": "request",
  "timestamp": 1700300000000,
  "id": "req005",
  "payloadType": "delete",
  "payload": {
    "chatId": "User2",
    "messageId": 125
  }
}
```

---

## Server Event Examples

### Delivered Event Example

Server to User2: Notification that Message from User1 Has Been Delivered

```json
{
  "type": "event",
  "timestamp": 1700200000100,
  "id": "evt003",
  "eventType": "dlvrd",
  "payload": {
    "chatId": "User1",
    "messageId": 123
  }
}
```

### Read Event Example

Server to User2: Notification that Message from User1 Has Been Read

```json
{
  "type": "event",
  "timestamp": 1700250000100,
  "id": "evt004",
  "eventType": "read",
  "payload": {
    "chatId": "User1",
    "messageId": 124
  }
}
```

### Delete Event Example

Server to User2: Notification that a Message from User1 Has Been Deleted

```json
{
  "type": "event",
  "timestamp": 1700300000100,
  "id": "evt005",
  "eventType": "delete",
  "payload": {
    "chatId": "User1",
    "messageId": 125
  }
}
```
