'use babel';

import MarkoJsGenerateView from './marko-js-generate-view';
import { CompositeDisposable } from 'atom';

//const markoGenerator = require('./marko-js-generator');

export default {

  markoJsGenerateView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.markoJsGenerateView = new MarkoJsGenerateView(state.markoJsGenerateViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.markoJsGenerateView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'marko-js-generate:create-component': () => this.createUIComponent()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.markoJsGenerateView.destroy();
  },

  serialize() {
    return {
      markoJsGenerateViewState: this.markoJsGenerateView.serialize()
    };
  },

  createUIComponent() {
    remote = require("remote");
    dialog = remote.require("dialog")
    //TODO: Find correct dialog
    //User must be able to enter component name & file path.
  }

};
