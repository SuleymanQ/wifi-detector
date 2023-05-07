import find from "local-devices";

export default defineEventHandler(async () => {
  return await find();
});
