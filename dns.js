const dns = require("dns");
dns.lookup("flipkart.com", (err, address, family) => {
  if (err) throw err;
  console.log(address, `IP-${family}`);
});
