// @ts-ignore
import wifi from "node-wifi";
wifi.init();
export default defineEventHandler(async (event) => {
  let data = await wifi.getCurrentConnections();
  return data;
});
