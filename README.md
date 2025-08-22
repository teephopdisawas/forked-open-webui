# Open WebUI 💫 [FORKED] ✨

*your ai companion that actually gets you* 

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

> **Real talk**: This is a fork of the OG [Open WebUI](https://github.com/open-webui/open-webui) project by the legend [Timothy Jaeryang Baek](https://github.com/tjbck) 🙌

**Here's the tea:**
- ✅ Same fire features as the original (no 🧢)
- 🔄 Might have some extra sauce or experimental features we're cooking up
- 📍 For the official releases and main development, hit up the [original repo](https://github.com/open-webui/open-webui)
- 💬 Need help? The [Discord community](https://discord.gg/5rJgQTnV4s) is where it's at

---

## ✨ What is Open WebUI?

**Open WebUI** is basically the AI platform that hits different 🎯. It's [extensible](https://docs.openwebui.com/features/plugin/), absolutely loaded with features, and honestly? It just works. This **self-hosted AI platform** runs completely offline (privacy queen energy 👑) and vibes with **Ollama**, **OpenAI-compatible APIs**, plus has its own **built-in inference engine** for RAG. It's giving main character energy for AI deployments, fr.

<div align="center">

![Open WebUI Demo](./demo.gif)

</div>

> [!TIP]  
> **Looking for an [Enterprise Plan](https://docs.openwebui.com/enterprise)?** – **[Let's talk business! 💼](mailto:sales@openwebui.com)**
>
> Level up with **enhanced capabilities** including **custom theming and branding**, **Service Level Agreement (SLA) support**, **Long-Term Support (LTS) versions**, and **so much more!**

📚 **Docs**: [docs.openwebui.com](https://docs.openwebui.com/) | 💬 **Community**: [Discord](https://discord.gg/5rJgQTnV4s) (where the cool kids hang)

---

## 🚀 Quick Start (Let's Get This Bread!)

### Option 1: Docker (The Move 💯)

```bash
# With Ollama on your computer (this setup is *chef's kiss*)
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data --name open-webui --restart always \
  ghcr.io/open-webui/open-webui:main
```

```bash
# OpenAI API only (straight to the point)
docker run -d -p 3000:8080 -e OPENAI_API_KEY=your_secret_key \
  -v open-webui:/app/backend/data --name open-webui --restart always \
  ghcr.io/open-webui/open-webui:main
```

### Option 2: Python pip (For the OGs)

```bash
pip install open-webui
open-webui serve
```

**Time to vibe**: [http://localhost:3000](http://localhost:3000) (Docker) or [http://localhost:8080](http://localhost:8080) (pip)

> [!NOTE]  
> **Want more options?** Our [Installation Guide](./INSTALLATION.md) has the full menu - Docker Compose, Kubernetes, GPU support, and all the advanced configs your heart desires ✨

---

## ⭐ Key Features (This Thing is STACKED!)

<div align="center">
<table>
<tr>
<td valign="top">

### 🛠️ **Setup & Integration**
- 🚀 **Effortless Setup**: Docker/Kubernetes support (it just works, no cap)
- 🤝 **Multiple APIs**: Ollama, OpenAI, LMStudio, GroqCloud (all the good stuff)
- 📱 **PWA Support**: Native mobile app experience (your phone will thank you)
- 🔄 **SCIM 2.0**: Enterprise user provisioning (fancy business things)

</td>
<td valign="top">

### 🤖 **AI Capabilities**
- ⚙️ **Multi-Model Chat**: Parallel model conversations (like group chat but with AIs)
- 📚 **Local RAG**: Document integration with `#` command (your docs, but smart)
- 🔍 **Web Search**: Multiple search providers (Google who?)
- 🐍 **Python Functions**: Built-in code editor (code while you chat, lowkey genius)

</td>
</tr>
<tr>
<td valign="top">

### 🎨 **User Experience**
- 📱 **Responsive Design**: Desktop, laptop, mobile (looks good everywhere, periodt)
- ✒️ **Markdown/LaTeX**: Full formatting support (make it pretty)
- 🎤 **Voice/Video**: Hands-free communication (talk to your AI bestie)
- 🌐 **Multilingual**: i18n support (speaks your language, literally)

</td>
<td valign="top">

### 🔐 **Security & Control**
- 🛡️ **Granular Permissions**: User groups & roles (you're the main character)
- 🔐 **RBAC**: Role-based access control (keeping things secure, as it should be)
- 🌐 **Web Browsing**: Safe URL integration (browse without the stress)
- 🎨 **Image Generation**: DALL-E, ComfyUI support (AI art goes brrr)

</td>
</tr>
</table>
</div>

> **Learn more**: Full feature deep-dive at [docs.openwebui.com/features](https://docs.openwebui.com/features) (trust me, there's even more)

---

## 🙌 Sponsors (The Real Ones!)

> **Shoutout**: These sponsors keep the original [Open WebUI project](https://github.com/open-webui/open-webui) running. Mad respect for supporting the open-source community 🫡

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

## 📖 Documentation & Resources (Your Survival Guide)

<div align="center">
<table>
<tr>
<td align="center">📚<br><strong><a href="https://docs.openwebui.com/">Official Documentation</a></strong><br><em>Complete guides & API reference (your new best friend)</em></td>
<td align="center">🚀<br><strong><a href="./INSTALLATION.md">Installation Guide</a></strong><br><em>Step-by-step setup instructions (we got you covered)</em></td>
<td align="center">🛠️<br><strong><a href="./TROUBLESHOOTING.md">Troubleshooting</a></strong><br><em>Common issues & solutions (for when things get spicy)</em></td>
</tr>
<tr>
<td align="center">💬<br><strong><a href="https://discord.gg/5rJgQTnV4s">Discord Community</a></strong><br><em>Get help & share ideas (the squad is here for you)</em></td>
<td align="center">🌟<br><strong><a href="https://docs.openwebui.com/roadmap/">Roadmap</a></strong><br><em>Upcoming features (spoiler alert: it's fire)</em></td>
<td align="center">🤝<br><strong><a href="./docs/CONTRIBUTING.md">Contributing</a></strong><br><em>Join the development (become part of the story)</em></td>
</tr>
</table>
</div>

---

## 💬 Support & Community (We Got Your Back!)

### For This Fork
- 🐛 **Issues**: Found a bug in our fork? Drop it in this repo's issues (we're on it)
- 💡 **Features**: Got ideas for this fork? Let's brainstorm together!

### For General Open WebUI Vibes
- 💬 **Community**: Join the [Open WebUI Discord](https://discord.gg/5rJgQTnV4s) (where the magic happens)
- 📚 **Documentation**: Browse [docs.openwebui.com](https://docs.openwebui.com/) (all the answers you need)
- 🐛 **Original Issues**: Check [open-webui/open-webui](https://github.com/open-webui/open-webui/issues) (for the OG repo stuff)

---

## 📄 License

This project is licensed under the [Open WebUI License](LICENSE), a revised BSD-3-Clause license with branding preservation requirements. See the [LICENSE](LICENSE) file for complete terms.

---

## 🌟 What's Next?

Peep the future at the [Open WebUI Roadmap](https://docs.openwebui.com/roadmap/) (spoiler: it's about to be even more incredible). This fork might have some extra goodies cooking or might be vibing to a different timeline ✨

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

**Original Open WebUI created by [Timothy Jaeryang Baek](https://github.com/tjbck)** 👑

*Let's make Open WebUI even more fire together!* 🔥💪

</div>