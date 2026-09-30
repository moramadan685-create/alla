// ====================== الإعدادات (غير هنا) ======================
const PASSWORD = "1102007 ";                    // الباسورد
const GIRL_NAME = "BEST ENGINEERING";                // اسم البنت
const PERSONAL_MESSAGE = `

✨ Welcome to Your Special Day ✨

Happy Birthday

Eng. [ALLaa] 🤍

Today is more than just a date…
It’s a celebration of someone truly special. 🌷

May this new year of your life be filled with
success, happiness, and beautiful moments. ✨

🎂 Happy Birthday, Engineer! 🎂

[ Start the Celebration 🎁 ]`;           // الرسالة الشخصية

const FINAL_MESSAGE = `One Last Wish ✨

As this special day comes to an end,
I hope you always remember how special you are.

May every new chapter bring you closer to your dreams,
and may your life always be filled with happiness, success, and beautiful memories. 🤍

Keep shining, Engineer. ✨

Happy Birthday, [Allol] 🎂💫

`;                                    // الرسالة النهائية

// الصور (غيرها بالروابط الحقيقية بعدين)
const items = [
    { number: 1,  image: "images/0.jpg",  word: "انجز وصور", song: "music/1.mp3" },
    { number: 2,  image: "images/2.jpg",  word: "امسكي جامد", song: "music/2.mp3" },
    { number: 3,  image: "images/3.jpg",  word: "بنات الحج عبغفوور", song: "music/3.mp3" },
    { number: 4,  image: "images/4.jpg",  word: "عايزين ايييي", song: "music/4.mp3" },
    { number: 5,  image: "images/5.jpg",  word: "تراني كيووت", song: "music/5.mp3" },
    { number: 6,  image: "images/6.jpg",  word: "سووو كيووت", song: "music/6.mp3" },
    { number: 7,  image: "images/7.jpg",  word: "موديل", song: "music/7.mp3" },
    { number: 8,  image: "images/8.jpg",  word: "بتخوف البتاعه دي", song: "music/8.mp3" },
    { number: 9,  image: "images/9.jpg",  word: "أجمل صدفة", song: "music/9.mp3" },
    { number: 10, image: "images/10.jpg", word: "تمام يفندم", song: "music/10.mp3" },
    { number: 11, image: "images/11.jpg", word: "بتصورهم غصب", song: "music/2.mp3" },
    { number: 12, image: "images/12.jpg", word: "يوم مميز", song: "music/6.mp3" },
    { number: 13, image: "images/13.jpg", word: "فيها ريحة طبقين كشري", song: "music/3.mp3" },
    { number: 14, image: "images/14.jpg", word: "يا قمر", song: "music/7.mp3" },
    { number: 15, image: "images/19.jpg", word: "مشرفه عل الالعاب", song: "music/4.mp3" },
    { number: 16, image: "images/17.jpg", word: "صغنن", song: "music/12.mp3" },
    { number: 17, image: "images/15.jpg", word: "حاسسهاهاكر", song: "music/11.mp3" },
    { number: 18, image: "images/18.jpg", word: "اوله كلييه", song: "music/13.mp3" },
    { number: 19, image: "images/16.jpg", word: "احلي واحده ", song: "music/14.mp3" }
];

// ====================== باقي الكود (متغيرش فيه) ======================

let currentIndex = 0;
let viewedCount = 0;

// تحديث اسمها في الصفحة
document.getElementById("girl-name").textContent = GIRL_NAME;

function startExperience() {
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("countdown-screen").classList.remove("hidden");
    startCountdown();
}

function startCountdown() {
    // للتجربة: العداد بيخلص بعد 3 ثواني. غير الرقم لو حابب
    let secondsLeft = 3;

    const countdownEl = document.getElementById("countdown");
    const interval = setInterval(() => {
        const h = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
        const m = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
        const s = String(secondsLeft % 60).padStart(2, "0");
        countdownEl.textContent = `\( {h}: \){m}:${s}`;

        if (secondsLeft <= 0) {
            clearInterval(interval);
            document.getElementById("countdown-screen").classList.add("hidden");
            document.getElementById("password-screen").classList.remove("hidden");
        }
        secondsLeft--;
    }, 1000);
}

function checkPassword() {
    const input = document.getElementById("password-input").value;
    if (input === PASSWORD) {
        document.getElementById("password-screen").classList.add("hidden");
        document.getElementById("message-screen").classList.remove("hidden");
        typeWriter(PERSONAL_MESSAGE);
    } else {
        document.getElementById("password-error").textContent = "الباسورد غلط";
    }
}

