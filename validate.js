function isValidAddress(address) {
  if (!address) return false;
  if (address.length !== ADDRESS_LENGTH) return false;
  if (!address.startsWith("0x")) return false;
  return true;
}
