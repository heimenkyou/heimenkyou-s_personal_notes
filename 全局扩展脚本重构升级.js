// ===================== 全局配置 =====================

// 规则配置
const ruleSets = [
    {
        group: "default", // 使用默认分组
        position: 1,
        rules: [
            "DOMAIN-KEYWORD,codeforces",
            "DOMAIN-KEYWORD,github",
            "DOMAIN-KEYWORD,gitbook",
            "DOMAIN-KEYWORD,youtube",
            "DOMAIN-KEYWORD,z-lib",
            "DOMAIN-KEYWORD,zlib",
            'DOMAIN-SUFFIX,counter.yadro.ru',
            'DOMAIN-SUFFIX,t.me',
            'DOMAIN-KEYWORD,discord',
            'DOMAIN-SUFFIX,githubusercontent.com',
            'DOMAIN-SUFFIX,knjc.cfd',
            'DOMAIN-SUFFIX,mvnrepository.com',
            'DOMAIN-SUFFIX,greasyfork.org',
            'DOMAIN-SUFFIX,llgjc1.com',
            'DOMAIN-SUFFIX,llg01.com',
            // Telegram规则
            'DOMAIN-KEYWORD,telegram',
            'PROCESS-NAME,Telegram.exe',
            'PROCESS-NAME,org.telegram.messenger',
            'DOMAIN-SUFFIX,tdesktop.com',
            'DOMAIN-SUFFIX,telegra.ph',
            'DOMAIN-SUFFIX,telesco.pe',
            'IP-CIDR,91.108.0.0/16,no-resolve',
            'IP-CIDR,95.161.64.0/20,no-resolve',
            'IP-CIDR,109.239.140.0/24,no-resolve',
            'IP-CIDR,149.154.160.0/20,no-resolve',
            'IP-CIDR6,2001:67c:4e8::/48,no-resolve',
            'IP-CIDR6,2001:b28:f23d::/48,no-resolve',
            'IP-CIDR6,2001:b28:f23f::/48,no-resolve',
            // Gemini
            'DOMAIN-KEYWORD,colab',
            'DOMAIN-KEYWORD,developerprofiles',
            'DOMAIN-KEYWORD,generativelanguage',
            'DOMAIN,ai.google.dev',
            'DOMAIN,alkalimakersuite-pa.clients6.google.com',
            'DOMAIN,makersuite.google.com',
            'DOMAIN-SUFFIX,bard.google.com',
            'DOMAIN-SUFFIX,deepmind.com',
            'DOMAIN-SUFFIX,deepmind.google',
            'DOMAIN-SUFFIX,gemini.google.com',
            'DOMAIN-SUFFIX,generativeai.google',
            'DOMAIN-SUFFIX,proactivebackend-pa.googleapis.com',
            'DOMAIN-SUFFIX,apis.google.com',
        ]
    },
    {
        group: "🎮 Steam",
        position: 1,
        rules: [
            // Steam
            "DOMAIN,steambroadcast.akamaized.net",
            "DOMAIN,steamcommunity-a.akamaihd.net",
            "DOMAIN,steampipe.akamaized.net",
            "DOMAIN,steamstore-a.akamaihd.net",
            "DOMAIN,steamusercontent-a.akamaihd.net",
            "DOMAIN,steamuserimages-a.akamaihd.net",
            "DOMAIN-SUFFIX,fanatical.com",
            "DOMAIN-SUFFIX,humblebundle.com",
            "DOMAIN-SUFFIX,playartifact.com",
            "DOMAIN-SUFFIX,steam-chat.com",
            "DOMAIN-SUFFIX,steamcommunity.com",
            "DOMAIN-SUFFIX,steamgames.com",
            "DOMAIN-SUFFIX,steampowered.com",
            "DOMAIN-SUFFIX,steamserver.net",
            "DOMAIN-SUFFIX,steamstat.us",
            "DOMAIN-SUFFIX,steamstatic.com",
            "DOMAIN-SUFFIX,underlords.com",
            "DOMAIN-SUFFIX,valvesoftware.com",
            // Epic Games
            "DOMAIN-SUFFIX,epicgames.com",
            "DOMAIN-SUFFIX,epicgames.dev",
            "DOMAIN-SUFFIX,helpshift.com",
            "DOMAIN-SUFFIX,paragon.com",
            "DOMAIN-SUFFIX,unrealengine.com"
        ]
    },
    {
        group: "🤖 OpenAI",
        position: 1,
        rules: [
            "DOMAIN-KEYWORD,openai",
            "DOMAIN,gemini.google.com",
            "DOMAIN-SUFFIX,auth0.com",
            "DOMAIN-SUFFIX,challenges.cloudflare.com",
            "DOMAIN-SUFFIX,chatgpt.com",
            "DOMAIN-SUFFIX,client-api.arkoselabs.com",
            "DOMAIN-SUFFIX,events.statsigapi.net",
            "DOMAIN-SUFFIX,featuregates.org",
            "DOMAIN-SUFFIX,identrust.com",
            "DOMAIN-SUFFIX,intercom.io",
            "DOMAIN-SUFFIX,intercomcdn.com",
            "DOMAIN-SUFFIX,oaistatic.com",
            "DOMAIN-SUFFIX,oaiusercontent.com",
            "DOMAIN-SUFFIX,openai.com",
            "DOMAIN-SUFFIX,openaiapi-site.azureedge.net",
            "DOMAIN-SUFFIX,sentry.io",
            "DOMAIN-SUFFIX,stripe.com"
        ]
    },
    {
        group: "🍎 Microsoft",
        position: 1,
        rules: [
            "DOMAIN-KEYWORD,1drv",
            "DOMAIN-KEYWORD,microsoft",
            "DOMAIN-SUFFIX,aadrm.com",
            "DOMAIN-SUFFIX,acompli.com",
            "DOMAIN-SUFFIX,acompli.net",
            "DOMAIN-SUFFIX,aka.ms",
            "DOMAIN-SUFFIX,akadns.net",
            "DOMAIN-SUFFIX,aspnetcdn.com",
            "DOMAIN-SUFFIX,assets-yammer.com",
            "DOMAIN-SUFFIX,azure.com",
            "DOMAIN-SUFFIX,azure.net",
            "DOMAIN-SUFFIX,azureedge.net",
            "DOMAIN-SUFFIX,azureiotcentral.com",
            "DOMAIN-SUFFIX,azurerms.com",
            "DOMAIN-SUFFIX,bing.com",
            "DOMAIN-SUFFIX,bing.net",
            "DOMAIN-SUFFIX,bingapis.com",
            "DOMAIN-SUFFIX,cloudapp.net",
            "DOMAIN-SUFFIX,cloudappsecurity.com",
            "DOMAIN-SUFFIX,edgesuite.net",
            "DOMAIN-SUFFIX,gfx.ms",
            "DOMAIN-SUFFIX,hotmail.com",
            "DOMAIN-SUFFIX,live.com",
            "DOMAIN-SUFFIX,live.net",
            "DOMAIN-SUFFIX,lync.com",
            "DOMAIN-SUFFIX,msappproxy.net",
            "DOMAIN-SUFFIX,msauth.net",
            "DOMAIN-SUFFIX,msauthimages.net",
            "DOMAIN-SUFFIX,msecnd.net",
            "DOMAIN-SUFFIX,msedge.net",
            "DOMAIN-SUFFIX,msft.net",
            "DOMAIN-SUFFIX,msftauth.net",
            "DOMAIN-SUFFIX,msftauthimages.net",
            "DOMAIN-SUFFIX,msftidentity.com",
            "DOMAIN-SUFFIX,msidentity.com",
            "DOMAIN-SUFFIX,msn.cn",
            "DOMAIN-SUFFIX,msn.com",
            "DOMAIN-SUFFIX,msocdn.com",
            "DOMAIN-SUFFIX,msocsp.com",
            "DOMAIN-SUFFIX,mstea.ms",
            "DOMAIN-SUFFIX,o365weve.com",
            "DOMAIN-SUFFIX,oaspapps.com",
            "DOMAIN-SUFFIX,office.com",
            "DOMAIN-SUFFIX,office.net",
            "DOMAIN-SUFFIX,office365.com",
            "DOMAIN-SUFFIX,officeppe.net",
            "DOMAIN-SUFFIX,omniroot.com",
            "DOMAIN-SUFFIX,onedrive.com",
            "DOMAIN-SUFFIX,onenote.com",
            "DOMAIN-SUFFIX,onenote.net",
            "DOMAIN-SUFFIX,onestore.ms",
            "DOMAIN-SUFFIX,outlook.com",
            "DOMAIN-SUFFIX,outlookmobile.com",
            "DOMAIN-SUFFIX,phonefactor.net",
            "DOMAIN-SUFFIX,public-trust.com",
            "DOMAIN-SUFFIX,sfbassets.com",
            "DOMAIN-SUFFIX,sfx.ms",
            "DOMAIN-SUFFIX,sharepoint.com",
            "DOMAIN-SUFFIX,sharepointonline.com",
            "DOMAIN-SUFFIX,skype.com",
            "DOMAIN-SUFFIX,skypeassets.com",
            "DOMAIN-SUFFIX,skypeforbusiness.com",
            "DOMAIN-SUFFIX,staffhub.ms",
            "DOMAIN-SUFFIX,svc.ms",
            "DOMAIN-SUFFIX,sway-cdn.com",
            "DOMAIN-SUFFIX,sway-extensions.com",
            "DOMAIN-SUFFIX,sway.com",
            "DOMAIN-SUFFIX,trafficmanager.net",
            "DOMAIN-SUFFIX,uservoice.com",
            "DOMAIN-SUFFIX,virtualearth.net",
            "DOMAIN-SUFFIX,visualstudio.com",
            "DOMAIN-SUFFIX,windows-ppe.net",
            "DOMAIN-SUFFIX,windows.com",
            "DOMAIN-SUFFIX,windows.net",
            "DOMAIN-SUFFIX,windowsazure.com",
            "DOMAIN-SUFFIX,windowsupdate.com",
            "DOMAIN-SUFFIX,wunderlist.com",
            "DOMAIN-SUFFIX,yammer.com",
            "DOMAIN-SUFFIX,yammerusercontent.com"
        ]
    },
    {
        group: "🐟 漏网之鱼",
        position: -1,
        rules: ["MATCH"]
    }
];

