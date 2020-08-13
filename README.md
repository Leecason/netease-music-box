<p align="center">
  <img src="https://github.com/Leecason/netease-music-box/blob/master/assets/gist_preview.png" width="550">
  <h2 align="center">Netease Music Box</h2>
  <p align="center">将你最近一周的网易云音乐的听歌记录更新到 Gist</p>
</p>

---

> 📌✨ 更多像这样的 Pinned Gist 项目请访问：https://github.com/matchai/awesome-pinned-gists

## 🖥 使用

### 🎒 前置工作

1. 创建一个公开的 Github Gist (https://gist.github.com)

2. 创建一个 GitHub Token，需要勾选 `gist` 权限，复制生成的 Token (https://github.com/settings/tokens/new)

3. 获取网易云音乐用户 ID (https://music.163.com)

    - ID 为个人主页页面（`https://music.163.com/#/user/home?id=xxx`），`id` 后紧跟的那串数字

    ![USER_ID](https://github.com/Leecason/netease-music-box/blob/master/assets/user_id.png)

4. 获取网易云音乐用户 Token

    - 在登录态下打开浏览器开发者工具，查看 Cookie，获取 `key` 为 `MUSIC_U` 的 `value`

    ![USER_TOKEN](https://github.com/Leecason/netease-music-box/blob/master/assets/user_token.png)

### 🚀 安装

1. Fork 这个仓库

2. 进入 Fork 后的仓库，启用 Github Actions

3. 编辑 `.github/workflows/schedule.yml` 文件中的环境变量：

    - **GIST_ID**: ID 是新建 Gist 的 `url` 后缀: `https://gist.github.com/Leecason/`**`b51bc9844585c33775edc27bb38ad2ab`**

    - **USER_ID**: 网易云音乐用户 ID

4. 在项目的 `Settings > Secrets` 中创建两个变量 `GH_TOKEN` 和 `USER_TOKEN`，分别为 Github Token 和 网易云音乐用户 Token

5. [在个人资料中嵌入 Gist](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/pinning-items-to-your-profile)

## 🤔 工作原理

- 基于 [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) 获取听歌记录
- 基于 Github API 更新 Gist
- 使用 Github Actions 自动更新 Gist

## 📄 开源协议

本项目使用 [MIT](./LICENSE) 协议
