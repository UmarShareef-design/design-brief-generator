const companyNames = ["Acme Corp", "TechNova", "PixelPerfect", "Vanguard Solutions", "Streamline Media", "Nebula Dynamics", "Quantum Shift", "Elevation Partners", "Atlas Industries", "Starlight Systems", "Apex Fintech", "HealthSync", "EduSphere", "CyberShield", "GreenLeaf Co", "Lumina Labs", "Zenith Apps", "Solstice Media", "Vertex Solutions", "Origin Systems", "Pulse Digital", "Evolve Labs", "Nexus Soft", "Infinite Loop", "Blue Wave", "Summit Tech", "Drift Mobile", "Forge Foundry", "Core Dynamics", "Beacon Systems"];
const companyTypes = ["Fintech Startup", "Healthcare Provider", "B2B SaaS Platform", "E-commerce Brand", "EdTech Organization", "Non-profit Charity", "Logistics Company", "Real Estate Agency", "Travel Aggregator", "Gaming Studio", "AI Research Lab", "Food Delivery Service", "PropTech Startup", "Renewable Energy Co", "Mental Health App", "InsurTech Platform", "GovTech Agency", "MarTech Solution", "Crypto Exchange", "Cybersecurity Firm", "AgriTech Startup", "HR Tech Platform", "CleanTech Business", "LegalTech Firm"];
const uiUxTasks = ["new onboarding flow", "data visualization dashboard", "conversion landing page", "seamless checkout", "user research & wireframing", "unified design system", "gamified loyalty program", "creator marketplace", "subscription portal", "real-time logistics map", "digital wallet interface", "social networking feature", "patient portal", "learning management system", "expense reporting tool", "supply chain admin tool", "chatbot interface", "investor dashboard", "transport booking app", "virtual tour interface"];
const businessConstraints = ["launch in 3 weeks", "junior dev team only", "legacy backend systems", "risk-averse stakeholders", "target audience 65+", "fully offline-capable", "heavy 3D assets", "no time for user testing", "brand identity locked", "RTL language support", "strict GDPR compliance", "low-connectivity areas", "reachable in two taps", "low-end mobile devices", "white-labeled product", "bi-weekly visual audit", "WCAG 2.1 AA compliance", "minimal data usage"];
const fontPairs = [
    { p: "IBM Plex Serif", s: "IBM Plex Sans" }, { p: "Playfair Display", s: "Lato" },
    { p: "Poppins", s: "Open Sans" }, { p: "Montserrat", s: "Lora" },
    { p: "DM Serif Display", s: "Inter" }, { p: "Space Grotesk", s: "Sora" },
    { p: "Syne", s: "Inter" }, { p: "Public Sans", s: "Lora" }, { p: "Outfit", s: "Inter" }
];
const colorPalettes = [
    { p: "#0ea5e9", s1: "#10b981", s2: "#0369a1" }, { p: "#6366f1", s1: "#f43f5e", s2: "#4338ca" },
    { p: "#10b981", s1: "#fbbf24", s2: "#065f46" }, { p: "#a855f7", s1: "#ec4899", s2: "#6b21a8" },
    { p: "#f97316", s1: "#ef4444", s2: "#9a3412" }, { p: "#38bdf8", s1: "#94a3b8", s2: "#075985" },
    { p: "#e2e8f0", s1: "#64748b", s2: "#1e293b" }
];
const personas = [
    { n: "The Pro", r: "Manager", b: "Values efficiency. No patience for slow apps.", g: "Sub-30s tasks", p: "Notifications" },
    { n: "The Nomad", r: "Designer", b: "Uses coffee shop wifi. Needs perfect sync.", g: "Collaboration", p: "Offline mode" },
    { n: "The Learner", r: "Retiree", b: "New to apps. Needs clear UI.", g: "Stay connected", p: "Small text" },
    { n: "The Hacker", r: "Engineer", b: "Wants shortcuts and performance.", g: "Automation", p: "Dumbed-down UI" },
    { n: "The Conscious", r: "Student", b: "Highly ethical. Values data privacy.", g: "Sustainability", p: "Dark patterns" }
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const shuffle = (arr, n) => [...arr].sort(() => 0.5 - Math.random()).slice(0, n);

const updateUI = () => {
    const f = pick(fontPairs);
    const c = pick(colorPalettes);
    const p = shuffle(personas, 3);
    
    document.getElementById('font-container').innerHTML = `
        <div class="font-card"><span class="font-label">Heading</span><span class="font-preview" style="font-family:'${f.p}',serif">${f.p}</span></div>
        <div class="font-card"><span class="font-label">Body</span><span class="font-preview" style="font-family:'${f.s}',sans-serif">${f.s}</span></div>`;
    
    document.getElementById('color-container').innerHTML = [c.p, c.s1, c.s2].map(hex => `
        <div class="color-swatch-container"><div class="color-swatch" style="background:${hex}"></div><span class="color-code">${hex}</span></div>`).join('');
    
    document.getElementById('persona-container').innerHTML = p.map((per, i) => `
        <div class="persona-card ${i === 0 ? 'primary' : ''}">
            <div class="persona-header"><div class="persona-avatar">${per.n[4]}</div>
            <div class="personality"><h4>${per.n}</h4><p>${per.r}</p></div></div>
            <p class="persona-bio">${per.b}</p>
            <div class="persona-meta"><div class="meta-item"><h5>Goal</h5><p>${per.g}</p></div>
            <div class="meta-item"><h5>Pain</h5><p>${per.p}</p></div></div></div>`).join('');
};

const refreshPart = (el, data) => {
    el.style.opacity = 0;
    setTimeout(() => { el.textContent = pick(data); el.style.opacity = 1; }, 200);
};

document.addEventListener('DOMContentLoaded', () => {
    const genBtn = document.getElementById('generate-btn');
    const display = document.getElementById('brief-display');
    const extra = document.getElementById('additional-data');

    genBtn.addEventListener('click', () => {
        display.style.opacity = 0;
        extra.classList.remove('show');
        setTimeout(() => {
            display.innerHTML = `<p class="fade-in">
                <span id="n-p" class="entity-tag interactive" title="Click to shuffle">${pick(companyNames)}</span>, A 
                <span id="t-p" class="entity-tag interactive" title="Click to shuffle">${pick(companyTypes)}</span> needs a 
                <span id="ta-p" class="entity-tag interactive" title="Click to shuffle">${pick(uiUxTasks)}</span>. However, 
                <span id="c-p" class="entity-tag interactive" title="Click to shuffle">${pick(businessConstraints)}</span>.</p>`;
            display.style.opacity = 1;
            updateUI();
            extra.classList.remove('hidden');
            setTimeout(() => extra.classList.add('show'), 50);
            document.getElementById('n-p').onclick = (e) => refreshPart(e.target, companyNames);
            document.getElementById('t-p').onclick = (e) => refreshPart(e.target, companyTypes);
            document.getElementById('ta-p').onclick = (e) => refreshPart(e.target, uiUxTasks);
            document.getElementById('c-p').onclick = (e) => refreshPart(e.target, businessConstraints);
        }, 150);
    });

    document.getElementById('copy-btn').onclick = () => {
        const text = display.innerText;
        if (!text.includes("Click")) navigator.clipboard.writeText(text).then(() => {
            let t = document.createElement('div'); t.className = 'toast'; t.innerText = 'Copied to clipboard!';
            document.body.appendChild(t); 
            setTimeout(() => t.classList.add('show'), 10);
            setTimeout(() => { 
                t.classList.remove('show');
                setTimeout(() => t.remove(), 400);
            }, 2000);
        });
    };
});
