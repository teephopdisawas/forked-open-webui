# Open WebUI 👋 [FORKED]

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/teephopdisawas/forked-open-webui?style=social)
![GitHub forks](https://img.shields.io/github/forks/teephopdisawas/forked-open-webui?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/teephopdisawas/forked-open-webui?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/teephopdisawas/forked-open-webui?color=red)

[![Discord](https://img.shields.io/badge/Discord-Open_WebUI_Community-blue?logo=discord&logoColor=white)](https://discord.gg/5rJgQTnV4s)
[![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/tjbck)

</div>

---

## 🍴 About This Fork

> **Important**: This is a fork of the original [Open WebUI](https://github.com/open-webui/open-webui) project by [Timothy Jaeryang Baek](https://github.com/tjbck).

**What this means:**
- ✅ Same core functionality and features as the original
- 🔄 May include additional customizations or experimental features
- 📍 For official releases and main development, visit the [original repository](https://github.com/open-webui/open-webui)
- 💬 For general support, use the original project's [Discord community](https://discord.gg/5rJgQTnV4s)

---

## ✨ What is Open WebUI?

**Open WebUI** is an [extensible](https://docs.openwebui.com/features/plugin/), feature-rich, and user-friendly **self-hosted AI platform** designed to operate entirely offline. It supports various LLM runners including **Ollama** and **OpenAI-compatible APIs**, with a **built-in inference engine** for RAG, making it a powerful AI deployment solution.

<div align="center">

![Open WebUI Demo](./demo.gif)

</div>

> [!TIP]  
> **Looking for an [Enterprise Plan](https://docs.openwebui.com/enterprise)?** – **[Speak with Our Sales Team Today!](mailto:sales@openwebui.com)**
>
> Get **enhanced capabilities**, including **custom theming and branding**, **Service Level Agreement (SLA) support**, **Long-Term Support (LTS) versions**, and **more!**

📚 **Documentation**: [docs.openwebui.com](https://docs.openwebui.com/) | 💬 **Community**: [Discord](https://discord.gg/5rJgQTnV4s)

---

## 🚀 Quick Start

### Option 1: Docker (Recommended)

```bash
# With Ollama on your computer
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data --name open-webui --restart always \
  ghcr.io/open-webui/open-webui:main
```

```bash
# OpenAI API only
docker run -d -p 3000:8080 -e OPENAI_API_KEY=your_secret_key \
  -v open-webui:/app/backend/data --name open-webui --restart always \
  ghcr.io/open-webui/open-webui:main
```

### Option 2: Python pip

```bash
pip install open-webui
open-webui serve
```

**Access**: [http://localhost:3000](http://localhost:3000) (Docker) or [http://localhost:8080](http://localhost:8080) (pip)

> [!NOTE]  
> **Need more options?** See our comprehensive [Installation Guide](./INSTALLATION.md) for Docker Compose, Kubernetes, GPU support, and advanced configurations.

---

## ⭐ Key Features

<div align="center">
<table>
<tr>
<td valign="top">

### 🛠️ **Setup & Integration**
- 🚀 **Effortless Setup**: Docker/Kubernetes support
- 🤝 **Multiple APIs**: Ollama, OpenAI, LMStudio, GroqCloud
- 📱 **PWA Support**: Native mobile app experience
- 🔄 **SCIM 2.0**: Enterprise user provisioning

</td>
<td valign="top">

### 🤖 **AI Capabilities**
- ⚙️ **Multi-Model Chat**: Parallel model conversations
- 📚 **Local RAG**: Document integration with `#` command
- 🔍 **Web Search**: Multiple search providers
- 🐍 **Python Functions**: Built-in code editor

</td>
</tr>
<tr>
<td valign="top">

### 🎨 **User Experience**
- 📱 **Responsive Design**: Desktop, laptop, mobile
- ✒️ **Markdown/LaTeX**: Full formatting support
- 🎤 **Voice/Video**: Hands-free communication
- 🌐 **Multilingual**: i18n support

</td>
<td valign="top">

### 🔐 **Security & Control**
- 🛡️ **Granular Permissions**: User groups & roles
- 🔐 **RBAC**: Role-based access control
- 🌐 **Web Browsing**: Safe URL integration
- 🎨 **Image Generation**: DALL-E, ComfyUI support

</td>
</tr>
</table>
</div>

> **Learn more**: Comprehensive feature overview at [docs.openwebui.com/features](https://docs.openwebui.com/features)

---

## 🙌 Sponsors

> **Note**: These sponsors support the original [Open WebUI project](https://github.com/open-webui/open-webui). We acknowledge their valuable contribution to the open-source community.

<div align="center">
<table>
  <tr>
    <td align="center">
      <a href="https://tailscale.com/blog/self-host-a-local-ai-stack/?utm_source=OpenWebUI&utm_medium=paid-ad-placement&utm_campaign=OpenWebUI-Docs" target="_blank">
        <img src="https://docs.openwebui.com/sponsors/logos/tailscale.png" alt="Tailscale" width="120"/>
      </a><br>
      <a href="https://tailscale.com/blog/self-host-a-local-ai-stack/?utm_source=OpenWebUI&utm_medium=paid-ad-placement&utm_campaign=OpenWebUI-Docs"><strong>Tailscale</strong></a><br>
      <em>Connect self-hosted AI to any device</em>
    </td>
    <td align="center">
      <a href="https://warp.dev/open-webui" target="_blank">
        <img src="https://docs.openwebui.com/sponsors/logos/warp.png" alt="Warp" width="120"/>
      </a><br>
      <a href="https://warp.dev/open-webui"><strong>Warp</strong></a><br>
      <em>The intelligent terminal for developers</em>
    </td>
  </tr>
</table>
</div>

---

## 📖 Documentation & Resources

<div align="center">
<table>
<tr>
<td align="center">📚<br><strong><a href="https://docs.openwebui.com/">Official Documentation</a></strong><br><em>Complete guides & API reference</em></td>
<td align="center">🚀<br><strong><a href="./INSTALLATION.md">Installation Guide</a></strong><br><em>Detailed setup instructions</em></td>
<td align="center">🛠️<br><strong><a href="./TROUBLESHOOTING.md">Troubleshooting</a></strong><br><em>Common issues & solutions</em></td>
</tr>
<tr>
<td align="center">💬<br><strong><a href="https://discord.gg/5rJgQTnV4s">Discord Community</a></strong><br><em>Get help & share ideas</em></td>
<td align="center">🌟<br><strong><a href="https://docs.openwebui.com/roadmap/">Roadmap</a></strong><br><em>Upcoming features</em></td>
<td align="center">🤝<br><strong><a href="./docs/CONTRIBUTING.md">Contributing</a></strong><br><em>Join the development</em></td>
</tr>
</table>
</div>

---

## 💬 Support & Community

### For This Fork
- 🐛 **Issues**: Open issues in this repository for fork-specific problems
- 💡 **Features**: Fork-specific feature requests and discussions

### For General Open WebUI Support
- 💬 **Community**: Join the [Open WebUI Discord](https://discord.gg/5rJgQTnV4s)
- 📚 **Documentation**: Browse [docs.openwebui.com](https://docs.openwebui.com/)
- 🐛 **Original Issues**: Check [open-webui/open-webui](https://github.com/open-webui/open-webui/issues)

---

## 📄 License

This project is licensed under the [Open WebUI License](LICENSE), a revised BSD-3-Clause license with branding preservation requirements. See the [LICENSE](LICENSE) file for complete terms.

---

## 🌟 What's Next?

Discover upcoming features on the [Open WebUI Roadmap](https://docs.openwebui.com/roadmap/). This fork may include additional features or follow a different development timeline.

---

## ⭐ Star History

<div align="center">
<a href="https://star-history.com/#teephopdisawas/forked-open-webui&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=teephopdisawas/forked-open-webui&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=teephopdisawas/forked-open-webui&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=teephopdisawas/forked-open-webui&type=Date" />
  </picture>
</a>
</div>

---

<div align="center">

**Original Open WebUI created by [Timothy Jaeryang Baek](https://github.com/tjbck)**

*Let's make Open WebUI even more amazing together!* 💪

</div>