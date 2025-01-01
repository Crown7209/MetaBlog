export const Toggle = ({ handleChange  }) => {
    return (
        <div className="absolute z-[2] hidden">
            <input type="checkbox" id="check" onChange={handleChange} />
        </div>
    )
}