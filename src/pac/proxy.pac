function FindProxyForURL(url, host) {
  // 需要通过代理的域名列表
  var proxy = "PROXY 127.0.0.1:10809"; // 替换为 v2rayN 的代理地址和端口

  // 指定域名走代理
  if (
    shExpMatch(host, "*.live.net") ||
    shExpMatch(host, "*.live.com") ||
    shExpMatch(host, "*.storage.live.com") ||
    shExpMatch(host, "*.onedrive.com") ||
    shExpMatch(host, "*.blob.core.windows.net") ||
    shExpMatch(host, "*.office.com") ||
    shExpMatch(host, "*.microsoft.com") ||
    shExpMatch(host, "*.google.cn") ||
    shExpMatch(host, "*.google.com") ||
    shExpMatch(host, "*.translate.google.com") ||
    shExpMatch(host, "*.googleapis.com") ||
    shExpMatch(host, "*.translate.googleapis.com") ||
    shExpMatch(host, "*.raw.githubusercontent.com")
  ) {
    return proxy;
  }

  // 其他流量直连
  return "DIRECT";
}
