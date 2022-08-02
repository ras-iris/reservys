import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type TextInputProps = {
  id: string;
  label: string;
  type: "text" | "number" | 'password' | 'email';
  value: any,
  setValue: Function,
  required?: boolean
};

const TextInput = ({ id, label, type, value, setValue, required }: TextInputProps) => {
  const [focus, setFocus] = useState(value === '' ? false : true)
  const [showPwd, setShowPwd] = useState(false)

  return (
    <div className="input-box">
      <input
        type={type === "password" ? (showPwd ? 'text' : 'password') : type}
        id={id}
        name={id}
        onFocus={() =>
          setFocus(true)
        }
        onBlur={(e) => {
          if (!e.target.value) {
            setFocus(false)
          }
        }}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        required={required}
      />
      <label htmlFor={id} className={focus ? 'focused' : ''} >{label}</label>
      {
        // When type is password
        type === 'password' ?
          (
            <button
              className='eye'
              type='button'
              onClick={() => setShowPwd(!showPwd)}
            >
              {
                showPwd ?
                  <FaEyeSlash />
                  : <FaEye />
              }
            </button>
          )
          : ''
      }
    </div>
  )
}

export default TextInput