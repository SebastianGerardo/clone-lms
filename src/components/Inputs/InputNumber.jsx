import useInputNumber from "../../hooks/useInputNumber";

export const InputBasicNumber = ({
    pHolder,
    data = "",
    labelName,
    onChange,
    name,
    required = false,
    disabled = false,
  }) => {
    
    const { handleKeyDown } = useInputNumber()

    return (
      <div className="w-full">
        <label className="flex flex-col gap-y-1">
        <span className="block text-sm font-medium text-gray-400">
            {labelName}
        </span>
        <input 
        onChange={onChange}
        onKeyDown={handleKeyDown}
        value={data} 
        disabled={disabled} 
        required={required}
        type="text" 
        name={name} 
        placeholder={pHolder} 
        className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500" 
        />
        </label>
      </div>
    );
  };