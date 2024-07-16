# dlvrd/read marks rules

!!! info inline end "dlvrd and read mark side effect"
    affected chatList and messages response

- If you mark message #5 as read, but it is not marked as delivered, both delivery and reading are marked.

- If you mark message #10 as read or delivered, and before that only message #5 was marked, then messages #6,7,8,9,10 are marked with the same timestamp.

- When a message is marked as read or delivered, a timestamp of this event is saved on the server (usually within 70 ms after the request is sent). Repeat requests to mark messages as read or delivered are allowed (but it is undesirable; you should not send a request to mark a message as read if its status is `read`). For the second and subsequent requests to mark a message as delivered or read, the timestamp is not replaced; the response to such a request will contain the timestamp of when the message was first marked as read or delivered.

- When you establish a websocket connection, all messages addressed to you with the status 'undelivered' are marked as delivered.

- While you are online, incoming messages are immediately marked as delivered.

- Repeat read/dlvrd marks will not be sent to the message author.
