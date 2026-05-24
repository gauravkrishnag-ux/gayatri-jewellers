// app.js - Gayatri Jewellers Application State and Logic

// 1. DEFAULT SEED DATA FROM STITCH
const DEFAULT_CATEGORIES = [
    {
        id: "cat-rings",
        name: "Rings",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh5LWrvAphiQf9XLs08FQJEluEKXssJ9U99q89chlZB0eELsQg7K5AgenibLm3RoyjTIao_46x-_xrPqmnOdgQd1vhSEZBoKm1NnXjvj33qhFqTMPrKSJahocdjtHSQmVjfy6kR-pClu-ArGWG9zfOBczJoschw17wbSWv5YfqRbXBmpo2HfC4wLJ7xzdzxz31Yv149P0iYRH4v7A6dEGVst6wXk3PLrRp9hwFV98qsxpQYj5wArhnqZjmb-acFhHgFZljh-pQWLE"
    },
    {
        id: "cat-necklaces",
        name: "Necklaces",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1AiT80PaK-6M2p_bm9Cz7uRtx3yzUgVnR_tt5Z4ZjKOpBRnnOezSqve5LcmRo-r3Itug7y0F6bj4aCYRl-hc4fuIQfe3tllyig_Rzt_llMmVzVQl0oCr_gFTX69VJDBOlYmo0dkoYkMTCmlquPVAyes-5BD60N1Zs-PGY_ivv-padRBwYhNfboKx5zLlfP2qhm6H33Lf4VS1jVWDfBOsYNtWpqkUUHf6vtvxF2lg1X-FS7OSJyyJgJ9wbK5139gP4_tu2siPu0CU"
    },
    {
        id: "cat-bracelets",
        name: "Bracelets",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjDP_QTDF8FwRe4_0v6fU7CUf0Xtfsxmq-MbCLuCcqhvK9Gs1XBlCq7ATGMWaXGqjOvPSN39DwBltvLxGfryM6aD9ri20WFFbZLVat7NADdHJ7rBJ3ifyldewqGeGB57P-TFRJs4Iv41_0vw0eaYTiuM6I164puQ5l-cQ8b2gTWvniHjAsjTuopS9RbSfMIxhpBRo5jS6xssHtAdUyFXDVuO0C2i3NngbF5UFGVwuGQHvbEAGMOzPIFrdqdFufayPgpkeopz7nOB4"
    },
    {
        id: "cat-earrings",
        name: "Earrings",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjUeA47jnaWULfAW37uGB8IhBUtS4cV67RgVRIG7Zro-Je-Ieiecv7lHpHFPQ4nASlLSytDRfGiQDc4-zgVd_OgFXoWQcvgivOOxvZrPoKC2HYtZi29brGJrfHwFZqFz-1huSjp2P5sE4UejlrhVF-vx2QP6YDAnaXzjkwUJ-zmMZ_4E1oBXYgJhux1Yey2Lf5vujv3OqhDiWpmwKnwpTjQOw4D5G5xaCILpPrEvfqdqpzFvRsbCQhhb_o1H2XcICaI57CiO7e-d4"
    }
];

const DEFAULT_MATERIALS = ["Platinum", "18K Gold", "Rose Gold", "22K Gold"];