// 代理分组配置
const proxyGroups = [
    // Steam游戏分组
    {
        name: "🎮 Steam",
        position: 1, // 添加到分组列表开头
        options: {
            type: "select",
            "include-all": true,
            proxies: ["DIRECT", "节点选择", "自动选择"], // 默认第一个节点是直连
            icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/steam.svg"
        }
    },

    // OpenAI分组
    {
        name: "🤖 OpenAI",
        position: 1,
        options: {
            type: "select",
            "include-all": true,
            proxies: ["节点选择", "自动选择"],
            icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg"
        }
    },

    // Microsoft分组
    {
        name: "🍎 Microsoft",
        position: 1,
        options: {
            type: "select",
            "include-all": true,
            proxies: ["DIRECT", "节点选择", "自动选择"],
            icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg"
        }
    },

    // 漏网之鱼分组
    {
        name: "🐟 漏网之鱼",
        position: 1,
        options: {
            type: "select",
            "include-all": true,
            proxies: ["DIRECT", "节点选择", "自动选择"],
            icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
        }
    }
];

// ===================== 工具函数 =====================
/**
* 添加代理分组
* @param {Object} config - 配置对象
* @param {Object} groupConfig - 分组配置
* @param {string} defaultProxyGroup - 默认代理组名称
*/
function addProxyGroup(config, groupConfig, defaultProxyGroup) {
    const { name, position, options } = groupConfig;

    // 检查是否已存在同名分组
    const exists = config['proxy-groups']?.some(g => g.name === name);
    if (exists) {
        console.log(`分组 ${name} 已存在，跳过添加`);
        return;
    }

    // 创建新分组
    const newGroup = {
        name,
        type: "select",
        interval: 300,
        timeout: 3000,
        url: "https://www.google.com/generate_204",
        lazy: true,
        "max-failed-times": 3,
        hidden: false,
        ...options
    };

    // 替换代理组名称中的占位符
    if (newGroup.proxies) {
        newGroup.proxies = newGroup.proxies.map(proxy => {
            // 替换所有出现的 "节点选择" 为实际默认代理组名称
            return proxy === "节点选择" ? defaultProxyGroup : proxy;
        });
    }


    // 添加到分组列表
    if (position === 1) {
        config['proxy-groups'].unshift(newGroup);
    } else {
        config['proxy-groups'].push(newGroup);
    }

    console.log(`成功添加代理分组[${name}]`);
}

