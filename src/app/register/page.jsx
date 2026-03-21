import AuthLayout from "@/layouts/AuthLayout";
import RegisterForm from "@/components/organisms/RegisterForm";

export default function Register() {
  return(
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}