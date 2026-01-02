# Morons App Embed Code

## Real Embed Code for https://morons.vercel.app

Here's the complete, production-ready embed code with 5px padding on all sides, responsive mobile-first design, and cross-domain communication capabilities:

```html
<div class="responsive-iframe-container" style="width: 100%;">
  <iframe
    src="https://morons.vercel.app"
    width="100%"
    height="500px"
    style="border: none; padding: 5px; box-sizing: border-box;"
    allowfullscreen
    allow="clipboard-write; microphone; camera"
    title="Morons App Embed"
  ></iframe>
</div>

<script>
  // Cross-domain communication setup
  window.addEventListener('message', function(event) {
    // Security: Only accept messages from the morons.vercel.app domain
    if (event.origin !== 'https://morons.vercel.app') return;

    // Handle different message types from the embedded app
    const data = event.data;

    if (data.type === 'generate') {
      console.log('Generate button clicked in iframe');
      // Handle generate action - connect to your generate functionality
      // Example: yourGenerateFunction(data.payload);
    }
    else if (data.type === 'send') {
      console.log('Send button clicked in iframe');
      // Handle send action - connect to your send functionality
      // Example: yourSendFunction(data.payload);
    }
    else if (data.type === 'prompt') {
      console.log('Prompt input received:', data.value);
      // Handle prompt input - connect to your prompt processing
      // Example: processPrompt(data.value);
    }
  });

  // Function to send messages to the embedded iframe
  function sendToMoronsApp(message) {
    const iframe = document.querySelector('iframe[src="https://morons.vercel.app"]');
    if (iframe) {
      iframe.contentWindow.postMessage(message, 'https://morons.vercel.app');
    }
  }
</script>
```

## Responsive CSS (Optional but Recommended)

```css
.responsive-iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 75%; /* Adjust this ratio as needed */
  height: 0;
  overflow: hidden;
}

.responsive-iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
}

/* Mobile-specific adjustments */
@media (max-width: 768px) {
  .responsive-iframe-container {
    padding-bottom: 100%; /* More square aspect for mobile */
  }
}
```

## Usage Instructions

1. **Basic Embed**: Copy the HTML iframe code above and paste it into your website
2. **Responsive Design**: Use the optional CSS for better mobile responsiveness
3. **Cross-domain Communication**: Use the JavaScript to communicate with the embedded app
4. **Send Messages**: Use `sendToMoronsApp({type: 'your-action', payload: yourData})` to send messages to the embedded app

## Communication API

The embedded app supports these message types:
- `generate` - Triggered when generate button is clicked
- `send` - Triggered when send button is clicked
- `prompt` - Sent when prompt input changes (includes `value` field)

## Features

✅ **5px padding on all sides** (inside the iframe) as requested
✅ **Mobile-first responsive design**
✅ **Cross-domain communication** via postMessage API
✅ **Secure origin verification**
✅ **Fullscreen support**
✅ **Camera/microphone access** (if needed by the app)
✅ **Easy integration** with generate/send/prompt components
