<template>
<div style=widht:100%>
    <div class="main" style=" background-image: url('https://wallpaperaccess.com/full/1885449.jpg');  ">
    <section class="signup" >
            <div class="container f" >
                        <div class="signup-content">

                            <div class="signup-form">
                                <h2 class="form-title">Sign up</h2>
                                <form method="POST" class="register-form" id="register-form"  @submit.prevent="registerUser">
                                <div class="form-group">
                                    <label for="name"><i class="fas fa-user"></i></label>
                                    <input type="text" name="name" id="name" v-model="name" placeholder="Your Name"/>
                                </div>
                                <div class="form-group">
                                    <label for="email"><i class="fas fa-at"></i></label>
                                    <input type="text" name="email" id="email" v-model="email" placeholder="Your Email"/>
                                </div>
                                <div class="form-group">
                                    <label for="phonenumber"><i class="fas fa-phone-alt"></i></label>
                                    <input type="text" name="phonenumber" id="phonenumber"  v-model="phonenumber" placeholder="Your Phone Number ">
                                </div>
                                <div class="form-group">
                                    <div class="form-row hide-inputbtns">
                                        <input class="birthdate" type="date" placeholder="YYYY-MM-DD"  max="2000-12-31" data-date-split-input="true" v-model="birthdate"/>
                                    </div>
                                </div>
                                <div class="form-group" style="border-bottom: 1px solid #999;">
                                    <label for="phonenumber"><i class="fas fa-globe-asia"></i></label>
                                    <select name="country" class="form-control" id="country" v-model="country" style="font-family: 'Poppins';margin-left: 20px;">
                                    <option value="0" placeholder="Select a country ... " selected="selected">Select a country ... </option>
                                                        <optgroup id="country-optgroup-Africa" label="Africa">
                                                            <option value="Algeria" label="Algeria">Algeria</option>
                                                            <option value="Angola" label="Angola">Angola</option>
                                                            <option value="Benin" label="Benin">Benin</option>
                                                            <option value="Botswana" label="Botswana">Botswana</option>
                                                            <option value="Burkina Faso" label="Burkina Faso">Burkina Faso</option>
                                                            <option value="BI" label="Burundi">Burundi</option>
                                                            <option value="CM" label="Cameroon">Cameroon</option>
                                                            <option value="CV" label="Cape Verde">Cape Verde</option>
                                                            <option value="CF" label="Central African Republic">Central African Republic</option>
                                                            <option value="TD" label="Chad">Chad</option>
                                                            <option value="KM" label="Comoros">Comoros</option>
                                                            <option value="CG" label="Congo - Brazzaville">Congo - Brazzaville</option>
                                                            <option value="CD" label="Congo - Kinshasa">Congo - Kinshasa</option>
                                                            <option value="CI" label="Côte d’Ivoire">Côte d’Ivoire</option>
                                                            <option value="DJ" label="Djibouti">Djibouti</option>
                                                            <option value="EG" label="Egypt">Egypt</option>
                                                            <option value="GQ" label="Equatorial Guinea">Equatorial Guinea</option>
                                                            <option value="ER" label="Eritrea">Eritrea</option>
                                                            <option value="ET" label="Ethiopia">Ethiopia</option>
                                                            <option value="GA" label="Gabon">Gabon</option>
                                                            <option value="GM" label="Gambia">Gambia</option>
                                                            <option value="GH" label="Ghana">Ghana</option>
                                                            <option value="GN" label="Guinea">Guinea</option>
                                                            <option value="GW" label="Guinea-Bissau">Guinea-Bissau</option>
                                                            <option value="KE" label="Kenya">Kenya</option>
                                                            <option value="LS" label="Lesotho">Lesotho</option>
                                                            <option value="LR" label="Liberia">Liberia</option>
                                                            <option value="LY" label="Libya">Libya</option>
                                                            <option value="MG" label="Madagascar">Madagascar</option>
                                                            <option value="MW" label="Malawi">Malawi</option>
                                                            <option value="ML" label="Mali">Mali</option>
                                                            <option value="MR" label="Mauritania">Mauritania</option>
                                                            <option value="MU" label="Mauritius">Mauritius</option>
                                                            <option value="YT" label="Mayotte">Mayotte</option>
                                                            <option value="Morocco" label="Morocco">Morocco</option>
                                                            <option value="MZ" label="Mozambique">Mozambique</option>
                                                            <option value="NA" label="Namibia">Namibia</option>
                                                            <option value="NE" label="Niger">Niger</option>
                                                            <option value="NG" label="Nigeria">Nigeria</option>
                                                            <option value="RW" label="Rwanda">Rwanda</option>
                                                            <option value="RE" label="Réunion">Réunion</option>
                                                            <option value="SH" label="Saint Helena">Saint Helena</option>
                                                            <option value="SN" label="Senegal">Senegal</option>
                                                            <option value="SC" label="Seychelles">Seychelles</option>
                                                            <option value="SL" label="Sierra Leone">Sierra Leone</option>
                                                            <option value="SO" label="Somalia">Somalia</option>
                                                            <option value="ZA" label="South Africa">South Africa</option>
                                                            <option value="SD" label="Sudan">Sudan</option>
                                                            <option value="SZ" label="Swaziland">Swaziland</option>
                                                            <option value="ST" label="São Tomé and Príncipe">São Tomé and Príncipe</option>
                                                            <option value="TZ" label="Tanzania">Tanzania</option>
                                                            <option value="TG" label="Togo">Togo</option>
                                                            <option value="Tunisia" label="Tunisia">Tunisia</option>
                                                            <option value="UG" label="Uganda">Uganda</option>
                                                            <option value="EH" label="Western Sahara">Western Sahara</option>
                                                            <option value="ZM" label="Zambia">Zambia</option>
                                                            <option value="ZW" label="Zimbabwe">Zimbabwe</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-Americas" label="Americas">
                                                            <option value="AI" label="Anguilla">Anguilla</option>
                                                            <option value="AG" label="Antigua and Barbuda">Antigua and Barbuda</option>
                                                            <option value="AR" label="Argentina">Argentina</option>
                                                            <option value="AW" label="Aruba">Aruba</option>
                                                            <option value="BS" label="Bahamas">Bahamas</option>
                                                            <option value="BB" label="Barbados">Barbados</option>
                                                            <option value="BZ" label="Belize">Belize</option>
                                                            <option value="BM" label="Bermuda">Bermuda</option>
                                                            <option value="BO" label="Bolivia">Bolivia</option>
                                                            <option value="BR" label="Brazil">Brazil</option>
                                                            <option value="VG" label="British Virgin Islands">British Virgin Islands</option>
                                                            <option value="Canada" label="Canada">Canada</option>
                                                            <option value="KY" label="Cayman Islands">Cayman Islands</option>
                                                            <option value="CL" label="Chile">Chile</option>
                                                            <option value="CO" label="Colombia">Colombia</option>
                                                            <option value="CR" label="Costa Rica">Costa Rica</option>
                                                            <option value="CU" label="Cuba">Cuba</option>
                                                            <option value="DM" label="Dominica">Dominica</option>
                                                            <option value="DO" label="Dominican Republic">Dominican Republic</option>
                                                            <option value="EC" label="Ecuador">Ecuador</option>
                                                            <option value="SV" label="El Salvador">El Salvador</option>
                                                            <option value="FK" label="Falkland Islands">Falkland Islands</option>
                                                            <option value="GF" label="French Guiana">French Guiana</option>
                                                            <option value="GL" label="Greenland">Greenland</option>
                                                            <option value="GD" label="Grenada">Grenada</option>
                                                            <option value="GP" label="Guadeloupe">Guadeloupe</option>
                                                            <option value="GT" label="Guatemala">Guatemala</option>
                                                            <option value="GY" label="Guyana">Guyana</option>
                                                            <option value="HT" label="Haiti">Haiti</option>
                                                            <option value="HN" label="Honduras">Honduras</option>
                                                            <option value="JM" label="Jamaica">Jamaica</option>
                                                            <option value="MQ" label="Martinique">Martinique</option>
                                                            <option value="MX" label="Mexico">Mexico</option>
                                                            <option value="MS" label="Montserrat">Montserrat</option>
                                                            <option value="AN" label="Netherlands Antilles">Netherlands Antilles</option>
                                                            <option value="NI" label="Nicaragua">Nicaragua</option>
                                                            <option value="PA" label="Panama">Panama</option>
                                                            <option value="PY" label="Paraguay">Paraguay</option>
                                                            <option value="PE" label="Peru">Peru</option>
                                                            <option value="Puerto Rico" label="Puerto Rico">Puerto Rico</option>
                                                            <option value="BL" label="Saint Barthélemy">Saint Barthélemy</option>
                                                            <option value="KN" label="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                            <option value="LC" label="Saint Lucia">Saint Lucia</option>
                                                            <option value="MF" label="Saint Martin">Saint Martin</option>
                                                            <option value="PM" label="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                            <option value="VC" label="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                                            <option value="SR" label="Suriname">Suriname</option>
                                                            <option value="TT" label="Trinidad and Tobago">Trinidad and Tobago</option>
                                                            <option value="TC" label="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                            <option value="VI" label="U.S. Virgin Islands">U.S. Virgin Islands</option>
                                                            <option value="United States" label="United States">United States</option>
                                                            <option value="UY" label="Uruguay">Uruguay</option>
                                                            <option value="VE" label="Venezuela">Venezuela</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-Asia" label="Asia">
                                                            <option value="AF" label="Afghanistan">Afghanistan</option>
                                                            <option value="AM" label="Armenia">Armenia</option>
                                                            <option value="AZ" label="Azerbaijan">Azerbaijan</option>
                                                            <option value="BH" label="Bahrain">Bahrain</option>
                                                            <option value="BD" label="Bangladesh">Bangladesh</option>
                                                            <option value="BT" label="Bhutan">Bhutan</option>
                                                            <option value="BN" label="Brunei">Brunei</option>
                                                            <option value="KH" label="Cambodia">Cambodia</option>
                                                            <option value="CN" label="China">China</option>
                                                            <option value="CY" label="Cyprus">Cyprus</option>
                                                            <option value="GE" label="Georgia">Georgia</option>
                                                            <option value="HK" label="Hong Kong SAR China">Hong Kong SAR China</option>
                                                            <option value="IN" label="India">India</option>
                                                            <option value="ID" label="Indonesia">Indonesia</option>
                                                            <option value="IR" label="Iran">Iran</option>
                                                            <option value="IQ" label="Iraq">Iraq</option>
                                                            <option value="JP" label="Japan">Japan</option>
                                                            <option value="JO" label="Jordan">Jordan</option>
                                                            <option value="KZ" label="Kazakhstan">Kazakhstan</option>
                                                            <option value="KW" label="Kuwait">Kuwait</option>
                                                            <option value="KG" label="Kyrgyzstan">Kyrgyzstan</option>
                                                            <option value="LA" label="Laos">Laos</option>
                                                            <option value="LB" label="Lebanon">Lebanon</option>
                                                            <option value="MO" label="Macau SAR China">Macau SAR China</option>
                                                            <option value="MY" label="Malaysia">Malaysia</option>
                                                            <option value="MV" label="Maldives">Maldives</option>
                                                            <option value="MN" label="Mongolia">Mongolia</option>
                                                            <option value="MM" label="Myanmar [Burma]">Myanmar [Burma]</option>
                                                            <option value="NP" label="Nepal">Nepal</option>
                                                            <option value="NT" label="Neutral Zone">Neutral Zone</option>
                                                            <option value="KP" label="North Korea">North Korea</option>
                                                            <option value="OM" label="Oman">Oman</option>
                                                            <option value="PK" label="Pakistan">Pakistan</option>
                                                            <option value="PS" label="Palestinian Territories">Palestinian Territories</option>
                                                            <option value="YD" label="People's Democratic Republic of Yemen">People's Democratic Republic of Yemen</option>
                                                            <option value="PH" label="Philippines">Philippines</option>
                                                            <option value="QA" label="Qatar">Qatar</option>
                                                            <option value="SA" label="Saudi Arabia">Saudi Arabia</option>
                                                            <option value="SG" label="Singapore">Singapore</option>
                                                            <option value="KR" label="South Korea">South Korea</option>
                                                            <option value="LK" label="Sri Lanka">Sri Lanka</option>
                                                            <option value="SY" label="Syria">Syria</option>
                                                            <option value="TW" label="Taiwan">Taiwan</option>
                                                            <option value="TJ" label="Tajikistan">Tajikistan</option>
                                                            <option value="Thailand" label="Thailand">Thailand</option>
                                                            <option value="TL" label="Timor-Leste">Timor-Leste</option>
                                                            <option value="TR" label="Turkey">Turkey</option>
                                                            <option value="TM" label="Turkmenistan">Turkmenistan</option>
                                                            <option value="AE" label="United Arab Emirates">United Arab Emirates</option>
                                                            <option value="UZ" label="Uzbekistan">Uzbekistan</option>
                                                            <option value="VN" label="Vietnam">Vietnam</option>
                                                            <option value="YE" label="Yemen">Yemen</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-Europe" label="Europe">
                                                            <option value="Albania" label="Albania">Albania</option>
                                                            <option value="Andorra" label="Andorra">Andorra</option>
                                                            <option value="Austria" label="Austria">Austria</option>
                                                            <option value="Belarus" label="Belarus">Belarus</option>
                                                            <option value="Belgium" label="Belgium">Belgium</option>
                                                            <option value="Bosnia and Herzegovina" label="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                            <option value="Bulgaria" label="Bulgaria">Bulgaria</option>
                                                            <option value="HR" label="Croatia">Croatia</option>
                                                            <option value="CY" label="Cyprus">Cyprus</option>
                                                            <option value="CZ" label="Czech Republic">Czech Republic</option>
                                                            <option value="Denmark" label="Denmark">Denmark</option>
                                                            <option value="DD" label="East Germany">East Germany</option>
                                                            <option value="EE" label="Estonia">Estonia</option>
                                                            <option value="FO" label="Faroe Islands">Faroe Islands</option>
                                                            <option value="Finland" label="Finland">Finland</option>
                                                            <option value="France" label="France">France</option>
                                                            <option value="Germany" label="Germany">Germany</option>
                                                            <option value="GI" label="Gibraltar">Gibraltar</option>
                                                            <option value="Greece" label="Greece">Greece</option>
                                                            <option value="GG" label="Guernsey">Guernsey</option>
                                                            <option value="HU" label="Hungary">Hungary</option>
                                                            <option value="IS" label="Iceland">Iceland</option>
                                                            <option value="IE" label="Ireland">Ireland</option>
                                                            <option value="IM" label="Isle of Man">Isle of Man</option>
                                                            <option value="Italy" label="Italy">Italy</option>
                                                            <option value="JE" label="Jersey">Jersey</option>
                                                            <option value="LV" label="Latvia">Latvia</option>
                                                            <option value="LI" label="Liechtenstein">Liechtenstein</option>
                                                            <option value="LT" label="Lithuania">Lithuania</option>
                                                            <option value="LU" label="Luxembourg">Luxembourg</option>
                                                            <option value="MK" label="Macedonia">Macedonia</option>
                                                            <option value="MT" label="Malta">Malta</option>
                                                            <option value="FX" label="Metropolitan France">Metropolitan France</option>
                                                            <option value="MD" label="Moldova">Moldova</option>
                                                            <option value="MC" label="Monaco">Monaco</option>
                                                            <option value="ME" label="Montenegro">Montenegro</option>
                                                            <option value="Netherlands" label="Netherlands">Netherlands</option>
                                                            <option value="Norway" label="Norway">Norway</option>
                                                            <option value="PL" label="Poland">Poland</option>
                                                            <option value="Portugal" label="Portugal">Portugal</option>
                                                            <option value="RO" label="Romania">Romania</option>
                                                            <option value="Russia" label="Russia">Russia</option>
                                                            <option value="SM" label="San Marino">San Marino</option>
                                                            <option value="RS" label="Serbia">Serbia</option>
                                                            <option value="CS" label="Serbia and Montenegro">Serbia and Montenegro</option>
                                                            <option value="SK" label="Slovakia">Slovakia</option>
                                                            <option value="SI" label="Slovenia">Slovenia</option>
                                                            <option value="Spain" label="Spain">Spain</option>
                                                            <option value="SJ" label="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                            <option value="Sweden" label="Sweden">Sweden</option>
                                                            <option value="CSwitzerland" label="Switzerland">Switzerland</option>
                                                            <option value="Ukraine" label="Ukraine">Ukraine</option>
                                                            <option value="Union of Soviet Socialist Republics" label="Union of Soviet Socialist Republics">Union of Soviet Socialist Republics</option>
                                                            <option value="United Kingdom" label="United Kingdom">United Kingdom</option>
                                                            <option value="VA" label="Vatican City">Vatican City</option>
                                                            <option value="AX" label="Åland Islands">Åland Islands</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-Oceania" label="Oceania">
                                                            <option value="AS" label="American Samoa">American Samoa</option>
                                                            <option value="AQ" label="Antarctica">Antarctica</option>
                                                            <option value="AU" label="Australia">Australia</option>
                                                            <option value="BV" label="Bouvet Island">Bouvet Island</option>
                                                            <option value="IO" label="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                            <option value="CX" label="Christmas Island">Christmas Island</option>
                                                            <option value="CC" label="Cocos [Keeling] Islands">Cocos [Keeling] Islands</option>
                                                            <option value="CK" label="Cook Islands">Cook Islands</option>
                                                            <option value="FJ" label="Fiji">Fiji</option>
                                                            <option value="PF" label="French Polynesia">French Polynesia</option>
                                                            <option value="TF" label="French Southern Territories">French Southern Territories</option>
                                                            <option value="GU" label="Guam">Guam</option>
                                                            <option value="HM" label="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                                            <option value="KI" label="Kiribati">Kiribati</option>
                                                            <option value="MH" label="Marshall Islands">Marshall Islands</option>
                                                            <option value="FM" label="Micronesia">Micronesia</option>
                                                            <option value="NR" label="Nauru">Nauru</option>
                                                            <option value="NC" label="New Caledonia">New Caledonia</option>
                                                            <option value="NZ" label="New Zealand">New Zealand</option>
                                                            <option value="NU" label="Niue">Niue</option>
                                                            <option value="NF" label="Norfolk Island">Norfolk Island</option>
                                                            <option value="MP" label="Northern Mariana Islands">Northern Mariana Islands</option>
                                                            <option value="PW" label="Palau">Palau</option>
                                                            <option value="PG" label="Papua New Guinea">Papua New Guinea</option>
                                                            <option value="PN" label="Pitcairn Islands">Pitcairn Islands</option>
                                                            <option value="WS" label="Samoa">Samoa</option>
                                                            <option value="SB" label="Solomon Islands">Solomon Islands</option>
                                                            <option value="GS" label="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                                            <option value="TK" label="Tokelau">Tokelau</option>
                                                            <option value="TO" label="Tonga">Tonga</option>
                                                            <option value="TV" label="Tuvalu">Tuvalu</option>
                                                            <option value="UM" label="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option>
                                                            <option value="VU" label="Vanuatu">Vanuatu</option>
                                                            <option value="WF" label="Wallis and Futuna">Wallis and Futuna</option>
                                                        </optgroup>
                                                    </select>
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="fas fa-unlock-alt"></i></label>
                                <input type="password" name="pass" id="pass" v-model="password" placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="fas fa-lock"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" v-model="password2" @blur="handleBlur"/>
                            </div>

                            <div class="form-group" >
                                <input type="file" @change="uploadFile" value="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" multiple style="border-bottom:none;">
                             </div>

                            <div class="form-group" >
                             <h6 id="h6"  style="color:red;visibility: hidden;margin-bottom: 10px;">Password Incorrect!</h6>
                             </div>
                                 <router-link to="/Signin">I am already a member</router-link>
                            <div class="form-group form-button">
                                <button  class="btn btn-danger btn-block w-75 my-4" type="submit"  style="background: brown;width: auto;padding: 15px 39px;" :disabled="!name.length || !email.length || !password.length || !phonenumber.length || !birthdate.length|| !country.length || (password!=password2)" >Register</button>

                            </div>

                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="sing up image"></figure>

                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
