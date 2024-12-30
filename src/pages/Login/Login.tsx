import { useState } from "react";
import styles from "../../styles/login.module.css";
import logo from "../../assets/logo.png";
import InputCustomForm from "../../components/InputCustomForm";
import ButtonCustom from "../../components/ButtonCustom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { error, handlerSubmit } = useLogin();
  return (
    <main>
      <section className={styles.mainContainer}>
        <div>
          <div className={styles.logoContainer}>
            <h1>Iniciar</h1>
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
          <form onSubmit={handlerSubmit}>
            <InputCustomForm
              label="Usuario"
              name="username"
              id="username"
              type="text"
            />
            <div className={styles.passContainer}>
              <InputCustomForm
                label="Contraseña"
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
              />
              <div className={styles.showPass}>
                <input
                  type="checkbox"
                  name="showPass"
                  id="showPass"
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label htmlFor="showPass">Ver</label>
              </div>
            </div>
            <div className={styles.recoveryPass}>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            {error.status && (
              <p className={styles.labelError}>{error.message}</p>
            )}
            <ButtonCustom
              label="Iniciar sesión"
              type="submit"
              disabled={false}
              className={styles.button}
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
