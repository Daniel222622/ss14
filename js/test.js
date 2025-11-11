// JS страница для теста всякой хуеты //
    function verify_confirm() {
        document.cookie="age_verification=1; path=/; SameSite=none; Secure";
    }
    function toggleButtonConfirm() {
        document.querySelector(".verify_confirm").classList.toggle("button_disable");
    }
    