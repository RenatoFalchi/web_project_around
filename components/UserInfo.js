export default class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._nameEl = document.querySelector(nameSelector);
    this._aboutEl = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    return {
      name: this._nameEl.textContent,
      about: this._aboutEl.textContent,
    };
  }

  setUserInfo({ name, about }) {
    if (name) this._nameEl.textContent = name;
    if (about) this._aboutEl.textContent = about;
  }
}
