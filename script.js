// ===== CONFIGURATION =====
const ADMIN_PASSWORD = '2007';

// ===== MENU DATA =====
let menuData = {
    mojito: {
        title: { ku: 'موهیتو', ar: 'موهيتو', en: 'Mojito' },
        icon: 'fa-glass-martini-alt',
        items: [
            { name: 'Blue Hawaii (Soda)', img: 'b.jpg', price: '4,000' },
            { name: 'Blue Hawaii (Redbull)', img: 'bl r.jpg', price: '4,500' },
            { name: 'Strawberry (Soda)', img: 'strawbery soda.jpg', price: '4,000' },
            { name: 'Strawberry (Redbull)', img: 'b r.jpg', price: '4,500' },
            { name: 'Classic (Soda)', img: 'classic mojito soda.jpg', price: '3,500' },
            { name: 'Classic (Redbull)', img: 'c r.jpg', price: '4,500' }
        ]
    },
    icecream: {
        title: { ku: 'ئایس کریم', ar: 'آيس كريم', en: 'Ice Cream' },
        icon: 'fa-ice-cream',
        items: [
            { name: 'Classic Ice Cream Small', img: 'classicicecream.jpg', price: '500' },
            { name: 'Ice Cream Standard With Toppings', img: 'icecreamstandard.jpg', price: '2,000' },
            { name: 'Ice Cream Double With Flowers', img: 'icecreamdouble.jpg', price: '3,000' }
        ]
    },
    hot: {
        title: { ku: 'گەرم', ar: 'ساخن', en: 'Hot Drinks' },
        icon: 'fa-mug-hot',
        items: [
            { name: 'Espresso', img: 'espresso.jpg', price: '3,000' },
            { name: 'Espresso Double', img: 'espresso-double.jpg', price: '4,000' },
            { name: 'Americano', img: 'americano.jpg', price: '4,000' },
            { name: 'Cappuccino', img: 'cappuccino.jpg', price: '4,500' },
            { name: 'Spanish Latte', img: 'sphotn.jpg', price: '4,500' },
            { name: 'Latte Caramel', img: 'caramel hot.jpg', price: '4,500' },
            { name: 'Tea Regular', img: 'tea.jpg', price: '500' },
            { name: 'Green Tea', img: 'green tea.jpg', price: '3,500' },
            { name: 'Water', img: 'watter.jpg', price: '500' }
        ]
    },
    cold: {
        title: { ku: 'سارد', ar: 'بارد', en: 'Cold Drinks' },
        icon: 'fa-snowflake',
        items: [
            { name: 'Ice Latte', img: '1.jpg', price: '4,000' },
            { name: 'Spanish Iced Latte', img: 'icp.jpg', price: '4,500' },
            { name: 'Caramel Iced Latte', img: 'icala.jpg', price: '4,500' },
            { name: 'Luna Bloom Latte', img: 'l ice.jpg', price: '5,000' },
            { name: 'Iced Americano', img: 'a.jpg', price: '4,000' }
        ]
    },
    pancake: {
        title: { ku: 'پانکەیک', ar: 'بان كيك', en: 'Pancake' },
        icon: 'fa-layer-group',
        items: [
            { name: 'Mini Pancake Nutella', img: 'mininutellapancake.jpg', price: '3,500' },
            { name: 'Mini Pancake Pistachio', img: 'fstq waffle.jpg', price: '4,000' },
            { name: 'Mini Pancake Lotus', img: 'minipanakelotus.jpg', price: '3,500' },
            { name: 'Mini Pancake Kinder', img: 'minipancakekinder.jpg', price: '4,000' },
            { name: 'Mini Pancake Luna Bloom', img: 'luna waffle.jpg', price: '4,500' }
        ]
    },
    cupcake: {
        title: { ku: 'کاپکەیک', ar: 'كب كيك', en: 'Cupcake' },
        icon: 'fa-cake-candles',
        items: [
            { name: 'Cupcake Luna Bloom', img: 'luna cupcake.jpg', price: '4,500' },
            { name: 'Cupcake Chocolate', img: 'chocolate pan.jpg', price: '4,000' },
            { name: 'Cupcake Vanilla', img: 'vanila pan.jpg', price: '4,000' },
            { name: 'Cupcake Caramel', img: 'caramel pancake.jpg', price: '4,000' },
            { name: 'Strawberry Choco Luna Bloom', img: 'strawbery with chocolate.jpg', price: '4,000' }
        ]
    },
    bakery: {
        title: { ku: 'کرواسان', ar: 'كرواسون', en: 'Croissant' },
        icon: 'fa-bread-slice',
        items: [
            { name: 'Cheese Croissant', img: 'cheesecroissant.jpg', price: '4,500' },
            { name: 'Nutella Croissant', img: 'nutellacroissant.jpg', price: '4,500' },
            { name: 'Pistachio Croissant', img: 'pistachiocroissant.jpg', price: '4,500' },
            { name: 'Lotus Croissant', img: 'lotuscroissant.jpg', price: '4,500' },
            { name: 'Cookies Luna Bloom', img: 'coockisss.jpg', price: '2,500' }
        ]
    },
    waffle: {
        title: { ku: 'وافل', ar: 'وافل', en: 'Waffle' },
        icon: 'fa-stroopwafel',
        items: [
            { name: 'Waffle Luna Bloom', img: 'pumpkin-waffles-12.jpg', price: '4,500' },
            { name: 'Waffle Chocolate', img: 'waf.jpg', price: '4,500' },
            { name: 'Waffle Fruits', img: 'images.jpg', price: '5,000' },
            { name: 'Waffle Pistachio', img: 'p.jpg', price: '4,000' },
            { name: 'Waffle Kinder', img: 'k ww.jpg', price: '4,500' },
            { name: 'Waffle Lotus', img: 'l ww.jpg', price: '4,000' }
        ]
    },
    juice: {
        title: { ku: 'شەربەت', ar: 'عصائر', en: 'Fresh Juice' },
        icon: 'fa-wine-glass-alt',
        items: [
            { name: 'Orange Juice', img: 'orangge.jpg', price: '4,000' },
            { name: 'Pineapple Juice', img: 'pineapple.jpg', price: '4,000' },
            { name: 'Lemonade', img: 'lemonade.jpg', price: '3,500' },
            { name: 'Banana Milk', img: 'milk.jpg', price: '4,500' },
            { name: 'Smoothie Mixed', img: 'smoothi mix.jpg', price: '5,000' },
            { name: 'Smoothie Mango', img: 'mango.jpg', price: '5,000' },
            { name: 'Smoothie Kiwi', img: 'kiwi.jpg', price: '4,000' }
        ]
    }
};

