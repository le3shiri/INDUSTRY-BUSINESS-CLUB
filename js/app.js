document.addEventListener('DOMContentLoaded', () => {
  // --- Configuration ---
  const CONFIG = {
    slideInterval: 5000,
    otpLength: 6,
    phonePrefix: '+212'
  };

  // --- State Management ---
  const State = {
    save: (key, value) => {
      try {
        localStorage.setItem('ibc_app_' + key, JSON.stringify(value));
      } catch (e) {
        console.error('Storage failed', e);
      }
    },
    load: (key) => {
      const item = localStorage.getItem('ibc_app_' + key);
      return item ? JSON.parse(item) : null;
    },
    clear: () => localStorage.clear()
  };

  // --- Navigation Helper ---
  window.navigateTo = (url) => {
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(-10px)'; // Smooth exit
    setTimeout(() => window.location.href = url, 300);
  };

  // --- Current Page Detection ---
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';

  // --- 1. Splash Screen Logic ---
  if (page === 'index.html') {
    // Only redirect if "onboarding" hasn't been seen? For now, always redirect.
    setTimeout(() => window.navigateTo('onboarding.html'), 2500);
  }

  // --- 2. Onboarding Logic (Auto Slider) ---
  if (page === 'onboarding.html') {
    const slides = document.querySelectorAll('.onboarding-slide');
    const dots = document.querySelectorAll('.dot');
    let current = 0;
    let interval;

    const showSlide = (index) => {
      slides.forEach((s, i) => {
        s.style.display = i === index ? 'block' : 'none';
        s.classList.toggle('active', i === index);
      });
      dots.forEach((d, i) => {
        d.classList.toggle('active', i === index);
        d.style.width = i === index ? '36px' : '12px';
      });
    };

    const nextSlide = () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    };

    // Init
    showSlide(0);
    interval = setInterval(nextSlide, CONFIG.slideInterval);

    // Manual Dot Click
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        clearInterval(interval);
        current = index;
        showSlide(current);
        interval = setInterval(nextSlide, CONFIG.slideInterval);
      });
    });
  }

  // --- 3. Step 1: Company Info ---
  if (page === 'register-step1.html') {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input, textarea');

    // Restore Data
    const saved = State.load('step1');
    if (saved) {
      Object.keys(saved).forEach(key => {
        if (form[key]) form[key].value = saved[key];
      });
    }

    // Real-time validation visual cue
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
          input.classList.remove('error');
          input.style.borderColor = 'var(--success-color)';
        } else {
          input.style.borderColor = '';
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      const data = {};

      inputs.forEach(input => {
        const val = input.value.trim();
        data[input.id] = val;

        if (!val) {
          valid = false;
          input.classList.add('error');
          input.style.borderColor = 'var(--error-color)';
        } else {
          // Specific Checks
          if (input.type === 'email' && !val.includes('@')) {
            valid = false;
            input.classList.add('error');
            // Expand error message logic here if needed
          }
        }
      });

      if (valid) {
        State.save('step1', data);
        window.navigateTo('register-step2.html');
      }
    });
  }

  // --- 4. Step 2: Role Selection ---
  if (page === 'register-step2.html') {
    const cards = document.querySelectorAll('.role-card');
    let selected = State.load('role');

    if (selected) {
      document.querySelector(`[data-role="${selected}"]`)?.classList.add('selected');
    }

    cards.forEach(card => {
      card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selected = card.dataset.role;

        // Add a small pulse animation on selection
        card.style.transform = 'scale(0.98)';
        setTimeout(() => card.style.transform = '', 150);
      });
    });

    document.getElementById('next-btn').addEventListener('click', () => {
      if (selected) {
        State.save('role', selected);
        window.navigateTo('register-step3.html');
      } else {
        // Shake animation or toast
        const grid = document.querySelector('.role-grid');
        grid.style.transform = 'translateX(5px)';
        setTimeout(() => grid.style.transform = 'translateX(-5px)', 50);
        setTimeout(() => grid.style.transform = 'translateX(0)', 100);
      }
    });
  }

  // --- 5. Step 3: Interests ---
  if (page === 'register-step3.html') {
    const pills = document.querySelectorAll('.pill-option');
    let interests = State.load('interests') || [];

    // Restore
    interests.forEach(id => {
      document.querySelector(`[data-id="${id}"]`)?.classList.add('selected');
    });

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pill.classList.toggle('selected');
        const id = pill.dataset.id;

        if (pill.classList.contains('selected')) {
          if (!interests.includes(id)) interests.push(id);
        } else {
          interests = interests.filter(i => i !== id);
        }
      });
    });

    document.getElementById('next-btn').addEventListener('click', () => {
      if (interests.length > 0) {
        State.save('interests', interests);
        window.navigateTo('otp-phone.html');
      } else {
        alert('Select at least one interest to continue.');
      }
    });
  }

  // --- 6. Phone OTP ---
  if (page === 'otp-phone.html') {
    const btn = document.getElementById('get-otp-btn');
    const input = document.getElementById('phone');

    btn.addEventListener('click', () => {
      if (input.value.length >= 9) {
        State.save('phone', CONFIG.phonePrefix + input.value);
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        setTimeout(() => window.navigateTo('otp-code.html'), 1000); // Simulate API delay
      } else {
        input.classList.add('error');
        input.focus();
      }
    });
  }

  // --- 7. Verify Code ---
  if (page === 'otp-code.html') {
    const inputs = document.querySelectorAll('.otp-input');
    const confirmBtn = document.getElementById('confirm-btn');
    const phoneDisplay = document.getElementById('phone-display');

    // Show masked phone
    const savedPhone = State.load('phone');
    if (savedPhone) phoneDisplay.textContent = '...' + savedPhone.slice(-2);

    // Auto Focus Logic
    inputs.forEach((input, idx) => {
      input.addEventListener('input', (e) => {
        if (e.inputType === 'insertText' && input.value) {
          if (idx < inputs.length - 1) inputs[idx + 1].focus();
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !input.value && idx > 0) {
          inputs[idx - 1].focus();
        }
      });

      // Paste support
      input.addEventListener('paste', (e) => {
        e.preventDefault();
        const text = (e.clipboardData || window.clipboardData).getData('text').slice(0, inputs.length);
        text.split('').forEach((char, i) => inputs[i].value = char);
        confirmBtn.focus();
      });
    });

    confirmBtn.addEventListener('click', () => {
      const code = Array.from(inputs).map(i => i.value).join('');
      if (code.length === 6) {
        confirmBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Verifying...';
        setTimeout(() => window.navigateTo('password.html'), 800);
      }
    });

    // Timer Logic
    let timeLeft = 30;
    const timerSpan = document.getElementById('timer');
    const resendLink = document.getElementById('resend-link');

    const countdown = setInterval(() => {
      timeLeft--;
      timerSpan.textContent = `(${timeLeft}s)`;
      if (timeLeft <= 0) {
        clearInterval(countdown);
        timerSpan.style.display = 'none';
        resendLink.classList.remove('disabled');
      }
    }, 1000);
  }

  // --- 8. Password ---
  if (page === 'password.html') {
    const btn = document.getElementById('create-account-btn');
    const toggles = document.querySelectorAll('.toggle-password');

    toggles.forEach(t => {
      t.addEventListener('click', (e) => {
        const input = document.getElementById(e.target.dataset.target);
        const isPass = input.type === 'password';
        input.type = isPass ? 'text' : 'password';
        e.target.textContent = isPass ? 'Hide' : 'Show';
      });
    });

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const p1 = document.getElementById('password').value;
      const p2 = document.getElementById('confirm-password').value;

      if (p1.length >= 8 && /\d/.test(p1) && p1 === p2) {
        btn.innerHTML = '<i class="fas fa-check"></i> Success!';
        btn.style.background = 'var(--success-color)';
        setTimeout(() => {
          State.clear();
          alert("Account Successfully Created!");
          window.navigateTo('index.html');
        }, 1000);
      } else {
        alert("Password mismatch or requirements not met.");
      }
    });
  }

  // --- 9. Login Logic (Simple Prototype) ---
  if (page === 'login.html') {
    const loginBtn = document.getElementById('login-btn');
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const toggles = document.querySelectorAll('.toggle-password');

    toggles.forEach(t => {
      t.addEventListener('click', (e) => {
        const target = document.getElementById(e.target.getAttribute('data-target') || 'login-password'); // Fallback logic
        if (target) {
          const isPass = target.type === 'password';
          target.type = isPass ? 'text' : 'password';
          e.target.textContent = isPass ? 'Hide' : 'Show';
        }
      });
    });

    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (email && password) {
        // Mock Authentication
        loginBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Authenticating...';
        setTimeout(() => {
          alert('Welcome back! Redirecting to dashboard...');
          // In a real app, you would redirect to dashboard
          window.navigateTo('index.html');
        }, 1500);
      } else {
        if (!email) emailInput.classList.add('error');
        if (!password) passwordInput.classList.add('error');
      }
    });
  }
});

/* --- Negotiations Helper (Global) --- */
const NEGOTIATIONS_MOCK = [
  { id: 1, role: 'buyer', title: '50 Tons of Portland Cement', status: 'pending', lastOffer: 115000 },
  { id: 2, role: 'buyer', title: 'Copper Wiring Scraps', status: 'accepted', lastOffer: 45000 },
  { id: 3, role: 'seller', title: 'Aluminum Blocks', status: 'pending', lastOffer: 12500 }
];

function getNegotiation(id) {
  return NEGOTIATIONS_MOCK.find(n => n.id == id);
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-MA', { style: 'currency', currency: 'MAD' }).format(amount);
}
