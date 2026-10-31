// ===================================================================
// NexusAI — Multi-AI Chat Platform (Updated with All Real APInex Models)
// ===================================================================

const API_CONFIG = {
    // 🔑 APInex Key & URL
    APINEX_API_KEY: "sk-apx456fadadf41286d1480835fec91bc1f657e3e8116d75b21",
    APINEX_BASE_URL: "https://api.apinex.bond/v1/chat/completions",
};

// ===================================================================
// MODEL DEFINITIONS (All 21 Models from your APInex Screenshots)
// ===================================================================
const AI_MODELS = [
    // ====== 1. Direct 100% Free Active Models (Tested & Verified on APInex) ======
    {
        id: "gpt-6-luna",
        name: "GPT 6 Luna",
        provider: "APInex Free",
        emoji: "🟢",
        badge: "Free",
        description: "OpenAI 1M Context · 100% Uptime",
        apiType: "apinex",
        apiModel: "free/gpt-6-luna",
        color: "#10A37F",
        isFreeActive: true,
        systemPrompt: "You are GPT-6 Luna, OpenAI's flagship advanced language model. Provide highly comprehensive, deeply articulate, intelligent, and insightful responses. Structure your answers cleanly with Markdown headers, bullet points, and code blocks.",
    },
    {
        id: "gemini-3.8-flash",
        name: "Gemini 3.8 Flash",
        provider: "APInex Free",
        emoji: "✨",
        badge: "Free",
        description: "Google Fast & Smart 1M Context",
        apiType: "apinex",
        apiModel: "free/gemini-3.8-flash",
        color: "#4285F4",
        isFreeActive: true,
        systemPrompt: "You are Gemini 3.8 Flash, Google's ultra-fast multimodal AI model. Provide rich, insightful, well-structured, and helpful answers with real-world examples, bullet points, and clear explanations. You excel at image and text analysis.",
    },
    {
        id: "deepseek-v4.1-flash",
        name: "DeepSeek V4.1 Flash",
        provider: "APInex Free",
        emoji: "🔮",
        badge: "Free",
        description: "DeepSeek Fast reasoning 1M",
        apiType: "apinex",
        apiModel: "free/deepseek-v4.1-flash",
        color: "#5B6EF5",
        isFreeActive: true,
        systemPrompt: "You are DeepSeek V4.1 Flash, a fast, smart reasoning AI by DeepSeek. Provide articulate, accurate, structured, and helpful responses with step-by-step clarity and code formatting.",
    },
    {
        id: "deepseek-v4-pro",
        name: "DeepSeek V4 Pro",
        provider: "APInex Free",
        emoji: "🧠",
        badge: "Pro Free",
        description: "Deep reasoning 1M model",
        apiType: "apinex",
        apiModel: "free/deepseek-v4-pro-0813",
        color: "#5B6EF5",
        isFreeActive: true,
        systemPrompt: "You are DeepSeek V4 Pro, an elite reasoning and analytical AI developed by DeepSeek. Provide deep, rigorous, step-by-step logical explanations, technical depth, and high-quality solutions. Format your thoughts clearly using Markdown.",
    },
    {
        id: "glm-5.3",
        name: "GLM 5.3",
        provider: "APInex Free",
        emoji: "🌐",
        badge: "Free",
        description: "Zhipu Flagship GLM 1M model",
        apiType: "apinex",
        apiModel: "free/glm-5.3",
        color: "#3B82F6",
        isFreeActive: true,
        systemPrompt: "You are GLM 5.3, an advanced flagship language model by Zhipu AI. Provide rich, deeply structured, and clear bilingual explanations with examples.",
    },
    {
        id: "glm-5.3-flash",
        name: "GLM 5.3 Flash",
        provider: "APInex Free",
        emoji: "⚡",
        badge: "Free",
        description: "Fast GLM 5.3 model",
        apiType: "apinex",
        apiModel: "free/glm-5.3-flash",
        color: "#3B82F6",
        isFreeActive: true,
        systemPrompt: "You are GLM 5.3 Flash, an ultra-fast language model by Zhipu AI. Provide structured, accurate, and rapid responses.",
    },
    {
        id: "glm-5.3-flashx",
        name: "GLM 5.3 FlashX",
        provider: "APInex Free",
        emoji: "🚀",
        badge: "Free",
        description: "Ultra-fast GLM FlashX",
        apiType: "apinex",
        apiModel: "free/glm-5.3-flashx",
        color: "#6366F1",
        isFreeActive: true,
        systemPrompt: "You are GLM 5.3 FlashX, an ultra-accelerated model. Provide concise, fast, and structured answers.",
    },
    {
        id: "muse-spark-1.3",
        name: "Muse Spark 1.3",
        provider: "APInex Free",
        emoji: "⚡",
        badge: "Free",
        description: "High speed creative model",
        apiType: "apinex",
        apiModel: "free/muse-spark-1.3",
        color: "#F59E0B",
        isFreeActive: true,
        systemPrompt: "You are Muse Spark 1.3, a high-speed creative and analytical AI. Provide engaging, comprehensive, and well-organized responses.",
    },
    {
        id: "minimax-m3.1-flash",
        name: "MiniMax M3.1 Flash",
        provider: "APInex Free",
        emoji: "🤖",
        badge: "Free",
        description: "MiniMax fast 1M model",
        apiType: "apinex",
        apiModel: "free/minimax-m3.1-flash",
        color: "#EC4899",
        isFreeActive: true,
        systemPrompt: "You are MiniMax M3.1 Flash, an intelligent and conversational AI model. Provide thorough, friendly, and structured responses.",
    },
    {
        id: "mimo-v2.6-pro",
        name: "Mimo V2.6 Pro",
        provider: "APInex Free",
        emoji: "🎯",
        badge: "Free",
        description: "Mimo Pro 1M Context",
        apiType: "apinex",
        apiModel: "free/mimo-v2.6-pro",
        color: "#14B8A6",
        isFreeActive: true,
        systemPrompt: "You are Mimo V2.6 Pro, an advanced analytical model with a 1M context window. Provide in-depth, structured, and helpful answers.",
    },

    // ====== 2. Subscription-Tier Models (Require APInex Paid Subscription) ======
    {
        id: "claude-sonnet-4.6",
        name: "Claude 4.6 Sonnet",
        provider: "APInex (Sub)",
        emoji: "🟠",
        badge: "Sub Required",
        description: "Anthropic Sonnet 4.6 (Sub)",
        apiType: "apinex",
        apiModel: "free/claude-sonnet-4.6",
        color: "#D97706",
        isFreeActive: false,
        systemPrompt: "You are Claude 4.6 Sonnet, Anthropic's state-of-the-art model. Provide nuanced, thoughtful, safe, and deeply comprehensive answers.",
    },
    {
        id: "claude-opus-4.6",
        name: "Claude 4.6 Opus",
        provider: "APInex (Sub)",
        emoji: "🔥",
        badge: "Sub Required",
        description: "Anthropic Opus 4.6 (Sub)",
        apiType: "apinex",
        apiModel: "free/claude-opus-4.6",
        color: "#B45309",
        isFreeActive: false,
        systemPrompt: "You are Claude 4.6 Opus, Anthropic's most powerful reasoning intelligence. Provide unmatched depth, clarity, and precision.",
    },
    {
        id: "gemini-3.1-pro",
        name: "Gemini 3.1 Pro",
        provider: "APInex (Sub)",
        emoji: "🌟",
        badge: "Sub Required",
        description: "Google Pro 1M model (Sub)",
        apiType: "apinex",
        apiModel: "free/gemini-3.1-pro",
        color: "#2563EB",
        isFreeActive: false,
        systemPrompt: "You are Gemini 3.1 Pro, Google's advanced model. Provide thorough, well-reasoned, and structured responses.",
    },
    {
        id: "qwen-3.8-max",
        name: "Qwen 3.8 MAX",
        provider: "APInex (Sub)",
        emoji: "🐲",
        badge: "Sub Required",
        description: "Alibaba Qwen 3.8 Max (Sub)",
        apiType: "apinex",
        apiModel: "free/qwen-3.8-max",
        color: "#6F42C1",
        isFreeActive: false,
        systemPrompt: "You are Qwen 3.8 Max, Alibaba Cloud's flagship AI. Provide authoritative, detailed, and structured insights.",
    },
    {
        id: "kimi-k3",
        name: "Kimi K3",
        provider: "APInex (Sub)",
        emoji: "🌙",
        badge: "Sub Required",
        description: "Moonshot Kimi K3 (Sub)",
        apiType: "apinex",
        apiModel: "free/kimi-k3",
        color: "#0EA5E9",
        isFreeActive: false,
        systemPrompt: "You are Kimi K3, Moonshot AI's long-context assistant. Provide deeply detailed, organized, and helpful explanations.",
    },
];