const DEFAULT_ITEMS = [
    {
        id: "item-ring-1",
        title: "Solitaire Diamond Ring",
        category: "Rings",
        material: "Platinum",
        weight: 4.5,
        carat: "1.2 Carat",
        value: 4200,
        description: "A magnificent brilliant-cut solitaire diamond engagement ring, set in polished platinum with high clarity facets.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSW00HdbqlUGkPeJszo5reaO86ji7hnxDxSQIuuCqUWZ1A4IIQsroO5a4SsqbTbkujfepWB-K7NbkUPMD5phdx0Zc8Ap-dMvo27Q9jlHSKdty76Lcx3OsrwIUuQhOpVRTq1aHNlKsV-tCig-Tlg5XSQHvSjnnQXV7gYM_vPEBM7wa_L-MNjtrYD0krrftZYO2v8dOj6EYID9zwJ7Byy5em_ayxTn3iHXl3YiDUVtx0WwrRwSg2XqR46ICIhFqYrW2dGhlUqRBXNOI",
        label: "High Clarity",
        location: "Vault A"
    },
    {
        id: "item-ring-2",
        title: "Trilogy Eternity Band",
        category: "Rings",
        material: "18K Gold",
        weight: 5.2,
        carat: "1.8 Carat",
        value: 5850,
        description: "A gorgeous classic trilogy diamond eternity band representing past, present, and future, crafted in polished 18k yellow gold.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3mv5tfwkE7cBRLjaxe17d8L4wdL5NdvnNf6jXC3LkaiWSZeVdiwaiA2wWI5gN17dBkmCBzjtgX6J6OHsEJrmoqs-rWtziTOFFBR1bMLxpSJD0LNr9EaQaUnQXQO7Xtxy2VboojdiGvQh0v-zvTKKzethn5GFiDUho00bNEVbRw6XS_WRtV4yVy-6_Jl5IZGMYuIOJcijLAK7uN0bF1Hu4IcOMZkPU4fdccwzeVA29mG8aP_-a6mPi_Yp1f32hf0BhhVJvkEiL0ts",
        label: "Bestseller",
        location: "Vault A"
    },
    {
        id: "item-ring-3",
        title: "Heritage Filigree Ring",
        category: "Rings",
        material: "18K Gold",
        weight: 3.8,
        carat: "0.9 Carat",
        value: 3400,
        description: "Vintage-inspired yellow gold band featuring intricate filigree work and a brilliant-cut center diamond.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA60rmVcwU5uIMlD66Zm255sBSCr61DUHUmR6bPE4ORdiPgo0g4tiN0p-D1-_B9rWvaa13_T7BtoOeefIBVTid4-PtjR6VC-_TX7NG-PRUQtxcClIev7r58Hug-9UT1Z4ytNghcH4YkksrfDtO4LIkZAYKhv6ajuLa2B8bMuVk0bvGyjhFV_QY5WdvZVxumpWwROTYII6_gfCxoaYBALxly0F8Wp1Ws9L08jbj4cSZmUzfgAnZh7Vkke79kAOOHy1Y4XGVc_n8D9FA",
        label: "",
        location: "Vault B"
    },
    {
        id: "item-ring-4",
        title: "Architectural Band",
        category: "Rings",
        material: "Rose Gold",
        weight: 6.1,
        carat: "0.7 Carat",
        value: 2900,
        description: "A contemporary rose gold band with unique geometric structural styling and embedded accent diamonds.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGqXECFPTtvVCAskHjbUlgn5rjOne4t5kqszkVlprx5OHFPPKMlrWmj2RPBFQAu5q8IyyEapsYErwVEbpzoXvqHFsOSOTxqg5qArAFpR_oDDbiJWJn78XA5ma1Q6xJjGca-bNaJdohvhtJ2qFrxuFTlzFd5tMqRx11pWIAjnYaWKfE_-gOzUIo2I2Lspo9Jm8TuLPyoKY3rtNjItQfptgK-yIT3P6df3adDJP2Q3hIxoYWEH72PW9pD-0G737oblbqldfO7BVDYRQ",
        label: "",
        location: "Vault A"
    },
    {
        id: "item-ring-5",
        title: "Oval Halo Masterpiece",
        category: "Rings",
        material: "Platinum",
        weight: 4.9,
        carat: "2.1 Carat",
        value: 7200,
        description: "An exceptional modern classic featuring an oval-cut diamond surrounded by a brilliant halo of micro-pave diamonds on a platinum band.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8SlgMFHBBBHF-6dW3z23zuNIchjcdaQeevWk1EzbjwHnPmWTVg2HIhHxBUYGxxNdaZpkPuZ9rcJBtOxAM6rheqTwhwjAZZku7W5wfvvG3jdi59gUm0j1lMzh8ZANI-j_7jjX_wJMsoyImHo5nVxJhP3_-2AFahxMd1RTnSLfDaOypkWq9Z4IrT_0tmigohmkIEbWQAKKSHiRNUqAnwLJZzMCyrYGW2982YnsVykeVDyId4OyTdNgzBjiNqlheBlXS0NC5lmhpfy8",
        label: "New",
        location: "Vault C"
    },
    {
        id: "item-ring-6",
        title: "Baguette Fusion Band",
        category: "Rings",
        material: "18K Gold",
        weight: 5.5,
        carat: "1.5 Carat",
        value: 4800,
        description: "Alternating baguette and round-cut diamonds seamlessly channel-set inside a robust 18k yellow gold band.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO1gly1GTquqaezIOSaz6Z1jx0ZhxE7J8bNA6yEBqJ4JVdgTKKyQM1Kq3gEtsUzWwmQFvDZJ7u-Q8M_EBsoTNIOB1gcevf10eLtmzgkpQRqXcRfFZkjXsy_lLBt1Vy83jMPq2qpUUNghXi5VD2MEP3uIwdkei2fLtiJbWZ0I1btrtrkKIgxIw3mpDQyR2zE2ZebxjDTST0IAvLl81s0mfaVggevgSCuHpCAUz08pmsPTxiZGlo6rGHwJN6QXnrKZTz5y1UZlykSL8",
        label: "",
        location: "Vault B"
    },
    {
        id: "item-necklace-1",
        title: "Emerald Heritage Pendant",
        category: "Necklaces",
        material: "18K Gold",
        weight: 12.5,
        carat: "4.5 Carat",
        value: 125000,
        description: "An exquisite gold necklace with intricate emerald pendants displayed against a rich textured gallery backdrop.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1AiT80PaK-6M2p_bm9Cz7uRtx3yzUgVnR_tt5Z4ZjKOpBRnnOezSqve5LcmRo-r3Itug7y0F6bj4aCYRl-hc4fuIQfe3tllyig_Rzt_llMmVzVQl0oCr_gFTX69VJDBOlYmo0dkoYkMTCmlquPVAyes-5BD60N1Zs-PGY_ivv-padRBwYhNfboKx5zLlfP2qhm6H33Lf4VS1jVWDfBOsYNtWpqkUUHf6vtvxF2lg1X-FS7OSJyyJgJ9wbK5139gP4_tu2siPu0CU",
        label: "Exclusive",
        location: "Vault A"
    },
    {
        id: "item-bracelet-1",
        title: "Boutique Velvet Bangles",
        category: "Bracelets",
        material: "18K Gold",
        weight: 16.2,
        carat: "N/A",
        value: 45000,
        description: "Luxury gold bangles and bracelets arranged artfully on a velvet tray, presenting high polish and shine.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjDP_QTDF8FwRe4_0v6fU7CUf0Xtfsxmq-MbCLuCcqhvK9Gs1XBlCq7ATGMWaXGqjOvPSN39DwBltvLxGfryM6aD9ri20WFFbZLVat7NADdHJ7rBJ3ifyldewqGeGB57P-TFRJs4Iv41_0vw0eaYTiuM6I164puQ5l-cQ8b2gTWvniHjAsjTuopS9RbSfMIxhpBRo5jS6xssHtAdUyFXDVuO0C2i3NngbF5UFGVwuGQHvbEAGMOzPIFrdqdFufayPgpkeopz7nOB4",
        label: "Curator choice",
        location: "Vault B"
    },
    {
        id: "item-earring-1",
        title: "Pearl Diamond Drops",
        category: "Earrings",
        material: "18K Gold",
        weight: 8.4,
        carat: "1.0 Carat",
        value: 25000,
        description: "A pair of elegant drop earrings featuring rare pearls and small diamonds, presented in a minimalist setting.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjUeA47jnaWULfAW37uGB8IhBUtS4cV67RgVRIG7Zro-Je-Ieiecv7lHpHFPQ4nASlLSytDRfGiQDc4-zgVd_OgFXoWQcvgivOOxvZrPoKC2HYtZi29brGJrfHwFZqFz-1huSjp2P5sE4UejlrhVF-vx2QP6YDAnaXzjkwUJ-zmMZ_4E1oBXYgJhux1Yey2Lf5vujv3OqhDiWpmwKnwpTjQOw4D5G5xaCILpPrEvfqdqpzFvRsbCQhhb_o1H2XcICaI57CiO7e-d4",
        label: "Meticulous",
        location: "Vault C"
    }
];

