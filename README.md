<p align="center">
  <h2 align="center">Netease Music Box</h2>
  <p align="center">更新最近一周网易云音乐的听歌排行数据到 Gist</p>
</p>

## 使用

### 准备

1. 创建一个新的 public Github Gist（https://gist.github.com/）

2. 创建一个 GitHub Token，需要勾选 `gist` 权限，复制生成的 Token（https://github.com/settings/tokens/new）

3. 获取网易云音乐用户 ID

ID 为个人主页页面（`https://music.163.com/#/user/home?id=xxx`），`id` 后紧跟的那串数字

4. 获取网易云音乐用户 Token

在登录态下打开浏览器开发者工具，查看 Cookie，获取 `key` 为 `MUSIC_U` 的 `value`

### 设置

1. Fork 这个项目

2. 进入你 Fork 的项目，启用 Github ACtions

3. 编辑 `.github/workflows/schedule.yml` 文件中的环境变量：

  - **GIST_ID**: 从新建的 Github Gist 的 `url` 上获取到的 Gist ID

  - **USER_ID**: 网易云音乐用户 ID

4. 在项目的 `Settings > Secrets` 中创建两个变量 `GH_TOKEN` 和 `USER_TOKEN`，分别为 Github Token 和 网易云音乐用户 Token

5. 将文件修改 push 到项目

6. [在个人资料中嵌入 Gist](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/pinning-items-to-your-profile)