/**
* 添加路由规则（带智能去重）
* @param {Object} config - 配置对象
* @param {Array} newRules - 新规则数组
* @param {string} groupName - 目标分组名称
* @param {number} position - 添加位置 (1:开头, -1:结尾)
*/
function addRules(config, newRules, groupName, position) {
    // 确保规则数组存在
    if (!config.rules) config.rules = [];

    // 去重函数：提取规则核心部分进行比较
    const getRuleCore = rule => {
        const parts = rule.split(',');
        // 保留类型、参数和选项（排除分组和no-resolve）
        return parts.slice(0, parts.length - (parts[parts.length - 1] === "no-resolve" ? 2 : 1)).join(',');
    };

    // 现有规则的核心部分
    const existingCores = new Set(config.rules.map(getRuleCore));

    // 处理新规则
    const processedRules = newRules.map(rule => {
        const parts = rule.split(',');
        const core = getRuleCore(rule);

        // 去重：跳过已存在的规则核心
        if (existingCores.has(core)) {
            console.log(`跳过重复规则: ${core}`);
            return null;
        }

        // 添加分组到规则
        if (parts.length >= 3) {
            parts.splice(2, 0, groupName);
        } else {
            parts.push(groupName);
        }

        return parts.join(',');
    }).filter(rule => rule !== null); // 过滤掉重复规则

    // 添加规则到指定位置
    if (position === 1) {
        config.rules = [...processedRules, ...config.rules];
    } else {
        config.rules = [...config.rules, ...processedRules];
    }

    console.log(`添加了 ${processedRules.length} 条规则到[${groupName}]`);
}