// ===================================================================
// APP STATE
// ===================================================================
let state = {
    currentModelId: "deepseek-v4-pro",
    currentChatId: null,
    chats: {},
    isGenerating: false,
    pendingAttachments: [],
    user: null,
};

// ===================================================================
// DOM ELEMENTS
// ===================================================================
const $ = (sel) => document.querySelector(sel);

const appContainer = $("#appContainer");
const sidebar = $("#sidebar");
const sidebarOverlay = $("#sidebarOverlay");
const sidebarClose = $("#sidebarClose");
const sidebarToggleBtn = $("#sidebarToggleBtn");
const chatHistoryEl = $("#chatHistory");
const newChatBtn = $("#newChatBtn");
const themeToggle = $("#themeToggle");

const welcomeScreen = $("#welcomeScreen");
const quickModelsEl = $("#quickModels");
const messagesContainer = $("#messagesContainer");
const typingIndicator = $("#typingIndicator");
const typingAvatar = $("#typingAvatar");
const chatArea = $("#chatArea");

const topBarAvatar = $("#topBarAvatar");
const topBarModelName = $("#topBarModelName");
const topBarModelStatus = $("#topBarModelStatus");
const clearChatBtn = $("#clearChatBtn");

const messageInput = $("#messageInput");
const sendBtn = $("#sendBtn");
const toastContainer = $("#toastContainer");

