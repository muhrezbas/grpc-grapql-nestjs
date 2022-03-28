export const generateTransactionId = (): string => {
  const trxId = Date.now().toString() + new Date().getSeconds();
  return trxId.toString();
};
