# calls note

```mermaid
sequenceDiagram
    participant Calls
    Note over ChatStorage: "DialogDO or GroupchatDO"
    participant ChatStorage
    participant MessagingDO

    Calls->>ChatStorage: newCall(newCallRequest)
    ChatStorage->>ChatStorage: 'store call as message'
    ChatStorage->>MessagingDO: NewCallEventHandler(newCallInternalEvent)
    ChatStorage->>MessagingDO: NewCallEventHandler(newCallInternalEvent)
    ChatStorage->>MessagingDO: NewCallEventHandler(newCallInternalEvent)
    Note OVER ChatStorage,MessagingDO: for each participant
    MessagingDO->>MessagingDO: modify chat list
```


1. **Big-Calls** sends a `newCall(newCallRequest)` to **ChatStorage**.
2. **ChatStorage** stores the call as a message.
3. **ChatStorage** sends `NewCallEventHandler(newCallInternalEvent)` to **MessagingDO**.
4. **ChatStorage** repeats sending `NewCallEventHandler(newCallInternalEvent)` to **MessagingDO** for each participant.
5. **MessagingDO** modifies the chat list accordingly.