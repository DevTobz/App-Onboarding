//Adding the routing functionality
let previousHash = "";

function router(){
  const route = window.location.hash.split("#")[1];

  if (!route) { 
    renderAccountTypeSelection();
    return;
  }
  switch (route) {
    case "individualDetails":
      renderDetailsForm("Individual");
      break;
    case "businessDetails":
      renderDetailsForm("business");
        break;
    case "passwordForm":
      renderPasswordForm();
      break;
    default:
      renderAccountTypeSelection();
  }
}

// Function to navigate to a new view and store the current hash as the previous one and adding navigation animations
function navigateTo(newHash,renderFunction) {
  const topic = document.querySelector(".topic");
  topic.classList.remove("animate"); 

  sessionStorage.setItem("previousHash", window.location.hash);
  window.location.hash = newHash;
  renderFunction();

}

const toggleTheme = () => {
  const root = document.documentElement;
  const useDark = document.getElementById("onboard");
  if (root.getAttribute("data-theme") === "dark") {
    root.setAttribute("data-theme", "light");
    useDark.classList.remove("dark");

  } else {
    root.setAttribute("data-theme", "dark");
    useDark.classList.add("dark");
  }
};






// Function to render the initial screen
function renderAccountTypeSelection() {
    const app = document.getElementById("onboard");
    app.innerHTML = `
      <div class= "info-con">
      <div class="btn-con">
          <div class= "back-btn">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75539 15.2961L2.9591 11.4998M2.9591 11.4998L6.75539 7.70349M2.9591 11.4998L20.0424 11.4998" stroke="" stroke-width="1.89815" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          <div class="theme-toggle" id="theme-tg">
            <svg class="dark" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

              <defs>
              </defs>
              <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                <path d="M 87.823 60.7 c -0.463 -0.423 -1.142 -0.506 -1.695 -0.214 c -15.834 8.398 -35.266 2.812 -44.232 -12.718 c -8.966 -15.53 -4.09 -35.149 11.101 -44.665 c 0.531 -0.332 0.796 -0.963 0.661 -1.574 c -0.134 -0.612 -0.638 -1.074 -1.259 -1.153 c -9.843 -1.265 -19.59 0.692 -28.193 5.66 C 13.8 12.041 6.356 21.743 3.246 33.35 S 1.732 57.08 7.741 67.487 c 6.008 10.407 15.709 17.851 27.316 20.961 C 38.933 89.486 42.866 90 46.774 90 c 7.795 0 15.489 -2.044 22.42 -6.046 c 8.601 -4.966 15.171 -12.43 18.997 -21.586 C 88.433 61.79 88.285 61.123 87.823 60.7 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              </g>
            </svg>


            <svg class="light" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100" height="100" viewBox="0 0 256 256" xml:space="preserve">
              <defs>
              </defs>
              <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                <path d="M 45 68 c -12.682 0 -23 -10.317 -23 -23 c 0 -12.682 10.318 -23 23 -23 c 12.683 0 23 10.318 23 23 C 68 57.683 57.683 68 45 68 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 38.652 17.61 c -0.292 0 -0.573 -0.127 -0.765 -0.356 c -0.239 -0.284 -0.301 -0.677 -0.161 -1.021 l 6.348 -15.61 C 44.227 0.247 44.593 0 45 0 s 0.773 0.247 0.926 0.623 l 6.349 15.61 c 0.14 0.344 0.077 0.737 -0.162 1.021 c -0.238 0.284 -0.616 0.414 -0.978 0.333 c -4.045 -0.881 -8.228 -0.881 -12.271 0 C 38.794 17.603 38.723 17.61 38.652 17.61 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 45 90 c -0.407 0 -0.773 -0.246 -0.926 -0.623 l -6.348 -15.61 c -0.14 -0.344 -0.078 -0.737 0.161 -1.021 c 0.239 -0.284 0.615 -0.412 0.978 -0.333 c 4.043 0.882 8.226 0.882 12.271 0 c 0.363 -0.08 0.74 0.05 0.978 0.333 c 0.239 0.283 0.302 0.677 0.162 1.021 l -6.349 15.61 C 45.773 89.754 45.407 90 45 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 16.61 52.349 c -0.127 0 -0.255 -0.024 -0.377 -0.073 l -15.61 -6.349 C 0.247 45.773 0 45.407 0 45 s 0.247 -0.773 0.624 -0.926 l 15.61 -6.348 c 0.343 -0.14 0.737 -0.078 1.021 0.161 c 0.284 0.239 0.412 0.616 0.333 0.978 c -0.441 2.021 -0.665 4.086 -0.665 6.135 c 0 2.049 0.224 4.113 0.665 6.136 c 0.079 0.362 -0.049 0.739 -0.333 0.978 C 17.071 52.269 16.842 52.349 16.61 52.349 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 73.39 52.349 c -0.231 0 -0.461 -0.08 -0.644 -0.235 c -0.284 -0.238 -0.412 -0.615 -0.333 -0.978 c 0.44 -2.022 0.664 -4.087 0.664 -6.136 c 0 -2.049 -0.224 -4.114 -0.664 -6.135 c -0.079 -0.362 0.049 -0.739 0.333 -0.978 c 0.283 -0.239 0.676 -0.301 1.021 -0.161 l 15.61 6.348 C 89.754 44.227 90 44.593 90 45 s -0.246 0.773 -0.623 0.926 l -15.61 6.349 C 73.645 52.324 73.517 52.349 73.39 52.349 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 20.437 30.415 c -0.028 0 -0.057 -0.001 -0.085 -0.004 c -0.37 -0.032 -0.692 -0.266 -0.836 -0.607 l -6.549 -15.527 c -0.158 -0.375 -0.073 -0.808 0.214 -1.096 c 0.288 -0.288 0.722 -0.371 1.096 -0.214 l 15.527 6.549 c 0.342 0.144 0.576 0.466 0.607 0.835 c 0.032 0.37 -0.144 0.727 -0.456 0.927 c -1.743 1.119 -3.36 2.42 -4.809 3.868 c -1.448 1.449 -2.75 3.066 -3.868 4.809 C 21.093 30.243 20.775 30.415 20.437 30.415 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 76.112 77.112 c -0.131 0 -0.263 -0.025 -0.389 -0.078 l -15.526 -6.549 c -0.342 -0.145 -0.576 -0.467 -0.607 -0.836 c -0.032 -0.37 0.144 -0.727 0.456 -0.928 c 1.745 -1.121 3.363 -2.423 4.808 -3.868 l 0 0 c 1.445 -1.444 2.747 -3.063 3.868 -4.808 c 0.201 -0.312 0.553 -0.489 0.928 -0.456 c 0.369 0.031 0.691 0.266 0.836 0.607 l 6.549 15.526 c 0.157 0.375 0.073 0.809 -0.215 1.096 C 76.628 77.011 76.372 77.112 76.112 77.112 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 69.563 30.414 c -0.339 0 -0.656 -0.171 -0.842 -0.459 c -1.121 -1.746 -2.423 -3.363 -3.868 -4.809 l 0 0 c -1.447 -1.447 -3.065 -2.749 -4.808 -3.868 c -0.313 -0.2 -0.488 -0.557 -0.456 -0.927 c 0.031 -0.37 0.266 -0.691 0.607 -0.835 l 15.526 -6.549 c 0.373 -0.158 0.808 -0.074 1.096 0.214 c 0.288 0.288 0.372 0.721 0.215 1.096 l -6.549 15.527 c -0.145 0.342 -0.467 0.576 -0.836 0.607 C 69.62 30.413 69.592 30.414 69.563 30.414 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 13.887 77.112 c -0.26 0 -0.516 -0.102 -0.707 -0.293 c -0.288 -0.288 -0.373 -0.721 -0.214 -1.096 l 6.549 -15.526 c 0.144 -0.342 0.466 -0.576 0.835 -0.607 c 0.37 -0.043 0.727 0.144 0.927 0.456 c 1.119 1.742 2.421 3.36 3.868 4.808 l 0 0 c 1.446 1.446 3.063 2.747 4.809 3.868 c 0.312 0.201 0.488 0.558 0.456 0.928 c -0.032 0.369 -0.266 0.691 -0.607 0.836 l -15.527 6.549 C 14.15 77.087 14.019 77.112 13.887 77.112 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              </g>
            </svg>



          
          </div>

      </div>
  
        <div class="page">
        <div class= "display-con">
         <p class="topic">What kind of Account suits you best?.</p>
         <div class="acct-con" id="individual">
            <div class = "acct-inner">
                    <div class= "svg-con">
                        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.7782 27.0282C42.8411 24.9653 44 22.1674 44 19.25C44 16.3326 42.8411 13.5347 40.7782 11.4718C38.7153 9.40892 35.9174 8.25 33 8.25C30.0826 8.25 27.2847 9.40892 25.2218 11.4718C23.1589 13.5347 22 16.3326 22 19.25C22 22.1674 23.1589 24.9653 25.2218 27.0282C27.2847 29.0911 30.0826 30.25 33 30.25C35.9174 30.25 38.7153 29.0911 40.7782 27.0282Z" stroke="" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.3882 44.1382C22.9983 40.5281 27.8946 38.5 33 38.5C38.1054 38.5 43.0017 40.5281 46.6118 44.1382C50.2219 47.7483 52.25 52.6446 52.25 57.75H13.75C13.75 52.6446 15.7781 47.7483 19.3882 44.1382Z" stroke="" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="details">
                        <p class="acct-title">Individual Account</p>
                        <p class="acct-desc">Perfect for personal use. Send money to family and friends with ease and zero fees.</p>
                    </div>
            </div>
         </div>

         <div class="acct-con" id="business">
            <div class = "acct-inner">
                    <div class= "svg-con">
                        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M57.75 36.4513C49.8863 39.6309 41.4822 41.2604 33 41.25C24.2467 41.25 15.895 39.545 8.25 36.4513M33 33H33.0275M44 16.5V11C44 9.54131 43.4205 8.14236 42.3891 7.11091C41.3576 6.07946 39.9587 5.5 38.5 5.5H27.5C26.0413 5.5 24.6424 6.07946 23.6109 7.11091C22.5795 8.14236 22 9.54131 22 11V16.5H44ZM13.75 55H52.25C53.7087 55 55.1076 54.4205 56.1391 53.3891C57.1705 52.3576 57.75 50.9587 57.75 49.5V22C57.75 20.5413 57.1705 19.1424 56.1391 18.1109C55.1076 17.0795 53.7087 16.5 52.25 16.5H13.75C12.2913 16.5 10.8924 17.0795 9.86091 18.1109C8.82946 19.1424 8.25 20.5413 8.25 22V49.5C8.25 50.9587 8.82946 52.3576 9.86091 53.3891C10.8924 54.4205 12.2913 55 13.75 55Z" stroke="#3C3B6E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="details">
                        <p class="acct-title">Business Account</p>
                        <p class="acct-desc">Ideal for business transactions. Manage your finances efficiently with no hidden costs.</p>
                    </div>
            </div>
         </div>
        </div>
        </div>

     
      </div>
    `;
  
    // Add event listeners to the account type buttons
    document.getElementById("individual").addEventListener("click", () => {
      navigateTo("individualDetails",renderDetailsForm)
  
    });
    document.getElementById("business").addEventListener("click", () => {
      navigateTo("businessDetails",renderDetailsForm)
    });

    document.getElementById("theme-tg").addEventListener("click", () => {
       toggleTheme();
    })

    setTimeout(() => {
    
      const topic = document.querySelector('.topic');
      topic.classList.add('animate');
  
      }, 100);
  }


  // Function to render the details form