// ===== STATE =====
let currentLang = 'ku';
let isAdminLoggedIn = false;
let uploadedImageData = null;

// ===== DOM ELEMENTS =====
const langBtn = document.getElementById('langBtn');
const langBox = document.getElementById('langBox');
const catContainer = document.getElementById('cat-container');
const menuContainer = document.getElementById('menu-container');
const passwordModal = document.getElementById('passwordModal');
const itemModal = document.getElementById('itemModal');
const adminPanel = document.getElementById('adminPanel');

// ===== EVENT LISTENERS =====
langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langBox.style.display = langBox.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', () => {
    langBox.style.display = 'none';
});

langBox.addEventListener('click', (e) => e.stopPropagation());

// Enter key for password
document.getElementById('passwordInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') checkPassword();
});

// ===== PASSWORD FUNCTIONS =====
function showPasswordModal() {
    langBox.style.display = 'none';
    setTimeout(() => {
        passwordModal.classList.add('active');
        document.getElementById('passwordInput').value = '';
        document.getElementById('errorMsg').classList.remove('show');
        document.getElementById('passwordInput').focus();
    }, 200);
}

function closePasswordModal() {
    passwordModal.classList.remove('active');
}

function togglePassword() {
    const input = document.getElementById('passwordInput');
    const icon = document.querySelector('.toggle-password');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    if (password === ADMIN_PASSWORD) {
        closePasswordModal();
        loginAdmin();
    } else {
        document.getElementById('errorMsg').classList.add('show');
        document.getElementById('passwordInput').value = '';
        document.getElementById('passwordInput').focus();
        
        const modal = document.querySelector('#passwordModal .modal-box');
        modal.style.animation = 'none';
        setTimeout(() => modal.style.animation = 'slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', 10);
    }
}

// ===== ADMIN FUNCTIONS =====
function loginAdmin() {
    isAdminLoggedIn = true;
    adminPanel.classList.add('active');
    renderAdminPanel();
    showToast('بەدەست هاتن بۆ پانێلی ئەدمین! ✅', 'success');
}

function logoutAdmin() {
    isAdminLoggedIn = false;
    adminPanel.classList.remove('active');
    showToast('دەرچوون لە ئەدمین 👋', 'success');
}