// 2. STATE OBJECT
let appState = {
    items: [],
    categories: [],
    materials: [],
    activeTab: "dashboard",
    filters: {
        category: "All",
        material: "All",
        search: ""
    },
    sort: "newest",
    currentUploadedImageBase64: "",
    currentCategoryUploadedImageBase64: ""
};

// 3. STORAGE & INITIALIZATION
function initStore(forceReset = false) {
    const cachedItems = localStorage.getItem("gilded_items");
    const cachedCategories = localStorage.getItem("gilded_categories");
    const cachedMaterials = localStorage.getItem("gilded_materials");
    
    if (forceReset || !cachedItems) {
        appState.items = [...DEFAULT_ITEMS];
        localStorage.setItem("gilded_items", JSON.stringify(appState.items));
    } else {
        try {
            appState.items = JSON.parse(cachedItems) || [...DEFAULT_ITEMS];
        } catch (e) {
            console.error("Failed to parse cached items, restoring default seeds", e);
            appState.items = [...DEFAULT_ITEMS];
            localStorage.setItem("gilded_items", JSON.stringify(appState.items));
        }
    }
    
    if (forceReset || !cachedCategories) {
        appState.categories = [...DEFAULT_CATEGORIES];
        localStorage.setItem("gilded_categories", JSON.stringify(appState.categories));
    } else {
        try {
            appState.categories = JSON.parse(cachedCategories) || [...DEFAULT_CATEGORIES];
        } catch (e) {
            console.error("Failed to parse cached categories, restoring default seeds", e);
            appState.categories = [...DEFAULT_CATEGORIES];
            localStorage.setItem("gilded_categories", JSON.stringify(appState.categories));
        }
    }

    if (forceReset || !cachedMaterials) {
        appState.materials = [...DEFAULT_MATERIALS];
        localStorage.setItem("gilded_materials", JSON.stringify(appState.materials));
    } else {
        try {
            appState.materials = JSON.parse(cachedMaterials) || [...DEFAULT_MATERIALS];
        } catch (e) {
            console.error("Failed to parse cached materials, restoring default seeds", e);
            appState.materials = [...DEFAULT_MATERIALS];
            localStorage.setItem("gilded_materials", JSON.stringify(appState.materials));
        }
    }
}

function saveStore() {
    localStorage.setItem("gilded_items", JSON.stringify(appState.items));
    localStorage.setItem("gilded_categories", JSON.stringify(appState.categories));
    localStorage.setItem("gilded_materials", JSON.stringify(appState.materials));
}

