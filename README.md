On Linux (both Xorg and Wayland), selecting text with mouse or keyboard sends the selected text to PRIMARY selection.

This addon sends mouse selected text to regular clipboard:

> on mouseup, send document.getSelection() to navigator.clipboard. It is only a 4 lines content_script!
