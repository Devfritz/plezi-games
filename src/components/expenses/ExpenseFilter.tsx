interface Props {
  onSelected: (category: string) => void;
}

const ExpenseFilter = ({ onSelected }: Props) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        onChange={(e) => onSelected(e.target.value)}
      >
        <option value="">All</option>
        <option value="food">food</option>
        <option value="business">business</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
