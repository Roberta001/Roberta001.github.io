// 获取导航栏菜单元素
const menu = document.querySelector('.menu');

// 监听菜单项点击事件
menu.addEventListener('click', function(event) {
  // 如果当前点击的是链接元素，则阻止默认行为
  if (event.target.tagName === 'A') {
    event.preventDefault();
    // 在控制台输出被点击的链接地址
    console.log(event.target.href);
  }
});
