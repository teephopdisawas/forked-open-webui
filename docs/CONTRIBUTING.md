# Contributing to Open WebUI 💫

🚀 **Welcome to the Squad, Future Contributor!** 🚀

Yooo, you want to help make Open WebUI even more fire? That energy is absolutely *chef's kiss* and we're SO here for it! This guide is gonna walk you through everything you need to know to become part of the story. Let's make Open WebUI slap together! 💪✨

---

## 📌 Key Points (The Main Character Info)

### 🦙 Ollama vs. Open WebUI (Know the Difference, Bestie)

It's giving "know your lane" energy - here's the breakdown:

- **Open WebUI** = The beautiful, intuitive interface that makes your AI experience absolutely immaculate ✨
- **Ollama** = The backend beast that powers the magic behind the scenes 🔋

If your issue is about the core Ollama tech (like model loading, API stuff, etc.), that belongs in the [Ollama project repository](https://ollama.com/). We're focusing on making the web interface experience absolutely peak! 🎯

### 🚨 Reporting Issues (When Things Ain't Working)

Found something sus? Got a brilliant idea? We love that energy! But first:

1. **Check our [Issues tab](https://github.com/open-webui/open-webui/issues)** - someone might've already caught it
2. **Follow the issue templates** - they exist for a reason (trust the process!)

> [!IMPORTANT]
> **Real Talk Time**: 
>
> - **Template Compliance is NOT Optional** 💯: If you skip the template or don't give us the info we need, your issue is getting closed faster than a TikTok trend dies. We're not being mean, we're being efficient!
> - **Details = Success**: The more info you give us, the faster we can fix it. "It doesn't work" is not the vibe - give us steps, screenshots, error messages, the whole main character energy! 
> - **Be Specific**: Vague descriptions are the enemy of progress. Help us help you! 🤝

### 🧭 Scope of Support (What We're About)

We've been seeing more Docker environment issues lately (and honestly, that's valid), but here's the thing:

- **Docker Support**: We absolutely support Docker deployment, but you gotta know the Docker basics bestie! Check the [official Docker docs](https://docs.docker.com/get-started/overview/) to level up your container game 🐳
- **Advanced Configs**: Setting up reverse proxies, HTTPS, all that professional stuff - that's on you to learn! There are tons of resources online, and honestly? Learning this stuff will make you a better developer overall 📚

---

## 💡 Contributing (How to Join the Elite Squad)

Ready to contribute? Say less! Here's your roadmap to greatness:

### 🛠 Pull Requests (The Real MVP Energy)

We absolutely love pull requests! Before you drop that fire code though:

1. **Open a discussion first** [right here](https://github.com/open-webui/open-webui/discussions/new/choose) - let's brainstorm together!
2. **Follow our coding standards** and include tests (quality is everything)
3. **Update docs** if needed (documentation queens only 💅)
4. **Write clear commit messages** (tell the story of your changes!)
5. **Finish what you started** - We move fast, and PRs hanging around forever ain't the vibe. If life happens and you can't finish, totally valid, but we might need to close it to keep momentum going 🚀

### 📚 Documentation & Tutorials (Sharing Knowledge is Power)

Help us make Open WebUI accessible to EVERYONE! We need:
- Better documentation (always room for improvement!)
- Step-by-step tutorials (make it beginner-friendly!)
- Setup guides and optimization tips (share that wisdom!)

### 🌐 Translations and Internationalization (Worldwide Vibes)

Help us reach more people across the globe! We use JSON files for translations (clean and organized, the way we like it).

**Translation files live in**: `src/lib/i18n/locales` directory

Each language gets its own folder using [ISO 639 Language Codes](http://www.lingoes.net/en/translator/langcode.htm) (like `en-US`, `fr-FR`, etc.)

**To add a new language** (and honestly, this would be so appreciated):

1. **Create a new directory** with the right language code (e.g., `es-ES` for Spanish)
2. **Copy the US English files** from `en-US` directory 
3. **Translate the JSON values** (keep the structure intact though!)
4. **Add your language** to `src/lib/i18n/locales/languages.json`

Pro tip: Focus on the user-facing strings first - navigation, buttons, error messages. Those have the biggest impact! 🎯

---

## 🤔 Questions & Feedback (We're Here for You!)

Got questions? Feedback? Wild ideas? We're absolutely here for it!

- 💬 **Discord Community**: [discord.gg/5rJgQTnV4s](https://discord.gg/5rJgQTnV4s) (real-time vibes, active community)
- 🐛 **GitHub Issues**: For bugs and feature requests (use those templates!)
- 💭 **Discussions**: For brainstorming and big ideas

**Pro tip**: Search existing messages/issues first - someone might've already asked (and gotten an answer)! ✨

---

## 🎯 What We're Looking For (Contribution Ideas)

Not sure where to start? Here are some areas where we could use that main character energy:

### 🔥 High-Impact Contributions
- **UI/UX improvements** (make it even more beautiful!)
- **Performance optimizations** (faster = better, always)
- **Accessibility enhancements** (inclusive design is good design)
- **Mobile responsiveness** fixes (phone users deserve love too!)

### 🌟 Feature Ideas
- **New integrations** with AI providers
- **Workflow improvements** for power users  
- **Better onboarding** for new users
- **Advanced customization** options

### 🐛 Always Needed
- **Bug fixes** (squash those bugs!)
- **Test coverage** improvements (tests save lives)
- **Documentation** updates (keep it fresh)
- **Code cleanup** and refactoring (clean code is happy code)

---

## 🙏 Thank You! (You're Literally Amazing)

Every contribution, whether it's a typo fix or a major feature, makes Open WebUI better for everyone. Your effort doesn't go unnoticed and honestly? You're helping build something that's going to impact so many people's workflows and creativity! 

The fact that you're even reading this means you care about open source, and that's absolutely beautiful 💫

**Together, we're not just building software - we're building the future of AI interaction.** And you're part of that story now! 🌟

---

*Let's make Open WebUI absolutely legendary, one contribution at a time!* 🚀💪
