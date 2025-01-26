// Function to render the initial screen
function renderAccountTypeSelection() {
    const app = document.getElementById("onboard");
    app.innerHTML = `
      <div class= "info-con">
        <div class= "back-btn">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75539 15.2961L2.9591 11.4998M2.9591 11.4998L6.75539 7.70349M2.9591 11.4998L20.0424 11.4998" stroke="#1F201D" stroke-width="1.89815" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>
        <div class= "display-con">
         <p class="topic">What kind of Account suits you best?.</p>
         <div class="acct-con" id="individual">
            <div class = "acct-inner">
                    <div class= "svg-con">
                        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.7782 27.0282C42.8411 24.9653 44 22.1674 44 19.25C44 16.3326 42.8411 13.5347 40.7782 11.4718C38.7153 9.40892 35.9174 8.25 33 8.25C30.0826 8.25 27.2847 9.40892 25.2218 11.4718C23.1589 13.5347 22 16.3326 22 19.25C22 22.1674 23.1589 24.9653 25.2218 27.0282C27.2847 29.0911 30.0826 30.25 33 30.25C35.9174 30.25 38.7153 29.0911 40.7782 27.0282Z" stroke="#3C3B6E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.3882 44.1382C22.9983 40.5281 27.8946 38.5 33 38.5C38.1054 38.5 43.0017 40.5281 46.6118 44.1382C50.2219 47.7483 52.25 52.6446 52.25 57.75H13.75C13.75 52.6446 15.7781 47.7483 19.3882 44.1382Z" stroke="#3C3B6E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
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
    `;
  
    // Add event listeners to the account type buttons
    document.getElementById("individual").addEventListener("click", () => {
      renderDetailsForm("Individual");
    });
    document.getElementById("business").addEventListener("click", () => {
      renderDetailsForm("business");
    });
  }


  // Function to render the details form
function renderDetailsForm(accountType) {
    const app = document.getElementById("onboard");
    app.innerHTML = `
    <div class= "info-con">
      <div class= "back-btn">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.75539 15.2961L2.9591 11.4998M2.9591 11.4998L6.75539 7.70349M2.9591 11.4998L20.0424 11.4998" stroke="#1F201D" stroke-width="1.89815" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

      </div>
      <div class= "display-con form-input">
       <p class="topic">Create your Individual account</p>
       <p class="sub-topic">Let's get started on setting up your personal SwapMoney account.<p/>
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
      renderPasswordForm(accountType);
    });
  }

  // Function to render the password form
function renderPasswordForm(accountType) {
    const app = document.getElementById("onboard");
    app.innerHTML = `
    <div class= "info-con">
      <div class= "back-btn">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.75539 15.2961L2.9591 11.4998M2.9591 11.4998L6.75539 7.70349M2.9591 11.4998L20.0424 11.4998" stroke="#1F201D" stroke-width="1.89815" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

      </div>
      <div class= "display-con form-input">
       <p class="topic">Enter your Preferred Password</p>
       <p class="sub-topic">Create a strong password to keep your SwapMoney account safe.<p/>
       <div class = "input-con">
          <div class="input-wrapper">
            <input type="password" id="pass" placeholder="Enter Password">
            <span class="eye-icon" id="eye-icon-password">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.70692 2.29301C3.51832 2.11085 3.26571 2.01006 3.00352 2.01234C2.74132 2.01461 2.49051 2.11978 2.3051 2.30519C2.11969 2.4906 2.01452 2.74141 2.01224 3.00361C2.00997 3.26581 2.11076 3.51841 2.29292 3.70701L16.2929 17.707C16.4815 17.8892 16.7341 17.99 16.9963 17.9877C17.2585 17.9854 17.5093 17.8802 17.6947 17.6948C17.8801 17.5094 17.9853 17.2586 17.9876 16.9964C17.9899 16.7342 17.8891 16.4816 17.7069 16.293L16.2339 14.82C17.7914 13.5781 18.9432 11.8999 19.5419 10C18.2679 5.94301 14.4779 3.00001 9.99992 3.00001C8.43235 2.99788 6.88642 3.36586 5.48792 4.07401L3.70792 2.29301H3.70692ZM7.96792 6.55301L9.48192 8.06801C9.82101 7.97796 10.1778 7.97856 10.5166 8.06974C10.8554 8.16092 11.1643 8.33949 11.4124 8.58758C11.6604 8.83566 11.839 9.14455 11.9302 9.48334C12.0214 9.82213 12.022 10.1789 11.9319 10.518L13.4459 12.032C13.8969 11.268 14.0811 10.3758 13.9696 9.49569C13.858 8.61557 13.4571 7.7975 12.8297 7.17019C12.2024 6.54287 11.3844 6.1419 10.5042 6.03036C9.62412 5.91881 8.7319 6.10302 7.96792 6.55401V6.55301Z" fill="#1F201D"/>
                    <path d="M12.454 16.697L9.75001 13.992C8.77769 13.9311 7.86103 13.5174 7.17206 12.8286C6.4831 12.1398 6.06918 11.2233 6.00801 10.251L2.33501 6.578C1.49022 7.58402 0.852357 8.74692 0.458008 10C1.73201 14.057 5.52301 17 10 17C10.847 17 11.669 16.895 12.454 16.697Z" fill="#1F201D"/>
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
  `;
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


  
  
  // Initialize the page by rendering the account type selection screen
  renderAccountTypeSelection();
  