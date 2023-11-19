function checkForSpam(message) {
  let normalizedMessage = message.toLowerCase();
  const checkedMessage =
    normalizedMessage.includes("sale") || normalizedMessage.includes("spam");
  return checkedMessage;
}
