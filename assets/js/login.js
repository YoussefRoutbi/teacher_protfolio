function valid() {
  const mailValid = mail();
  const passValid = password();

  if (!mailValid || !passValid) {
    return false; // block submit
  }

  // If valid, show alert and redirect after delay
  showSuccessAndRedirect();
  return false; // prevent default submit to handle redirect in JS
}

function mail() {
  let email = document.getElementById('email');
  let atIndex = email.value.indexOf('@');

  if (atIndex === -1) {
    markInvalid(email);
    return false;
  }

  let domain = email.value.substring(atIndex + 1).toLowerCase();

  const domains = [
    "gmail.com","yahoo.com","yahoo.co.uk","outlook.com","hotmail.com","live.com",
    "icloud.com","aol.com","msn.com","mail.com","protonmail.com","zoho.com",
    "gmx.com","yandex.com","fastmail.com","mail.ru","inbox.com","me.com",
    "qq.com","163.com","126.com"
  ];

  if (!domains.includes(domain)) {
    markInvalid(email);
    return false;
  } else {
    markValid(email);
    return true;
  }
}

function password() {
  let password = document.getElementById('pass');
  let pass = password.value;

  if (pass.length < 8 || !hasDigit(pass)) {
    markInvalid(password);
    return false;
  } else {
    markValid(password);
    return true;
  }
}

function hasDigit(str) {
  return /\d/.test(str);
}

function markInvalid(el) {
  el.classList.remove('is-valid');
  el.classList.add('is-invalid');
}

function markValid(el) {
  el.classList.remove('is-invalid');
  el.classList.add('is-valid');
}

function showSuccessAndRedirect() {
  // Create alert div dynamically
  const form = document.querySelector('form');
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-success';
  alertDiv.textContent = 'Login successful! Redirecting to dashboard...';
  form.prepend(alertDiv);

  // Disable submit button
  form.querySelector('button[type="submit"]').disabled = true;

  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 2000);
}