// 4. TOAST NOTIFICATIONS
function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast-msg";
    
    let icon = "info";
    if (type === "success") icon = "check_circle";
    if (type === "error") icon = "error";
    
    toast.innerHTML = `
        <span class="material-symbols-outlined text-[16px]">${icon}</span>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    // Auto remove after 3s
    setTimeout(() => {
        toast.classList.add("fade-out");
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// 5. VIEW PORT SCROLL RESET
function resetViewportScroll() {
    document.getElementById("app-viewport").scrollTop = 0;
}

// 6. RENDER DASHBOARD
function renderDashboard() {
    const grid = document.getElementById("dashboard-categories-grid");
    grid.innerHTML = "";
    
    // Category Counts
    const counts = {};
    (appState.categories || []).forEach(cat => {
        if (cat && cat.name) {
            counts[cat.name] = 0;
        }
    });
    (appState.items || []).forEach(item => {
        if (item && item.category) {
            if (counts[item.category] !== undefined) {
                counts[item.category]++;
            } else {
                counts[item.category] = 1;
            }
        }
    });
    
    (appState.categories || []).forEach(cat => {
        if (!cat || !cat.name) return;
        const count = counts[cat.name] || 0;
        const card = document.createElement("div");
        card.className = "dashboard-category-card group relative h-[150px] rounded-xl overflow-hidden cursor-pointer";
        card.dataset.category = cat.name;
        card.dataset.id = cat.id;
        
        card.innerHTML = `
            <div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="${cat.image}" alt="${cat.name}"/>
            <div class="absolute bottom-0 left-0 p-4 z-20 w-full flex justify-between items-baseline bg-gradient-to-t from-black/55 to-transparent pointer-events-none">
                <h2 class="font-serif text-lg text-white font-medium">${cat.name}</h2>
                <span class="font-sans text-[9px] text-white/95 uppercase tracking-widest">${count} ITEMS</span>
            </div>
            <!-- Edit/Delete overlay controls -->
            <div class="absolute top-2 right-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                <button class="w-8 h-8 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:text-primary transition-colors btn-edit-cat" data-id="${cat.id}">
                    <span class="material-symbols-outlined text-[16px]">edit</span>
                </button>
                <button class="w-8 h-8 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:text-red-400 transition-colors btn-delete-cat" data-id="${cat.id}">
                    <span class="material-symbols-outlined text-[16px]">delete</span>
                </button>
            </div>
        `;
        
        // Add click listener to the card (excluding buttons)
        card.addEventListener("click", (e) => {
            if (e.target.closest('.btn-edit-cat') || e.target.closest('.btn-delete-cat')) return;
            
            appState.filters.category = cat.name;
            document.getElementById("collection-breadcrumbs-active").textContent = cat.name;
            document.getElementById("collection-category-title").textContent = cat.name;
            switchTab("collection");
        });
        
        const btnEdit = card.querySelector('.btn-edit-cat');
        btnEdit.addEventListener("click", (e) => {
            e.stopPropagation();
            openCategoryModal(cat.id);
        });
        
        const btnDelete = card.querySelector('.btn-delete-cat');
        btnDelete.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteCategory(cat.id);
        });
        
        grid.appendChild(card);
    });
    
    // Add Category Action Card
    const addCard = document.createElement("div");
    addCard.id = "btn-add-category-stub";
    addCard.className = "group cursor-pointer rounded-xl border border-dashed border-outline-variant/60 flex flex-col items-center justify-center gap-3 bg-surface-container-low py-6 transition-all duration-300 hover:bg-surface-container-high";
    addCard.innerHTML = `
        <div class="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span class="material-symbols-outlined text-primary text-xl">add</span>
        </div>
        <p class="font-sans text-[10px] text-primary uppercase tracking-widest font-bold">Add Category</p>
    `;
    addCard.addEventListener("click", () => openCategoryModal());
    grid.appendChild(addCard);
}

function renderCategoryChips() {
    const container = document.getElementById("collection-category-chips");
    if(!container) return;
    container.innerHTML = `<button class="filter-chip ${appState.filters.category === 'All' ? 'active' : ''}" data-category="All">All</button>`;
    
    (appState.categories || []).forEach(cat => {
        if (!cat || !cat.name) return;
        const btn = document.createElement("button");
        btn.className = `filter-chip ${appState.filters.category === cat.name ? 'active' : ''}`;
        btn.dataset.category = cat.name;
        btn.textContent = cat.name;
        container.appendChild(btn);
    });
    
    container.querySelectorAll(".filter-chip").forEach(chip => {
        chip.addEventListener("click", () => {
            container.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            
            const cat = chip.dataset.category;
            appState.filters.category = cat;
            
            document.getElementById("collection-breadcrumbs-active").textContent = cat;
            document.getElementById("collection-category-title").textContent = cat === "All" ? "Inventory" : cat;
            
            renderCollection();
        });
    });
}

function renderCategoryDropdown() {
    const select = document.getElementById("input-category");
    if(!select) return;
    select.innerHTML = `<option value="" disabled selected>Select Category</option>`;
    
    (appState.categories || []).forEach(cat => {
        if (!cat || !cat.name) return;
        const opt = document.createElement("option");
        opt.value = cat.name;
        opt.textContent = cat.name;
        select.appendChild(opt);
    });
}

function renderMaterialChips() {
    const container = document.getElementById("collection-material-chips");
    if (!container) return;
    container.innerHTML = `<button class="material-chip ${appState.filters.material === 'All' ? 'active' : ''}" data-material="All">All Metals</button>`;
    
    (appState.materials || []).forEach(mat => {
        if (!mat) return;
        const btn = document.createElement("button");
        btn.className = `material-chip ${appState.filters.material === mat ? 'active' : ''}`;
        btn.dataset.material = mat;
        btn.textContent = mat;
        container.appendChild(btn);
    });
    
    container.querySelectorAll(".material-chip").forEach(chip => {
        chip.addEventListener("click", () => {
            container.querySelectorAll(".material-chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            
            appState.filters.material = chip.dataset.material;
            renderCollection();
        });
    });
}

function renderMaterialDropdown() {
    const select = document.getElementById("input-material");
    if (!select) return;
    select.innerHTML = `<option value="" disabled selected>Select Metal</option>`;
    
    (appState.materials || []).forEach(mat => {
        if (!mat) return;
        const opt = document.createElement("option");
        opt.value = mat;
        opt.textContent = mat;
        select.appendChild(opt);
    });
    
    // Add special option for custom metal
    const optCustom = document.createElement("option");
    optCustom.value = "custom";
    optCustom.textContent = "+ Add Custom Metal...";
    select.appendChild(optCustom);
}

// 7. RENDER COLLECTION GRID
// 7. RENDER COLLECTION GRID
function renderCollection() {
    const grid = document.getElementById("collection-grid");
    grid.innerHTML = "";
    
    // Filter logic
    let filtered = appState.items || [];
    
    if (appState.filters.category !== "All") {
        filtered = filtered.filter(item => item && item.category === appState.filters.category);
    }
    
    if (appState.filters.material !== "All") {
        filtered = filtered.filter(item => item && item.material === appState.filters.material);
    }

    if (appState.filters.search) {
        const query = appState.filters.search.toLowerCase();
        filtered = filtered.filter(item => {
            if (!item) return false;
            const title = (item.title || "").toLowerCase();
            const material = (item.material || "").toLowerCase();
            const category = (item.category || "").toLowerCase();
            const description = (item.description || "").toLowerCase();
            return title.includes(query) || 
                   material.includes(query) || 
                   category.includes(query) || 
                   description.includes(query);
        });
    }
    
    // Sort logic
    if (appState.sort === "newest") {
        filtered = [...filtered].reverse();
    } else if (appState.sort === "weight-desc") {
        filtered = [...filtered].sort((a, b) => {
            const wA = Number(a && a.weight) || 0;
            const wB = Number(b && b.weight) || 0;
            return wB - wA;
        });
    }
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-2 text-center py-12 text-secondary space-y-2">
                <span class="material-symbols-outlined text-3xl font-light">info</span>
                <p class="font-sans text-xs uppercase tracking-widest">No pieces match search</p>
            </div>
        `;
        return;
    }
    
    // Build Cards
    filtered.forEach(item => {
        if (!item) return;
        const card = document.createElement("div");
        card.className = "product-card cursor-pointer flex flex-col h-full ambient-shadow relative";
        card.dataset.id = item.id;

        const badge = item.label ? `
            <div class="absolute top-3 right-3 z-20">
                <span class="bg-white/95 backdrop-blur px-2.5 py-0.5 font-sans text-[8px] uppercase tracking-widest text-primary border border-primary/10 rounded">${item.label}</span>
            </div>
        ` : '';
        
        const title = item.title || "Unnamed Piece";
        const material = item.material || "Metal";
        const weightFormatted = (Number(item.weight) || 0).toFixed(1);
        
        card.innerHTML = `
            <div class="relative w-full aspect-[4/5] bg-surface-container-lowest overflow-hidden border-b border-outline-variant/10 group">
                ${badge}
                <img class="w-full h-full object-cover image-lazy transition-transform duration-500 group-hover:scale-105" src="${item.image || ''}" alt="${title}" onload="this.classList.add('loaded')">
            </div>
            <div class="p-3.5 flex-1 flex flex-col justify-between">
                <div class="space-y-1">
                    <h3 class="font-serif text-[13px] text-on-surface leading-snug line-clamp-2">${title}</h3>
                    <div class="flex items-center gap-1.5 font-sans text-[9px] text-secondary uppercase tracking-wider">
                        <span>${weightFormatted}g</span>
                        ${item.carat && item.carat !== 'N/A' ? `
                            <span class="text-outline-variant">•</span>
                            <span>${item.carat}</span>
                        ` : ''}
                    </div>
                </div>
                <div class="mt-3 pt-2.5 border-t border-outline-variant/10 flex justify-center items-center">
                    <span class="text-[9px] uppercase bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded font-sans font-bold tracking-wider">${material}</span>
                </div>
            </div>
        `;
        
        card.addEventListener("click", () => openDetails(item.id));
        grid.appendChild(card);
    });
}

