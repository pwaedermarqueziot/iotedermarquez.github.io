class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Márquez Sánchez Eder Germán IC - 52M.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
