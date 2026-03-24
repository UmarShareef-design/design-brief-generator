const companyNames = [
    "Acme Corp", "TechNova", "PixelPerfect", "Vanguard Solutions", "Streamline Media",
    "Nebula Dynamics", "Quantum Shift", "Elevation Partners", "Atlas Industries", "Starlight Systems",
    "Apex Fintech", "HealthSync", "EduSphere", "CyberShield", "GreenLeaf Co",
    "Lumina Labs", "Zenith Apps", "Solstice Media", "Vertex Solutions", "Origin Systems",
    "Pulse Digital", "Evolve Labs", "Nexus Soft", "Infinite Loop", "Blue Wave",
    "Summit Tech", "Drift Mobile", "Forge Foundry", "Core Dynamics", "Beacon Systems"
];

const companyTypes = [
    "Fintech Startup", "Healthcare Provider", "B2B SaaS Platform", "E-commerce Brand",
    "EdTech Organization", "Non-profit Charity", "Logistics Company", "Real Estate Agency",
    "Travel Aggregator", "Gaming Studio", "AI Research Lab", "Food Delivery Service",
    "PropTech Startup", "Renewable Energy Co", "Mental Health App", "InsurTech Platform",
    "GovTech Agency", "MarTech Solution", "Crypto Exchange", "Cybersecurity Firm",
    "AgriTech Startup", "HR Tech Platform", "CleanTech Business", "LegalTech Firm"
];

const uiUxTasks = [
    "new onboarding flow for new users",
    "dashboard to visualize complex data",
    "landing page to increase conversions",
    "seamless checkout experience",
    "user research phase and wireframing for their new product",
    "design system to unify their brand across platforms",
    "gamified loyalty program interface",
    "mobile-first marketplace for creators",
    "subscription management portal",
    "interactive map for real-time logistics tracking",
    "secure digital wallet interface",
    "cross-platform social networking feature",
    "patient portal for medical records",
    "student learning management system",
    "automated expense reporting tool",
    "internal admin tool for supply chain",
    "customer support chatbot interface",
    "investor relations dashboard",
    "public transport booking app",
    "real estate virtual tour interface"
];

const businessConstraints = [
    "the launch date is in 3 weeks and cannot be moved",
    "the development team only has junior engineers",
    "they must use legacy backend systems that are very slow",
    "stakeholders are highly risk-averse and prefer conservative designs",
    "the target audience is 65+ years old with low tech literacy",
    "the application must be fully offline-capable",
    "they want to integrate heavy 3D assets without hurting performance",
    "no time for user testing before MVP launch",
    "entire brand identity is completely locked",
    "platform must support right-to-left (RTL) languages",
    "app must meet strict GDPR compliance standards",
    "primary user interaction happens in low-connectivity areas",
    "key actions must be reachable within two taps",
    "design must be optimized for low-end mobile devices",
    "product will be white-labeled for fifty different partners",
    "complete visual audit every two weeks",
    "accessibility compliance (WCAG 2.1 AA) is a legal requirement",
    "minimal data usage is critical"
];

const fontPairs = [
    { primary: "IBM Plex Serif", secondary: "IBM Plex Sans" },
    { primary: "Playfair Display", secondary: "Lato" },
    { primary: "Poppins", secondary: "Open Sans" },
    { primary: "Montserrat", secondary: "Lora" },
    { primary: "DM Serif Display", secondary: "Inter" },
    { primary: "Space Grotesk", secondary: "Sora" },
    { primary: "Syne", secondary: "Inter" },
    { primary: "Public Sans", secondary: "Lora" },
    { primary: "Outfit", secondary: "Inter" }
];

const colorPalettes = [
    { name: "Ocean Breeze", primary: "#0ea5e9", secondary1: "#10b981", secondary2: "#0369a1" },
    { name: "Royal Sunset", primary: "#6366f1", secondary1: "#f43f5e", secondary2: "#4338ca" },
    { name: "Electric Jungle", primary: "#10b981", secondary1: "#fbbf24", secondary2: "#065f46" },
    { name: "Night Lavender", primary: "#a855f7", secondary1: "#ec4899", secondary2: "#6b21a8" },
    { name: "Cyber Ember", primary: "#f97316", secondary1: "#ef4444", secondary2: "#9a3412" },
    { name: "Nordic Frost", primary: "#38bdf8", secondary1: "#94a3b8", secondary2: "#075985" },
    { name: "Modern Noir", primary: "#e2e8f0", secondary1: "#64748b", secondary2: "#1e293b" }
];