// 8. TABS SWITCHING NAVIGATION
function switchTab(tabId) {
    appState.activeTab = tabId;
    
    // Navigation highlights (Bottom Nav)
    document.querySelectorAll(".nav-tab").forEach(tab => {
        if (tab.dataset.tab === tabId) {
            tab.classList.add("active");
            const icon = tab.querySelector(".material-symbols-outlined");
            if (icon) icon.style.fontVariationSettings = "'FILL' 1";
        } else {
            tab.classList.remove("active");
            const icon = tab.querySelector(".material-symbols-outlined");
            if (icon) icon.style.fontVariationSettings = "'FILL' 0";
        }
    });

    // Sidebar drawer highlights (Desktop)
    document.querySelectorAll("#desktop-drawer nav div").forEach(div => {
        if (div.dataset.target === tabId) {
            div.className = "drawer-nav-item active";
        } else {
            div.className = "drawer-nav-item";
        }
    });
    
    // Panels visibility
    document.querySelectorAll(".tab-panel").forEach(panel => {
        if (panel.id === `panel-${tabId}`) {
            panel.classList.add("active");
        } else {
            panel.classList.remove("active");
        }
    });
    
    resetViewportScroll();
    closeDrawer();
    
    // Context renderers
    if (tabId === "dashboard") {
        renderDashboard();
    } else if (tabId === "collection") {
        renderCategoryChips();
        renderMaterialChips();
        renderCollection();
    } else if (tabId === "add-item") {
        renderCategoryDropdown();
        renderMaterialDropdown();
    }
}

// 9. OVERLAY LIGHTBOX DETAIL VIEWS
function openDetails(itemId) {
    const item = appState.items.find(i => i.id === itemId);
    if (!item) return;
    
    // Populate modal fields
    document.getElementById("detail-category-badge").textContent = (item.category || "Jewelry").toUpperCase();
    document.getElementById("detail-img").src = item.image || "";
    document.getElementById("detail-title").textContent = item.title || "Unnamed Piece";
    document.getElementById("detail-desc").textContent = item.description || "";
    
    document.getElementById("detail-material").textContent = item.material || "Metal";
    document.getElementById("detail-weight").textContent = `${(Number(item.weight) || 0).toFixed(1)}g${item.carat && item.carat !== 'N/A' ? ' / ' + item.carat : ''}`;
    document.getElementById("detail-location").textContent = item.location || "Vault A";
    
    // Delete item click handler
    const deleteBtn = document.getElementById("btn-delete-item");
    const newDeleteBtn = deleteBtn.cloneNode(true);
    deleteBtn.parentNode.replaceChild(newDeleteBtn, deleteBtn);
    
    newDeleteBtn.addEventListener("click", () => {
        if (confirm(`Are you sure you want to remove "${item.title}" permanently?`)) {
            appState.items = appState.items.filter(i => i.id !== itemId);
            saveStore();
            closeDetails();
            showToast("Item successfully deleted", "success");
            switchTab("collection");
        }
    });
    
    // Show Overlay
    const overlay = document.getElementById("panel-item-details");
    overlay.classList.remove("hidden");
    
    setTimeout(() => {
        document.getElementById("item-details-modal").classList.remove("translate-y-full");
    }, 10);
}

function closeDetails() {
    const modal = document.getElementById("item-details-modal");
    modal.classList.add("translate-y-full");
    
    setTimeout(() => {
        document.getElementById("panel-item-details").classList.add("hidden");
    }, 300);
}

// 10. DESKTOP DRAWER SLIDEOUT TOGGLE
function toggleDrawer() {
    const drawer = document.getElementById("desktop-drawer");
    const overlay = document.getElementById("drawer-overlay");
    const isOpen = drawer.classList.contains("active");
    
    if (isOpen) {
        closeDrawer();
    } else {
        drawer.classList.add("active");
        overlay.classList.remove("hidden");
        setTimeout(() => overlay.classList.add("active"), 10);
    }
}

function closeDrawer() {
    const drawer = document.getElementById("desktop-drawer");
    const overlay = document.getElementById("drawer-overlay");
    
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    setTimeout(() => overlay.classList.add("hidden"), 300);
}

// 11. IMAGE UPLOADING & RESIZING
function processImageUpload(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            const img = new Image();
            img.src = event.target.result;
            img.onload = function () {
                const canvas = document.createElement("canvas");
                const MAX_WIDTH = 600;
                const MAX_HEIGHT = 600;
                let width = img.width;
                let height = img.height;
                
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);
                
                const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
                resolve(compressedBase64);
            };
            img.onerror = () => reject("Error loading image");
        };
        reader.onerror = () => reject("Error reading image");
    });
}

