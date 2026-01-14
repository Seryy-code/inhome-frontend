export default function TextInput({ id, name, label, type = "text", required = false, value, onChange }) {
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                id={id}
                name={name}
                type={type}
                required={required}
                value={value}
                onChange={onChange}
                className="rounded border border-gray-300 px-3 py-2 focus:border-[#1F1918] focus:outline-none focus:ring-1 focus:ring-[#1F1918]"
            />
        </div>
    );
}