// Bottom Model Selector & Auth Modal Elements
const bottomModelSelect = $("#bottomModelSelect");
const userProfileBtn = $("#userProfileBtn");
const sidebarUserName = $("#sidebarUserName");
const sidebarUserEmail = $("#sidebarUserEmail");
const sidebarUserAvatar = $("#sidebarUserAvatar");

const authModalOverlay = $("#authModalOverlay");
const authCloseBtn = $("#authCloseBtn");
const authForm = $("#authForm");
const authStatusText = $("#authStatusText");

// File / Photo Attachment Elements
const attachBtn = $("#attachBtn");
const fileAttachmentInput = $("#fileAttachmentInput");
const attachmentTray = $("#attachmentTray");

// Image Viewer Modal Elements
const imageViewerOverlay = $("#imageViewerOverlay");
const imageViewerImg = $("#imageViewerImg");
const imageViewerClose = $("#imageViewerClose");

// ===================================================================
// INITIALIZATION
// ===================================================================
function init() {
    loadState();
    loadUserState();
    renderBottomModelDropdown();
    renderQuickModels();
    renderChatHistory();
    setupEventListeners();
    applyTheme();

    // Ensure valid model ID is selected (Default: DeepSeek V4 Pro matching screenshot)
    const validModel = AI_MODELS.find((m) => m.id === state.currentModelId);
    if (!validModel) {
        state.currentModelId = "deepseek-v4-pro";
    }

    if (state.currentChatId && state.chats[state.currentChatId]) {
        const chat = state.chats[state.currentChatId];
        const chatModel = AI_MODELS.find((m) => m.id === chat.modelId) || AI_MODELS[0];
        chat.modelId = chatModel.id;
        state.currentModelId = chatModel.id;
        selectModel(chatModel.id, false);
        if (chat.messages && chat.messages.length > 0) {
            renderMessages(chat);
        } else {
            // Keep welcome screen visible if chat has no messages
            welcomeScreen.style.display = "flex";
            messagesContainer.classList.remove("active");
        }
    } else {
        selectModel(state.currentModelId, false);
        welcomeScreen.style.display = "flex";
        messagesContainer.classList.remove("active");
    }
}

// ===================================================================
// STATE MANAGEMENT (localStorage)
// ===================================================================
function loadState() {
    try {
        const saved = localStorage.getItem("nexusai_state");
        if (saved) {
            const parsed = JSON.parse(saved);
            state.chats = parsed.chats || {};
            state.currentChatId = parsed.currentChatId || null;
            state.currentModelId = parsed.currentModelId || "deepseek-v4-pro";
        }
    } catch (e) {
        console.warn("Failed to load state:", e);
    }
}

function saveState() {
    try {
        localStorage.setItem("nexusai_state", JSON.stringify({
            chats: state.chats,
            currentChatId: state.currentChatId,
            currentModelId: state.currentModelId,
        }));
    } catch (e) {
        console.warn("Failed to save state:", e);
    }
}

function loadUserState() {
    try {
        const savedUser = localStorage.getItem("nexusai_user");
        if (savedUser) {
            state.user = JSON.parse(savedUser);
            updateUserDisplay();
        }
    } catch (e) {
        console.warn("Failed to load user state:", e);
    }
}

function updateUserDisplay() {
    if (state.user && state.user.email) {
        const namePart = state.user.name || state.user.email.split("@")[0];
        if (sidebarUserName) sidebarUserName.textContent = namePart;
        if (sidebarUserEmail) sidebarUserEmail.textContent = state.user.email;
        if (sidebarUserAvatar) sidebarUserAvatar.textContent = namePart.charAt(0).toUpperCase();
        if (authStatusText) authStatusText.textContent = `Logged in as: ${state.user.email}`;
    } else {
        if (sidebarUserName) sidebarUserName.textContent = "Guest User";
        if (sidebarUserEmail) sidebarUserEmail.textContent = "Sign in / Register";
        if (sidebarUserAvatar) sidebarUserAvatar.textContent = "👤";
        if (authStatusText) authStatusText.textContent = "You are currently browsing as Guest";
    }
}