// 12. EVENT HANDLERS
function setupEvents() {
    // Top bar menu toggle
    document.getElementById("btn-toggle-menu").addEventListener("click", toggleDrawer);
    document.getElementById("drawer-overlay").addEventListener("click", closeDrawer);
    
    // Desktop Drawer targets
    document.querySelectorAll("#desktop-drawer nav div").forEach(div => {
        div.addEventListener("click", () => {
            switchTab(div.dataset.target);
        });
    });

    // Bottom Tab Clicks
    document.querySelectorAll(".nav-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            switchTab(tab.dataset.tab);
        });
    });
    
    // Category click on Dashboard Grid pivot
    document.querySelectorAll(".dashboard-category-card").forEach(card => {
        card.addEventListener("click", () => {
            const cat = card.dataset.category;
            
            // Set filters
            appState.filters.category = cat;
            document.querySelectorAll(".filter-chip").forEach(chip => {
                if (chip.dataset.category === cat) {
                    chip.classList.add("active");
                } else {
                    chip.classList.remove("active");
                }
            });
            
            // Set breadcrumbs title
            document.getElementById("collection-breadcrumbs-active").textContent = cat;
            document.getElementById("collection-category-title").textContent = cat;
            
            switchTab("collection");
        });
    });
    
    // Collection Category chips filter clicks
    document.querySelectorAll(".filter-chip").forEach(chip => {
        chip.addEventListener("click", () => {
            document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            
            const cat = chip.dataset.category;
            appState.filters.category = cat;
            
            document.getElementById("collection-breadcrumbs-active").textContent = cat;
            document.getElementById("collection-category-title").textContent = cat === "All" ? "Inventory" : cat;
            
            renderCollection();
        });
    });
    

    
    // Sorting cycle toggler
    const btnSort = document.getElementById("btn-sort-toggle");
    const sortLabel = document.getElementById("current-sort-label");
    const sortModes = [
        { id: "newest", label: "Newest" },
        { id: "weight-desc", label: "Weight" }
    ];
    
    btnSort.addEventListener("click", () => {
        let currentIndex = sortModes.findIndex(mode => mode.id === appState.sort);
        let nextIndex = (currentIndex + 1) % sortModes.length;
        
        appState.sort = sortModes[nextIndex].id;
        sortLabel.textContent = sortModes[nextIndex].label;
        
        showToast(`Sorting: ${sortModes[nextIndex].label}`, "info");
        renderCollection();
    });

    // Dashboard Search Input Router
    const searchInput = document.getElementById("search-inventory");
    const searchCollection = document.getElementById("search-collection");

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value;
        appState.filters.search = query;
        searchCollection.value = query; // Sync value
        
        // Pivot to Collection tab
        if (query.trim().length > 0 && appState.activeTab !== "collection") {
            switchTab("collection");
            // Highlight search chip/breadcrumb
            document.getElementById("collection-breadcrumbs-active").textContent = "Search: " + query.trim();
            // Focus collection search input
            searchCollection.focus();
            // Set cursor to end of text
            searchCollection.setSelectionRange(query.length, query.length);
        } else if (query.trim().length === 0) {
            document.getElementById("collection-breadcrumbs-active").textContent = appState.filters.category;
        }
        
        renderCollection();
    });

    // Collection Search Input Router
    searchCollection.addEventListener("input", (e) => {
        const query = e.target.value;
        appState.filters.search = query;
        searchInput.value = query; // Sync dashboard input as well
        
        if (query.trim().length > 0) {
            document.getElementById("collection-breadcrumbs-active").textContent = "Search: " + query.trim();
        } else {
            document.getElementById("collection-breadcrumbs-active").textContent = appState.filters.category;
        }
        
        renderCollection();
    });
    
    // Details close interactions
    document.getElementById("btn-close-details").addEventListener("click", closeDetails);
    document.getElementById("btn-close-details-bar").addEventListener("click", closeDetails);
    document.getElementById("btn-close-details-action").addEventListener("click", closeDetails);
    document.getElementById("panel-item-details").addEventListener("click", (e) => {
        if (e.target === document.getElementById("panel-item-details")) {
            closeDetails();
        }
    });
    
    // Image Uploader listener
    const fileInput = document.getElementById("input-file-uploader");
    const uploadPreview = document.getElementById("upload-preview-img");
    const uploadPrompt = document.getElementById("upload-prompt-content");
    
    fileInput.addEventListener("change", async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        try {
            showToast("Compressing image...", "info");
            const compressed = await processImageUpload(file);
            appState.currentUploadedImageBase64 = compressed;
            
            // Show preview
            uploadPreview.src = compressed;
            uploadPreview.classList.remove("hidden");
            uploadPrompt.classList.add("opacity-20");
            showToast("Image processed successfully!", "success");
        } catch (err) {
            console.error(err);
            showToast("Error processing image file", "error");
        }
    });
    
    // Custom Metal selector toggle logic
    const materialSelect = document.getElementById("input-material");
    const customMaterialWrapper = document.getElementById("input-custom-material-wrapper");
    const customMaterialInput = document.getElementById("input-custom-material");

    if (materialSelect && customMaterialWrapper && customMaterialInput) {
        materialSelect.addEventListener("change", () => {
            if (materialSelect.value === "custom") {
                customMaterialWrapper.classList.remove("hidden");
                customMaterialInput.setAttribute("required", "true");
                customMaterialInput.focus();
            } else {
                customMaterialWrapper.classList.add("hidden");
                customMaterialInput.removeAttribute("required");
                customMaterialInput.value = "";
            }
        });
    }

    // Cancel add item form
    document.getElementById("btn-cancel-add").addEventListener("click", () => {
        document.getElementById("form-add-new-piece").reset();
        if (customMaterialWrapper) customMaterialWrapper.classList.add("hidden");
        if (customMaterialInput) {
            customMaterialInput.removeAttribute("required");
            customMaterialInput.value = "";
        }
        uploadPreview.classList.add("hidden");
        uploadPreview.src = "";
        uploadPrompt.classList.remove("opacity-20");
        appState.currentUploadedImageBase64 = "";
        switchTab("dashboard");
    });
    
    // Form submission new jewelry piece
    document.getElementById("form-add-new-piece").addEventListener("submit", (e) => {
        e.preventDefault();
        
        const title = document.getElementById("input-title").value.trim();
        const category = document.getElementById("input-category").value;
        const weight = parseFloat(document.getElementById("input-weight").value);
        let material = document.getElementById("input-material").value;
        const description = document.getElementById("input-description").value.trim();
        const image = appState.currentUploadedImageBase64;
        
        if (!image) {
            showToast("Please select/upload an image", "error");
            return;
        }

        // Custom material registration
        if (material === "custom") {
            const customMaterialVal = customMaterialInput.value.trim();
            if (!customMaterialVal) {
                showToast("Please specify the custom metal", "error");
                return;
            }
            
            // Add to materials list if unique (case insensitive)
            const alreadyExists = appState.materials.some(m => m.toLowerCase() === customMaterialVal.toLowerCase());
            if (!alreadyExists) {
                appState.materials.push(customMaterialVal);
                saveStore();
            }
            material = customMaterialVal;
        }
        
        const newItem = {
            id: "item-" + Date.now(),
            title,
            category,
            weight,
            carat: "N/A",
            material,
            description,
            image,
            location: "Vault A",
            label: "Added"
        };
        
        appState.items.push(newItem);
        saveStore();
        
        // Reset form
        document.getElementById("form-add-new-piece").reset();
        if (customMaterialWrapper) customMaterialWrapper.classList.add("hidden");
        if (customMaterialInput) {
            customMaterialInput.removeAttribute("required");
            customMaterialInput.value = "";
        }
        uploadPreview.classList.add("hidden");
        uploadPreview.src = "";
        uploadPrompt.classList.remove("opacity-20");
        appState.currentUploadedImageBase64 = "";
        
        showToast("New item saved in registry!", "success");
        
        // Pivot to Collection under that category
        appState.filters.category = category;
        document.querySelectorAll(".filter-chip").forEach(c => {
            if (c.dataset.category === category) c.classList.add("active");
            else c.classList.remove("active");
        });
        document.getElementById("collection-breadcrumbs-active").textContent = category;
        document.getElementById("collection-category-title").textContent = category;
        
        switchTab("collection");
    });
    
    // Reset seeds button
    document.getElementById("btn-reset-database").addEventListener("click", () => {
        if (confirm("Reset local vault cache back to the original default seed jewelry collection? Any newly added pieces will be deleted.")) {
            initStore(true);
            showToast("Database restored to default seeds", "success");
            switchTab("dashboard");
        }
    });

    // Category Management Modal Listeners
    document.getElementById("btn-close-category").addEventListener("click", closeCategoryModal);
    document.getElementById("btn-close-category-bar").addEventListener("click", closeCategoryModal);
    document.getElementById("btn-cancel-category").addEventListener("click", closeCategoryModal);
    document.getElementById("panel-category-form").addEventListener("click", (e) => {
        if (e.target === document.getElementById("panel-category-form")) {
            closeCategoryModal();
        }
    });

    const categoryFileInput = document.getElementById("input-category-file-uploader");
    const categoryUploadPreview = document.getElementById("category-upload-preview-img");
    const categoryUploadPrompt = document.getElementById("category-upload-prompt-content");

    categoryFileInput.addEventListener("change", async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        try {
            showToast("Compressing image...", "info");
            const compressed = await processImageUpload(file);
            appState.currentCategoryUploadedImageBase64 = compressed;
            
            categoryUploadPreview.src = compressed;
            categoryUploadPreview.classList.remove("hidden");
            categoryUploadPrompt.classList.add("opacity-20");
            showToast("Image processed successfully!", "success");
        } catch (err) {
            console.error(err);
            showToast("Error processing image file", "error");
        }
    });

    document.getElementById("form-manage-category").addEventListener("submit", (e) => {
        e.preventDefault();
        
        const catId = document.getElementById("input-category-id").value;
        const name = document.getElementById("input-category-name").value.trim();
        const image = appState.currentCategoryUploadedImageBase64;
        
        if (!name) {
            showToast("Category name is required", "error");
            return;
        }
        
        if (!image) {
            showToast("Please upload an image", "error");
            return;
        }
        
        // Check for duplicates
        const existingCat = appState.categories.find(c => c.name.toLowerCase() === name.toLowerCase() && c.id !== catId);
        if (existingCat) {
            showToast("Category with this name already exists", "error");
            return;
        }

        if (catId) {
            // Edit mode
            const catIndex = appState.categories.findIndex(c => c.id === catId);
            if (catIndex > -1) {
                // Update items referencing this category
                const oldName = appState.categories[catIndex].name;
                if (oldName !== name) {
                    appState.items.forEach(item => {
                        if (item.category === oldName) item.category = name;
                    });
                }
                
                appState.categories[catIndex].name = name;
                appState.categories[catIndex].image = image;
            }
            showToast("Category updated!", "success");
        } else {
            // Add mode
            appState.categories.push({
                id: "cat-" + Date.now(),
                name: name,
                image: image
            });
            showToast("Category created!", "success");
        }
        
        saveStore();
        closeCategoryModal();
        renderDashboard(); // Re-render to show new/updated categories
    });

    // Avatar upload triggers
    const avatarUploader = document.getElementById("input-avatar-uploader");
    if (avatarUploader) {
        document.getElementById("btn-change-avatar").addEventListener("click", () => {
            avatarUploader.click();
        });

        document.getElementById("header-avatar").addEventListener("click", (e) => {
            e.stopPropagation();
            avatarUploader.click();
        });
        
        avatarUploader.addEventListener("change", async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            try {
                showToast("Compressing profile picture...", "info");
                const compressed = await processImageUpload(file);
                
                // Save in storage
                localStorage.setItem("gayatri_avatar", compressed);
                
                // Update images
                const header = document.getElementById("avatar-img-header");
                const account = document.getElementById("avatar-img-account");
                const drawer = document.getElementById("avatar-img-drawer");
                if (header) header.src = compressed;
                if (account) account.src = compressed;
                if (drawer) drawer.src = compressed;
                
                showToast("Profile picture updated!", "success");
            } catch (err) {
                console.error(err);
                showToast("Error processing profile picture", "error");
            }
        });
    }

    // Backup App Data
    const backupBtn = document.getElementById("btn-backup-data");
    if (backupBtn) {
        backupBtn.addEventListener("click", () => {
            try {
                const dataStr = JSON.stringify(appState.items, null, 2);
                const dataBlob = new Blob([dataStr], { type: "application/json" });
                const url = URL.createObjectURL(dataBlob);
                
                const link = document.createElement("a");
                link.href = url;
                link.download = "gayatri_jewellers_backup.json";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                showToast("Backup saved to device!", "success");
            } catch (err) {
                console.error(err);
                showToast("Error creating backup file", "error");
            }
        });
    }

    // Trigger Restore File Input
    const restoreBtn = document.getElementById("btn-restore-data");
    const restoreFileInput = document.getElementById("input-restore-file");
    if (restoreBtn && restoreFileInput) {
        restoreBtn.addEventListener("click", () => {
            restoreFileInput.click();
        });

        // Restore App Data
        restoreFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const parsed = JSON.parse(event.target.result);
                    if (Array.isArray(parsed)) {
                        const isValid = parsed.every(item => item && item.id && item.title);
                        if (isValid) {
                            appState.items = parsed;
                            saveStore();
                            showToast("Data restored from device!", "success");
                            switchTab("dashboard");
                        } else {
                            showToast("Invalid backup structure", "error");
                        }
                    } else {
                        showToast("Invalid backup format", "error");
                    }
                } catch (err) {
                    console.error(err);
                    showToast("Error reading backup file", "error");
                }
            };
            reader.readAsText(file);
        });
    }
}

