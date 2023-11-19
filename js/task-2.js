function formatMessage(message, maxLength) {
  let messageLength = message.length;
  if (messageLength <= maxLength) {
    return message;
  } else {
    const transformedMessage = message.slice(0, maxLength) + "...";
    return transformedMessage;
  }
}