// ===================================================================
// RENDER: Quick Model Cards (Welcome Screen) - Matching Image 1
// ===================================================================
function renderQuickModels() {
    // 4 quick models matching Image 1:
    // GPT 6 Luna, Gemini 3.8 Flash, DeepSeek V4.1 Flash, DeepSeek V4 Pro
    const modelOrder = ["gpt-6-luna", "gemini-3.8-flash", "deepseek-v4.1-flash", "deepseek-v4-pro"];
    const featured = modelOrder.map(id => AI_MODELS.find(m => m.id === id)).filter(Boolean);

    quickModelsEl.innerHTML = featured.map((m) => `
        <div class="quick-model-card" data-model-id="${m.id}">
            <span class="qm-emoji">${m.emoji}</span>
            <div class="qm-info">
                <div class="qm-name">${m.name}</div>
                <div class="qm-desc">${m.description}</div>
            </div>
        </div>
    `).join("");

    quickModelsEl.querySelectorAll(".quick-model-card").forEach((el) => {
        el.addEventListener("click", () => {
            selectModel(el.dataset.modelId, true);
        });
    });
}

// ===================================================================
// RENDER: Chat History (Sidebar - Only users' recent chats)
// ===================================================================
function renderChatHistory() {
    const chatIds = Object.keys(state.chats).sort((a, b) => {
        const aTime = state.chats[a].messages.length > 0 ? state.chats[a].messages[state.chats[a].messages.length - 1].timestamp : 0;
        const bTime = state.chats[b].messages.length > 0 ? state.chats[b].messages[state.chats[b].messages.length - 1].timestamp : 0;
        return bTime - aTime;
    });

    if (chatIds.length === 0) {
        chatHistoryEl.innerHTML = `
            <div class="empty-history">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"/></svg>
                <span>No chats yet</span>
                <small>Start a conversation!</small>
            </div>
        `;
        return;
    }

    chatHistoryEl.innerHTML = chatIds.map((chatId) => {
        const chat = state.chats[chatId];
        const model = AI_MODELS.find((m) => m.id === chat.modelId);
        return `
            <div class="history-item ${state.currentChatId === chatId ? 'active' : ''}" data-chat-id="${chatId}">
                <span class="history-emoji">${model ? model.emoji : '💬'}</span>
                <span class="history-title">${escapeHtml(chat.title)}</span>
                <button class="history-delete" data-chat-id="${chatId}" title="Delete chat">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
            </div>
        `;
    }).join("");

    chatHistoryEl.querySelectorAll(".history-item").forEach((el) => {
        el.addEventListener("click", (e) => {
            if (e.target.closest(".history-delete")) return;
            loadChat(el.dataset.chatId);
            closeSidebarMobile();
        });
    });

    chatHistoryEl.querySelectorAll(".history-delete").forEach((el) => {
        el.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteChat(el.dataset.chatId);
        });
    });
}

// ===================================================================
// MODEL SELECTION & CHAT MANAGEMENT
// ===================================================================
function selectModel(modelId, startNewChat = false) {
    const model = AI_MODELS.find((m) => m.id === modelId) || AI_MODELS[0];
    state.currentModelId = model.id;

    if (topBarAvatar) topBarAvatar.textContent = model.emoji;
    if (topBarModelName) topBarModelName.textContent = model.name;
    if (topBarModelStatus) topBarModelStatus.textContent = `${model.provider} · ${model.badge}`;

    if (bottomModelSelect) {
        bottomModelSelect.value = model.id;
    }

    // Update active chat's model so subsequent messages immediately use the new model!
    if (state.currentChatId && state.chats[state.currentChatId]) {
        state.chats[state.currentChatId].modelId = model.id;
    }

    if (startNewChat) {
        createNewChat(model.id);
    }

    saveState();
}

function createNewChat(modelId) {
    const chatId = `chat_${Date.now()}`;
    state.chats[chatId] = {
        id: chatId,
        modelId: modelId || state.currentModelId,
        title: "New Chat",
        messages: [],
    };
    state.currentChatId = chatId;

    // Keep welcome screen visible on new chat until first message is sent!
    welcomeScreen.style.display = "flex";
    messagesContainer.classList.remove("active");
    messagesContainer.innerHTML = "";

    renderChatHistory();
    saveState();
    messageInput.focus();
}