function openCategoryModal(catId = null) {
    const titleElem = document.getElementById("category-modal-title");
    const idInput = document.getElementById("input-category-id");
    const nameInput = document.getElementById("input-category-name");
    const uploadPreview = document.getElementById("category-upload-preview-img");
    const uploadPrompt = document.getElementById("category-upload-prompt-content");
    
    // Reset state
    appState.currentCategoryUploadedImageBase64 = "";
    uploadPreview.src = "";
    uploadPreview.classList.add("hidden");
    uploadPrompt.classList.remove("opacity-20");
    nameInput.value = "";
    idInput.value = "";
    
    if (catId) {
        const cat = appState.categories.find(c => c.id === catId);
        if (cat) {
            titleElem.textContent = "Edit Category";
            idInput.value = cat.id;
            nameInput.value = cat.name;
            appState.currentCategoryUploadedImageBase64 = cat.image;
            uploadPreview.src = cat.image;
            uploadPreview.classList.remove("hidden");
            uploadPrompt.classList.add("opacity-20");
        }
    } else {
        titleElem.textContent = "Add Category";
    }
    
    const overlay = document.getElementById("panel-category-form");
    overlay.classList.remove("hidden");
    
    setTimeout(() => {
        document.getElementById("category-form-modal").classList.remove("translate-y-full");
    }, 10);
}

