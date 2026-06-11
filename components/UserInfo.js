export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._nameEl = document.querySelector(nameSelector);
    this._aboutEl = document.querySelector(aboutSelector);
    this._avatarEl = document.querySelector(avatarSelector);
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

  setAvatar(link) {
    this._avatarEl.src = link;
  }
}