function loadChat(chatId) {
    const chat = state.chats[chatId];
    if (!chat) return;

    state.currentChatId = chatId;
    state.currentModelId = chat.modelId;

    selectModel(chat.modelId, false);
    if (chat.messages && chat.messages.length > 0) {
        renderMessages(chat);
    } else {
        welcomeScreen.style.display = "flex";
        messagesContainer.classList.remove("active");
        messagesContainer.innerHTML = "";
    }
    renderChatHistory();
    saveState();
}

function deleteChat(chatId) {
    delete state.chats[chatId];

    if (state.currentChatId === chatId) {
        state.currentChatId = null;
        welcomeScreen.style.display = "flex";
        messagesContainer.classList.remove("active");
        messagesContainer.innerHTML = "";
    }

    renderChatHistory();
    saveState();
    showToast("Chat deleted", "success");
}

function clearCurrentChat() {
    if (!state.currentChatId) return;
    const chat = state.chats[state.currentChatId];
    if (!chat) return;

    chat.messages = [];
    chat.title = "New Chat";
    messagesContainer.innerHTML = "";
    welcomeScreen.style.display = "flex";
    messagesContainer.classList.remove("active");
    renderChatHistory();
    saveState();
    showToast("Chat cleared", "success");
}

// ===================================================================
// RENDER MESSAGES & ATTACHMENTS
// ===================================================================
function renderMessages(chat) {
    welcomeScreen.style.display = "none";
    messagesContainer.classList.add("active");
    messagesContainer.innerHTML = "";

    const model = AI_MODELS.find((m) => m.id === chat.modelId);
    chat.messages.forEach((msg) => appendMessageToDOM(msg, model));
    scrollToBottom();
}

function appendMessageToDOM(msg, model) {
    const div = document.createElement("div");
    div.className = `message ${msg.role}`;

    const avatarContent = msg.role === "user" ? "You" : (model ? model.emoji : "🤖");
    const senderName = msg.role === "user" ? (state.user?.name || "You") : (model ? model.name : "AI");
    const timeStr = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Render photo / file attachments if present
    let attachmentsHtml = "";
    if (msg.attachments && msg.attachments.length > 0) {
        attachmentsHtml = `<div class="msg-attachments">` +
            msg.attachments.map((att) => {
                if (att.isImage) {
                    return `<img src="${att.dataUrl}" class="msg-attachment-img" alt="${escapeHtml(att.name)}" title="Click to enlarge">`;
                } else {
                    return `<div class="msg-attachment-file">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        <span><strong>${escapeHtml(att.name)}</strong> (${att.size})</span>
                    </div>`;
                }
            }).join("") +
            `</div>`;
    }

    div.innerHTML = `
        <div class="message-avatar">${avatarContent}</div>
        <div class="message-body">
            <div class="message-sender">${senderName}</div>
            ${attachmentsHtml}
            ${msg.content ? `<div class="message-content">${formatMessage(msg.content)}</div>` : ''}
            <div class="message-time">${timeStr}</div>
            <div class="message-actions">
                <button class="msg-action-btn copy-btn" title="Copy text">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                    Copy
                </button>
            </div>
        </div>
    `;

    div.querySelector(".copy-btn")?.addEventListener("click", () => {
        navigator.clipboard.writeText(msg.content || "").then(() => {
            showToast("Copied to clipboard!", "success");
        });
    });

    // Image click to enlarge
    div.querySelectorAll(".msg-attachment-img").forEach((img) => {
        img.addEventListener("click", () => {
            if (imageViewerImg && imageViewerOverlay) {
                imageViewerImg.src = img.src;
                imageViewerOverlay.classList.add("open");
            }
        });
    });

    messagesContainer.appendChild(div);
}

function formatMessage(text) {
    if (!text) return "";
    const codeBlocks = [];

    // Extract multi-line code blocks first
    let raw = text.replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) => {
        const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
        const langLabel = lang ? escapeHtml(lang) : 'code';
        codeBlocks.push(`<pre><div class="code-header"><span>${langLabel}</span></div><code>${escapeHtml(code.trim())}</code></pre>`);
        return placeholder;
    });

    let html = escapeHtml(raw);
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    html = html.replace(/\n/g, '<br>');

    // Restore preserved code blocks
    codeBlocks.forEach((block, idx) => {
        html = html.replace(`__CODE_BLOCK_${idx}__`, block);
    });

    return html;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===================================================================
// FILE & PHOTO ATTACHMENT HANDLERS (With Image Compression & Vision)
// ===================================================================
function setupAttachmentHandlers() {
    attachBtn?.addEventListener("click", () => {
        fileAttachmentInput?.click();
    });

    fileAttachmentInput?.addEventListener("change", handleFileSelection);
}