import swal from 'sweetalert2';
window.Swal = swal;

export default {

  name: 'Signup',

  data() {
    return {

        name:"",
        email:"",
        password:"",
        phonenumber:"",
        birthdate:"",
        country:"",
        password2:"",
        files: null
    };
  },

  methods: {

     uploadFile (event) {
        this.files = event.target.files;
        console.log(this.files)
        },

    async registerUser() {
      try {

        const formData = new FormData();

          for (const i of Object.keys(this.files)) {
            formData.append('files', this.files[i])
          }

          formData.append('name', this.name);
          formData.append('email',this.email);
          formData.append('password',this.password);
          formData.append('phonenumber',this.phonenumber);
          formData.append('birthdate', this.birthdate);
          formData.append('country',this.country);

        let response = await this.$http.post("/user/register", formData);
        console.log(response);
        let token = response.data.token;
        if (token) {
          this.$router.push("/Signin");
          swal("Success", "Registration Was successful", "success");
        } else {
          swal("Error", "Something Went Wrong", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    },
    handleBlur:function(){
        if (this.password!=this.password2){
            document.getElementById("re_pass").style.outline="none !important";
             document.getElementById("re_pass").style.borderBottom="3px solid red";
             document.getElementById("re_pass").style.boxShadow="0 0 10px #719ECE";
              document.getElementById("h6").style.visibility= "visible";
        }
        else{
             document.getElementById("re_pass").style.outline="none !important";
             document.getElementById("re_pass").style.borderBottom="3px solid green";
             document.getElementById("re_pass").style.boxShadow="0 0 10px #719ECE";
              document.getElementById("h6").style.visibility= "hidden";

        }
    }
  }
};
</script>


<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
/* @extend display-flex; */
display-flex, .display-flex, .display-flex-center, .signup-content, .signin-content, .social-login, .socials {
  display: flex;
  display: -webkit-flex; }
@keyframes shake {
  0%, 20%, 40%, 60%, 80% {
    transform: translateX(8px);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-8px);
  }
}

@keyframes glow-red {
  50% {
    border-color: indianred;
  }
}
/* @extend list-type-ulli; */
list-type-ulli, .socials {
  list-style-type: none;
  margin: 0;
  padding: 0; }

/* poppins-300 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;

  /* IE9 Compat Modes */

  /* Legacy iOS */ }
/* poppins-300italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 300;

  /* IE9 Compat Modes */

  /* Legacy iOS */ }
