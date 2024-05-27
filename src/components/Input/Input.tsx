import {
  ChangeEvent,
  KeyboardEvent,
  forwardRef,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import classNames from "classnames";

interface InputProps {
  label?: string;
  required: boolean;
  type?: string;
  name?: string;
  customClass: string;
  customAsterisk?: string;
  containerCustomClass?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyUpChange?: (event: KeyboardEvent<HTMLInputElement>) => void;
  tabIndex?: number;
  customLabelClass?: string;
  placeholder?: string;
  animation?: boolean;
  maxlength?: number;
  errorInput?: boolean;
  dose?: string[];
  showDose?: boolean;
  style?: string;
  iconUrl?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  mcgOrMgChange?: (state: string) => void;
  doseEvent?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      required,
      type,
      name,
      customClass,
      value,
      onChange,
      onKeyUpChange,
      tabIndex,
      containerCustomClass,
      customAsterisk,
      customLabelClass,
      placeholder,
      animation,
      maxlength,
      errorInput,
      onKeyDown,
      dose,
      showDose,
      mcgOrMgChange,
      doseEvent,
      style,
      iconUrl,
    },
    ref
  ) => {
    const [animationElement, setAnimationElement] = useState("animate-typing");
    const [animationSeccondElement, setSeccondAnimationElement] =
      useState(false);
    const [mcgOrMg, setMcgOrMg] = useState("mcg");

    useEffect(() => {
      setTimeout(() => {
        setAnimationElement("animate-reverse-typing");
      }, 2000);
    }, [animation]);
    useEffect(() => {
      setTimeout(() => {
        setSeccondAnimationElement(true);
      }, 2500);
    }, [animationElement]);
    const changeMcgMg = (dos: string) => {
      if (mcgOrMgChange) {
        setMcgOrMg(dos);
        mcgOrMgChange(dos);
      }
    };

    return (
      <div className={`relative ${containerCustomClass}`}>
        {/* Default label for rest of the inputs in app*/}
        {!animation && !showDose && (
          <label
            className={`font-D16px-M14px pointer-events-none absolute max-h-[52px] w-[100%] overflow-hidden whitespace-nowrap pl-[16px] pt-[15px] text-gray2 ${customLabelClass}`}
            htmlFor={name}
            style={{ opacity: value ? 0 : 1 }}
          >
            {label}
            {/*  If input is required show red (*) */}
            {required && (
              <span className={`text-red ${customAsterisk}`}>*</span>
            )}
          </label>
        )}
        {/*  Label with select options for dose (Mcg or Mg) in calculator */}
        {showDose && (
          <div className=" absolute right-[5px] flex gap-[3px] pl-[16px] pt-[7px]">
            {dose?.map((dos, index) => (
              <label
                key={index}
                className={`font-D16px-M14px text-gray3 relative top-[3px] flex h-[18px] w-[100%] cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap bg-lightgray px-[6px]  text-[11px] ${customLabelClass}`}
                htmlFor={`${name}-${index}`}
                style={{
                  background: dos === mcgOrMg ? "#F4FAFF" : "#F8F8F8",
                  color: dos === mcgOrMg ? "#3D9BE9" : "",
                }}
                onClick={() => changeMcgMg(dos)}
              >
                {dos}
              </label>
            ))}
          </div>
        )}
        {/* Label with animation for input in the search bar in header */}
        {animation && (
          <div>
            <label
              style={{ opacity: value ? 0 : 1 }}
              className={`pointer-events-none absolute max-h-[52px] w-[100%] overflow-hidden whitespace-nowrap  pt-[5px] text-gray2 ${animationElement}`}
            >
              Peptide
            </label>
            {animationSeccondElement && (
              <label
                style={{ opacity: value ? 0 : 1 }}
                className={`pointer-events-none absolute max-h-[52px] w-[100%] animate-typingSeecondInputText overflow-hidden whitespace-nowrap  pt-[5px] text-gray2 `}
              >
                {label}
              </label>
            )}
          </div>
        )}

        <input
          ref={ref}
          required={required}
          tabIndex={tabIndex}
          type={type ? type : "text"}
          name={name}
          onKeyUp={onKeyUpChange}
          placeholder={placeholder}
          onChange={(event) => {
            !showDose ? onChange(event) : doseEvent && doseEvent(event);
          }}
          value={value}
          id={name}
          style={{ width: style, transition: "all 0.3s" }}
          onKeyDown={onKeyDown}
          maxLength={maxlength}
          className={classNames({
            "rounded-[15px] placeholder-black font-16px-ALL h-[52px] px-[16px] py-[14px] outline-0 w-full transition-all ease-linear bg-lightgray":
              true,
            [customClass]: true,
            "border border-red": errorInput,
          })}
        />
        {errorInput && (
          <div className="font-12px-ALL my-[4px] text-red">
            Field is required
          </div>
        )}
        {iconUrl && (
          <div className="absolute right-0 top-[50%] translate-y-[-50%]">
            <Image
              src={`/images/${iconUrl}.svg`}
              alt={iconUrl}
              width={24}
              height={24}
            />{" "}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
