# Open WebUI Installation Guide 🚀✨

*Getting your AI bestie set up is about to be so easy, no cap* 💯

---

## 🎯 Quick Start (The Fastest Way, Periodt)

### Option 1: Docker (This is THE move 🔥)

**With Ollama on your computer** (chef's kiss setup):
```bash
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data --name open-webui --restart always \
  ghcr.io/open-webui/open-webui:main
```

**OpenAI API only** (straight vibes):
```bash
docker run -d -p 3000:8080 -e OPENAI_API_KEY=your_secret_key \
  -v open-webui:/app/backend/data --name open-webui --restart always \
  ghcr.io/open-webui/open-webui:main
```

### Option 2: Python pip (For the coding queens 👑)

```bash
pip install open-webui
open-webui serve
```

**Ready to vibe**: Hit up [http://localhost:3000](http://localhost:3000) (Docker) or [http://localhost:8080](http://localhost:8080) (pip)

---

## 🐳 Docker Installation (The Full Menu)

### Basic Docker Setup

**Step 1**: Make sure Docker is installed (if not, bestie, what are we doing? 😅)
- Download Docker from [docker.com](https://docker.com) - it's giving main character energy

**Step 2**: Choose your setup style:

#### With Ollama (Local AI, privacy queen energy 💅)
```bash
# Pull the image (this might take a hot minute)
docker pull ghcr.io/open-webui/open-webui:main

# Run it (this command is *chef's kiss*)
docker run -d \
  --name open-webui \
  --restart always \
  -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  ghcr.io/open-webui/open-webui:main
```

#### With OpenAI API (Cloud vibes ☁️)
```bash
docker run -d \
  --name open-webui \
  --restart always \
  -p 3000:8080 \
  -e OPENAI_API_KEY=your_actual_api_key_bestie \
  -v open-webui:/app/backend/data \
  ghcr.io/open-webui/open-webui:main
```

#### GPU Support (For when you need that extra power 💪)
```bash
docker run -d \
  --name open-webui \
  --restart always \
  --gpus all \
  -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  ghcr.io/open-webui/open-webui:main
```

### Docker Compose (Organization queen setup 📋)

Create a `docker-compose.yaml` file (this setup is immaculate):

```yaml
version: '3.8'

services:
  open-webui:
    image: ghcr.io/open-webui/open-webui:main
    container_name: open-webui
    restart: unless-stopped
    ports:
      - "3000:8080"
    environment:
      - OLLAMA_BASE_URL=http://host.docker.internal:11434
      # Add your API keys here if needed, bestie
      # - OPENAI_API_KEY=your_key_here
    volumes:
      - open-webui:/app/backend/data
    extra_hosts:
      - "host.docker.internal:host-gateway"

volumes:
  open-webui: {}
```

Run it with:
```bash
docker compose up -d
```

---

## 🐍 Python Installation (The OG Way)

### Prerequisites (Gotta have these, no negotiation)
- Python 3.11+ (anything older and we're not gonna talk about that 💀)
- pip (should come with Python, but let's make sure)

### Installation Steps

**Option 1: Simple install** (just hits different):
```bash
pip install open-webui
open-webui serve
```

**Option 2: From source** (for the developers who understood the assignment):
```bash
git clone https://github.com/open-webui/open-webui.git
cd open-webui
pip install -e .
npm install
npm run build
open-webui serve
```

---

## ☸️ Kubernetes Installation (Enterprise queen energy 💼)

### Using Kustomize (Clean and simple, the way we like it)

**For CPU-only setup** (still powerful though):
```bash
kubectl apply -f ./kubernetes/manifest/base
```

**For GPU-enabled setup** (now we're talking 🔥):
```bash
kubectl apply -k ./kubernetes/manifest
```

### Using Helm (Package manager vibes 📦)

**Step 1**: Package the Helm chart (organization is key):
```bash
helm package ./kubernetes/helm/
```

**Step 2**: Install based on your setup:

**CPU-only deployment**:
```bash
helm install ollama-webui ./ollama-webui-*.tgz
```

**GPU-enabled deployment** (for when you need that power):
```bash
helm install ollama-webui ./ollama-webui-*.tgz --set ollama.resources.limits.nvidia.com/gpu="1"
```

**Pro tip**: Check the `kubernetes/helm/values.yaml` file for all customization options (there's a whole menu of settings, bestie!)

---

## 🛠️ Advanced Configuration (For the power users)

### Environment Variables (Customize everything, main character energy)

Common environment variables you might want to set:
```bash
# API Configuration
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key
GOOGLE_API_KEY=your_google_key

# Ollama Configuration
OLLAMA_BASE_URL=http://host.docker.internal:11434

# Database (if you want to get fancy)
DATABASE_URL=sqlite:///app/backend/data/webui.db

# Authentication
ENABLE_SIGNUP=true
DEFAULT_USER_ROLE=user

# File Uploads
ENABLE_IMAGE_GENERATION=true
```

### Custom Domains & HTTPS (Professional setup energy 💅)

If you're setting this up with a custom domain (we love to see it), you'll need:

1. **Reverse proxy** (nginx, traefik, etc.)
2. **SSL certificate** (Let's Encrypt is free and valid)
3. **Domain configuration** (point it to your server)

Example nginx config (this setup is *chef's kiss*):
```nginx
server {
    listen 443 ssl;
    server_name your-domain.com;
    
    # SSL configuration
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/private.key;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## 🔧 Troubleshooting (When Things Get Spicy 🌶️)

**Can't connect to Ollama?**
- Make sure Ollama is actually running (check with `ollama list`)
- Docker containers can't see localhost, use `host.docker.internal` instead
- Port 11434 should be open (that's Ollama's default)

**Container won't start?**
- Check Docker logs: `docker logs open-webui`
- Make sure port 3000 isn't already taken
- Verify your environment variables are set correctly

**Performance issues?**
- If using GPU, make sure Docker has GPU access
- Check your system resources (RAM, CPU)
- Consider using a smaller model for testing

**Still stuck?** Join our [Discord community](https://discord.gg/5rJgQTnV4s) - the squad is always ready to help! 💬

---

## 🎉 What's Next?

Once you've got Open WebUI running (and you absolutely will, bestie), you might want to:

- 📚 Check out the [official docs](https://docs.openwebui.com/) for all the features
- 🤖 Download some models in Ollama (`ollama pull llama2`)  
- 🎨 Customize your setup with themes and settings
- 💬 Join the community and share your setup

**Welcome to the AI revolution - you're about to have the time of your life!** 🚀✨
