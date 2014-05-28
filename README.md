# KGB

kgb 是一套网站前端开发工具集，通过使用这个工具，您可以方便的建立并维护复杂的网站结构。

特点：
- 静态模板渲染，允许 HTML 继承与混入
- 脚本模块化加载，没有全局变量
- 使用包管理器管理第三方依赖
- 内置开发服务器，在文件修改后自动刷新页面

参考：
- nunjucks 模板：http://mozilla.github.io/nunjucks/
- require.js 异步模块加载：http://requirejs.org/


# 安装

kgb 开发工具依赖 grunt 进行构建工作，在使用之前确保已经有可用的 node.js 运行环境，并已经安装好 grunt-cli。

node.js 下载地址：http://nodejs.org

grunt-cli 安装方法：
```
npm install -g grunt-cli
```

实际开发中会使用 bower 管理第三方依赖。开发之前请务必安装好

bower 安装方法：
```
npm install -g bower
```


确保环境无误后即可初始化 kgb 工具：
```
git clone https://github.com/gengen1988/kgb.git
npm install
```

# 使用方法

启动开发服务器
```
grunt
```

# 工具目录结构
- /view：这个目录存放所有需要生成的 html 模板
- /snipplet：这个目录存放 html 模板引用的文件
- /www：这个目录存放部署的文件


# 最佳实践
我们认为一个清晰的目录规划是项目成功的重要因素。为此，我们推荐在实际开发中，每个页面需要应用的模块都在一个文件夹当中（待补充）
