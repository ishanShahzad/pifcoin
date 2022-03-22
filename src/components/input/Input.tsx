interface Iprops {
  placeholder: string;
  className?: string;
  type?: string;
  icon?: string;
  styles?:string;
}

const Input = ({ placeholder, className, type, icon,styles }: Iprops) => {
  return (
    <div className={`${styles} relative px-5 border py-4 border-primary rounded-lg text-offwhite`}>
      {icon ? <i className={`${icon} absolute opacity-75`}></i> : ""}
      <input
        placeholder={placeholder}
        type={type ? type : "text"}
        className={`input-text ${className}  bg-transparent  text-base  w-full  outline-none`}
        required
      />
    </div>
  );
};

export default Input;
