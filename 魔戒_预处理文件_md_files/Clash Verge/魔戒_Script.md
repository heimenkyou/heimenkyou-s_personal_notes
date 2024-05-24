```javascript
// Define main function (script entry)

function main(config) {
  // 检查config是否存在proxy-groups属性
  if (!config['proxy-groups']) {
    return config;
  }

  // 使用filter方法移除name为ChatGPT的分组
  config['proxy-groups'] = config['proxy-groups'].filter(group => group.name !== 'ChatGPT');

  // 返回更新后的config对象
  return config;
}
```

