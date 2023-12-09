
export default function InputGroup({labelName, id, value = 0, onChangeInvestment})
{
    return (
        <div >
            <label htmlFor={id}>{labelName}</label>
            <input
                id={id}
                type="number"
                value={value}
                onChange={onChangeInvestment}
            />
        </div>
    );
}