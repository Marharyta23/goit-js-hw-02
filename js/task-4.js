function getShippingCost(country) {
  let message;
  switch (country) {
    case "China":
      message = `Shipping to ${country} will cost 100 credits`;
      return message;
      break;
    case "Chile":
      message = `Shipping to ${country} will cost 250 credits`;
      return message;
      break;
    case "Australia":
      message = `Shipping to ${country} will cost 170 credits`;
      return message;
      break;
    case "Jamaica":
      message = `Shipping to ${country} will cost 120 credits`;
      return message;
      break;
    default:
      message = "Sorry, there is no delivery to your country";
      return message;
  }
}