function renderDetailsForm(accountType) {
    previousHash = window.location.hash;
    const app = document.getElementById("onboard");
    app.innerHTML = `
    <div class= "info-con">
      <div class= "back-btn" id="back-bt">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.75539 15.2961L2.9591 11.4998M2.9591 11.4998L6.75539 7.70349M2.9591 11.4998L20.0424 11.4998" stroke="#1F201D" stroke-width="1.89815" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

      </div>
      
      <div class= "display-con form-input">
       <p class="topic" id="tp">Create your Individual account</p>
       <p class="sub-topic" id="sub-tp">Let's get started on setting up your personal SwapMoney account.<p/>
       <div class = "input-con">
            <div class="country-flag-con">
                <div id= "country-flag" >
                  <div id="flag">
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_119)">
                            <path d="M18.5002 37.0001C28.7175 37.0001 37.0002 28.7173 37.0002 18.5001C37.0002 8.28279 28.7175 6.10352e-05 18.5002 6.10352e-05C8.28298 6.10352e-05 0.000244141 8.28279 0.000244141 18.5001C0.000244141 28.7173 8.28298 37.0001 18.5002 37.0001Z" fill="#F0F0F0"/>
                            <path d="M36.8436 16.087H20.9134H20.9133V0.156661C20.1234 0.0538267 19.3181 6.10352e-05 18.5002 6.10352e-05C17.6824 6.10352e-05 16.8771 0.0538267 16.0872 0.156661V16.0869V16.087H0.156844C0.0540098 16.8769 0.000244141 17.6821 0.000244141 18.5001C0.000244141 19.318 0.0540098 20.1232 0.156844 20.9131H16.0871H16.0872V36.8435C16.8771 36.9463 17.6824 37.0001 18.5002 37.0001C19.3181 37.0001 20.1234 36.9464 20.9133 36.8435V20.9132V20.9132H36.8436C36.9465 20.1232 37.0002 19.318 37.0002 18.5001C37.0002 17.6821 36.9465 16.8769 36.8436 16.087Z" fill="#D80027"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_119">
                              <rect width="37" height="37" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                  </div>
                
                </div>
                <input type="tel" id="phone-number" placeholder="+44 Phone Number">

            </div>
            <input type="email" id="email" placeholder="Email Address">
            <input type="text" id="first-name" placeholder="First Name">
            
       </div>
      </div>

      <div id="next-btn">
        <p>Next</p>
      </div>


   
    </div>
  `;
  
  
    document.getElementById("next-btn").addEventListener("click", () => {
      navigateTo("passwordForm", renderPasswordForm);
     
      
    });

    document.getElementById("back-bt").addEventListener("click", () => {
      navigateTo("",renderAccountTypeSelection)
    })
      //Animating inputs field on page load and added a bit of timeout to delay the animation after the DOM must have been fully loaded
  setTimeout(() => {
    
    const topic = document.querySelector('.topic');
    topic.classList.add('animate');

    const subtopic = document.querySelector('.sub-topic');
    subtopic.classList.add('animate');

    const inputCon = document.querySelector('.input-con');
    inputCon.classList.add('animate');

    }, 100); 

  }

  // Function to render the password form
