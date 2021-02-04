import './App.css';
import './styles/styles.styl';
import {LoginForm} from './components/';

function App() {
  return (
    <div class="content">
         <div class="content-inner">
            <LoginForm />
         </div>
    </div>
    // <div class="content">
    //     <div class="content-inner">
    //         <div class="login-form">
    //             <div class="login-form__content">
    //                 <div class="login-form__header">
    //                     <h2 class="login-form__name">Sign in</h2>
    //                 </div>
    //                 <div class="login-form__fields">
    //                     <div class="labeled-input">
    //                         <label class="labeled-input__label">Email</label>
    //                         <input class="labeled-input__input" />
    //                     </div>
    //                     <div class="labeled-input">
    //                         <label class="labeled-input__label">Password</label>
    //                         <input class="labeled-input__input" type="password" />
    //                     </div>
    //                     <div class="labeled-checkbox">
    //                         <input class="labeled-checkbox__box" type="checkbox" id="remember" />
    //                         <label class="labeled-checkbox__label" for="remember">Remember me?</label>
    //                     </div>
    //                     <div class="login-form__actions">
    //                         <button class="login-form__signin-button">Sign in</button>
    //                     </div>
    //                 </div>
    //                 <div class="login-form__footer">
    //                     <div class="centered-text-block">
    //                         <a class="link" href="#">Forgot your password?</a>
    //                     </div>
    //                     <div class="centered-text-block">
    //                         <span class="standard-info">
    //                             Don't have an account <a class="link" href="#">Sign up</a>
    //                         </span>
    //                     </div>
    //                     <div class="centered-text-block">
    //                         <a class="link" href="#">Resend email-conformation</a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
}

export default App;
