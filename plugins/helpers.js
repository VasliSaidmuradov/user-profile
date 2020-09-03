export default function ({ }, inject) {
  inject('formatPhone', (value) => {
    if (!value) return

    let cleaned = (value).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{1})(\d{3})(\d{7})$/);

    if (match) {
      return '+' + match[1] + ' ' + match[2] + ' ' + match[3];
    }
  })
}
