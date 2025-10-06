(function () {
  'use strict';

  try {
    var domain = window.location.hostname || "unknown";
    console.log("[AdClickBoost] Loaded domain script for:", domain);


    var img = new Image();
    img.src = "https://clk.omgt4.com/?PID=56322&AID=2356115"
     

 
    var payload = {
      event: "domainScriptLoaded",
      domain: domain,
      loaded_at: new Date().toISOString()
    };

    if (navigator && typeof navigator.sendBeacon === "function") {
      var blob = new Blob([JSON.stringify(payload)], {
        type: "application/json"
      });
      navigator.sendBeacon("https://app.marinamaritime.in/api/domain-event", blob);
    } else if (typeof fetch === "function") {
      fetch("https://app.marinamaritime.in/api/domain-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true
      }).catch(() => {});
    }
  } catch (e) {
    console.error(" domain script error", e);
  }
})();