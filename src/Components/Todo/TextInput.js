import React from "react";

export default function TextInput({
  label = "",
  type = "",
  id = "",
  placeholder = "",
  value = "",
  onChange = (e) => {},
  disabled = false,
}) {
  return (<section> 
    <div class="mb-3 text-start">
      <label for={id} class="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control input-border"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      </div>
    </section>
  );
}