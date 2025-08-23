# LMStudio Setup Guide

This guide helps you connect Open WebUI to LMStudio for running local models.

## Prerequisites

1. **LMStudio**: Download and install [LMStudio](https://lmstudio.ai/) 
2. **Model**: Download at least one model in LMStudio

## Step 1: Start LMStudio Server

1. Open LMStudio
2. Go to the **Local Server** tab
3. Select a model to load
4. Click **Start Server**
5. Note the server address (usually `http://localhost:1234`)

## Step 2: Configure Open WebUI Connection

### Option A: Using Connection Preset (Recommended)

1. In Open WebUI, go to **Settings** → **Connections**
2. Click **Add Connection**
3. In the **Connection Preset** dropdown, select **LMStudio**
4. The URL and API key will be automatically filled:
   - **URL**: `http://localhost:1234/v1`
   - **Key**: `lm-studio`
5. Click **Verify Connection** to test
6. Click **Save**

### Option B: Manual Configuration

1. In Open WebUI, go to **Settings** → **Connections**
2. Click **Add Connection**
3. Enter the following details:
   - **URL**: `http://localhost:1234/v1`
   - **Key**: `lm-studio` (or leave empty)
   - **Connection Type**: External
4. Click **Verify Connection** to test
5. Click **Save**

## Step 3: Verify Setup

1. After saving the connection, you should see your LMStudio models appear in the model selector
2. Start a new chat and select one of the LMStudio models
3. Send a test message to confirm everything works

## Troubleshooting

### Connection Failed
- **Check if LMStudio server is running**: Look for "Server is running on port 1234" in LMStudio
- **Verify the port**: LMStudio might be running on a different port (check the Local Server tab)
- **Firewall**: Make sure your firewall isn't blocking port 1234

### No Models Appearing
- **Restart the connection**: Try disabling and re-enabling the connection in Open WebUI
- **Check model loading**: Ensure a model is loaded in LMStudio's Local Server tab
- **Refresh models**: In Open WebUI settings, try refreshing the model list

### Performance Issues
- **Model size**: Larger models require more RAM and processing power
- **Concurrent requests**: LMStudio typically handles one request at a time
- **Resource allocation**: Close unnecessary applications to free up resources

## Advanced Configuration

### Custom Port
If LMStudio is running on a different port:
1. Check the port number in LMStudio's Local Server tab
2. Update the URL in Open WebUI to `http://localhost:PORT/v1`

### Remote LMStudio
To connect to LMStudio running on another computer:
1. Replace `localhost` with the IP address of the remote computer
2. Ensure LMStudio server is configured to accept remote connections
3. Check firewall settings on both computers

## Model Management

- **Model Selection**: Choose models appropriate for your hardware capabilities
- **Model Updates**: When you change models in LMStudio, restart the server for changes to take effect
- **Multiple Models**: LMStudio can only serve one model at a time; switch models in LMStudio as needed

## Features and Limitations

### Supported Features
- ✅ Text generation
- ✅ Chat completions
- ✅ System prompts
- ✅ Temperature and other parameters
- ✅ Streaming responses

### Current Limitations
- ❌ Multiple models simultaneously (LMStudio limitation)
- ❌ Function calling (depends on model support)
- ❌ Image generation (LMStudio is text-only)
- ❌ Embeddings (not available through LMStudio's OpenAI-compatible API)

For more information, visit the [LMStudio documentation](https://lmstudio.ai/docs) or the [Open WebUI documentation](https://docs.openwebui.com/).