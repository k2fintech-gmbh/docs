# Message Edit/Delete

When a message is edited or deleted, it creates a new service message with type `new` or `edit` and payload `{ originalMessageId }`.