function closeCategoryModal() {
    const modal = document.getElementById("category-form-modal");
    modal.classList.add("translate-y-full");
    
    setTimeout(() => {
        document.getElementById("panel-category-form").classList.add("hidden");
    }, 300);
}

function deleteCategory(catId) {
    const cat = appState.categories.find(c => c.id === catId);
    if (!cat) return;
    
    // Check if items are linked
    const linkedItems = appState.items.filter(item => item.category === cat.name);
    if (linkedItems.length > 0) {
        alert(`Cannot delete category "${cat.name}" because it contains ${linkedItems.length} items. Reassign or delete those items first.`);
        return;
    }
    
    if (confirm(`Are you sure you want to delete the category "${cat.name}"?`)) {
        appState.categories = appState.categories.filter(c => c.id !== catId);
        
        // Also remove if it's currently selected as filter
        if (appState.filters.category === cat.name) {
            appState.filters.category = "All";
            document.getElementById("collection-breadcrumbs-active").textContent = "All";
            document.getElementById("collection-category-title").textContent = "Inventory";
        }
        
        saveStore();
        renderDashboard();
        showToast("Category deleted", "success");
    }
}

// Request Persistent Storage Permission
async function requestPersistentStorage() {
    if (navigator.storage && navigator.storage.persist) {
        const isPersisted = await navigator.storage.persisted();
        if (!isPersisted) {
            try {
                const granted = await navigator.storage.persist();
                if (granted) {
                    showToast("Vault permanently locked to device storage", "success");
                } else {
                    console.log("Persistent Storage request denied by browser.");
                }
            } catch (err) {
                console.error(err);
            }
        }
    }
}

// Load custom avatar on boot
function loadAvatar() {
    const savedAvatar = localStorage.getItem("gayatri_avatar");
    if (savedAvatar) {
        const header = document.getElementById("avatar-img-header");
        const account = document.getElementById("avatar-img-account");
        const drawer = document.getElementById("avatar-img-drawer");
        if (header) header.src = savedAvatar;
        if (account) account.src = savedAvatar;
        if (drawer) drawer.src = savedAvatar;
    }
}

// 12. BOOTSTRAPPER
document.addEventListener("DOMContentLoaded", () => {
    initStore();
    setupEvents();
    switchTab("dashboard");
    loadAvatar();
    requestPersistentStorage();
    
    // Dynamic Time Updater for status bar mock
    setInterval(() => {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("status-time").textContent = `${hours}:${minutes}`;
    }, 1000);

    // Register PWA Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('Service Worker Registered'))
            .catch(err => console.error('Service Worker Registry Failed:', err));
    }
});
