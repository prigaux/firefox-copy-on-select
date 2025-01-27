On Linux (both Xorg and Wayland), selecting text with mouse or keyboard sends the selected text to PRIMARY selection.

This addon sends mouse selected text to regular clipboard:

> on mouseup, send document.getSelection() to navigator.clipboard. 

It is only a 4 lines content_script!

## Warning

* after install of module, you must reload any existing pages before selecting. Otherwise it will NOT work.
* do not test it on https://addons.mozilla.org/, it will not work


## Similar tools

* this addon is mostly https://addons.mozilla.org/fr/firefox/addon/copy-on-select/ with a github a link to see the source code!
* it does the same thing as VSCode https://marketplace.visualstudio.com/items?itemName=dinhani.copy-on-select