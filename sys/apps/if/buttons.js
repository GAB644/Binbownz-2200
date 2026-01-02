const backBtn = document.getElementById('backBtn');
const refreshBtn = document.getElementById('refreshBtn');
const homeBtn = document.getElementById('homeBtn');
const addressBar = document.getElementById('addressBar');
const contentFrame = document.getElementById('contentFrame');
const fakeredir = document.getElementById('fakeredir');

addressBar.value = contentFrame.src;
        
backBtn.addEventListener('click', function() {
    back()
});
    refreshBtn.addEventListener('click', function() {
    reload()
});
homeBtn.addEventListener('click', function() {
    contentFrame.src = "../../../ifhomepage.html";
    addressBar.value = contentFrame.src;
});
addressBar.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
    let url = addressBar.value.trim();
                
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
    }
    contentFrame.src = url;
    }
});

contentFrame.addEventListener('load', function() {
    addressBar.value = contentFrame.src;
});

if (fakeredir && contentFrame)
    fakeredir.addEventListener('click', function() {
        contentFrame.src = "../../../fake.html";
    });