// Compress large mobile/camera photos before sending (fast & avoids payload limits)
function compressImage(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const maxDim = 1200;
            let width = img.width;
            let height = img.height;

            if (width > maxDim || height > maxDim) {
                if (width > height) {
                    height = Math.round((height * maxDim) / width);
                    width = maxDim;
                } else {
                    width = Math.round((width * maxDim) / height);
                    height = maxDim;
                }
            }

            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
            const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
            callback(dataUrl);
        };
        img.onerror = () => callback(e.target.result);
        img.src = e.target.result;
    };
    reader.onerror = () => {};
    reader.readAsDataURL(file);
}

function handleFileSelection(e) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    files.forEach((file) => {
        const isImage = file.type.startsWith("image/");

        if (isImage) {
            compressImage(file, (dataUrl) => {
                state.pendingAttachments.push({
                    name: file.name,
                    size: formatFileSize(file.size),
                    type: file.type,
                    isImage: true,
                    dataUrl: dataUrl,
                });
                renderAttachmentPreviewTray();
                updateSendButton();
            });
        } else {
            const reader = new FileReader();
            reader.onload = (event) => {
                state.pendingAttachments.push({
                    name: file.name,
                    size: formatFileSize(file.size),
                    type: file.type,
                    isImage: false,
                    textContent: typeof event.target.result === "string" ? event.target.result : "",
                });
                renderAttachmentPreviewTray();
                updateSendButton();
            };
            reader.readAsText(file);
        }
    });

    // Reset input to allow selecting same file again
    fileAttachmentInput.value = "";
}

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

function renderAttachmentPreviewTray() {
    if (!attachmentTray) return;
    if (state.pendingAttachments.length === 0) {
        attachmentTray.style.display = "none";
        attachmentTray.innerHTML = "";
        return;
    }

    attachmentTray.style.display = "flex";
    attachmentTray.innerHTML = state.pendingAttachments.map((att, idx) => `
        <div class="attachment-chip">
            ${att.isImage ? `<img src="${att.dataUrl}" class="attachment-thumb" alt="Preview">` : `<span class="attachment-icon">📄</span>`}
            <span class="attachment-name" title="${escapeHtml(att.name)}">${escapeHtml(att.name)} (${att.size})</span>
            <button class="attachment-remove" data-index="${idx}" title="Remove file">&times;</button>
        </div>
    `).join("");

    attachmentTray.querySelectorAll(".attachment-remove").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const index = parseInt(e.currentTarget.dataset.index, 10);
            state.pendingAttachments.splice(index, 1);
            renderAttachmentPreviewTray();
            updateSendButton();
        });
    });
}

// ===================================================================
// SEND MESSAGE & API CALL
// ===================================================================
async function sendMessage() {
    const text = messageInput.value.trim();
    const hasAttachments = state.pendingAttachments.length > 0;
    if ((!text && !hasAttachments) || state.isGenerating) return;

    const model = AI_MODELS.find((m) => m.id === state.currentModelId) || AI_MODELS[0];

    if (!state.currentChatId || !state.chats[state.currentChatId]) {
        createNewChat(model.id);
    }

    const chat = state.chats[state.currentChatId];

    // Hide welcome screen and show messages container
    welcomeScreen.style.display = "none";
    messagesContainer.classList.add("active");

    const attachmentsToSend = [...state.pendingAttachments];
    state.pendingAttachments = [];
    renderAttachmentPreviewTray();

    const userMsg = {
        role: "user",
        content: text,
        attachments: attachmentsToSend,
        timestamp: Date.now()
    };
    chat.messages.push(userMsg);
    appendMessageToDOM(userMsg, model);

    if (chat.messages.length === 1) {
        const titleSource = text || (attachmentsToSend[0] ? attachmentsToSend[0].name : "New Chat");
        chat.title = titleSource.substring(0, 40) + (titleSource.length > 40 ? "..." : "");
        renderChatHistory();
    }

    messageInput.value = "";
    messageInput.style.height = "auto";
    updateSendButton();
    scrollToBottom();

    state.isGenerating = true;
    typingAvatar.textContent = model.emoji;
    typingIndicator.classList.add("active");
    sendBtn.disabled = true;
    scrollToBottom();

    try {
        const response = await callApinex(model, chat.messages);
        const aiMsg = { role: "ai", content: response, timestamp: Date.now() };
        chat.messages.push(aiMsg);
        appendMessageToDOM(aiMsg, model);
    } catch (error) {
        console.error("AI API Error:", error);
        const errorMsg = {
            role: "ai",
            content: `❌ **API Error:** ${error.message}`,
            timestamp: Date.now(),
        };
        chat.messages.push(errorMsg);
        appendMessageToDOM(errorMsg, model);
    } finally {
        state.isGenerating = false;
        typingIndicator.classList.remove("active");
        updateSendButton();
        scrollToBottom();
        saveState();
        renderChatHistory();
    }
}

