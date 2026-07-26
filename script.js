const budgetForm = document.getElementById('budget-form');
const packageSelect = document.getElementById('package');
const guestCountInput = document.getElementById('guest-count');
const extrasInput = document.getElementById('extras');
const estimatedTotal = document.getElementById('estimated-total');
const bookingForm = document.getElementById('booking-form');
const formFeedback = document.getElementById('form-feedback');

function formatCurrency(value) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(value);
}

function updateBudget() {
  const packageBase = Number(packageSelect.value || 0);
  const guestCount = Number(guestCountInput.value || 0);
  const extras = Number(extrasInput.value || 0);
  const guestCharge = guestCount * 85;
  const total = packageBase + guestCharge + extras;
  estimatedTotal.textContent = formatCurrency(total);
}

[packageSelect, guestCountInput, extrasInput].forEach((input) => {
  input.addEventListener('input', updateBudget);
  input.addEventListener('change', updateBudget);
});

updateBudget();

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formFeedback.textContent = 'Thank you! Your inquiry has been received. We will reach out shortly.';
  bookingForm.reset();
});