function typeWriter(text) {
    const el = document.getElementById("typewriter");
    el.innerHTML = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 45); // سرعة الكتابة
        } else {
            document.getElementById("continue-btn").classList.remove("hidden");
        }
    }
    type();
}

function showGallery() {
    document.getElementById("message-screen").classList.add("hidden");
    document.getElementById("gallery-screen").classList.remove("hidden");

    // موسيقى خلفية
   // إيقاف الموسيقى الخلفية
const music = document.getElementById("birthday-music");
if (music) {
    music.pause();
    music.currentTime = 0;
}

    // Confetti
    confetti({
        particleCount: 160,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff6b9d', '#ff8fab', '#ffffff', '#c44569']
    });

    // نبدأ من أول صورة
    currentIndex = 0;
    showSingleImage(0);
}

function showSingleImage(index) {
    const item = items[index];
    const gallery = document.getElementById("gallery");

    gallery.innerHTML = `
        <div class="full-view">
            <div class="image-side">
                <img src="${item.image}" alt="" class="big-image">
            </div>
            
            <div class="text-side">
                <div class="big-word">${item.word}</div>
                
                <div class="nav-buttons">
                    <button onclick="prevSingle()">السابق</button>
                    <span class="counter">${index + 1} / ${items.length}</span>
                    <button onclick="nextSingle()">التالي</button>
                </div>
            </div>
        </div>
    `;

    // تحديث شريط التقدم
    viewedCount = index + 1;
    updateProgress();

    // تشغيل الأغنية
    const audio = document.getElementById("image-audio");
    if (audio) {
        audio.src = item.song;
        audio.play().catch(() => {});
    }
}
function nextSingle() {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        showSingleImage(currentIndex);
    } else {
        // آخر صورة → الرسالة النهائية
        document.getElementById("gallery-screen").classList.add("hidden");
        document.getElementById("final-screen").classList.remove("hidden");
        document.getElementById("final-message").textContent = FINAL_MESSAGE;

        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.5 }
        });
    }
}

function prevSingle() {
    if (currentIndex > 0) {
        currentIndex--;
        showSingleImage(currentIndex);
    }
}
function updateProgress() {
    const percent = (viewedCount / items.length) * 100;
    document.getElementById("progress-fill").style.width = percent + "%";
    document.getElementById("progress-text").textContent = `${viewedCount} / ${items.length}`;
}

function openLightbox(index) {
    currentIndex = index;
    const item = items[index];

    document.getElementById("lightbox-img").src = item.image;
    document.getElementById("lightbox-word").textContent = item.word;

    const audio = document.getElementById("image-audio");
    audio.src = item.song;
    audio.play().catch(() => {});

    document.getElementById("lightbox").classList.remove("hidden");

    // تحديث التقدم
    if (!item.viewed) {
        item.viewed = true;
        viewedCount++;
        updateProgress();
    }
}

function closeLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
    document.getElementById("image-audio").pause();

    // لو خلص كل الصور → الرسالة النهائية
    if (viewedCount >= items.length) {
        setTimeout(() => {
            document.getElementById("gallery-screen").classList.add("hidden");
            document.getElementById("final-screen").classList.remove("hidden");
            document.getElementById("final-message").textContent = FINAL_MESSAGE;

            confetti({
                particleCount: 200,
                spread: 120,
                origin: { y: 0.5 }
            });
        }, 400);
    }
}

function nextImage() {
    currentIndex = (currentIndex + 1) % items.length;
    openLightbox(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    openLightbox(currentIndex);
}

function restart() {
    location.reload();
}

// Enter للباسورد
document.getElementById("password-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") checkPassword();
});
// إنشاء عناصر عيد ميلاد طافية
function createFloatingElements() {
    const elements = ['❤️', '💕', '💗', '🎈', '🎉', '🎂', '💖', '✨','happy birthday' ];
    const count = 25;

    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.className = 'floating';
        el.innerHTML = elements[Math.floor(Math.random() * elements.length)];
        el.style.left = Math.random() * 100 + 'vw';
        el.style.animationDuration = (10 + Math.random() * 14) + 's';
        el.style.animationDelay = Math.random() * 12 + 's';
        el.style.fontSize = (18 + Math.random() * 22) + 'px';
        document.body.appendChild(el);
    }
}

createFloatingElements();