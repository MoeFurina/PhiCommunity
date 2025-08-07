<div align="center">
<img alt="logo" height="80" src="./public/Appicon.png" />
<h1>PhiCommunity Revive</h1>
<p>A fork version of Phicommunity</p>
</div>
<br />

## 这是什么？

这是一款名为`PhiCommunity`的节奏游戏分支可自部署的版本，它仿照`Phigros`制作，源仓库为[PhiCommunity](https://github.com/yuameshi/phicommunity)

## 开始部署
### 部署谱面仓库(可能必要)
部署方法请转到 [PhiCommunity-Charts-Repo](https://github.com/PhiGameRevive/PhiCommunity-Charts-Repo)

### Github Pages部署
1. 点击右上角`Fork`按钮创建当前仓库的副本
> **可选:** 在`.env`文件中输入自己谱面仓库文件的域名
2. 点击项目界面的`Actions`, 点击绿色按钮启用`Github Actions`(如果有)
3. 点开项目设置, 转到`Pages`选项卡, 应用以下设置   

| 设置项        | 设置内容                                                                     |
|---------------|-----------------------------------------------------------------------------|
| Source        | `Deploy from a branch`                                                      |
| Branch        | `gh-pages` `/`(root)                                                        |
| Custom Domain | 输入你的域名, 在域名控制台添加`CNAME`记录, 内容为`你的用户名.github.io`        |
5. 最后点击`Save`保存即可, `Github Actions`应该会自动运行, 如果没有, 在项目页面`Actions`选项卡中, 点击 `Build and Deploy to GitHub Pages` 后选择`Run Workflow`即可

### Vercel部署
1. 重复`Github Pages部署`的步骤一的流程
> **可选:** 在`.env`文件中输入自己谱面仓库文件的域名
2. 打开[Vercel网站](https://vercel.com), 注册账号, **注册时一定要用国外邮箱, 不然要发工单注册**
3. 注册完成后进入主页面点击`Add New`, 选择`Project`
4. 在仓库选择页面选择你刚刚创建的副本, 随后点击`Deploy`
5. 部署完成后添加域名, 这里不过多赘述
> **注意: 你的域名一定要带`vercel`关键字, 否则仓库链接会使用Github Pages的配置** (其实也不用)

### Cloudflare Pages部署
1. 重复`Github Pages部署`的步骤一的流程, 注册[Cloudflare账号](https://dash.cloudflare.com/sign-up)
> **可选:** 在`.env`文件中输入自己谱面仓库文件的域名
2. 打开[Cloudflare Dashboard](https://dash.cloudflare.com), 转到`计算(Workers)` ==> `Worker 和 Pages`
3. 单击`创建`, 选项卡选择`Pages`, 选择`导入现有储存库`
4. 登录`Github`账号后选择你刚刚创建的副本, 构建设置按照以下操作

| 构建设置 | 设置内容     |
|---------|-------------|
| 构建命令 | `pnpm i && pnpm build` |
| 构建输出目录 | `dist` |
5. 点击`保存并部署`, 在部署期间可以退出页面设置域名
6. 进入项目页面点击`自定义域`添加自己的域名
> **注意: 你的域名一定要带`cf`关键字, 否则仓库链接会使用Github Pages的配置** (其实也不用)
## 许可证

源代码(不包括多媒体资源，除非另有说明)在[AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html)许可下分发

<details>
<summary>简要概述AGPL-3.0协议内容</summary>

GNU Affero 通用公共许可证 v3.0

这种最强大的 Copyleft 许可的许可取决于提供许可作品和修改的完整源代码，其中包括在同一许可下使用许可作品的大型作品。 必须保留版权和许可声明。 贡献者明确授予专利权。 当修改版本用于通过网络提供服务时，必须提供修改版本的完整源代码。

您获得的权限:

-   商业用途
-   修改
-   分发
-   专利使用
-   私人使用

您将被此许可证限制:

-   责任
-   保障

再创作所需的条件:

-   包含许可和版权声明
-   标明修改的内容
-   同样保持开源
-   作为网络服务使用视为分发
-   使用相同的许可证(AGPL-3.0)

</details>
<br >

对于多媒体资源，我们保留著作权。

> 对于`多媒体资源`的定义
>
> 包括但不限于拓展名包含 `ogg`、`mp3`、`aac`、`wav`、`jp(e)g`、`png`、`svg`、`sketch`、`zip`、`au3`、`aup3-shm`、`aup3-wal`、`flp` 字段的文件。
>
> 包括但不限于文件头标识包含 `ogg`、`mp3`、`aac`、`wav`、`jp(e)g`、`png`、`svg`、`sketch`、`zip`、`au3`、`aup3-shm`、`aup3-wal`、`flp` 文件头标识特征的文件。

## 如何贡献

如您所见，游戏还没有完成，具体体现在“谱面少”和“性能差”。

### 为`谱面`做贡献

如需提交谱面文件，请前往[此仓库](https://github.com/phigamerevive/PhiCommunity-Charts-Repo)。

### 贡献代码

如果您想提高该项目的代码质量，请执行上述类似操作：`Fork->Clone->EditCode->Commit->Upload->Open Pull Requests`。不要忘记写下您修改的内容和改进的内容！

注意，贡献代码请不要修改`缩进`，贡献前请进行格式化(使用 Prettier，项目内已有 Prettier 设置)和查错(使用 ESLint，项目内已经有 ESLint 配置文件)操作。
