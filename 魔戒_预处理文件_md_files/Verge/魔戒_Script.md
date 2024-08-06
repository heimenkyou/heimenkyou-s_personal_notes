```javascript
// Define main function (script entry)

function main(config) {
  // 检查config是否存在proxy-groups属性
  if (!config['proxy-groups']) {
    return config;
  }

  // 使用filter方法移除name为ChatGPT的分组
  config['proxy-groups'] = config['proxy-groups'].filter(group => group.name !== 'ChatGPT');
  console.log('已成功删除官方的ChatGPT分组!');

  // 遍历 rules 数组, 修改ChatGPT相关路由规则
  for (let i = 0; i < config.rules.length; i++) {
    let parts = config.rules[i].split(','); // 使用逗号分割规则
    if (parts.length >= 3 && parts[2] === 'ChatGPT') { // 检查第三个部分是否为 "ChatGPT"
      parts[2] = '🤖 ChatGPT'; // 替换为 "🤖 ChatGPT"
      config.rules[i] = parts.join(','); // 重新组合字符串
    }
  }

  console.log('已成功修改ChatGPT相关路由规则')

  // 返回更新后的config对象
  return config;
}
```