const personaTemplates = [
    { name: "The Busy Professional", role: "Mid-level Manager", bio: "Values efficiency over everything. Has no patience for slow-loading apps.", goal: "Sub-30s tasks", pain: "Notification overload" },
    { name: "The Digital Nomad", role: "Freelance Designer", bio: "Uses various devices in coffee shops. Needs sync to be perfect.", goal: "Easy collaboration", pain: "Poor offline support" },
    { name: "The Cautious Learner", role: "Retiree", bio: "New to digital apps. Needs clear instructions and large UI elements.", goal: "Family connection", pain: "Small text/icons" },
    { name: "The Power User", role: "Software Engineer", bio: "Wants keyboard shortcuts and raw performance.", goal: "Workflow automation", pain: "Simplified 'dumb' UI" },
    { name: "The Conscious Consumer", role: "Student", bio: "Highly ethical. Looks for transparency in data usage.", goal: "Find sustainable brands", pain: "Dark patterns" }
];

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function generateBrief() {
    return `
        <span id="name-part" class="entity-tag interactive">${getRandomItem(companyNames)}</span>, 
        A <span id="type-part" class="entity-tag interactive">${getRandomItem(companyTypes)}</span> needs a 
        <span id="task-part" class="entity-tag interactive">${getRandomItem(uiUxTasks)}</span>. 
        However, We need to keep in mind that, 
        <span id="constraint-part" class="constraint-tag interactive">${getRandomItem(businessConstraints)}</span>.
    `;
}

function updateBrandAssets() {
    const fonts = getRandomItem(fontPairs);
    const palette = getRandomItem(colorPalettes);

    const fontContainer = document.getElementById('font-container');
    const colorContainer = document.getElementById('color-container');

    fontContainer.innerHTML = `
        <div class="font-card">
            <span class="font-label">Primary (Headings)</span>
            <span class="font-preview" style="font-family: '${fonts.primary}', serif">${fonts.primary}</span>
        </div>
        <div class="font-card">
            <span class="font-label">Secondary (Body)</span>
            <span class="font-preview" style="font-family: '${fonts.secondary}', sans-serif">${fonts.secondary}</span>
        </div>
    `;

    colorContainer.innerHTML = `
        <div class="color-swatch-container">
            <div class="color-swatch" style="background-color: ${palette.primary}"></div>
            <span class="color-code">${palette.primary}</span>
        </div>
        <div class="color-swatch-container">
            <div class="color-swatch" style="background-color: ${palette.secondary1}"></div>
            <span class="color-code">${palette.secondary1}</span>
        </div>
        <div class="color-swatch-container">
            <div class="color-swatch" style="background-color: ${palette.secondary2}"></div>
            <span class="color-code">${palette.secondary2}</span>
        </div>
    `;
}

function updatePersonas() {
    const personas = getRandomItems(personaTemplates, 3);
    const container = document.getElementById('persona-container');
    container.innerHTML = '';

    personas.forEach((persona, index) => {
        const card = document.createElement('div');
        card.className = `persona-card ${index === 0 ? 'primary' : ''}`;
        card.innerHTML = `
            <div class="persona-header">
                <div class="persona-avatar">${persona.name.charAt(0)}</div>
                <div class="personality">
                    <h4>${persona.name}</h4>
                    <p>${persona.role}</p>
                </div>
            </div>
            <p class="persona-bio">${persona.bio}</p>
            <div class="persona-meta">
                <div class="meta-item">
                    <h5>Key Goal</h5>
                    <p>${persona.goal}</p>
                </div>
                <div class="meta-item">
                    <h5>Pain Point</h5>
                    <p>${persona.pain}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function refreshPart(element, dataArray) {
    element.style.opacity = 0;
    element.style.transform = 'translateY(5px)';

    setTimeout(() => {
        element.textContent = getRandomItem(dataArray);
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
    }, 200);
}

function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const briefDisplay = document.getElementById('brief-display');
    const additionalData = document.getElementById('additional-data');

    generateBtn.addEventListener('click', () => {
        briefDisplay.style.opacity = 0;
        additionalData.classList.add('hidden');
        additionalData.classList.remove('show');

        setTimeout(() => {
            briefDisplay.innerHTML = `<p class="fade-in">${generateBrief()}</p>`;
            briefDisplay.style.opacity = 1;

            updateBrandAssets();
            updatePersonas();

            additionalData.classList.remove('hidden');
            setTimeout(() => {
                additionalData.classList.add('show');
            }, 50);

            // Add listeners to new elements
            document.getElementById('name-part').addEventListener('click', (e) => refreshPart(e.target, companyNames));
            document.getElementById('type-part').addEventListener('click', (e) => refreshPart(e.target, companyTypes));
            document.getElementById('task-part').addEventListener('click', (e) => refreshPart(e.target, uiUxTasks));
            document.getElementById('constraint-part').addEventListener('click', (e) => refreshPart(e.target, businessConstraints));
        }, 150);
    });

    copyBtn.addEventListener('click', () => {
        const text = briefDisplay.innerText;
        if (text.includes("Click the button")) return;
        
        navigator.clipboard.writeText(text).then(() => {
            showToast('Brief copied to clipboard!');
        });
    });
});
