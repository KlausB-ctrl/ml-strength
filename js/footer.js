const FOOTER_TEMPLATE = document.createElement('template');

if(document.title === 'ML Strength - Health and Fitness') {
    FOOTER_TEMPLATE.innerHTML = 
    `<footer>
        <div>
            <a href="terms.html">TERMS & CONDITIONS</a>
            <a href="privacy-policy.html">PRIVACY POLICY</a>
        </div>
        <div>
            <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
            <a href=https://www.instagram.com/?hl=en><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div>
            <a href="./index.html">© ML Strength 2022</a>
        </div>
    </footer>`;
}

else {
    FOOTER_TEMPLATE.innerHTML = 
    `<footer>
        <div>
            <a href="terms.html">TERMS & CONDITIONS</a>
            <a href="privacy-policy.html">PRIVACY POLICY</a>
        </div>
        <div>
            <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
            <a href=https://www.instagram.com/?hl=en><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div>
            <a href="../index.html">© ML Strength 2022</a>
        </div>
    </footer>`;
}


document.body.appendChild(FOOTER_TEMPLATE.content);