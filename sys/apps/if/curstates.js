// shit dat dont work :(
contentFrame.addEventListener('loadstart', function() {
    setLoadingState(true);
});

contentFrame.addEventListener('load', function() {
    setLoadingState(false);
    addressBar.value = contentFrame.src;
});


contentFrame.addEventListener('error', function() {
    setLoadingState(false);
});


contentFrame.addEventListener('readystatechange', function() {
    if (contentFrame.readyState === 'loading') {
    setLoadingState(true);
    } else {
    setLoadingState(false);
    }
});