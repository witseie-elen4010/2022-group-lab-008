/**
 * @jest-environment jsdom
 */

jest.mock('../views/signup.ejs')
document.body.innerHTML =`
<body>
    <div class="container">
        <div class="row mt-4 text-center">
            <h1 class = "display-4">Register</h1>
        </div>
    </div>
        <div class="row mt-4 text-center justify-content-center">
            <div class = "col-4" >
                New Username
            </div>
        </div>
        <div class="row mt-4 text-center justify-content-center">
            <div class = "col-4" >
                <input type = "Username" name = "username" id="name" />
            </div>
        </div>
        <div class="row mt-4 text-center justify-content-center">
            <div class = "col-4" >
                New Password
            </div>
        </div>
        <div class="row mt-4 text-center justify-content-center">
            <div class = "col-4" >
                <input type = "password" name = "password" id="password"/>
            </div>
        </div>
        <div class="row mt-4 text-center justify-content-center">
            <div class = "col-4" >
                Confirm Password
            </div>
        </div>
        <div class="row mt-4 text-center justify-content-center">
            <div class = "col-4" >
                <input type = "password" name = "confirmPassword" id="confirmPassword"/>
            </div>
        </div>
        <div class="row mt-4 text-center justify-content-center">
            <div class = "col-4" >
                <button class="btn btn-primary">Submit</button>
            </div>
        </div>
        <script type="module" src="../public/signup.js"></script>
</body>
`

const {validatePassword, comparePasswords, validateUsername} = require('../public/signup.js')


describe('Password Validation:', () => {
    test('Password cannot be smaller than 8 characters', () => {
      expect(validatePassword('')).toBe(false);
      expect(validatePassword('av')).toBe(false);
      expect(validatePassword('1234567')).toBe(false);
      expect(validatePassword('123 456')).toBe(false);
      expect(validatePassword('password')).toBe(true);
      expect(validatePassword('Thisisalongerpassword')).toBe(true);
    });

    test('Password cannot be larger than 99 characters', () => {
        expect(validatePassword('password')).toBe(true);
        expect(validatePassword('Thisisalongerpassword')).toBe(true);
        expect(validatePassword('0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789')).toBe(false);
        expect(validatePassword('012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678')).toBe(true);
        expect(validatePassword('01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789')).toBe(false);
      });
  });

