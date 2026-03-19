import Card from "@/components/atoms/Card";
import Text from "@/components/atoms/Text";
import Badge from "@/components/atoms/Badge";

export default function ExpenseItem({ title, amount, category }) {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div>
          <Text className="font-semibold">{title}</Text>

          <Text className="text-sm text-gray-500">${amount}</Text>
        </div>

        <Badge>{category}</Badge>
      </div>
    </Card>
  );
}