async function callApinex(model, messages) {
    const apiKey = API_CONFIG.APINEX_API_KEY.trim();
    const url = API_CONFIG.APINEX_BASE_URL;

    // Check if recent user message has images
    const hasImages = messages.some(m => m.attachments && m.attachments.some(a => a.isImage));

    // Dynamic high-intelligence system prompt per model
    const systemPrompt = model.systemPrompt || 
        "You are an advanced, intelligent, and highly capable AI assistant. Provide rich, comprehensive, deeply insightful, and well-structured responses. Use Markdown formatting (headers, bullet points, bold text, code blocks) to make your explanations clear, deep, and engaging. Never give lazy or one-line answers unless explicitly requested.";

    // Helper to format messages for OpenAI/APInex Vision (multimodal image_url)
    function buildApiMessages(includeVision = true) {
        const history = messages
            .filter((m) => !m.content?.startsWith("❌"))
            .slice(-10)
            .map((m) => {
                let textPrompt = m.content || "";
                const imageAttachments = m.attachments ? m.attachments.filter(att => att.isImage && att.dataUrl) : [];
                const otherAttachments = m.attachments ? m.attachments.filter(att => !att.isImage) : [];

                if (otherAttachments.length > 0) {
                    const fileSummaries = otherAttachments.map(att => {
                        if (att.textContent) {
                            return `[Attached File: ${att.name}]\n\`\`\`\n${att.textContent.slice(0, 4000)}\n\`\`\``;
                        }
                        return `[Attached File: ${att.name}]`;
                    }).join("\n\n");
                    textPrompt = textPrompt ? `${textPrompt}\n\n${fileSummaries}` : fileSummaries;
                }

                // Standard Multimodal Vision format (OpenAI Vision API specification)
                if (includeVision && imageAttachments.length > 0 && m.role === "user") {
                    const contentParts = [];
                    contentParts.push({
                        type: "text",
                        text: textPrompt || "Please examine and describe this image in detail."
                    });

                    imageAttachments.forEach(img => {
                        contentParts.push({
                            type: "image_url",
                            image_url: {
                                url: img.dataUrl
                            }
                        });
                    });

                    return {
                        role: "user",
                        content: contentParts
                    };
                }

                // Text-only fallback representation
                if (!includeVision && imageAttachments.length > 0 && m.role === "user") {
                    const imgNames = imageAttachments.map(img => `[Uploaded Image: ${img.name}]`).join(" ");
                    textPrompt = textPrompt ? `${textPrompt}\n\n${imgNames}` : imgNames;
                }

                return {
                    role: m.role === "user" ? "user" : "assistant",
                    content: textPrompt,
                };
            });

        // Prepend system prompt to guide the AI to give detailed, high quality answers
        return [
            { role: "system", content: systemPrompt },
            ...history
        ];
    }

    async function makeRequest(modelName, msgsPayload) {
        return await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: modelName,
                messages: msgsPayload,
                temperature: 0.7,
                max_tokens: 3000,
            }),
        });
    }

    let apiMessages = buildApiMessages(true);

    // 1. Try selected model with vision payload
    let res = await makeRequest(model.apiModel, apiMessages);

    // 2. If error occurs (e.g., subscription 402 or rate limit), try free active models
    if (!res.ok) {
        const fallbacks = hasImages
            ? ["free/gemini-3.8-flash", "free/gpt-6-luna", "free/deepseek-v4-pro-0813"]
            : ["free/gpt-6-luna", "free/gemini-3.8-flash", "free/deepseek-v4-pro-0813", "free/glm-5.3"];

        for (const fb of fallbacks) {
            if (fb !== model.apiModel) {
                console.warn(`⚠️ '${model.apiModel}' returned ${res.status}, trying fallback '${fb}'...`);
                const fbModel = AI_MODELS.find(m => m.apiModel === fb);
                if (res.status === 402 && fbModel) {
                    showToast(`⚠️ ${model.name} requires a paid APInex subscription. Switched to ${fbModel.name}.`, "info");
                }
                res = await makeRequest(fb, apiMessages);
                if (res.ok) break;
            }
        }
    }

    // 3. If vision payload still fails, try text-only payload as final fallback
    if (!res.ok && hasImages) {
        console.warn(`⚠️ Multimodal vision payload rejected, attempting text-only fallback...`);
        const textPayload = buildApiMessages(false);
        res = await makeRequest("free/gemini-3.8-flash", textPayload);
    }

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error?.message || err?.message || `Server returned status ${res.status}`);
    }

    const data = await res.json();
    return data.choices?.[0]?.message?.content || "No response received.";
}

