````markdown
# SensorimotorH.github.io

个人学术主页，托管于 GitHub Pages，基于 Hexo + hexo-theme-academia 构建。  
在线预览 ➜ <https://sensorimotorh.github.io/>

> **⚠️ 说明**    
> 如需二次开发，请参考下文「本地预览与开发」。
````
---

## 目录结构
````markdown
.
├── 2025/            # 年 / 月 / 文章 slug 三级目录（示例：2025/02/post-title/index.html）
│   └── 02/
├── Others/          # Hexo pages：如 About / CV 等
├── Publications/    # Publications 页面静态资源
├── Reading/         # 阅读笔记相关页面
├── Service/         # Service 页面
├── archives/        # 站点归档页静态文件
├── attaches/        # 附件（PPT、简历、数据集等可下载文件）
├── css/             # 主题和自定义样式表
├── js/              # 前端脚本
├── images/          # Hexo 自动复制的图片（文章内引用）
├── img/             # 主题自带图片 / Icon
├── pdf/             # 论文 PDF 与报告
├── index.html       # 主页
├── atom.xml         # RSS / Atom Feed
├── sitemap.xml      # 站点地图
└── sitemap.txt      # 纯文本 Sitemap（适配百度等）
````
---

## 本地预览与开发

> 如果你只想阅读站点内容，无需执行本节；直接访问线上地址即可。

1. **克隆 Hexo 源代码仓库**

   ```bash
   git clone <Blog Source Repo>
   cd <Blog Source Repo>
   ```

2. **安装依赖**

   ```bash
   npm install          # 首次运行
   npm run update       # 主题 / 插件升级（可选）
   ```

3. **启动本地服务器**

   ```bash
   npx hexo s
   # 浏览器访问 http://localhost:4000
   ```

4. **发布到 GitHub Pages**

   本仓库已配置 **GitHub Actions** 自动部署。你只需在源仓库执行：

   ```bash
   npx hexo clean && npx hexo g
   git add .
   git commit -m "post: 新文章标题"
   git push origin main   # 或其他源代码分支
   ```

   Action 会将生成的 `public/` 目录推送到本仓库 `main` 分支，几分钟后即可刷新线上页面。

---

## 如何贡献 / 个性化

1. **撰写博文**
   在 `<Blog Source Repo>/source/_posts/` 下新建 Markdown，推送后自动部署。

2. **更换主题或自定义样式**
   参考 [hexo-theme-academia 文档](https://github.com/theme-keep/hexo-theme-academia)。

3. **Bug / 功能建议**
   请在 [Issues](https://github.com/SensorimotorH/SensorimotorH.github.io/issues) 创建新条目，或直接提 PR。

---

## 依赖 & 致谢

* [Hexo](https://hexo.io/) — 简洁高效的静态博客框架
* [hexo-theme-academia](https://github.com/theme-keep/hexo-theme-academia) — 适合学术主页的 Hexo 主题
* [GitHub Actions](https://github.com/features/actions) — 持续集成 / 自动部署

---

## 联系方式

* ✉ E-mail：[mailto:18735461194@163.com](mailto:18735461194@163.com)
* 🐙 GitHub：[https://github.com/SensorimotorH](https://github.com/SensorimotorH)

> 更新日期：2025-07-23
