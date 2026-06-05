function InputField({
  label,
  name,
  register,
  errors,
  rules,
  type,
  placeholder,
  inputClass = "w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors",
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5"
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        id={name}
        className={inputClass}
      />

      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </div>
  );
}

export default InputField;