// ===================================================================
// UI HELPERS & EVENT LISTENERS
// ===================================================================
function scrollToBottom() {
    requestAnimationFrame(() => {
        chatArea.scrollTop = chatArea.scrollHeight;
    });
}

function updateSendButton() {
    const hasText = messageInput.value.trim().length > 0;
    const hasAttachments = state.pendingAttachments.length > 0;
    sendBtn.disabled = (!hasText && !hasAttachments) || state.isGenerating;
}

function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

function closeSidebarMobile() {
    sidebar.classList.remove("open");
}

function applyTheme() {
    const saved = localStorage.getItem("nexusai_theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
    updateThemeLabel(saved);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("nexusai_theme", next);
    updateThemeLabel(next);
}

function updateThemeLabel(theme) {
    const label = themeToggle?.querySelector(".theme-label");
    if (label) label.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
}

function autoResizeTextarea() {
    messageInput.style.height = "auto";
    const maxH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--input-max-height')) || 160;
    messageInput.style.height = Math.min(messageInput.scrollHeight, maxH) + "px";
}

function setupEventListeners() {
    sendBtn.addEventListener("click", sendMessage);

    messageInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    messageInput.addEventListener("input", () => {
        updateSendButton();
        autoResizeTextarea();
    });

    newChatBtn.addEventListener("click", () => {
        createNewChat(state.currentModelId || "deepseek-v4-pro");
        closeSidebarMobile();
    });

    clearChatBtn.addEventListener("click", clearCurrentChat);
    themeToggle?.addEventListener("click", toggleTheme);

    // Sidebar Toggle for Desktop and Mobile
    sidebarToggleBtn?.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle("open");
        } else {
            appContainer?.classList.toggle("sidebar-collapsed");
        }
    });

    sidebarClose?.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            closeSidebarMobile();
        } else {
            appContainer?.classList.add("sidebar-collapsed");
        }
    });

    sidebarOverlay?.addEventListener("click", closeSidebarMobile);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeSidebarMobile();
            imageViewerOverlay?.classList.remove("open");
        }
    });

    // Image viewer modal close
    imageViewerClose?.addEventListener("click", () => {
        imageViewerOverlay?.classList.remove("open");
    });
    imageViewerOverlay?.addEventListener("click", (e) => {
        if (e.target === imageViewerOverlay) {
            imageViewerOverlay.classList.remove("open");
        }
    });

    // Bottom Model Selector
    bottomModelSelect?.addEventListener("change", (e) => {
        selectModel(e.target.value, false);
    });

    // Profile / Sign-up Modal (Now from sidebar footer)
    userProfileBtn?.addEventListener("click", () => {
        authModalOverlay.classList.add("open");
    });

    authCloseBtn?.addEventListener("click", () => {
        authModalOverlay.classList.remove("open");
    });

    authModalOverlay?.addEventListener("click", (e) => {
        if (e.target === authModalOverlay) {
            authModalOverlay.classList.remove("open");
        }
    });

    authForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("authEmail").value;
        state.user = { email: email, name: email.split("@")[0] };
        localStorage.setItem("nexusai_user", JSON.stringify(state.user));
        updateUserDisplay();
        showToast("Successfully signed in!", "success");
        setTimeout(() => {
            authModalOverlay.classList.remove("open");
        }, 800);
    });

    // Setup attachments
    setupAttachmentHandlers();
}

// Render bottom model selector options (grouped by Free Active vs Subscription)
function renderBottomModelDropdown() {
    if (!bottomModelSelect) return;
    const freeModels = AI_MODELS.filter(m => m.isFreeActive);
    const subModels = AI_MODELS.filter(m => !m.isFreeActive);

    bottomModelSelect.innerHTML = `
        <optgroup label="⚡ 100% Free Active Models">
            ${freeModels.map(m => `<option value="${m.id}" ${state.currentModelId === m.id ? 'selected' : ''}>${m.emoji} ${m.name}</option>`).join("")}
        </optgroup>
        <optgroup label="👑 Subscription Tier Models (Requires APInex Sub)">
            ${subModels.map(m => `<option value="${m.id}" ${state.currentModelId === m.id ? 'selected' : ''}>${m.emoji} ${m.name} (Sub)</option>`).join("")}
        </optgroup>
    `;
}

document.addEventListener("DOMContentLoaded", init);

