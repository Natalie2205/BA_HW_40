import { useState } from "react";

export const PasswordInput = () => {
  // true — пароль видно, false — пароль приховано зірочками
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Введіть пароль"
      />

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "👁️ Приховати" : "👁️ Показати"}
      </button>
    </div>
  );
};

export default PasswordInput;
