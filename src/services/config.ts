import { getClient } from "utils/request";
const client = getClient(
  "//web-wallet-1257137467.cos.ap-hongkong.myqcloud.com",
  xhr => {
    if (xhr.status === 200) {
      try {
        const data = JSON.parse(xhr.responseText);

        return Promise.resolve(data || null);
      } catch (e) {
        return Promise.reject(xhr.responseText);
      }
    }
    return Promise.reject(xhr.responseText);
  }
);

interface IUiController {
  invite_addr_list: string[];
}
export function getUiConfig(): Promise<IUiController> {
  return client({ method: "GET", path: "/uiController/main.json" });
}