/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;

  /* IE9 Compat Modes */

  /* Legacy iOS */ }
/* poppins-italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 400;

  /* IE9 Compat Modes */

  /* Legacy iOS */ }
/* poppins-500 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;

  /* IE9 Compat Modes */

  /* Legacy iOS */ }
/* poppins-500italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 500;

  /* IE9 Compat Modes */

  /* Legacy iOS */ }
/* poppins-600 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;

  /* IE9 Compat Modes */

  /* Legacy iOS */ }
/* poppins-700 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;

  /* IE9 Compat Modes */

  /* Legacy iOS */ }
/* poppins-700italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 700;

  /* IE9 Compat Modes */

  /* Legacy iOS */ }
/* poppins-800 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  /* IE9 Compat Modes */
  /* Legacy iOS */ }
/* poppins-800italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 800;

  /* IE9 Compat Modes */

  /* Legacy iOS */ }
/* poppins-900 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 900;
  /* IE9 Compat Modes */
}
a:focus, a:active {
  text-decoration: none;
  outline: none;
  transition: all 300ms ease 0s;
  -moz-transition: all 300ms ease 0s;
  -webkit-transition: all 300ms ease 0s;
  -o-transition: all 300ms ease 0s;
  -ms-transition: all 300ms ease 0s; }