// ===================== 主函数 =====================
function main(config, profileName) {
    console.log(`配置名称为: ${profileName}`);

    // 1. 检查代理配置
    const proxyCount = config?.proxies?.length ?? 0;
    const proxyProviderCount = typeof config?.["proxy-providers"] === "object" ?
        Object.keys(config["proxy-providers"]).length : 0;

    if (proxyCount === 0 && proxyProviderCount === 0) {
        throw new Error("配置文件中未找到任何代理");
    }

    // 2. 自动识别默认代理组（不再硬编码"节点选择"）
    let defaultProxyGroup = "节点选择"; // 默认值

    // 尝试查找第一个非DIRECT/REJECT的分组
    const firstValidGroup = config['proxy-groups']?.find(group =>
        group.name !== "DIRECT" && group.name !== "REJECT" && group.name !== "漏网之鱼");

    if (firstValidGroup) {
        defaultProxyGroup = firstValidGroup.name;
        console.log(`自动识别默认代理组为: ${defaultProxyGroup}`);
    } else {
        console.warn(`未找到有效的默认代理组，使用默认值: ${defaultProxyGroup}`);
    }

    // 3. 添加代理分组
    proxyGroups.forEach(groupConfig => {
        addProxyGroup(config, groupConfig, defaultProxyGroup);
    });

    // 4. 添加路由规则
    ruleSets.forEach(ruleSet => {
        // 处理特殊标记的组名
        const groupName = ruleSet.group === "default" ? defaultProxyGroup : ruleSet.group;
        addRules(config, ruleSet.rules, groupName, ruleSet.position);
    });

    return config;
}