const parseDomain = str => {
  if (!str) return "";
  if (str.indexOf("://") != -1) str = str.substr(str.indexOf("://") + 3);
  var topLevel = [
    "com",
    "net",
    "org",
    "gov",
    "edu",
    "mil",
    "biz",
    "name",
    "info",
    "mobi",
    "pro",
    "travel",
    "museum",
    "int",
    "areo",
    "post",
    "rec",
    "cn"
  ];
  var domains = str.split(".");
  if (domains.length <= 1) return str;
  if (!isNaN(domains[domains.length - 1])) return str;
  var i = 0;
  while (i < topLevel.length && topLevel[i] != domains[domains.length - 1]) i++;
  if (i != topLevel.length)
    return domains[domains.length - 2] + "." + domains[domains.length - 1];
  else {
    i = 0;
    while (i < topLevel.length && topLevel[i] != domains[domains.length - 2])
      i++;
    if (i == topLevel.length)
      return domains[domains.length - 2] + "." + domains[domains.length - 1];
    else
      return (
        domains[domains.length - 3] +
        "." +
        domains[domains.length - 2] +
        "." +
        domains[domains.length - 1]
      );
  }
};

export const domainName = (() => {
  try {
    let fullDomain = global.location.host;
    if (
      fullDomain.includes("localhost") ||
      fullDomain.includes("127.0.0.1") ||
      fullDomain.includes("192.168.") ||
      fullDomain.includes("10.12.186.")
    ) {
      return "hphrj.com";
    }
    return parseDomain(fullDomain);
  } catch (e) {
    return "hphrj.com";
  }
  // return 'hphrj.com'
})();
export const protocol = !global.location ? "http" : global.location.protocol;