input, select, textarea {
  outline: none;
  appearance: unset !important;
  -moz-appearance: unset !important;
  -webkit-appearance: unset !important;
  -o-appearance: unset !important;
  -ms-appearance: unset !important; }

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
  appearance: none !important;
  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  -o-appearance: none !important;
  -ms-appearance: none !important;
  margin: 0; }

input:focus, select:focus, textarea:focus {
  outline: none;
  box-shadow: none !important;
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  -o-box-shadow: none !important;
  -ms-box-shadow: none !important; }

input[type=checkbox] {
  appearance: checkbox !important;
  -moz-appearance: checkbox !important;
  -webkit-appearance: checkbox !important;
  -o-appearance: checkbox !important;
  -ms-appearance: checkbox !important; }

input[type=radio] {
  appearance: radio !important;
  -moz-appearance: radio !important;
  -webkit-appearance: radio !important;
  -o-appearance: radio !important;
  -ms-appearance: radio !important; }

img {
  max-width: 100%;
  height: auto; }

figure {
  margin: 0; }

p {
  margin-bottom: 0px;
  font-size: 15px;
  color: #777; }

h2 {
  line-height: 1.66;
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #222;
  font-family: Poppins;
  font-size: 36px; }

.main {
  padding:250PX;

  }

.clear {
  clear: both; }

body {
  font-size: 13px;
  line-height: 1.8;
  color: #222;
  background: #f8f8f8;
  font-weight: 400;
  font-family: Poppins; }

.container {
  width: 900px;
  background: #fff;
  margin: 0 auto;
  box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -o-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -ms-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  -o-border-radius: 20px;
  -ms-border-radius: 20px; }

.display-flex {
  justify-content: space-between;
  -moz-justify-content: space-between;
  -webkit-justify-content: space-between;
  -o-justify-content: space-between;
  -ms-justify-content: space-between;
  align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  -o-align-items: center;
  -ms-align-items: center; }

.display-flex-center {
  justify-content: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -o-justify-content: center;
  -ms-justify-content: center;
  align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  -o-align-items: center;
  -ms-align-items: center; }

.position-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); }

