// @ts-ignore
import wifi from "node-wifi";

wifi.init();

export default defineEventHandler(async (event) => {
  let body = await readBody(event);
  let data = await wifi.connect(body);
  return data;
});