function renderAdminPanel() {
    const content = document.getElementById('adminContent');
    let html = '';

    Object.keys(menuData).forEach(categoryKey => {
        const category = menuData[categoryKey];
        html += `
            <div class="admin-section">
                <h3 class="admin-section-title">
                    <i class="fas ${category.icon}"></i>
                    ${category.title[currentLang]}
                    <span style="font-size: 14px; color: var(--text-muted); margin-right: auto;">
                        (${category.items.length} ئایتەم)
                    </span>
                </h3>
                <div class="admin-items-grid">
        `;

        category.items.forEach((item, index) => {
            html += `
                <div class="admin-item-card">
                    <div class="admin-item-img">
                        <img src="images/${item.img}" alt="${item.name}" 
                             onerror="this.src='https://via.placeholder.com/300x200/1a0822/F5F5DC?text=No+Image'">
                    </div>
                    <div class="admin-item-info">
                        <div class="admin-item-name">${item.name}</div>
                        <div class="admin-item-price">${item.price} IQD</div>
                        <div class="admin-item-actions">
                            <button class="btn-edit" onclick="editItem('${categoryKey}', ${index})">
                                <i class="fas fa-edit"></i> گۆڕین
                            </button>
                            <button class="btn-delete" onclick="deleteItem('${categoryKey}', ${index})">
                                <i class="fas fa-trash"></i> سڕینەوە
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        html += '</div></div>';
    });

    content.innerHTML = html;
}

// ===== ITEM CRUD OPERATIONS =====
function openAddItemModal() {
    document.getElementById('modalIconTitle').className = 'fas fa-plus-circle';
    document.getElementById('modalTitle').textContent = 'زیادکردنی ئایتەم نوێ';
    document.getElementById('modalSubtitle').textContent = 'زانیاری ئایتەمەکە پڕبکەرەوە';
    document.getElementById('itemForm').reset();
    document.getElementById('editItemId').value = '';
    document.getElementById('editItemCategory').value = '';
    document.getElementById('imagePreview').classList.remove('show');
    document.getElementById('uploadArea').style.display = 'block';
    uploadedImageData = null;
    itemModal.classList.add('active');
}

function editItem(categoryKey, itemIndex) {
    const item = menuData[categoryKey].items[itemIndex];
    
    document.getElementById('modalIconTitle').className = 'fas fa-edit';
    document.getElementById('modalTitle').textContent = 'گۆڕینی ئایتەم';
    document.getElementById('modalSubtitle').textContent = `گۆڕینی: ${item.name}`;
    
    document.getElementById('itemName').value = item.name;
    document.getElementById('itemCategory').value = categoryKey;
    document.getElementById('itemPrice').value = item.price;
    document.getElementById('editItemId').value = itemIndex;
    document.getElementById('editItemCategory').value = categoryKey;
    
    const preview = document.getElementById('imagePreview');
    preview.src = `images/${item.img}`;
    preview.classList.add('show');
    document.getElementById('uploadArea').style.display = 'none';
    uploadedImageData = null;
    
    itemModal.classList.add('active');
}

function closeItemModal() {
    itemModal.classList.remove('active');
}

function deleteItem(categoryKey, itemIndex) {
    const itemName = menuData[categoryKey].items[itemIndex].name;
    if (confirm(`ئایا دڵنیایت لە سڕینەوەی:\n"${itemName}"؟`)) {
        menuData[categoryKey].items.splice(itemIndex, 1);
        renderAdminPanel();
        renderMenu();
        showToast('ئایتەمەکە سڕایەوە! 🗑️', 'success');
    }
}

function saveItem(e) {
    e.preventDefault();
    
    const name = document.getElementById('itemName').value.trim();
    const category = document.getElementById('itemCategory').value;
    const price = document.getElementById('itemPrice').value.trim();
    const editId = document.getElementById('editItemId').value;
    const editCategory = document.getElementById('editItemCategory').value;

    if (!name || !category || !price) {
        showToast('تکایە هەموو فیلدەکان پڕبکەرەوە!', 'error');
        return;
    }

    const newItem = {
        name: name,
        price: price,
        img: uploadedImageData ? `custom_${Date.now()}.jpg` : 'default.jpg'
    };

    if (uploadedImageData) {
        newItem.imageData = uploadedImageData;
    }

    if (editId !== '' && editCategory !== '') {
        const oldImg = menuData[editCategory].items[editId].img;
        newItem.img = uploadedImageData ? `custom_${Date.now()}.jpg` : oldImg;
        if (uploadedImageData) {
            newItem.imageData = uploadedImageData;
        }
        menuData[editCategory].items[parseInt(editId)] = newItem;
        showToast('ئایتەمەکە نوێکرایەوە! ✏️', 'success');
    } else {
        menuData[category].items.push(newItem);
        showToast('ئایتەمەکی نوێ زیادکرا! ➕', 'success');
    }

    closeItemModal();
    renderAdminPanel();
    renderMenu();
}

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        if (file.size > 5 * 1024 * 1024) {
            showToast('قەبارەی وێنە زۆر گەورەیە! (ماکس 5MB)', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImageData = e.target.result;
            const preview = document.getElementById('imagePreview');
            preview.src = e.target.result;
            preview.classList.add('show');
            document.getElementById('uploadArea').style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
}

// ===== LANGUAGE FUNCTIONS =====
function changeLang(lang) {
    currentLang = lang;
    const btnTexts = { ku: 'زمان', ar: 'اللغة', en: 'Language' };
    document.getElementById('btn-text').innerText = btnTexts[lang];

    if (lang === 'en') {
        document.body.classList.add('ltr');
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    } else {
        document.body.classList.remove('ltr');
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', lang);
    }

    renderCategories();
    renderMenu();
    if (isAdminLoggedIn) renderAdminPanel();
    langBox.style.display = 'none';
}

// ===== RENDER FUNCTIONS =====
function renderCategories() {
    catContainer.innerHTML = Object.keys(menuData).map(key => `
        <div class="cat-item" onclick="scrollToSection('${key}')" id="cat-${key}">
            <i class="fas ${menuData[key].icon}"></i>
            <p>${menuData[key].title[currentLang]}</p>
        </div>
    `).join('');
}

function renderMenu() {
    menuContainer.innerHTML = '';

    Object.keys(menuData).forEach(key => {
        const section = menuData[key];
        let sectionHTML = `
            <div id="${key}" class="menu-section">
                <h2 class="category-header">${section.title[currentLang]}</h2>
                <div class="menu-section-grid">
        `;

        section.items.forEach(item => {
            const imgSrc = item.imageData || `images/${item.img}`;
            sectionHTML += `
                <div class="item-card">
                    <div class="item-img-container">
                        <img src="${imgSrc}" alt="${item.name}" 
                             onerror="this.src='https://via.placeholder.com/300x200/1a0822/F5F5DC?text=Luna+Bloom'"
                             loading="lazy">
                        <div class="price-badge">${item.price} IQD</div>
                    </div>
                    <div class="item-info">
                        <div class="item-name">${item.name}</div>
                    </div>
                </div>
            `;
        });

        sectionHTML += `</div></div>`;
        menuContainer.innerHTML += sectionHTML;
    });
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 140;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

        const activeCategory = document.getElementById(`cat-${id}`);
        if (activeCategory) {
            const container = catContainer;
            const offset = activeCategory.offsetLeft - (container.offsetWidth / 2) + (activeCategory.offsetWidth / 2);
            container.scrollTo({ left: offset, behavior: 'smooth' });
        }
    }
}

// Scroll Spy
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
        const sections = document.querySelectorAll('.menu-section');
        let currentId = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 250) {
                currentId = section.getAttribute('id');
            }
        });
        if (currentId) {
            document.querySelectorAll('.cat-item').forEach(item => item.classList.remove('active'));
            const activeLink = document.getElementById(`cat-${currentId}`);
            if (activeLink && !activeLink.classList.contains('active')) {
                activeLink.classList.add('active');
                const container = catContainer;
                const offset = activeLink.offsetLeft - (container.offsetWidth / 2) + (activeLink.offsetWidth / 2);
                container.scrollTo({ left: offset, behavior: 'smooth' });
            }
        }
        scrollTimeout = null;
    }, 50);
});

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => toast.classList.remove('show'), 3500);
}

// ===== INITIALIZATION =====
window.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMenu();
});


// 1. هاوردەکرنا فایربەیس ب ڕێکا لێنکێن CDN دا کو ل سەر Netlify کار بکەت
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, onSnapshot, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 2. کلیلێن تە (یێن درستن)
const firebaseConfig = {
  apiKey: "AIzaSyAn96Nxn_v2O1KQUkKJ6CuNEZ4BB1FxJ_0",
  authDomain: "luna-bloom-menu.firebaseapp.com",
  projectId: "luna-bloom-menu",
  storageBucket: "luna-bloom-menu.firebasestorage.app",
  messagingSenderId: "686203443803",
  appId: "1:686203443803:web:3906e5271a3f20a52bfd7e",
  measurementId: "G-9ZQPMZCBH9"
};

// 3. دەستپێکرن
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- فەنکشنا کێشانا ئایتمان (بۆ کڕیاری) ---
const renderMenuFromFirebase = () => {
    onSnapshot(collection(db, "menu_items"), (snapshot) => {
        // ل ڤێرە فەنکشنا خۆ یا ڕێندەرکرنێ بانگ بکە 
        // بۆ نموونە: renderMenu(snapshot.docs.map(doc => doc.data()));
        console.log("Datha ji Firebase hatin!");
    });
};

renderMenuFromFirebase();