.signup {
  margin-bottom: 150px; }

.signup-content {
  padding: 75px 0; }

.signup-form, .signup-image, .signin-form, .signin-image {
  width: 50%;
  overflow: hidden; }

.signup-image {
  margin: 0 55px; }

.form-title {
  margin-bottom: 33px; }

.signup-image {
  margin-top: 45px; }

figure {
  margin-bottom: 50px;
  text-align: center; }



/*.form-submit {
  display: inline-block;
  background: brown;
  color: #fff;
  border-bottom: none;
  width: auto;
  padding: 15px 39px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  margin-top: 25px;
  cursor: pointer; }*/


#signin {
  margin-top: 16px; }

.signup-image-link {
  font-size: 14px;
  color: #222;
  display: block;
  text-align: center; }

.term-service {
  font-size: 13px;
  color: #222; }

.signup-form {
  margin-left: 75px;
  margin-right: 75px;
  padding-left: 34px; }

.register-form {
  width: 100%; }

.form-group {
  position: relative;
  margin-bottom: 25px;
  overflow: hidden; }
  .form-group:last-child {
    margin-bottom: 0px; }

input {
  width: 100%;
  display: block;
  border: none;
  border-bottom: 1px solid #999;
  padding: 6px 30px;
  font-family: Poppins;
  box-sizing: border-box; }
  input::-webkit-input-placeholder {
    color: #999; }
  input::-moz-placeholder {
    color: #999; }
  input:-ms-input-placeholder {
    color: #999; }
  input:-moz-placeholder {
    color: #999; }
  input:focus {
    border-bottom: 1px solid #222; }
    input:focus::-webkit-input-placeholder {
      color: #222; }
    input:focus::-moz-placeholder {
      color: #222; }
    input:focus:-ms-input-placeholder {
      color: #222; }
    input:focus:-moz-placeholder {
      color: #222; }

input[type=checkbox]:not(old) {
  width: 2em;
  margin: 0;
  padding: 0;
  font-size: 1em;
  display: none; }

input[type=checkbox]:not(old) + label {
  display: inline-block;
  line-height: 1.5em;
  margin-top: 6px; }





input[type=checkbox]:not(old) + label > span {
  display: inline-block;
  width: 13px;
  height: 13px;
  margin-right: 15px;
  margin-bottom: 3px;
  border: 1px solid #999;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  -o-border-radius: 2px;
  -ms-border-radius: 2px;
  background: white;
  background-image: -moz-linear-gradient(white, white);
  background-image: -ms-linear-gradient(white, white);
  background-image: -o-linear-gradient(white, white);
  background-image: -webkit-linear-gradient(white, white);
  background-image: linear-gradient(white, white);
  vertical-align: bottom; }

input[type=checkbox]:not(old):checked + label > span {
  background-image: -moz-linear-gradient(white, white);
  background-image: -ms-linear-gradient(white, white);
  background-image: -o-linear-gradient(white, white);
  background-image: -webkit-linear-gradient(white, white);
  background-image: linear-gradient(white, white); }

input[type=checkbox]:not(old):checked + label > span:before {
  content: '\f26b';
  display: block;
  color: #222;
  font-size: 11px;
  line-height: 1.2;
  text-align: center;
  font-family: 'Material-Design-Iconic-Font';
  font-weight: bold; }

.agree-term {
  display: inline-block;
  width: auto; }

label {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  color: #222; }

.label-has-error {
  top: 22%; }

label.error {
  position: relative;
  background-position-y: 3px;
  padding-left: 20px;
  display: block;
  margin-top: 20px; }

label.valid {
  display: block;
  position: absolute;
  right: 0;
  left: auto;
  margin-top: -6px;
  width: 20px;
  height: 20px;
  background: transparent; }
  label.valid:after {
    font-family: 'Material-Design-Iconic-Font';
    content: '\f269';
    width: 100%;
    height: 100%;
    position: absolute;
    /* right: 0; */
    font-size: 16px;
    color: green; }

.label-agree-term {
  position: relative;
  top: 0%;
  transform: translateY(0);
  -moz-transform: translateY(0);
  -webkit-transform: translateY(0);
  -o-transform: translateY(0);
  -ms-transform: translateY(0); }

.material-icons-name {
  font-size: 18px; }

.signin-content {
  padding-top: 67px;
  padding-bottom: 87px; }

.social-login {
  align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  -o-align-items: center;
  -ms-align-items: center;
  margin-top: 80px; }

.social-label {
  display: inline-block;
  margin-right: 15px; }

.socials li {
  padding: 5px; }
  .socials li:last-child {
    margin-right: 0px; }
  .socials li a {
    text-decoration: none; }
    .socials li a i {
      width: 30px;
      height: 30px;
      color: #fff;
      font-size: 14px;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      -o-border-radius: 5px;
      -ms-border-radius: 5px;
      transform: translateZ(0);
      -moz-transform: translateZ(0);
      -webkit-transform: translateZ(0);
      -o-transform: translateZ(0);
      -ms-transform: translateZ(0);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out; }
  .socials li:hover a i {
    -webkit-transform: scale(1.3) translateZ(0);
    transform: scale(1.3) translateZ(0); }



.signin-form {
  margin-right: 90px;
  margin-left: 80px; }

.signin-image {
  margin-left: 110px;
  margin-right: 20px;
  margin-top: 10px; }

@media screen and (max-width: 1200px) {
  .container {
    width: calc( 100% - 30px);
    max-width: 100%; } }
@media screen and (min-width: 1024px) {
  .container {
    max-width: 1200px; } }
@media screen and (max-width: 768px) {
  .signup-content, .signin-content {
    flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    -o-justify-content: center;
    -ms-justify-content: center; }

  .signup-form {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0px;
    /* box-sizing: border-box; */
    padding: 0 30px; }

  .signin-image {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 50px;
    order: 2;
    -moz-order: 2;
    -webkit-order: 2;
    -o-order: 2;
    -ms-order: 2; }

  .signup-form, .signup-image, .signin-form, .signin-image {
    width: auto; }

  .social-login {
    justify-content: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    -o-justify-content: center;
    -ms-justify-content: center; }

  .form-button {
    text-align: center; }

  .signin-form {
    order: 1;
    -moz-order: 1;
    -webkit-order: 1;
    -o-order: 1;
    -ms-order: 1;
    margin-right: 0px;
    margin-left: 0px;
    padding: 0 30px; }

  .form-title {
    text-align: center; } }
@media screen and (max-width: 400px) {
  .social-login {
    flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column; }

  .social-label {
    margin-right: 0px;
    margin-bottom: 10px; } }



</style>
