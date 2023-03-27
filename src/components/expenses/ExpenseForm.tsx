import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { categories } from "../../common/categories";

const schema = z.object({
  description: z.string(),
  amount: z.number().min(0).max(100_000),
  category: z.enum(categories),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

// interface FormData {
//   description: string;
//   amount: number;
//   categories: string;
// }

export const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  <button className="btn btn-success">Submit</button>;
  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register("description")}
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount">Amount</label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
      </div>
      {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      <div className="mb-3">
        <label htmlFor="categories">categories</label>
        <select className="form-select" {...register("category")}>
          <option value=""></option>
          {categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      <div className="mb-4">
        <button className="btn btn-success">Submit</button>
      </div>
    </form>
  );
};
