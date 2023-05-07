// @ts-ignore
import wifi from "node-wifi";

wifi.init();
export default defineEventHandler(async () => {
  let data = await wifi.disconnect();
  return data;
});
