import TogetherButton from './index'

describe("TogetherButton", () => {
  it('should open modal if the user click in together button', () => {
    document.body.innerHTML =
      '<div class="content-togeher">' +
      '  <button id="modal-btn" class="together-btn"> Button </button>' +
      '</div>';
    const togetherButton = new TogetherButton()
    document.querySelector('.together-btn').click()
  })


});