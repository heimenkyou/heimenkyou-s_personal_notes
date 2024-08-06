```yaml
# Profile Enhancement Merge Template for Clash Verge

prepend-rules: 
  - DOMAIN-SUFFIX,gravatar.com,节点选择
  - DOMAIN-KEYWORD,zhihu,DIRECT
  - DOMAIN-KEYWORD,hebuee,DIRECT # 校园网相关(包括认证界面)

  - DOMAIN-SUFFIX,codeforces.com,节点选择 # 来打算法赛罢

  # 内容：Discord
  # 数量：6条
  - DOMAIN-SUFFIX,discord.co,节点选择
  - DOMAIN-SUFFIX,discord.com,节点选择
  - DOMAIN-SUFFIX,discord.gg,节点选择
  - DOMAIN-SUFFIX,discord.media,节点选择
  - DOMAIN-SUFFIX,discordapp.com,节点选择
  - DOMAIN-SUFFIX,discordapp.net,节点选择

  # 内容：Twitch
  # 数量：7条
  - DOMAIN-KEYWORD,ttvnw,节点选择
  - DOMAIN-SUFFIX,ext-twitch.tv,节点选择
  - DOMAIN-SUFFIX,jtvnw.net,节点选择
  - DOMAIN-SUFFIX,ttvnw.net,节点选择
  - DOMAIN-SUFFIX,twitch-ext.rootonline.de,节点选择
  - DOMAIN-SUFFIX,twitch.tv,节点选择
  - DOMAIN-SUFFIX,twitchcdn.net,节点选择

  # 内容：Reddit Services
  # 数量：3条
  - DOMAIN-SUFFIX,redditmedia.com,节点选择
  - DOMAIN-SUFFIX,redd.it,节点选择
  - DOMAIN-SUFFIX,reddit.com,节点选择

  # 内容：BBC
  # 数量：3条
  - DOMAIN-KEYWORD,uk-live,节点选择
  - DOMAIN-SUFFIX,bbc.co,节点选择
  - DOMAIN-SUFFIX,bbc.com,节点选择

  # 内容：BBCiPlayer
  # 数量：15条
  - DOMAIN-KEYWORD,bbcfmt,节点选择
  - DOMAIN-KEYWORD,uk-live,节点选择
  - DOMAIN,aod-dash-uk-live.akamaized.net,节点选择
  - DOMAIN,aod-hls-uk-live.akamaized.net,节点选择
  - DOMAIN,vod-dash-uk-live.akamaized.net,节点选择
  - DOMAIN,vod-thumb-uk-live.akamaized.net,节点选择
  - DOMAIN-SUFFIX,bbc.co,节点选择
  - DOMAIN-SUFFIX,bbc.co.uk,节点选择
  - DOMAIN-SUFFIX,bbc.com,节点选择
  - DOMAIN-SUFFIX,bbc.net.uk,节点选择
  - DOMAIN-SUFFIX,bbcfmt.hs.llnwd.net,节点选择
  - DOMAIN-SUFFIX,bbci.co,节点选择
  - DOMAIN-SUFFIX,bbci.co.uk,节点选择
  - DOMAIN-SUFFIX,bidi.net.uk,节点选择

  # 内容：Steam
  # 数量：18条
  - DOMAIN,steambroadcast.akamaized.net,Steam
  - DOMAIN,steamcommunity-a.akamaihd.net,Steam
  - DOMAIN,steampipe.akamaized.net,Steam
  - DOMAIN,steamstore-a.akamaihd.net,Steam
  - DOMAIN,steamusercontent-a.akamaihd.net,Steam
  - DOMAIN,steamuserimages-a.akamaihd.net,Steam
  - DOMAIN-SUFFIX,fanatical.com,Steam
  - DOMAIN-SUFFIX,humblebundle.com,Steam
  - DOMAIN-SUFFIX,playartifact.com,Steam
  - DOMAIN-SUFFIX,steam-chat.com,Steam
  - DOMAIN-SUFFIX,steamcommunity.com,Steam
  - DOMAIN-SUFFIX,steamgames.com,Steam
  - DOMAIN-SUFFIX,steampowered.com,Steam
  - DOMAIN-SUFFIX,steamserver.net,Steam
  - DOMAIN-SUFFIX,steamstat.us,Steam
  - DOMAIN-SUFFIX,steamstatic.com,Steam
  - DOMAIN-SUFFIX,underlords.com,Steam
  - DOMAIN-SUFFIX,valvesoftware.com,Steam

  # 内容：Pixiv
  # 数量：3条
  - DOMAIN-SUFFIX,fanbox.cc,节点选择
  - DOMAIN-SUFFIX,pixiv.net,节点选择
  - DOMAIN-SUFFIX,pixiv.org,节点选择
  - DOMAIN-SUFFIX,pximg.net,节点选择

  # 内容：Github
  # 数量：6条
  - IP-CIDR,20.205.243.166/16,节点选择,no-resolve
  - DOMAIN-KEYWORD,github,节点选择
  - DOMAIN-SUFFIX,github.com,节点选择
  - DOMAIN-SUFFIX,github.io,节点选择
  - DOMAIN-SUFFIX,githubapp.com,节点选择
  - DOMAIN-SUFFIX,githubassets.com,节点选择
  - DOMAIN-SUFFIX,githubusercontent.com,节点选择

  # 内容：Google
  # 数量：24条
  - DOMAIN-KEYWORD,gmail,谷歌服务
  - DOMAIN-KEYWORD,google,谷歌服务
  - DOMAIN-SUFFIX,1e100.net,谷歌服务
  - DOMAIN-SUFFIX,2mdn.net,谷歌服务
  - DOMAIN-SUFFIX,app-measurement.net,谷歌服务
  - DOMAIN-SUFFIX,g.co,谷歌服务
  - DOMAIN-SUFFIX,ggpht.com,谷歌服务
  - DOMAIN-SUFFIX,goo.gl,谷歌服务
  - DOMAIN-SUFFIX,googleapis.cn,谷歌服务
  - DOMAIN-SUFFIX,googleapis.com,谷歌服务
  - DOMAIN-SUFFIX,gstatic.cn,谷歌服务
  - DOMAIN-SUFFIX,gstatic.com,谷歌服务
  - DOMAIN-SUFFIX,gvt0.com,谷歌服务
  - DOMAIN-SUFFIX,gvt1.com,谷歌服务
  - DOMAIN-SUFFIX,gvt2.com,谷歌服务
  - DOMAIN-SUFFIX,gvt3.com,谷歌服务
  - DOMAIN-SUFFIX,xn--ngstr-lra8j.com,谷歌服务
  - DOMAIN-SUFFIX,youtu.be,谷歌服务
  - DOMAIN-SUFFIX,youtube-nocookie.com,谷歌服务
  - DOMAIN-SUFFIX,youtube.com,谷歌服务
  - DOMAIN-SUFFIX,yt.be,谷歌服务
  - DOMAIN-SUFFIX,ytimg.com,谷歌服务
  - IP-CIDR,74.125.0.0/16,谷歌服务,no-resolve
  - IP-CIDR,173.194.0.0/16,谷歌服务,no-resolve

  # 内容：Twitter
  # 数量：11条
  - DOMAIN-KEYWORD,twitter,节点选择
  - DOMAIN-SUFFIX,periscope.tv,节点选择
  - DOMAIN-SUFFIX,pscp.tv,节点选择
  - DOMAIN-SUFFIX,t.co,节点选择
  - DOMAIN-SUFFIX,twimg.co,节点选择
  - DOMAIN-SUFFIX,twimg.com,节点选择
  - DOMAIN-SUFFIX,twimg.org,节点选择
  - DOMAIN-SUFFIX,twitpic.com,节点选择
  - DOMAIN-SUFFIX,twitter.com,节点选择
  - DOMAIN-SUFFIX,twitter.jp,节点选择
  - DOMAIN-SUFFIX,vine.co,节点选择

  # 内容：Wikipedia 维基相关域名
  # 数量：12条
  - DOMAIN-SUFFIX,mediawiki.org,节点选择
  - DOMAIN-SUFFIX,wikibooks.org,节点选择
  - DOMAIN-SUFFIX,wikidata.org,节点选择
  - DOMAIN-SUFFIX,wikileaks.org,节点选择
  - DOMAIN-SUFFIX,wikimedia.org,节点选择
  - DOMAIN-SUFFIX,wikinews.org,节点选择
  - DOMAIN-SUFFIX,wikipedia.org,节点选择
  - DOMAIN-SUFFIX,wikiquote.org,节点选择
  - DOMAIN-SUFFIX,wikisource.org,节点选择
  - DOMAIN-SUFFIX,wikiversity.org,节点选择
  - DOMAIN-SUFFIX,wikivoyage.org,节点选择
  - DOMAIN-SUFFIX,wiktionary.org,节点选择

  # 内容：Telegram
  # 数量：32,这块是从以前的官方配置扒的
  - DOMAIN-KEYWORD,telegram,Telegram
  - DOMAIN-SUFFIX,comments.app,Telegram
  - DOMAIN-SUFFIX,graph.org,Telegram
  - DOMAIN-SUFFIX,stel.com,Telegram
  - DOMAIN-SUFFIX,t.me,Telegram
  - DOMAIN-SUFFIX,tdesktop.com,Telegram
  - DOMAIN-SUFFIX,telega.one,Telegram
  - DOMAIN-SUFFIX,telegra.ph,Telegram
  - DOMAIN-SUFFIX,telegram.dog,Telegram
  - DOMAIN-SUFFIX,telegram.me,Telegram
  - DOMAIN-SUFFIX,telegram.org,Telegram
  - DOMAIN-SUFFIX,telegram.space,Telegram
  - DOMAIN-SUFFIX,telegramdownload.com,Telegram
  - DOMAIN-SUFFIX,telesco.pe,Telegram
  - DOMAIN-SUFFIX,tg.dev,Telegram
  - DOMAIN-SUFFIX,tx.me,Telegram
  - DOMAIN-KEYWORD,nicegram,Telegram
  - DOMAIN-KEYWORD,telegram,Telegram
  - IP-CIDR,109.239.140.0/24,Telegram,no-resolve
  - IP-CIDR,149.154.160.0/20,Telegram,no-resolve
  - IP-CIDR,185.76.151.0/24,Telegram,no-resolve
  - IP-CIDR,91.105.192.0/23,Telegram,no-resolve
  - IP-CIDR,91.108.0.0/16,Telegram,no-resolve
  - IP-CIDR,95.161.64.0/20,Telegram,no-resolve
  - IP-CIDR6,2001:67c:4e8::/48,Telegram,no-resolve
  - IP-CIDR6,2001:b28:f23c::/47,Telegram,no-resolve
  - IP-CIDR6,2001:b28:f23f::/48,Telegram,no-resolve
  - IP-CIDR6,2a0a:f280::/32,Telegram,no-resolve
  - PROCESS-NAME,nekox.messenger,Telegram
  - PROCESS-NAME,org.telegram.messenger,Telegram
  - PROCESS-NAME,telegram.exe,Telegram
  - PROCESS-NAME,org.telegram.messenger,Telegram
  - DOMAIN-SUFFIX,fandom.com,Telegram
  - DOMAIN-SUFFIX,live.com,Telegram
  - DOMAIN-SUFFIX,duangks.com,Telegram

  # 内容：OpenAi
  # 数量：17条
  - DOMAIN-KEYWORD,openai,🤖 ChatGPT
  - DOMAIN,gemini.google.com,🤖 ChatGPT
  - DOMAIN-SUFFIX,auth0.com,🤖 ChatGPT
  - DOMAIN-SUFFIX,challenges.cloudflare.com,🤖 ChatGPT
  - DOMAIN-SUFFIX,chatgpt.com,🤖 ChatGPT
  - DOMAIN-SUFFIX,client-api.arkoselabs.com,🤖 ChatGPT
  - DOMAIN-SUFFIX,events.statsigapi.net,🤖 ChatGPT
  - DOMAIN-SUFFIX,featuregates.org,🤖 ChatGPT
  - DOMAIN-SUFFIX,identrust.com,🤖 ChatGPT
  - DOMAIN-SUFFIX,intercom.io,🤖 ChatGPT
  - DOMAIN-SUFFIX,intercomcdn.com,🤖 ChatGPT
  - DOMAIN-SUFFIX,oaistatic.com,🤖 ChatGPT
  - DOMAIN-SUFFIX,oaiusercontent.com,🤖 ChatGPT
  - DOMAIN-SUFFIX,openai.com,🤖 ChatGPT
  - DOMAIN-SUFFIX,openaiapi-site.azureedge.net,🤖 ChatGPT
  - DOMAIN-SUFFIX,sentry.io,🤖 ChatGPT
  - DOMAIN-SUFFIX,stripe.com,🤖 ChatGPT

  # 内容：Bilibili 哔哩哔哩
  # 数量：21条
  - DOMAIN,apiintl.biliapi.net,哔哩哔哩
  - DOMAIN,upos-hz-mirrorakam.akamaized.net,哔哩哔哩
  - DOMAIN-SUFFIX,acg.tv,哔哩哔哩
  - DOMAIN-SUFFIX,acgvideo.com,哔哩哔哩
  - DOMAIN-SUFFIX,b23.tv,哔哩哔哩
  - DOMAIN-SUFFIX,bigfun.cn,哔哩哔哩
  - DOMAIN-SUFFIX,bigfunapp.cn,哔哩哔哩
  - DOMAIN-SUFFIX,biliapi.com,哔哩哔哩
  - DOMAIN-SUFFIX,biliapi.net,哔哩哔哩
  - DOMAIN-SUFFIX,bilibili.com,哔哩哔哩
  - DOMAIN-SUFFIX,bilibili.tv,哔哩哔哩
  - DOMAIN-SUFFIX,biligame.com,哔哩哔哩
  - DOMAIN-SUFFIX,biligame.net,哔哩哔哩
  - DOMAIN-SUFFIX,bilivideo.cn,哔哩哔哩
  - DOMAIN-SUFFIX,bilivideo.com,哔哩哔哩
  - DOMAIN-SUFFIX,hdslb.com,哔哩哔哩
  - DOMAIN-SUFFIX,im9.com,哔哩哔哩
  - DOMAIN-SUFFIX,smtcdns.net,哔哩哔哩

  # 内容：Bing
  # 数量：4条
  - DOMAIN-SUFFIX,bing.com,Copilot
  - DOMAIN-SUFFIX,copilot.microsoft.com,Copilot
  - DOMAIN-SUFFIX,bing.net,Copilot
  - DOMAIN-SUFFIX,bingapis.com,Copilot

  # 内容：Microsoft
  # 数量：76条
  - DOMAIN-KEYWORD,1drv,微软服务
  - DOMAIN-KEYWORD,microsoft,微软服务
  - DOMAIN-SUFFIX,aadrm.com,微软服务
  - DOMAIN-SUFFIX,acompli.com,微软服务
  - DOMAIN-SUFFIX,acompli.net,微软服务
  - DOMAIN-SUFFIX,aka.ms,微软服务
  - DOMAIN-SUFFIX,akadns.net,微软服务
  - DOMAIN-SUFFIX,aspnetcdn.com,微软服务
  - DOMAIN-SUFFIX,assets-yammer.com,微软服务
  - DOMAIN-SUFFIX,azure.com,微软服务
  - DOMAIN-SUFFIX,azure.net,微软服务
  - DOMAIN-SUFFIX,azureedge.net,微软服务
  - DOMAIN-SUFFIX,azureiotcentral.com,微软服务
  - DOMAIN-SUFFIX,azurerms.com,微软服务
  - DOMAIN-SUFFIX,cloudapp.net,微软服务
  - DOMAIN-SUFFIX,cloudappsecurity.com,微软服务
  - DOMAIN-SUFFIX,edgesuite.net,微软服务
  - DOMAIN-SUFFIX,gfx.ms,微软服务
  - DOMAIN-SUFFIX,hotmail.com,微软服务
  - DOMAIN-SUFFIX,live.com,微软服务
  - DOMAIN-SUFFIX,live.net,微软服务
  - DOMAIN-SUFFIX,lync.com,微软服务
  - DOMAIN-SUFFIX,msappproxy.net,微软服务
  - DOMAIN-SUFFIX,msauth.net,微软服务
  - DOMAIN-SUFFIX,msauthimages.net,微软服务
  - DOMAIN-SUFFIX,msecnd.net,微软服务
  - DOMAIN-SUFFIX,msedge.net,微软服务
  - DOMAIN-SUFFIX,msft.net,微软服务
  - DOMAIN-SUFFIX,msftauth.net,微软服务
  - DOMAIN-SUFFIX,msftauthimages.net,微软服务
  - DOMAIN-SUFFIX,msftidentity.com,微软服务
  - DOMAIN-SUFFIX,msidentity.com,微软服务
  - DOMAIN-SUFFIX,msn.cn,微软服务
  - DOMAIN-SUFFIX,msn.com,微软服务
  - DOMAIN-SUFFIX,msocdn.com,微软服务
  - DOMAIN-SUFFIX,msocsp.com,微软服务
  - DOMAIN-SUFFIX,mstea.ms,微软服务
  - DOMAIN-SUFFIX,o365weve.com,微软服务
  - DOMAIN-SUFFIX,oaspapps.com,微软服务
  - DOMAIN-SUFFIX,office.com,微软服务
  - DOMAIN-SUFFIX,office.net,微软服务
  - DOMAIN-SUFFIX,office365.com,微软服务
  - DOMAIN-SUFFIX,officeppe.net,微软服务
  - DOMAIN-SUFFIX,omniroot.com,微软服务
  - DOMAIN-SUFFIX,onedrive.com,微软服务
  - DOMAIN-SUFFIX,onenote.com,微软服务
  - DOMAIN-SUFFIX,onenote.net,微软服务
  - DOMAIN-SUFFIX,onestore.ms,微软服务
  - DOMAIN-SUFFIX,outlook.com,微软服务
  - DOMAIN-SUFFIX,outlookmobile.com,微软服务
  - DOMAIN-SUFFIX,phonefactor.net,微软服务
  - DOMAIN-SUFFIX,public-trust.com,微软服务
  - DOMAIN-SUFFIX,sfbassets.com,微软服务
  - DOMAIN-SUFFIX,sfx.ms,微软服务
  - DOMAIN-SUFFIX,sharepoint.com,微软服务
  - DOMAIN-SUFFIX,sharepointonline.com,微软服务
  - DOMAIN-SUFFIX,skype.com,微软服务
  - DOMAIN-SUFFIX,skypeassets.com,微软服务
  - DOMAIN-SUFFIX,skypeforbusiness.com,微软服务
  - DOMAIN-SUFFIX,staffhub.ms,微软服务
  - DOMAIN-SUFFIX,svc.ms,微软服务
  - DOMAIN-SUFFIX,sway-cdn.com,微软服务
  - DOMAIN-SUFFIX,sway-extensions.com,微软服务
  - DOMAIN-SUFFIX,sway.com,微软服务
  - DOMAIN-SUFFIX,trafficmanager.net,微软服务
  - DOMAIN-SUFFIX,uservoice.com,微软服务
  - DOMAIN-SUFFIX,virtualearth.net,微软服务
  - DOMAIN-SUFFIX,visualstudio.com,微软服务
  - DOMAIN-SUFFIX,windows-ppe.net,微软服务
  - DOMAIN-SUFFIX,windows.com,微软服务
  - DOMAIN-SUFFIX,windows.net,微软服务
  - DOMAIN-SUFFIX,windowsazure.com,微软服务
  - DOMAIN-SUFFIX,windowsupdate.com,微软服务
  - DOMAIN-SUFFIX,wunderlist.com,微软服务
  - DOMAIN-SUFFIX,yammer.com,微软服务
  - DOMAIN-SUFFIX,yammerusercontent.com,微软服务

append-rules: 
  - MATCH,🐟 漏网之鱼

prepend-proxies: []

prepend-proxy-groups:
  - name: 🤖 ChatGPT
    type: select
    proxies:
    - 🤖 ChatGPT（Auto）
    - 节点选择
    - 日本-优化
    - 日本-优化2
    - 日本-优化3
    - 日本JP-T
    - 美国LA-优化-GPT
    - 美国LA-优化2-GPT
    - 美国LA-优化3-GPT
    - 柬埔寨KH-T
    - 以色列IL-T
    - 哈萨克斯坦KZ-T
    - 英国UK-T
    - 葡萄牙PT-T
    - 俄罗斯RU-T
    - 乌克兰UA-T
    - 土耳其TR-T
    - 阿根廷AR-T
    - 印度-优化
    - 台湾-优化
    - 台湾-优化2
    - 台湾-优化3
   # - 英国-优化
    
  - name: 🤖 ChatGPT（Auto）
    type: url-test
    proxies:
    - 日本-优化
    - 日本-优化2
    - 日本-优化3
    - 日本JP-T
    - 美国LA-优化-GPT
    - 美国LA-优化2-GPT
    - 美国LA-优化3-GPT
    - 柬埔寨KH-T
    - 以色列IL-T
    - 哈萨克斯坦KZ-T
    - 英国UK-T
    - 葡萄牙PT-T
    - 乌克兰UA-T
    - 土耳其TR-T
    - 阿根廷AR-T
    - 印度-优化
    - 台湾-优化
    - 台湾-优化2
    - 台湾-优化3
   # - 英国-优化
    url: https://chat.openai.com/
    interval: 300
    tolerance: 7200

  - name: 🐟 漏网之鱼
    type: select
    proxies:
    - DIRECT
    - 节点选择
    - 自动选择
    - 故障转移
    - 套餐到期：长期有效
    - 日本-优化
    - 日本-优化2
    - 日本-优化3
    - 日本JP-T
    - 新加坡SG-T
    - 柬埔寨KH-T
    - 美国USLA-T-GPT
    - 新加坡-优化
    - 新加坡-优化2
    - 新加坡-优化3
    #- 香港HY-优化
    #- 香港HY-优化2
    - 香港wap-T
    - 台湾WAP-T
    - 越南VN-T
    - 香港WAP-优化
    - 香港WAP-优化2
    #- 香港HKT-优化2
    - 印度-优化
    - 台湾-优化
    - 台湾-优化2
    - 台湾-优化3
    #- 朝鲜-优化2
    #- 朝鲜-优化3
    - 美国LA-优化-GPT
    - 美国LA-优化2-GPT
    - 美国LA-优化3-GPT
    #- 英国-优化
    - 英国-优化2
    - 英国-优化3
    - 澳大利亚AU-T
    - 土耳其TR-T
    - 卢森堡LUX-T
    - 意大利IT-T
    - 葡萄牙PT-T
    - 俄罗斯RU-T
    - 哈萨克斯坦KZ-T
    - 乌克兰UA-T
    - 以色列IL-T
    - 英国UK-T
    - 阿根廷AR-T

append-proxies: []

# append-proxy-groups: []
append-proxy-groups: []
```