function renderPasswordForm() {
  previousHash = window.location.hash;
    const app = document.getElementById("onboard");
    app.innerHTML = `
    <div class= "info-con">
      <div class= "back-btn" id="back-bt">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.75539 15.2961L2.9591 11.4998M2.9591 11.4998L6.75539 7.70349M2.9591 11.4998L20.0424 11.4998" stroke="#1F201D" stroke-width="1.89815" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

      </div>
     
      <div class = "page">
      <div class= "display-con form-input">
       <p class="topic">Enter your Preferred Password</p>
       <p class="sub-topic">Create a strong password to keep your SwapMoney account safe.<p/>
       <div class = "input-con-pass">
          <div class="input-wrapper">
            <input type="password" id="pass" placeholder="Enter Password">
            <span class="eye-icon" id="eye-icon-password">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.70692 2.29301C3.51832 2.11085 3.26571 2.01006 3.00352 2.01234C2.74132 2.01461 2.49051 2.11978 2.3051 2.30519C2.11969 2.4906 2.01452 2.74141 2.01224 3.00361C2.00997 3.26581 2.11076 3.51841 2.29292 3.70701L16.2929 17.707C16.4815 17.8892 16.7341 17.99 16.9963 17.9877C17.2585 17.9854 17.5093 17.8802 17.6947 17.6948C17.8801 17.5094 17.9853 17.2586 17.9876 16.9964C17.9899 16.7342 17.8891 16.4816 17.7069 16.293L16.2339 14.82C17.7914 13.5781 18.9432 11.8999 19.5419 10C18.2679 5.94301 14.4779 3.00001 9.99992 3.00001C8.43235 2.99788 6.88642 3.36586 5.48792 4.07401L3.70792 2.29301H3.70692ZM7.96792 6.55301L9.48192 8.06801C9.82101 7.97796 10.1778 7.97856 10.5166 8.06974C10.8554 8.16092 11.1643 8.33949 11.4124 8.58758C11.6604 8.83566 11.839 9.14455 11.9302 9.48334C12.0214 9.82213 12.022 10.1789 11.9319 10.518L13.4459 12.032C13.8969 11.268 14.0811 10.3758 13.9696 9.49569C13.858 8.61557 13.4571 7.7975 12.8297 7.17019C12.2024 6.54287 11.3844 6.1419 10.5042 6.03036C9.62412 5.91881 8.7319 6.10302 7.96792 6.55401V6.55301Z" fill=""/>
                    <path d="M12.454 16.697L9.75001 13.992C8.77769 13.9311 7.86103 13.5174 7.17206 12.8286C6.4831 12.1398 6.06918 11.2233 6.00801 10.251L2.33501 6.578C1.49022 7.58402 0.852357 8.74692 0.458008 10C1.73201 14.057 5.52301 17 10 17C10.847 17 11.669 16.895 12.454 16.697Z" fill=""/>
                    </g>
                </svg>
            </span>
          </div>
          <div class="input-wrapper">
            <input type="password" id="repass" placeholder="Re Enter Password">
          </div>
            
       </div>
      </div>

      <div id="next-btn">
        <p>Next</p>
      </div>
      </div>
   
    </div>
  `;

  //Animating inputs field on page load and added a bit of timeout to delay the animation after the DOM must have been fully loaded
  setTimeout(() => {
    const inputs = document.querySelectorAll('.input-wrapper');
    inputs.forEach(input => {
        input.classList.add('animate');
    });
    const topic = document.querySelector('.topic');
    topic.classList.add('animate');

    const subtopic = document.querySelector('.sub-topic');
    subtopic.classList.add('animate');

    }, 100); 

  //adding event listner to back button
  document.getElementById("back-bt").addEventListener("click", () => {
  const previousHash = sessionStorage.getItem("previousHash");
  if (previousHash) {
    window.location.hash = previousHash;
    router(); 
  } else {
    window.location.hash = ""; 
    renderAccountTypeSelection();
  }
  });
  const passInput = document.getElementById('pass');
  const rePassInput = document.getElementById('repass');
  const eyeIcon = document.getElementById('eye-icon-password');

  eyeIcon.addEventListener('click', () => togglePassword(passInput, eyeIcon,rePassInput));
 
}

  //working with password toggle
  function togglePassword(passInput, icon, rePassInput) {
    // Im checking the current input type and icon so I can toggle it
    if (passInput.type === "password") {
      passInput.type = "text"; 
      icon.innerHTML= `<svg width="20" height="20" viewBox="0 0 550 512" xmlns="http://www.w3.org/2000/svg"><path d="M255.66,112c-77.94,0-157.89,45.11-220.83,135.33a16,16,0,0,0-.27,17.77C82.92,340.8,161.8,400,255.66,400,348.5,400,429,340.62,477.45,264.75a16.14,16.14,0,0,0,0-17.47C428.89,172.28,347.8,112,255.66,112Z" style="fill:none;stroke:#1F201D;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><circle cx="256" cy="256" r="80" style="fill:none;stroke:#1F201D;stroke-miterlimit:10;stroke-width:32px"/></svg>`;
      rePassInput.type = "text";   
    } else {
      passInput.type = "password";  
      icon.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.2">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.70692 2.29301C3.51832 2.11085 3.26571 2.01006 3.00352 2.01234C2.74132 2.01461 2.49051 2.11978 2.3051 2.30519C2.11969 2.4906 2.01452 2.74141 2.01224 3.00361C2.00997 3.26581 2.11076 3.51841 2.29292 3.70701L16.2929 17.707C16.4815 17.8892 16.7341 17.99 16.9963 17.9877C17.2585 17.9854 17.5093 17.8802 17.6947 17.6948C17.8801 17.5094 17.9853 17.2586 17.9876 16.9964C17.9899 16.7342 17.8891 16.4816 17.7069 16.293L16.2339 14.82C17.7914 13.5781 18.9432 11.8999 19.5419 10C18.2679 5.94301 14.4779 3.00001 9.99992 3.00001C8.43235 2.99788 6.88642 3.36586 5.48792 4.07401L3.70792 2.29301H3.70692ZM7.96792 6.55301L9.48192 8.06801C9.82101 7.97796 10.1778 7.97856 10.5166 8.06974C10.8554 8.16092 11.1643 8.33949 11.4124 8.58758C11.6604 8.83566 11.839 9.14455 11.9302 9.48334C12.0214 9.82213 12.022 10.1789 11.9319 10.518L13.4459 12.032C13.8969 11.268 14.0811 10.3758 13.9696 9.49569C13.858 8.61557 13.4571 7.7975 12.8297 7.17019C12.2024 6.54287 11.3844 6.1419 10.5042 6.03036C9.62412 5.91881 8.7319 6.10302 7.96792 6.55401V6.55301Z" fill="#1F201D"/>
                          <path d="M12.454 16.697L9.75001 13.992C8.77769 13.9311 7.86103 13.5174 7.17206 12.8286C6.4831 12.1398 6.06918 11.2233 6.00801 10.251L2.33501 6.578C1.49022 7.58402 0.852357 8.74692 0.458008 10C1.73201 14.057 5.52301 17 10 17C10.847 17 11.669 16.895 12.454 16.697Z" fill="#1F201D"/>
                          </g>
                        </svg>`; 
      rePassInput.type = "password";
    }
  }


//Making sure window is listening to hash changes for navigation
  window.addEventListener("hashchange", router);

  
  
  // Initialize the page by rendering the account type selection screen
  renderAccountTypeSelection();

  //Initialize Router to handle navigation
  router();

  