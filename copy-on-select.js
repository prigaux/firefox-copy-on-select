window.addEventListener('mouseup', function() {
    const selected = document.getSelection().toString()
    if (selected !== '') {
        //console.log("copy-on-select: sending to clipboard: ", selected)
        navigator.clipboard.writeText(selected)
    }
})
