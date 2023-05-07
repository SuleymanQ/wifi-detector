import dns from "dns/promises";
export default defineEventHandler(async () => {
  // Most easy way
  return await dns
    .lookup("fast.com", {
      all: false,
    })
    .then(() => true)
    .catch(() => false);
});
