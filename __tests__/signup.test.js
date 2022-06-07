/**
 * @jest-environment jsdom
 */

jest.mock('../views/signUp.ejs')
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

const {validatePassword, comparePasswords} = require('../public/signup.js')


describe('Password Validation:', () => {
    test('Password cannot be smaller than 8 characters', () => {
      expect(validatePassword('')).toBe(false);
      expect(validatePassword('av')).toBe(false);
      expect(validatePassword('1234567')).toBe(false);
      expect(validatePassword('123 456')).toBe(false);
      expect(validatePassword('Password')).toBe(true);
      expect(validatePassword('Thisisalongerpassword')).toBe(true);
    });

    test('Password cannot be larger than 99 characters', () => {
        expect(validatePassword('Password')).toBe(true);
        expect(validatePassword('Thisisalongerpassword')).toBe(true);
        expect(validatePassword('P123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789')).toBe(false);
        expect(validatePassword('P12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678')).toBe(true);
        expect(validatePassword('P1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789')).toBe(false);
      });
  });

  describe('Password Comparison:', () => {
    test('Two equal passwords are the same', () => {
      expect(comparePasswords('Password','Password')).toBe(true);
      expect(comparePasswords('Thisisalongerpassword', 'Thisisalongerpassword')).toBe(true);
      expect(comparePasswords('1234567','1234567')).toBe(true);
      expect(comparePasswords('123 456','123 456')).toBe(true);
    });

    test('Two different passwords are not the same', () => {
        expect(comparePasswords('1234567890','1234567891')).toBe(false);
        expect(comparePasswords('2234567890','1234567890')).toBe(false);
        expect(comparePasswords('iamatestpassword','iamatestpasswordalso')).toBe(false);
        expect(comparePasswords('iamatestpassword','')).toBe(false);
        expect(comparePasswords('1234567890','iamatestpassword')).toBe(false);
        expect(comparePasswords('123  456','123 456')).toBe(false);
      });
  });

