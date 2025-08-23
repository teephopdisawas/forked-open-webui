# Open WebUI Troubleshooting Guide 🔧✨

*When things get a little spicy, we got your back bestie* 🌶️💪

---

## 🧠 Understanding How This Magic Works

The Open WebUI setup is giving major efficiency vibes 🎯. Here's the tea on how everything connects:

**The Architecture (But Make It Simple)**:
- Your browser talks to Open WebUI 💬
- Open WebUI talks to Ollama/OpenAI (the backend reverse proxy doing the heavy lifting) 🔄
- Everything stays secure and CORS-free (we love to see it) 🛡️

**How Requests Flow**:
- When you send a message, it goes to Open WebUI first (`/ollama` route) 
- Open WebUI forwards it to the actual AI service (`OLLAMA_BASE_URL`)
- So `/ollama/api/tags` in the UI = `OLLAMA_BASE_URL/api/tags` in the backend
- This design is *chef's kiss* for security - no direct API exposure ✨

---

## 🚨 Connection Issues (When Your AI Goes MIA)

### "Server Connection Error" (The Classic)

**What's happening**: Your Docker container is basically trying to find Ollama at `127.0.0.1:11434` but can't see it (it's giving "where tf are you?" energy 😅)

**The Fix** (This will save your life):
Use the `--network=host` flag in your Docker command. Note that your port changes from 3000 to 8080:

```bash
docker run -d --network=host -v open-webui:/app/backend/data \
  -e OLLAMA_BASE_URL=http://127.0.0.1:11434 \
  --name open-webui --restart always \
  ghcr.io/open-webui/open-webui:main
```

**New link**: `http://localhost:8080` (don't forget to update your bookmarks, bestie!)

### Slow Response Timeout (When AI Takes Forever)

**The Issue**: Open WebUI has a 5-minute timeout for Ollama responses. Sometimes models take their sweet time (we've all been there 💀)

**The Solution**: Adjust the timeout with this environment variable:
```bash
-e AIOHTTP_CLIENT_TIMEOUT=600  # 10 minutes, plenty of time for even the slowest models
```

---

## 🔍 General Connection Troubleshooting (The Ultimate Checklist)

### Step 1: Version Check (First Things First)
**Always** make sure you're running the latest Ollama version. Outdated versions are not the vibe 📱

Visit [ollama.com](https://ollama.com/) and get the latest - your future self will thank you!

### Step 2: URL Configuration Deep Dive

**For Docker Users**:
1. Set `OLLAMA_BASE_URL` correctly when running the container:
   ```bash
   -e OLLAMA_BASE_URL=http://192.168.1.100:11434  # Replace with your actual server IP
   ```

**In the Open WebUI Settings**:
1. Navigate to "Settings" → "General" (it's giving main character energy when you find it)
2. Confirm "Ollama Server URL" is set to your actual Ollama URL
3. Common setups:
   - Local: `http://localhost:11434`
   - Docker: `http://host.docker.internal:11434`
   - Remote server: `http://YOUR_SERVER_IP:11434`

### Step 3: The Port Situation 🚪

**Common port issues and fixes**:
- Port 11434 blocked by firewall → Open that port, bestie!
- Port already in use → Check what's using it with `netstat -tulpn | grep 11434`
- Wrong port in URL → Double-check Ollama's actual port (it's usually 11434 but could be different)

---

## 🐳 Docker-Specific Issues (Container Drama)

### "Container Won't Start" (The Panic Mode)

**Check the logs first** (this will tell you everything):
```bash
docker logs open-webui
```

**Common issues and fixes**:
- Port 3000/8080 already taken → Use a different port: `-p 3001:8080`
- Permissions issues → Make sure Docker can access your volumes
- Out of disk space → Clean up with `docker system prune`

### "Can't Reach Ollama from Container" 

**The Docker network situation** is real. Containers can't see `localhost` the same way you do.

**Solutions**:
1. Use `--add-host=host.docker.internal:host-gateway` (recommended)
2. Use `--network=host` (changes your port to 8080)
3. Run Ollama in Docker too and use Docker networking

---

## 🤖 Model & API Issues (When Your AI Needs Therapy)

### "No Models Available" (The Empty Dropdown)

**Troubleshooting steps**:
1. **Check if Ollama has models**: `ollama list` (should show your downloaded models)
2. **Download a model if empty**: `ollama pull llama2` (start with something lightweight)
3. **Refresh the connection**: Restart Open WebUI container
4. **Check API connectivity**: Test Ollama directly at `http://localhost:11434/api/tags`

### "Model Loading Failed" (When AI Says "Nah")

**Common causes**:
- Not enough RAM (large models are hungry beasts 🦁)
- Model corrupted (happens sometimes) → Re-download with `ollama pull [model-name]`
- Ollama service crashed → Restart Ollama

### "API Key Invalid" (OpenAI/Anthropic Issues)

**For OpenAI**:
- Double-check your API key at [platform.openai.com](https://platform.openai.com)
- Make sure you have credits (broke API keys don't work, periodt)
- Verify the key is set correctly in environment variables

**For other APIs**: Same energy - verify keys, credits, and permissions

---

## 🌐 Network & Proxy Issues (The Connection Drama)

### "CORS Errors" (Browser Being Dramatic)

**What's happening**: Browser security being overprotective (valid but annoying)

**Solutions**:
- Use proper domain setup with reverse proxy
- Don't access directly via IP if possible
- Make sure your reverse proxy passes the right headers

### "SSL/HTTPS Issues" (Security Theater)

**For custom domains**:
- Get a proper SSL certificate (Let's Encrypt is free and valid!)
- Configure your reverse proxy correctly
- Don't use self-signed certs (browsers will throw a fit 😤)

### "Behind Corporate Firewall" (The Workplace Struggle)

**Common blocks**:
- Outbound API calls to OpenAI/Anthropic
- Docker registry access
- Non-standard ports

**Solutions**:
- Ask IT to whitelist necessary domains
- Use VPN if allowed
- Consider local-only setup with Ollama

---

## 📱 Mobile & PWA Issues (Phone Problems)

### "PWA Won't Install" (App Store Who?)

**Requirements for PWA**:
- HTTPS connection (localhost is fine for testing)
- Proper manifest.json (should be included)
- Service worker registered

**Troubleshooting**:
- Clear browser cache and try again
- Make sure you're using a supported browser
- Check developer console for errors

---

## 🚑 Emergency Fixes (When Everything Is On Fire 🔥)

### "Nothing Works, Send Help"

**Nuclear option** (resets everything):
```bash
# Stop and remove container
docker stop open-webui && docker rm open-webui

# Remove volume (WARNING: This deletes all your data!)
docker volume rm open-webui

# Fresh install
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data --name open-webui --restart always \
  ghcr.io/open-webui/open-webui:main
```

### "Clean Slate Setup" (Fresh Start Energy)

1. **Stop all related containers**: `docker stop $(docker ps -q)`
2. **Clean Docker system**: `docker system prune -a` (removes everything unused)
3. **Reinstall Ollama** from scratch
4. **Follow installation guide** from the beginning
5. **Test with simple model** like `llama2:7b`

---

## 💬 Getting Help (The Squad Is Here For You)

### Before Asking for Help (Prep Work That Actually Helps)

**Gather this info** (it's giving organized energy):
- Operating system (Windows/Mac/Linux)
- Docker version: `docker --version`
- Open WebUI version (check container logs)
- Ollama version: `ollama --version`
- The exact error message (screenshots are valid!)
- What you were trying to do when it broke

### Where to Get Help (The Community That Cares)

- 💬 **Discord Community**: [discord.gg/5rJgQTnV4s](https://discord.gg/5rJgQTnV4s) (most active, real-time help)
- 📚 **Official Docs**: [docs.openwebui.com](https://docs.openwebui.com/) (comprehensive guides)
- 🐛 **GitHub Issues**: For actual bugs (not basic setup help)

**Pro tip**: Search existing Discord messages first - someone probably had the same issue (and got it solved!) ✨

---

## 🎯 Prevention > Fixing (Avoiding Future Drama)

### Best Practices (Keep Things Smooth)

- **Regular updates**: Keep Ollama and Open WebUI updated
- **Resource monitoring**: Watch your RAM and disk usage
- **Backup configurations**: Save your docker-compose files
- **Test changes**: Don't change everything at once
- **Log monitoring**: Check logs regularly for early warning signs

### Pro Setup Tips (Main Character Energy)

- Use Docker Compose for easy management
- Set up proper monitoring (Grafana, Prometheus if you're fancy)
- Have a staging environment for testing updates
- Document your customizations (future you will thank you!)

---

**Remember bestie**: Every expert was once a beginner who refused to give up. You got this! 💪✨

*Still stuck? The community has your back - don't hesitate to ask for help!* 💬
